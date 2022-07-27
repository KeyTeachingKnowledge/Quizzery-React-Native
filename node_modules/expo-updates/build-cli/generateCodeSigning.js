#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCodeSigning = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const args_1 = require("./utils/args");
const Log = tslib_1.__importStar(require("./utils/log"));
const generateCodeSigning = async (argv) => {
    const args = (0, args_1.assertArgs)({
        // Types
        '--help': Boolean,
        '--key-output-directory': String,
        '--certificate-output-directory': String,
        '--certificate-validity-duration-years': Number,
        '--certificate-common-name': String,
        // Aliases
        '-h': '--help',
    }, argv !== null && argv !== void 0 ? argv : []);
    if (args['--help']) {
        Log.exit((0, chalk_1.default) `
      {bold Description}
      Generate expo-updates private key, public key, and code signing certificate using that public key (self-signed by the private key)

      {bold Usage}
        $ npx expo-updates codesigning:generate

        Options
        --key-output-directory <string>                  Directory in which to put the generated private and public keys
        --certificate-output-directory <string>          Directory in which to put the generated certificate
        --certificate-validity-duration-years <number>   Validity duration in years
        --certificate-common-name <string>               Common name attribute for certificate
        -h, --help                                       Output usage information
    `, 0);
    }
    const { generateCodeSigningAsync } = await Promise.resolve().then(() => tslib_1.__importStar(require('./generateCodeSigningAsync')));
    const keyOutput = (0, args_1.requireArg)(args, '--key-output-directory');
    const certificateOutput = (0, args_1.requireArg)(args, '--certificate-output-directory');
    const certificateValidityDurationYears = (0, args_1.requireArg)(args, '--certificate-validity-duration-years');
    const certificateCommonName = (0, args_1.requireArg)(args, '--certificate-common-name');
    return await generateCodeSigningAsync((0, args_1.getProjectRoot)(args), {
        certificateValidityDurationYears,
        keyOutput,
        certificateOutput,
        certificateCommonName,
    });
};
exports.generateCodeSigning = generateCodeSigning;
