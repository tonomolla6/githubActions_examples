module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 71:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(518);
const github = __nccwpck_require__(832);
const TelegramBot = __nccwpck_require__(314);

// Credentials
const token = core.getInput("token_bot");
const id = core.getInput("id_chat");

// Bot settings
const bot = new TelegramBot(token, { polling: false });
const name = core.getInput("name");
const commit = github.context.payload;

try {
  bot.sendMessage(
    id,
    `${name}, se ha subido un cambio:\n\nAutor: ${commit.head_commit.author.username}\nEmail: ${commit.head_commit.author.email}\nMsg:${commit.head_commit.message}\nUrl:${commit.head_commit.url}`
  );
} catch (error) {
  core.setFailed(error.message);
}

core.setOutput("message", "Mensaje enviado correctamente");


/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 314:
/***/ ((module) => {

module.exports = eval("require")("node-telegram-bot-api");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(71);
/******/ })()
;