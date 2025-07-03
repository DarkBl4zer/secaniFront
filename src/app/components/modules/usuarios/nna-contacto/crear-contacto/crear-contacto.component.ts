import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngleUpIcon } from 'primeng/icons/angleup';
import { TpParametros } from '../../../../../core/services/tpParametros';
import { environment } from '../../../../../../environments/environment';
import { Generico } from '../../../../../core/services/generico';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogCrearContactoComponent } from '../dialog-crear-contacto/dialog-crear-contacto.component';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-crear-contacto',
  standalone: true,
  imports: [DialogModule, CommonModule, ButtonModule,FormsModule,ReactiveFormsModule,TableModule,DialogCrearContactoComponent],
  templateUrl: './crear-contacto.component.html',
  styleUrl: './crear-contacto.component.css'
})
export class CrearContactoComponent {
  @Input() nnaId: any; // Recibir datos del padre
  @Output() dataToParent:any = new EventEmitter<any>(); // Emitir datos al padre

  visualizars!: any;
  first = 0;
  rows = 10;

  listadoContacto:any=[];

  constructor(private router: Router, private fb: FormBuilder, private tpParametros: TpParametros, private axios: Generico) {

  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  async handleDataContacto(data: any) {
    console.log('Data received from child handleDataContacto:','Crear Contacto', data);
    this.listadoContacto.push(data);

    this.dataToParent.emit(this.listadoContacto); // Ensure this is an EventEmitter
  }
}
