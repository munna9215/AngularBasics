import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  
  
  heros : any =[

      {
        'Name': 'Bhgat Singh',
        'DOB': '28 September 1907',
        'Image':'./assets/bhagatsingh.jpg'
      }
      ,
      {
        'Name': 'Subhash Chandra Bose',
        'DOB': '4 July 1943',
        'Image':'./assets/bose.jpg'      
      }
    ]

  constructor() { }

  ngOnInit(): void {
   
  }

}
