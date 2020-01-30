import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interface/cliente';
import { snapshotChanges } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
	selector: 'app-estadistica-clientes',
	templateUrl: './estadistica-clientes.component.html',
	styleUrls: ['./estadistica-clientes.component.css']
})
export class EstadisticaClientesComponent implements OnInit {

	constructor(private clienteService: ClienteService) { }

	public clienteList: Cliente[];
	public countEdad = 0;
	public prom: number;
	public desvio: number;
	public mayorEdad = 0;
	public nombre: string;
	public apellido: string;
	public fechaActual: number;	
	public fechaNac: string;	
	public añoMuerte: any;
	public fechaMuerte: string;	

	ngOnInit() {

			//data cliente

			this.clienteService.getCliente()
			.snapshotChanges()
			.subscribe(item => {
			this.clienteList = [];
			item.forEach((element:any) => {
				let id = element.payload.toJSON();
				id['$key'] = element.key;
				this.clienteList.push(id as Cliente);
			});

			//dato persona + fecha probable muerte

			this.clienteList.forEach(element => {				
				this.nombre = element.name;
				this.apellido = element.apellido;				
				this.mayorEdad = Math.max(element.edad);
				this.mayorEdad = this.mayorEdad < element.edad ? element.edad : this.mayorEdad;
				console.log(this.mayorEdad)				
				this.fechaNac = element.date;
				this.añoMuerte = new Date(this.fechaNac).getFullYear() + 80;				
				this.fechaMuerte = new Date(`${this.añoMuerte}`).toLocaleDateString().split(',')[0];				
			});

			//calculo promedio edad

			this.clienteList.forEach(element => {
				this.countEdad = this.countEdad + element.edad;
			});

			this.prom = this.countEdad / this.clienteList.length;			

			//calculo desvio

			this.desvio = Math.sqrt((this.prom * this.prom) / this.clienteList.length);

		});
	}
}


