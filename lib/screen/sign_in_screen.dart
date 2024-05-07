import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:kakao_flutter_sdk/kakao_flutter_sdk.dart';

class SignIn extends StatelessWidget {
  const SignIn({super.key});

  @override
  Widget build(BuildContext context) {
    // 카카오 로그인 로직을 수행하는 함수
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
        child: ElevatedButton(
          onPressed: performKakaoLogin,
          child: const Text('카카오 로그인'),
        ),
      ),
    );
  }
}
