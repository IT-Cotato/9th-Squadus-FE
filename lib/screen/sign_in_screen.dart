import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';


class SignIn extends StatelessWidget {
  final GoogleSignIn googleSignIn;
  const SignIn({required this.googleSignIn, Key? key}) : super(key: key);

  Future<void> _handleSignIn() async {
    try {
      await googleSignIn.signIn();
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
