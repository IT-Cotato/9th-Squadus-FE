import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ScheduleComponent extends StatelessWidget {
  final int startTime;
  final int endTime;
  final String title;
  final String location;
  const ScheduleComponent(
      {super.key,
      required this.startTime,
      required this.endTime,
      required this.title,
      required this.location});

  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width,
        height: 95.0,
        padding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 20.0),
        margin: EdgeInsets.symmetric(vertical: 8.0),
        decoration: BoxDecoration(
            color: Color(0xFF7E77FF),
            borderRadius: BorderRadius.all(Radius.circular(20))),
        child: Row(children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '${startTime}:00',
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
              Text(
                '~${endTime}:00',
                style: TextStyle(fontSize: 16, color: Color(0xffC2C6FF)),
              )
            ],
          ),
          SizedBox(width: 40),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),
              Text(
                location,
                style: TextStyle(fontSize: 16, color: Color(0xffC2C6FF)),
              )
            ],
          )
        ]));
  }
}
