import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from '../models/user-model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<UsersResponse>(environment.usersUrl)
  }
}
