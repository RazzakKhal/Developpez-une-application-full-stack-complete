import { MatSnackBar } from "@angular/material/snack-bar";

export function snackBarFailConfiguration(snackBar : MatSnackBar, message : string){
  snackBar.open(message, 'Fermer', {
    duration: 4000, // Set the duration in milliseconds
    panelClass : ['error-color']
  });
}


export enum SnackBarMessageEnum{
  FAIL_FORMULAIRE = "Formulaire Non Valide",
  FAIL_CONNEXION = "Erreur lors de la tentative de connexion",
  FAIL_INSCRIPTION = "Erreur lors de la tentavite d'inscription",
  FAIL_THEME = "Impossible de récupérer les themes",
}
