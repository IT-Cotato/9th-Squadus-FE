import 'package:flutter/material.dart';
import 'package:squadus/screen/home_screen.dart';
import 'package:squadus/screen/sign_in_screen.dart';
import 'package:google_sign_in/google_sign_in.dart';

void main() {
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
}
