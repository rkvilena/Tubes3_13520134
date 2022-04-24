import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        BackgroundComponent,
        HomeComponent,
        TestComponent,
        AddComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
