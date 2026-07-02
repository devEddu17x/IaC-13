import { Calculadora } from "../src/calculadora";

describe("Calculadora", () => {
  const calculadora = new Calculadora();

  it("suma 1 + 1 = 2", () => {
    expect(calculadora.suma(1, 1)).toBe(2);
  });

  it("suma -1 + 1 = 0", () => {
    expect(calculadora.suma(-1, 1)).toBe(0);
  });

  it('lanza ERROR: No es un numero cuando recibe "a" + 1', () => {
    expect(() => calculadora.suma("a" as unknown as number, 1)).toThrow(
      "No es un numero",
    );
  });
});
