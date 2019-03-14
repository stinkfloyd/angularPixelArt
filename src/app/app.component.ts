import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pixelCanvas') pixelCanvas: ElementRef
  title = 'angularPixelArt'

  currentColor = 'black'

  colorChange = (color) => {
    console.log('colorChange')
    this.currentColor = color
  }

  quickFill = () => {
    this.pixelCanvas.pixelCanvas.nativeElement.querySelectorAll('td').forEach(td => td.style.backgroundColor = this.currentColor)
  }
}
