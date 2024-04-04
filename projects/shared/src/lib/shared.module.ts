import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const declarations = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
]
@NgModule({
    imports: [declarations],
    exports: [declarations]
})
export class SharedModule { }