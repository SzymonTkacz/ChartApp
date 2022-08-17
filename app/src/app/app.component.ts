import { Component } from '@angular/core';
import { User } from './models/user-model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  usersData: User[]
  oldestUsers: User[]
  constructor(private userService: UserService) {}
  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.oldestUsers = res.results.sort((a, b) => new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime()).slice(0,10);
      console.log(this.oldestUsers)
      this.usersData = res.results
    })
  }
}
