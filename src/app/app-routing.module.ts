import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
  {path: 'contacts',component:ContactsComponent},
  {path:'showdata',component:ShowdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
