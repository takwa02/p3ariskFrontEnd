import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { CriteriaDef } from '../model/CriteriaDef';
import { ActivatedRoute, Router } from '@angular/router';
import { CriteriaService } from '../services/criteria.service';
import { Observable } from 'rxjs';
import { AnnualCriteria } from '../model/AnnualCriteria';
import { AnnualCriteriaService } from '../services/annual-criteria.service';
import { CriteriaScore } from '../model/CriteriaScore';
import { CriteriaScoreService } from '../services/criteria-score.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AddScoreComponent } from '../add-score/add-score.component';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent  {
  criteria: CriteriaDef = new CriteriaDef();
  idcriteria:number;
  critType:string;
  
  annualCriterias: Observable<AnnualCriteria[]> ;
  scoreCriterias: Observable<CriteriaScore[]> ;
constructor(private route: ActivatedRoute,private router: Router,private criteriaService: CriteriaService, private annualcriteriaService: AnnualCriteriaService, private criteriaScoreService:CriteriaScoreService,private dialog: MatDialog) {

 }


      
  ngOnInit(){

      this.route.params.subscribe(params => {
      this.idcriteria=params['idCriteria'] || 0;
     
       this.criteriaService.getCriteria(this.idcriteria).subscribe(response=>{
      this.criteria=response;
      this.critType=this.criteria.critType;
      if(this.criteria.criteriaId!=undefined){
        this.annualcriteriaService.getAnnualCriteriasListBycriteriaId(this.criteria.criteriaId).subscribe(response=>{
          this.annualCriterias=response;
         },
          error=>{
           console.error(error);
          }
      
              );
        }
     },
      error=>{
       console.error(error);
      }
  
          );
      this.criteriaScoreService.getCriteriaDefBycriteriaId(this.idcriteria).subscribe(response=>{
        this.scoreCriterias=response;
       
       },
        error=>{
         console.error(error);
        }
    
            );
      }
    );
 
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
        id: 1,
        title: 'Add score',
        criteria:this.criteria
        
    };

    this.dialog.open(AddScoreComponent, dialogConfig);
   /* dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${vaue}`); 
    });*/
}

}
