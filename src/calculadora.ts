import { ICalculadora } from "./calculadora.interface";

export class Calculadora implements ICalculadora {
  suma(a: number, b: number): number {
    this.validar(a);
    this.validar(b);
    return a + b;
  }

  validar(x: unknown): void {
    if (typeof x !== "number" || Number.isNaN(x)) {
      throw new Error("No es un numero");
    }
  }
}
