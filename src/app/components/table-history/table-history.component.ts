import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estado } from 'src/app/model/status.model';
import { statusService } from 'src/app/pages/services/statusService';

@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.sass'],
})
export class TableHistoryComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'marca',
    'modelo',
    'estEquipo',
    'estEnvio',
    'fecha',
  ];
  dataSource: MatTableDataSource<Estado>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  envios: Estado[] = [];
  enviosAux: Estado[] = [];

  constructor(private statusService: statusService) {
    const id = JSON.parse(localStorage.getItem('id')!);
    let respuesta: string;

    this.statusService.status(id).subscribe((resp) => {
      respuesta = JSON.stringify(resp);
      this.envios = JSON.parse(respuesta);
      for (let i = 0; i < this.envios.length; i++) {
        if (
          this.envios[i].travelEquipmentDTOs[
            this.envios[i].travelEquipmentDTOs.length - 1
          ].statusTravel == 9 ||
          this.envios[i].travelEquipmentDTOs[
            this.envios[i].travelEquipmentDTOs.length - 1
          ].statusTravel == 8
        ) {
          this.enviosAux.push(this.envios[i]);
        }
      }
      this.dataSource = new MatTableDataSource<Estado>(this.enviosAux);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.dataSource = new MatTableDataSource<Estado>(this.envios);
  }

  estadoMap: any = {
    '1': 'Pendiente',
    '2': 'Pendiente',
    '3': 'En curso',
    '4': 'Pendiente de reparación',
    '5': 'Reparado',
    '6': 'Pendiente de entrega',
    '7': 'Pendiente de entrega',
    '8': 'Entregado',
    '9': 'Entregado',
    '10': 'Renunciado',
    other: '-',
  };

  estadoEqMap: any = {
    '1': 'A reparar',
    '2': 'A reparar',
    '3': 'A reparar',
    '4': 'A reparar',
    '5': 'Reparado',
    '6': 'Reparado',
    '7': 'Reparado',
    '8': 'Reparado',
    '9': 'Reparado',
    other: '-',
  };

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
