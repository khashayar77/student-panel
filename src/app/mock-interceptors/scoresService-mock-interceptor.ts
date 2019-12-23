import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { scoresResponse } from '../mocks/scoresResponse.mock-data';

export class ScoresServiceMockInterceptore implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.includes('/scoresRequests') && request.method.toLocaleLowerCase() == 'get') {
			debugger;
			return of(new HttpResponse({ status: 200, body: scoresResponse, url: request.url }));
		} else {
			return next.handle(request);
		}
	}
}
