import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public personalities:Observable<object>;
  public searchProperties:Object = {
    selectedPersonality:"singer",
    selectedTimeFormat:"mins",
    selectedTimeInterval:1
  }

  constructor(private http:HttpClient){
   this.personalities = this.http.get('assets/data.json');
  }

  uploadPayload(){
    // window.open("/payload","Let the revolution begin","resizable,scrollbars");
    window.localStorage.setItem("searchProperties",JSON.stringify(this.searchProperties));
    
  }
}
