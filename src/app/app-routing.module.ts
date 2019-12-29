import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoresComponent } from './scores/scores.component';
import { EditComponent } from './edit/edit.component';
import { InsertComponent } from './insert/insert.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';



const routes: Routes = [
  {path: '', redirectTo: '/scorepage', pathMatch: 'full' },
	{

		path: '',
		component: ToolbarComponent,
		children: [
			{ path: 'scorepage', component: ScoresComponent },
			{ path: 'editpage', component: EditComponent },
      { path: 'insertpage', component: InsertComponent }
		]
	},
	{ path: '**', component: ErrorpageComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
