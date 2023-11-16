import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { ModalComponent } from "./shared/modal/modal.component";
import { CardPostagemComponent } from './shared/card-postagem/card-postagem.component';
import { MenuFeedComponent } from './shared/menu-feed/menu-feed.component';
import { PerfilFeedComponent } from './shared/perfil-feed/perfil-feed.component';
import { MatMenuModule } from '@angular/material/menu';
import { FeedComponent } from './pages/feed/feed.component';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MainFeedComponent } from './shared/main-feed/main-feed.component';
import { MatChipsModule } from "@angular/material/chips";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
import { UsuarioModule } from "./usuario/usuario.module";
import { HttpClientModule } from "@angular/common/http";
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PostagemModule } from "./postagem/postagem.module";
import { CreateListPostsComponent } from "./postagem/create-list-posts/create-list-posts.component";
import { SettingsComponent } from './shared/settings/settings.component';
import { ProfileComponent } from "./pages/profile/profile.component";
import { SuggestionsProfileComponent } from './shared/suggestions-profile/suggestions-profile.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NotificationsFeedComponent } from './shared/notifications-feed/notifications-feed.component';
import { DadoPerfilComponent } from "./shared/dado-perfil/dado-perfil.component";
import { MainProfileComponent } from "./shared/main-profile/main-profile.component";
import { OwnPostsComponent } from './shared/own-posts/own-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ModalComponent,
    CardPostagemComponent,
    MenuFeedComponent,
    PerfilFeedComponent,
    FeedComponent,
    HomepageComponent,
    MainFeedComponent,
    CreateListPostsComponent,
    SettingsComponent,
    ProfileComponent,
    SuggestionsProfileComponent,
    NotificationsFeedComponent,
    DadoPerfilComponent,
    MainProfileComponent,
    OwnPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    UsuarioModule,
    HttpClientModule,
    PostagemModule,
    MatButtonToggleModule
  ],
  exports: [
    ModalComponent,
    MenuFeedComponent,
    FeedComponent,
    MainFeedComponent,
    PerfilFeedComponent,
    CreateListPostsComponent,
    SuggestionsProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
