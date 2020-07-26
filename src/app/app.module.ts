import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// here  we have imported the FormsModule and then added it to our imports array
import { FormsModule } from '@angular/forms';
//  imported the HttpClientModule and added it to the imports array
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalMwasComponent } from './goal-mwas/goal-mwas.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    GoalMwasComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // We are going to use this module to access a random quote API and display the quotes on our app
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
