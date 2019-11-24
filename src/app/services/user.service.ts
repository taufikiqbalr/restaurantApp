import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jalan-yuk.herokuapp.com/users';

  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    var reqHeader = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzI2Mzk4NzYsIm5iZiI6MTU3MjYzOTg3NiwianRpIjoiMjRmODk5YjItMjU4MC00NzQ1LTlmYzktYzcxNTJmZjE5MTlkIiwiaWRlbnRpdHkiOiJ0ZXN0IiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Jvw8kTbwWGUIq5cH0l7hOnIPhoUihgh_zDUZJJ1J9bg"
    });

    return this.http.get(`${this.url}`, { headers: reqHeader }).pipe(
      map(results => results['users'])
    );
  }
}
