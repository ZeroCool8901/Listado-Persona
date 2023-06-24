import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LogginServices.service';
import { PersonasService } from './personasServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loggingService: LoggingService, private personasService: PersonasService){

  }
  title = 'Listado de Personas';
  personas: Persona[] = [];
  
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  nombreInput: string = '';
  apellidoInput: string = '';

 /*  OnPersonaAgregada(persona: Persona){
    //this.personas.push(persona);
    //this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la persona de nombre: " + persona.nombre)
    this.personasService.agregarPersona(persona);
  } */
}
