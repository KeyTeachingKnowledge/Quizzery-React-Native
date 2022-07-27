#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCodeSigning = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const args_1 = require("./utils/args");
const Log = tslib_1.__importStar(require("./utils/log"));
const configureCodeSigning = async (argv) => {
    const args = (0, args_1.assertArgs)({
        // Types
        '--help': Boolean,
        '--certificate-input-directory': String,
        '--key-input-directory': String,
        // Aliases
        '-h': '--help',
    }, argv !== null && argv !== void 0 ? argv : []);
    if (args['--help']) {
        Log.exit((0, chalk_1.default) `
      {bold Description}
      Configure and validate expo-updates code signing for this project

      {bold Usage}
        $ npx expo-updates codesigning:configure

        Options
        --certificate-input-directory <string>     Directory containing code signing certificate
        --key-input-directory <string>             Directory containing private and public keys
        -h, --help               Output usage information
    `, 0);
    }
    const { configureCodeSigningAsync } = await Promise.resolve().then(() => tslib_1.__importStar(require('./configureCodeSigningAsync')));
    const certificateInput = (0, args_1.requireArg)(args, '--certificate-input-directory');
    const keyInput = (0, args_1.requireArg)(args, '--key-input-directory');
    return await configureCodeSigningAsync((0, args_1.getProjectRoot)(args), {
        certificateInput,
        keyInput,
    });
};
exports.configureCodeSigning = configureCodeSigning;
