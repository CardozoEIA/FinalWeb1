import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/models/house.model';   
import { HouseService } from 'src/app/services/house.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-house-list',
  imports: [CommonModule],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.scss'
})
export class HouseListComponent {
  houseList: House[] = [];

  constructor(private houseService: HouseService, private router: Router){

  }

  ngOnInit(){
    this.getHouses();
  }

  

  getHouses(){
    this.houseService.getHouses().subscribe()
  }

}
