import { CriteriaDef } from './CriteriaDef';

export class CriteriaScore {
 criteriaScoreId: number;
 criteriaYear:number;
 rangeId:number;
 lowerLimit:number;
 upperLimit:number;
 score:number;
 scoreResult:boolean;
 criteriaDef: CriteriaDef=new CriteriaDef();


}