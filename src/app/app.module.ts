import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './user/profile/profile.component';
import { InformationComponent } from './user/information/information.component';
// import { UsersComponent } from './users/users.component';
import { ObjectiveComponent } from './admin/objective/objective.component';
import { SkillComponent } from './admin/skill/skill.component';
import { IndividualskillComponent } from './admin/individualskill/individualskill.component';
import { LanguageComponent } from './admin/language/language.component';
import { HobbyComponent } from './admin/hobby/hobby.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminmenuComponent } from './admin/adminmenu/adminmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './admin/list/list.component';
import { TemplatefirstComponent } from './user/templatefirst/templatefirst.component';
import { UsersComponent } from './admin/users/users.component';
import { UserComponent } from './admin/user/user.component';
import { QualificationComponent } from './admin/qualification/qualification.component';
import { ResumeComponent } from './user/resume/resume.component';
import { ResumelistComponent } from './user/resumelist/resumelist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    InformationComponent,
    ObjectiveComponent,
    SkillComponent,
    IndividualskillComponent,
    LanguageComponent,
    HobbyComponent,
    DashboardComponent,
    AdminmenuComponent,
    ListComponent,
    TemplatefirstComponent,
    UsersComponent,
    UserComponent,
    QualificationComponent,
    ResumeComponent,
    ResumelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
