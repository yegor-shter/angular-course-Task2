import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css']
})
export class UsersGeneratorComponent implements OnInit {
 private gotUsers: User[] = this.userService.users;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.loadUser();
    console.log(this.gotUsers);
  }

}
