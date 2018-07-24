import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data;
  currentKeywords;
  currentKeywordIndex:number = 0;
  timer;
  currentPersonality;
  timeInterval:number=1;

  constructor(private http:HttpClient){
   this.http.get('assets/data.json').subscribe(data=>{
      this.data = data;
    })
  }

  destroyGoogle(){
    this.currentKeywords = this.data.find( personality => personality.name === this.currentPersonality ).data; 
    console.log(this.currentKeywords);
    this.timer = setInterval(()=>{
      //Open window with new keyword
      this.openWindow();
    }, this.timeInterval*60000);
  }
  
  //Open new tab with keywords
  openWindow(){
    if(this.currentKeywords[this.currentKeywordIndex]){
      window.open("http://google.com/search?q="+this.currentKeywords[this.currentKeywordIndex])
      this.currentKeywordIndex += 1;
    }
    else{
      this.currentKeywordIndex = 0;
      clearInterval(this.timer);
    }
  }

}
