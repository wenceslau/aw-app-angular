import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlEndpoint = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {
  }

  get(endpoint: string): Observable<any> {
    return this.http.get(this.urlEndpoint + endpoint);
  }
}
