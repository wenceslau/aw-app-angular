import {Component} from '@angular/core';
import {PokeapiService} from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aw-app-angular';
  items: any = [];

  constructor(private pokeapiService: PokeapiService) {

    this.pokeapiService.get('/pokemon?limit=20')
      .subscribe({
        next: (data) => {
          this.loadDetails(data.results);
        },
        error: (e) => console.error(e)
      });

  }

  loadDetails(items: any) {
    const promises = items.map((item: { url: string | URL | Request; }) => {
      return fetch(item.url).then((response) => response.json());
    });
    Promise.all(promises)
      .then((data) => {
        this.items = data;
      });
  }

}
