import "./tdl/base.js";
import "./tdl/io";
import "./tdl/log";
import "./tdl/string";
import "./tdl/sync";
import "./tdl/misc";
import "./tdl/buffers";
import "./tdl/clock";
import "./tdl/fast";
import "./tdl/fps";
import "./tdl/math";
import "./tdl/models";
import "./tdl/particles";
import "./tdl/shader";
import "./tdl/primitives";
import "./tdl/programs";
import "./tdl/screenshot";
import "./tdl/textures";
import "./tdl/webgl";

import "./shaders.js";
import "./aquarium-config.js";
import "./aquarium-common.js";
import { advanceViewSettings } from "./aquarium.js";

console.log("This example is compiled for debugging WebGL mini-game runtime");

setInterval(advanceViewSettings, 5000);