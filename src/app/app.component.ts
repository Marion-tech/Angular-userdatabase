import { Component, VERSION } from '@angular/core';
import {
  formControl,
  forms,
} from '@angular/core/schematics/migrations/typed-forms/util';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isFunction } from 'rxjs/internal/util/isFunction';
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
  public homonymelist: number[] = [];
  public formGroup = new FormGroup({
    idMale: new FormControl(null, Validators.required),
    idFemale: new FormControl(null, Validators.required),
  });
  private id: number;

  constructor() {
    this.generateUsers(5);
    this.homonyme();
    this.formGroup.statusChanges.subscribe(console.log);
    this.id = this.nomprenom.userList.length;
  }

  public checkHomonyme(id): boolean {
    return !!this.homonymelist.find((cherche: number) => id === cherche);
  }

  private generateUsers(nb: number): void {
    for (let i = 0; i < nb; i++) {
      let randomIndiceFN = Math.round(
        Math.random() * (dataFirstNames.length - 1)
      );
      let randomIndiceLN = Math.round(
        Math.random() * (dataFirstNames.length - 1)
      );
      let randomIndiceGenre = Math.round(Math.random() * 1);
      let randomAge = 9 + Math.round(Math.random() * 90);
      let randomWeight = 30 + Math.round(Math.random() * 180);

      this.nomprenom.userList.push({
        id: i + 1,
        firstname: dataFirstNames[randomIndiceFN],
        name: dataFirstNames[randomIndiceLN].toUpperCase(),
        genre: randomIndiceGenre === 0 ? 'F' : 'M',
        age: randomAge,
        weight: randomWeight,
      });
    }
    console.log('Generate', nb, 'users: ', this.nomprenom);
  }

  private homonyme(): void {
    let concat: IUser[] = this.nomprenom.userList.sort((a, b) =>
      a.firstname + a.name > b.firstname + b.name ? 1 : -1
    );

    concat.forEach((user: IUser, i) => {
      if (
        concat[i + 1] &&
        user.name + user.firstname ===
          concat[i + 1].name + concat[i + 1].firstname
      ) {
        this.homonymelist.push(user.id);
        this.homonymelist.push(concat[i + 1].id);
      }
    });
    console.log(
      'concat',
      this.nomprenom.userList.sort((a, b) => (a.id > b.id ? 1 : -1))
    );

    console.log('homonyme', this.homonymelist);

    let toto = this.nomprenom.userList.filter((user: IUser) => {
      return !!this.nomprenom.userList.find((user2: IUser) => {
        if (
          user.id !== user2.id &&
          user.firstname === user2.firstname &&
          user.name === user2.name
        ) {
          return true;
        } else {
          return false;
        }
      });
    });
    console.log(toto);
  }

  public addAge(id: number): void {
    this.nomprenom.userList.forEach((user: IUser) => {
      if (user.id === id) {
        return (user.age = user.age + 1);
      }
    });
  }

  public loveMaking(): void {
    //this.nomprenom.userList.filter((user:IUser)=> user.id===idfemale)
    //this.generateUsers(1)
    let randomIndiceGenre = Math.round(Math.random() * 1);
    let randomIndiceWeight = Math.random() * 5;
    let idmale: number = this.formGroup.get('idMale').value;
    let idfemale: number = this.formGroup.get('idFemale').value;
    console.log('fem', idfemale);

    let child = this.nomprenom.userList.push({
      id: this.id,
      name: this.nomprenom.userList.find((user: IUser) => user.id === +idmale)
        .name,
      firstname: 'Enfant',
      genre: randomIndiceGenre === 0 ? 'F' : 'M',
      age: 0,
      weight: randomIndiceWeight,
      idmom: idfemale,
      iddad: idmale,
    });

    this.id++;

    console.log(
      'lenght',
      this.nomprenom.userList.length,
      'mom',
      idfemale + 'dad',
      idmale,
      'child',
      this.nomprenom.userList[child - 1]
    );
  }

  public death(): void {
    this.nomprenom.userList.forEach((user: IUser) => {
      let chance =
        Math.round(Math.random() * (10000 / user.age / user.weight)) === 0;
      if (chance && user.death!= true) {
        user.death = true;
        console.log('lenght', this.nomprenom.userList.length, 'mort', user);
      }
    });
  }

  private training() {
    let example = [1, 2, 3, 3, 4, 4, 5, 8, 9, 9];
    let sansDoublons = [];
    for (let i = 0; i < example.length - 1; i++) {
      if (example[i] !== example[i + 1]) {
        sansDoublons.push(example[i]);
      }
    }
    console.log('For sans doublons', sansDoublons);

    let newtab = [];
    example.forEach((num, i) => {
      if (num !== example[i + 1]) {
        newtab.push(num);
      }
    });
    console.log('Foreach sans doublons :', newtab);
    console.log('Filter sans doublons ?');
  }
}
