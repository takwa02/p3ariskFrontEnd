import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { TpCategory } from '../model/TpCategory';
import { observable, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TpcategoryService } from '../services/tpcategory.service';
import { secteurActivite } from '../model/secteurActivite';
import { SecteurActiviteService } from '../services/secteur-activite.service';
import { TempSelectScoreService } from '../services/temp-select-score.service';
import { CritereVerification } from '../model/CritereVerification';
import { CriteriaService } from '../services/criteria.service';
import { KeyValue } from '@angular/common';
import { stat } from 'fs';
import { map } from 'rxjs/operators';
import { TempSelectScore } from '../model/TempSelectScore';
import { TokenStorageService } from '../services/token-storage.service';



const pageSize:number =1;


@Component({
  selector: 'app-criteria-verification',
  templateUrl: './criteria-verification.component.html',
  styleUrls: ['./criteria-verification.component.css']
})
export class CriteriaVerificationComponent implements OnInit   {
 myarray:any[];
  ctrMatfis:string="1301959G";
  idcrit:number=1;
  economicActivityValue:any;
  criterverif:CritereVerification=new CritereVerification();
  public isadmin:boolean=false;

  CriteriaA = new FormGroup({
  
    
    YearApplicable: new FormControl('',Validators.required),
  });


  CriteriaB = new FormGroup({

    
    filter: new FormControl('',Validators.required),
    EconomicActivity: new FormControl('',Validators.required),
    TotalCriteriaScore: new FormControl('',Validators.required),
    valeur: new FormControl('',Validators.required),
    AuditResult: new FormControl('',Validators.required),
    valeur1: new FormControl('',Validators.required),
    idcrit: new FormControl('',Validators.required),
   
  });




  affichage(event:any) {
  
   console.log("newvalue="+event.target.value);
   let str=event.target.value;
   var splitted = str.split(":"); 
    console.log(splitted);
    this.economicActivityValue=splitted[1];
    this.test(0,splitted[1]);
  }
  
  
  clickFunction() {
    document.getElementById('toggleVisibilityButton').addEventListener('click',function(button) {
      document.getElementById('displaytable').style.display="block";

    }); 
    this.getAllCriteriaDef_Id();
   console.log("CriteriaB="+this.CriteriaB);
    this.test(0,"");
  }
  categories: Observable<TpCategory[]>;
  @Input() category: TpCategory;
  public list:any [] = [];
  categoList:TpCategory[] = [];
  
  secteurActiviteList: Observable<secteurActivite[]> ;
  tempSelectScoreList=new Set<TempSelectScore>();;
  public critereVerificationList=new Set();
  //public listCriteriaId:number [] = [];
  //ilterargs = {items:this.critereVerificationList,op: '=',valeur:75};
   listCriteriaId:Set<number> = new Set();

   listTempSelectScoreCriteriaId= new Set();
   public argfilter: string = '300';
  currentSelectedPage:number = 0;
  totalPages: number = 0;
  pageIndexes: Array<number> = [];
   constructor(private route: ActivatedRoute,private tokenStorage: TokenStorageService, private tpCategoryService:TpcategoryService, private secteurActiviteService:SecteurActiviteService,private tempSelectScoreService:TempSelectScoreService,private criteriaService: CriteriaService ) { 
    this.myCallbackFunc = this.myCallbackFunc.bind(this);

  }
   
  
   ngOnInit() {
    this.isadmin=this.tokenStorage.getUser().roles.includes('ROLE_ADMIN');
  this.secteurActiviteService.getSecteurActiviteList().subscribe((data)=>
  {console.log(data);
    this.secteurActiviteList=data;},
   (error)=>console.log(error));
  ;
   }
  
   public myCallbackFunc(critereVerification:CritereVerification ):boolean {
    return (critereVerification.totalScore >= 300);
  }


  
     test(page:number,economicActivity:any	):void
{
 this.tpCategoryService.getCategoryList(page, pageSize,economicActivity).subscribe((data)=>

  { 
    //this.critereVerificationList=new Set(); 
    this.categoList=[];
 
    this.categoList =data.tpcategories;
    this.totalPages=data.totalPages;
    this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
    this.currentSelectedPage = data.pageNumber;
    this.critereVerificationList=new Set();
    for (let compteur= 0; compteur <data.tpcategories.length;compteur++) {
      
      //this.tempSelectScoreList=new Set();
 
      this.databaseValidator(data.tpcategories[compteur]);
    //  if(status='200'){
       // this.criterverif.tempSelectScoreList=this.tempSelectScoreList;
      
    
     //  for (let cp= 0; cp <this.tempSelectScoreList.size; cp++) {
      this.tempSelectScoreList.forEach(cp => {
        this.listTempSelectScoreCriteriaId.add
        (cp.criteriaId);
   
      });
      
      //}
          
        }

        
  // }
   // this.categoList.forEach(   element => {
   // this.criterverif= new CritereVerification();
   //this.criterverif.tpCategory=element;

   // 
   // if(this.tempSelectScoreList.length>0)
   
 //});
  },
(error)=>console.log(error));
  ; 
  console.log(this.list);
 
 
}

getAllCriteriaDef_Id(): void
{
  
   if(this.listCriteriaId.size==0){
   this.criteriaService.getAllCriteriasList().subscribe((data)=>{
   let critList =data;
   critList.forEach(element => {
      this.listCriteriaId.add(element.criteriaId);
    }); 
  
   },
   (error)=>console.log(error));
  }
}

existsId(id:number): boolean{
  var res:boolean=true;
  if(this.listTempSelectScoreCriteriaId.size>0)
   res=  this.listTempSelectScoreCriteriaId.has(id);

 return res;
}
 
    
getTempSelectScoreList(ctrMatfis:string): String
{
  console.log("ctrMatfis=>"+ctrMatfis);
  let status;
  
 this.tempSelectScoreService.getTempSelectScoreList(ctrMatfis).subscribe((data)=>
  {console.log('tempSelectScoreList=>'+data);
    this.tempSelectScoreList =data.body;
    for (let j= 0; j <this.tempSelectScoreList.size; j++) {
      this.listTempSelectScoreCriteriaId.add(this.tempSelectScoreList[j].criteriaId);

    }
 
  status=data.status;
  },
(error)=>console.log(error));
  ; 
 
 return  status;
}

 databaseValidator(tpCategory:any) 
{
  let criterverif= new CritereVerification();
    this.tempSelectScoreService.getTempSelectScoreList(tpCategory.ctrMatfis).pipe(map((data)=>{
   // console.log(tpCategory+"  "+JSON.stringify(data['body']));
    this.tempSelectScoreList = data['body'];
    status=data.status;
    criterverif.tempSelectScoreList=this.tempSelectScoreList;
    criterverif.tpCategory=tpCategory;
    var totalscore:number=0;
    this.tempSelectScoreList.forEach(tempselect => {
      totalscore=totalscore+tempselect.score;
      
    });
    criterverif.totalScore=totalscore;
    this.critereVerificationList.add(criterverif);
  
  })).subscribe(res=>
    { 
  console.log("critereVerificationList: " + JSON.stringify(this.critereVerificationList));
});
   
    this.myarray = Array.from(this.critereVerificationList);
   

  }
  active(index: number) {
    if(this.currentSelectedPage == index ){
      return {
        active: true
      };
    }
  }

  nextClick(){
    if(this.currentSelectedPage < this.totalPages-1){
      this.test(++this.currentSelectedPage,this.economicActivityValue);
    }  
  }

  previousClick(){
    if(this.currentSelectedPage > 0){
      this.test(--this.currentSelectedPage,this.economicActivityValue
                   );
    }  
  }

  getPaginationWithIndex(index: number) {
    this.test(index,"");
  }

}
