import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoresServie } from '../services/scores.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'course', 'scores', 'TestDate', 'StudentID', 'status', 'Action', 'Result', 'AddItem'];
  dataSource: any = [];
  ScoresList: number[] = [0, 1];
  constructor(private scoresResponse: ScoresServie) { }

  ngOnInit() {
    this.dataSource = this.scoresResponse.getAllScore();
  }
}
