import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../servises/postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postServive:PostserviceService) { }

  postList:any;
  ngOnInit(): void {
    this.postServive.getUsers().subscribe((data)=>{
      this.postList = data;
    })
  }
}
