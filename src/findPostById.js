export function findPostById(posts, id) {
    // Controllo ID numerico
    if (typeof id !== 'number') {
        throw new Error("L'ID deve essere un numero");
    }

    // Controllo struttura dell'array e dei post
    if (!Array.isArray(posts)) {
        throw new Error("I posts devono essere un array");
    }

    posts.forEach(post => {
        if (!post || post.id === undefined || post.title === undefined || post.slug === undefined) {
            throw new Error("Ogni post deve avere un ID, un titolo e uno slug validi");
        }
    });

    // Ritorna il post corretto
    return posts.find(p => p.id === id);
}
