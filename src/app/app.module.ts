import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TaskModule} from "./task/task.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
