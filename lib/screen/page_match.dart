import 'package:flutter/material.dart';


class PageMatch extends StatelessWidget {
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
