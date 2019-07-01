#!/usr/bin/env node

'use strict';

const { readFileSync, writeFileSync } = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const { decompress } = require('.');
const { version } = require('./package');

if (argv.help || argv.h) {
  process.stdout.write(`bz2 v${version}
    usage: bz2 [flags and files in any order]

    -h, --help     display this help
    -v, --version  display software version
    -t, --test     test compressed file integrity

    if no filenames are given, bz2 decompresses from
    standard input to standard output.
`);
  return;
}

if (argv.v || argv.version) {
  process.stdout.write(`bz2 v${version}`);
  return;
}

const [input, output] = argv._;
const test = argv.test || argv.t;

let result;
if (input) {
  result = decompress(readFileSync(input), test);
} else {
  result = decompress(readFileSync(0), test);
}

if (output) {
  writeFileSync(output, result);
} else {
  process.stdout.write(result);
}
