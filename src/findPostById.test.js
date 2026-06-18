import { describe, test, expect, beforeEach } from "vitest";
import { findPostById } from "./findPostById.js";
import { addPost, removePost } from "./postManager.js";

const initialPosts = [
    { id: 1, title: "Primo Post", slug: "primo-post" },
    { id: 2, title: "Secondo Post", slug: "secondo-post" },
    { id: 3, title: "Terzo Post", slug: "terzo-post" },
];

let posts;

describe("Post Management", () => {
    beforeEach(() => {
        posts = initialPosts.map(p => ({ ...p }));
    });

    describe("findPostById()", () => {
        test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
            expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Primo Post", slug: "primo-post" });
            expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Secondo Post", slug: "secondo-post" });
            expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Terzo Post", slug: "terzo-post" });
        });

        test("Restituisce undefined se l'id non corrisponde a nessun post", () => {
            expect(findPostById(posts, 99)).toBeUndefined();
        });

        describe("Validazione struttura dati", () => {
            test("Lancia un errore se l'id non e' un numero", () => {
                expect(() => findPostById(posts, "1")).toThrow();
                expect(() => findPostById(posts, null)).toThrow();
                expect(() => findPostById(posts, undefined)).toThrow();
            });

            test("Lancia un errore se posts non e' un array", () => {
                expect(() => findPostById(null, 1)).toThrow();
                expect(() => findPostById("posts", 1)).toThrow();
            });

            test("Lancia un errore se un post manca di id, title o slug", () => {
                expect(() => findPostById([{ id: 1, title: "Solo titolo" }], 1)).toThrow();
                expect(() => findPostById([{ id: 1, slug: "solo-slug" }], 1)).toThrow();
                expect(() => findPostById([{ title: "No id", slug: "no-id" }], 1)).toThrow();
            });
        });
    });

    // Snack 8
    describe("addPost() / removePost()", () => {
        test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
            const initialLength = posts.length;
            addPost(posts, { id: 4, title: "Quarto Post", slug: "quarto-post" });
            expect(posts.length).toBe(initialLength + 1);
        });

        test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
            const initialLength = posts.length;
            removePost(posts, 1);
            expect(posts.length).toBe(initialLength - 1);
        });
    });

    // Snack 9
    describe("addPost() – Validazione duplicati", () => {
        test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
            expect(() => addPost(posts, { id: 1, title: "Duplicato ID", slug: "nuovo-slug" })).toThrow("Id già esistente");
            expect(() => addPost(posts, { id: 99, title: "Duplicato Slug", slug: "primo-post" })).toThrow("Slug già esistente");
        });
    });
});
