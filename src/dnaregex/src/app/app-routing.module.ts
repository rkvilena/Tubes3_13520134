import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'add', component: AddComponent },
    { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
    
export class AppRoutingModule { }
