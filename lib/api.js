/**
 * @fileoverview Expose out ESLint and CLI to require.
 * @author Ian Christian Myers
 */

"use strict";

module.exports = {
    linter: require("./eslint"),
    Linter: require("./Linter"),
    CLIEngine: require("./cli-engine"),
    RuleTester: require("./testers/rule-tester"),
    SourceCode: require("./util/source-code")
};
