import { AnnualCriteria } from './AnnualCriteria';

export class CriteriaDef {
    criteriaId: number;
    critName: string;
    critDesc: string;
    critType: string;
    sqlQuery: string;
    annualCriterias: AnnualCriteria[];
}