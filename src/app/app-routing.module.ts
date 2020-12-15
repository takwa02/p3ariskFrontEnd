import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideComponent } from './side/side.component';
import { CriteriaDefinitionComponent } from './criteria-definition/criteria-definition.component';
import { CriteriaVerificationComponent } from './criteria-verification/criteria-verification.component';
import { AuditSelectionExecutionComponent } from './audit-selection-execution/audit-selection-execution.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import {AddCriteriaComponent} from './add-criteria/add-criteria.component'
import { ScoringComponent } from './scoring/scoring.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { EditCriteriaComponent } from './edit-criteria/edit-criteria.component';
import { CopyCriteriaComponent } from './copy-criteria/copy-criteria.component';
import { SetCriteriaListComponent } from './set-criteria-list/set-criteria-list.component';
import { AddAnnualCriteriaComponent } from './add-annual-criteria/add-annual-criteria.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';





const routes: Routes = [
  { path: '', component:  SideComponent, children:[
    { path: 'criteriaDefinition' , component: CriteriaDefinitionComponent },
    { path: 'criteriaVerification' , component: CriteriaVerificationComponent  },
    { path: 'SetCriteriaList' , component: SetCriteriaListComponent },
    { path: 'audit' , component: CriteriaVerificationComponent  },
    { path: 'analysis' , component: AnalysisComponent  },
    { path: 'results' , component: ViewResultsComponent  },
    { path: 'add' , component: AddCriteriaComponent  },
    { path: 'edit/:idCriteria', component:EditCriteriaComponent},
    { path: 'copy', component:CopyCriteriaComponent},
    { path: 'retour' , component: CriteriaDefinitionComponent  },
    { path: 'scoring/:idCriteria' , component: ScoringComponent  },
    { path: 'home' , component: HomeComponent},
    { path: 'account' , component: AccountComponent},
    { path: 'cancel' , component: CriteriaDefinitionComponent},
    { path: 'addAnnualCriteria/:criteriaYear' , component: AddAnnualCriteriaComponent},
    { path: 'userManagment' , component:UserManagmentComponent}


  ]},  {path: 'login' , component: LoginComponent},
  { path: 'register', component: RegisterComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
