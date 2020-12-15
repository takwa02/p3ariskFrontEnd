import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CriteriaDef } from '../model/CriteriaDef';
import { AnnualCriteria } from '../model/AnnualCriteria';
import { AnnualCriteriaService } from '../services/annual-criteria.service';

@Component({
  selector: 'app-set-criteria-list',
  templateUrl: './set-criteria-list.component.html',
  styleUrls: ['./set-criteria-list.component.css']
})
export class SetCriteriaListComponent implements OnInit {
  annualCritList: Observable<AnnualCriteria[]> ;
  criteriaYear:number;
  constructor(private annualcriteriaService: AnnualCriteriaService) { }

  ngOnInit(): void {
    this.annualCritList=  this.annualcriteriaService.getAnnualCriteriasList();
  
}


 
onChange($event) {
  console.log("search"+this.criteriaYear);
  this.annualCritList=  this.annualcriteriaService.getAnnualCriteriasListBycriteriaYear(this.criteriaYear);
  localStorage.setItem('criteriaYear',""+this.criteriaYear);
    
}


}