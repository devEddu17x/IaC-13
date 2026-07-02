import { ICalculadora } from "./calculadora.interface";

export class Calculadora implements ICalculadora {
  suma(a: number, b: number): number {
    if (typeof a !== "number" || Number.isNaN(a)) {
      throw new Error("No es un numero");
    }

    if (typeof b !== "number" || Number.isNaN(b)) {
      throw new Error("No es un numero");
    }

    return a + b;
  }
}
