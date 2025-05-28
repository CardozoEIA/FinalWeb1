import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/models/house.model';
import { HouseService } from 'src/app/services/house.service';


@Component({
  selector: 'app-starter',
  imports: [
    
    
  ],
  templateUrl: './starter.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {
    constructor(private houseService: HouseService, private router: Router) {} 
    goToHouses(house:House){
        this.router.navigate(['list/']); 
   }
   
}