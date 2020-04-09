import PropTypes from "prop-types";

let globalCssModule;

export function setGlobalCssModule(cssModule) {
    globalCssModule = cssModule;
}

export function mapToCssModules(className = '', cssModule = globalCssModule) {
    if (!cssModule) return className;
        return className
            .split(' ')
            .map(c => cssModule[c] || c)
            .join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export function omit(obj, omitKeys) {
    const result = {};
    Object.keys(obj).forEach(key => {
        if (omitKeys.indexOf(key) === -1) {
            result[key] = obj[key];
        }
    });
    return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export function pick(obj, keys) {
    const pickKeys = Array.isArray(keys) ? keys : [keys];
    let length = pickKeys.length;
    let key;
    const result = {};

    while (length > 0) {
        length -= 1;
        key = pickKeys[length];
        result[key] = obj[key];
    }
    return result;
}

export const tagPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
]);

export const keyCodes = {
    esc:   27,
    space: 32,
    enter: 13,
    tab:   9,
    up:    38,
    down:  40,
    home:  36,
    end:   35,
    n:     78,
    p:     80,
};
  
export const PopperPlacements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
];
