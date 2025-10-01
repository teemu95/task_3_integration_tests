const express = require('express')
const { hexToRgb } = require('./hex_converter')
const app = express()
const port = 3000

/**
 * GET /:hex
 * Convert a hex color (path param) to RGB.
 *
 * Accepts 3- or 6-digit hex (e.g. `f0a`, `ff00aa`). A leading `#` is not part of the path,
 * because `#` is a URL fragment and never reaches the server, send `/ff00aa` or encode as `%23ff00aa` if using query strings.
 */

app.get('/:hex', (req, res) => {
    const hex_string = req.params.hex.toString();
    const rgb_values = hexToRgb(hex_string);
    res.json(rgb_values).status(200);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
;})

module.exports = app;