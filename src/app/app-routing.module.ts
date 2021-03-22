import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { StoreKepeertableComponent } from './components/store-kepeer-table/store-kepeertable.component';
import { StoreKepeerComponent } from './components/store-kepeer/store-kepeer.component';
import { StoreKepeertablerowComponent } from './components/store-kepeertablerow/store-kepeertablerow.component';
const routes: Routes = [
  {path:'',component:DetailsComponent},
{path:'kepeer',component:StoreKepeerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
