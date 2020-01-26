import { Injectable } from '@angular/core';
//import { scoresResponse } from '../mocks/scoresResponse.mock-data';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Score } from '../models/scores';


@Injectable()
export class ScoresServie {

	constructor(private http: HttpClient) { }

	findScore(studentId: any): any {
		return this.http.post<Score[]>(`${environment.apiUrl}/GetItem`, { studentId });
	}

	addScore(newScore: Score): any {
		return this.http.post<any>(`${environment.apiUrl}/AddNewItem`, { newScore })
			.pipe(map(res => {
				return res
			}));
	}

	getAllScore(): any {
		return this.http.get<Score[]>(`${environment.apiUrl}/GetAllScores`);
	}

	updateScore(oldScore: Score): any {
		return this.http.post<any>(`${environment.apiUrl}/UpdateItem`, { oldScore })
			.pipe(map(res => {
				return res
			}));
	}

}
