import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Module Rounting
import { RoutingModule } from './rounting.module';
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule, 
  ]
})
export class PagesModule { }
