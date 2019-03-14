import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ColorPickerModule } from 'ngx-color-picker'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GridComponent } from './grid/grid.component'
import { ColorPickerComponent } from './color-picker/color-picker.component'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ColorPickerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
