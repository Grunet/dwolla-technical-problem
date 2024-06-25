const test = require('node:test');
const assert = require('node:assert').strict;

const { handlerInternal } = require("./index.js");

test('Date formatting is correct', () => {
    const date = new Date('2000-12-11T01:01:00');

    const formattedDate = handlerInternal(date);
    assert.strictEqual(formattedDate, '2000-12-11 01:01:00');
  });