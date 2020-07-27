import { Injectable } from '@angular/core';

// imported HttpClient to enable us to make a request to the AP
import { HttpClient } from '@angular/common/http';

// environment class in which we put our API url.
import {environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  // property quote and assigned it the type of our Quote
  quote: Quote;

  // njected a private http property of the type HttpClient in the constructor. 
  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
  }
  // defined a quoteRequest() method that defines the ApiResponse interface and the promise instance. 
  quoteRequest(){
    interface ApiResponse{
      quote:string;
      author:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = "Never, never, never give up"
        this.quote.author = "Winston Churchill"

        reject(error)
      })
    })
    return promise
    
  }
}





