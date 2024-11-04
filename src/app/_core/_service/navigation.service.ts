import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly router: Router = inject(Router)
  private readonly location: Location = inject(Location)


  goBack() {
    if (this.router.navigated) {
      this.location.back(); // Retourne à la page précédente
    } else {
      this.router.navigate(['/']); // Redirige vers la page d'accueil si aucun historique
    }
  }
}
