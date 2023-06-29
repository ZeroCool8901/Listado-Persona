import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LogginServices.service';
import { PersonasService } from '../personasServices';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private loggingService: LoggingService, private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es " + (indice + 1))
    );

  }

  //@Output() personaCreada = new EventEmitter<Persona>();
  /* nombreInput: string = '';
  apellidoInput: string = ''; */
  
  //Uso de local reference
  /*  agregarPersona(nombre: HTMLInputElement, apellido: HTMLInputElement){
    let persona1 = new Persona(nombre.value, apellido.value)
    this.personaCreada.emit(persona1)
  } */
  
  //Uso de ViewChild para acceder al valor de las variables
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

    agregarPersona(){
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    //this.loggingService.enviaMensajeAConsola("Enviamos una persona llamada: " + persona1.nombre)
    //this.personaCreada.emit(persona1)
    this.personasService.agregarPersona(persona1);
  }
}
