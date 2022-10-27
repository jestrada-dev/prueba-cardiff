import { Component, OnInit } from '@angular/core';
import { IPersona } from '../models/persona';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGenero } from '../models/genero';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  personas: IPersona[] = [];
  generos: IGenero[] = [];
  consecutivo: number = 0;

  form = new FormGroup({
    nombre: new FormControl('', []),
    apellidos: new FormControl('', []),
    cedula: new FormControl('', []),
    genero: new FormControl('', []),
    edad: new FormControl('', [])
  });

  constructor() { }

  ngOnInit(): void {
    this.generos.push({codigo: 'M', descripcion: 'Masculino' });
    this.generos.push({codigo: 'F',descripcion: 'Femenino'});
    this.generos.push({codigo: 'O',descripcion: 'Otro'});
    console.log(this.generos);
  }

  addPerson () {
    this.consecutivo = this.consecutivo + 1
    const persona: IPersona = {
      id: this.consecutivo,
      nombres: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      cedula: this.form.get('cedula')?.value,
      genero: this.form.get('genero')?.value,
      edad: this.form.get('edad')?.value
    }
    this.personas.push(persona);
  }

}
