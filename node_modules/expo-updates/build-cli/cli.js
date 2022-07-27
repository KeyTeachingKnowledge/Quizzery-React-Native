#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const arg_1 = tslib_1.__importDefault(require("arg"));
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const commands = {
    // Add a new command here
    'codesigning:generate': () => Promise.resolve().then(() => tslib_1.__importStar(require('./generateCodeSigning'))).then((i) => i.generateCodeSigning),
    'codesigning:configure': () => Promise.resolve().then(() => tslib_1.__importStar(require('./configureCodeSigning'))).then((i) => i.configureCodeSigning),
};
const args = (0, arg_1.default)({
    // Types
    '--help': Boolean,
    // Aliases
    '-h': '--help',
}, {
    permissive: true,
});
const command = args._[0];
const commandArgs = args._.slice(1);
// Handle `--help` flag
if (args['--help'] || !command) {
    console.log((0, chalk_1.default) `
    {bold Usage}
      {bold $} expo-updates <command>

    {bold Available commands}
      ${Object.keys(commands).sort().join(', ')}

    {bold Options}
      --help, -h      Displays this message

    For more information run a command with the --help flag
      {bold $} expo-updates codesigning:generate --help
  `);
    process.exit(0);
}
// Push the help flag to the subcommand args.
if (args['--help']) {
    commandArgs.push('--help');
}
// Install exit hooks
process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));
commands[command]().then((exec) => exec(commandArgs));
