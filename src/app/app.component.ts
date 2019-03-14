import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pixelCanvas') pixelCanvas
  title = 'angularPixelArt'
  num_rows = 25
  num_cols = 25
  currentColor = 'black'

  colorChange = (color) => {
    this.currentColor = color
  }

  quickFill = () => {
    this.pixelCanvas.pixelCanvas.nativeElement.querySelectorAll('td').forEach(td => td.style.backgroundColor = this.currentColor)
  }

  sizeChange = (event) => {
    this.num_rows = event.target.height.value
    this.num_cols = event.target.width.value
    this.pixelCanvas.makeGrid(this.num_rows, this.num_cols)
  }
}
