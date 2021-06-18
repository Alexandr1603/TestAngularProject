import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card/card.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NewroutingComponent } from './newrouting/newrouting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRouters: Routes = [
  { path: '', component: CardComponent},
  { path: 'newrouting', component: NewroutingComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    NewroutingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
