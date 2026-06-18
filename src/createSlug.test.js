import { describe, test, expect } from "vitest";
import { createSlug } from "./createSlug.js";


describe("createSlug", () => {
    // Snack 5
    test("dovrebbe restituire una stringa in lowercase", () => {
        const input = "Hello World";
        const result = createSlug(input);
        expect(result).toBe('hello-world');
    });

    // Snack 6
    test("lancia un errore se il titolo è vuoto o non valido", () => {
        expect(() => createSlug("")).toThrow();
        expect(() => createSlug("   ")).toThrow();
        expect(() => createSlug(12345)).toThrow();
        expect(() => createSlug(null)).toThrow();
    });

    // Snack 10 (Bonus)
    test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
        const posts = [
            { id: 1, title: "Primo Post", slug: "primo-post" },
        ];
        expect(createSlug("Primo Post", posts)).toBe("primo-post-1");
    });
});