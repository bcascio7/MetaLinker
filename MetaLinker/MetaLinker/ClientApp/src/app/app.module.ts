import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MetaCardComponent } from './shared/meta-card/meta-card.component';
import { MetaCardListComponent } from './shared/meta-card-list/meta-card-list.component';
import { CategoryCardComponent } from './shared/category-card/category-card.component';
import { MetaFormComponent } from './meta-form/meta-form.component';
import { CategoryCardListComponent } from './shared/category-card-list/category-card-list.component';
import { NewMetaLookupComponent } from './shared/new-meta-lookup/new-meta-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MetaCardComponent,
    MetaCardListComponent,
    CategoryCardComponent,
    MetaFormComponent,
    CategoryCardListComponent,
    NewMetaLookupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
