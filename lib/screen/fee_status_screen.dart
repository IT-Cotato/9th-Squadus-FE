import 'package:flutter/material.dart';

class FeeStatusScreen extends StatefulWidget {
  @override
  _FeeStatusScreenState createState() => _FeeStatusScreenState();
}

class _FeeStatusScreenState extends State<FeeStatusScreen> {
  String selectedFilter = '전체';

  void _updateFilter(String filter) {
    setState(() {
      selectedFilter = filter;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          '회비 입금 현황',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 20.0,
          ),
        ),
        centerTitle: true,
        leading: IconButton(
          icon: Icon(Icons.close),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            FeeSummary(),
            FeeFilter(
              selectedFilter: selectedFilter,
              onFilterChange: _updateFilter,
            ),
            SizedBox(height: 16),
            Expanded(child: FeeList(filter: selectedFilter)),
          ],
        ),
      ),
    );
  }
}

class FeeSummary extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 36),
        Text(
          '정기대회',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: 8),
        Text(
          '140,000원',
          style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: 8),
        Text(
          '6.30일까지, 3만원씩',
          style: TextStyle(fontSize: 14, color: Colors.grey),
        ),
        SizedBox(height: 36),
      ],
    );
  }
}

class FeeFilter extends StatelessWidget {
  final String selectedFilter;
  final ValueChanged<String> onFilterChange;

  FeeFilter({required this.selectedFilter, required this.onFilterChange});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        FilterButton(
          label: '전체',
          isSelected: selectedFilter == '전체',
          onPressed: () => onFilterChange('전체'),
        ),
        SizedBox(width: 8),
        FilterButton(
          label: '납부',
          isSelected: selectedFilter == '납부',
          onPressed: () => onFilterChange('납부'),
        ),
        SizedBox(width: 8),
        FilterButton(
          label: '미납부',
          isSelected: selectedFilter == '미납부',
          onPressed: () => onFilterChange('미납부'),
        ),
      ],
    );
  }
}

class FilterButton extends StatelessWidget {
  final String label;
  final bool isSelected;
  final VoidCallback onPressed;

  FilterButton({
    required this.label,
    required this.isSelected,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: isSelected ? Colors.black : Colors.grey[200],
        foregroundColor: isSelected ? Colors.white : Colors.black,
      ),
      onPressed: onPressed,
      child: Text(label),
    );
  }
}

class FeeList extends StatelessWidget {
  final String filter;

  FeeList({required this.filter});

  @override
  Widget build(BuildContext context) {
    // 필터에 따라 다른 데이터를 표시하도록 로직 추가
    return ListView.builder(
      itemCount: 10, // Number of items in the list
      itemBuilder: (context, index) {
        bool isPaid = index % 2 == 0;
        if (filter == '납부' && !isPaid) return Container();
        if (filter == '미납부' && isPaid) return Container();

        return ListTile(
          leading: CircleAvatar(
            backgroundColor: Colors.grey[300],
          ),
          title: Text('이름'),
          trailing: Text(
            isPaid ? '납부' : '미납부',
            style: TextStyle(
              color: isPaid ? Colors.green : Colors.red,
            ),
          ),
        );
      },
    );
  }
}
