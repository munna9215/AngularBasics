import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  message = 'Players';

  players : any =[

    {
      'ID' : 1,
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
      'ID' : 2,
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
