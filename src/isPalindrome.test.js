import { describe, test, expect } from "vitest";
import { isPalindrome } from "./isPalindrome.js";

describe("String Utilities", () => {
    describe("isPalindrome()", () => {
        test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
            expect(isPalindrome("anna")).toBe(true);
            expect(isPalindrome("radar")).toBe(true);
            expect(isPalindrome("casa")).toBe(false);
        });
    });
});
