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
  constructor(private userService: UserService) {}
  getUsers() {
    this.userService.getUsers().subscribe((res: any[]) => {
      console.log(res)
      this.usersData = res
    })
  }
}
