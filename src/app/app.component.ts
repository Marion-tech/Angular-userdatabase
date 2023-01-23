import { Component, VERSION } from '@angular/core';
import { dataFirstNames } from './models/data.names';
import { IUser, IUserList } from './models/interfaces';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public nomprenom: IUserList = {
    userList: [],
  };

  constructor() {
    this.generateUsers(5);
  }

  private generateUsers(nb: number): void {
    for (let i = 0; i < nb; i++) {
      let randomIndiceFN = Math.round(
        Math.random() * (dataFirstNames.length - 1)
      );
      let randomIndiceLN = Math.round(
        Math.random() * (dataFirstNames.length - 1)
      );

      this.nomprenom.userList.push({
        firstname: dataFirstNames[randomIndiceFN],
        name: dataFirstNames[randomIndiceLN].toUpperCase(),
      });
    }
    console.log('Generate', nb, 'users: ', this.nomprenom);
  }
}
