import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { USD2INRPipe } from './pipes/usd2-inr.pipe';
import { FirstCharCapitalPipe } from './pipes/first-char-capital.pipe';
import { RedColorDirective } from './directives/red-color.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { NgRxComponent } from './components/ng-rx/ng-rx.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/ng-rx/counter.reducer';
import { ButtonComponent } from './components/button/button.component';
import { AdminlistComponent } from './components/adminlist/adminlist.component';
import { UserlistComponent } from './components/userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesComponent,
    MovieFormComponent,
    USD2INRPipe,
    FirstCharCapitalPipe,
    RedColorDirective,
    FilterPipe,
    SearchComponent,
    NgRxComponent,
    ButtonComponent,
    AdminlistComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
