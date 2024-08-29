import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { UserComponent } from './pages/user/user.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { AuthGuard } from './shared/guards/auth.guard';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'articles', children:
     [
    { path: '', component: ArticlesComponent },
    { path: 'create', component: CreateArticleComponent },
    { path: ':id', component: ArticleComponent },
  ],
 canActivate : [
  AuthGuard
 ] },
  { path: 'themes', component: ThemesComponent ,
    canActivate : [
     AuthGuard
    ]  },
  { path: 'user', component: UserComponent,
    canActivate : [
     AuthGuard
    ]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
