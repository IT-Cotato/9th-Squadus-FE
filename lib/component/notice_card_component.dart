import 'package:flutter/material.dart';

class MainNoticeCard extends StatelessWidget {
  final String noticeTitle;
  final String noticeContent;
  final bool isRead;

  const MainNoticeCard({
    required this.noticeTitle,
    required this.noticeContent,
    required this.isRead,
    super.key
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 80.0,
      padding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 20.0),
      margin: EdgeInsets.symmetric(vertical: 4.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12.0),
        boxShadow: [
          BoxShadow(
            color: Color(0xFF555BA0).withOpacity(0.23),
            spreadRadius: 0,
            blurRadius: 10,
            offset: Offset(0, 2), // changes position of shadow
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                noticeTitle,
                style: TextStyle(
                  color: Color(0xFF010E57),
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Spacer(),
              if (isRead)
                Container(
                  width: 12.0,
                  height: 12.0,
                  decoration: BoxDecoration(
                    color: Color(0xFF04CD6D),
                    shape: BoxShape.circle,
                  ),
                )
            ],
          ),
          SizedBox(height: 4.0),
          Text(
            noticeContent,
            style: TextStyle(
              color: Color(0xFF010E57),
              fontSize: 12,
              fontWeight: FontWeight.normal,
            ),
          ),
        ],
      ),
    );
  }
}