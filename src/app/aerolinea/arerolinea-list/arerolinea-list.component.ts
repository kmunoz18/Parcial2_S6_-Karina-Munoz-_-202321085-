import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-arerolinea-list',
  templateUrl: './arerolinea-list.component.html',
  styleUrls: ['./arerolinea-list.component.css']
})
export class ArerolineaListComponent implements OnInit {
  aerolineas: Array<Aerolinea> = [];
  constructor(private aerolineaService: AerolineaService) { }

   getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
      this.aerolineas = aerolineas;
    });
  }

  ngOnInit() {
    this.getAerolineas();
  }

}
