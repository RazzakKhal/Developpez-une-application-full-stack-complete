import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { ThemeComponent } from './shared/components/theme/theme.component';
import { RegisterFormComponent } from './shared/forms/register-form/register-form.component';
import { LoginFormComponent } from './shared/forms/login-form/login-form.component';
import { UserComponent } from './pages/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { HeaderComponent } from './shared/components/header/header.component';
import { ArticleComponent } from './shared/components/article/article.component';
import { GetArticleComponent } from './pages/get-article/get-article.component';
import { MenuComponent } from './shared/components/menu/menu.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, SignUpComponent, SignInComponent, ArticlesComponent, ThemesComponent, ArticleComponent, CreateArticleComponent, ThemeComponent, RegisterFormComponent, LoginFormComponent, UserComponent, HeaderComponent, GetArticleComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
