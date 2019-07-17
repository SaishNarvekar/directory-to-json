#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function dirTree(filename) {
    var stats = fs.lstatSync(filename);
    var info = {
        path: filename,
        name: path.basename(filename)
    };
    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs
            .readdirSync(filename)
            .map(child => dirTree(path.join(filename, child)));
    } else {
        info.type = "file";
    }
    return info;
}

console.log(JSON.stringify(dirTree("."),null,2));
