import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { scoresResponse } from '../mocks/scoresResponse.mock-data';
import { Score } from '../models/scores';

@Injectable()
export class ScoresServiceMockInterceptore implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const { url, method, body } = request;

		var scores: any = scoresResponse;

		// wrap in delayed observable to simulate server api call
		return of(null)
			.pipe(mergeMap(handleRoute))
			.pipe(materialize())
			.pipe(delay(0))
			.pipe(dematerialize());

		function handleRoute() {

			switch (true) {
				case url.endsWith('/AddNewItem') && method === 'POST':
					return AddNewScore();
				case url.endsWith('/GetAllScores') && method === 'GET':
					return GetAllScores();
				case url.endsWith('/GetItem') && method === 'POST':
					return FindItem();
				case url.endsWith('/UpdateItem') && method === 'POST':
					return editScore();
				default:
					// pass through any requests not handled above
					return next.handle(request);
			}
		}

		function getMaxStudentId(): number {
			var result: number = 0;
			scores.forEach(scoreItem => {
				result = scoreItem.StudentID > result ? scoreItem.StudentID : result;
			});
			return (result + 1);
		}

		// route functions

		function AddNewScore() {
			const newItem = body.newScore;
			newItem.StudentID = getMaxStudentId();
			scores.push(newItem);
			return ok(true);
		}

		function GetAllScores() {
			return ok(scores);
		}

		function FindItem() {
			var result: Score;
			const studentId = body.studentId;
			scores.forEach(scoreItem => {
				if (scoreItem.StudentID == studentId)
					result = scoreItem;
			});
			return ok(result);
		}

		function editScore() {
			const oldItem = body.oldScore;
			scores.forEach(scoreItem => {
				if (scoreItem.StudentID == oldItem.StudentID) {
					scoreItem.FirstName = oldItem.FirstName;
					scoreItem.LastName = oldItem.LastName;
					scoreItem.TestDate = oldItem.TestDate;
					scoreItem.course = oldItem.course;
					scoreItem.scores = oldItem.scores;
					scoreItem.status = oldItem.status;
				}
			})
			return ok(true);
		}

		// helper functions

		function ok(body?) {
			return of(new HttpResponse({ status: 200, body }))
		}
	}
}

export let fakeBackendProvider = {
	// use fake backend in place of Http service for backend-less development
	provide: HTTP_INTERCEPTORS,
	useClass: ScoresServiceMockInterceptore,
	multi: true
};