import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-cards',
  templateUrl: './intro-cards.component.html',
  styleUrls: ['./intro-cards.component.css']
})
export class IntroCardsComponent implements OnInit {

  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore';
  intro_cards = [
    { imgURL: '../../assets/images/leaf.png', text: card1_text[0] },
    { imgURL: '../../assets/images/takephoto.png', text: card1_text[1] },
    { imgURL: '../../assets/images/potions.png', text: card1_text[2] }
  ];
  constructor() { }

  ngOnInit() {
  }

}
const card1_text = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  'Using just a simple smartphone picture, Plantix image recognition \
          is able to detect more than 240 plant pests & diseases automatically.'
];
