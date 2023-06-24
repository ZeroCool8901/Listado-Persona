import { Persona } from "./persona.model";

export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan', 'Perez'), 
        new Persona('Martin', 'Rodriguez')
    ];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
    }
} 