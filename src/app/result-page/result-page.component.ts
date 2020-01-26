import { Component, OnInit } from '@angular/core';
import { ScoresServie } from '../services/scores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Score } from '../models/scores';


@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  private score: any = [];
  constructor(private scoreService: ScoresServie, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(paramMap =>
      this.scoreService.findScore(paramMap.get('id')).subscribe(scoreItem => this.score = scoreItem)
    );
  }

  editCancle() {
    /*this.scoreService.editScore(this.score);*/
    this.router.navigateByUrl('/scorepage');
  }

  editItem() {
    this.scoreService.updateScore(this.score)
      .pipe(first())
      .subscribe(
        data => {
          if (data)
            this.router.navigateByUrl('/scorepage');
        },
        error => {
          console.log(error);
        });
  }

}

