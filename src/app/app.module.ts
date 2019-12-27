/**
 * modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatNativeDateModule, MatSliderModule, DateAdapter } from '@angular/material';
import {
	MatIconModule,
	MatButtonModule,
	MatSidenavModule,
	MatToolbarModule,
	MatInputModule,
	MatFormFieldModule,
	MatListModule,
	MatChipsModule,
	MatMenuModule,
	MatButtonToggleModule,
	MatCardModule,
	MatTableModule,
	MatCheckboxModule,
	MatDialogModule,
	MatRadioModule,
	MatTooltipModule,
	MatSnackBarModule,
  MatTabsModule,
} from '@angular/material';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


/**
 * components
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


/**
 * mockes */
import { scoresResponse } from '../app/mocks/scoresResponse.mock-data';

/**
 * interface */
import { IScores
} from '../app/interface/scores';
import { ScoresServiceMockInterceptore } from './mock-interceptors/scoresService-mock-interceptor';
import { ScoresPipe } from './pipes/scores.pipe';
import { EditPipe } from './pipes/edit.pipe';



export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', 'fa.json');
}

@NgModule({
	declarations: [
		AppComponent,
		ScoresComponent,
		EditComponent,
		InsertComponent,
		ToolbarComponent,
    ErrorpageComponent,
    ScoresPipe,
    EditPipe
	],
	// tslint:disable-next-line: max-line-length
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatInputModule,
		MatFormFieldModule,
		MatListModule,
		MatChipsModule,
		MatMenuModule,
		MatButtonToggleModule,
		MatCardModule,
		MatTableModule,
		MatCheckboxModule,
		MatDialogModule,
		MatRadioModule,
		MatTabsModule,
		BrowserAnimationsModule,
		MatTooltipModule,
		MatSnackBarModule,
		FlexLayoutModule,
		HttpClientModule,
		MatDatepickerModule,
		MatSliderModule,
    MatNativeDateModule, TranslateModule,

    TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),



	],
	providers: [
    ScoresServiceMockInterceptore
  ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
