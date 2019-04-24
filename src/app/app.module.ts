import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialArray } from '../variables';
import { AppRoutingModule } from './routing.app.module';
import { TodoComponent } from './components/todos-component/todos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, ...MaterialArray],
  declarations: [ AppComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
