import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-cards',
  templateUrl: './intro-cards.component.html',
  styleUrls: ['./intro-cards.component.css']
})
export class IntroCardsComponent implements OnInit {

  description = 'هي مبادرة تسعى إلى تقليص فجوة التواصل بين المتبرعين وبنوك الدم حتى تصبح عملية التبرع بالدم أسهل.';
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
  'متبر وتين فخور بكل فرد مبادر بالعطاء على عمله الإنساني. {وَمَنْ أَحْيَاهَا فَكَأنَّمَا أَحْيَا النَّاسَ جَمِيْعَاً} المائدة:٣٢',
  'أشخاص ينتظرون تبرعك اليوم!',
  'Using just a simple smartphone picture, Plantix image recognition \
          is able to detect more than 240 plant pests & diseases automatically.'
];
