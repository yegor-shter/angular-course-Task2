import { Component, OnInit, Input  } from '@angular/core';
import {UsersGeneratorComponent} from './../users-generator/users-generator.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  @Input()
  getUsr: UsersGeneratorComponent[];
  constructor() { }
  ngOnIni(){}



}
