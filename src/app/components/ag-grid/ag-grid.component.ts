import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  constructor(private httpClient:HttpClient) { 
    this.rowData=this.httpClient.get<any[]>('https://localhost:44354/api/persons/getpersons')
  }

  ngOnInit(): void {
  }

  columnDefs: ColDef[]=[
    //{ field: 'personId', sortable: true, filter: true },
    { field: 'personName', sortable: true, filter: true },
    { field: 'personSurname', sortable: true, filter: true },
    { field: 'number', sortable: true, filter: true }
  ];

  rowData: Observable<any[]>;

}
