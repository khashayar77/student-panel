import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import { IScores } from '../../app/interface/scores';
import { ScoresServie } from '../services/scores.service';
import { scoresResponse } from '../mocks/scoresResponse.mock-data';
/*export interface scores {
  FirstName: string;
  LastName: string;
  course: string;
  scores: string;
  TestDate: string;
  StudentID: string;
}*/

const ELEMENT_DATA: IScores[] = [
  { FirstName: 'خشایار', LastName: 'پنبه ئیان', course: 'ریاضی 1', scores: '17',  TestDate: '2019/11/06' , StudentID: '1', status: 0 },
  {FirstName: 'امیر', LastName: 'احمدی', course: 'ریاضی 2', scores: '12',  TestDate: '2019/11/12' , StudentID: '2', status: 1},
  {FirstName: 'مهدی', LastName: 'جابری', course: 'دیفرانسیل', scores: '11',  TestDate: '2019/11/09' , StudentID: '3', status: 1},
  {FirstName: 'علی',  LastName: 'طاهری', course: 'برنامه نویسی', scores: '19',  TestDate: '2019/11/11' , StudentID: '4', status: 1},
  {FirstName: 'پریسا', LastName: 'اسکندری', course: 'فیزیک', scores: '10',  TestDate: '2019/11/12' , StudentID: '5', status: 0},
 ];

const elements: IScores[] = scoresResponse;

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'course', 'scores', 'TestDate', 'StudentID'];
  dataSource = ELEMENT_DATA ;
  ScoresList : number[] = [0, 1];
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {

    }
  }
