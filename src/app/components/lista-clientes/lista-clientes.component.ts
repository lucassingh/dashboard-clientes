import { Component, OnInit } from '@angular/core';

//service
import { ClienteService } from '../../services/cliente.service'

//interface
import { Cliente} from 'src/app/interface/cliente';
import { element } from 'protractor';


@Component({
	selector: 'app-lista-clientes',
	templateUrl: './lista-clientes.component.html',
	styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

	public clienteList: Cliente[];
	

	constructor(private clienteService: ClienteService) { }

	ngOnInit() {

		this.clienteService.getCliente()
			.snapshotChanges()
			.subscribe(item => {
			this.clienteList = [];
			item.forEach((element:any) => {				
				let id = element.payload.toJSON();
				id['$key'] = element.key;
				this.clienteList.push(id as Cliente);
			});
		});
	}

	onEdit(cliente: Cliente) {
		this.clienteService.selectedCliente = Object.assign({}, cliente)		
	}

	onDelete($key: string) {
		this.clienteService.deleteCliente($key)

	}
}
