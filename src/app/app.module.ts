import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServeComponent } from './serve/serve.component';
import { MainPgComponent } from './main-pg/main-pg.component';
import { AppInstructionsComponent } from './app-instructions/app-instructions.component';
import { GradePgComponent } from './grade-pg/grade-pg.component';
import { ErrorPgComponent } from './error-pg/error-pg.component';
import { GradReqPgComponent } from './grad-req-pg/grad-req-pg.component';
import { GradReqPicComponent } from './grad-req-pic/grad-req-pic.component';
import { Past1Component } from './past1/past1.component';
import { PastMathComponent } from './past-math/past-math.component';

@NgModule({
  declarations: [
    AppComponent,
    ServeComponent,
    MainPgComponent,
    AppInstructionsComponent,
    GradePgComponent,
    ErrorPgComponent,
    GradReqPgComponent,
    GradReqPicComponent,
    Past1Component,
    PastMathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
