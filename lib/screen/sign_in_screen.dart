import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter/services.dart';
import 'package:kakao_flutter_sdk/kakao_flutter_sdk.dart';

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

        // 받은 토큰을 사용하여 Firebase에 로그인
        OAuthCredential credential = GoogleAuthProvider.credential(
          accessToken: googleSignInAuthentication.accessToken,
          idToken: googleSignInAuthentication.idToken,
        );
        UserCredential userCredential =
            await FirebaseAuth.instance.signInWithCredential(credential);
        User user = userCredential.user!;
      }
    } catch (error) {
      print(error);
    }
  }

  @override
  Widget build(BuildContext context) {
    Future<void> performKakaoLogin() async {
      try {
        if (await isKakaoTalkInstalled()) {
          // 카카오톡 로그인 시도
          try {
            OAuthToken token = await UserApi.instance.loginWithKakaoTalk();
            print('카카오톡으로 로그인 성공');
            print('카카오톡 로그인 토큰: $token');
          } catch (error) {
            print('카카오톡으로 로그인 실패: $error');

            // 로그인 취소의 경우
            if (error is PlatformException && error.code == 'CANCELED') {
              print('로그인 취소됨');
              return;
            }

            // 카카오계정으로 로그인
            try {
              OAuthToken token = await UserApi.instance.loginWithKakaoAccount();
              print('카카오계정으로 로그인 성공');
              print('카카오계정 로그인 토큰: $token');
            } catch (error) {
              print('카카오계정으로 로그인 실패: $error');
            }
          }
        } else {
          // 카카오톡이 설치되지 않은 경우 카카오계정으로 로그인
          try {
            print('카카오계정으로 로그인 시도');
            OAuthToken token = await UserApi.instance.loginWithKakaoAccount();
            print('카카오계정으로 로그인 성공');
            print('카카오계정 로그인 토큰: $token');
          } catch (error) {
            print('카카오계정으로 로그인 실패 $error');
          }
        }
      } catch (e) {
        print('카카오 로그인 중 오류 발생: $e');
      }
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Sign In'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: performKakaoLogin,
              child: const Text('카카오 로그인'),
            ),
            ElevatedButton(
              onPressed: _handleSignIn,
              child: Text('구글 로그인'),
            ),
          ],
        ),
      ),
    );
  }
}

