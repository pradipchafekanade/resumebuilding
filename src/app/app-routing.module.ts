import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HobbyComponent } from './admin/hobby/hobby.component';
import { IndividualskillComponent } from './admin/individualskill/individualskill.component';
import { ListComponent } from './admin/list/list.component';
import { ObjectiveComponent } from './admin/objective/objective.component';
import { QualificationComponent } from './admin/qualification/qualification.component';
import { SkillComponent } from './admin/skill/skill.component';
import { UserComponent } from './admin/user/user.component';
import { UsersComponent } from './admin/users/users.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './user/information/information.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';
import { ResumeComponent } from './user/resume/resume.component';
// import { ResumelistComponent } from './user/resumelist/resumelist.component';
import { TemplatefirstComponent } from './user/templatefirst/templatefirst.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},

  {path:"admin",component:DashboardComponent},
  {path:"admin/users",component:UsersComponent},
  {path:"admin/user/:id",component:UserComponent},
  {path:"admin/skills",component:SkillComponent},
  {path:"admin/individualskills",component:IndividualskillComponent},
  {path:"admin/hobbies",component:HobbyComponent},  
  {path:"admin/objectives",component:ObjectiveComponent},
  {path:"admin/qualifications",component:QualificationComponent},


  {path:"user",component:ProfileComponent},
  {path:"information",component:InformationComponent},
  {path:"template",component:TemplatefirstComponent},
  {path:"user/resumes",component:ResumeComponent},
  // {path:"user/upadateresume",component:ResumelistComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
