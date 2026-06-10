export function getInitials(name) {
    if (typeof name !== 'string' || !name.trim()) return '';
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}