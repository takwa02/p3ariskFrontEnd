import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideComponent } from './side/side.component';
import { CriteriaDefinitionComponent } from './criteria-definition/criteria-definition.component';
import { CriteriaVerificationComponent } from './criteria-verification/criteria-verification.component';
import { AuditSelectionExecutionComponent } from './audit-selection-execution/audit-selection-execution.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AddCriteriaComponent } from './add-criteria/add-criteria.component';
import { ScoringComponent } from './scoring/scoring.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CopyCriteriaComponent } from './copy-criteria/copy-criteria.component';
import { EditCriteriaComponent } from './edit-criteria/edit-criteria.component';
import { AuditdialogComponent } from './auditdialog/auditdialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SetCriteriaListComponent } from './set-criteria-list/set-criteria-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddAnnualCriteriaComponent } from './add-annual-criteria/add-annual-criteria.component';
import { AddScoreComponent } from './add-score/add-score.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    CriteriaDefinitionComponent,
    CriteriaVerificationComponent,
    AuditSelectionExecutionComponent,
    AnalysisComponent,
    ViewResultsComponent,
    AddCriteriaComponent,
    ScoringComponent,
    HomeComponent,
    AccountComponent,
    CopyCriteriaComponent,
    EditCriteriaComponent,
    AuditdialogComponent,
    SetCriteriaListComponent,
    AddAnnualCriteriaComponent,
    AddScoreComponent,
    RegisterComponent,
    LoginComponent,
    UserManagmentComponent,
    MyFilterPipePipe
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
