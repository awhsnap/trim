import escapeHtmlLib from 'escape-html';

export function escapeHtml(html) {
    return escapeHtmlLib(html);
}

export function pickTo(target, from, keys) {

    keys.forEach(key => {
        if (from.hasOwnProperty(key)) {
            target[key] = from[key];
        }
    });

    return target;

};

export function omit(target, keys, params = {}) {

    const data = params.deep ? assignDeep({}, target) : assign({}, target);

    ensureArray(keys).forEach(key => {
        if (data.hasOwnProperty(key)) {
            delete data[key];
        }
    });

    return data;

}

export function find(list, callback) {

    let foundItem;

    each(list, (listItem, key) => {

        if (callback(listItem, key)) {
            foundItem = listItem;
            return false;
        }

    });

    return foundItem;

}

export function assign(target) {

    for (let i = 1; i < arguments.length; i++) {

        let obj = arguments[i];

        if (obj) {
            for (let key in obj) {
                obj.hasOwnProperty(key) && (target[key] = obj[key]);
            }
        }

    }

    return target;

}

export function assignDeep(out) {

    for (var i = 1; i < arguments.length; i++) {

        var obj = arguments[i];
        if (!obj) { continue; }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (Array.isArray(obj[key])) {

                    out[key] = obj[key].map(item => {
                        return isPlainObject(item) ? assignDeep({}, item) : item;
                    });

                } else if (typeof obj[key] === 'object' && obj[key] !== null) {

                    typeof out[key] === 'undefined' && (out[key] = {});
                    assignDeep(out[key], obj[key]);

                } else {
                    out[key] = obj[key];
                }
            } else {
                continue;
            }
        }

    }

    return out;

}

export function clone(obj) {

    return JSON.parse(JSON.stringify(obj));

}

export function each(collection, callback) {

    if (Array.isArray(collection)) {

        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i], i) === false) { break; }
        }

    } else {

        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (callback(collection[key], key) === false) { break; }
            }
        }

    }

};

export function limitWords(string, limit, sufix) {

    let words = string.split(' ');

    limit = typeof limit !== 'undefined' ? limit : 20;
    sufix = sufix || '...';

    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + sufix;
    } else {
        return string;
    }

}

export function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.substring(1);

}

export function limitCharacters(string, limit, sufix) {

    limit = typeof limit !== 'undefined' ? limit : 100;
    sufix = sufix || '...';

    if (string.length > limit) {
        return string.substring(0, limit) + sufix;
    } else {
        return string;
    }

}

export function isPlainObject(obj) {

    return Object.prototype.toString.call(obj) === '[object Object]';

}

export function isEmptyObject(obj) {

    for (let name in obj) { return false; }
    return true;

}

export function stripTags(html) {

    let div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';

}

export function range(start, stop) {

    const results = [];
    const iterations = stop - start;

    for (var i = 0; i <= iterations; i++) {
        results.push(start + i);
    }

    return results;

}

export function result(value, args, context) {

    return typeof value === 'function'
        ? (args || context) ? value.apply(context, ensureArray(args)) : value()
        : value
    ;

}

export function ensureArray(item) {

    return Array.isArray(item) ? item : [item];

}

export function deepSet(obj, pointer, data) {

    let currentContext = obj;
    let keys = pointer.split('.');

    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            currentContext[key] = data;
        } else {
            currentContext[key] = currentContext[key] || {};
            currentContext = currentContext[key];
        }
    });

}

export function reduce(obj, reducer, initValue) {

    let reducedValue = initValue;

    each(obj, (value, key) => {
        reducedValue = reducer(reducedValue, value, key);
    });

    return reducedValue;

}

export function clientId() {

    clientId.counter = clientId.counter || 0;
    return 'c' + clientId.counter++;

}

export function elementMatches(el, selector) {

    let p = Element.prototype;
    let f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(el, selector);

}

export function elementIndex(el) {

    let index = 0;

    while ((el = el.previousElementSibling)) {
        index++;
    }

    return index;

}

export function checkUniqueFieldNames(definitions) {

    definitions.reduce((acc, definition) => {

        if (!definition.options.name) {
            throw new Error('Property "name" not defined on form element');
        }

        if (acc.indexOf(definition.options.name) >= 0) {
            throw new Error('Duplicate "name" detected: ' + definition.options.name);
        }

        acc.push(definition.options.name);
        return acc;

    }, []);

}

export function elementFromString(html) {

    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;

}

export function getComponentOption(Component, optionName) {

    const bluePrint = typeof Component === 'function'
        ? Component.options
        : Component
    ;

    return bluePrint[optionName];

}

export function getComponentInitialValue(Component, options = {}) {

    if (typeof options.value !== 'undefined') {
        return options.value;
    } else {

        const props = getComponentOption(Component, 'props');
        const valueProvider = getComponentOption(Component, 'getInitialValue');

        return valueProvider
            ? valueProvider(options)
            : result(props && props.value && props.value.default)
        ;
    }

}
