import { MatSnackBar } from "@angular/material/snack-bar";

export function snackBarFailConfiguration(snackBar : MatSnackBar, message : string){
  snackBar.open(message, 'Fermer', {
    duration: 4000, // Set the duration in milliseconds
    panelClass : ['error-color']
  });
}

export function snackBarSuccessConfiguration(snackBar : MatSnackBar, message : string){
  snackBar.open(message, 'Fermer', {
    duration: 4000, // Set the duration in milliseconds
    panelClass : ['success-color']
  });
}

export enum SnackBarMessageEnum{
  SUCCESS_USER = "Modifications réussies",
  FAIL_FORMULAIRE = "Formulaire Non Valide",
  FAIL_CONNEXION = "Erreur lors de la tentative de connexion",
  FAIL_INSCRIPTION = "Erreur lors de la tentavite d'inscription",
  FAIL_THEME = "Impossible de récupérer les themes",
  FAIL_CREATE_ARTICLE = "Impossible de créer l'article suite à une erreur",
  FAIL_LOAD_ARTICLES = "Erreur lors du chargement des articles",
  FAIL_LOAD_ARTICLE = "Erreur lors du chargement de l'article",
  FAIL_GET_USER = "Erreur lors de la récupération de l'utilisateur",
  FAIL_UPDATE_USER = "Erreur lors de la modification de l'utilisateur",
  FAIL_ADD_COMMENT = "Impossible d'ajouter le commentaire suite à une erreur",
  FAIL_SUBSCRIBE = "Impossible de s'abonner suite à une erreur",
  FAIL_UNSUBSCRIBE = "Impossible de se désabonner suite à une erreur",

}
