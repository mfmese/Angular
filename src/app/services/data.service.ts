import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeyValue } from '../models/key-value';
import { IDValue } from '../models/id-value';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://api.icndb.com';
  constructor(private http: HttpClient) { }
  // getAddress(): Observable<Joke[]> {
  //   return this.http
  //     .get<JokeResult>(
  //     `${this.API_BASE_URL}/jokes/random/5?escape=javascript&limitTo=[nerdy]`
  //     )
  //     .pipe(map(result => result.value));
  // }


  getCountries(): Observable<IDValue[]> {

      const mocked: IDValue[] = [
        {Id:1, Value:'Turkey'}, 
        {Id:2, Value:'USA'}
      ];
      // returns an Observable that emits one value, mocked; which in this case is an array,
      // and then a complete notification
      // You can easily just add more arguments to emit a list of values instead
      return of(mocked);
  }

  getStates(): Observable<IDValue[]> {

    const mocked: IDValue[] = [
      {Id:1, Value:'Ege'}, 
      {Id:2, Value:'Marmara'}
    ];
    return of(mocked);
}

getCities(): Observable<IDValue[]> {

  const mocked: IDValue[] = [
    {Id:1, Value:'Istanbul'}, 
    {Id:2, Value:'Ankara'}
  ];
  return of(mocked);
}

getDistricties(): Observable<IDValue[]> {

  const mocked: IDValue[] = [
    {Id:1, Value:'Çekmeköy'}, 
    {Id:2, Value:'Kadıköy'}
  ];
  return of(mocked);
}
}