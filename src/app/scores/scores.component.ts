import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material';
import { scores } from '../../app/interface/scores';
import { scoresResponse } from '../../app/mocks/scoresResponse.mock-data';
import { ScoresServie } from '../services/scores.service';

@Component({
	selector: 'app-scores',
	templateUrl: './scores.component.html',
	styleUrls: [ './scores.component.scss' ]
})
export class ScoresComponent implements OnInit {
	constructor(private snackbar: MatSnackBar, private scoreService: ScoresServie) {
		this.displayedColumns = [ 'FirstName', 'LastName', 'course', 'scores', 'TestDate', 'StudentID' ];
	}
	dataSource = new MatTableDataSource();
	displayedColumns: string[];

	ELEMENT_DATA: scores[] = [
		{
			FirstName: 'خشایار',
			LastName: 'پنبه ئیان',
			course: 'ساختمان داده',
			scores: '20',
			TestDate: '2019/11/12',
			StudentID: '1'
		},
		{
			FirstName: 'علی',
			LastName: 'قمصری',
			course: 'دیفرانسیل',
			scores: '17',
			TestDate: '2019/10/15',
			StudentID: '5'
		},
		{
			FirstName: 'خشایار',
			LastName: 'پنبه ئیان',
			course: 'ساختمان داده',
			scores: '20',
			TestDate: '2019/11/12',
			StudentID: '1'
		},
		{
			FirstName: 'کامران',
			LastName: 'منظری',
			course: ' مهندسی اینترنت',
			scores: '16',
			TestDate: '2019/09/13',
			StudentID: '2'
		},
		{
			FirstName: 'همایون',
			LastName: 'اسدی',
			course: 'ریاضی',
			scores: '18',
			TestDate: '2019/10/11',
			StudentID: '6'
		}
	];

	ngOnInit() {}
}
