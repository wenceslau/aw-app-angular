import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-heart",
  templateUrl: "./heart.component.html",
  styleUrl: "./heart.component.scss"
})
export class HeartComponent {

  @Input() testId: string = "";
  @Input() selected: boolean = false;
  @Output() clickFavorite = new EventEmitter<any>();

  onClickFavorite(event: Event) {
    this.clickFavorite.emit("onClickFavorite " + event.type);
  }
}
