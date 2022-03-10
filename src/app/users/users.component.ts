import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../servises/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userServive:UserserviceService) { }

  usersList:any;
  ngOnInit(): void {
    this.userServive.getUsers().subscribe((data)=>{
      this.usersList = data;
    })
  }

}
