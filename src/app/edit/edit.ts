import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatRadioModule, MatInputModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {

}
