import 'package:flutter/material.dart';
import '../model/notice.dart';

class NoticeList extends StatelessWidget {
  final int id;
  final String noticeTitle;
  final String date;
  final bool isNew;

  const NoticeList({
    Key? key,
    required this.id,
    required this.noticeTitle,
    required this.date,
    required this.isNew,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  noticeTitle,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              )
            ],
          ),
          SizedBox(height: 4),
          Text(
            date,
            style: TextStyle(
              fontSize: 12,
              color: Color(0xFF98A2B3)
            ),
          )
        ],

      )
    );
  }
}
