import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpRequestInterceptor } from './shared/http-loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
