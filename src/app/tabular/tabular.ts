import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  {"name":"Kiran Pande","email":"kiran.pande@re-twin.energy","plan":"Basic","countries":"Belgium","runs":56,"projects":4}
]

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.html',
  styleUrl: './tabular.css',
  imports: [MatTableModule],
})
export class TablubarData {
  displayedColumns: string[] = ['name', 'email', 'plan', 'countries', 'runs', 'projects'];
  dataSource = CLIENT_DATA;
}
