import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {} // this is the default syntax

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.getData(); // call service here

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  // public data: string[] = [
  //   'Badminton',
  //   'Basketball',
  //   'Cricket',
  //   'Golf',
  //   'Hockey',
  //   'Rugby',
  // ];

  //these are default dropdownsettings
  getData(): void {
    let tmp = [];
    this.http
      .get<any>('https://mocki.io/v1/39ed390e-cdde-494e-87c8-34c12c374de2')
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          tmp.push({ item_id: i, item_text: data[i].department });
        }
        this.dropdownList = tmp;
      });
  }

  onSubmitTemplateBased(user) {
    console.log(user);
  }
}

//   getData(): Observable<number | null> {
//     let tmp = [];
//     return this.http
//       .get<any>('https://mocki.io/v1/39ed390e-cdde-494e-87c8-34c12c374de2')
//       .pipe(
//         map((data) => {
//           for (let i = 0; i < data.length; i++) {
//             return tmp.push({ item_id: i, item_text: data[i].name });
//           }
//           this.dropdownList = tmp;
//         })
//       );
//   }
// }
