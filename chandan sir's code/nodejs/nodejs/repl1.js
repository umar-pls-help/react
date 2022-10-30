const repl = require('repl');
const msg = 2+2;

repl.start('> ').context.m = msg;

