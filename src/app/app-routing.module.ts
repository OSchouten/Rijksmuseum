import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {ErrorComponent} from "./components/error/error.component";


const routes: Routes = [
  {path: 'index', component: IndexComponent},
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
