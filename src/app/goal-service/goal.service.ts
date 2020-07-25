import { Injectable } from '@angular/core';
import { Goals } from '../goals';


@Injectable({
  providedIn: 'root'
})
export class GoalService {
  // Let's create a service that will share our goals among classes that need it.


  getGoals(){
    return Goals
  }


  constructor() { }
}
