import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatList, MatListItem } from '@angular/material/list';
import { Part } from '../../models';
import { PartService } from '../../services/part.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


type StatePanel = 'success' | 'failed'

@Component({
  selector: 'app-part-creation',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatCardModule, MatButtonModule, MatInputModule, MatList, MatListItem, MatFormField, MatLabel, MatDivider, MatProgressSpinner],
  templateUrl: './part-creation.component.html',
  styleUrl: './part-creation.component.scss',
})
export class PartCreationComponent {

  partForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly partService = inject(PartService);
  private readonly snackbar = inject(MatSnackBar);
  isSaving = signal(false);
  private readonly matDialogRef = inject(MatDialogRef);

  constructor() {
    this.partForm = this.fb.group({
      partNumber: ['', Validators.required],
      designation: ['', Validators.required],
      project: [''],
    });
  }

  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 3000, panelClass: cssClass });
  }

  onSubmitClick(): void {
    if (this.partForm.valid) {
      this.isSaving.set(true);
      const newPart = this.partForm.value as Part
      this.partService.createOne(newPart).subscribe(
        {
          next: savePart => {
            this.partForm.reset();
            this.openSnack('Nouvelle pièce créée avec succès !', 'success');
            this.isSaving.set(false);
            this.matDialogRef.close();
          },
          error: error => {
            this.openSnack('Oops prob lors de la sauvegarde', 'failed');
            this.isSaving.set(false);
          }
        }
      )
    }
  }
}
