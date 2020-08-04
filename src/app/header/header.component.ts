import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   //message = "SMK";
  
  constructor(route: ActivatedRoute) { 
    //this.message = route.snapshot.component.toString();
  }

  ngOnInit(): void {
    
  }

}
