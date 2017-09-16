import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User, Response} from './user';

@Injectable()
export class UserService {
  private readonly apiUrl ='https://randomuser.me/api';
  public users: User[] =[];
  private user: User;
  constructor(private httpClient: HttpClient) { }

  public async get(seed: string): Promise<User>{
    let params = new HttpParams();
    params= params.set('inc', 'name, email, phone, dob, picture');

    if(seed){
      params =params.set('seed', seed);
    }
    const response = await this.httpClient
      .get<Response>(this.apiUrl,{params})
      .toPromise<Response>();

    return {
      name: response.results[0].name,
      email: response.results[0].email,
      phone: response.results[0].phone,
      picture: response.results[0].picture,
      dob: new Date(response.results[0].dob)
    };
  }

  public async loadUser(){


    let seed: string;

    //try {
      while(true){
        const person = await this.get(seed);
        seed = person.email;
        if(person.dob.getFullYear() >1975)
          {
            this.user = person;
          }else{
            this.user = person;
            this.users.push(this.user);
            break;
          }
          this.users.push(this.user);
      }

    // } catch (error) { console.error(error);

    // }
  }


}