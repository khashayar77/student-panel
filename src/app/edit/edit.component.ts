import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import { EditResponse } from '../mocks/editResponse.mock-data';
import { IEdit } from '../../app/interface/edit';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



const ELEMENT_DATA: IEdit[] = [
  { FirstName: 'خشایار', LastName: 'پنبه ئیان', course: 'ریاضی 1', scores: '17',  TestDate: '2019/11/06' , StudentID: '1', status: true },
  {FirstName: 'امیر', LastName: 'احمدی', course: 'ریاضی 2', scores: '12',  TestDate: '2019/11/12' , StudentID: '2', status: true},
  {FirstName: 'مهدی', LastName: 'جابری', course: 'دیفرانسیل', scores: '11',  TestDate: '2019/11/09' , StudentID: '3', status: true},
  {FirstName: 'علی',  LastName: 'طاهری', course: 'برنامه نویسی', scores: '19',  TestDate: '2019/11/11' , StudentID: '4', status: true},
  {FirstName: 'پریسا', LastName: 'اسکندری', course: 'فیزیک', scores: '10',  TestDate: '2019/11/12' , StudentID: '5', status: false},
 ];

const elements: IEdit[] = EditResponse;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName', 'course', 'scores', 'TestDate', 'StudentID', 'status', 'Edit'];
  dataSource = ELEMENT_DATA ;
  formGroup: FormGroup;
  constructor(private snackbar: MatSnackBar) { }




  ngOnInit() {
  }

  EditFile() {
    ELEMENT_DATA.forEach(element => {
      element.status = false;

    });
  }


  openBottomSheet()
  {

  }
}
