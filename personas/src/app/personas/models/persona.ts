import { Genero } from "./genero.enum";

export interface IPersona {
  id: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  genero: string;
  edad: number;
}
