import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { IEdit } from '../interface/edit';
import { EditResponse } from '../mocks/editResponse.mock-data';
import { element } from 'protractor';

const elements: IEdit[] = EditResponse;

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.scss']
})
export class BottomSheetOverviewExampleSheetComponent {

  selectedStudent: any;

  // tslint:disable-next-line: max-line-length
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.selectedStudent = {
      FirstName: data.FirstName,
      LastName: data.LastName,
      course: data.course,
      scores: data.scores,
      TestDate: data.TestDate,
      StudentID: data.StudentID,
      status: data.status,
    };
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeDialog(saveData: boolean) {
    console.log(this.selectedStudent);
    if (saveData) {
      this._bottomSheetRef.dismiss(this.selectedStudent);
    }
    else {
      this._bottomSheetRef.dismiss();
    }
  }

}
