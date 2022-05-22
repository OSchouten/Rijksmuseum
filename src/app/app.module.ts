import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ErrorComponent} from "./components/error/error.component";
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
