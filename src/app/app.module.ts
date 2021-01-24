import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ActivatedLayoutComponent } from './activated-layout/activated-layout.component';
import { PostComponent } from './shared/components/post/post.component';
import { UserComponent } from './shared/components/user/user.component';
import { PhotoComponent } from './shared/components/photo/photo.component';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ActivatedLayoutComponent,
    PostComponent,
    UserComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
