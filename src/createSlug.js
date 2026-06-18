
export function createSlug(text, posts) {
    if (typeof text !== 'string' || text.trim() === '') throw new Error('Input non valido');
    let slug = text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');

    if (Array.isArray(posts) && posts.some(p => p.slug === slug)) {
        slug = slug + '-1';
    }

    return slug;
}
