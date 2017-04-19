import { Component } from '@angular/core';

@Component({
  selector: 'movie',
  template: `
    <h1>{{name}}'s Top Tens</h1>
    <button (click)="toggle2016()">{{show2016 ? "Hide 2016" : "Show 2016"}}</button>
    <div *ngIf="show2016">
      <h3>Movies 2016:</h3>
      <ol>
        <li *ngFor="let movie of movies2016">{{movie}}</li>
        <li>{{missing2016}}</li>
      </ol>
      <form>
        <label>Number 11: </label>
        <br>
        <input type="text" name="missing2016" [(ngModel)]="missing2016"/>
      </form>
    </div>



    <hr>
    <button (click)="toggle2015()">{{show2015 ? "Hide 2015" : "Show 2015"}}</button>
    <div *ngIf="show2015">
      <h3>Movies 2015:</h3>
      <ol>
        <li *ngFor="let movie of movies2015; let i = index">
          {{movie}} <button (click)="deleteMovie2015(i)">X</button>
        </li>
      </ol>
      <form (submit)="addMovie2015(movie2015.value)">
        <label>Add 2015 Movie: </label><br>
        <input type="text" #movie2015 /><br>
      </form>
    </div>
  `,
})
export class MovieComponent  {
  name: string;
  movies2016: string[];
  movies2015: string[];
  missing2016: string;
  show2015: boolean;

  constructor(){
    this.name = 'Joel';
    this.email = 'joeltwaage@gmail.com';
    this.movies2016 = ['Moonlight','The VVitch','Elle','The Lobster','Jackie','Mancheego by the Cheese','OJ: Made in America','A Monster Calls','Hunt for the Wilderpeople','Captain Fantastic'];
    this.missing2016='',
    this.movies2015 = ['Mad Max: Fury Road','Spotlight','Spy','Carol','Hateful 8','Anomalisa','Steve Jobs','Inside Out','The Martian','Sicario'];
    this.show2016 = false;
    this.show2015 = false;
  }

  toggle2016(){
    if(this.show2016 == true){
      this.show2016 = false;
    } else {
      this.show2016 = true;
    }
  }

  toggle2015(){
    if(this.show2015 == true){
      this.show2015 = false;
    } else {
      this.show2015 = true;
    }
  }
  addMovie2015(movie2015){
    this.movies2015.push(movie2015);
  }
  deleteMovie2015(i){
    this.movies2015.splice(i, 1);
  }
}
