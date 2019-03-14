import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  private NUM_OF_ROWS = 20// 50 max looks good
  private NUM_OF_COLS = 20 // 100 max looks good
  private rows = []
  private cols = []
  @Input() currentColor
  @ViewChild('pixelCanvas') pixelCanvas: ElementRef
  private down = false

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.NUM_OF_ROWS; i++) {
      this.rows.push(i)
    }

    for (let i = 0; i < this.NUM_OF_COLS; i++) {
      this.cols.push(i)
    }
  }

  dblClick = (event) => {
    event.target.setAttribute('style', 'background-color: white')
  }

  pixelColor = (event) => {
    event.target.setAttribute('style', `background-color : ${this.currentColor}`)

  }

  dragColor = (event) => {
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
}
