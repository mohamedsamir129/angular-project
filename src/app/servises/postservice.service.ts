import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../Shared Classes and types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }
  private _Url: string = 'https://jsonplaceholder.typicode.com/posts'
  getUsers():Observable<Ipost[]>
  {
    return this.http.get<Ipost[]>(this._Url)
  }
}
