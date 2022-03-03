import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  print(text:any){
    console.log(text.value)
    
  }
  date:Date=new Date;
  cars=["car1","car2","car3"];
  car="toyota"
  fullname:string="mohamed samir"
  isLoggedIn=false
  outis=false 
}
