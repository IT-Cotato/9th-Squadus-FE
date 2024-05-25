import 'package:flutter/material.dart';

class RecruitmentCard extends StatelessWidget {
  final String recruitmentTitle;
  final String location;
  final int tier;
  final int currentMemberCount;
  final int totalMemberCount;

  const RecruitmentCard({
    required this.recruitmentTitle,
    required this.location,
    required this.tier,
    required this.currentMemberCount,
    required this.totalMemberCount,
    super.key
});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: 116.0,
      padding: EdgeInsets.symmetric(vertical: 16.0, horizontal: 20.0),
      margin: EdgeInsets.symmetric(vertical: 2.0),
      decoration: BoxDecoration(
          color: Color(0xFF7E77FF),
          borderRadius: BorderRadius.all(Radius.circular(20))
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            recruitmentTitle,
            style: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 4.0),
          Text(
            location,
            style: TextStyle(
              color: Colors.white,
              fontSize: 12,
              fontWeight: FontWeight.normal,
            ),
          ),
          SizedBox(height: 4.0),
          Row(
            children: [
              Spacer(),
              Container(
                width: 160.0,
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          '티어 $tier 이상',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 12,
                          ),
                        ),
                        Text(
                          '$currentMemberCount/$totalMemberCount',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 4.0),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(4),
                      child: LinearProgressIndicator(
                        value: currentMemberCount / totalMemberCount,
                        backgroundColor: Colors.white54,
                        valueColor: AlwaysStoppedAnimation<Color>(Color(0xFF29F26D)),
                        minHeight: 8,
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),

        ],
      ),
    );
  }
}
