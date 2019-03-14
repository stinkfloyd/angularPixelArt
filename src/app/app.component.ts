import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pixelCanvas') pixelCanvas: ElementRef
  title = 'angularPixelArt'
  rows = 25
  cols = 25
  currentColor = 'black'

  colorChange = (color) => {
    this.currentColor = color
  }

  quickFill = () => {
    this.pixelCanvas.pixelCanvas.nativeElement.querySelectorAll('td').forEach(td => td.style.backgroundColor = this.currentColor)
  }

  sizeChange = (event) => {
    this.rows = event.target.height.value
    this.cols = event.target.width.value
    this.pixelCanvas.makeGrid(this.rows, this.cols)
  }
}
