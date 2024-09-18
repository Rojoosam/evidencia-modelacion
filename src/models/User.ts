// src/models/User.ts
import { paciente as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
  apellido: string | null;
  id_paciente: number;
  nombre: string | null;
  telefono: number | null;
  zona: number | null;

  constructor(apellido: string, id_paciente: number, nombre: string, telefono: number, zona: number) {
    this.apellido = apellido;
    this.id_paciente = id_paciente;
    this.nombre = nombre;
    this.telefono = telefono;
    this.zona = zona;
  }

  getDisplayName(): string {
    return `${this.nombre} (${this.apellido})`;
  }
}
