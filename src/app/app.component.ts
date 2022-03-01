import { Component } from '@angular/core';

@Component({
  selector: 'myfirstapp-root', //myfirstapp-root //index.html
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']
})

//i)	What’s Decorator function?
//It is used with the @component() function to describe the class

//ii)	And why we need @component() function in the component.ts file.
// It is used to store additional information about the class


export class AppComponent {
  title = 'Angular project';
}
