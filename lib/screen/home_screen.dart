import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:squadus/component/event_component.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:squadus/component/recruitment_card_component.dart';
import 'package:squadus/component/notice_card_component.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late PageController _pageController;
  int _selectedIndex = 0;

  @override
  void initState() {
    super.initState();
    _pageController = PageController(initialPage: _selectedIndex);
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    _pageController.jumpToPage(index);
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Image.asset("assets/images/Group.png"),
        title: Text("중앙가르드"),
      ),
      body: PageView(
          controller: _pageController,
          onPageChanged: (index) {
            setState(() {
              _selectedIndex = index;
            });
          },
          children: [
            PageHome(),
            Page2(),
            Page3(),
            Page4(),
            Page5(),
          ]),
      bottomNavigationBar: ClipRRect(
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(20), topRight: Radius.circular(20)),
        child: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          items: [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
            BottomNavigationBarItem(icon: Icon(Icons.report), label: "Report"),
            BottomNavigationBarItem(icon: Icon(Icons.group), label: "Group"),
            BottomNavigationBarItem(icon: Icon(Icons.favorite), label: "Match"),
            BottomNavigationBarItem(icon: Icon(Icons.people), label: "MyPage"),
          ],
        ),
      ),
    );
  }
}

class Calendar extends StatelessWidget {
  final void Function(DateTime selectedDay, DateTime focusedDay) onDaySelected;
  final bool Function(DateTime day) selectedDayPredicate;

  const Calendar({
    required this.onDaySelected,
    required this.selectedDayPredicate,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return TableCalendar(
        firstDay: DateTime.utc(2010, 10, 16),
        lastDay: DateTime.utc(2030, 3, 14),
        focusedDay: DateTime.now(),
        headerStyle: HeaderStyle(
          formatButtonVisible: false,
          titleCentered: true,
        ),
        calendarFormat: CalendarFormat.week,
        onDaySelected: onDaySelected,
        selectedDayPredicate: selectedDayPredicate);
  }
}

class Event {
  final String title;
  final String start;
  final String end;

  Event(this.title, this.start, this.end);
}

class Recruitment {
  final String recruitmentTitle;
  final String location;
  final int tier;
  final int currentMemberCount;
  final int totalMemberCount;

  Recruitment(this.recruitmentTitle, this.location, this.tier,
      this.currentMemberCount, this.totalMemberCount);
}

class Notice {
  final String noticeTitle;
  final String noticeContent;
  final bool isNew;

  Notice(this.noticeTitle, this.noticeContent, this.isNew);
}

class PageHome extends StatefulWidget {
  const PageHome({Key? key}) : super(key: key);

  @override
  State<PageHome> createState() => _PageHomeState();
}

class _PageHomeState extends State<PageHome> {
  DateTime selectedDay = DateTime(
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );
  DateTime focusedDay = DateTime.now();
  List<Event> currentEvents = [];

  Map<DateTime, List<Event>> events = {
    DateTime.utc(2024, 5, 15): [
      Event('title', "16:00", "18:00"),
      Event('title2', "18:00", "20:00"),
    ],
    DateTime.utc(2024, 5, 16): [
      Event('title3', "16:00", "18:00"),
    ],
  };
  List<Event> _getEventsForDay(DateTime day) {
    setState(() {
      currentEvents = events[day] ?? [];
    });
    print(currentEvents);
    return events[day] ?? [];
  }

  String selectedLocation = '서울 강남'; // 초기화 할 지역
  List<Recruitment> recruitments = [
    Recruitment('교류전 멤버 구합니다1', '서울 강남', 3, 7, 8),
    Recruitment('교류전 멤버 구합니다2', '서울 강남', 2, 7, 9),
    Recruitment('교류전 멤버 구합니다3', '서울 강북', 1, 2, 12),
    Recruitment('교류전 멤버 구합니다4', '서울 성북', 3, 7, 20),
    Recruitment('교류전 멤버 구합니다5', '서울 강남', 2, 5, 10),
  ];

  List<Notice> notices = [
    Notice('총무 모집', '총무 모집합니다', true),
    Notice('임원 모집', '임원 모집합니다', false),
    Notice('팀원 모집', '팀원 모집합니다!!!', false),
    Notice('팀원 모집', '팀원 모집합니다ㅎㅎㅎ', false),
  ];
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 2000,
        child: Padding(
          padding: EdgeInsets.all(20), // 디자인 변경에 따른 수정
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center, // 테스트
            children: [
              Container(
                width: MediaQuery.of(context).size.width,
                height: 150,
                decoration: BoxDecoration(
                    color: Colors.grey,
                    borderRadius: BorderRadius.all(Radius.circular(20))),
                child: Center(
                  child: Text("article"),
                ),
              ),
              Container(
                width: MediaQuery.of(context).size.width,
                height: 150,
                child: Calendar(
                  onDaySelected: (selectedDay, focusedDay) {
                    setState(() {
                      this.selectedDay = selectedDay;
                      this.focusedDay = focusedDay;
                    });
                    _getEventsForDay(this.selectedDay);
                  },
                  selectedDayPredicate: (DateTime day) {
                    return isSameDay(selectedDay, day);
                  },
                ),
              ),
              Container(
                  width: MediaQuery.of(context).size.width,
                  height: 300,
                  decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.all(Radius.circular(20)),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xCC606060),
                          offset: const Offset(0, 10),
                          blurRadius: 20,
                          blurStyle: BlurStyle.outer,
                        )
                      ]),
                  child: Padding(
                    padding: EdgeInsets.all(12),
                    child: Column(
                      children: [
                        Text("오늘의 일정"),
                        Column(
                          children: currentEvents
                              .map((e) => MainEvent(
                                    startTime: e.start,
                                    endTime: e.end,
                                    title: e.title,
                                  ))
                              .toList(),
                        ),
                      ],
                    ),
                  )),
              SizedBox(height: 32.0),
              Container(
                  width: MediaQuery.of(context).size.width,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "중요 공지",
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF010E57)),
                      ),
                      SizedBox(height: 16.0),
                      Column(
                        children: notices
                            .take(3)
                            .map((data) => MainNoticeCard(
                                noticeTitle: data.noticeTitle,
                                noticeContent: data.noticeContent,
                                isNew: data.isNew))
                            .toList(),
                      )
                    ],
                  )),
              SizedBox(height: 32.0),
              Container(
                width: MediaQuery.of(context).size.width,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "지금 $selectedLocation은",
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      "총 ${recruitments.where((recruitment) => recruitment.location == selectedLocation).length}건의 구인 공고글이 있어요.",
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    SizedBox(height: 8.0),
                    Column(
                      children: recruitments
                          .where((recruitment) =>
                              recruitment.location == selectedLocation)
                          .map((data) => RecruitmentCard(
                                recruitmentTitle: data.recruitmentTitle,
                                location: data.location,
                                tier: data.tier,
                                currentMemberCount: data.currentMemberCount,
                                totalMemberCount: data.totalMemberCount,
                              ))
                          .toList(),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class Page2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('Page 2'),
    );
  }
}

class Page3 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('Page 3'),
    );
  }
}

class Page4 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
              width: MediaQuery.of(context).size.width,
              height: 350,
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(20)),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xCC606060),
                      offset: const Offset(0, 10),
                      blurRadius: 20,
                      blurStyle: BlurStyle.outer,
                    )
                  ]),
              child: SingleChildScrollView(
                child: Padding(
                  padding: EdgeInsets.all(12),
                  child: Column(
                    children: [
                      Text(
                        "동아리 별 랭크 ",
                        style: TextStyle(
                            fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                      SizedBox(height: 20),
                      Container(
                          width: MediaQuery.of(context).size.width,
                          height: 60,
                          decoration: BoxDecoration(
                              color: Colors.lightBlueAccent,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(20))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Image.asset("assets/images/rank.png"),
                              Text(
                                "동아리 명",
                                style: TextStyle(fontSize: 14),
                              )
                            ],
                          )),
                      SizedBox(height: 20),
                      Container(
                          width: MediaQuery.of(context).size.width,
                          height: 60,
                          decoration: BoxDecoration(
                              color: Colors.lightBlueAccent,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(20))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Image.asset("assets/images/rank.png"),
                              Text(
                                "동아리 명",
                                style: TextStyle(fontSize: 14),
                              )
                            ],
                          )),
                      SizedBox(height: 20),
                      Container(
                          width: MediaQuery.of(context).size.width,
                          height: 60,
                          decoration: BoxDecoration(
                              color: Colors.lightBlueAccent,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(20))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Image.asset("assets/images/rank.png"),
                              Text(
                                "동아리 명",
                                style: TextStyle(fontSize: 14),
                              )
                            ],
                          )),
                      SizedBox(height: 20),
                      Container(
                          width: MediaQuery.of(context).size.width,
                          height: 60,
                          decoration: BoxDecoration(
                              color: Colors.lightBlueAccent,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(20))),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              Image.asset("assets/images/rank.png"),
                              Text(
                                "동아리 명",
                                style: TextStyle(fontSize: 14),
                              )
                            ],
                          )),
                    ],
                  ),
                ),
              )),
          SizedBox(height: 30),
          Container(
            width: MediaQuery.of(context).size.width,
            height: 200,
            decoration: BoxDecoration(
                color: const Color(0xB3E8FFFF),
                borderRadius: BorderRadius.all(Radius.circular(20))),
            child: Padding(
              padding: EdgeInsets.all(12),
              child: Column(
                children: [
                  Text(
                    "동아리 별 매칭",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 15),
                  Container(
                    width: MediaQuery.of(context).size.width,
                    height: 120,
                    decoration: BoxDecoration(
                        color: Colors.grey,
                        borderRadius: BorderRadius.all(Radius.circular(20))),
                    child: Center(child: Text("매칭하기")),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ));
  }
}

class Page5 extends StatelessWidget {
  bool _exposureAppBar = true;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          Stack(
            children: [
              Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height * 0.35,
                decoration: BoxDecoration(
                  color: Color(0xFF6A56FE),
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(50),
                    bottomRight: Radius.circular(50),
                  ),
                ),
              ),
              Positioned(
                top: (MediaQuery.of(context).size.height * 0.3 / 2) -
                    (MediaQuery.of(context).size.width * 0.4 / 2),
                left: (MediaQuery.of(context).size.width / 2) -
                    (MediaQuery.of(context).size.width * 0.4 / 2),
                child: Container(
                  width: MediaQuery.of(context).size.width * 0.4,
                  height: MediaQuery.of(context).size.width * 0.4,
                  decoration: BoxDecoration(
                    image: const DecorationImage(
                      image: AssetImage("assets/images/pat.jpeg"),
                      fit: BoxFit.cover,
                    ),
                    shape: BoxShape.circle,
                    color: Colors.red,
                  ),
                ),
              ),
              Positioned(
                top: MediaQuery.of(context).size.height * 0.25,
                left: MediaQuery.of(context).size.width / 2.6,
                child: Row(
                  children: [
                    TextButton(
                      onPressed: null,
                      style: TextButton.styleFrom(),
                      child: Row(
                        children: [
                          Text(
                            '닉네임',
                            style: TextStyle(color: Colors.white, fontSize: 20),
                          ),
                          SizedBox(width: 6),
                          Icon(Icons.mode_edit),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Container(
            width: MediaQuery.of(context).size.width * 0.8,
            height: MediaQuery.of(context).size.height * 1.5,
            color: Color(0xFFf6f6f6),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                SizedBox(height: 50),
                myPageButton(
                  child: Text(
                    "안내",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 14),
                  ),
                ),
                SizedBox(height: 10),
                myPageButton(
                  child: Text(
                    "FAQ",
                    style: TextStyle(color: Colors.black, fontSize: 14),
                  ),
                ),
                Divider(
                  color: Colors.grey,
                  thickness: 1.0,
                  indent: 16.0,
                  endIndent: 16.0,
                ),
                myPageButton(
                  child: Text(
                    "설정",
                    style: TextStyle(color: Colors.black, fontSize: 14),
                  ),
                ),
                Divider(
                  color: Colors.grey,
                  thickness: 1.0,
                  indent: 16.0,
                  endIndent: 16.0,
                ),
                myPageButton(
                  child: Text(
                    "공지사항",
                    style: TextStyle(color: Colors.black, fontSize: 14),
                  ),
                ),
                Divider(
                  color: Colors.grey,
                  thickness: 1.0,
                  indent: 16.0,
                  endIndent: 16.0,
                ),
                myPageButton(
                  child: Text(
                    "고객센터",
                    style: TextStyle(color: Colors.black, fontSize: 14),
                  ),
                ),
                Divider(
                  color: Colors.grey,
                  thickness: 1.0,
                  indent: 16.0,
                  endIndent: 16.0,
                ),
                myPageButton(
                  child: Text(
                    "업데이트 소식",
                    style: TextStyle(color: Colors.black, fontSize: 14),
                  ),
                ),
                Divider(
                  color: Colors.grey,
                  thickness: 1.0,
                  indent: 16.0,
                  endIndent: 16.0,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class myPageButton extends StatelessWidget {
  const myPageButton({Key? key, required this.child}) : super(key: key);
  final Widget child;
  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {},
      style: ButtonStyle(
          minimumSize: MaterialStatePropertyAll(
            Size(double.infinity, 10),
          ),
          padding: MaterialStatePropertyAll(
            EdgeInsets.symmetric(horizontal: 16.0),
          ),
          alignment: Alignment.centerLeft),
      child: child,
    );
  }
}
