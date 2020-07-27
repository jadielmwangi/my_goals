import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add two routes, one that will navigate to our goals component and another to the about component we have just created.
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';

// We now need to inform our router to direct users to this component if they look for a resource that isn't found in the app.
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
