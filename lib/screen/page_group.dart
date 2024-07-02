// import 'dart:html';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:table_calendar/table_calendar.dart';

import '../component/schedule_component.dart';
import '../model/scedule.dart';

class PageGroup extends StatefulWidget {
  const PageGroup({Key? key}) : super(key: key);

  @override
  State<PageGroup> createState() => _PageGroupState();
}

class _PageGroupState extends State<PageGroup>
    with SingleTickerProviderStateMixin {
  late TabController tabController;

  @override
  void initState() {
    super.initState();
    tabController = TabController(
      length: 4, // 탭 수에 맞춰 length 설정
      vsync: this,
      initialIndex: 0,
      animationDuration: const Duration(milliseconds: 800),
    );
  }

  @override
  void dispose() {
    tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TabBar(
          controller: tabController,
          tabs: const [
            Tab(text: "기본 정보"),
            Tab(text: "일정"),
            Tab(text: "공지"),
            Tab(text: "회비"),
          ],
        ),
      ),
      body: TabBarView(
        controller: tabController,
        children: const [
          BasicInformation(),
          Page2(),
          Page3(),
          Page4(),
        ],
      ),
    );
  }
}

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

class BasicInformation extends StatelessWidget {
  const BasicInformation({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 2000,
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
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
            ],
          ),
        ),
      ),
    );
  }
}

class Page2 extends StatefulWidget {
  const Page2({Key? key}) : super(key: key);

  @override
  State<Page2> createState() => _Page2State();
}

class _Page2State extends State<Page2> {
  DateTime selectedDay = DateTime.utc(
      DateTime.now().year, DateTime.now().month, DateTime.now().day);
  String weekDay = '';

  Map<DateTime, List<Schedule>> schedules = {
    DateTime.utc(2024, 7, 5): [
      Schedule(
          id: 1,
          startTime: 17,
          endTime: 19,
          content: "정기 훈련",
          date: DateTime.utc(2024, 7, 5),
          location: "홍익대학교 체육관"),
      Schedule(
          id: 2,
          startTime: 19,
          endTime: 21,
          content: "정기 매치",
          date: DateTime.utc(2024, 7, 5),
          location: "홍익대학교 체육관")
    ]
  };

  @override
  void initState() {
    super.initState();
    updateWeekDay(selectedDay);
  }

  void updateWeekDay(DateTime date) {
    switch (date.weekday) {
      case 1:
        weekDay = "월";
        break;
      case 2:
        weekDay = "화";
        break;
      case 3:
        weekDay = "수";
        break;
      case 4:
        weekDay = "목";
        break;
      case 5:
        weekDay = "금";
        break;
      case 6:
        weekDay = "토";
        break;
      case 7:
        weekDay = "일";
        break;
      default:
        weekDay = "알 수 없음";
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          SizedBox(height: 20),
          TableCalendar(
            firstDay: DateTime.utc(2020, 10, 16),
            lastDay: DateTime.utc(2030, 3, 14),
            focusedDay: DateTime.now(),
            // locale: 'ko-KR',
            daysOfWeekHeight: 30,
            onDaySelected: (DateTime selectedDay, DateTime focusDay) {
              setState(() {
                this.selectedDay = selectedDay;
                updateWeekDay(selectedDay);
              });
            },
            selectedDayPredicate: (DateTime date) {
              if (selectedDay == null) {
                return false;
              }
              return date.isAtSameMomentAs(selectedDay!);
            },

            headerStyle: HeaderStyle(
              formatButtonVisible: false,
              titleCentered: true,
              leftChevronVisible: false,
              rightChevronVisible: false,
            ),
            // calendarStyle: CalendarStyle()
          ),
          SizedBox(height: 20),
          Container(
            width: double.infinity,
            height: 500,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                topLeft:
                    Radius.circular(30), // topLeft에 30 픽셀의 반경을 가진 둥근 모서리 적용
                topRight:
                    Radius.circular(30), // topRight에 30 픽셀의 반경을 가진 둥근 모서리 적용
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.5),
                  spreadRadius: 5,
                  blurRadius: 7,
                  offset: Offset(0, 3), // changes position of shadow
                ),
              ],
            ),
            child: Padding(
              padding: EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height: 10),
                  Text(
                    '${selectedDay.year}년 ${selectedDay.month}월 ${selectedDay.day}일 (${weekDay})',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 10),
                  Expanded(
                      child: Column(
                    children: schedules.containsKey(selectedDay)
                        ? schedules[selectedDay]!
                            .map((e) => ScheduleComponent(
                                startTime: e.startTime,
                                endTime: e.endTime,
                                title: e.content,
                                location: e.location))
                            .toList()
                        : [],
                  )),
                  Container(
                      width: MediaQuery.of(context).size.width,
                      height: 95.0,
                      padding: EdgeInsets.symmetric(
                          vertical: 16.0, horizontal: 20.0),
                      margin: EdgeInsets.symmetric(vertical: 8.0),
                      decoration: BoxDecoration(
                          border: Border.all(
                            color: Color(0xFF7E77FF),
                          ),
                          borderRadius: BorderRadius.all(Radius.circular(20))),
                      child: Row(
                        children: [
                          Text(
                            "+",
                            style: TextStyle(
                              fontSize: 30,
                              color: Color(0xFF7E77FF),
                            ),
                          ),
                          SizedBox(width: 20),
                          Text(
                            "새로운 일정 추가하기",
                            style: TextStyle(
                              fontSize: 20,
                              color: Color(0xFF7E77FF),
                            ),
                          )
                        ],
                      )),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

class Page3 extends StatelessWidget {
  const Page3({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Center(child: Text('This is Page 3'));
  }
}

class Page4 extends StatelessWidget {
  const Page4({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(child: Text('This is Page 4'));
  }
}