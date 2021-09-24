import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule,
    FormsModule, MatIconModule, MatButtonModule, MatFormFieldModule,  MatSelectModule,
    MatOptionModule, MatDividerModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule,
    FormsModule, MatIconModule, MatButtonModule, MatFormFieldModule,  MatSelectModule,
    MatOptionModule, MatDividerModule],
})
export class MaterialModule {
}
