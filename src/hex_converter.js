
/**
 * Converts a hex color (#RGB or #RRGGBB) to an RGB object.
 * @param {string} hex - Hex color, with or without a leading '#'
 * @returns {{r: number, g: number, b: number}} - Red/Green/Blue components (0-255).
 * @throws {Error} If the input isn't a valid 3- or 6-digit hex color or a string.
 */
function hexToRgb(hex) {
    if (typeof hex !== "string") throw new Error("Color must be a string");
    const short = /^[0-9a-f]{3}$/i;
    const long = /^[0-9a-f]{6}$/i;

    if (short.test(hex)) {
        hex = hex.split('').map(h => h + h).join('');
    } else if (!long.test(hex)) {
        throw new Error("Invalid hex RGB. Use #RGB or #RRGGBB");
    }

    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return { r, g, b };

}

module.exports = {hexToRgb}
