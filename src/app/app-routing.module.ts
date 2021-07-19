import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPgComponent } from './main-pg/main-pg.component';
import { AppInstructionsComponent } from './app-instructions/app-instructions.component';
import { ErrorPgComponent } from './error-pg/error-pg.component';
import { GradReqPgComponent } from './grad-req-pg/grad-req-pg.component';
import { GradReqPicComponent } from './grad-req-pic/grad-req-pic.component';
import { GradePgComponent } from './grade-pg/grade-pg.component';
import { PastMathComponent } from './past-math/past-math.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainPgComponent },
  { path: 'instructions', component: AppInstructionsComponent },
  { path: 'error', component: ErrorPgComponent },
  { path: 'grad/req/pg', component: GradReqPgComponent },
  { path: 'grad/info/pic', component: GradReqPicComponent },
  { path: 'grade/pg', component: GradePgComponent }, 
  { path: 'past/math', component: PastMathComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
