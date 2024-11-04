import { Component, inject, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { Part } from '../../models';
import { PartService } from '../../services/part.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Observable, switchMap } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


type StatePanel = 'success' | 'failed'

@Component({
  selector: 'app-part-creation',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormField, MatLabel, MatProgressSpinner, MatIcon, MatCardModule],
  templateUrl: './part-creation.component.html',
  styleUrl: './part-creation.component.scss',
})
export class PartCreationComponent {

  isEditing = signal(true);
  isSaving = signal(false);
  partId: string | null = null; // Stocker l'ID de la pièce (si mode édition)
  partForm: FormGroup;
  // Services
  private readonly fb = inject(FormBuilder);
  private readonly partService = inject(PartService);
  private readonly snackbar = inject(MatSnackBar);
  private readonly route = inject(ActivatedRoute); // Pour obtenir les paramètres de l'URL
  private readonly router = inject(Router); // Pour rediriger après l'enregistrement

  // private readonly matDialogRef = inject(MatDialogRef);

  constructor() {
    this.partForm = this.fb.group({
      partNumber: [{ value: '', disabled: !this.isEditing() }, Validators.required],
      designation: [{ value: '', disabled: !this.isEditing() }, Validators.required],
      project: [{ value: '', disabled: !this.isEditing() }],
    });

    // Vérifier si un ID est présent dans l'URL
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id'); // Récupérer l'ID dans l'URL
        if (id) {
          this.partId = id; // Stocker l'ID
          this.isEditing.set(true); // On est en mode édition
          return this.partService.getOne(id); // Récupérer la pièce existante
        } else {
          this.isEditing.set(false); // On est en mode création
          return new Observable<Part>(); // Retourne un observable vide pour ne rien faire
        }
      })
    ).subscribe({
      next: (part) => {
        if (part) {
          // Remplir le formulaire avec les données de la pièce à mettre à jour
          this.partForm.setValue({
            partNumber: part.partNumber,
            designation: part.designation,
            project: part.project || ''
          });
        }
      },
      error: () => this.openSnack('Erreur lors de la récupération de la pièce', 'failed')
    });
  }


  toggleEditingMode() {
    this.isEditing.update(editing => !editing); // Inverse l'état d'édition

    if (this.isEditing()) {
      this.partForm.enable();  // Active tous les champs
    } else {
      this.partForm.disable(); // Désactive tous les champs
    }
  }
  openSnack(message: string, cssClass: StatePanel) {
    this.snackbar.open(message, '', { duration: 3000, panelClass: cssClass });
  }

  onSubmitClick(): void {
    if (this.partForm.valid) {
      this.isSaving.set(true);
      const newPart = this.partForm.value as Part
      console.log(newPart.id)
      if (this.isEditing()) {
        this.partService.updateOne(this.partId!, newPart).subscribe(
          {
            next: () => {
              this.onSuccess('Mise à jour de la pièce réussie !');
            },
            error: () => {
              this.onError('Erreur lors de la mise à jour de la pièce.');
            }
          }
        )
      } else {
        this.partService.createOne(newPart).subscribe(
          {
            next: () => {
              this.onSuccess('Nouvelle pièce créée avec succès !');
            },
            error: () => {
              this.onError('Erreur lors de la création de la pièce.');
            }
          }
        )
      }


    }
  }

  // Gestion du succès de l'opération
  private onSuccess(message: string) {
    this.partForm.reset();
    this.openSnack(message, 'success');
    this.isSaving.set(false);
    this.isEditing.set(false);
    // this.router.navigate(['/parts']); // Redirection vers la liste des pièces après succès
  }

  // Gestion des erreurs
  private onError(message: string) {
    this.openSnack(message, 'failed');
    this.isSaving.set(false);
  }
}
