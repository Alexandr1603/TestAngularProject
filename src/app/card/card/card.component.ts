import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

title = 'MY CARD TITLE';
text = 'My sample text';

ngOnInit() {}

changeTitle() {
  this.title = 'Title has been changed!';
}

inputHealder(value) {
  // const value = event.target.value;
  this.title = value;
}

changeHealder() {
  console.log(this.title)
}

}
