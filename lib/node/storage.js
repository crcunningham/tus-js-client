/* eslint no-unused-vars: 0 */

var fs = require('fs');

var file = 'storage.json'
var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

export const canStoreURLs = true;

export function setItem(key, value) {
    console.log(`setting ${key} to ${value}`)
    obj[key] = value

    var c = JSON.stringify(obj);// stringify
    fs.writeFileSync(file, c, 'utf8');
}

export function getItem(key) {
    console.log(`getting ${key}`)
    return obj[key]
}

export function removeItem(key) {
    console.log(`removing ${key}`)
    delete obj[key]

    var c = JSON.stringify(obj);// stringify
    fs.writeFileSync(file, c, 'utf8');
}
