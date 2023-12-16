import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { ModalComponent } from "./modal/modal.component";
import { MenuFeedComponent } from './menu-feed/menu-feed.component';
import { PerfilFeedComponent } from './perfil-feed/perfil-feed.component';
import { MatMenuModule } from '@angular/material/menu';
import { FeedComponent } from './pages/feed/feed.component';
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MainFeedComponent } from './main-feed/main-feed.component';
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
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from "./pages/profile/profile.component";
import { SuggestionsProfileComponent } from './suggestions-profile/suggestions-profile.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NotificationsFeedComponent } from './notifications-feed/notifications-feed.component';
import { DadoPerfilComponent } from "./dado-perfil/dado-perfil.component";
import { MainProfileComponent } from "./main-profile/main-profile.component";
import { OwnPostsComponent } from './own-posts/own-posts.component';
import { FirestoreModule } from "./firestore/firestore.module";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ModalComponent,
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
    MatButtonToggleModule,
    FirestoreModule
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
