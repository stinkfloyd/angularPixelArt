import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() NUM_OF_ROWS
  @Input() NUM_OF_COLS
  private rows = []
  private cols = []
  @Input() currentColor
  @ViewChild('pixelCanvas') pixelCanvas: ElementRef
  private down = false

  constructor() { }

  ngOnInit() {

    this.makeGrid(this.NUM_OF_ROWS, this.NUM_OF_COLS)
  }

  dblClick = (event) => {
    event.target.setAttribute('style', 'background-color: white')
  }

  pixelColor = (event) => {
    event.target.setAttribute('style', `background-color : ${this.currentColor}`)

  }

  dragColor = (event) => {
    event.preventDefault()
    this.down = true
    this.pixelCanvas.nativeElement.addEventListener('mouseup', () => {
      this.down = false
    })
    this.pixelCanvas.nativeElement.addEventListener('mouseleave', () => {
      this.down = false
    })
    this.pixelCanvas.nativeElement.addEventListener('mouseover', (e) => {
      if (this.down) {
        if (e.target.tagName === 'TD') {
          e.target.style.backgroundColor = this.currentColor
        }
      }
    })
  }

  fill = () => {
    this.pixelCanvas.nativeElement.querySelectorAll('td').forEach(td => td.style.backgroundColor = this.currentColor)
  }

  makeGrid = (rows, cols) => {
    console.log('making grid')
    console.log('NUM ROWS', this.NUM_OF_ROWS)
    this.rows = []
    this.cols = []
    for (let i = 0; i < rows; i++) {
      this.rows.push(i)
    }

    for (let i = 0; i < cols; i++) {
      this.cols.push(i)
    }
  }
}
