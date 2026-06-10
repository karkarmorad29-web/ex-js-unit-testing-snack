export function createSlug(text) {
    if (typeof text !== 'string') return '';
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
}