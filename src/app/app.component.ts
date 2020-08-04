import { Component ,OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  publicIP;

  title = 'Basics';
  Name = 'S.M.Krishna';
  Backgroundcolor = 'Red';
  imagePath = './assets/angular.png';
  bgColor='Yellow';
  ShowData :string= "S.M.Krishna";
  docPath : string ="./assets/Doc.pdf";
  condition : boolean = true;
  
   @ViewChild(HeaderComponent) header;
  
  componentName :string;

  topics = ["DataBinding","Components","Modules", "Pipes","Services"]

constructor(private http:HttpClient) {
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {  this.publicIP=data['ip'];
    });

  }


  ngAfterViewInit() {
    this.componentName = this.header.componentName        
  }


  buttonClicked(){
    alert("Button Clicked");
    console.log("Button Clicked");
  }

  openComponent(){

  }
}
