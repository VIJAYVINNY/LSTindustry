import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
  {path: 'contacts',component:ContactsComponent},
  {path:'showdata',component:ShowdataComponent},
  {path:'rxjslearning',component:RxjsLearningComponent},
  {path:'search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
