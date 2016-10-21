import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { AlbumsListComponent } from './album-list.component';
import { ViewAlbumComponent } from './view-album.component';
import { CartStateComponent } from './cart-state.component';
import { CartDisplayComponent } from './cart-display.component';
import { CartTotalComponent } from './cart-total.component';
import { CartPipe } from './cart.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumsListComponent,
    ViewAlbumComponent,
    CartStateComponent,
    CartDisplayComponent,
    CartTotalComponent,
    CartPipe
  ],
  bootstrap:
  [ AppComponent ]
})

export class AppModule { }
