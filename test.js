'use strict';

const { readFileSync, writeFileSync, readdirSync } = require('fs');
const { deepStrictEqual } = require('assert');
const { decompress } = require('.');

const [input, out] = process.argv.slice(2);

if (input) {
  writeFileSync(out, decompress(readFileSync(input)));
} else {
  const tests = readdirSync('./tests')
    .filter((x) => x.endsWith('.bz2'));

  tests.forEach((test) => {
    const name = test.split('.')[0];
    console.log(name);
    const result = decompress(readFileSync(`./tests/${name}.bz2`), true);
    const original = new Uint8Array(readFileSync(`./tests/${name}.out`));
    deepStrictEqual(result, original);
  });
}
