import { Component, OnInit, Input } from '@angular/core';
import { Criteria } from '../criteria';
import { Observable } from 'rxjs';
import { CriteriaService } from '../services/criteria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { CriteriaDef } from '../model/CriteriaDef';


@Component({
  selector: 'app-criteria-definition',
  templateUrl: './criteria-definition.component.html',
  styleUrls: ['./criteria-definition.component.css']
})
export class CriteriaDefinitionComponent implements OnInit {
  criterias: Observable<CriteriaDef[]>;
  @Input() criteria: Criteria;
  public list:any [] = [];
   critList: Observable<CriteriaDef[]> ;
   testData:boolean = false;
   public testnom:string='';
   cr:Criteria;


  crit = [];
 
  
   constructor(private route: ActivatedRoute,private criteriaService: CriteriaService) { 
   }
   
  
   ngOnInit() {
   
    this.test();
   }
  



  
  test()
{
  
  this.critList = this.criteriaService.getCriteriasList();  
  console.log(this.list);
  
 
}
}
