export function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    // Rimuove spazi e caratteri speciali, rende tutto minuscolo
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
