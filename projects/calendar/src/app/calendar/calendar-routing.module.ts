import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderViewComponent } from './calender-view/calender-view.component';

const routes: Routes = [{path: 'calendar-view', component: CalenderViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
