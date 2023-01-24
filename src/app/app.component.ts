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
  public homonymelist: string[] = [];

  constructor() {
    this.generateUsers(25);
    this.homonyme();
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
        id: i + 1,
        firstname: dataFirstNames[randomIndiceFN],
        name: dataFirstNames[randomIndiceLN].toUpperCase(),
      });
    }
    console.log('Generate', nb, 'users: ', this.nomprenom);
  }

  private homonyme(): void {
    let concat = this.nomprenom.userList.map((user:IUser) => user.id + ' - '+ user.firstname+user.name).sort((a,b)=> a.firstname > b.firstname ? 1 : -1);
    console.log('concat', concat);

    //this.homonymelist = concat.filter((name1:string)=> this.homonymelist.includes(name1) )
    //this.homonymelist = concat.find((name:string)=> concat.find((name2:string)=> name===name2))
    console.log(this.homonymelist);
    //return;
  }
}
