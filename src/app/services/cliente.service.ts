import { Injectable } from '@angular/core';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interface/cliente';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  clienteList: AngularFireList<any>
  selectedCliente: Cliente = new Cliente();

  constructor(private firebase: AngularFireDatabase ) {}

  getCliente() {
    return this.clienteList = this.firebase.list('clientes')
  }

  insertCliente(cliente: Cliente) {
    this.clienteList.push({
      name: cliente.name,
      apellido: cliente.apellido,
      edad: cliente.edad,
      date: cliente.date
	})
	Swal.fire(
		'Cliente ingresado en firebase',
		'You clicked the button!',
		'success'
	  )
  }

  updateCliente(cliente: Cliente) {
    this.clienteList.update(cliente.$key,{
      name: cliente.name,
      apellido: cliente.apellido,
      edad: cliente.edad,
      date: cliente.date
	})
	Swal.fire(
		'Cliente actualizado en firebase',
		'You clicked the button!',
		'success'
	  )
  }

  deleteCliente($key:string) {
	this.clienteList.remove($key);
	Swal.fire(
		'Cliente eliminado de firebase',
		'You clicked the button!',
		'success'
	  )
  }
}
