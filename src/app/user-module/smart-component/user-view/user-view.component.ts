import { Component,  } from '@angular/core';
import {UsersGeneratorComponent} from './../users-generator/users-generator.component';
import { User } from '../../user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  public usrView= this.usrGen.getUsr;
  constructor(private usrGen: UsersGeneratorComponent) { }



}
