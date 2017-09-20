import { Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import { User } from '../../user';
import {PictureDirective} from './../../directives/picture.directive';

@Component({
  selector: 'app-users-generator',
  templateUrl: './users-generator.component.html',
  styleUrls: ['./users-generator.component.css']
})
export class UsersGeneratorComponent implements OnInit {
  private users: User[]; // = this.userService.users;
  private selectedUser: User; // = this.userService.user;
 constructor(private userService: UserService) { }


  async ngOnInit() {
    this.users = await this.userService.loadUser();
    console.log(this.users);

  }
  selectUser(user) {
    this.selectedUser = user;
    // this.getUsr = this.userService.getUserById(id);
    console.log(this.selectedUser);
    // this.users = this.users.filter(u => u.id !== user.id);
  }
}
