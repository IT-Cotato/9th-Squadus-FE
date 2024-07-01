import 'package:flutter/material.dart';
import '../component/schedule_component.dart';

class TagComponent extends StatelessWidget {
  const TagComponent({super.key, required this.text});
  final String text;
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 12, left: 6, right: 4),
      child: Padding(
        padding: EdgeInsets.all(6),
        child: Text(text, style: TextStyle(color: Color(0xff5D38F3))),
      ),
      decoration: BoxDecoration(
          color: Color(0xffEDEEFF), borderRadius: BorderRadius.circular(4)),
    );
  }
}

class PageGroup extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 2000,
        child: Padding(
          padding: EdgeInsets.all(20), // 디자인 변경에 따른 수정
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(" 기본정보 일정 공지 회비"),
              SizedBox(height: 30),
              Container(
                height: 180,
                decoration: BoxDecoration(
                    color: Colors.grey,
                    border: Border.all(color: Colors.black),
                    borderRadius: BorderRadius.circular(10)),
              ),
              Row(
                children: [
                  TagComponent(text: "서울"),
                  TagComponent(text: "배드민턴"),
                  TagComponent(text: "모두 환영"),
                ],
              ),
              SizedBox(height: 20),
              Container(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "중앙 가르드",
                      style: TextStyle(fontSize: 30),
                    ),
                    SizedBox(height: 10),
                    Text("인원       32/40"),
                    Text("설립일    2023.09.01"),
                  ],
                ),
              ),
              SizedBox(height: 30),
              Container(
                decoration: BoxDecoration(
                    color: Color(0xffF9FAFB),
                    borderRadius: BorderRadius.circular(10)),
                padding: EdgeInsets.all(15),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "티어 정보",
                      style: TextStyle(color: Color(0xff98A2B3)),
                    ),
                    Row(
                      children: [
                        Image.asset(
                          "assets/images/silver.png",
                          width: 150,
                        ),
                        SizedBox(width: 50),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "실버",
                              style: TextStyle(fontSize: 30),
                            ),
                            Text(
                              "현재 순위: 7위/ 138위",
                              style: TextStyle(
                                  fontSize: 10, color: Color(0xff475467)),
                            ),
                            Text(
                              "다음 레벨까지 남은 순위: 3위",
                              style: TextStyle(
                                  fontSize: 10, color: Color(0xff475467)),
                            )
                          ],
                        )
                      ],
                    )
                  ],
                ),
              ),
              SizedBox(height: 20),
              Container(
                decoration: BoxDecoration(
                    color: Color(0xffF9FAFB),
                    borderRadius: BorderRadius.circular(10)),
                padding: EdgeInsets.all(15),
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "동아리 한마디",
                      style: TextStyle(color: Color(0xff98A2B3)),
                    ),
                    Text(
                      '"화이팅!"',
                      style: TextStyle(fontSize: 30),
                    ),
                  ],
                ),
              ),
              Column(
                children: [
                  SizedBox(height: 20),
                  Schedule(
                      startTime: "17:00",
                      endTime: "~19:00",
                      title: "정기 훈련",
                      location: "홍익대학교 체육관"),
                  SizedBox(height: 5),
                  Schedule(
                      startTime: "19:00",
                      endTime: "~21:00",
                      title: "정기 매치",
                      location: "홍익대학교 체육관")
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
