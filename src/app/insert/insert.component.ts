import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

const Status = ['قبول', 'مردود', 'قبول', 'مردود', 'مردود', 'قبول'];

const NAMES = [
  'علی',
  'حسین',
  'مریم',
  'محمد',
  'پریسا',
  'پریناز',
  'شایان',
  'احمد',
  'شهلا',
  'ساناز',
  'مهدی',
  'امیر'
];

const elements: UserData[] = [
  {
    id: 1,
    name: 'خشایار',
    scores: '12',
    status: 'قبول',
  },
  {
    id: 2,
    name: 'امیر',
    scores: '13',
    status: 'قبول',
  },
  {
    id: 3,
    name: 'مریم',
    scores: '5',
    status: 'مردود',
  }
];

export class UserData {
  id: number;
  name: string;
  scores: string;
  status: string;
}

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent {
  @ViewChild('table', {static:true}) table: MatTable<any>;

  displayedColumns = ['id', 'name', 'Scores', 'status'];
  dataSource: any = elements;

  constructor(private snackbar: MatSnackBar) {}

  addRow(value: string) {
    let item = new UserData();
    item.id = 2;
    item.name = 'خشایار';
    item.scores = value;
    item.status = 'مردود';


    elements.push(item);
    this.table.renderRows();
  }
}
