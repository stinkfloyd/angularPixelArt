import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  private NUM_OF_ROWS = 50// 50 max looks good
  private NUM_OF_COLS = 50 // 100 max looks good
  private rows = []
  private cols = []
  @Input() currentColor

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.NUM_OF_ROWS; i++) {
      this.rows.push(i)
    }

    for (let i = 0; i < this.NUM_OF_COLS; i++) {
      this.cols.push(i)
    }
  }

  click = (event) => {
    if (event.target.classList.contains('off')) {
      event.target.classList.replace('off', 'on')
      event.target.setAttribute('style', `background-color : ${this.currentColor}`)
    } else {
      event.target.classList.replace('on', 'off')
      event.target.setAttribute('style', 'background-color: white')
    }
  }

}
