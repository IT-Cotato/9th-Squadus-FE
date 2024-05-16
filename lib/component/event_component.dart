import 'package:flutter/material.dart';

class MainEvent extends StatelessWidget {
  final String startTime;
  final String endTime;
  final String title;
  const MainEvent({
    required this.startTime,
    required this.endTime,
    required this.title,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 120,
      decoration: BoxDecoration(
          color: Colors.lightBlueAccent,
          borderRadius: BorderRadius.all(Radius.circular(20))),
      child: Row(
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("$startTime"),
              Text("~"),
              Text("$endTime"),
            ],
          ),
          Center(child: Text("$title")),
        ],
      ),
    );
  }
}
