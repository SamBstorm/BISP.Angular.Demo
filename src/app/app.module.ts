import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { DirectClassComponent } from './direct-class/direct-class.component';
import { DirectStyleComponent } from './direct-style/direct-style.component';
import { DirectHiddenComponent } from './direct-hidden/direct-hidden.component';
import { DirectStructIfComponent } from './direct-struct-if/direct-struct-if.component';
import { DirectStructIfSupComponent } from './direct-struct-if-sup/direct-struct-if-sup.component';
import { DirectStructSwitchComponent } from './direct-struct-switch/direct-struct-switch.component';
import { DirectEventComponent } from './direct-event/direct-event.component';
import { DirectEventSupComponent } from './direct-event-sup/direct-event-sup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DirectAttributeComponent } from './direct-attribute/direct-attribute.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SearchBarComponent,
    DirectClassComponent,
    DirectStyleComponent,
    DirectHiddenComponent,
    DirectStructIfComponent,
    DirectStructIfSupComponent,
    DirectStructSwitchComponent,
    DirectEventComponent,
    DirectEventSupComponent,
    NavigationComponent,
    DirectAttributeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
