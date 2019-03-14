import { Component, OnInit, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Output() colorChange: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  change = (event) => {
    this.colorChange.emit(event)
  }

}
