import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  def:string;
  active:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', def:'aa',active:'yes'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', def:'aa',active:'yes'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', def:'aa',active:'yes'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', def:'aa',active:'yes'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', def:'aa',active:'yes'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', def:'aa',active:'yes'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', def:'aa',active:'yes'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', def:'aa',active:'yes'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', def:'aa',active:'yes'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', def:'aa',active:'yes'},
  

 
 

]

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'def','active'];
  dataSource = ELEMENT_DATA;


  CriteriaB = new FormGroup({

    
    filter: new FormControl('',Validators.required),
    EconomicActivity: new FormControl('',Validators.required),
    TotalCriteriaScore: new FormControl('',Validators.required),
    valeur: new FormControl('',Validators.required),
    AuditResult: new FormControl('',Validators.required),
    valeur1: new FormControl('',Validators.required),
    
  });

}
