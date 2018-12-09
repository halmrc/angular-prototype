import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './app.material';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsListComponent } from './components/components.component';
import { ComponentsDetailComponent } from './components/details/component-details.component';
import { ComponentsService } from './components/components.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ComponentsListComponent,
    ComponentsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [ComponentsService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
