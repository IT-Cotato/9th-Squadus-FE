import 'package:flutter/material.dart';
import 'package:squadus/screen/home_screen.dart';
import 'package:squadus/screen/sign_in_screen.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:kakao_flutter_sdk_common/kakao_flutter_sdk_common.dart';


void main() {
  // runApp() 호출 전 Flutter SDK 초기화
  KakaoSdk.init(
    nativeAppKey: "9a80e6ad2553c99dd8d0dbe467a9bf0c",
  );

  // runApp() 호출 전 google 세팅
    const List<String> scopes = <String>[
    'email',
    'https://www.googleapis.com/auth/contacts.readonly',
  ];

  GoogleSignIn _googleSignIn = GoogleSignIn(
    scopes: scopes,
  );

  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SignIn(googleSignIn: _googleSignIn),
    ),
  );

  runApp(MyApp());
}
