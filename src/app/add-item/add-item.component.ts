import { Component, OnInit, Input } from '@angular/core';
import { ScoresServie } from '../services/scores.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Score } from '../models/scores';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  private score = new Score();
  options: FormGroup;
  constructor(private scoreService: ScoresServie, private router: Router, fb: FormBuilder) {

    this.options = fb.group({
      hideRequired: false,
    });
  }

  // date = new FormControl(moment());

  ngOnInit() { }

  AddItem() {
    this.scoreService.addScore(this.score)
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

  addCancle() {
    this.router.navigateByUrl('/scorepage');
  }
}
