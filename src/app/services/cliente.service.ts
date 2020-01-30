import { Injectable } from '@angular/core';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interface/cliente'

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
  }

  updateCliente(cliente: Cliente) {
    this.clienteList.update(cliente.$key,{
      name: cliente.name,
      apellido: cliente.apellido,
      edad: cliente.edad,
      date: cliente.date
    })
  }

  deleteCliente($key:string) {
    this.clienteList.remove($key);
  }
}
