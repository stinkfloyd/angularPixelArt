import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  private NUM_OF_ROWS = 20// 50 max looks good
  private NUM_OF_COLS = 40 // 100 max looks good
  private rows = []
  private cols = []

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
      event.target.setAttribute('style', 'background-color : black')
    } else {
      event.target.classList.replace('on', 'off')
      event.target.setAttribute('style', 'background-color: white')
    }
  }

}
