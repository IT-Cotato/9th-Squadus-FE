import 'package:flutter/material.dart';

class CreateNoticeScreen extends StatefulWidget {
  const CreateNoticeScreen({super.key});

  @override
  State<CreateNoticeScreen> createState() => _CreateNoticeScreenState();
}

class _CreateNoticeScreenState extends State<CreateNoticeScreen> {
  final _formKey = GlobalKey<FormState>();
  String noticeTitle = '';
  String noticeContent = '';
  bool isPinned = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.close),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Text(
          '공지 작성하기',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
        actions: [
          TextButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                _formKey.currentState!.save();
                // 공지 저장 로직 추가해야 함
              }
            },
            child: Text(
              '완료',
              style: TextStyle(
                color: Color(0xFF7E77FF),
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextFormField(
                decoration: InputDecoration(
                  hintText: '제목',
                  hintStyle: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF98A2B3),
                  ),
                  enabledBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: Color(0xFF000000).withOpacity(0.05), // 비활성화 상태의 하단 불빛 색상
                      width: 1.0, // 하단 불빛 두께
                    ),
                  ),
                  focusedBorder: UnderlineInputBorder(
                    borderSide: BorderSide(
                      color: Color(0xFF6A56FE), // 활성화 상태의 하단 불빛 색상
                      width: 2.0, // 하단 불빛 두께
                    ),
                  ),
                ),
                style: TextStyle(
                  fontSize: 20, // 입력 텍스트 크기 지정
                  fontWeight: FontWeight.bold, // 입력 텍스트 두께 지정
                  color: Color(0xFF000000), // 텍스트의 색상과 투명도 지정
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return '';
                  }
                  return null;
                },
                onSaved: (value) {
                  noticeTitle = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(
                  hintText: '내용을 입력하세요.',
                  hintStyle: TextStyle(
                    fontSize: 16,
                    color: Color(0xFF98A2B3),
                  ),
                  border: InputBorder.none, // 테두리 없애기
                  enabledBorder: InputBorder.none, // 비활성화 상태의 테두리 없애기
                  focusedBorder: InputBorder.none, // 활성화 상태의 테두리 없애기
                ),
                style: TextStyle(
                  fontSize: 16, // 입력 텍스트 크기 지정
                  color: Color(0xFF000000), // 텍스트의 색상과 투명도 지정
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return '내용을 입력하세요';
                  }
                  return null;
                },
                onSaved: (value) {
                  noticeContent = value!;
                },
                maxLines: 10,
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: Icon(Icons.camera_alt),
                    onPressed: () {
                      // 사진 추가 로직 추가해야 함
                    },
                  ),
                  Row(
                    children: [
                      Checkbox(
                        value: isPinned,
                        onChanged: (value) {
                          setState(() {
                            isPinned = value!;
                          });
                        },
                        activeColor: isPinned ? Color(0xFF7E77FF) : Color(0xFF667085), // 체크 상태에 따른 색상
                        checkColor: Colors.white, // 체크된 상태의 내부 체크 표시 색상
                        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap, // 기본 패딩 제거
                      ),
                      Text(
                        '필독',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: isPinned ? Color(0xFF7E77FF) : Color(0xFF667085),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
