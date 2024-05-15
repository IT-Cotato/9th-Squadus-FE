import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';

class SignIn extends StatelessWidget {
  final GoogleSignIn googleSignIn;
  const SignIn({required this.googleSignIn, Key? key}) : super(key: key);

  Future<void> _handleSignIn() async {
    try {
      // Google 로그인
      GoogleSignInAccount? googleSignInAccount = await googleSignIn.signIn();
      if (googleSignInAccount != null) {
        GoogleSignInAuthentication googleSignInAuthentication =
            await googleSignInAccount.authentication;
        print('\n');
        print("------");
        print('name = ${googleSignInAccount.displayName}');
        print('email = ${googleSignInAccount.email}');
        print('id = ${googleSignInAccount.id}');
        print("Access Token: ${googleSignInAuthentication.accessToken}");
        print("ID Token: ${googleSignInAuthentication.idToken}");
        print("------");
        print('\n');

        // // 받은 토큰을 사용하여 Firebase에 로그인
        // OAuthCredential credential = GoogleAuthProvider.credential(
        //   accessToken: googleSignInAuthentication.accessToken,
        //   idToken: googleSignInAuthentication.idToken,
        // );
        // UserCredential userCredential =
        //     await FirebaseAuth.instance.signInWithCredential(credential);
        // User user = userCredential.user!;
      }
    } catch (error) {
      print(error);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: _handleSignIn,
          child: Text('구글 로그인'),
        ),
      ),
    );
  }
}
