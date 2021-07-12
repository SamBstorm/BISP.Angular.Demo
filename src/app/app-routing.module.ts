import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DirectAttributeComponent } from './direct-attribute/direct-attribute.component';
import { DirectStructSwitchComponent } from './direct-struct-switch/direct-struct-switch.component';
import { DirectStructIfSupComponent } from './direct-struct-if-sup/direct-struct-if-sup.component';
import { DirectStructIfComponent } from './direct-struct-if/direct-struct-if.component';
import { DirectStyleComponent } from './direct-style/direct-style.component';
import { DirectHiddenComponent } from './direct-hidden/direct-hidden.component';
import { DirectEventSupComponent } from './direct-event-sup/direct-event-sup.component';
import { DirectEventComponent } from './direct-event/direct-event.component';
import { DirectClassComponent } from './direct-class/direct-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo:"attribute/class", pathMatch : "full"},
  { path: "attribute", component: DirectAttributeComponent
  , children:[
    { path: "class", component: DirectClassComponent },
    { path: "style", component: DirectStyleComponent },    
    { path: "hidden", component : DirectHiddenComponent},
  ]},
  { path:"structural", children: [
    { path: "if", component : DirectStructIfComponent},
    { path: "if-sup", component : DirectStructIfSupComponent},
    { path: "if-sup/:cat", component : DirectStructIfSupComponent},
    { path: "switch", component : DirectStructSwitchComponent},
  ]},
  { path:"event", children: [
    { path: "event", component : DirectEventComponent},
    { path: "event-sup", component : DirectEventSupComponent},
  ]},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
