import { Component, OnInit } from '@angular/core';

import { Goal } from '../goal';


// Let's inject services it into our goal component.
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';



// We can now make a HTTP request to the API in our goal component
import { HttpClient } from '@angular/common/http';

import { Quote } from '../quote-class/quote';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  // goals: Goal[] = [
  //   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
  //   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
  //   new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
  //   new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
  //   new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
  //   new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  //  ];
 
  //  creates a property goals and assigned it our Goals type
  goals:Goal[];

  
  // created a property alertService and assigned it our AlertService type
  alertService:AlertService;

    // created a property quote  and assigned it our Quote type

  quote:Quote;


 

   toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
    }

  
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)

        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }


  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)

  }
  

  // To make the service available in the component, we have added it to the constructor function
  // we have created a property http which is of the type HttpClient
  
  
  
  // constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient ) {

  //   this.goals = goalService.getGoals()

  //   // added code that uses the alertMe() method from the alert service
  //   this.alertService = alertService;


  //  }

  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService) {
   
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }








  // ngOnInit(): void {
  //   // Before we make the request, we need to inform Angular the kind of response we'll receive from the API by defining an interface which we have named ApiResponse.
  //   interface ApiResponse{
  //     author:string;
  //     quote:string;
  //     // Inside the interface, we have specified that we'll be expecting a property author and quote which are both of the type string.
  //   }

  //   // made a request to the API with the get function passing in the API URL accompanied by the interface for the data we expect to receive
  //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
  //     // Succesful API request
  //     // We have then called the subscribe function which has a data function that is executed when the request is successful. We then create a new quote instance with the properties we get from the response
  //     this.quote = new Quote(data.author, data.quote)
  //     // We then create a new quote instance with the properties we get from the response.

  //   },
  //   // if we make a bad request to the API and we get no response, or even worse, the servers are down and not working?    
  //   err=>{
  //     this.quote = new Quote("Winston Churchill","Never never give up!")
  //     console.log("An error occurred")
  //     // added the err function and specified the quote instance that should be created when we get no response and the error message to be logged in the console
    
    
  //   })
    
  // }

  // using HTTP requests using Promises, we have the following:

  ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
    // Inside the ngOnInit lifecycle hook, we have called the quoteRequest() method from the service and created a quote instance with the promise object we will receive from the service.
  }



}
