import { describe, test, expect } from "vitest";
import { getInitials } from "./getInitials.js";


describe("getInitials", () => {
    test("dovrebbe restituire le iniziali di un nome completo", () => {
        const fullName = "Morad Karkar";
        const result = getInitials(fullName);
        expect(result).toBe("MK");
    });
});
