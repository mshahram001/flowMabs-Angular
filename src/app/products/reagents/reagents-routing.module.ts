import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReagentsComponent } from './reagents.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ReagentsComponent }
];

@NgModule({
  declarations: [ReagentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Lazy-loaded routes
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class ReagentsRoutingModule { }

