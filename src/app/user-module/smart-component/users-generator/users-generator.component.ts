import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service'

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css']
})
export class UsersGeneratorComponent implements OnInit {

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.loadUser();
    console.log(this.userService.users);
  }

}
