import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-about',
  imports: [CardsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(public api:ApiService){}

  

}
