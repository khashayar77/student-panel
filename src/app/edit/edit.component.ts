import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatBottomSheet } from '@angular/material';
import { EditResponse } from '../mocks/editResponse.mock-data';
import { IEdit } from '../../app/interface/edit';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EditPipe } from '../pipes/edit.pipe';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';



const ELEMENT_DATA: IEdit[] = [
  { FirstName: 'خشایار', LastName: 'پنبه ئیان', course: 'ریاضی 1', scores: '17', TestDate: '2019/11/06', StudentID: '1', status: true },
  { FirstName: 'امیر', LastName: 'احمدی', course: 'ریاضی 2', scores: '12', TestDate: '2019/11/12', StudentID: '2', status: true },
  { FirstName: 'مهدی', LastName: 'جابری', course: 'دیفرانسیل', scores: '11', TestDate: '2019/11/09', StudentID: '3', status: true },
  { FirstName: 'علی', LastName: 'طاهری', course: 'برنامه نویسی', scores: '19', TestDate: '2019/11/11', StudentID: '4', status: true },
  { FirstName: 'پریسا', LastName: 'اسکندری', course: 'فیزیک', scores: '10', TestDate: '2019/11/12', StudentID: '5', status: false },
];

const elements: IEdit[] = EditResponse;


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent {
  displayedColumns: string[] = ['FirstName', 'LastName', 'course', 'scores', 'TestDate', 'StudentID', 'status', 'Edit'];
  dataSource = ELEMENT_DATA;
  statusList: number[] = [0, 1];
  selected: string;
  selectedStudent: IEdit;
  constructor(private snackbar: MatSnackBar, private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(selectedStudent: IEdit): void {
    this.selectedStudent = selectedStudent;
    const bottomSheetRef = this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent, {
      data: selectedStudent
    });

    bottomSheetRef.afterDismissed().subscribe(result => {
      if (result != undefined) {
        debugger
        var newFirstName = (result.FirstName != this.selectedStudent.FirstName ? result.FirstName : "");
        var newLastName = (result.LastName != this.selectedStudent.LastName ? result.LastName : "");
        var newcourse = (result.course != this.selectedStudent.course ? result.course : "");
        var newscores = (result.scores != this.selectedStudent.scores ? result.scores : "");
        var newTestDate = (result.TestDate != this.selectedStudent.TestDate ? result.TestDate : "");
        var newStudentID = (result.StudentID != this.selectedStudent.StudentID ? result.StudentID : "");
        var newstatus = (result.status != this.selectedStudent.status ? result.status.toString() : "");
        console.log(newTestDate);
        for (var xI = 0; xI < this.dataSource.length; xI++) {
          var rowItem = this.dataSource[xI];
          rowItem.FirstName = newFirstName.length > 0 ? newFirstName : rowItem.FirstName;
          rowItem.LastName = newLastName.length > 0 ? newLastName : rowItem.LastName;
          rowItem.course = newcourse.length > 0 ? newcourse : rowItem.course;
          rowItem.scores = newscores.length > 0 ? newscores : rowItem.scores;
          console.log(newTestDate);
          rowItem.status = newstatus.length > 0 ? newstatus : rowItem.status;
          rowItem.TestDate = newTestDate.length > 0 ? newTestDate : rowItem.TestDate;
          rowItem.StudentID = newStudentID.length > 0 ? newStudentID : rowItem.StudentID;
        }
      }

    });
  }

  EditFile() {
    ELEMENT_DATA.forEach(element => {
      element.status = false;

    });


  }



}
