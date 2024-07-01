import 'package:flutter/material.dart';

class PageMypage extends StatelessWidget {
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
