import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoresComponent } from './scores/scores.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ResultPageComponent } from './result-page/result-page.component';



const routes: Routes = [
	{ path: '', redirectTo: '/scorepage', pathMatch: 'full' },
	{

		path: '',
		component: ToolbarComponent,
		children: [
			{ path: 'scorepage', component: ScoresComponent },
			{ path: 'AddItem/:id', component: AddItemComponent },
      { path: 'EditItem/:id', component: EditItemComponent },
      { path: 'ResultPage/:id', component: ResultPageComponent}
		]
	},
	{ path: '**', component: ErrorpageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
