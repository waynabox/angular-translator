!function(a){function b(a){Object.defineProperty(this,a,{enumerable:!0,get:function(){return this[o][a]}})}function c(a){var b;if(a&&a.__esModule){b={};for(var c in a)Object.hasOwnProperty.call(a,c)&&(b[c]=a[c]);b.__useDefault&&delete b.__useDefault,b.__esModule=!0}else{if("[object Module]"===Object.prototype.toString.call(a)||"undefined"!=typeof System&&System.isModule&&System.isModule(a))return a;b={default:a,__useDefault:!0}}return new d(b)}function d(a){Object.defineProperty(this,o,{value:a}),Object.keys(a).forEach(b,this)}function e(a){return"@node/"===a.substr(0,6)?m(a,c(p(a.substr(6))),{}):n[a]}function f(a){var b=e(a);if(!b)throw new Error('Module "'+a+'" expected, but not contained in build.');if(b.module)return b.module;var c=b.linkRecord;return g(b,c),l(b,c,[]),b.module}function g(a,b){if(!b.depLoads){b.declare&&h(a,b),b.depLoads=[];for(var c=0;c<b.deps.length;c++){var d=e(b.deps[c]);b.depLoads.push(d),d.linkRecord&&g(d,d.linkRecord);var f=b.setters&&b.setters[c];f&&(f(d.module||d.linkRecord.moduleObj),d.importerSetters.push(f))}return a}}function h(b,c){var d=c.moduleObj,e=b.importerSetters,f=!1,g=c.declare.call(a,function(a,b){if(!f){if("object"==typeof a)for(var c in a)"__useDefault"!==c&&(d[c]=a[c]);else d[a]=b;f=!0;for(var g=0;g<e.length;g++)e[g](d);return f=!1,b}},{id:b.key});"function"!=typeof g?(c.setters=g.setters,c.execute=g.execute):(c.setters=[],c.execute=g)}function i(a,b,c){return n[a]={key:a,module:void 0,importerSetters:[],linkRecord:{deps:b,depLoads:void 0,declare:c,setters:void 0,execute:void 0,moduleObj:{}}}}function j(a,b,c,d){return n[a]={key:a,module:void 0,importerSetters:[],linkRecord:{deps:b,depLoads:void 0,declare:void 0,execute:d,executingRequire:c,moduleObj:{default:{},__useDefault:!0},setters:void 0}}}function k(a,b,c){return function(d){for(var e=0;e<a.length;e++)if(a[e]===d){var f,g=b[e],h=g.linkRecord;return f=h?-1===c.indexOf(g)?l(g,h,c):h.moduleObj:g.module,f.__useDefault?f.default:f}}}function l(b,c,e){if(e.push(b),b.module)return b.module;if(c.setters){for(var f=0;f<c.deps.length;f++){var g=c.depLoads[f],h=g.linkRecord;h&&-1===e.indexOf(g)&&l(g,h,h.setters?e:[])}c.execute.call(q)}else{var i={id:b.key},j=c.moduleObj;Object.defineProperty(i,"exports",{configurable:!0,set:function(a){j.default=a},get:function(){return j.default}});var m=k(c.deps,c.depLoads,e);if(!c.executingRequire)for(var f=0;f<c.deps.length;f++)m(c.deps[f]);var n=c.execute.call(a,m,j.default,i);if(void 0!==n?j.default=n:i.exports!==j.default&&(j.default=i.exports),j.default&&j.default.__esModule)for(var o in j.default)Object.hasOwnProperty.call(j.default,o)&&"default"!==o&&(j[o]=j.default[o])}var i=b.module=new d(c.moduleObj);if(!c.setters)for(var f=0;f<b.importerSetters.length;f++)b.importerSetters[f](i);return i}function m(a,b){return n[a]={key:a,module:b,importerSetters:[],linkRecord:void 0}}var n={},o="undefined"!=typeof Symbol?Symbol():"@@baseObject";d.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(d.prototype[Symbol.toStringTag]="Module");var p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&void 0!==require.resolve&&"undefined"!=typeof process&&process.platform&&require,q={};return Object.freeze&&Object.freeze(q),function(a,b,e,g){return function(h){h(function(h){var k={_nodeRequire:p,register:i,registerDynamic:j,registry:{get:function(a){return n[a].module},set:m},newModule:function(a){return new d(a)}};m("@empty",new d({}));for(var l=0;l<b.length;l++)m(b[l],c(arguments[l],{}));g(k);var o=f(a[0]);if(a.length>1)for(var l=1;l<a.length;l++)f(a[l]);return e?o.default:(o instanceof d&&Object.defineProperty(o,"__esModule",{value:!0}),o)})}}}("undefined"!=typeof self?self:global)(["a"],["d","10","13","14"],!0,function($__System){var require=this.require,exports=this.exports,module=this.module;$__System.registerDynamic("b",["c","d"],!0,function(a,b,c){"use strict";var d=(this||self,b&&b.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}),e=b&&b.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},f=b&&b.__param||function(a,b){return function(c,d){b(c,d,a)}};Object.defineProperty(b,"__esModule",{value:!0});var g=a("c"),h=a("d"),i=function(){function a(a){var b=this;this.translation="",this._params={},this._translate=a,a.languageChanged.subscribe(function(){b._startTranslation()})}return Object.defineProperty(a.prototype,"key",{set:function(a){this._key=a,this._startTranslation()},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"params",{set:function(a){if("object"!=typeof a)return void this._translate.logHandler.error("Params have to be an object");this._params=a,this._startTranslation()},enumerable:!0,configurable:!0}),a.prototype._startTranslation=function(){var a=this;this._key&&this._translate.translate(this._key,this._params).then(function(b){return a.translation=String(b)})},a}();d([h.Input("translate"),e("design:type",String),e("design:paramtypes",[String])],i.prototype,"key",null),d([h.Input("translateParams"),e("design:type",Object),e("design:paramtypes",[Object])],i.prototype,"params",null),i=d([h.Component({selector:"[translate]",template:"{{translation}}"}),f(0,h.Inject(g.TranslateService)),e("design:paramtypes",[g.TranslateService])],i),b.TranslateComponent=i}),$__System.registerDynamic("e",["f","d","10"],!0,function(a,b,c){"use strict";var d=(this||self,b&&b.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}()),e=b&&b.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},f=b&&b.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},g=b&&b.__param||function(a,b){return function(c,d){b(c,d,a)}};Object.defineProperty(b,"__esModule",{value:!0});var h=a("f"),i=a("d"),j=a("10"),k=function(){function a(a,b){this.path="assets/i18n/",this.extension=".json",a&&(this.path=a.replace(/\/+$/,"")+"/"),b&&(this.extension=b)}return a}();b.TranslateLoaderJsonConfig=k;var l=function(a){function b(b,c){var d=a.call(this)||this;return d._http=b,d._config=c,d}return d(b,a),b.prototype.load=function(a){var b=this;return new Promise(function(c,d){var e=b._config.path+a+b._config.extension;b._http.get(e).subscribe(function(a){if(200===a.status){var e={};b.flattenTranslations(e,a.json()),c(e)}else d("StatusCode: "+a.status)},function(a){d(a.message)})})},b.prototype.flattenTranslations=function(a,b,c){void 0===c&&(c="");for(var d in b)Array.isArray(b[d])?a[c+d]=b[d].filter(function(a){return"string"==typeof a}).join(""):"object"==typeof b[d]?this.flattenTranslations(a,b[d],c+d+"."):"string"==typeof b[d]&&(a[c+d]=b[d])},b}(h.TranslateLoader);l=e([i.Injectable(),g(0,i.Inject(j.Http)),g(1,i.Inject(k)),f("design:paramtypes",[j.Http,k])],l),b.TranslateLoaderJson=l}),$__System.registerDynamic("11",["c","d"],!0,function($__require,exports,module){"use strict";var global=this||self,GLOBAL=global,__decorate=exports&&exports.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=exports&&exports.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__param=exports&&exports.__param||function(a,b){return function(c,d){b(c,d,a)}};Object.defineProperty(exports,"__esModule",{value:!0});var TranslateService_1=$__require("c"),core_1=$__require("d"),TranslatePipe=TranslatePipe_1=function(){function TranslatePipe(a){var b=this;this._translation="",this._translate=a,a.languageChanged.subscribe(function(){b._startTranslation()})}return TranslatePipe._parseParams=function(arg){try{var o=eval("("+arg+")");if("object"==typeof o)return o}catch(a){}return{}},TranslatePipe.prototype.transform=function(a,b){void 0===b&&(b=[]);var c={};return b[0]&&("string"==typeof b[0]?(c=TranslatePipe_1._parseParams(b[0]),Object.keys(c).length||this._translate.logHandler.error("'"+b[0]+"' could not be parsed to object")):"object"==typeof b[0]&&(c=b[0])),this._translated&&this._promise&&(this._translated.key!==a||JSON.stringify(this._translated.params)!==JSON.stringify(c))&&(this._promise=null),this._promise||(this._translated={key:a,params:c},this._startTranslation()),this._translation},TranslatePipe.prototype._startTranslation=function(){var a=this;this._translated&&this._translated.key&&(this._promise=this._translate.translate(this._translated.key,this._translated.params),this._promise.then(function(b){return a._translation=String(b)}))},TranslatePipe}();TranslatePipe=TranslatePipe_1=__decorate([core_1.Pipe({name:"translate",pure:!1}),__param(0,core_1.Inject(TranslateService_1.TranslateService)),__metadata("design:paramtypes",[TranslateService_1.TranslateService])],TranslatePipe),exports.TranslatePipe=TranslatePipe;var TranslatePipe_1}),$__System.registerDynamic("12",[],!0,function(a,b,c){"use strict";this||self;Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function a(b){var c=b.defaultLang,d=void 0===c?"en":c,e=b.providedLangs,f=void 0===e?["en"]:e,g=b.detectLanguageOnStart,h=void 0===g||g;this.defaultLang=f.indexOf(d)>-1?d:f[0],this.providedLangs=f,this.detectLanguageOnStart=h,this.navigatorLanguages=function(){var b=a.navigator;return b.languages instanceof Array?Array.prototype.slice.call(b.languages):[b.languages||b.language||b.browserLanguage||b.userLanguage].filter(function(a){return"string"==typeof a})}()}return a.prototype.langProvided=function(a,b){void 0===b&&(b=!1);var c,d=!1,e=function(a){var b=/^([A-Za-z]{2})(?:[\.\-_\/]?([A-Za-z]{2}))?$/;return a.match(b)?a.replace(b,function(a,b,c){return void 0===c&&(c=""),b=b.toLowerCase(),c=c.toUpperCase(),c?b+"-"+c:b}):""},f=this.providedLangs.map(e);return a=e(a),0===a.length?d:(c=f.indexOf(a),c>-1?d=this.providedLangs[c]:b||(a=a.substr(0,2),c=f.indexOf(a),c>-1?d=this.providedLangs[c]:(c=f.map(function(a){return a.substr(0,2)}).indexOf(a),c>-1&&(d=this.providedLangs[c]))),d)},a}();d.navigator=window&&window.navigator?window.navigator:{},b.TranslateConfig=d}),$__System.registerDynamic("f",[],!0,function(a,b,c){"use strict";this||self;Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function a(){}return a}();b.TranslateLoader=d}),$__System.registerDynamic("c",["12","f","d","13","14"],!0,function($__require,exports,module){"use strict";var global=this||self,GLOBAL=global,__decorate=exports&&exports.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=exports&&exports.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__param=exports&&exports.__param||function(a,b){return function(c,d){b(c,d,a)}};Object.defineProperty(exports,"__esModule",{value:!0});var TranslateConfig_1=$__require("12"),TranslateLoader_1=$__require("f"),core_1=$__require("d"),Observable_1=$__require("13");$__require("14"),exports.TranslateLogHandler={debug:function(){},error:function(a){return console&&console.error&&console.error(a)},info:function(){}};var TranslateService=function(){function TranslateService(a,b,c){var d=this;if(this._loadedLangs={},this._translations={},this._config=a,this._loader=b,this.logHandler=c,this._lang=a.defaultLang,a.detectLanguageOnStart){var e=this.detectLang(a.navigatorLanguages);e&&(this._lang=String(e),c.info("Language "+e+" got detected"))}this.languageChanged=new Observable_1.Observable(function(a){return d._languageChangedObserver=a}).share()}return Object.defineProperty(TranslateService.prototype,"lang",{get:function(){return this._lang},set:function(a){var b=this._config.langProvided(a,!0);if("string"==typeof b)return this._lang=b,this.logHandler.info("Language changed to "+b),void(this._languageChangedObserver&&this._languageChangedObserver.next(this._lang));throw new Error("Language not provided")},enumerable:!0,configurable:!0}),TranslateService.prototype.detectLang=function(a){var b,c=!1;for(b=0;b<a.length&&!(c=this._config.langProvided(a[b],!0));b++);if(!c)for(b=0;b<a.length&&!(c=this._config.langProvided(a[b]));b++);return c},TranslateService.prototype.waitForTranslation=function(a){void 0===a&&(a=this._lang);var b=this._config.langProvided(a,!0);return b?(a=String(b),this._loadLang(a)):Promise.reject("Language not provided")},TranslateService.prototype.translate=function(a,b,c){var d=this;return void 0===b&&(b={}),void 0===c&&(c=this._lang),new Promise(function(e){if(c!==d._lang){var f=d._config.langProvided(c,!0);if(!f)return void e(a);c=String(f)}d._loadLang(c).then(function(){e(d.instant(a,b,c))},function(){e(a)})})},TranslateService.prototype.instant=function(a,b,c){var d=this;if(void 0===b&&(b={}),void 0===c&&(c=this._lang),"string"==typeof a)return this.instant([a],b,c)[0];if(c!==this._lang){var e=this._config.langProvided(c,!0);e&&(c=String(e))}for(var f,g=[],h=a.length;h--;)this._translations[c]&&this._translations[c][a[h]]?(f=this._translations[c][a[h]],f=f.replace(/\[\[([\sA-Za-z0-9_.,=:-]*)]]/g,function(a,e){return d._translateReferenced(a,e,b,c)}),f=f.replace(/{{\s*(.*?)\s*}}/g,function(a,c){try{return d._parse(c,b)||""}catch(b){return b&&b.message&&b.message.indexOf("is not defined")===-1&&d.logHandler.error("Parsing error for expression '"+a+"'"),""}}),g.unshift(f)):(this.logHandler.info("Translation for '"+a[h]+"' in language "+c+" not found"),g.unshift(a[h]));return g},TranslateService.prototype._loadLang=function(a){var b=this;return this._loadedLangs[a]||(this._loadedLangs[a]=new Promise(function(c,d){b._loader.load(a).then(function(d){b._translations[a]=d,b.logHandler.info("Language "+a+" got loaded"),c()},function(c){b.logHandler.error("Language "+a+" could not be loaded ("+c+")"),d(c)})})),this._loadedLangs[a]},TranslateService.prototype._parse=function(expression,__context){var func=[],varName;if(func.push("(function() {"),Array.isArray(__context))this.logHandler.error("Parameters can not be an array.");else for(varName in __context)__context.hasOwnProperty(varName)&&("__context"!==varName&&varName.match(/[a-zA-Z_][a-zA-Z0-9_]*/)?func.push("try { var "+varName+" = __context['"+varName+"']; } catch(e) {}"):this.logHandler.error("Parameter '"+varName+"' is not allowed."));return func.push("return ("+expression+"); })()"),eval(func.join("\n"))},TranslateService.prototype._referencedError=function(a,b,c,d){var e="Parse error unexpected "+b;return void 0!==d&&(e+=" at pos "+(d+3)),c&&(e+=" expected "+c),this.logHandler.error(e+" in '"+a+"'"),""},TranslateService.prototype._getParam=function(a,b){var c=b.indexOf(".");if(c===-1)return a.hasOwnProperty(b)?a[b]:void 0;var d=b.substr(0,c);return a.hasOwnProperty(d)&&"object"==typeof a[d]?this._getParam(a[d],b.substr(c+1)):void 0},TranslateService.prototype._translateReferenced=function(a,b,c,d){var e,f,g,h,i=this,j="wait_key",k={},l=function(b){void 0===b&&(b=!0),b&&!g?"object"!=typeof i._getParam(c,h)?i.logHandler.error("Only objects can be passed as params in '"+a+"'"):k=i._getParam(c,h):k[g]=b?i._getParam(c,h):i._getParam(c,g)};for(e=0;e<b.length;e++)switch(j){case"wait_key":if(b[e].match(/\s/));else{if(!b[e].match(/[A-Za-z0-9_.-]/))return this._referencedError(a,"character","key",e);j="read_key",f=b[e]}break;case"read_key":if(b[e].match(/[A-Za-z0-9_.-]/))f+=b[e];else if(":"===b[e])j="wait_param";else{if(!b[e].match(/\s/))return this._referencedError(a,"character","colon or end",e);j="key_readed"}break;case"key_readed":if(b[e].match(/\s/));else{if(":"!==b[e])return this._referencedError(a,"character","colon or end",e);j="wait_param"}break;case"wait_param":if(b[e].match(/\s/));else if(b[e].match(/[A-Za-z0-9_]/))j="read_param_key",g=b[e];else{if("="!==b[e])return this._referencedError(a,"character","parameter",e);if(Object.keys(k).length>0)return this.logHandler.error("Parse error only first parameter can be passed as params in '"+a+"'"),"";j="wait_getter"}break;case"read_param_key":if(b[e].match(/[A-Za-z0-9_]/))g+=b[e];else if("="===b[e])j="wait_getter";else if(","===b[e])l(!1),j="wait_param";else{if(!b[e].match(/\s/))return this._referencedError(a,"character","comma, equal sign or end",e);j="param_key_readed"}break;case"param_key_readed":if(b[e].match(/\s/));else if("="===b[e])j="wait_getter";else{if(","!==b[e])return this._referencedError(a,"character","comma, equal sign or end",e);l(!1),j="wait_param"}break;case"wait_getter":if(b[e].match(/\s/));else{if(!b[e].match(/[A-Za-z0-9_]/))return this._referencedError(a,"character","getter",e);j="read_getter",h=b[e]}break;case"read_getter":if(b[e].match(/[A-Za-z0-9_.]/))h+=b[e];else if(b[e].match(/\s/))j="getter_readed";else{if(","!==b[e])return this._referencedError(a,"character","comma or end",e);l(),j="wait_param"}break;case"getter_readed":if(b[e].match(/\s/));else{if(","!==b[e])return this._referencedError(a,"character","comma or end",e);l(),j="wait_param"}}switch(j){case"param_key_readed":case"read_param_key":l(!1);break;case"getter_readed":case"read_getter":l();break;case"wait_key":return this._referencedError(a,"end","key");case"wait_param":return this._referencedError(a,"end","parameter");case"wait_getter":return this._referencedError(a,"end","getter")}return String(this.instant(f,k,d))},TranslateService}();TranslateService=__decorate([core_1.Injectable(),__param(0,core_1.Inject(TranslateConfig_1.TranslateConfig)),__param(1,core_1.Inject(TranslateLoader_1.TranslateLoader)),__param(2,core_1.Inject(exports.TranslateLogHandler)),__metadata("design:paramtypes",[TranslateConfig_1.TranslateConfig,TranslateLoader_1.TranslateLoader,Object])],TranslateService),exports.TranslateService=TranslateService}),$__System.registerDynamic("15",["b","12","f","e","11","c","d","10"],!0,function(a,b,c){"use strict";var d=(this||self,b&&b.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g});Object.defineProperty(b,"__esModule",{value:!0});var e=a("b"),f=a("12"),g=a("f"),h=a("e"),i=a("11"),j=a("c"),k=a("d"),l=a("10"),m=function(){function a(){}return a}();m=d([k.NgModule({declarations:[i.TranslatePipe,e.TranslateComponent],exports:[i.TranslatePipe,e.TranslateComponent],imports:[l.HttpModule],providers:[{provide:f.TranslateConfig,useValue:new f.TranslateConfig({})},{provide:h.TranslateLoaderJsonConfig,useValue:new h.TranslateLoaderJsonConfig},{provide:g.TranslateLoader,useClass:h.TranslateLoaderJson},{provide:j.TranslateLogHandler,useValue:j.TranslateLogHandler},j.TranslateService]})],m),b.TranslatorModule=m,b.TRANSLATE_PROVIDERS=[{provide:f.TranslateConfig,useValue:new f.TranslateConfig({})},{provide:h.TranslateLoaderJsonConfig,useValue:new h.TranslateLoaderJsonConfig},{provide:g.TranslateLoader,useClass:h.TranslateLoaderJson},{provide:j.TranslateLogHandler,useValue:j.TranslateLogHandler},j.TranslateService]}),$__System.registerDynamic("a",["c","11","b","12","f","e","15"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}this||self;Object.defineProperty(b,"__esModule",{value:!0}),d(a("c")),d(a("11")),d(a("b")),d(a("12")),d(a("f")),d(a("e")),d(a("15"))})})(function(a){if("function"==typeof define&&define.amd)define(["@angular/core","@angular/http","rxjs/Observable","rxjs/add/operator/share"],a);else{if("object"!=typeof module||!module.exports||"function"!=typeof require)throw new Error("Module must be loaded as AMD or CommonJS");module.exports=a(require("@angular/core"),require("@angular/http"),require("rxjs/Observable"),require("rxjs/add/operator/share"))}});
//# sourceMappingURL=angular2-translator.js.map