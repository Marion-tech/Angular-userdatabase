import { Component, VERSION } from '@angular/core';
import { dataFirstNames } from './models/data.names';
import { IUser, IUserList } from './models/interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //private dataFirstNames: string[];

  constructor() {
    this.generateUsers(15);
  }

  private generateUsers(nb: number): IUserList {
    let nomprenom: IUserList = {
      userList: [],
    };

    for (let i = 0; i < nb; i++) {
      let randomIndiceFN = Math.round(
        Math.random() * dataFirstNames.length - 1
      );
      let randomIndiceLN = Math.round(
        Math.random() * dataFirstNames.length - 1
      );

      nomprenom.userList.push({
        firstname: dataFirstNames[randomIndiceFN],
        name: dataFirstNames[randomIndiceLN].toUpperCase(),
      });
    }
    console.log('Generate', nb, 'users: ', nomprenom);
    return nomprenom;
  }
}
