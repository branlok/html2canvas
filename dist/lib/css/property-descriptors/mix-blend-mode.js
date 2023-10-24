"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixBlendMode = void 0;
/**
 * Guard function for checking validity of mode and casting as
 * GlobalCompositeOperation if it's a valid value
 *
 * @param mode String value of the css mix-blend-mode
 * @returns boolean
 */
function isGlobalCompositeOperation(mode) {
    var globalCompositeModes = [
        'color',
        'color-burn',
        'color-dodge',
        'copy',
        'darken',
        'destination-atop',
        'destination-in',
        'destination-out',
        'destination-over',
        'difference',
        'exclusion',
        'hard-light',
        'hue',
        'lighten',
        'lighter',
        'luminosity',
        'multiply',
        'overlay',
        'saturation',
        'screen',
        'soft-light',
        'source-atop',
        'source-in',
        'source-out',
        'source-over',
        'xor'
    ];
    return globalCompositeModes.indexOf(mode) !== -1;
}
exports.mixBlendMode = {
    name: 'mix-blend-mode',
    initialValue: 'normal',
    prefix: false,
    type: 2 /* PropertyDescriptorParsingType.IDENT_VALUE */,
    parse: function (_context, mode) {
        if (isGlobalCompositeOperation(mode)) {
            return mode;
        }
        // This is the default in css
        return 'source-over';
    }
};
//# sourceMappingURL=mix-blend-mode.js.map