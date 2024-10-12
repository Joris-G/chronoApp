import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FileValidators, NgxFileDragDropComponent } from 'ngx-file-drag-drop';


export const timeTypes = ["déplacement", "test"] as const;
export type TimeType = typeof timeTypes[number];

@Component({
  selector: 'app-chrono-item',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatOptionModule, MatFormFieldModule, MatSelectModule, MatButtonModule, NgxFileDragDropComponent],
  templateUrl: './chrono-item.component.html',
  styleUrl: './chrono-item.component.scss'
})
export class ChronoItemComponent {
  private readonly fb = inject(FormBuilder);
  chronoItemForm: FormGroup
  timeTypes = timeTypes
  selectedFile: File | null = null;

  constructor() {
    this.chronoItemForm = this.fb.group({
      description: ['', Validators.required],
      timeType: ['', Validators.required],
    })

  }

  onSubmit() {
    alert('hello');
  }


  imagePreview: string | ArrayBuffer | null = null;
  fileControl = new FormControl(
    [],
    [FileValidators.required, FileValidators.maxFileCount(2)]
  );
  onValueChange(file: File[]) {
    console.log('File changed!');
    if (file && file.length > 0) {
      this.selectedFile = file[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
