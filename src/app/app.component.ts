import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data;
  currentKeywords;
  currentKeywordIndex:number = 0;
  timer;
  choosenPersonality;
  timeInterval:number=1;

  constructor(private http:HttpClient){
    this.http.get('assets/data.json').subscribe(res=>{
      this.data = res; 
    })
  }

  destroyGoogle(){
    this.currentKeywords = this.data.personalities[this.choosenPersonality]; 
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
