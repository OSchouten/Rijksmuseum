import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {ErrorComponent} from "./components/error/error.component";
import {DetailComponent} from "./components/detail/detail.component";


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'index/detail', component: DetailComponent},
  {path: 'index/detail/:id', component: DetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
