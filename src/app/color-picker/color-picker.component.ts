import { Component, OnInit, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private NUM_CUSTOM_COLORS = 8
  primary = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white']
  // tslint:disable-next-line:no-output-on-prefix
  @Output() colorChange: EventEmitter<any> = new EventEmitter()
  current = 'black'
  custom = []

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.NUM_CUSTOM_COLORS; i++) {
      this.custom.push(i)
    }

    this.primary.forEach((color) => {
      console.log(color)
    })
  }

  click = (event) => {
    this.current = event.target.id
    this.colorChange.emit(event.target.id)
  }

}
