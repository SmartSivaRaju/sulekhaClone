import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Property } from 'src/app/model/property';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellProperty: boolean) {
    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<any> = [];
        for (let id in data) {
          if (data.hasOwnProperty(id) && data[id].sell === sellProperty) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  saveProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
