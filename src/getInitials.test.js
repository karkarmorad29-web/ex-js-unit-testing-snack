import { describe, test, expect } from "vitest";
import { getInitials } from "./getInitials.js";
import { average } from "./average.js";
import { createSlug } from "./createSlug.js";


describe("getInitials", () => {
    test("dovrebbe restituire le iniziali di un nome completo", () => {
        const fullName = "Morad Karkar";
        const result = getInitials(fullName);
        expect(result).toBe("MK");
    });
});
// snack 3
describe("average", () => {
    test("La funzione average calcola la media aretmetica di un array di numeri", () => {
        const result = average([10, 20, 30]);
        expect(result).toBe(20);
    })
});

// snack 4
describe("createSlug", () => {
    test("La funzione createSlug crea uno slug a partire da una stringa", () => {
        const result = createSlug("Hello World");
        expect(result).toBe("hello-world");
    });
});
