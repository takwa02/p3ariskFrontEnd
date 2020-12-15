import { Component, OnInit } from '@angular/core';
import { CriteriaService } from '../services/criteria.service';
import { CriteriaDefinitionComponent } from '../criteria-definition/criteria-definition.component';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { CriteriaDef } from '../model/CriteriaDef';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.css']
})
export class EditCriteriaComponent implements OnInit {
  criteria: CriteriaDef = new CriteriaDef();
    idcriteria:number;
  constructor(private route: ActivatedRoute,private router: Router,private criteriaService: CriteriaService) {
  
   }



     
  ngOnInit(){

      this.route.params.subscribe(params => {
      this.idcriteria=params['idCriteria'] || 0;
      console.log("this.idcriteria="+this.idcriteria);
       this.criteriaService.getCriteria(this.idcriteria).subscribe(response=>{
      this.criteria=response;
     },
      error=>{
       console.error(error);
      }
  
          );
    });
 
  }

 
  update() {
    this.criteriaService.updateCriteria(this.criteria)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
    this.criteria = new CriteriaDef();
    this.router.navigate(['criteriaDefinition']);
  }

  onSubmit(): void {
    this.update();
  }
  

  
}
