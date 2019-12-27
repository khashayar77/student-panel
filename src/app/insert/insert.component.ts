import {Component} from '@angular/core';
import {VERSION} from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { scoresResponse } from '../mocks/scoresResponse.mock-data';
import { NgForm } from '@angular/forms';
// import { rowsAnimation } from './animations/template.animations';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent{
  displayedColumns = ['id', 'name', 'Scores', 'color'];
  dataSource: MatTableDataSource<UserData>;

  constructor() {
    // Creates random users.
    // const users: UserData[] = [];
    // for (let i = 1; i <= 5; i++) {
    //   users.push(this.createNewUser(i));
    // }

    // Assign the data to the data source for the table to render.
    //this.dataSource = new MatTableDataSource(users);
  }

  // Creates new user.
  // createNewUser(id: number): UserData {
  //   const name =
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
  //       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  //   return {
  //     id: id.toString(),
  //     name: name,
  //     scores: Math.round(Math.random()).toString(),
  //     status: Status[Math.round(Math.random() * (Status.length - 1))]
  //   };
  // }

  // Adds new user.
  addRow(f: NgForm) {

    let ScoreTextVar: string;
    ScoreTextVar = f.value.ScoreText;

    this.dataSource.data.push({
      id: 1,
      name: "naser",
      scores: ScoreTextVar,
      status: "مردود"
    });
    //this.dataSource.filter = "";
  }
}


const Status = ['قبول', 'مردود', 'قبول', 'مردود', 'مردود', 'قبول'];

const NAMES = ['علی', 'حسین', 'مریم', 'محمد', 'پریسا', 'پریناز',
  'شایان', 'احمد', 'شهلا', 'ساناز', 'مهدی', 'امیر',
];

export interface UserData {
  id: number;
  name: string;
  scores: string;
  status: string;
}
