import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {

  @Input() item: any;
  isSelected = false;

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
     //this.isSelected = this.storeService.hasItem(this.item.id);
     this.isSelected = this.storeService.has(this.item.id);
  }

  handleClickFavorite() {

    if (this.isSelected) {
      //this.storeService.removeItem(this.item.id);
      this.storeService.remove(this.item.id);

    } else {
      //this.storeService.setItem(this.item.id);
      this.storeService.set(this.item.id);
    }
    this.isSelected = !this.isSelected;

  }

}
