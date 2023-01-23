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
  public nomprenom: IUserList = {
    userList: [],
  };

  constructor() {
    this.generateUsers(15);
  }

  private generateUsers(nb: number): IUserList {
    for (let i = 0; i < nb; i++) {
      let randomIndiceFN = Math.round(
        Math.random() * dataFirstNames.length - 1
      );
      let randomIndiceLN = Math.round(
        Math.random() * dataFirstNames.length - 1
      );

      this.nomprenom.userList.push({
        firstname: dataFirstNames[randomIndiceFN],
        name: dataFirstNames[randomIndiceLN].toUpperCase(),
      });
    }
    console.log('Generate', nb, 'users: ', this.nomprenom);
    return this.nomprenom;
  }
}
