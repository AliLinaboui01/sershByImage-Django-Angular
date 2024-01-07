import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { ListeImageComponent } from './features/liste-image/liste-image.component';
import { CardImageComponent } from './features/card-image/card-image.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './features/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './features/footer/footer.component';
import { ResultCardComponent } from './features/result-card/result-card.component';
import { ResultComponent } from './features/result/result.component';
import { PreviewComponent } from './features/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeImageComponent,
    CardImageComponent,
    MainComponent,
    FooterComponent,
    ResultCardComponent,
    ResultComponent,
    PreviewComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
