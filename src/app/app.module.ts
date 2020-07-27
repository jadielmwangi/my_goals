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


    // We have imported the normal loader and the loader that listens for our HTTP requests from the app and automatically displays progress according to our apps requests
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    GoalMwasComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
        // We are going to use this module to access a random quote API and display the quotes on our app
    HttpClientModule,

    NgProgressModule.forRoot(),
    NgProgressHttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
