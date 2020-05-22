import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'

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
import { MetasComponent } from './metas/metas.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavCrumbComponent } from './shared/nav-crumb/nav-crumb.component';

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
    NewMetaLookupComponent,
    MetasComponent,
    CategoriesComponent,
    NavCrumbComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'metas', component: MetasComponent },
      { path: 'new-meta', component: MetaFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
