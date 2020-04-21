import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment1Module } from './01_assignment1/assignment1.module';
import { Assignment2Module } from './02_assignment2/assignment2.module';
import { AssignmentComponent } from './assignment.component';


@NgModule({
  declarations: [
    AssignmentComponent
  ],
  imports: [
    Assignment1Module,
    Assignment2Module,
    CommonModule
  ],
  exports: [
    AssignmentComponent
  ]
})
export class AssignmentModule {

}
