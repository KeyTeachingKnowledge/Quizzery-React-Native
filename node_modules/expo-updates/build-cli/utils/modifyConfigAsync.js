"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attemptModification = void 0;
const tslib_1 = require("tslib");
const config_1 = require("@expo/config");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const Log = tslib_1.__importStar(require("./log"));
/** Wraps `[@expo/config] modifyConfigAsync()` and adds additional logging. */
async function attemptModification(projectRoot, edits, exactEdits) {
    const modification = await (0, config_1.modifyConfigAsync)(projectRoot, edits, {
        skipSDKVersionRequirement: true,
    });
    if (modification.type === 'success') {
        Log.log();
    }
    else {
        warnAboutConfigAndThrow(modification.type, modification.message, exactEdits);
    }
}
exports.attemptModification = attemptModification;
function logNoConfig() {
    Log.log(chalk_1.default.yellow(`No Expo config was found. Please create an Expo config (${chalk_1.default.bold `app.json`} or ${chalk_1.default.bold `app.config.js`}) in your project root.`));
}
function warnAboutConfigAndThrow(type, message, edits) {
    Log.log();
    if (type === 'warn') {
        // The project is using a dynamic config, give the user a helpful log and bail out.
        Log.log(chalk_1.default.yellow(message));
    }
    else {
        logNoConfig();
    }
    notifyAboutManualConfigEdits(edits);
    throw new Error();
}
function notifyAboutManualConfigEdits(edits) {
    Log.log(chalk_1.default.cyan(`Please add the following to your Expo config`));
    Log.log();
    Log.log(JSON.stringify(edits, null, 2));
    Log.log();
}
