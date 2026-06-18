export function addPost(posts, post) {
    if (!Array.isArray(posts)) throw new Error("I posts devono essere un array");
    if (!post || post.id === undefined || post.title === undefined || post.slug === undefined) {
        throw new Error("Il post deve avere id, title e slug");
    }

    if (posts.some(p => p.id === post.id)) throw new Error("Id già esistente");
    if (posts.some(p => p.slug === post.slug)) throw new Error("Slug già esistente");

    posts.push(post);
}

export function removePost(posts, id) {
    if (!Array.isArray(posts)) throw new Error("I posts devono essere un array");
    if (typeof id !== 'number') throw new Error("L'ID deve essere un numero");

    const index = posts.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Post non trovato");

    posts.splice(index, 1);
}
