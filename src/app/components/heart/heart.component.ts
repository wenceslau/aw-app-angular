import {Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {iterator} from "rxjs/internal/symbol/iterator";

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {

  @Input() testId: string = '';
  @Input() selected: boolean = false;
  @Output() onClick = new EventEmitter<any>();

  onClickFavorite(event: Event){
    this.onClick.emit('onClickFavorite');
  }

  protected readonly iterator = iterator;
}