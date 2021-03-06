import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersGeneratorComponent} from './smart-component/users-generator/users-generator.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserViewComponent } from './smart-component/user-view/user-view.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { PictureDirective } from './directives/picture.directive';
import { ConfirmDirective } from './directives/confirm.directive';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UsersGeneratorComponent, UserViewComponent, DateFormatPipe, PictureDirective, ConfirmDirective],
  exports: [UsersGeneratorComponent],
  providers: [UserService]
})
export class UserModuleModule { }
