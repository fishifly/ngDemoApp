import { Component, OnInit } from '@angular/core';
import { trigger, style, keyframes, transition, animate, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

// interpolation in action
itemCount;
nameHero = 'FishiFlyFishi';
// interpolation ends here

// property Binding
btnText = 'Add an item';
// property Binding ends here

// 2-way data binding
goalText;

// defining an array
goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    // a life cycle hook that initiates when the app loads
    // sets the length of the array(goals) to itemCount by counting it
     this._data.goal.subscribe(res => this.goals = res);
     this.itemCount = this.goals.length;
     this._data.changeGoal(this.goals);
  }

  addItem() {
    // pushes into the array with the 'push' method
    // pushing an array into a string to output the string(goalText)
    this.goals.push(this.goalText);
    // clears out after the input is submitted
    this.goalText = '';
    // recounts it after it has done the above
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
