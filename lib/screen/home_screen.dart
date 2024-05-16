import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:squadus/component/event_component.dart';
import 'package:table_calendar/table_calendar.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Image.asset("assets/images/Group.png"),
        title: Text("중앙가르드"),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Container(
            width: MediaQuery.of(context).size.width,
            height: 2000,
            child: Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
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
                          Text("주요 공지"),
                          Container(
                            width: MediaQuery.of(context).size.width,
                            height: 120,
                            decoration: BoxDecoration(
                                color: Colors.blueGrey,
                                borderRadius:
                                    BorderRadius.all(Radius.circular(20))),
                            child: Center(child: Text("공지사항")),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width,
                    height: MediaQuery.of(context).size.height,
                    child: Column(
                      children: [
                        Text("용병 구인글 목록"),
                        Container(
                          width: MediaQuery.of(context).size.width,
                          height: 150,
                          decoration: BoxDecoration(
                            color: Colors.lightBlue,
                            borderRadius: BorderRadius.all(
                              Radius.circular(20),
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.report), label: "Report"),
          BottomNavigationBarItem(icon: Icon(Icons.group), label: "Group"),
          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: "Match"),
          BottomNavigationBarItem(icon: Icon(Icons.people), label: "MyPage"),
        ],
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
