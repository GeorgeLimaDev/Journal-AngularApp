import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedComponent} from "./pages/feed/feed.component";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
