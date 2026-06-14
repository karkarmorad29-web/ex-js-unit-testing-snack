import { describe, test, expect } from "vitest";
import { createSlug } from "./createSlug.js";


describe("createSlug", () => {
    test("dovrebbe restituire una stringa in lowercase", () => {
        const input = "Hello World";
        const result = createSlug(input);
        expect(result).toBe('hello-world');
    });
});

export function createSlug(text) {
    if (typeof text !== 'string') return '';
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Rimuove gli accenti
}