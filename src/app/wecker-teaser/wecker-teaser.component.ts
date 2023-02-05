import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeckerDTO} from "../dto/WeckerDTO";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-wecker-teaser',
  templateUrl: './wecker-teaser.component.html',
  styleUrls: ['./wecker-teaser.component.scss']
})
export class WeckerTeaserComponent {
  @Input() wecker!: WeckerDTO;
  @Output() changedWecker: EventEmitter<WeckerDTO> = new EventEmitter<WeckerDTO>();

  constructor() {

  }

  toggleEnabled($event: MatSlideToggleChange) {
    this.wecker.enabled = $event.checked;
    this.changedWecker.emit(this.wecker);
  }
}
