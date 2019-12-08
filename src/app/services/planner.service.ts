import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  url = 'https://jalan-yuk.herokuapp.com/planner';

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    var reqHeader = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzU4MjY0ODMsIm5iZiI6MTU3NTgyNjQ4MywianRpIjoiMzZkZGQxZWMtNzhmOS00OTFiLWI5OWUtYjA1OGVhMTMyNzM2IiwiaWRlbnRpdHkiOiJ0ZXN0IiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.IvxD5OYDisOmvKuSdTliG7267TxH4dYSITlArZTTVlk"
    });

    return this.http.get(`${this.url}/bandung`, { headers: reqHeader }).pipe(
      map(results => results['hotels'])
    );
  }

  /**
  * Get data from the OmdbApi
  * map the result to return only the results that we need
  *
  * @param {string} location Search Term
  * @returns Observable with the search results
  */
 searchData(location: string): Observable<any> {
  var reqHeader = new HttpHeaders({
    //'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzU4MjY0ODMsIm5iZiI6MTU3NTgyNjQ4MywianRpIjoiMzZkZGQxZWMtNzhmOS00OTFiLWI5OWUtYjA1OGVhMTMyNzM2IiwiaWRlbnRpdHkiOiJ0ZXN0IiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.IvxD5OYDisOmvKuSdTliG7267TxH4dYSITlArZTTVlk"
  });

  return this.http.get(`${this.url}/${encodeURI(location)}`, { headers: reqHeader }).pipe(
    map(results => results['hotels'])
  );
}
}
