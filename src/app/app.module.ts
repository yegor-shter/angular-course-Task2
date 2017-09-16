import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserService} from './user-module/user.service';
import { AppComponent } from './app.component';

import {UserModuleModule} from './user-module/user-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModuleModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
