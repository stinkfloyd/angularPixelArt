import { Component, OnInit } from '@angular/core'
import { PRIMARY_OUTLET } from '@angular/router'

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  private NUM_CUSTOM_COLORS = 8
  primary = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white']
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
  }

}
