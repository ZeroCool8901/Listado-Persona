import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LogginServices.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Martin', 'Rodriguez')
    ];

    saludar = new EventEmitter<number>();   

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona: " + persona.nombre)
        this.personas.push(persona);
    }
} 