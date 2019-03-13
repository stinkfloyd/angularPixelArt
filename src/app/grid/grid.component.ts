import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  private NUM_OF_ROWS = 50 // 50 looks good
  private NUM_OF_COLS = 100 // 100 looks good
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

}
