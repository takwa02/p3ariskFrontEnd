import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CriteriaDef } from '../model/CriteriaDef';
import { Criteria } from '../criteria';
import { CriteriaService } from '../services/criteria.service';
import { ActivatedRoute } from '@angular/router';
import { AnnualCriteriaService } from '../services/annual-criteria.service';
import { AnnualCriteria } from '../model/AnnualCriteria';

@Component({
  selector: 'app-add-annual-criteria',
  templateUrl: './add-annual-criteria.component.html',
  styleUrls: ['./add-annual-criteria.component.css']
})
export class AddAnnualCriteriaComponent implements OnInit {
  criterias: Observable<CriteriaDef[]>;
  @Input() criteria: Criteria;
  public list:any [] = [];
   critList: Observable<CriteriaDef[]> ;
   testData:boolean = false;
   public testnom:string='';
   criteriaYear:number;
   criteriaDef:CriteriaDef=new CriteriaDef();
   annualCriteria:AnnualCriteria=new AnnualCriteria();

  selectedCriteriaIds = [];

  constructor(private route: ActivatedRoute,private criteriaService: CriteriaService,private annualCriteriaService: AnnualCriteriaService) { 
     this.route.params.subscribe(params => {
      this.criteriaYear=params['criteriaYear'] || 0;
      console.log("criteriaYear="+this.criteriaYear);
    
    });
  }

  ngOnInit(): void {
    this.test();
  }
  test()
  {
    
    this.critList = this.criteriaService.getCriteriasList();  
    console.log(this.list);
    
   
  }
  onChange(value:any,isChecked: boolean){
    if(isChecked)
    this.selectedCriteriaIds.push(value);
    else{
    let index= this.selectedCriteriaIds.indexOf(value);
    this.selectedCriteriaIds.splice(index,1);
    
    }
    console.log(isChecked+" check "+this.selectedCriteriaIds);
  }
    onSubmit(): void{

    console.log(" ids  "+this.selectedCriteriaIds);
    this.selectedCriteriaIds.forEach(element => {
      console.log(" element  "+element);
      this.annualCriteria.criteriaDef.criteriaId=element;
      this.annualCriteria.criteriaYear=this.criteriaYear;
      this.annualCriteriaService.createAnnualCriteria(this.annualCriteria) .subscribe(
        data => {
          console.log(data);
       
        },
        error => console.log(error));
    this.annualCriteria = new AnnualCriteria();
  
    });
   
    }

}
