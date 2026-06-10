import { describe, test, expect } from "vitest";
import { createSlug } from "./createSlug.js";


describe("createSlug", () => {
    test("dovrebbe restituire una stringa in lowercase", () => {
        const input = "Hello World";
        const result = createSlug(input);
        expect(result).toBe('hello-woeld');
    });
});