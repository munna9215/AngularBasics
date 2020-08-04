import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {


  players : any =[

    {
      'Name': 'Rohit Sharma',
      'DOB': 'April 30, 1987',
      'Image':'./assets/Rohit.jpg',
      'Majorteam' :'India, Mumbai Indians',
      'Battingstyle' : 'Right-Hand Bat',
      'Bowlingstyle' : 'Right-Arm Offbreak',
      'Playingrole' : 'All-Rounder'
    }
    ,
    {
      'Name': 'Virat Kohli',
      'DOB': 'November 5, 1988',
      'Image':'./assets/virat-kohli.jpg',
      'Majorteam' :'India, Royal Chanlengers',
      'Battingstyle' : 'Right-Hand Bat',
      'Bowlingstyle' : 'Right-Arm Medium',
      'Playingrole' : 'Lower Middle Order Batsman'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
