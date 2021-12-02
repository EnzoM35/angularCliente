import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estado } from 'src/app/model/status.model';
import { statusService } from 'src/app/pages/services/statusService';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.sass'],
})
export class TableStatusComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'fecha',
    'marca',
    'modelo',
    'estEquipo',
    'estEnvio',
  ];
  dataSource: MatTableDataSource<Estado>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  envios: Estado[] = [];

  constructor(private statusService: statusService) {
    const id = JSON.parse(localStorage.getItem('id')!);
    let respuesta: string;

    this.statusService.status(id).subscribe((resp) => {
      respuesta = JSON.stringify(resp);
      this.envios = JSON.parse(respuesta);

      console.log('Solicitud realizada');
      console.log(this.envios);
      this.dataSource = new MatTableDataSource<Estado>(this.envios);
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
    '6': 'Reparado',
    '7': 'En curso',
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
