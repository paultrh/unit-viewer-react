"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var get_decoded_uri = exports.get_decoded_uri = function get_decoded_uri(msg) {
    try {
        return decodeURIComponent(msg);
    } catch (error) {
        return error.toString();
    }
};

var get_unique_expandable_id = exports.get_unique_expandable_id = function get_unique_expandable_id(panel) {
    return panel._uuid + get_decoded_uri(panel.message).length.toString();
};