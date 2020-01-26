/**
 * modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MatNativeDateModule, MatSliderModule, MatBottomSheetModule } from '@angular/material';
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
	MatSelectModule
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';


/**
 * components
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';



import { ScoresPipe } from './pipes/scores.pipe';
import { EditPipe } from './pipes/edit.pipe';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { fakeBackendProvider } from './mock-interceptors/scoresService-mock-interceptor';
import { ScoresServie } from './services/scores.service';
import { ResultPageComponent } from './result-page/result-page.component';

/*

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', 'fa.json');
}*/

@NgModule({
	declarations: [
		AppComponent,
		ScoresComponent,
		ToolbarComponent,
		ErrorpageComponent,
		ScoresPipe,
		EditPipe,
		AddItemComponent,
		EditItemComponent,
		ResultPageComponent
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
		MatButtonModule,
		MatBottomSheetModule,
		MatTooltipModule,
		MatSnackBarModule,
		FlexLayoutModule,
		HttpClientModule,
		MatDatepickerModule,
		MatSliderModule,
		MatNativeDateModule, TranslateModule, MatSelectModule],
	providers: [
		ScoresServie,
		fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
