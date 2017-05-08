#!/usr/bin/env node

"use strict";

var flags = [];
var enclose = require("enclose").exec;
flags.push("--config", "./compile.settings.js");
flags.push("./app.js");
flags.push("-o", "../Scala/assets/app.exe");
enclose(flags);
