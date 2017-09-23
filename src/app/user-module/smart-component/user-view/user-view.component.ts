import { Component, OnInit, Input  } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  @Input()
  protected user: User;
  constructor() { }
  ngOnIni() {}

  // Creating new array of pictures from object through get.
  public get images(): string[] {
    return [this.user.picture.large, this.user.picture.medium, this.user.picture.thumbnail];
  }
}
