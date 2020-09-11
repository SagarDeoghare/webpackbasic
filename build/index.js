/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./configuration/config.ts":
/*!*********************************!*\
  !*** ./configuration/config.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.database = exports.config = void 0;\r\nexports.config = {\r\n    secret: \"thisis123secreatto#$@#$!\",\r\n    dbPath: process.cwd() + '/database/merchant.db'\r\n};\r\nconst sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\r\nexports.database = new sequelize_1.Sequelize({\r\n    database: \"merchant.db\",\r\n    dialect: \"sqlite\",\r\n    storage: process.cwd() + '/database/merchant.db',\r\n});\r\n\n\n//# sourceURL=webpack:///./configuration/config.ts?");

/***/ }),

/***/ "./src/controller/items.ts":
/*!*********************************!*\
  !*** ./src/controller/items.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ItemData = void 0;\r\nconst express = __importStar(__webpack_require__(/*! express */ \"express\"));\r\nconst validator_1 = __webpack_require__(/*! ./validator */ \"./src/controller/validator.ts\");\r\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\r\nconst item_model_1 = __webpack_require__(/*! ../model/item.model */ \"./src/model/item.model.ts\");\r\nclass ItemData {\r\n    constructor() {\r\n        this.path = '/api/items';\r\n        this.router = express.Router();\r\n        this.itemData = [\r\n            { item_id: 0,\r\n                item_buy_price: 0.0,\r\n                item_name: '',\r\n                item_qty_remain: 0,\r\n                item_qty_sell: 0,\r\n                item_sell_price: 0,\r\n                merchant_id: 0,\r\n                item_color: '' }\r\n        ];\r\n        this.getAllItems = (request, response) => {\r\n            const errors = express_validator_1.validationResult(request);\r\n            if (!errors.isEmpty()) {\r\n                return response.status(400).json({ errors: errors.array() });\r\n            }\r\n            else {\r\n                const data = new item_model_1.ItemModel();\r\n                data.connectToDB(request, response);\r\n            }\r\n        };\r\n        this.createItem = (request, response) => {\r\n        };\r\n        this.intializeRoutes();\r\n    }\r\n    intializeRoutes() {\r\n        this.router.get(this.path, this.getAllItems);\r\n        this.router.post(this.path, this.createItem, validator_1.validate_create_item);\r\n    }\r\n}\r\nexports.ItemData = ItemData;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/controller/items.ts?");

/***/ }),

/***/ "./src/controller/login.ts":
/*!*********************************!*\
  !*** ./src/controller/login.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Login = void 0;\r\nconst express = __importStar(__webpack_require__(/*! express */ \"express\"));\r\nconst dbconnector_1 = __webpack_require__(/*! ../model/dbconnector */ \"./src/model/dbconnector.ts\");\r\nclass Login {\r\n    constructor() {\r\n        this.path = '/login';\r\n        this.router = express.Router();\r\n        this.intializeRoutes();\r\n    }\r\n    intializeRoutes() {\r\n        this.router.get(this.path, this.connectDB);\r\n    }\r\n    connectDB(request, response) {\r\n        new dbconnector_1.DBConnector().connectToDB(request, response);\r\n    }\r\n}\r\nexports.Login = Login;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/controller/login.ts?");

/***/ }),

/***/ "./src/controller/the_app.ts":
/*!***********************************!*\
  !*** ./src/controller/the_app.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Server = void 0;\r\nconst config_1 = __webpack_require__(/*! ../../configuration/config */ \"./configuration/config.ts\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nclass Server {\r\n    //constructor\r\n    constructor(controllers) {\r\n        this.app = express();\r\n        this.port = process.env.PORT || 3000;\r\n        this.app.set('Secret', config_1.config.secret);\r\n        this.app.use(express.urlencoded({ extended: true }));\r\n        this.app.use(express.json()); //Used to parse JSON bodies\r\n        this.initializeControllers(controllers);\r\n    }\r\n    //private methods\r\n    initializeControllers(controllers) {\r\n        controllers.forEach((controller) => {\r\n            this.app.use('/', controller.router);\r\n        });\r\n    }\r\n    //methods\r\n    start() {\r\n        this.app.listen(this.port, () => {\r\n            console.log('Server started successfully on...' + this.port);\r\n        });\r\n    }\r\n    static getServerInstance(controllers) {\r\n        if (!Server.theInstance) {\r\n            Server.theInstance = new Server(controllers);\r\n        }\r\n        return Server.theInstance;\r\n    }\r\n}\r\nexports.Server = Server;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/controller/the_app.ts?");

/***/ }),

/***/ "./src/controller/validator.ts":
/*!*************************************!*\
  !*** ./src/controller/validator.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.validate_create_item = void 0;\r\nconst express_validator_1 = __webpack_require__(/*! express-validator */ \"express-validator\");\r\nexports.validate_create_item = [express_validator_1.body('item_name'), express_validator_1.body('item_color')];\r\n\n\n//# sourceURL=webpack:///./src/controller/validator.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst the_app_1 = __webpack_require__(/*! ./controller/the_app */ \"./src/controller/the_app.ts\");\r\nconst login_1 = __webpack_require__(/*! ./controller/login */ \"./src/controller/login.ts\");\r\nconst items_1 = __webpack_require__(/*! ./controller/items */ \"./src/controller/items.ts\");\r\nconst theApp = the_app_1.Server.getServerInstance([\r\n    new login_1.Login(),\r\n    new items_1.ItemData()\r\n]);\r\ntheApp.start();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/dbconnector.ts":
/*!**********************************!*\
  !*** ./src/model/dbconnector.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DBConnector = void 0;\r\nconst sqlite3 = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\r\nconst config_1 = __webpack_require__(/*! ../../configuration/config */ \"./configuration/config.ts\");\r\nclass DBConnector {\r\n    constructor() {\r\n        this.sqliteApp = sqlite3.verbose();\r\n    }\r\n    connectToDB(request, response) {\r\n        this.db = new this.sqliteApp.Database(config_1.config.dbPath, sqlite3.OPEN_READWRITE, (error) => {\r\n            if (error) {\r\n                console.log('fail to open db: ' + error);\r\n            }\r\n            else {\r\n                console.log(\"connected sucessfully...\" + config_1.config.dbPath);\r\n                let sql = `SELECT * FROM items`;\r\n                console.log('Calling for data');\r\n                this.db.all(sql, [], (err, rows) => {\r\n                    if (err) {\r\n                        console.log('inside error');\r\n                        throw err;\r\n                    }\r\n                    console.log('got result');\r\n                    console.log(rows);\r\n                    response.send(rows);\r\n                });\r\n            }\r\n        });\r\n    }\r\n    getDB() {\r\n        return this.db;\r\n    }\r\n    closeDB() {\r\n    }\r\n}\r\nexports.DBConnector = DBConnector;\r\n\n\n//# sourceURL=webpack:///./src/model/dbconnector.ts?");

/***/ }),

/***/ "./src/model/item.model.ts":
/*!*********************************!*\
  !*** ./src/model/item.model.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ItemModel = void 0;\r\nconst dbconnector_1 = __webpack_require__(/*! ./dbconnector */ \"./src/model/dbconnector.ts\");\r\nclass ItemModel extends dbconnector_1.DBConnector {\r\n    constructor() {\r\n        super();\r\n    }\r\n    getItems() {\r\n        let sql = `SELECT * FROM ITEMS`;\r\n        console.log('Calling for data');\r\n        this.getDB().each(sql, [], (err, row) => {\r\n            if (err) {\r\n                console.log('inside error');\r\n                throw err;\r\n            }\r\n            console.log('got result');\r\n            console.log(row);\r\n            return row;\r\n        });\r\n    }\r\n}\r\nexports.ItemModel = ItemModel;\r\n\n\n//# sourceURL=webpack:///./src/model/item.model.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sqlite3\");\n\n//# sourceURL=webpack:///external_%22sqlite3%22?");

/***/ })

/******/ });