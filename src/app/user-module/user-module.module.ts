import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersGeneratorComponent} from './smart-component/users-generator/users-generator.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UsersGeneratorComponent],
  exports: [UsersGeneratorComponent],
  providers: [UserService]
})
export class UserModuleModule { }
