import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPgComponent } from './main-pg/main-pg.component';
import { AppInstructionsComponent } from './app-instructions/app-instructions.component';
import { ErrorPgComponent } from './error-pg/error-pg.component';
import { GradReqPgComponent } from './grad-req-pg/grad-req-pg.component';
import { GradReqPicComponent } from './grad-req-pic/grad-req-pic.component';
import { GradePgComponent } from './grade-pg/grade-pg.component';
import { PastMathComponent } from './past-math/past-math.component';
import { PastEnglishComponent } from './past-english/past-english.component';
import { PastPEComponent } from './past-pe/past-pe.component';
import { PastScienceComponent } from './past-science/past-science.component';
import { PastHistoryComponent } from './past-history/past-history.component';
import { PastAAComponent } from './past-aa/past-aa.component';
import { PastArtsComponent } from './past-arts/past-arts.component';
import { PastLangComponent } from './past-lang/past-lang.component';
import { PastGenElecComponent } from './past-gen-elec/past-gen-elec.component'; 
import { Past1Component } from './past1/past1.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainPgComponent },
  { path: 'instructions', component: AppInstructionsComponent },
  { path: 'error', component: ErrorPgComponent },
  { path: 'grad/req/pg', component: GradReqPgComponent },
  { path: 'grad/info/pic', component: GradReqPicComponent },
  { path: 'grade/pg', component: GradePgComponent }, 
  { path: 'past/math', component: PastMathComponent },
  { path: 'past/english', component: PastEnglishComponent },
  { path: 'past/pe', component: PastPEComponent },
  { path: 'past/science', component: PastScienceComponent },
  { path: 'past/history', component: PastHistoryComponent },
  { path: 'past/applied/acedemics', component: PastAAComponent },
  { path: 'past/visual/arts', component: PastArtsComponent },
  { path: 'past/world/lang', component: PastLangComponent },
  { path: 'past/general/electives', component: PastGenElecComponent },
  { path: 'past/classes', component: Past1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
