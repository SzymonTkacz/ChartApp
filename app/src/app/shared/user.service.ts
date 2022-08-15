import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "https://randomuser.me/api/?results=3"
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(this.usersUrl)
  }
}
