import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Shared Classes and types/users';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  private _Url: string = 'https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._Url)
  }
}
