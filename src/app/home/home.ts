import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Details } from '../details/details';
import { TablubarData } from '../tabular/tabular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Details, TablubarData],
  templateUrl:'./home.html',
  styleUrl: './home.css'
})
export class Home {

}
