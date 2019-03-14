import { Component, OnInit, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Output() colorChange: EventEmitter<any> = new EventEmitter()
  @Output() fill: EventEmitter<any> = new EventEmitter()
  @Output() size: EventEmitter<any> = new EventEmitter()
  color

  constructor() { }

  ngOnInit() {
  }

  change = (event) => {
    this.colorChange.emit(event)
  }

  quickFill = (event) => {
    this.fill.emit(event)
  }

  submit = (event) => {
    event.preventDefault()
    this.size.emit(event)
  }
}
