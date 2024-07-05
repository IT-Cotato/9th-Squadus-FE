import 'package:flutter/material.dart';
import '../model/notice.dart';

class NoticeList extends StatelessWidget {
  final int id;
  final String noticeTitle;
  final String date;
  final bool isRead;

  const NoticeList({
    Key? key,
    required this.id,
    required this.noticeTitle,
    required this.date,
    required this.isRead,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 20.0),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: Color(0xFF000000).withOpacity(0.05),
            width: 1.0,
          )
        )
      ),
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
              ),
              if (isRead)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 2.0),
                  decoration: BoxDecoration(
                    color: Color(0xFF6A56FE),
                    borderRadius: BorderRadius.circular(4.0),
                  ),
                  child: Text(
                    'N',
                    style: TextStyle(
                      color: Color(0xFFFFFFFF),
                      fontSize: 12,
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
