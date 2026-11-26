import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cours } from '../../models/cours';
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { Catalogue } from '../../services/catalogue';

@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
})
export class PageDetail {
  private catalogue = inject(Catalogue);

  // Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
  @Input() id = '';

  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
}
