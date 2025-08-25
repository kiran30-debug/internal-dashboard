import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';


export interface Data{
    name: string;
    email: string;
    plan: 'Basic' | 'Pro';
    countries: 'Germany' | 'Belgium' | 'Austria';
    runs: number;
    projects: number;
}

const CLIENT_DATA: Data[] = [
  {"name":"Mayur Andulkar","email":"mayur.andulkar@re-twin.energy","plan":"Pro","countries":"Germany","runs":42,"projects":3},
  {"name":"Florian Heise","email":"florian.heise@re-twin.energy","plan":"Basic","countries":"Austria","runs":67,"projects":7},
  {"name":"Koushik Boinepally","email":"koushik.boinepally@re-twin.energy","plan":"Pro","countries":"Belgium","runs":23,"projects":5},
  {"name":"Tanmay Sarkar","email":"tanmay.sarkar@re-twin.energy","plan":"Basic","countries":"Germany","runs":89,"projects":2},
  {"name":"Prasad Hedge","email":"prasad.hedge@re-twin.energy","plan":"Pro","countries":"Austria","runs":14,"projects":9},
  {"name":"Kiran Pande","email":"kiran.pande@re-twin.energy","plan":"Basic","countries":"Belgium","runs":56,"projects":4},
  {"name":"Mayur Andulkar","email":"mayur.andulkar@re-twin.energy","plan":"Pro","countries":"Germany","runs":42,"projects":3},
  {"name":"Florian Heise","email":"florian.heise@re-twin.energy","plan":"Basic","countries":"Austria","runs":67,"projects":7},
  {"name":"Koushik Boinepally","email":"koushik.boinepally@re-twin.energy","plan":"Pro","countries":"Belgium","runs":23,"projects":5},
  {"name":"Tanmay Sarkar","email":"tanmay.sarkar@re-twin.energy","plan":"Basic","countries":"Germany","runs":89,"projects":2},
  {"name":"Prasad Hedge","email":"prasad.hedge@re-twin.energy","plan":"Pro","countries":"Austria","runs":14,"projects":9},
  {"name":"VNIT","email":"kiran.pande@re-twin.energy","plan":"Basic","countries":"Belgium","runs":56,"projects":4}
]

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.html',
  styleUrls: ['./tabular.css'],
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, RouterLink],
})
export class TablubarData implements AfterViewInit{
  displayedColumns: string[] = ['name', 'email', 'actions'];
  dataSource = new MatTableDataSource<Data>(CLIENT_DATA);;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

