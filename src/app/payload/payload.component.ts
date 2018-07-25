import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.css']
})
export class PayloadComponent {

  public searchProperties;
  public searchKeywords;
  public searchKeywordIndex=0;
  public timer;
  public personalities;

  constructor(private http:HttpClient) {
    this.searchProperties =JSON.parse(window.localStorage.getItem("searchProperties"));
    this.http.get('assets/data.json').subscribe(data=>{
      this.personalities = data;
      this.detoxProfile()
    });
   }

  detoxProfile(){
    this.searchKeywords = this.personalities.find( personality => personality.name === this.searchProperties.selectedPersonality ).data; 
    this.timer = setInterval(()=>{
      this.openWindow();
    }, this.getMiliseconds());
  }

  //Open new tab with keywords
  openWindow(){
    if(this.searchKeywords[this.searchKeywordIndex]){
      window.open("http://google.com/search?q="+this.searchKeywords[this.searchKeywordIndex])
      this.searchKeywordIndex += 1;
    }
    else{
      this.searchKeywordIndex = 0;
      clearInterval(this.timer);
    }
  }

  getMiliseconds(){
    if(this.searchProperties.selectedTimeFormat === "secs"){
      return this.searchProperties.selectedTimeInterval * 1000;
    }
    else if(this.searchProperties.selectedTimeFormat === "mins"){
      return this.searchProperties.selectedTimeInterval * 60000;
    }
    else if(this.searchProperties.selectedTimeFormat === "hrs"){
      return this.searchProperties.selectedTimeInterval * 3600000;
    }
  }
}
