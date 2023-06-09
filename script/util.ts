const CryptoJS = require('crypto-js');

function md5(value: string){
    return CryptoJS.MD5(value).toString();
}
function sha256(value: string){
    return CryptoJS.SHA256(value).toString();
}
function sha512(value: string){
    return CryptoJS.SHA512(value).toString();
}
function urlEncodeOrDecode(value: string, index: string){
    return index === '0' ? encodeURIComponent(value) : decodeURIComponent(value)
}
function base64EncodeOrDecode(value: string, index: string){
    return index === '0' ? base64Encode(value) : base64Decode(value)
}
function base64Encode(value: string){
    const utf8 = CryptoJS.enc.Utf8.parse(value);
    return CryptoJS.enc.Base64.stringify(utf8);
}
function base64Decode(value: string){
    const parse = CryptoJS.enc.Base64.parse(value);
    return parse.toString(CryptoJS.enc.Utf8);
}

export function timestampFormat(timestamp: number){
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
export function dateTimeFormat(value: string){
    const dateParts = value.split(/[- :]/);
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);
    const hours = parseInt(dateParts[3], 10);
    const minutes = parseInt(dateParts[4], 10);
    const seconds = parseInt(dateParts[5], 10);

    const date = new Date(year, month, day, hours, minutes, seconds);
    return Math.round(date.getTime() * 0.001);
}
export function generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function highlightJSON(json: string) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
    return '<code>' + json + '</code>';
}
export const encodes =  [urlEncodeOrDecode, base64EncodeOrDecode]
export const encrypts = [md5, sha256, sha512]