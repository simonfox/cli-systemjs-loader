'use strict';

System.register('node_modules/aurelia-polyfills/dist/system/aurelia-polyfills.js', ['aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM, _typeof;

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      if (typeof FEATURE_NO_ES2015 === 'undefined') {

        (function (Object, GOPS) {
          'use strict';

          if (GOPS in Object) return;

          var setDescriptor,
              G = PLATFORM.global,
              id = 0,
              random = '' + Math.random(),
              prefix = '__\x01symbol:',
              prefixLength = prefix.length,
              internalSymbol = '__\x01symbol@@' + random,
              DP = 'defineProperty',
              DPies = 'defineProperties',
              GOPN = 'getOwnPropertyNames',
              GOPD = 'getOwnPropertyDescriptor',
              PIE = 'propertyIsEnumerable',
              gOPN = Object[GOPN],
              gOPD = Object[GOPD],
              create = Object.create,
              keys = Object.keys,
              defineProperty = Object[DP],
              $defineProperties = Object[DPies],
              descriptor = gOPD(Object, GOPN),
              ObjectProto = Object.prototype,
              hOP = ObjectProto.hasOwnProperty,
              pIE = ObjectProto[PIE],
              toString = ObjectProto.toString,
              indexOf = Array.prototype.indexOf || function (v) {
            for (var i = this.length; i-- && this[i] !== v;) {}
            return i;
          },
              addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
            if (!hOP.call(o, internalSymbol)) {
              defineProperty(o, internalSymbol, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: {}
              });
            }
            o[internalSymbol]['@@' + uid] = enumerable;
          },
              createWithSymbols = function createWithSymbols(proto, descriptors) {
            var self = create(proto);
            if (descriptors !== null && (typeof descriptors === 'undefined' ? 'undefined' : _typeof(descriptors)) === 'object') {
              gOPN(descriptors).forEach(function (key) {
                if (propertyIsEnumerable.call(descriptors, key)) {
                  $defineProperty(self, key, descriptors[key]);
                }
              });
            }
            return self;
          },
              copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
            var newDescriptor = create(descriptor);
            newDescriptor.enumerable = false;
            return newDescriptor;
          },
              get = function get() {},
              onlyNonSymbols = function onlyNonSymbols(name) {
            return name != internalSymbol && !hOP.call(source, name);
          },
              onlySymbols = function onlySymbols(name) {
            return name != internalSymbol && hOP.call(source, name);
          },
              propertyIsEnumerable = function propertyIsEnumerable(key) {
            var uid = '' + key;
            return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
          },
              setAndGetSymbol = function setAndGetSymbol(uid) {
            var descriptor = {
              enumerable: false,
              configurable: true,
              get: get,
              set: function set(value) {
                setDescriptor(this, uid, {
                  enumerable: false,
                  configurable: true,
                  writable: true,
                  value: value
                });
                addInternalIfNeeded(this, uid, true);
              }
            };
            defineProperty(ObjectProto, uid, descriptor);
            return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
          },
              _Symbol = function _Symbol2(description) {
            if (this && this !== G) {
              throw new TypeError('Symbol is not a constructor');
            }
            return setAndGetSymbol(prefix.concat(description || '', random, ++id));
          },
              source = create(null),
              sourceConstructor = { value: _Symbol },
              sourceMap = function sourceMap(uid) {
            return source[uid];
          },
              $defineProperty = function defineProp(o, key, descriptor) {
            var uid = '' + key;
            if (onlySymbols(uid)) {
              setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
              addInternalIfNeeded(o, uid, !!descriptor.enumerable);
            } else {
              defineProperty(o, key, descriptor);
            }
            return o;
          },
              $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
            var cof = toString.call(o);
            o = cof === '[object String]' ? o.split('') : Object(o);
            return gOPN(o).filter(onlySymbols).map(sourceMap);
          };

          descriptor.value = $defineProperty;
          defineProperty(Object, DP, descriptor);

          descriptor.value = $getOwnPropertySymbols;
          defineProperty(Object, GOPS, descriptor);

          descriptor.value = function getOwnPropertyNames(o) {
            return gOPN(o).filter(onlyNonSymbols);
          };
          defineProperty(Object, GOPN, descriptor);

          descriptor.value = function defineProperties(o, descriptors) {
            var symbols = $getOwnPropertySymbols(descriptors);
            if (symbols.length) {
              keys(descriptors).concat(symbols).forEach(function (uid) {
                if (propertyIsEnumerable.call(descriptors, uid)) {
                  $defineProperty(o, uid, descriptors[uid]);
                }
              });
            } else {
              $defineProperties(o, descriptors);
            }
            return o;
          };
          defineProperty(Object, DPies, descriptor);

          descriptor.value = propertyIsEnumerable;
          defineProperty(ObjectProto, PIE, descriptor);

          descriptor.value = _Symbol;
          defineProperty(G, 'Symbol', descriptor);

          descriptor.value = function (key) {
            var uid = prefix.concat(prefix, key, random);
            return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
          };
          defineProperty(_Symbol, 'for', descriptor);

          descriptor.value = function (symbol) {
            return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
          };
          defineProperty(_Symbol, 'keyFor', descriptor);

          descriptor.value = function getOwnPropertyDescriptor(o, key) {
            var descriptor = gOPD(o, key);
            if (descriptor && onlySymbols(key)) {
              descriptor.enumerable = propertyIsEnumerable.call(o, key);
            }
            return descriptor;
          };
          defineProperty(Object, GOPD, descriptor);

          descriptor.value = function (proto, descriptors) {
            return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
          };
          defineProperty(Object, 'create', descriptor);

          descriptor.value = function () {
            var str = toString.call(this);
            return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
          };
          defineProperty(ObjectProto, 'toString', descriptor);

          try {
            setDescriptor = create(defineProperty({}, prefix, {
              get: function get() {
                return defineProperty(this, prefix, { value: false })[prefix];
              }
            }))[prefix] || defineProperty;
          } catch (o_O) {
            setDescriptor = function setDescriptor(o, key, descriptor) {
              var protoDescriptor = gOPD(ObjectProto, key);
              delete ObjectProto[key];
              defineProperty(o, key, descriptor);
              defineProperty(ObjectProto, key, protoDescriptor);
            };
          }
        })(Object, 'getOwnPropertySymbols');

        (function (O, S) {
          var dP = O.defineProperty,
              ObjectProto = O.prototype,
              toString = ObjectProto.toString,
              toStringTag = 'toStringTag',
              descriptor;
          ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
            if (!(name in Symbol)) {
              dP(Symbol, name, { value: Symbol(name) });
              switch (name) {
                case toStringTag:
                  descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
                  descriptor.value = function () {
                    var str = toString.call(this),
                        tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
                    return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
                  };
                  dP(ObjectProto, 'toString', descriptor);
                  break;
              }
            }
          });
        })(Object, Symbol);

        (function (Si, AP, SP) {

          function returnThis() {
            return this;
          }

          if (!AP[Si]) AP[Si] = function () {
            var i = 0,
                self = this,
                iterator = {
              next: function next() {
                var done = self.length <= i;
                return done ? { done: done } : { done: done, value: self[i++] };
              }
            };
            iterator[Si] = returnThis;
            return iterator;
          };

          if (!SP[Si]) SP[Si] = function () {
            var fromCodePoint = String.fromCodePoint,
                self = this,
                i = 0,
                length = self.length,
                iterator = {
              next: function next() {
                var done = length <= i,
                    c = done ? '' : fromCodePoint(self.codePointAt(i));
                i += c.length;
                return done ? { done: done } : { done: done, value: c };
              }
            };
            iterator[Si] = returnThis;
            return iterator;
          };
        })(Symbol.iterator, Array.prototype, String.prototype);
      }

      if (typeof FEATURE_NO_ES2015 === 'undefined') {

        Number.isNaN = Number.isNaN || function (value) {
          return value !== value;
        };

        Number.isFinite = Number.isFinite || function (value) {
          return typeof value === "number" && isFinite(value);
        };
      }

      if (!String.prototype.endsWith || function () {
        try {
          return !"ab".endsWith("a", 1);
        } catch (e) {
          return true;
        }
      }()) {
        String.prototype.endsWith = function (searchString, position) {
          var subjectString = this.toString();
          if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
          }
          position -= searchString.length;
          var lastIndex = subjectString.indexOf(searchString, position);
          return lastIndex !== -1 && lastIndex === position;
        };
      }

      if (!String.prototype.startsWith || function () {
        try {
          return !"ab".startsWith("b", 1);
        } catch (e) {
          return true;
        }
      }()) {
        String.prototype.startsWith = function (searchString, position) {
          position = position || 0;
          return this.substr(position, searchString.length) === searchString;
        };
      }

      if (typeof FEATURE_NO_ES2015 === 'undefined') {

        if (!Array.from) {
          Array.from = function () {
            var toInteger = function toInteger(it) {
              return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
            };
            var toLength = function toLength(it) {
              return it > 0 ? Math.min(toInteger(it), 0x1fffffffffffff) : 0;
            };
            var iterCall = function iterCall(iter, fn, val, index) {
              try {
                return fn(val, index);
              } catch (E) {
                if (typeof iter.return == 'function') iter.return();
                throw E;
              }
            };

            return function from(arrayLike) {
              var O = Object(arrayLike),
                  C = typeof this == 'function' ? this : Array,
                  aLen = arguments.length,
                  mapfn = aLen > 1 ? arguments[1] : undefined,
                  mapping = mapfn !== undefined,
                  index = 0,
                  iterFn = O[Symbol.iterator],
                  length,
                  result,
                  step,
                  iterator;
              if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
              if (iterFn != undefined && !Array.isArray(arrayLike)) {
                for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                  result[index] = mapping ? iterCall(iterator, mapfn, step.value, index) : step.value;
                }
              } else {
                length = toLength(O.length);
                for (result = new C(length); length > index; index++) {
                  result[index] = mapping ? mapfn(O[index], index) : O[index];
                }
              }
              result.length = index;
              return result;
            };
          }();
        }

        if (!Array.prototype.find) {
          Object.defineProperty(Array.prototype, 'find', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: function value(predicate) {
              if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
              }
              if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
              }
              var list = Object(this);
              var length = list.length >>> 0;
              var thisArg = arguments[1];
              var value;

              for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                  return value;
                }
              }
              return undefined;
            }
          });
        }

        if (!Array.prototype.findIndex) {
          Object.defineProperty(Array.prototype, 'findIndex', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: function value(predicate) {
              if (this === null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
              }
              if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
              }
              var list = Object(this);
              var length = list.length >>> 0;
              var thisArg = arguments[1];
              var value;

              for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                  return i;
                }
              }
              return -1;
            }
          });
        }
      }

      if (typeof FEATURE_NO_ES2016 === 'undefined' && !Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
          configurable: true,
          writable: true,
          enumerable: false,
          value: function value(searchElement) {
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (len === 0) {
              return false;
            }
            var n = parseInt(arguments[1]) || 0;
            var k;
            if (n >= 0) {
              k = n;
            } else {
              k = len + n;
              if (k < 0) {
                k = 0;
              }
            }
            var currentElement;
            while (k < len) {
              currentElement = O[k];
              if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
                return true;
              }
              k++;
            }
            return false;
          }
        });
      }

      if (typeof FEATURE_NO_ES2015 === 'undefined') {

        (function () {
          var needsFix = false;

          try {
            var s = Object.keys('a');
            needsFix = s.length !== 1 || s[0] !== '0';
          } catch (e) {
            needsFix = true;
          }

          if (needsFix) {
            Object.keys = function () {
              var hasOwnProperty = Object.prototype.hasOwnProperty,
                  hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
                  dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
                  dontEnumsLength = dontEnums.length;

              return function (obj) {
                if (obj === undefined || obj === null) {
                  throw TypeError('Cannot convert undefined or null to object');
                }

                obj = Object(obj);

                var result = [],
                    prop,
                    i;

                for (prop in obj) {
                  if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                  }
                }

                if (hasDontEnumBug) {
                  for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                      result.push(dontEnums[i]);
                    }
                  }
                }

                return result;
              };
            }();
          }
        })();

        (function (O) {
          if ('assign' in O) {
            return;
          }

          O.defineProperty(O, 'assign', {
            configurable: true,
            writable: true,
            value: function () {
              var gOPS = O.getOwnPropertySymbols,
                  pIE = O.propertyIsEnumerable,
                  filterOS = gOPS ? function (self) {
                return gOPS(self).filter(pIE, self);
              } : function () {
                return Array.prototype;
              };

              return function assign(where) {
                if (gOPS && !(where instanceof O)) {
                  console.warn('problematic Symbols', where);
                }

                function set(keyOrSymbol) {
                  where[keyOrSymbol] = arg[keyOrSymbol];
                }

                for (var i = 1, ii = arguments.length; i < ii; ++i) {
                  var arg = arguments[i];

                  if (arg === null || arg === undefined) {
                    continue;
                  }

                  O.keys(arg).concat(filterOS(arg)).forEach(set);
                }

                return where;
              };
            }()
          });
        })(Object);
      }

      if (typeof FEATURE_NO_ES2015 === 'undefined') {

        (function (global) {
          var i;

          var defineProperty = Object.defineProperty,
              is = function is(a, b) {
            return a === b || a !== a && b !== b;
          };

          if (typeof WeakMap == 'undefined') {
            global.WeakMap = createCollection({
              'delete': sharedDelete,

              clear: sharedClear,

              get: sharedGet,

              has: mapHas,

              set: sharedSet
            }, true);
          }

          if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
            var _createCollection;

            global.Map = createCollection((_createCollection = {
              'delete': sharedDelete,

              has: mapHas,

              get: sharedGet,

              set: sharedSet,

              keys: sharedKeys,

              values: sharedValues,

              entries: mapEntries,

              forEach: sharedForEach,

              clear: sharedClear
            }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
          }

          if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
            var _createCollection2;

            global.Set = createCollection((_createCollection2 = {
              has: setHas,

              add: sharedAdd,

              'delete': sharedDelete,

              clear: sharedClear,

              keys: sharedValues,
              values: sharedValues,

              entries: setEntries,

              forEach: sharedForEach
            }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
          }

          if (typeof WeakSet == 'undefined') {
            global.WeakSet = createCollection({
              'delete': sharedDelete,

              add: sharedAdd,

              clear: sharedClear,

              has: setHas
            }, true);
          }

          function createCollection(proto, objectOnly) {
            function Collection(a) {
              if (!this || this.constructor !== Collection) return new Collection(a);
              this._keys = [];
              this._values = [];
              this._itp = [];
              this.objectOnly = objectOnly;

              if (a) init.call(this, a);
            }

            if (!objectOnly) {
              defineProperty(proto, 'size', {
                get: sharedSize
              });
            }

            proto.constructor = Collection;
            Collection.prototype = proto;

            return Collection;
          }

          function init(a) {
            var i;

            if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
              this.set(a[0], a[1]);
            }, this);
          }

          function sharedDelete(key) {
            if (this.has(key)) {
              this._keys.splice(i, 1);
              this._values.splice(i, 1);

              this._itp.forEach(function (p) {
                if (i < p[0]) p[0]--;
              });
            }

            return -1 < i;
          };

          function sharedGet(key) {
            return this.has(key) ? this._values[i] : undefined;
          }

          function has(list, key) {
            if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

            if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
            return -1 < i;
          }

          function setHas(value) {
            return has.call(this, this._values, value);
          }

          function mapHas(value) {
            return has.call(this, this._keys, value);
          }

          function sharedSet(key, value) {
            this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
            return this;
          }

          function sharedAdd(value) {
            if (!this.has(value)) this._values.push(value);
            return this;
          }

          function sharedClear() {
            (this._keys || 0).length = this._values.length = 0;
          }

          function sharedKeys() {
            return sharedIterator(this._itp, this._keys);
          }

          function sharedValues() {
            return sharedIterator(this._itp, this._values);
          }

          function mapEntries() {
            return sharedIterator(this._itp, this._keys, this._values);
          }

          function setEntries() {
            return sharedIterator(this._itp, this._values, this._values);
          }

          function sharedIterator(itp, array, array2) {
            var _ref;

            var p = [0],
                done = false;
            itp.push(p);
            return _ref = {}, _ref[Symbol.iterator] = function () {
              return this;
            }, _ref.next = function next() {
              var v,
                  k = p[0];
              if (!done && k < array.length) {
                v = array2 ? [array[k], array2[k]] : array[k];
                p[0]++;
              } else {
                done = true;
                itp.splice(itp.indexOf(p), 1);
              }
              return { done: done, value: v };
            }, _ref;
          }

          function sharedSize() {
            return this._values.length;
          }

          function sharedForEach(callback, context) {
            var it = this.entries();
            for (;;) {
              var r = it.next();
              if (r.done) break;
              callback.call(context, r.value[1], r.value[0], this);
            }
          }
        })(PLATFORM.global);
      }

      if (typeof FEATURE_NO_ES2015 === 'undefined') {
        (function () {

          var bind = Function.prototype.bind;

          if (typeof PLATFORM.global.Reflect === 'undefined') {
            PLATFORM.global.Reflect = {};
          }

          if (typeof Reflect.defineProperty !== 'function') {
            Reflect.defineProperty = function (target, propertyKey, descriptor) {
              if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target === null : typeof target !== 'function') {
                throw new TypeError('Reflect.defineProperty called on non-object');
              }
              try {
                Object.defineProperty(target, propertyKey, descriptor);
                return true;
              } catch (e) {
                return false;
              }
            };
          }

          if (typeof Reflect.construct !== 'function') {
            Reflect.construct = function (Target, args) {
              if (args) {
                switch (args.length) {
                  case 0:
                    return new Target();
                  case 1:
                    return new Target(args[0]);
                  case 2:
                    return new Target(args[0], args[1]);
                  case 3:
                    return new Target(args[0], args[1], args[2]);
                  case 4:
                    return new Target(args[0], args[1], args[2], args[3]);
                }
              }

              var a = [null];
              a.push.apply(a, args);
              return new (bind.apply(Target, a))();
            };
          }

          if (typeof Reflect.ownKeys !== 'function') {
            Reflect.ownKeys = function (o) {
              return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
            };
          }
        })();
      }

      if (typeof FEATURE_NO_ESNEXT === 'undefined') {
        (function () {

          var emptyMetadata = Object.freeze({});
          var metadataContainerKey = '__metadata__';

          if (typeof Reflect.getOwnMetadata !== 'function') {
            Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
              if (target.hasOwnProperty(metadataContainerKey)) {
                return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
              }
            };
          }

          if (typeof Reflect.defineMetadata !== 'function') {
            Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
              var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
              var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
              targetContainer[metadataKey] = metadataValue;
            };
          }

          if (typeof Reflect.metadata !== 'function') {
            Reflect.metadata = function (metadataKey, metadataValue) {
              return function (target, targetKey) {
                Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
              };
            };
          }
        })();
      }
    }
  };
});
'use strict';

System.register('node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper.js', ['aurelia-polyfills', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM, isInitialized, bootstrapPromises, startResolve, startPromise, host, isNodeLike, starting;

  function ready() {
    if (!host.document || host.document.readyState === 'complete') {
      return Promise.resolve();
    }

    return new Promise(function (resolve) {
      host.document.addEventListener('DOMContentLoaded', completed);
      host.addEventListener('load', completed);

      function completed() {
        host.document.removeEventListener('DOMContentLoaded', completed);
        host.removeEventListener('load', completed);
        resolve();
      }
    });
  }

  function createLoader() {
    if (PLATFORM.Loader) {
      return Promise.resolve(new PLATFORM.Loader());
    }

    if (typeof AURELIA_WEBPACK_2_0 === 'undefined') {
      if (typeof __webpack_require__ !== 'undefined') {
        var m = __webpack_require__(require.resolve('aurelia-loader-webpack'));
        return Promise.resolve(new m.WebpackLoader());
      }

      if (host.System && typeof host.System.config === 'function') {
        return host.System.normalize('aurelia-bootstrapper').then(function (bsn) {
          return host.System.normalize('aurelia-loader-default', bsn);
        }).then(function (loaderName) {
          return host.System.import(loaderName).then(function (m) {
            return new m.DefaultLoader();
          });
        });
      }

      if (typeof host.require === 'function' && typeof host.require.version === 'string') {
        return new Promise(function (resolve, reject) {
          return host.require(['aurelia-loader-default'], function (m) {
            return resolve(new m.DefaultLoader());
          }, reject);
        });
      }

      if (isNodeLike && typeof module !== 'undefined' && typeof module.require !== 'undefined') {
        var _m = module.require('aurelia-loader-nodejs');
        return Promise.resolve(new _m.NodeJsLoader());
      }
    }

    return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
  }

  function initializePal(loader) {
    var type = void 0;

    var isRenderer = isNodeLike && (process.type === 'renderer' || process.versions['node-webkit']);

    if (isNodeLike && !isRenderer) {
      type = 'nodejs';
    } else if (typeof window !== 'undefined') {
      type = 'browser';
    } else if (typeof self !== 'undefined') {
      type = 'worker';
    } else {
      throw new Error('Could not determine platform implementation to load.');
    }

    return loader.loadModule('aurelia-pal-' + type).then(function (palModule) {
      return type === 'nodejs' && !isInitialized && palModule.globalize() || palModule.initialize();
    });
  }

  function preparePlatform(loader) {
    var map = function map(moduleId, relativeTo) {
      return loader.normalize(moduleId, relativeTo).then(function (normalized) {
        loader.map(moduleId, normalized);
        return normalized;
      });
    };

    return initializePal(loader).then(function () {
      return loader.normalize('aurelia-bootstrapper');
    }).then(function (bootstrapperName) {
      var frameworkPromise = map(PLATFORM.moduleName('aurelia-framework', { exports: ['Aurelia'] }), bootstrapperName);

      return Promise.all([frameworkPromise, frameworkPromise.then(function (frameworkName) {
        return map('aurelia-dependency-injection', frameworkName);
      }), map('aurelia-router', bootstrapperName), map('aurelia-logging-console', bootstrapperName)]);
    }).then(function (_ref) {
      var frameworkName = _ref[0];
      return loader.loadModule(frameworkName);
    }).then(function (fx) {
      return startResolve(function () {
        return new fx.Aurelia(loader);
      });
    });
  }

  function config(appHost, configModuleId, aurelia) {
    aurelia.host = appHost;
    aurelia.configModuleId = configModuleId || null;

    if (configModuleId) {
      return aurelia.loader.loadModule(configModuleId).then(function (customConfig) {
        if (!customConfig.configure) {
          throw new Error('Cannot initialize module \'' + configModuleId + '\' without a configure function.');
        }

        return customConfig.configure(aurelia);
      });
    }

    aurelia.use.standardConfiguration().developmentLogging();

    return aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  function run() {
    return ready().then(createLoader).then(preparePlatform).then(function () {
      var appHosts = host.document.querySelectorAll('[aurelia-app],[data-aurelia-app]');
      for (var i = 0, ii = appHosts.length; i < ii; ++i) {
        var appHost = appHosts[i];
        var moduleId = appHost.getAttribute('aurelia-app') || appHost.getAttribute('data-aurelia-app');
        bootstrap(config.bind(null, appHost, moduleId));
      }

      var toConsole = console.error.bind(console);
      var bootstraps = bootstrapPromises.map(function (p) {
        return p.catch(toConsole);
      });
      bootstrapPromises = null;
      return Promise.all(bootstraps);
    });
  }

  function bootstrap(configure) {
    var p = startPromise.then(function (factory) {
      return configure(factory());
    });
    if (bootstrapPromises) bootstrapPromises.push(p);
    return p;
  }

  _export('bootstrap', bootstrap);

  return {
    setters: [function (_aureliaPolyfills) {}, function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
      isInitialized = _aureliaPal.isInitialized;
    }],
    execute: function () {
      bootstrapPromises = [];
      startResolve = void 0;
      startPromise = new Promise(function (resolve) {
        return startResolve = resolve;
      });
      host = PLATFORM.global;
      isNodeLike = typeof process !== 'undefined' && !process.browser;

      _export('starting', starting = run());

      _export('starting', starting);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-history-browser/dist/system/aurelia-history-browser.js', ['aurelia-pal', 'aurelia-history'], function (_export, _context) {
  "use strict";

  var DOM, PLATFORM, History, _class, _temp, LinkHandler, DefaultLinkHandler, BrowserHistory, routeStripper, rootStripper, trailingSlash, absoluteUrl;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function configure(config) {
    config.singleton(History, BrowserHistory);
    config.transient(LinkHandler, DefaultLinkHandler);
  }

  _export('configure', configure);

  function updateHash(location, fragment, replace) {
    if (replace) {
      var _href = location.href.replace(/(javascript:|#).*$/, '');
      location.replace(_href + '#' + fragment);
    } else {
      location.hash = '#' + fragment;
    }
  }

  function createOrigin(protocol, hostname, port) {
    return protocol + '//' + hostname + (port ? ':' + port : '');
  }
  return {
    setters: [function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaHistory) {
      History = _aureliaHistory.History;
    }],
    execute: function () {
      _export('LinkHandler', LinkHandler = function () {
        function LinkHandler() {}

        LinkHandler.prototype.activate = function activate(history) {};

        LinkHandler.prototype.deactivate = function deactivate() {};

        return LinkHandler;
      }());

      _export('LinkHandler', LinkHandler);

      _export('DefaultLinkHandler', DefaultLinkHandler = function (_LinkHandler) {
        _inherits(DefaultLinkHandler, _LinkHandler);

        function DefaultLinkHandler() {

          var _this = _possibleConstructorReturn(this, _LinkHandler.call(this));

          _this.handler = function (e) {
            var _DefaultLinkHandler$g = DefaultLinkHandler.getEventInfo(e);

            var shouldHandleEvent = _DefaultLinkHandler$g.shouldHandleEvent;
            var href = _DefaultLinkHandler$g.href;

            if (shouldHandleEvent) {
              e.preventDefault();
              _this.history.navigate(href);
            }
          };
          return _this;
        }

        DefaultLinkHandler.prototype.activate = function activate(history) {
          if (history._hasPushState) {
            this.history = history;
            DOM.addEventListener('click', this.handler, true);
          }
        };

        DefaultLinkHandler.prototype.deactivate = function deactivate() {
          DOM.removeEventListener('click', this.handler);
        };

        DefaultLinkHandler.getEventInfo = function getEventInfo(event) {
          var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
          };

          var target = DefaultLinkHandler.findClosestAnchor(event.target);
          if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
          }

          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
            return info;
          }

          var href = target.getAttribute('href');
          info.anchor = target;
          info.href = href;

          var leftButtonClicked = event.which === 1;
          var isRelative = href && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href));

          info.shouldHandleEvent = leftButtonClicked && isRelative;
          return info;
        };

        DefaultLinkHandler.findClosestAnchor = function findClosestAnchor(el) {
          while (el) {
            if (el.tagName === 'A') {
              return el;
            }

            el = el.parentNode;
          }
        };

        DefaultLinkHandler.targetIsThisWindow = function targetIsThisWindow(target) {
          var targetWindow = target.getAttribute('target');
          var win = PLATFORM.global;

          return !targetWindow || targetWindow === win.name || targetWindow === '_self' || targetWindow === 'top' && win === win.top;
        };

        return DefaultLinkHandler;
      }(LinkHandler));

      _export('DefaultLinkHandler', DefaultLinkHandler);

      _export('BrowserHistory', BrowserHistory = (_temp = _class = function (_History) {
        _inherits(BrowserHistory, _History);

        function BrowserHistory(linkHandler) {

          var _this2 = _possibleConstructorReturn(this, _History.call(this));

          _this2._isActive = false;
          _this2._checkUrlCallback = _this2._checkUrl.bind(_this2);

          _this2.location = PLATFORM.location;
          _this2.history = PLATFORM.history;
          _this2.linkHandler = linkHandler;
          return _this2;
        }

        BrowserHistory.prototype.activate = function activate(options) {
          if (this._isActive) {
            throw new Error('History has already been activated.');
          }

          var wantsPushState = !!options.pushState;

          this._isActive = true;
          this.options = Object.assign({}, { root: '/' }, this.options, options);

          this.root = ('/' + this.options.root + '/').replace(rootStripper, '/');

          this._wantsHashChange = this.options.hashChange !== false;
          this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);

          var eventName = void 0;
          if (this._hasPushState) {
            eventName = 'popstate';
          } else if (this._wantsHashChange) {
            eventName = 'hashchange';
          }

          PLATFORM.addEventListener(eventName, this._checkUrlCallback);

          if (this._wantsHashChange && wantsPushState) {
            var loc = this.location;
            var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

            if (!this._hasPushState && !atRoot) {
              this.fragment = this._getFragment(null, true);
              this.location.replace(this.root + this.location.search + '#' + this.fragment);

              return true;
            } else if (this._hasPushState && atRoot && loc.hash) {
              this.fragment = this._getHash().replace(routeStripper, '');
              this.history.replaceState({}, DOM.title, this.root + this.fragment + loc.search);
            }
          }

          if (!this.fragment) {
            this.fragment = this._getFragment();
          }

          this.linkHandler.activate(this);

          if (!this.options.silent) {
            return this._loadUrl();
          }
        };

        BrowserHistory.prototype.deactivate = function deactivate() {
          PLATFORM.removeEventListener('popstate', this._checkUrlCallback);
          PLATFORM.removeEventListener('hashchange', this._checkUrlCallback);
          this._isActive = false;
          this.linkHandler.deactivate();
        };

        BrowserHistory.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
          var origin = createOrigin(this.location.protocol, this.location.hostname, this.location.port);
          return '' + origin + this.root;
        };

        BrowserHistory.prototype.navigate = function navigate(fragment) {
          var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          var _ref$trigger = _ref.trigger;
          var trigger = _ref$trigger === undefined ? true : _ref$trigger;
          var _ref$replace = _ref.replace;
          var replace = _ref$replace === undefined ? false : _ref$replace;

          if (fragment && absoluteUrl.test(fragment)) {
            this.location.href = fragment;
            return true;
          }

          if (!this._isActive) {
            return false;
          }

          fragment = this._getFragment(fragment || '');

          if (this.fragment === fragment && !replace) {
            return false;
          }

          this.fragment = fragment;

          var url = this.root + fragment;

          if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
          }

          if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, DOM.title, url);
          } else if (this._wantsHashChange) {
            updateHash(this.location, fragment, replace);
          } else {
            return this.location.assign(url);
          }

          if (trigger) {
            return this._loadUrl(fragment);
          }
        };

        BrowserHistory.prototype.navigateBack = function navigateBack() {
          this.history.back();
        };

        BrowserHistory.prototype.setTitle = function setTitle(title) {
          DOM.title = title;
        };

        BrowserHistory.prototype._getHash = function _getHash() {
          return this.location.hash.substr(1);
        };

        BrowserHistory.prototype._getFragment = function _getFragment(fragment, forcePushState) {
          var root = void 0;

          if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
              fragment = this.location.pathname + this.location.search;
              root = this.root.replace(trailingSlash, '');
              if (!fragment.indexOf(root)) {
                fragment = fragment.substr(root.length);
              }
            } else {
              fragment = this._getHash();
            }
          }

          return '/' + fragment.replace(routeStripper, '');
        };

        BrowserHistory.prototype._checkUrl = function _checkUrl() {
          var current = this._getFragment();
          if (current !== this.fragment) {
            this._loadUrl();
          }
        };

        BrowserHistory.prototype._loadUrl = function _loadUrl(fragmentOverride) {
          var fragment = this.fragment = this._getFragment(fragmentOverride);

          return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
        };

        return BrowserHistory;
      }(History), _class.inject = [LinkHandler], _temp));

      _export('BrowserHistory', BrowserHistory);

      routeStripper = /^#?\/*|\s+$/g;
      rootStripper = /^\/+|\/+$/g;
      trailingSlash = /\/$/;
      absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
    }
  };
});
'use strict';

System.register('node_modules/aurelia-loader-default/dist/system/aurelia-loader-default.js', ['aurelia-loader', 'aurelia-pal', 'aurelia-metadata'], function (_export, _context) {
  "use strict";

  var TemplateRegistryEntry, Loader, DOM, PLATFORM, Origin, TextTemplateLoader, DefaultLoader;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function ensureOriginOnExports(executed, name) {
    var target = executed;
    var key = void 0;
    var exportedValue = void 0;

    if (target.__useDefault) {
      target = target['default'];
    }

    Origin.set(target, new Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        Origin.set(exportedValue, new Origin(name, key));
      }
    }

    return executed;
  }

  return {
    setters: [function (_aureliaLoader) {
      TemplateRegistryEntry = _aureliaLoader.TemplateRegistryEntry;
      Loader = _aureliaLoader.Loader;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }],
    execute: function () {
      _export('TextTemplateLoader', TextTemplateLoader = function () {
        function TextTemplateLoader() {}

        TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
          return loader.loadText(entry.address).then(function (text) {
            entry.template = DOM.createTemplateFromMarkup(text);
          });
        };

        return TextTemplateLoader;
      }());

      _export('TextTemplateLoader', TextTemplateLoader);

      _export('DefaultLoader', DefaultLoader = function (_Loader) {
        _inherits(DefaultLoader, _Loader);

        function DefaultLoader() {

          var _this = _possibleConstructorReturn(this, _Loader.call(this));

          _this.textPluginName = 'text';

          _this.moduleRegistry = Object.create(null);
          _this.useTemplateLoader(new TextTemplateLoader());

          var that = _this;

          _this.addPlugin('template-registry-entry', {
            'fetch': function fetch(address) {
              var entry = that.getOrCreateTemplateRegistryEntry(address);
              return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
                return entry;
              });
            }
          });
          return _this;
        }

        DefaultLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
          this.templateLoader = templateLoader;
        };

        DefaultLoader.prototype.loadAllModules = function loadAllModules(ids) {
          var loads = [];

          for (var i = 0, ii = ids.length; i < ii; ++i) {
            loads.push(this.loadModule(ids[i]));
          }

          return Promise.all(loads);
        };

        DefaultLoader.prototype.loadTemplate = function loadTemplate(url) {
          return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
        };

        DefaultLoader.prototype.loadText = function loadText(url) {
          return this._import(this.applyPluginToUrl(url, this.textPluginName)).then(function (textOrModule) {
            if (typeof textOrModule === 'string') {
              return textOrModule;
            }

            return textOrModule['default'];
          });
        };

        return DefaultLoader;
      }(Loader));

      _export('DefaultLoader', DefaultLoader);

      PLATFORM.Loader = DefaultLoader;

      if (!PLATFORM.global.System || !PLATFORM.global.System.import) {
        if (PLATFORM.global.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
          PLATFORM.eachModule = function (callback) {
            var defined = requirejs.s.contexts._.defined;
            for (var key in defined) {
              try {
                if (callback(key, defined[key])) return;
              } catch (e) {}
            }
          };
        } else {
          PLATFORM.eachModule = function (callback) {};
        }

        DefaultLoader.prototype._import = function (moduleId) {
          return new Promise(function (resolve, reject) {
            require([moduleId], resolve, reject);
          });
        };

        DefaultLoader.prototype.loadModule = function (id) {
          var _this2 = this;

          var existing = this.moduleRegistry[id];
          if (existing !== undefined) {
            return Promise.resolve(existing);
          }

          return new Promise(function (resolve, reject) {
            require([id], function (m) {
              _this2.moduleRegistry[id] = m;
              resolve(ensureOriginOnExports(m, id));
            }, reject);
          });
        };

        DefaultLoader.prototype.map = function (id, source) {};

        DefaultLoader.prototype.normalize = function (moduleId, relativeTo) {
          return Promise.resolve(moduleId);
        };

        DefaultLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
          return moduleId;
        };

        DefaultLoader.prototype.applyPluginToUrl = function (url, pluginName) {
          return pluginName + '!' + url;
        };

        DefaultLoader.prototype.addPlugin = function (pluginName, implementation) {
          var nonAnonDefine = define;
          nonAnonDefine(pluginName, [], {
            'load': function load(name, req, onload) {
              var result = implementation.fetch(name);
              Promise.resolve(result).then(onload);
            }
          });
        };
      } else {
        PLATFORM.eachModule = function (callback) {
          if (System.registry) {
            for (var _iterator = System.registry.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var _ref2 = _ref;
              var k = _ref2[0];
              var m = _ref2[1];

              try {
                if (callback(k, m)) return;
              } catch (e) {}
            }
            return;
          }

          var modules = System._loader.modules;

          for (var key in modules) {
            try {
              if (callback(key, modules[key].module)) return;
            } catch (e) {}
          }
        };

        System.set('text', System.newModule({
          'translate': function translate(load) {
            return 'module.exports = "' + load.source.replace(/(["\\])/g, '\\$1').replace(/[\f]/g, '\\f').replace(/[\b]/g, '\\b').replace(/[\n]/g, '\\n').replace(/[\t]/g, '\\t').replace(/[\r]/g, '\\r').replace(/[\u2028]/g, '\\u2028').replace(/[\u2029]/g, '\\u2029') + '";';
          }
        }));

        DefaultLoader.prototype._import = function (moduleId) {
          return System.import(moduleId);
        };

        DefaultLoader.prototype.loadModule = function (id) {
          var _this3 = this;

          return System.normalize(id).then(function (newId) {
            var existing = _this3.moduleRegistry[newId];
            if (existing !== undefined) {
              return Promise.resolve(existing);
            }

            return System.import(newId).then(function (m) {
              _this3.moduleRegistry[newId] = m;
              return ensureOriginOnExports(m, newId);
            });
          });
        };

        DefaultLoader.prototype.map = function (id, source) {
          var _map;

          System.config({ map: (_map = {}, _map[id] = source, _map) });
        };

        DefaultLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
          return System.normalizeSync(moduleId, relativeTo);
        };

        DefaultLoader.prototype.normalize = function (moduleId, relativeTo) {
          return System.normalize(moduleId, relativeTo);
        };

        DefaultLoader.prototype.applyPluginToUrl = function (url, pluginName) {
          return url + '!' + pluginName;
        };

        DefaultLoader.prototype.addPlugin = function (pluginName, implementation) {
          System.set(pluginName, System.newModule({
            'fetch': function fetch(load, _fetch) {
              var result = implementation.fetch(load.address);
              return Promise.resolve(result).then(function (x) {
                load.metadata.result = x;
                return '';
              });
            },
            'instantiate': function instantiate(load) {
              return load.metadata.result;
            }
          }));
        };
      }
    }
  };
});
'use strict';

System.register('node_modules/aurelia-logging-console/dist/system/aurelia-logging-console.js', ['aurelia-logging'], function (_export, _context) {
  "use strict";

  var Logger, ConsoleAppender;

  return {
    setters: [function (_aureliaLogging) {
      Logger = _aureliaLogging.Logger;
    }],
    execute: function () {
      _export('ConsoleAppender', ConsoleAppender = function () {
        function ConsoleAppender() {}

        ConsoleAppender.prototype.debug = function debug(logger) {
          var _console;

          for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }

          (_console = console).debug.apply(_console, ['DEBUG [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.info = function info(logger) {
          var _console2;

          for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).info.apply(_console2, ['INFO [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.warn = function warn(logger) {
          var _console3;

          for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            rest[_key3 - 1] = arguments[_key3];
          }

          (_console3 = console).warn.apply(_console3, ['WARN [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.error = function error(logger) {
          var _console4;

          for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            rest[_key4 - 1] = arguments[_key4];
          }

          (_console4 = console).error.apply(_console4, ['ERROR [' + logger.id + ']'].concat(rest));
        };

        return ConsoleAppender;
      }());

      _export('ConsoleAppender', ConsoleAppender);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-pal-browser/dist/system/aurelia-pal-browser.js', ['aurelia-pal'], function (_export, _context) {
  "use strict";

  var initializePAL, isInitialized, _typeof, _PLATFORM, test, testElement, createMethod, _CustomEvent, proto, _FEATURE, shadowPoly, _DOM;

  function initialize() {
    if (isInitialized) {
      return;
    }

    initializePAL(function (platform, feature, dom) {
      Object.assign(platform, _PLATFORM);
      Object.assign(feature, _FEATURE);
      Object.assign(dom, _DOM);

      Object.defineProperty(dom, 'title', {
        get: function get() {
          return document.title;
        },
        set: function set(value) {
          document.title = value;
        }
      });

      Object.defineProperty(dom, 'activeElement', {
        get: function get() {
          return document.activeElement;
        }
      });

      Object.defineProperty(platform, 'XMLHttpRequest', {
        get: function get() {
          return platform.global.XMLHttpRequest;
        }
      });
    });
  }

  _export('initialize', initialize);

  return {
    setters: [function (_aureliaPal) {
      initializePAL = _aureliaPal.initializePAL;
      isInitialized = _aureliaPal.isInitialized;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('_PLATFORM', _PLATFORM = {
        location: window.location,
        history: window.history,
        addEventListener: function addEventListener(eventName, callback, capture) {
          this.global.addEventListener(eventName, callback, capture);
        },
        removeEventListener: function removeEventListener(eventName, callback, capture) {
          this.global.removeEventListener(eventName, callback, capture);
        },

        performance: window.performance,
        requestAnimationFrame: function requestAnimationFrame(callback) {
          return this.global.requestAnimationFrame(callback);
        }
      });

      _export('_PLATFORM', _PLATFORM);

      if (typeof FEATURE_NO_IE === 'undefined') {
        test = function test() {};

        if (test.name === undefined) {
          Object.defineProperty(Function.prototype, 'name', {
            get: function get() {
              var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

              Object.defineProperty(this, 'name', { value: name });
              return name;
            }
          });
        }
      }

      if (typeof FEATURE_NO_IE === 'undefined') {
        if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
          (function () {
            var protoProp = 'prototype';
            var strTrim = String.prototype.trim;
            var arrIndexOf = Array.prototype.indexOf;
            var emptyArray = [];

            var DOMEx = function DOMEx(type, message) {
              this.name = type;
              this.code = DOMException[type];
              this.message = message;
            };

            var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
              if (token === '') {
                throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
              }

              if (/\s/.test(token)) {
                throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
              }

              return arrIndexOf.call(classList, token);
            };

            var ClassList = function ClassList(elem) {
              var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
              var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

              for (var i = 0, ii = classes.length; i < ii; ++i) {
                this.push(classes[i]);
              }

              this._updateClassName = function () {
                elem.setAttribute('class', this.toString());
              };
            };

            var classListProto = ClassList[protoProp] = [];

            DOMEx[protoProp] = Error[protoProp];

            classListProto.item = function (i) {
              return this[i] || null;
            };

            classListProto.contains = function (token) {
              token += '';
              return checkTokenAndGetIndex(this, token) !== -1;
            };

            classListProto.add = function () {
              var tokens = arguments;
              var i = 0;
              var ii = tokens.length;
              var token = void 0;
              var updated = false;

              do {
                token = tokens[i] + '';
                if (checkTokenAndGetIndex(this, token) === -1) {
                  this.push(token);
                  updated = true;
                }
              } while (++i < ii);

              if (updated) {
                this._updateClassName();
              }
            };

            classListProto.remove = function () {
              var tokens = arguments;
              var i = 0;
              var ii = tokens.length;
              var token = void 0;
              var updated = false;
              var index = void 0;

              do {
                token = tokens[i] + '';
                index = checkTokenAndGetIndex(this, token);
                while (index !== -1) {
                  this.splice(index, 1);
                  updated = true;
                  index = checkTokenAndGetIndex(this, token);
                }
              } while (++i < ii);

              if (updated) {
                this._updateClassName();
              }
            };

            classListProto.toggle = function (token, force) {
              token += '';

              var result = this.contains(token);
              var method = result ? force !== true && 'remove' : force !== false && 'add';

              if (method) {
                this[method](token);
              }

              if (force === true || force === false) {
                return force;
              }

              return !result;
            };

            classListProto.toString = function () {
              return this.join(' ');
            };

            Object.defineProperty(Element.prototype, 'classList', {
              get: function get() {
                return new ClassList(this);
              },
              enumerable: true,
              configurable: true
            });
          })();
        } else {
          testElement = document.createElement('_');

          testElement.classList.add('c1', 'c2');

          if (!testElement.classList.contains('c2')) {
            createMethod = function createMethod(method) {
              var original = DOMTokenList.prototype[method];

              DOMTokenList.prototype[method] = function (token) {
                for (var i = 0, ii = arguments.length; i < ii; ++i) {
                  token = arguments[i];
                  original.call(this, token);
                }
              };
            };

            createMethod('add');
            createMethod('remove');
          }

          testElement.classList.toggle('c3', false);

          if (testElement.classList.contains('c3')) {
            (function () {
              var _toggle = DOMTokenList.prototype.toggle;

              DOMTokenList.prototype.toggle = function (token, force) {
                if (1 in arguments && !this.contains(token) === !force) {
                  return force;
                }

                return _toggle.call(this, token);
              };
            })();
          }

          testElement = null;
        }
      }

      if (typeof FEATURE_NO_IE === 'undefined') {
        // @license http://opensource.org/licenses/MIT
        if ('performance' in window === false) {
          window.performance = {};
        }

        if ('now' in window.performance === false) {
          (function () {
            var nowOffset = Date.now();

            if (performance.timing && performance.timing.navigationStart) {
              nowOffset = performance.timing.navigationStart;
            }

            window.performance.now = function now() {
              return Date.now() - nowOffset;
            };
          })();
        }

        _PLATFORM.performance = window.performance;
      }

      if (typeof FEATURE_NO_IE === 'undefined') {
        (function () {
          var con = window.console = window.console || {};
          var nop = function nop() {};

          if (!con.memory) con.memory = {};
          ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
            if (!con[m]) con[m] = nop;
          });

          if (_typeof(con.log) === 'object') {
            'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
              console[method] = this.bind(console[method], console);
            }, Function.prototype.call);
          }
        })();
      }

      if (typeof FEATURE_NO_IE === 'undefined') {
        if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
          _CustomEvent = function _CustomEvent(event, params) {
            params = params || {
              bubbles: false,
              cancelable: false,
              detail: undefined
            };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          };

          _CustomEvent.prototype = window.Event.prototype;
          window.CustomEvent = _CustomEvent;
        }
      }

      if (Element && !Element.prototype.matches) {
        proto = Element.prototype;

        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
      }

      _export('_FEATURE', _FEATURE = {
        shadowDOM: !!HTMLElement.prototype.attachShadow,
        scopedCSS: 'scoped' in document.createElement('style'),
        htmlTemplateElement: 'content' in document.createElement('template'),
        mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
        ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
          return t;
        }
      });

      _export('_FEATURE', _FEATURE);

      if (typeof FEATURE_NO_IE === 'undefined') {
        (function () {
          var isSVGTemplate = function isSVGTemplate(el) {
            return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
          };

          var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
            var template = el.ownerDocument.createElement('template');
            var attrs = el.attributes;
            var length = attrs.length;
            var attr = void 0;

            el.parentNode.insertBefore(template, el);

            while (length-- > 0) {
              attr = attrs[length];
              template.setAttribute(attr.name, attr.value);
              el.removeAttribute(attr.name);
            }

            el.parentNode.removeChild(el);

            return fixHTMLTemplateElement(template);
          };

          var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
            var content = template.content = document.createDocumentFragment();
            var child = void 0;

            while (child = template.firstChild) {
              content.appendChild(child);
            }

            return template;
          };

          var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
            var content = fixHTMLTemplateElement(template).content;
            var childTemplates = content.querySelectorAll('template');

            for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
              var child = childTemplates[i];

              if (isSVGTemplate(child)) {
                fixSVGTemplateElement(child);
              } else {
                fixHTMLTemplateElement(child);
              }
            }

            return template;
          };

          if (!_FEATURE.htmlTemplateElement) {
            _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
          }
        })();
      }

      shadowPoly = window.ShadowDOMPolyfill || null;

      _export('_DOM', _DOM = {
        Element: Element,
        SVGElement: SVGElement,
        boundary: 'aurelia-dom-boundary',
        addEventListener: function addEventListener(eventName, callback, capture) {
          document.addEventListener(eventName, callback, capture);
        },
        removeEventListener: function removeEventListener(eventName, callback, capture) {
          document.removeEventListener(eventName, callback, capture);
        },
        adoptNode: function adoptNode(node) {
          return document.adoptNode(node, true);
        },
        createElement: function createElement(tagName) {
          return document.createElement(tagName);
        },
        createTextNode: function createTextNode(text) {
          return document.createTextNode(text);
        },
        createComment: function createComment(text) {
          return document.createComment(text);
        },
        createDocumentFragment: function createDocumentFragment() {
          return document.createDocumentFragment();
        },
        createMutationObserver: function createMutationObserver(callback) {
          return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
        },
        createCustomEvent: function createCustomEvent(eventType, options) {
          return new window.CustomEvent(eventType, options);
        },
        dispatchEvent: function dispatchEvent(evt) {
          document.dispatchEvent(evt);
        },
        getComputedStyle: function getComputedStyle(element) {
          return window.getComputedStyle(element);
        },
        getElementById: function getElementById(id) {
          return document.getElementById(id);
        },
        querySelectorAll: function querySelectorAll(query) {
          return document.querySelectorAll(query);
        },
        nextElementSibling: function nextElementSibling(element) {
          if (element.nextElementSibling) {
            return element.nextElementSibling;
          }
          do {
            element = element.nextSibling;
          } while (element && element.nodeType !== 1);
          return element;
        },
        createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
          var parser = document.createElement('div');
          parser.innerHTML = markup;

          var temp = parser.firstElementChild;
          if (!temp || temp.nodeName !== 'TEMPLATE') {
            throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
          }

          return _FEATURE.ensureHTMLTemplateElement(temp);
        },
        appendNode: function appendNode(newNode, parentNode) {
          (parentNode || document.body).appendChild(newNode);
        },
        replaceNode: function replaceNode(newNode, node, parentNode) {
          if (node.parentNode) {
            node.parentNode.replaceChild(newNode, node);
          } else if (shadowPoly !== null) {
            shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
          } else {
            parentNode.replaceChild(newNode, node);
          }
        },
        removeNode: function removeNode(node, parentNode) {
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          } else if (parentNode) {
            if (shadowPoly !== null) {
              shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
            } else {
              parentNode.removeChild(node);
            }
          }
        },
        injectStyles: function injectStyles(styles, destination, prepend) {
          var node = document.createElement('style');
          node.innerHTML = styles;
          node.type = 'text/css';

          destination = destination || document.head;

          if (prepend && destination.childNodes.length > 0) {
            destination.insertBefore(node, destination.childNodes[0]);
          } else {
            destination.appendChild(node);
          }

          return node;
        }
      });

      _export('_DOM', _DOM);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-binding/dist/system/aurelia-templating-binding.js', ['aurelia-logging', 'aurelia-binding', 'aurelia-templating'], function (_export, _context) {
  "use strict";

  var LogManager, camelCase, SVGAnalyzer, bindingMode, connectable, enqueueBindingConnect, Parser, ObserverLocator, EventManager, ListenerExpression, BindingExpression, CallExpression, delegationStrategy, NameExpression, BehaviorInstruction, BindingLanguage, _class, _temp, _dec, _class2, _class3, _temp2, _class4, _temp3, AttributeMap, InterpolationBindingExpression, InterpolationBinding, ChildInterpolationBinding, SyntaxInterpreter, info, TemplatingBindingLanguage;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function validateTarget(target, propertyName) {
    if (propertyName === 'style') {
      LogManager.getLogger('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
    } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
      throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
    }
  }

  function configure(config) {
    config.container.registerSingleton(BindingLanguage, TemplatingBindingLanguage);
    config.container.registerAlias(BindingLanguage, TemplatingBindingLanguage);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaBinding) {
      camelCase = _aureliaBinding.camelCase;
      SVGAnalyzer = _aureliaBinding.SVGAnalyzer;
      bindingMode = _aureliaBinding.bindingMode;
      connectable = _aureliaBinding.connectable;
      enqueueBindingConnect = _aureliaBinding.enqueueBindingConnect;
      Parser = _aureliaBinding.Parser;
      ObserverLocator = _aureliaBinding.ObserverLocator;
      EventManager = _aureliaBinding.EventManager;
      ListenerExpression = _aureliaBinding.ListenerExpression;
      BindingExpression = _aureliaBinding.BindingExpression;
      CallExpression = _aureliaBinding.CallExpression;
      delegationStrategy = _aureliaBinding.delegationStrategy;
      NameExpression = _aureliaBinding.NameExpression;
    }, function (_aureliaTemplating) {
      BehaviorInstruction = _aureliaTemplating.BehaviorInstruction;
      BindingLanguage = _aureliaTemplating.BindingLanguage;
    }],
    execute: function () {
      _export('AttributeMap', AttributeMap = (_temp = _class = function () {
        function AttributeMap(svg) {

          this.elements = Object.create(null);
          this.allElements = Object.create(null);

          this.svg = svg;

          this.registerUniversal('accesskey', 'accessKey');
          this.registerUniversal('contenteditable', 'contentEditable');
          this.registerUniversal('tabindex', 'tabIndex');
          this.registerUniversal('textcontent', 'textContent');
          this.registerUniversal('innerhtml', 'innerHTML');
          this.registerUniversal('scrolltop', 'scrollTop');
          this.registerUniversal('scrollleft', 'scrollLeft');
          this.registerUniversal('readonly', 'readOnly');

          this.register('label', 'for', 'htmlFor');

          this.register('img', 'usemap', 'useMap');

          this.register('input', 'maxlength', 'maxLength');
          this.register('input', 'minlength', 'minLength');
          this.register('input', 'formaction', 'formAction');
          this.register('input', 'formenctype', 'formEncType');
          this.register('input', 'formmethod', 'formMethod');
          this.register('input', 'formnovalidate', 'formNoValidate');
          this.register('input', 'formtarget', 'formTarget');

          this.register('textarea', 'maxlength', 'maxLength');

          this.register('td', 'rowspan', 'rowSpan');
          this.register('td', 'colspan', 'colSpan');
          this.register('th', 'rowspan', 'rowSpan');
          this.register('th', 'colspan', 'colSpan');
        }

        AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
          elementName = elementName.toLowerCase();
          attributeName = attributeName.toLowerCase();
          var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
          element[attributeName] = propertyName;
        };

        AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
          attributeName = attributeName.toLowerCase();
          this.allElements[attributeName] = propertyName;
        };

        AttributeMap.prototype.map = function map(elementName, attributeName) {
          if (this.svg.isStandardSvgAttribute(elementName, attributeName)) {
            return attributeName;
          }
          elementName = elementName.toLowerCase();
          attributeName = attributeName.toLowerCase();
          var element = this.elements[elementName];
          if (element !== undefined && attributeName in element) {
            return element[attributeName];
          }
          if (attributeName in this.allElements) {
            return this.allElements[attributeName];
          }

          if (/(?:^data-)|(?:^aria-)|:/.test(attributeName)) {
            return attributeName;
          }
          return camelCase(attributeName);
        };

        return AttributeMap;
      }(), _class.inject = [SVGAnalyzer], _temp));

      _export('AttributeMap', AttributeMap);

      _export('InterpolationBindingExpression', InterpolationBindingExpression = function () {
        function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {

          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.parts = parts;
          this.mode = mode;
          this.lookupFunctions = lookupFunctions;
          this.attribute = this.attrToRemove = attribute;
          this.discrete = false;
        }

        InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
          if (this.parts.length === 3) {
            return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
          }
          return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
        };

        return InterpolationBindingExpression;
      }());

      _export('InterpolationBindingExpression', InterpolationBindingExpression);

      _export('InterpolationBinding', InterpolationBinding = function () {
        function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {

          validateTarget(target, targetProperty);
          this.observerLocator = observerLocator;
          this.parts = parts;
          this.target = target;
          this.targetProperty = targetProperty;
          this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
          this.mode = mode;
          this.lookupFunctions = lookupFunctions;
        }

        InterpolationBinding.prototype.interpolate = function interpolate() {
          if (this.isBound) {
            var value = '';
            var parts = this.parts;
            for (var i = 0, ii = parts.length; i < ii; i++) {
              value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
            }
            this.targetAccessor.setValue(value, this.target, this.targetProperty);
          }
        };

        InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
          for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
            var child = this['childBinding' + i];
            if (child.mode === bindingMode.oneTime) {
              child.call();
            }
          }
        };

        InterpolationBinding.prototype.bind = function bind(source) {
          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.source = source;

          var parts = this.parts;
          for (var i = 1, ii = parts.length; i < ii; i += 2) {
            var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
            binding.bind(source);
            this['childBinding' + i] = binding;
          }

          this.isBound = true;
          this.interpolate();
        };

        InterpolationBinding.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          this.source = null;
          var parts = this.parts;
          for (var i = 1, ii = parts.length; i < ii; i += 2) {
            var name = 'childBinding' + i;
            this[name].unbind();
          }
        };

        return InterpolationBinding;
      }());

      _export('InterpolationBinding', InterpolationBinding);

      _export('ChildInterpolationBinding', ChildInterpolationBinding = (_dec = connectable(), _dec(_class2 = function () {
        function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {

          if (target instanceof InterpolationBinding) {
            this.parent = target;
          } else {
            validateTarget(target, targetProperty);
            this.target = target;
            this.targetProperty = targetProperty;
            this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
          }
          this.observerLocator = observerLocator;
          this.sourceExpression = sourceExpression;
          this.mode = mode;
          this.lookupFunctions = lookupFunctions;
          this.left = left;
          this.right = right;
        }

        ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
          value = value === null || value === undefined ? '' : value.toString();
          if (value !== this.value) {
            this.value = value;
            if (this.parent) {
              this.parent.interpolate();
            } else {
              this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
            }
          }
        };

        ChildInterpolationBinding.prototype.call = function call() {
          if (!this.isBound) {
            return;
          }

          this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
          this.updateTarget(this.rawValue);

          if (this.mode !== bindingMode.oneTime) {
            this._version++;
            this.sourceExpression.connect(this, this.source);
            if (this.rawValue instanceof Array) {
              this.observeArray(this.rawValue);
            }
            this.unobserve(false);
          }
        };

        ChildInterpolationBinding.prototype.bind = function bind(source) {
          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.isBound = true;
          this.source = source;

          var sourceExpression = this.sourceExpression;
          if (sourceExpression.bind) {
            sourceExpression.bind(this, source, this.lookupFunctions);
          }

          this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions);
          this.updateTarget(this.rawValue);

          if (this.mode === bindingMode.oneWay) {
            enqueueBindingConnect(this);
          }
        };

        ChildInterpolationBinding.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          var sourceExpression = this.sourceExpression;
          if (sourceExpression.unbind) {
            sourceExpression.unbind(this, this.source);
          }
          this.source = null;
          this.value = null;
          this.rawValue = null;
          this.unobserve(true);
        };

        ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
          if (!this.isBound) {
            return;
          }
          if (evaluate) {
            this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
            this.updateTarget(this.rawValue);
          }
          this.sourceExpression.connect(this, this.source);
          if (this.rawValue instanceof Array) {
            this.observeArray(this.rawValue);
          }
        };

        return ChildInterpolationBinding;
      }()) || _class2));

      _export('ChildInterpolationBinding', ChildInterpolationBinding);

      _export('SyntaxInterpreter', SyntaxInterpreter = (_temp2 = _class3 = function () {
        function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {

          this.parser = parser;
          this.observerLocator = observerLocator;
          this.eventManager = eventManager;
          this.attributeMap = attributeMap;
        }

        SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
          if (info.command in this) {
            return this[info.command](resources, element, info, existingInstruction, context);
          }

          return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
        };

        SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
          LogManager.getLogger('templating-binding').warn('Unknown binding command.', info);
          return existingInstruction;
        };

        SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
          var tagName = element.tagName.toLowerCase();

          if (tagName === 'input' && (attrName === 'value' || attrName === 'files') && element.type !== 'checkbox' && element.type !== 'radio' || tagName === 'input' && attrName === 'checked' && (element.type === 'checkbox' || element.type === 'radio') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
            return bindingMode.twoWay;
          }

          if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= bindingMode.oneTime) {
            return context.attributes[attrName].defaultBindingMode;
          }

          return bindingMode.oneWay;
        };

        SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName, context), resources.lookupFunctions);

          return instruction;
        };

        SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
          return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), delegationStrategy.none, true, resources.lookupFunctions);
        };

        SyntaxInterpreter.prototype.capture = function capture(resources, element, info) {
          return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), delegationStrategy.capturing, true, resources.lookupFunctions);
        };

        SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
          return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), delegationStrategy.bubbling, true, resources.lookupFunctions);
        };

        SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          instruction.attributes[info.attrName] = new CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

          return instruction;
        };

        SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);
          var attrValue = info.attrValue;
          var language = this.language;
          var name = null;
          var target = '';
          var current = void 0;
          var i = void 0;
          var ii = void 0;
          var inString = false;
          var inEscape = false;
          var foundName = false;

          for (i = 0, ii = attrValue.length; i < ii; ++i) {
            current = attrValue[i];

            if (current === ';' && !inString) {
              if (!foundName) {
                name = this._getPrimaryPropertyName(resources, context);
              }
              info = language.inspectAttribute(resources, '?', name, target.trim());
              language.createAttributeInstruction(resources, element, info, instruction, context);

              if (!instruction.attributes[info.attrName]) {
                instruction.attributes[info.attrName] = info.attrValue;
              }

              target = '';
              name = null;
            } else if (current === ':' && name === null) {
              foundName = true;
              name = target.trim();
              target = '';
            } else if (current === '\\') {
              target += current;
              inEscape = true;
              continue;
            } else {
              target += current;

              if (name !== null && inEscape === false && current === '\'') {
                inString = !inString;
              }
            }

            inEscape = false;
          }

          if (!foundName) {
            name = this._getPrimaryPropertyName(resources, context);
          }

          if (name !== null) {
            info = language.inspectAttribute(resources, '?', name, target.trim());
            language.createAttributeInstruction(resources, element, info, instruction, context);

            if (!instruction.attributes[info.attrName]) {
              instruction.attributes[info.attrName] = info.attrValue;
            }
          }

          return instruction;
        };

        SyntaxInterpreter.prototype._getPrimaryPropertyName = function _getPrimaryPropertyName(resources, context) {
          var type = resources.getAttribute(context.attributeName);
          if (type && type.primaryProperty) {
            return type.primaryProperty.name;
          }
          return null;
        };

        SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
          var parts = void 0;
          var keyValue = void 0;
          var instruction = void 0;
          var attrValue = void 0;
          var isDestructuring = void 0;

          attrValue = info.attrValue;
          isDestructuring = attrValue.match(/^ *[[].+[\]]/);
          parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

          if (parts.length !== 2) {
            throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
          }

          instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          if (isDestructuring) {
            keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
            instruction.attributes.key = keyValue[0];
            instruction.attributes.value = keyValue[1];
          } else {
            instruction.attributes.local = parts[0];
          }

          instruction.attributes.items = new BindingExpression(this.observerLocator, 'items', this.parser.parse(parts[1]), bindingMode.oneWay, resources.lookupFunctions);

          return instruction;
        };

        SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), bindingMode.twoWay, resources.lookupFunctions);

          return instruction;
        };

        SyntaxInterpreter.prototype['one-way'] = function oneWay(resources, element, info, existingInstruction) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), bindingMode.oneWay, resources.lookupFunctions);

          return instruction;
        };

        SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
          var instruction = existingInstruction || BehaviorInstruction.attribute(info.attrName);

          instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), bindingMode.oneTime, resources.lookupFunctions);

          return instruction;
        };

        return SyntaxInterpreter;
      }(), _class3.inject = [Parser, ObserverLocator, EventManager, AttributeMap], _temp2));

      _export('SyntaxInterpreter', SyntaxInterpreter);

      info = {};

      _export('TemplatingBindingLanguage', TemplatingBindingLanguage = (_temp3 = _class4 = function (_BindingLanguage) {
        _inherits(TemplatingBindingLanguage, _BindingLanguage);

        function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {

          var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

          _this.parser = parser;
          _this.observerLocator = observerLocator;
          _this.syntaxInterpreter = syntaxInterpreter;
          _this.emptyStringExpression = _this.parser.parse('\'\'');
          syntaxInterpreter.language = _this;
          _this.attributeMap = attributeMap;
          return _this;
        }

        TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
          var parts = attrName.split('.');

          info.defaultBindingMode = null;

          if (parts.length === 2) {
            info.attrName = parts[0].trim();
            info.attrValue = attrValue;
            info.command = parts[1].trim();

            if (info.command === 'ref') {
              info.expression = new NameExpression(this.parser.parse(attrValue), info.attrName, resources.lookupFunctions);
              info.command = null;
              info.attrName = 'ref';
            } else {
              info.expression = null;
            }
          } else if (attrName === 'ref') {
            info.attrName = attrName;
            info.attrValue = attrValue;
            info.command = null;
            info.expression = new NameExpression(this.parser.parse(attrValue), 'element', resources.lookupFunctions);
          } else {
            info.attrName = attrName;
            info.attrValue = attrValue;
            info.command = null;
            var interpolationParts = this.parseInterpolation(resources, attrValue);
            if (interpolationParts === null) {
              info.expression = null;
            } else {
              info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, bindingMode.oneWay, resources.lookupFunctions, attrName);
            }
          }

          return info;
        };

        TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
          var instruction = void 0;

          if (theInfo.expression) {
            if (theInfo.attrName === 'ref') {
              return theInfo.expression;
            }

            instruction = existingInstruction || BehaviorInstruction.attribute(theInfo.attrName);
            instruction.attributes[theInfo.attrName] = theInfo.expression;
          } else if (theInfo.command) {
            instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
          }

          return instruction;
        };

        TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
          var parts = this.parseInterpolation(resources, value);
          if (parts === null) {
            return null;
          }
          return new InterpolationBindingExpression(this.observerLocator, 'textContent', parts, bindingMode.oneWay, resources.lookupFunctions, 'textContent');
        };

        TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
          var i = value.indexOf('${', 0);
          var ii = value.length;
          var char = void 0;
          var pos = 0;
          var open = 0;
          var quote = null;
          var interpolationStart = void 0;
          var parts = void 0;
          var partIndex = 0;

          while (i >= 0 && i < ii - 2) {
            open = 1;
            interpolationStart = i;
            i += 2;

            do {
              char = value[i];
              i++;

              if (char === "'" || char === '"') {
                if (quote === null) {
                  quote = char;
                } else if (quote === char) {
                  quote = null;
                }
                continue;
              }

              if (char === '\\') {
                i++;
                continue;
              }

              if (quote !== null) {
                continue;
              }

              if (char === '{') {
                open++;
              } else if (char === '}') {
                open--;
              }
            } while (open > 0 && i < ii);

            if (open === 0) {
              parts = parts || [];
              if (value[interpolationStart - 1] === '\\' && value[interpolationStart - 2] !== '\\') {
                parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i);
                partIndex++;
                parts[partIndex] = this.emptyStringExpression;
                partIndex++;
              } else {
                parts[partIndex] = value.substring(pos, interpolationStart);
                partIndex++;
                parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1));
                partIndex++;
              }
              pos = i;
              i = value.indexOf('${', i);
            } else {
              break;
            }
          }

          if (partIndex === 0) {
            return null;
          }

          parts[partIndex] = value.substr(pos);
          return parts;
        };

        return TemplatingBindingLanguage;
      }(BindingLanguage), _class4.inject = [Parser, ObserverLocator, SyntaxInterpreter, AttributeMap], _temp3));

      _export('TemplatingBindingLanguage', TemplatingBindingLanguage);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/compose.js', ['aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var Container, inject, TaskQueue, CompositionEngine, ViewSlot, ViewResources, customElement, bindable, noView, View, DOM, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Compose;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      bindingContext: composer.bindingContext,
      overrideContext: composer.overrideContext,
      owningView: composer.owningView,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentController: composer.currentController,
      host: composer.element,
      swapOrder: composer.swapOrder
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      noView = _aureliaTemplating.noView;
      View = _aureliaTemplating.View;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('Compose', Compose = (_dec = customElement('compose'), _dec2 = inject(DOM.Element, Container, CompositionEngine, ViewSlot, ViewResources, TaskQueue), _dec(_class = noView(_class = _dec2(_class = (_class2 = function () {
        function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {

          _initDefineProp(this, 'model', _descriptor, this);

          _initDefineProp(this, 'view', _descriptor2, this);

          _initDefineProp(this, 'viewModel', _descriptor3, this);

          _initDefineProp(this, 'swapOrder', _descriptor4, this);

          this.element = element;
          this.container = container;
          this.compositionEngine = compositionEngine;
          this.viewSlot = viewSlot;
          this.viewResources = viewResources;
          this.taskQueue = taskQueue;
          this.currentController = null;
          this.currentViewModel = null;
        }

        Compose.prototype.created = function created(owningView) {
          this.owningView = owningView;
        };

        Compose.prototype.bind = function bind(bindingContext, overrideContext) {
          this.bindingContext = bindingContext;
          this.overrideContext = overrideContext;
          processInstruction(this, createInstruction(this, {
            view: this.view,
            viewModel: this.viewModel,
            model: this.model
          }));
        };

        Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
          this.bindingContext = null;
          this.overrideContext = null;
          var returnToCache = true;
          var skipAnimation = true;
          this.viewSlot.removeAll(returnToCache, skipAnimation);
        };

        Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
          var _this = this;

          if (this.currentInstruction) {
            this.currentInstruction.model = newValue;
            return;
          }

          this.taskQueue.queueMicroTask(function () {
            if (_this.currentInstruction) {
              _this.currentInstruction.model = newValue;
              return;
            }

            var vm = _this.currentViewModel;

            if (vm && typeof vm.activate === 'function') {
              vm.activate(newValue);
            }
          });
        };

        Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
          var _this2 = this;

          var instruction = createInstruction(this, {
            view: newValue,
            viewModel: this.currentViewModel || this.viewModel,
            model: this.model
          });

          if (this.currentInstruction) {
            this.currentInstruction = instruction;
            return;
          }

          this.currentInstruction = instruction;
          this.taskQueue.queueMicroTask(function () {
            return processInstruction(_this2, _this2.currentInstruction);
          });
        };

        Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
          var _this3 = this;

          var instruction = createInstruction(this, {
            viewModel: newValue,
            view: this.view,
            model: this.model
          });

          if (this.currentInstruction) {
            this.currentInstruction = instruction;
            return;
          }

          this.currentInstruction = instruction;
          this.taskQueue.queueMicroTask(function () {
            return processInstruction(_this3, _this3.currentInstruction);
          });
        };

        return Compose;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('Compose', Compose);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/if.js', ['aurelia-templating', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var BoundViewFactory, ViewSlot, customAttribute, templateController, inject, _dec, _dec2, _class, If;

  return {
    setters: [function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      customAttribute = _aureliaTemplating.customAttribute;
      templateController = _aureliaTemplating.templateController;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('If', If = (_dec = customAttribute('if'), _dec2 = inject(BoundViewFactory, ViewSlot), _dec(_class = templateController(_class = _dec2(_class = function () {
        function If(viewFactory, viewSlot) {

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
          this.view = null;
          this.bindingContext = null;
          this.overrideContext = null;
        }

        If.prototype.bind = function bind(bindingContext, overrideContext) {
          this.bindingContext = bindingContext;
          this.overrideContext = overrideContext;
          this.valueChanged(this.value);
        };

        If.prototype.valueChanged = function valueChanged(newValue) {
          var _this = this;

          if (this.__queuedChanges) {
            this.__queuedChanges.push(newValue);
            return;
          }

          var maybePromise = this._runValueChanged(newValue);
          if (maybePromise instanceof Promise) {
            (function () {
              var queuedChanges = _this.__queuedChanges = [];

              var runQueuedChanges = function runQueuedChanges() {
                if (!queuedChanges.length) {
                  _this.__queuedChanges = undefined;
                  return;
                }

                var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
                nextPromise.then(runQueuedChanges);
              };

              maybePromise.then(runQueuedChanges);
            })();
          }
        };

        If.prototype._runValueChanged = function _runValueChanged(newValue) {
          var _this2 = this;

          if (!newValue) {
            var viewOrPromise = void 0;
            if (this.view !== null && this.showing) {
              viewOrPromise = this.viewSlot.remove(this.view);
              if (viewOrPromise instanceof Promise) {
                viewOrPromise.then(function () {
                  return _this2.view.unbind();
                });
              } else {
                this.view.unbind();
              }
            }

            this.showing = false;
            return viewOrPromise;
          }

          if (this.view === null) {
            this.view = this.viewFactory.create();
          }

          if (!this.view.isBound) {
            this.view.bind(this.bindingContext, this.overrideContext);
          }

          if (!this.showing) {
            this.showing = true;
            return this.viewSlot.add(this.view);
          }

          return undefined;
        };

        If.prototype.unbind = function unbind() {
          if (this.view === null) {
            return;
          }

          this.view.unbind();

          if (!this.viewFactory.isCaching) {
            return;
          }

          if (this.showing) {
            this.showing = false;
            this.viewSlot.remove(this.view, true, true);
          }
          this.view.returnToCache();
          this.view = null;
        };

        return If;
      }()) || _class) || _class) || _class));

      _export('If', If);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/with.js', ['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-binding'], function (_export, _context) {
  "use strict";

  var inject, BoundViewFactory, ViewSlot, customAttribute, templateController, createOverrideContext, _dec, _dec2, _class, With;

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      customAttribute = _aureliaTemplating.customAttribute;
      templateController = _aureliaTemplating.templateController;
    }, function (_aureliaBinding) {
      createOverrideContext = _aureliaBinding.createOverrideContext;
    }],
    execute: function () {
      _export('With', With = (_dec = customAttribute('with'), _dec2 = inject(BoundViewFactory, ViewSlot), _dec(_class = templateController(_class = _dec2(_class = function () {
        function With(viewFactory, viewSlot) {

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.parentOverrideContext = null;
          this.view = null;
        }

        With.prototype.bind = function bind(bindingContext, overrideContext) {
          this.parentOverrideContext = overrideContext;
          this.valueChanged(this.value);
        };

        With.prototype.valueChanged = function valueChanged(newValue) {
          var overrideContext = createOverrideContext(newValue, this.parentOverrideContext);
          if (!this.view) {
            this.view = this.viewFactory.create();
            this.view.bind(newValue, overrideContext);
            this.viewSlot.add(this.view);
          } else {
            this.view.bind(newValue, overrideContext);
          }
        };

        With.prototype.unbind = function unbind() {
          this.parentOverrideContext = null;

          if (this.view) {
            this.view.unbind();
          }
        };

        return With;
      }()) || _class) || _class) || _class));

      _export('With', With);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/repeat.js', ['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './repeat-strategy-locator', './repeat-utilities', './analyze-view-factory', './abstract-repeater'], function (_export, _context) {
  "use strict";

  var inject, ObserverLocator, BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, customAttribute, bindable, templateController, RepeatStrategyLocator, getItemsSourceExpression, unwrapExpression, isOneTime, updateOneTimeBinding, viewsRequireLifecycle, AbstractRepeater, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Repeat;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
    }, function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
      templateController = _aureliaTemplating.templateController;
    }, function (_repeatStrategyLocator) {
      RepeatStrategyLocator = _repeatStrategyLocator.RepeatStrategyLocator;
    }, function (_repeatUtilities) {
      getItemsSourceExpression = _repeatUtilities.getItemsSourceExpression;
      unwrapExpression = _repeatUtilities.unwrapExpression;
      isOneTime = _repeatUtilities.isOneTime;
      updateOneTimeBinding = _repeatUtilities.updateOneTimeBinding;
    }, function (_analyzeViewFactory) {
      viewsRequireLifecycle = _analyzeViewFactory.viewsRequireLifecycle;
    }, function (_abstractRepeater) {
      AbstractRepeater = _abstractRepeater.AbstractRepeater;
    }],
    execute: function () {
      _export('Repeat', Repeat = (_dec = customAttribute('repeat'), _dec2 = inject(BoundViewFactory, TargetInstruction, ViewSlot, ViewResources, ObserverLocator, RepeatStrategyLocator), _dec(_class = templateController(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
        _inherits(Repeat, _AbstractRepeater);

        function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {

          var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
            local: 'item',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
          }));

          _initDefineProp(_this, 'items', _descriptor, _this);

          _initDefineProp(_this, 'local', _descriptor2, _this);

          _initDefineProp(_this, 'key', _descriptor3, _this);

          _initDefineProp(_this, 'value', _descriptor4, _this);

          _this.viewFactory = viewFactory;
          _this.instruction = instruction;
          _this.viewSlot = viewSlot;
          _this.lookupFunctions = viewResources.lookupFunctions;
          _this.observerLocator = observerLocator;
          _this.key = 'key';
          _this.value = 'value';
          _this.strategyLocator = strategyLocator;
          _this.ignoreMutation = false;
          _this.sourceExpression = getItemsSourceExpression(_this.instruction, 'repeat.for');
          _this.isOneTime = isOneTime(_this.sourceExpression);
          _this.viewsRequireLifecycle = viewsRequireLifecycle(viewFactory);
          return _this;
        }

        Repeat.prototype.call = function call(context, changes) {
          this[context](this.items, changes);
        };

        Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
          this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
          this.matcherBinding = this._captureAndRemoveMatcherBinding();
          this.itemsChanged();
        };

        Repeat.prototype.unbind = function unbind() {
          this.scope = null;
          this.items = null;
          this.matcherBinding = null;
          this.viewSlot.removeAll(true);
          this._unsubscribeCollection();
        };

        Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
          if (this.collectionObserver) {
            this.collectionObserver.unsubscribe(this.callContext, this);
            this.collectionObserver = null;
            this.callContext = null;
          }
        };

        Repeat.prototype.itemsChanged = function itemsChanged() {
          this._unsubscribeCollection();

          if (!this.scope) {
            return;
          }

          var items = this.items;
          this.strategy = this.strategyLocator.getStrategy(items);
          if (!this.strategy) {
            throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
          }

          if (!this.isOneTime && !this._observeInnerCollection()) {
            this._observeCollection();
          }
          this.strategy.instanceChanged(this, items);
        };

        Repeat.prototype._getInnerCollection = function _getInnerCollection() {
          var expression = unwrapExpression(this.sourceExpression);
          if (!expression) {
            return null;
          }
          return expression.evaluate(this.scope, null);
        };

        Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
          if (!this.collectionObserver) {
            return;
          }
          this.strategy.instanceMutated(this, collection, changes);
        };

        Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
          var _this2 = this;

          if (!this.collectionObserver) {
            return;
          }

          if (this.ignoreMutation) {
            return;
          }
          this.ignoreMutation = true;
          var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
          this.observerLocator.taskQueue.queueMicroTask(function () {
            return _this2.ignoreMutation = false;
          });

          if (newItems === this.items) {
            this.itemsChanged();
          } else {
            this.items = newItems;
          }
        };

        Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
          var items = this._getInnerCollection();
          var strategy = this.strategyLocator.getStrategy(items);
          if (!strategy) {
            return false;
          }
          this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
          if (!this.collectionObserver) {
            return false;
          }
          this.callContext = 'handleInnerCollectionMutated';
          this.collectionObserver.subscribe(this.callContext, this);
          return true;
        };

        Repeat.prototype._observeCollection = function _observeCollection() {
          var items = this.items;
          this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
          if (this.collectionObserver) {
            this.callContext = 'handleCollectionMutated';
            this.collectionObserver.subscribe(this.callContext, this);
          }
        };

        Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
          if (this.viewFactory.viewFactory) {
            var instructions = this.viewFactory.viewFactory.instructions;
            var instructionIds = Object.keys(instructions);
            for (var i = 0; i < instructionIds.length; i++) {
              var expressions = instructions[instructionIds[i]].expressions;
              if (expressions) {
                for (var ii = 0; i < expressions.length; i++) {
                  if (expressions[ii].targetProperty === 'matcher') {
                    var matcherBinding = expressions[ii];
                    expressions.splice(ii, 1);
                    return matcherBinding;
                  }
                }
              }
            }
          }

          return undefined;
        };

        Repeat.prototype.viewCount = function viewCount() {
          return this.viewSlot.children.length;
        };

        Repeat.prototype.views = function views() {
          return this.viewSlot.children;
        };

        Repeat.prototype.view = function view(index) {
          return this.viewSlot.children[index];
        };

        Repeat.prototype.matcher = function matcher() {
          return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
        };

        Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
          var view = this.viewFactory.create();
          view.bind(bindingContext, overrideContext);
          this.viewSlot.add(view);
        };

        Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
          var view = this.viewFactory.create();
          view.bind(bindingContext, overrideContext);
          this.viewSlot.insert(index, view);
        };

        Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
          this.viewSlot.move(sourceIndex, targetIndex);
        };

        Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
          return this.viewSlot.removeAll(returnToCache, skipAnimation);
        };

        Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
          return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
        };

        Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
          return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
        };

        Repeat.prototype.updateBindings = function updateBindings(view) {
          var j = view.bindings.length;
          while (j--) {
            updateOneTimeBinding(view.bindings[j]);
          }
          j = view.controllers.length;
          while (j--) {
            var k = view.controllers[j].boundProperties.length;
            while (k--) {
              var binding = view.controllers[j].boundProperties[k].binding;
              updateOneTimeBinding(binding);
            }
          }
        };

        return Repeat;
      }(AbstractRepeater), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('Repeat', Repeat);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/show.js', ['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (_export, _context) {
  "use strict";

  var inject, Optional, customAttribute, Animator, DOM, injectAureliaHideStyleAtBoundary, aureliaHideClassName, _dec, _dec2, _class, Show;

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Optional = _aureliaDependencyInjection.Optional;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      Animator = _aureliaTemplating.Animator;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaHideStyle) {
      injectAureliaHideStyleAtBoundary = _aureliaHideStyle.injectAureliaHideStyleAtBoundary;
      aureliaHideClassName = _aureliaHideStyle.aureliaHideClassName;
    }],
    execute: function () {
      _export('Show', Show = (_dec = customAttribute('show'), _dec2 = inject(DOM.Element, Animator, Optional.of(DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
        function Show(element, animator, domBoundary) {

          this.element = element;
          this.animator = animator;
          this.domBoundary = domBoundary;
        }

        Show.prototype.created = function created() {
          injectAureliaHideStyleAtBoundary(this.domBoundary);
        };

        Show.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue) {
            this.animator.removeClass(this.element, aureliaHideClassName);
          } else {
            this.animator.addClass(this.element, aureliaHideClassName);
          }
        };

        Show.prototype.bind = function bind(bindingContext) {
          this.valueChanged(this.value);
        };

        return Show;
      }()) || _class) || _class));

      _export('Show', Show);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/hide.js', ['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (_export, _context) {
  "use strict";

  var inject, Optional, customAttribute, Animator, DOM, injectAureliaHideStyleAtBoundary, aureliaHideClassName, _dec, _dec2, _class, Hide;

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Optional = _aureliaDependencyInjection.Optional;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      Animator = _aureliaTemplating.Animator;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaHideStyle) {
      injectAureliaHideStyleAtBoundary = _aureliaHideStyle.injectAureliaHideStyleAtBoundary;
      aureliaHideClassName = _aureliaHideStyle.aureliaHideClassName;
    }],
    execute: function () {
      _export('Hide', Hide = (_dec = customAttribute('hide'), _dec2 = inject(DOM.Element, Animator, Optional.of(DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
        function Hide(element, animator, domBoundary) {

          this.element = element;
          this.animator = animator;
          this.domBoundary = domBoundary;
        }

        Hide.prototype.created = function created() {
          injectAureliaHideStyleAtBoundary(this.domBoundary);
        };

        Hide.prototype.valueChanged = function valueChanged(newValue) {
          if (newValue) {
            this.animator.addClass(this.element, aureliaHideClassName);
          } else {
            this.animator.removeClass(this.element, aureliaHideClassName);
          }
        };

        Hide.prototype.bind = function bind(bindingContext) {
          this.valueChanged(this.value);
        };

        return Hide;
      }()) || _class) || _class));

      _export('Hide', Hide);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/sanitize-html.js', ['aurelia-binding', 'aurelia-dependency-injection', './html-sanitizer'], function (_export, _context) {
  "use strict";

  var valueConverter, inject, HTMLSanitizer, _dec, _dec2, _class, SanitizeHTMLValueConverter;

  return {
    setters: [function (_aureliaBinding) {
      valueConverter = _aureliaBinding.valueConverter;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_htmlSanitizer) {
      HTMLSanitizer = _htmlSanitizer.HTMLSanitizer;
    }],
    execute: function () {
      _export('SanitizeHTMLValueConverter', SanitizeHTMLValueConverter = (_dec = valueConverter('sanitizeHTML'), _dec2 = inject(HTMLSanitizer), _dec(_class = _dec2(_class = function () {
        function SanitizeHTMLValueConverter(sanitizer) {

          this.sanitizer = sanitizer;
        }

        SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
          if (untrustedMarkup === null || untrustedMarkup === undefined) {
            return null;
          }

          return this.sanitizer.sanitize(untrustedMarkup);
        };

        return SanitizeHTMLValueConverter;
      }()) || _class) || _class));

      _export('SanitizeHTMLValueConverter', SanitizeHTMLValueConverter);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/replaceable.js', ['aurelia-dependency-injection', 'aurelia-templating'], function (_export, _context) {
  "use strict";

  var inject, BoundViewFactory, ViewSlot, customAttribute, templateController, _dec, _dec2, _class, Replaceable;

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      customAttribute = _aureliaTemplating.customAttribute;
      templateController = _aureliaTemplating.templateController;
    }],
    execute: function () {
      _export('Replaceable', Replaceable = (_dec = customAttribute('replaceable'), _dec2 = inject(BoundViewFactory, ViewSlot), _dec(_class = templateController(_class = _dec2(_class = function () {
        function Replaceable(viewFactory, viewSlot) {

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.view = null;
        }

        Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
          if (this.view === null) {
            this.view = this.viewFactory.create();
            this.viewSlot.add(this.view);
          }

          this.view.bind(bindingContext, overrideContext);
        };

        Replaceable.prototype.unbind = function unbind() {
          this.view.unbind();
        };

        return Replaceable;
      }()) || _class) || _class) || _class));

      _export('Replaceable', Replaceable);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/focus.js', ['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var customAttribute, bindingMode, inject, TaskQueue, DOM, _dec, _dec2, _class, Focus;

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('Focus', Focus = (_dec = customAttribute('focus', bindingMode.twoWay), _dec2 = inject(DOM.Element, TaskQueue), _dec(_class = _dec2(_class = function () {
        function Focus(element, taskQueue) {
          var _this = this;

          this.element = element;
          this.taskQueue = taskQueue;
          this.isAttached = false;
          this.needsApply = false;

          this.focusListener = function (e) {
            _this.value = true;
          };
          this.blurListener = function (e) {
            if (DOM.activeElement !== _this.element) {
              _this.value = false;
            }
          };
        }

        Focus.prototype.valueChanged = function valueChanged(newValue) {
          if (this.isAttached) {
            this._apply();
          } else {
            this.needsApply = true;
          }
        };

        Focus.prototype._apply = function _apply() {
          var _this2 = this;

          if (this.value) {
            this.taskQueue.queueMicroTask(function () {
              if (_this2.value) {
                _this2.element.focus();
              }
            });
          } else {
            this.element.blur();
          }
        };

        Focus.prototype.attached = function attached() {
          this.isAttached = true;
          if (this.needsApply) {
            this.needsApply = false;
            this._apply();
          }
          this.element.addEventListener('focus', this.focusListener);
          this.element.addEventListener('blur', this.blurListener);
        };

        Focus.prototype.detached = function detached() {
          this.isAttached = false;
          this.element.removeEventListener('focus', this.focusListener);
          this.element.removeEventListener('blur', this.blurListener);
        };

        return Focus;
      }()) || _class) || _class));

      _export('Focus', Focus);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/css-resource.js', ['aurelia-templating', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-path', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var ViewResources, resource, ViewCompileInstruction, Loader, Container, relativeToFile, DOM, FEATURE, cssUrlMatcher, CSSResource, CSSViewEngineHooks;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
      throw new Error('Failed loading required CSS file: ' + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
      var quote = p1.charAt(0);
      if (quote === '\'' || quote === '"') {
        p1 = p1.substr(1, p1.length - 2);
      }
      return 'url(\'' + relativeToFile(p1, address) + '\')';
    });
  }

  function _createCSSResource(address) {
    var _dec, _class;

    var ViewCSS = (_dec = resource(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
      _inherits(ViewCSS, _CSSViewEngineHooks);

      function ViewCSS() {

        return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
      }

      return ViewCSS;
    }(CSSViewEngineHooks)) || _class);

    return ViewCSS;
  }

  _export('_createCSSResource', _createCSSResource);

  return {
    setters: [function (_aureliaTemplating) {
      ViewResources = _aureliaTemplating.ViewResources;
      resource = _aureliaTemplating.resource;
      ViewCompileInstruction = _aureliaTemplating.ViewCompileInstruction;
    }, function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      FEATURE = _aureliaPal.FEATURE;
    }],
    execute: function () {
      cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

      CSSResource = function () {
        function CSSResource(address) {

          this.address = address;
          this._scoped = null;
          this._global = false;
          this._alreadyGloballyInjected = false;
        }

        CSSResource.prototype.initialize = function initialize(container, target) {
          this._scoped = new target(this);
        };

        CSSResource.prototype.register = function register(registry, name) {
          if (name === 'scoped') {
            registry.registerViewEngineHooks(this._scoped);
          } else {
            this._global = true;
          }
        };

        CSSResource.prototype.load = function load(container) {
          var _this = this;

          return container.get(Loader).loadText(this.address).catch(function (err) {
            return null;
          }).then(function (text) {
            text = fixupCSSUrls(_this.address, text);
            _this._scoped.css = text;
            if (_this._global) {
              _this._alreadyGloballyInjected = true;
              DOM.injectStyles(text);
            }
          });
        };

        return CSSResource;
      }();

      CSSViewEngineHooks = function () {
        function CSSViewEngineHooks(owner) {

          this.owner = owner;
          this.css = null;
        }

        CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
          if (instruction.targetShadowDOM) {
            DOM.injectStyles(this.css, content, true);
          } else if (FEATURE.scopedCSS) {
            var styleNode = DOM.injectStyles(this.css, content, true);
            styleNode.setAttribute('scoped', 'scoped');
          } else if (!this.owner._alreadyGloballyInjected) {
            DOM.injectStyles(this.css);
            this.owner._alreadyGloballyInjected = true;
          }
        };

        return CSSViewEngineHooks;
      }();
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/html-sanitizer.js', [], function (_export, _context) {
  "use strict";

  var SCRIPT_REGEX, HTMLSanitizer;

  return {
    setters: [],
    execute: function () {
      SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

      _export('HTMLSanitizer', HTMLSanitizer = function () {
        function HTMLSanitizer() {}

        HTMLSanitizer.prototype.sanitize = function sanitize(input) {
          return input.replace(SCRIPT_REGEX, '');
        };

        return HTMLSanitizer;
      }());

      _export('HTMLSanitizer', HTMLSanitizer);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/attr-binding-behavior.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var DataAttributeObserver, AttrBindingBehavior;

  return {
    setters: [function (_aureliaBinding) {
      DataAttributeObserver = _aureliaBinding.DataAttributeObserver;
    }],
    execute: function () {
      _export('AttrBindingBehavior', AttrBindingBehavior = function () {
        function AttrBindingBehavior() {}

        AttrBindingBehavior.prototype.bind = function bind(binding, source) {
          binding.targetObserver = new DataAttributeObserver(binding.target, binding.targetProperty);
        };

        AttrBindingBehavior.prototype.unbind = function unbind(binding, source) {};

        return AttrBindingBehavior;
      }());

      _export('AttrBindingBehavior', AttrBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/binding-mode-behaviors.js', ['aurelia-binding', 'aurelia-metadata'], function (_export, _context) {
  "use strict";

  var bindingMode, mixin, _dec, _class, _dec2, _class2, _dec3, _class3, modeBindingBehavior, OneTimeBindingBehavior, OneWayBindingBehavior, TwoWayBindingBehavior;

  return {
    setters: [function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaMetadata) {
      mixin = _aureliaMetadata.mixin;
    }],
    execute: function () {
      modeBindingBehavior = {
        bind: function bind(binding, source, lookupFunctions) {
          binding.originalMode = binding.mode;
          binding.mode = this.mode;
        },
        unbind: function unbind(binding, source) {
          binding.mode = binding.originalMode;
          binding.originalMode = null;
        }
      };

      _export('OneTimeBindingBehavior', OneTimeBindingBehavior = (_dec = mixin(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {

        this.mode = bindingMode.oneTime;
      }) || _class));

      _export('OneTimeBindingBehavior', OneTimeBindingBehavior);

      _export('OneWayBindingBehavior', OneWayBindingBehavior = (_dec2 = mixin(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {

        this.mode = bindingMode.oneWay;
      }) || _class2));

      _export('OneWayBindingBehavior', OneWayBindingBehavior);

      _export('TwoWayBindingBehavior', TwoWayBindingBehavior = (_dec3 = mixin(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {

        this.mode = bindingMode.twoWay;
      }) || _class3));

      _export('TwoWayBindingBehavior', TwoWayBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/throttle-binding-behavior.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var bindingMode, ThrottleBindingBehavior;

  function throttle(newValue) {
    var _this = this;

    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
      clearTimeout(state.timeoutId);
      state.timeoutId = null;
      state.last = +new Date();
      this.throttledMethod(newValue);
      return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
      state.timeoutId = setTimeout(function () {
        state.timeoutId = null;
        state.last = +new Date();
        _this.throttledMethod(state.newValue);
      }, state.delay - elapsed);
    }
  }

  return {
    setters: [function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      _export('ThrottleBindingBehavior', ThrottleBindingBehavior = function () {
        function ThrottleBindingBehavior() {}

        ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

          var methodToThrottle = 'updateTarget';
          if (binding.callSource) {
            methodToThrottle = 'callSource';
          } else if (binding.updateSource && binding.mode === bindingMode.twoWay) {
            methodToThrottle = 'updateSource';
          }

          binding.throttledMethod = binding[methodToThrottle];
          binding.throttledMethod.originalName = methodToThrottle;

          binding[methodToThrottle] = throttle;

          binding.throttleState = {
            delay: delay,
            last: 0,
            timeoutId: null
          };
        };

        ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
          var methodToRestore = binding.throttledMethod.originalName;
          binding[methodToRestore] = binding.throttledMethod;
          binding.throttledMethod = null;
          clearTimeout(binding.throttleState.timeoutId);
          binding.throttleState = null;
        };

        return ThrottleBindingBehavior;
      }());

      _export('ThrottleBindingBehavior', ThrottleBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/debounce-binding-behavior.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var bindingMode, DebounceBindingBehavior;

  function debounce(newValue) {
    var _this = this;

    var state = this.debounceState;
    if (state.immediate) {
      state.immediate = false;
      this.debouncedMethod(newValue);
      return;
    }
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () {
      return _this.debouncedMethod(newValue);
    }, state.delay);
  }

  return {
    setters: [function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      _export('DebounceBindingBehavior', DebounceBindingBehavior = function () {
        function DebounceBindingBehavior() {}

        DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

          var methodToDebounce = 'updateTarget';
          if (binding.callSource) {
            methodToDebounce = 'callSource';
          } else if (binding.updateSource && binding.mode === bindingMode.twoWay) {
            methodToDebounce = 'updateSource';
          }

          binding.debouncedMethod = binding[methodToDebounce];
          binding.debouncedMethod.originalName = methodToDebounce;

          binding[methodToDebounce] = debounce;

          binding.debounceState = {
            delay: delay,
            timeoutId: null,
            immediate: methodToDebounce === 'updateTarget' };
        };

        DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
          var methodToRestore = binding.debouncedMethod.originalName;
          binding[methodToRestore] = binding.debouncedMethod;
          binding.debouncedMethod = null;
          clearTimeout(binding.debounceState.timeoutId);
          binding.debounceState = null;
        };

        return DebounceBindingBehavior;
      }());

      _export('DebounceBindingBehavior', DebounceBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/self-binding-behavior.js', [], function (_export, _context) {
  "use strict";

  var SelfBindingBehavior;

  function findOriginalEventTarget(event) {
    return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
  }

  function handleSelfEvent(event) {
    var target = findOriginalEventTarget(event);
    if (this.target !== target) return;
    this.selfEventCallSource(event);
  }

  return {
    setters: [],
    execute: function () {
      _export('SelfBindingBehavior', SelfBindingBehavior = function () {
        function SelfBindingBehavior() {}

        SelfBindingBehavior.prototype.bind = function bind(binding, source) {
          if (!binding.callSource || !binding.targetEvent) throw new Error('Self binding behavior only supports event.');
          binding.selfEventCallSource = binding.callSource;
          binding.callSource = handleSelfEvent;
        };

        SelfBindingBehavior.prototype.unbind = function unbind(binding, source) {
          binding.callSource = binding.selfEventCallSource;
          binding.selfEventCallSource = null;
        };

        return SelfBindingBehavior;
      }());

      _export('SelfBindingBehavior', SelfBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/signal-binding-behavior.js', ['./binding-signaler'], function (_export, _context) {
  "use strict";

  var BindingSignaler, SignalBindingBehavior;

  return {
    setters: [function (_bindingSignaler) {
      BindingSignaler = _bindingSignaler.BindingSignaler;
    }],
    execute: function () {
      _export('SignalBindingBehavior', SignalBindingBehavior = function () {
        SignalBindingBehavior.inject = function inject() {
          return [BindingSignaler];
        };

        function SignalBindingBehavior(bindingSignaler) {

          this.signals = bindingSignaler.signals;
        }

        SignalBindingBehavior.prototype.bind = function bind(binding, source) {
          if (!binding.updateTarget) {
            throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
          }
          if (arguments.length === 3) {
            var name = arguments[2];
            var bindings = this.signals[name] || (this.signals[name] = []);
            bindings.push(binding);
            binding.signalName = name;
          } else if (arguments.length > 3) {
            var names = Array.prototype.slice.call(arguments, 2);
            var i = names.length;
            while (i--) {
              var _name = names[i];
              var _bindings = this.signals[_name] || (this.signals[_name] = []);
              _bindings.push(binding);
            }
            binding.signalName = names;
          } else {
            throw new Error('Signal name is required.');
          }
        };

        SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
          var name = binding.signalName;
          binding.signalName = null;
          if (Array.isArray(name)) {
            var names = name;
            var i = names.length;
            while (i--) {
              var n = names[i];
              var bindings = this.signals[n];
              bindings.splice(bindings.indexOf(binding), 1);
            }
          } else {
            var _bindings2 = this.signals[name];
            _bindings2.splice(_bindings2.indexOf(binding), 1);
          }
        };

        return SignalBindingBehavior;
      }());

      _export('SignalBindingBehavior', SignalBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/binding-signaler.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var sourceContext, BindingSignaler;

  return {
    setters: [function (_aureliaBinding) {
      sourceContext = _aureliaBinding.sourceContext;
    }],
    execute: function () {
      _export('BindingSignaler', BindingSignaler = function () {
        function BindingSignaler() {

          this.signals = {};
        }

        BindingSignaler.prototype.signal = function signal(name) {
          var bindings = this.signals[name];
          if (!bindings) {
            return;
          }
          var i = bindings.length;
          while (i--) {
            bindings[i].call(sourceContext);
          }
        };

        return BindingSignaler;
      }());

      _export('BindingSignaler', BindingSignaler);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/update-trigger-binding-behavior.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var bindingMode, EventManager, _class, _temp, eventNamesRequired, notApplicableMessage, UpdateTriggerBindingBehavior;

  return {
    setters: [function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
      EventManager = _aureliaBinding.EventManager;
    }],
    execute: function () {
      eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
      notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

      _export('UpdateTriggerBindingBehavior', UpdateTriggerBindingBehavior = (_temp = _class = function () {
        function UpdateTriggerBindingBehavior(eventManager) {

          this.eventManager = eventManager;
        }

        UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
          for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            events[_key - 2] = arguments[_key];
          }

          if (events.length === 0) {
            throw new Error(eventNamesRequired);
          }
          if (binding.mode !== bindingMode.twoWay) {
            throw new Error(notApplicableMessage);
          }

          var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
          if (!targetObserver.handler) {
            throw new Error(notApplicableMessage);
          }
          binding.targetObserver = targetObserver;

          targetObserver.originalHandler = binding.targetObserver.handler;

          var handler = this.eventManager.createElementHandler(events);
          targetObserver.handler = handler;
        };

        UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
          binding.targetObserver.handler = binding.targetObserver.originalHandler;
          binding.targetObserver.originalHandler = null;
        };

        return UpdateTriggerBindingBehavior;
      }(), _class.inject = [EventManager], _temp));

      _export('UpdateTriggerBindingBehavior', UpdateTriggerBindingBehavior);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/abstract-repeater.js', [], function (_export, _context) {
  "use strict";

  var AbstractRepeater;

  return {
    setters: [],
    execute: function () {
      _export('AbstractRepeater', AbstractRepeater = function () {
        function AbstractRepeater(options) {

          Object.assign(this, {
            local: 'items',
            viewsRequireLifecycle: true
          }, options);
        }

        AbstractRepeater.prototype.viewCount = function viewCount() {
          throw new Error('subclass must implement `viewCount`');
        };

        AbstractRepeater.prototype.views = function views() {
          throw new Error('subclass must implement `views`');
        };

        AbstractRepeater.prototype.view = function view(index) {
          throw new Error('subclass must implement `view`');
        };

        AbstractRepeater.prototype.matcher = function matcher() {
          throw new Error('subclass must implement `matcher`');
        };

        AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
          throw new Error('subclass must implement `addView`');
        };

        AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
          throw new Error('subclass must implement `insertView`');
        };

        AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
          throw new Error('subclass must implement `moveView`');
        };

        AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
          throw new Error('subclass must implement `removeAllViews`');
        };

        AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
          throw new Error('subclass must implement `removeView`');
        };

        AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
          throw new Error('subclass must implement `removeView`');
        };

        AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
          throw new Error('subclass must implement `updateBindings`');
        };

        return AbstractRepeater;
      }());

      _export('AbstractRepeater', AbstractRepeater);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/repeat-strategy-locator.js', ['./null-repeat-strategy', './array-repeat-strategy', './map-repeat-strategy', './set-repeat-strategy', './number-repeat-strategy'], function (_export, _context) {
  "use strict";

  var NullRepeatStrategy, ArrayRepeatStrategy, MapRepeatStrategy, SetRepeatStrategy, NumberRepeatStrategy, RepeatStrategyLocator;

  return {
    setters: [function (_nullRepeatStrategy) {
      NullRepeatStrategy = _nullRepeatStrategy.NullRepeatStrategy;
    }, function (_arrayRepeatStrategy) {
      ArrayRepeatStrategy = _arrayRepeatStrategy.ArrayRepeatStrategy;
    }, function (_mapRepeatStrategy) {
      MapRepeatStrategy = _mapRepeatStrategy.MapRepeatStrategy;
    }, function (_setRepeatStrategy) {
      SetRepeatStrategy = _setRepeatStrategy.SetRepeatStrategy;
    }, function (_numberRepeatStrategy) {
      NumberRepeatStrategy = _numberRepeatStrategy.NumberRepeatStrategy;
    }],
    execute: function () {
      _export('RepeatStrategyLocator', RepeatStrategyLocator = function () {
        function RepeatStrategyLocator() {

          this.matchers = [];
          this.strategies = [];

          this.addStrategy(function (items) {
            return items === null || items === undefined;
          }, new NullRepeatStrategy());
          this.addStrategy(function (items) {
            return items instanceof Array;
          }, new ArrayRepeatStrategy());
          this.addStrategy(function (items) {
            return items instanceof Map;
          }, new MapRepeatStrategy());
          this.addStrategy(function (items) {
            return items instanceof Set;
          }, new SetRepeatStrategy());
          this.addStrategy(function (items) {
            return typeof items === 'number';
          }, new NumberRepeatStrategy());
        }

        RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
          this.matchers.push(matcher);
          this.strategies.push(strategy);
        };

        RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
          var matchers = this.matchers;

          for (var i = 0, ii = matchers.length; i < ii; ++i) {
            if (matchers[i](items)) {
              return this.strategies[i];
            }
          }

          return null;
        };

        return RepeatStrategyLocator;
      }());

      _export('RepeatStrategyLocator', RepeatStrategyLocator);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/dynamic-element.js', ['aurelia-templating'], function (_export, _context) {
  "use strict";

  var useView, customElement, bindable;

  function _createDynamicElement(name, viewUrl, bindableNames) {
    var _dec, _dec2, _class;

    var DynamicElement = (_dec = customElement(name), _dec2 = useView(viewUrl), _dec(_class = _dec2(_class = function () {
      function DynamicElement() {}

      DynamicElement.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      return DynamicElement;
    }()) || _class) || _class);

    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
      bindable(bindableNames[i])(DynamicElement);
    }
    return DynamicElement;
  }

  _export('_createDynamicElement', _createDynamicElement);

  return {
    setters: [function (_aureliaTemplating) {
      useView = _aureliaTemplating.useView;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }],
    execute: function () {}
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/html-resource-plugin.js', ['aurelia-templating', './dynamic-element'], function (_export, _context) {
  "use strict";

  var ViewEngine, _createDynamicElement;

  function getElementName(address) {
    return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
    );
  }

  _export('getElementName', getElementName);

  function configure(config) {
    var viewEngine = config.container.get(ViewEngine);
    var loader = config.aurelia.loader;

    viewEngine.addResourcePlugin('.html', {
      'fetch': function fetch(address) {
        return loader.loadTemplate(address).then(function (registryEntry) {
          var _ref;

          var bindable = registryEntry.template.getAttribute('bindable');
          var elementName = getElementName(address);

          if (bindable) {
            bindable = bindable.split(',').map(function (x) {
              return x.trim();
            });
            registryEntry.template.removeAttribute('bindable');
          } else {
            bindable = [];
          }

          return _ref = {}, _ref[elementName] = _createDynamicElement(elementName, address, bindable), _ref;
        });
      }
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaTemplating) {
      ViewEngine = _aureliaTemplating.ViewEngine;
    }, function (_dynamicElement) {
      _createDynamicElement = _dynamicElement._createDynamicElement;
    }],
    execute: function () {}
  };
});
"use strict";

System.register("node_modules/aurelia-templating-resources/dist/system/null-repeat-strategy.js", [], function (_export, _context) {
  "use strict";

  var NullRepeatStrategy;

  return {
    setters: [],
    execute: function () {
      _export("NullRepeatStrategy", NullRepeatStrategy = function () {
        function NullRepeatStrategy() {}

        NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
          repeat.removeAllViews(true);
        };

        NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

        return NullRepeatStrategy;
      }());

      _export("NullRepeatStrategy", NullRepeatStrategy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/array-repeat-strategy.js', ['./repeat-utilities', 'aurelia-binding'], function (_export, _context) {
  "use strict";

  var createFullOverrideContext, updateOverrideContexts, updateOverrideContext, indexOf, mergeSplice, ArrayRepeatStrategy;

  return {
    setters: [function (_repeatUtilities) {
      createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
      updateOverrideContexts = _repeatUtilities.updateOverrideContexts;
      updateOverrideContext = _repeatUtilities.updateOverrideContext;
      indexOf = _repeatUtilities.indexOf;
    }, function (_aureliaBinding) {
      mergeSplice = _aureliaBinding.mergeSplice;
    }],
    execute: function () {
      _export('ArrayRepeatStrategy', ArrayRepeatStrategy = function () {
        function ArrayRepeatStrategy() {}

        ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
          return observerLocator.getArrayObserver(items);
        };

        ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
          var _this = this;

          var itemsLength = items.length;

          if (!items || itemsLength === 0) {
            repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            return;
          }

          var children = repeat.views();
          var viewsLength = children.length;

          if (viewsLength === 0) {
            this._standardProcessInstanceChanged(repeat, items);
            return;
          }

          if (repeat.viewsRequireLifecycle) {
            (function () {
              var childrenSnapshot = children.slice(0);
              var itemNameInBindingContext = repeat.local;
              var matcher = repeat.matcher();

              var itemsPreviouslyInViews = [];
              var viewsToRemove = [];

              for (var index = 0; index < viewsLength; index++) {
                var view = childrenSnapshot[index];
                var oldItem = view.bindingContext[itemNameInBindingContext];

                if (indexOf(items, oldItem, matcher) === -1) {
                  viewsToRemove.push(view);
                } else {
                  itemsPreviouslyInViews.push(oldItem);
                }
              }

              var updateViews = void 0;
              var removePromise = void 0;

              if (itemsPreviouslyInViews.length > 0) {
                removePromise = repeat.removeViews(viewsToRemove, true, !repeat.viewsRequireLifecycle);
                updateViews = function updateViews() {
                  for (var _index = 0; _index < itemsLength; _index++) {
                    var item = items[_index];
                    var indexOfView = indexOf(itemsPreviouslyInViews, item, matcher, _index);
                    var _view = void 0;

                    if (indexOfView === -1) {
                      var overrideContext = createFullOverrideContext(repeat, items[_index], _index, itemsLength);
                      repeat.insertView(_index, overrideContext.bindingContext, overrideContext);

                      itemsPreviouslyInViews.splice(_index, 0, undefined);
                    } else if (indexOfView === _index) {
                      _view = children[indexOfView];
                      itemsPreviouslyInViews[indexOfView] = undefined;
                    } else {
                      _view = children[indexOfView];
                      repeat.moveView(indexOfView, _index);
                      itemsPreviouslyInViews.splice(indexOfView, 1);
                      itemsPreviouslyInViews.splice(_index, 0, undefined);
                    }

                    if (_view) {
                      updateOverrideContext(_view.overrideContext, _index, itemsLength);
                    }
                  }

                  _this._inPlaceProcessItems(repeat, items);
                };
              } else {
                removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                updateViews = function updateViews() {
                  return _this._standardProcessInstanceChanged(repeat, items);
                };
              }

              if (removePromise instanceof Promise) {
                removePromise.then(updateViews);
              } else {
                updateViews();
              }
            })();
          } else {
            this._inPlaceProcessItems(repeat, items);
          }
        };

        ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
          for (var i = 0, ii = items.length; i < ii; i++) {
            var overrideContext = createFullOverrideContext(repeat, items[i], i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
          }
        };

        ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
          var itemsLength = items.length;
          var viewsLength = repeat.viewCount();

          while (viewsLength > itemsLength) {
            viewsLength--;
            repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
          }

          var local = repeat.local;

          for (var i = 0; i < viewsLength; i++) {
            var view = repeat.view(i);
            var last = i === itemsLength - 1;
            var middle = i !== 0 && !last;

            if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
              continue;
            }

            view.bindingContext[local] = items[i];
            view.overrideContext.$middle = middle;
            view.overrideContext.$last = last;
            repeat.updateBindings(view);
          }

          for (var _i = viewsLength; _i < itemsLength; _i++) {
            var overrideContext = createFullOverrideContext(repeat, items[_i], _i, itemsLength);
            repeat.addView(overrideContext.bindingContext, overrideContext);
          }
        };

        ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
          var _this2 = this;

          if (repeat.__queuedSplices) {
            for (var i = 0, ii = splices.length; i < ii; ++i) {
              var _splices$i = splices[i],
                  index = _splices$i.index,
                  removed = _splices$i.removed,
                  addedCount = _splices$i.addedCount;

              mergeSplice(repeat.__queuedSplices, index, removed, addedCount);
            }

            repeat.__array = array.slice(0);
            return;
          }

          var maybePromise = this._runSplices(repeat, array.slice(0), splices);
          if (maybePromise instanceof Promise) {
            (function () {
              var queuedSplices = repeat.__queuedSplices = [];

              var runQueuedSplices = function runQueuedSplices() {
                if (!queuedSplices.length) {
                  repeat.__queuedSplices = undefined;
                  repeat.__array = undefined;
                  return;
                }

                var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
                queuedSplices = repeat.__queuedSplices = [];
                nextPromise.then(runQueuedSplices);
              };

              maybePromise.then(runQueuedSplices);
            })();
          }
        };

        ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
          var _this3 = this;

          var removeDelta = 0;
          var rmPromises = [];

          for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var removed = splice.removed;

            for (var j = 0, jj = removed.length; j < jj; ++j) {
              var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
              if (viewOrPromise instanceof Promise) {
                rmPromises.push(viewOrPromise);
              }
            }
            removeDelta -= splice.addedCount;
          }

          if (rmPromises.length > 0) {
            return Promise.all(rmPromises).then(function () {
              var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
              updateOverrideContexts(repeat.views(), spliceIndexLow);
            });
          }

          var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
          updateOverrideContexts(repeat.views(), spliceIndexLow);

          return undefined;
        };

        ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
          var spliceIndex = void 0;
          var spliceIndexLow = void 0;
          var arrayLength = array.length;
          for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var addIndex = spliceIndex = splice.index;
            var end = splice.index + splice.addedCount;

            if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
              spliceIndexLow = spliceIndex;
            }

            for (; addIndex < end; ++addIndex) {
              var overrideContext = createFullOverrideContext(repeat, array[addIndex], addIndex, arrayLength);
              repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
            }
          }

          return spliceIndexLow;
        };

        return ArrayRepeatStrategy;
      }());

      _export('ArrayRepeatStrategy', ArrayRepeatStrategy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/map-repeat-strategy.js', ['./repeat-utilities'], function (_export, _context) {
  "use strict";

  var createFullOverrideContext, updateOverrideContexts, MapRepeatStrategy;

  return {
    setters: [function (_repeatUtilities) {
      createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
      updateOverrideContexts = _repeatUtilities.updateOverrideContexts;
    }],
    execute: function () {
      _export('MapRepeatStrategy', MapRepeatStrategy = function () {
        function MapRepeatStrategy() {}

        MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
          return observerLocator.getMapObserver(items);
        };

        MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
          var _this = this;

          var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
          if (removePromise instanceof Promise) {
            removePromise.then(function () {
              return _this._standardProcessItems(repeat, items);
            });
            return;
          }
          this._standardProcessItems(repeat, items);
        };

        MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
          var index = 0;
          var overrideContext = void 0;

          items.forEach(function (value, key) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size, key);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
          });
        };

        MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
          var key = void 0;
          var i = void 0;
          var ii = void 0;
          var overrideContext = void 0;
          var removeIndex = void 0;
          var record = void 0;
          var rmPromises = [];
          var viewOrPromise = void 0;

          for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            key = record.key;
            switch (record.type) {
              case 'update':
                removeIndex = this._getViewIndexByKey(repeat, key);
                viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                if (viewOrPromise instanceof Promise) {
                  rmPromises.push(viewOrPromise);
                }
                overrideContext = createFullOverrideContext(repeat, map.get(key), removeIndex, map.size, key);
                repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
                break;
              case 'add':
                overrideContext = createFullOverrideContext(repeat, map.get(key), map.size - 1, map.size, key);
                repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
                break;
              case 'delete':
                if (record.oldValue === undefined) {
                  return;
                }
                removeIndex = this._getViewIndexByKey(repeat, key);
                viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                if (viewOrPromise instanceof Promise) {
                  rmPromises.push(viewOrPromise);
                }
                break;
              case 'clear':
                repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                break;
              default:
                continue;
            }
          }

          if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
              updateOverrideContexts(repeat.views(), 0);
            });
          } else {
            updateOverrideContexts(repeat.views(), 0);
          }
        };

        MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
          var i = void 0;
          var ii = void 0;
          var child = void 0;

          for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.key] === key) {
              return i;
            }
          }

          return undefined;
        };

        return MapRepeatStrategy;
      }());

      _export('MapRepeatStrategy', MapRepeatStrategy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/set-repeat-strategy.js', ['./repeat-utilities'], function (_export, _context) {
  "use strict";

  var createFullOverrideContext, updateOverrideContexts, SetRepeatStrategy;

  return {
    setters: [function (_repeatUtilities) {
      createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
      updateOverrideContexts = _repeatUtilities.updateOverrideContexts;
    }],
    execute: function () {
      _export('SetRepeatStrategy', SetRepeatStrategy = function () {
        function SetRepeatStrategy() {}

        SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
          return observerLocator.getSetObserver(items);
        };

        SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
          var _this = this;

          var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
          if (removePromise instanceof Promise) {
            removePromise.then(function () {
              return _this._standardProcessItems(repeat, items);
            });
            return;
          }
          this._standardProcessItems(repeat, items);
        };

        SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
          var index = 0;
          var overrideContext = void 0;

          items.forEach(function (value) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
          });
        };

        SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
          var value = void 0;
          var i = void 0;
          var ii = void 0;
          var overrideContext = void 0;
          var removeIndex = void 0;
          var record = void 0;
          var rmPromises = [];
          var viewOrPromise = void 0;

          for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            value = record.value;
            switch (record.type) {
              case 'add':
                overrideContext = createFullOverrideContext(repeat, value, set.size - 1, set.size);
                repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
                break;
              case 'delete':
                removeIndex = this._getViewIndexByValue(repeat, value);
                viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                if (viewOrPromise instanceof Promise) {
                  rmPromises.push(viewOrPromise);
                }
                break;
              case 'clear':
                repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                break;
              default:
                continue;
            }
          }

          if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
              updateOverrideContexts(repeat.views(), 0);
            });
          } else {
            updateOverrideContexts(repeat.views(), 0);
          }
        };

        SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
          var i = void 0;
          var ii = void 0;
          var child = void 0;

          for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.local] === value) {
              return i;
            }
          }

          return undefined;
        };

        return SetRepeatStrategy;
      }());

      _export('SetRepeatStrategy', SetRepeatStrategy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/number-repeat-strategy.js', ['./repeat-utilities'], function (_export, _context) {
  "use strict";

  var createFullOverrideContext, updateOverrideContexts, NumberRepeatStrategy;

  return {
    setters: [function (_repeatUtilities) {
      createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
      updateOverrideContexts = _repeatUtilities.updateOverrideContexts;
    }],
    execute: function () {
      _export('NumberRepeatStrategy', NumberRepeatStrategy = function () {
        function NumberRepeatStrategy() {}

        NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
          return null;
        };

        NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
          var _this = this;

          var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
          if (removePromise instanceof Promise) {
            removePromise.then(function () {
              return _this._standardProcessItems(repeat, value);
            });
            return;
          }
          this._standardProcessItems(repeat, value);
        };

        NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
          var childrenLength = repeat.viewCount();
          var i = void 0;
          var ii = void 0;
          var overrideContext = void 0;
          var viewsToRemove = void 0;

          value = Math.floor(value);
          viewsToRemove = childrenLength - value;

          if (viewsToRemove > 0) {
            if (viewsToRemove > childrenLength) {
              viewsToRemove = childrenLength;
            }

            for (i = 0, ii = viewsToRemove; i < ii; ++i) {
              repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
            }

            return;
          }

          for (i = childrenLength, ii = value; i < ii; ++i) {
            overrideContext = createFullOverrideContext(repeat, i, i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
          }

          updateOverrideContexts(repeat.views(), 0);
        };

        return NumberRepeatStrategy;
      }());

      _export('NumberRepeatStrategy', NumberRepeatStrategy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/repeat-utilities.js', ['aurelia-binding'], function (_export, _context) {
  "use strict";

  var createOverrideContext, BindingBehavior, ValueConverter, sourceContext, bindingMode, oneTime;
  function updateOverrideContexts(views, startIndex) {
    var length = views.length;

    if (startIndex > 0) {
      startIndex = startIndex - 1;
    }

    for (; startIndex < length; ++startIndex) {
      updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
  }

  _export('updateOverrideContexts', updateOverrideContexts);

  function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = createOverrideContext(bindingContext, repeat.scope.overrideContext);

    if (typeof key !== 'undefined') {
      bindingContext[repeat.key] = key;
      bindingContext[repeat.value] = data;
    } else {
      bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
  }

  _export('createFullOverrideContext', createFullOverrideContext);

  function updateOverrideContext(overrideContext, index, length) {
    var first = index === 0;
    var last = index === length - 1;
    var even = index % 2 === 0;

    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
  }

  _export('updateOverrideContext', updateOverrideContext);

  function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions.filter(function (bi) {
      return bi.originalAttrName === attrName;
    })[0].attributes.items.sourceExpression;
  }

  _export('getItemsSourceExpression', getItemsSourceExpression);

  function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof BindingBehavior) {
      expression = expression.expression;
    }
    while (expression instanceof ValueConverter) {
      expression = expression.expression;
      unwrapped = true;
    }
    return unwrapped ? expression : null;
  }

  _export('unwrapExpression', unwrapExpression);

  function isOneTime(expression) {
    while (expression instanceof BindingBehavior) {
      if (expression.name === 'oneTime') {
        return true;
      }
      expression = expression.expression;
    }
    return false;
  }

  _export('isOneTime', isOneTime);

  function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
      binding.call(sourceContext);
    } else if (binding.updateOneTimeBindings) {
      binding.updateOneTimeBindings();
    }
  }

  _export('updateOneTimeBinding', updateOneTimeBinding);

  function indexOf(array, item, matcher, startIndex) {
    if (!matcher) {
      return array.indexOf(item);
    }
    var length = array.length;
    for (var index = startIndex || 0; index < length; index++) {
      if (matcher(array[index], item)) {
        return index;
      }
    }
    return -1;
  }

  _export('indexOf', indexOf);

  return {
    setters: [function (_aureliaBinding) {
      createOverrideContext = _aureliaBinding.createOverrideContext;
      BindingBehavior = _aureliaBinding.BindingBehavior;
      ValueConverter = _aureliaBinding.ValueConverter;
      sourceContext = _aureliaBinding.sourceContext;
      bindingMode = _aureliaBinding.bindingMode;
    }],
    execute: function () {
      oneTime = bindingMode.oneTime;
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/analyze-view-factory.js', [], function (_export, _context) {
  "use strict";

  var lifecycleOptionalBehaviors;

  function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
      var i = behaviors.length;
      while (i--) {
        if (behaviorRequiresLifecycle(behaviors[i])) {
          return true;
        }
      }
    }

    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
      return viewFactory._viewsRequireLifecycle;
    }

    viewFactory._viewsRequireLifecycle = false;

    if (viewFactory.viewFactory) {
      viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
      return viewFactory._viewsRequireLifecycle;
    }

    if (viewFactory.template.querySelector('.au-animate')) {
      viewFactory._viewsRequireLifecycle = true;
      return true;
    }

    for (var id in viewFactory.instructions) {
      if (targetRequiresLifecycle(viewFactory.instructions[id])) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
      }
    }

    viewFactory._viewsRequireLifecycle = false;
    return false;
  }

  _export('viewsRequireLifecycle', viewsRequireLifecycle);

  return {
    setters: [],
    execute: function () {
      _export('lifecycleOptionalBehaviors', lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with']);

      _export('lifecycleOptionalBehaviors', lifecycleOptionalBehaviors);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/aurelia-hide-style.js', ['aurelia-pal'], function (_export, _context) {
  "use strict";

  var FEATURE, DOM, aureliaHideClassName, aureliaHideClass;
  function injectAureliaHideStyleAtHead() {
    DOM.injectStyles(aureliaHideClass);
  }

  _export('injectAureliaHideStyleAtHead', injectAureliaHideStyleAtHead);

  function injectAureliaHideStyleAtBoundary(domBoundary) {
    if (FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
      domBoundary.hasAureliaHideStyle = true;
      DOM.injectStyles(aureliaHideClass, domBoundary);
    }
  }

  _export('injectAureliaHideStyleAtBoundary', injectAureliaHideStyleAtBoundary);

  return {
    setters: [function (_aureliaPal) {
      FEATURE = _aureliaPal.FEATURE;
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('aureliaHideClassName', aureliaHideClassName = 'aurelia-hide');

      _export('aureliaHideClassName', aureliaHideClassName);

      aureliaHideClass = '.' + aureliaHideClassName + ' { display:none !important; }';
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-resources/dist/system/aurelia-templating-resources.js', ['aurelia-pal', './compose', './if', './with', './repeat', './show', './hide', './sanitize-html', './replaceable', './focus', 'aurelia-templating', './css-resource', './html-sanitizer', './attr-binding-behavior', './binding-mode-behaviors', './throttle-binding-behavior', './debounce-binding-behavior', './self-binding-behavior', './signal-binding-behavior', './binding-signaler', './update-trigger-binding-behavior', './abstract-repeater', './repeat-strategy-locator', './html-resource-plugin', './null-repeat-strategy', './array-repeat-strategy', './map-repeat-strategy', './set-repeat-strategy', './number-repeat-strategy', './repeat-utilities', './analyze-view-factory', './aurelia-hide-style'], function (_export, _context) {
  "use strict";

  var PLATFORM, Compose, If, With, Repeat, Show, Hide, SanitizeHTMLValueConverter, Replaceable, Focus, ViewEngine, _createCSSResource, HTMLSanitizer, AttrBindingBehavior, OneTimeBindingBehavior, OneWayBindingBehavior, TwoWayBindingBehavior, ThrottleBindingBehavior, DebounceBindingBehavior, SelfBindingBehavior, SignalBindingBehavior, BindingSignaler, UpdateTriggerBindingBehavior, AbstractRepeater, RepeatStrategyLocator, configureHtmlResourcePlugin, NullRepeatStrategy, ArrayRepeatStrategy, MapRepeatStrategy, SetRepeatStrategy, NumberRepeatStrategy, createFullOverrideContext, updateOverrideContext, getItemsSourceExpression, isOneTime, updateOneTimeBinding, unwrapExpression, viewsRequireLifecycle, injectAureliaHideStyleAtHead;

  function configure(config) {
    injectAureliaHideStyleAtHead();

    config.globalResources(PLATFORM.moduleName('./compose'), PLATFORM.moduleName('./if'), PLATFORM.moduleName('./with'), PLATFORM.moduleName('./repeat'), PLATFORM.moduleName('./show'), PLATFORM.moduleName('./hide'), PLATFORM.moduleName('./replaceable'), PLATFORM.moduleName('./sanitize-html'), PLATFORM.moduleName('./focus'), PLATFORM.moduleName('./binding-mode-behaviors'), PLATFORM.moduleName('./self-binding-behavior'), PLATFORM.moduleName('./throttle-binding-behavior'), PLATFORM.moduleName('./debounce-binding-behavior'), PLATFORM.moduleName('./signal-binding-behavior'), PLATFORM.moduleName('./update-trigger-binding-behavior'), PLATFORM.moduleName('./attr-binding-behavior'));

    configureHtmlResourcePlugin(config);

    var viewEngine = config.container.get(ViewEngine);
    var styleResourcePlugin = {
      fetch: function fetch(address) {
        var _ref;

        return _ref = {}, _ref[address] = _createCSSResource(address), _ref;
      }
    };
    ['.css', '.less', '.sass', '.scss', '.styl'].forEach(function (ext) {
      return viewEngine.addResourcePlugin(ext, styleResourcePlugin);
    });
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_compose) {
      Compose = _compose.Compose;
    }, function (_if) {
      If = _if.If;
    }, function (_with) {
      With = _with.With;
    }, function (_repeat) {
      Repeat = _repeat.Repeat;
    }, function (_show) {
      Show = _show.Show;
    }, function (_hide) {
      Hide = _hide.Hide;
    }, function (_sanitizeHtml) {
      SanitizeHTMLValueConverter = _sanitizeHtml.SanitizeHTMLValueConverter;
    }, function (_replaceable) {
      Replaceable = _replaceable.Replaceable;
    }, function (_focus) {
      Focus = _focus.Focus;
    }, function (_aureliaTemplating) {
      ViewEngine = _aureliaTemplating.ViewEngine;
    }, function (_cssResource) {
      _createCSSResource = _cssResource._createCSSResource;
    }, function (_htmlSanitizer) {
      HTMLSanitizer = _htmlSanitizer.HTMLSanitizer;
    }, function (_attrBindingBehavior) {
      AttrBindingBehavior = _attrBindingBehavior.AttrBindingBehavior;
    }, function (_bindingModeBehaviors) {
      OneTimeBindingBehavior = _bindingModeBehaviors.OneTimeBindingBehavior;
      OneWayBindingBehavior = _bindingModeBehaviors.OneWayBindingBehavior;
      TwoWayBindingBehavior = _bindingModeBehaviors.TwoWayBindingBehavior;
    }, function (_throttleBindingBehavior) {
      ThrottleBindingBehavior = _throttleBindingBehavior.ThrottleBindingBehavior;
    }, function (_debounceBindingBehavior) {
      DebounceBindingBehavior = _debounceBindingBehavior.DebounceBindingBehavior;
    }, function (_selfBindingBehavior) {
      SelfBindingBehavior = _selfBindingBehavior.SelfBindingBehavior;
    }, function (_signalBindingBehavior) {
      SignalBindingBehavior = _signalBindingBehavior.SignalBindingBehavior;
    }, function (_bindingSignaler) {
      BindingSignaler = _bindingSignaler.BindingSignaler;
    }, function (_updateTriggerBindingBehavior) {
      UpdateTriggerBindingBehavior = _updateTriggerBindingBehavior.UpdateTriggerBindingBehavior;
    }, function (_abstractRepeater) {
      AbstractRepeater = _abstractRepeater.AbstractRepeater;
    }, function (_repeatStrategyLocator) {
      RepeatStrategyLocator = _repeatStrategyLocator.RepeatStrategyLocator;
    }, function (_htmlResourcePlugin) {
      configureHtmlResourcePlugin = _htmlResourcePlugin.configure;
    }, function (_nullRepeatStrategy) {
      NullRepeatStrategy = _nullRepeatStrategy.NullRepeatStrategy;
    }, function (_arrayRepeatStrategy) {
      ArrayRepeatStrategy = _arrayRepeatStrategy.ArrayRepeatStrategy;
    }, function (_mapRepeatStrategy) {
      MapRepeatStrategy = _mapRepeatStrategy.MapRepeatStrategy;
    }, function (_setRepeatStrategy) {
      SetRepeatStrategy = _setRepeatStrategy.SetRepeatStrategy;
    }, function (_numberRepeatStrategy) {
      NumberRepeatStrategy = _numberRepeatStrategy.NumberRepeatStrategy;
    }, function (_repeatUtilities) {
      createFullOverrideContext = _repeatUtilities.createFullOverrideContext;
      updateOverrideContext = _repeatUtilities.updateOverrideContext;
      getItemsSourceExpression = _repeatUtilities.getItemsSourceExpression;
      isOneTime = _repeatUtilities.isOneTime;
      updateOneTimeBinding = _repeatUtilities.updateOneTimeBinding;
      unwrapExpression = _repeatUtilities.unwrapExpression;
    }, function (_analyzeViewFactory) {
      viewsRequireLifecycle = _analyzeViewFactory.viewsRequireLifecycle;
    }, function (_aureliaHideStyle) {
      injectAureliaHideStyleAtHead = _aureliaHideStyle.injectAureliaHideStyleAtHead;
    }],
    execute: function () {
      _export('Compose', Compose);

      _export('If', If);

      _export('With', With);

      _export('Repeat', Repeat);

      _export('Show', Show);

      _export('Hide', Hide);

      _export('HTMLSanitizer', HTMLSanitizer);

      _export('SanitizeHTMLValueConverter', SanitizeHTMLValueConverter);

      _export('Replaceable', Replaceable);

      _export('Focus', Focus);

      _export('configure', configure);

      _export('AttrBindingBehavior', AttrBindingBehavior);

      _export('OneTimeBindingBehavior', OneTimeBindingBehavior);

      _export('OneWayBindingBehavior', OneWayBindingBehavior);

      _export('TwoWayBindingBehavior', TwoWayBindingBehavior);

      _export('ThrottleBindingBehavior', ThrottleBindingBehavior);

      _export('DebounceBindingBehavior', DebounceBindingBehavior);

      _export('SelfBindingBehavior', SelfBindingBehavior);

      _export('SignalBindingBehavior', SignalBindingBehavior);

      _export('BindingSignaler', BindingSignaler);

      _export('UpdateTriggerBindingBehavior', UpdateTriggerBindingBehavior);

      _export('AbstractRepeater', AbstractRepeater);

      _export('RepeatStrategyLocator', RepeatStrategyLocator);

      _export('NullRepeatStrategy', NullRepeatStrategy);

      _export('ArrayRepeatStrategy', ArrayRepeatStrategy);

      _export('MapRepeatStrategy', MapRepeatStrategy);

      _export('SetRepeatStrategy', SetRepeatStrategy);

      _export('NumberRepeatStrategy', NumberRepeatStrategy);

      _export('createFullOverrideContext', createFullOverrideContext);

      _export('updateOverrideContext', updateOverrideContext);

      _export('getItemsSourceExpression', getItemsSourceExpression);

      _export('isOneTime', isOneTime);

      _export('updateOneTimeBinding', updateOneTimeBinding);

      _export('unwrapExpression', unwrapExpression);

      _export('viewsRequireLifecycle', viewsRequireLifecycle);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-router/dist/system/route-loader.js', ['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-path', 'aurelia-metadata', './router-view'], function (_export, _context) {
  "use strict";

  var inject, CompositionEngine, useView, customElement, RouteLoader, Router, relativeToFile, Origin, RouterViewLocator, _dec, _class, TemplatingRouteLoader;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function createDynamicClass(moduleId) {
    var _dec2, _dec3, _class2;

    var name = /([^\/^\?]+)\.html/i.exec(moduleId)[1];

    var DynamicClass = (_dec2 = customElement(name), _dec3 = useView(moduleId), _dec2(_class2 = _dec3(_class2 = function () {
      function DynamicClass() {}

      DynamicClass.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      return DynamicClass;
    }()) || _class2) || _class2);

    return DynamicClass;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      useView = _aureliaTemplating.useView;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaRouter) {
      RouteLoader = _aureliaRouter.RouteLoader;
      Router = _aureliaRouter.Router;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function (_routerView) {
      RouterViewLocator = _routerView.RouterViewLocator;
    }],
    execute: function () {
      _export('TemplatingRouteLoader', TemplatingRouteLoader = (_dec = inject(CompositionEngine), _dec(_class = function (_RouteLoader) {
        _inherits(TemplatingRouteLoader, _RouteLoader);

        function TemplatingRouteLoader(compositionEngine) {

          var _this = _possibleConstructorReturn(this, _RouteLoader.call(this));

          _this.compositionEngine = compositionEngine;
          return _this;
        }

        TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
          var childContainer = router.container.createChild();

          var viewModel = /\.html/.test(config.moduleId) ? createDynamicClass(config.moduleId) : relativeToFile(config.moduleId, Origin.get(router.container.viewModel.constructor).moduleId);

          var instruction = {
            viewModel: viewModel,
            childContainer: childContainer,
            view: config.view || config.viewStrategy,
            router: router
          };

          childContainer.registerSingleton(RouterViewLocator);

          childContainer.getChildRouter = function () {
            var childRouter = void 0;

            childContainer.registerHandler(Router, function (c) {
              return childRouter || (childRouter = router.createChild(childContainer));
            });

            return childContainer.get(Router);
          };

          return this.compositionEngine.ensureViewModel(instruction);
        };

        return TemplatingRouteLoader;
      }(RouteLoader)) || _class));

      _export('TemplatingRouteLoader', TemplatingRouteLoader);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-router/dist/system/router-view.js', ['aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', 'aurelia-router', 'aurelia-metadata', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var Container, inject, createOverrideContext, ViewSlot, ViewLocator, customElement, noView, BehaviorInstruction, bindable, CompositionTransaction, CompositionEngine, ShadowDOM, SwapStrategies, Router, Origin, DOM, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, RouterView, RouterViewLocator;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      createOverrideContext = _aureliaBinding.createOverrideContext;
    }, function (_aureliaTemplating) {
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewLocator = _aureliaTemplating.ViewLocator;
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
      BehaviorInstruction = _aureliaTemplating.BehaviorInstruction;
      bindable = _aureliaTemplating.bindable;
      CompositionTransaction = _aureliaTemplating.CompositionTransaction;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      ShadowDOM = _aureliaTemplating.ShadowDOM;
      SwapStrategies = _aureliaTemplating.SwapStrategies;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('RouterView', RouterView = (_dec = customElement('router-view'), _dec2 = inject(DOM.Element, Container, ViewSlot, Router, ViewLocator, CompositionTransaction, CompositionEngine), _dec(_class = noView(_class = _dec2(_class = (_class2 = function () {
        function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {

          _initDefineProp(this, 'swapOrder', _descriptor, this);

          _initDefineProp(this, 'layoutView', _descriptor2, this);

          _initDefineProp(this, 'layoutViewModel', _descriptor3, this);

          _initDefineProp(this, 'layoutModel', _descriptor4, this);

          this.element = element;
          this.container = container;
          this.viewSlot = viewSlot;
          this.router = router;
          this.viewLocator = viewLocator;
          this.compositionTransaction = compositionTransaction;
          this.compositionEngine = compositionEngine;
          this.router.registerViewPort(this, this.element.getAttribute('name'));

          if (!('initialComposition' in compositionTransaction)) {
            compositionTransaction.initialComposition = true;
            this.compositionTransactionNotifier = compositionTransaction.enlist();
          }
        }

        RouterView.prototype.created = function created(owningView) {
          this.owningView = owningView;
        };

        RouterView.prototype.bind = function bind(bindingContext, overrideContext) {
          this.container.viewModel = bindingContext;
          this.overrideContext = overrideContext;
        };

        RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
          var _this = this;

          var component = viewPortInstruction.component;
          var childContainer = component.childContainer;
          var viewModel = component.viewModel;
          var viewModelResource = component.viewModelResource;
          var metadata = viewModelResource.metadata;
          var config = component.router.currentInstruction.config;
          var viewPort = config.viewPorts ? config.viewPorts[viewPortInstruction.name] : {};

          childContainer.get(RouterViewLocator)._notify(this);

          var layoutInstruction = {
            viewModel: viewPort.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
            view: viewPort.layoutView || config.layoutView || this.layoutView,
            model: viewPort.layoutModel || config.layoutModel || this.layoutModel,
            router: viewPortInstruction.component.router,
            childContainer: childContainer,
            viewSlot: this.viewSlot
          };

          var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
          if (viewStrategy && component.view) {
            viewStrategy.makeRelativeTo(Origin.get(component.router.container.viewModel.constructor).moduleId);
          }

          return metadata.load(childContainer, viewModelResource.value, null, viewStrategy, true).then(function (viewFactory) {
            if (!_this.compositionTransactionNotifier) {
              _this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture();
            }

            if (layoutInstruction.viewModel || layoutInstruction.view) {
              viewPortInstruction.layoutInstruction = layoutInstruction;
            }

            viewPortInstruction.controller = metadata.create(childContainer, BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory));

            if (waitToSwap) {
              return;
            }

            _this.swap(viewPortInstruction);
          });
        };

        RouterView.prototype.swap = function swap(viewPortInstruction) {
          var _this2 = this;

          var layoutInstruction = viewPortInstruction.layoutInstruction;
          var previousView = this.view;

          var work = function work() {
            var swapStrategy = SwapStrategies[_this2.swapOrder] || SwapStrategies.after;
            var viewSlot = _this2.viewSlot;

            swapStrategy(viewSlot, previousView, function () {
              return Promise.resolve(viewSlot.add(_this2.view));
            }).then(function () {
              _this2._notify();
            });
          };

          var ready = function ready(owningView) {
            viewPortInstruction.controller.automate(_this2.overrideContext, owningView);
            if (_this2.compositionTransactionOwnershipToken) {
              return _this2.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
                _this2.compositionTransactionOwnershipToken = null;
                return work();
              });
            }

            return work();
          };

          if (layoutInstruction) {
            if (!layoutInstruction.viewModel) {
              layoutInstruction.viewModel = {};
            }

            return this.compositionEngine.createController(layoutInstruction).then(function (controller) {
              ShadowDOM.distributeView(viewPortInstruction.controller.view, controller.slots || controller.view.slots);
              controller.automate(createOverrideContext(layoutInstruction.viewModel), _this2.owningView);
              controller.view.children.push(viewPortInstruction.controller.view);
              return controller.view || controller;
            }).then(function (newView) {
              _this2.view = newView;
              return ready(newView);
            });
          }

          this.view = viewPortInstruction.controller.view;

          return ready(this.owningView);
        };

        RouterView.prototype._notify = function _notify() {
          if (this.compositionTransactionNotifier) {
            this.compositionTransactionNotifier.done();
            this.compositionTransactionNotifier = null;
          }
        };

        return RouterView;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'layoutView', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'layoutViewModel', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'layoutModel', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('RouterView', RouterView);

      _export('RouterViewLocator', RouterViewLocator = function () {
        function RouterViewLocator() {
          var _this3 = this;

          this.promise = new Promise(function (resolve) {
            return _this3.resolve = resolve;
          });
        }

        RouterViewLocator.prototype.findNearest = function findNearest() {
          return this.promise;
        };

        RouterViewLocator.prototype._notify = function _notify(routerView) {
          this.resolve(routerView);
        };

        return RouterViewLocator;
      }());

      _export('RouterViewLocator', RouterViewLocator);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-route-recognizer/dist/system/aurelia-route-recognizer.js', ['aurelia-path'], function (_export, _context) {
  "use strict";

  var buildQueryString, parseQueryString, State, specials, escapeRegex, StaticSegment, DynamicSegment, StarSegment, EpsilonSegment, RouteRecognizer, RecognizeResults;

  function parse(route, names, types, caseSensitive) {
    var normalizedRoute = route;
    if (route.charAt(0) === '/') {
      normalizedRoute = route.substr(1);
    }

    var results = [];

    var splitRoute = normalizedRoute.split('/');
    for (var i = 0, ii = splitRoute.length; i < ii; ++i) {
      var segment = splitRoute[i];

      var match = segment.match(/^:([^?]+)(\?)?$/);
      if (match) {
        var _match = match;
        var _name = _match[1];
        var optional = _match[2];

        if (_name.indexOf('=') !== -1) {
          throw new Error('Parameter ' + _name + ' in route ' + route + ' has a default value, which is not supported.');
        }
        results.push(new DynamicSegment(_name, !!optional));
        names.push(_name);
        types.dynamics++;
        continue;
      }

      match = segment.match(/^\*(.+)$/);
      if (match) {
        results.push(new StarSegment(match[1]));
        names.push(match[1]);
        types.stars++;
      } else if (segment === '') {
        results.push(new EpsilonSegment());
      } else {
        results.push(new StaticSegment(segment, caseSensitive));
        types.statics++;
      }
    }

    return results;
  }

  function sortSolutions(states) {
    return states.sort(function (a, b) {
      if (a.types.stars !== b.types.stars) {
        return a.types.stars - b.types.stars;
      }

      if (a.types.stars) {
        if (a.types.statics !== b.types.statics) {
          return b.types.statics - a.types.statics;
        }
        if (a.types.dynamics !== b.types.dynamics) {
          return b.types.dynamics - a.types.dynamics;
        }
      }

      if (a.types.dynamics !== b.types.dynamics) {
        return a.types.dynamics - b.types.dynamics;
      }

      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }

      return 0;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];
      nextStates.push.apply(nextStates, state.match(ch));
    }

    var skippableStates = nextStates.filter(function (s) {
      return s.epsilon;
    });

    var _loop = function _loop() {
      var newStates = [];
      skippableStates.forEach(function (s) {
        nextStates.push.apply(nextStates, s.epsilon);
        newStates.push.apply(newStates, s.epsilon);
      });
      skippableStates = newStates.filter(function (s) {
        return s.epsilon;
      });
    };

    while (skippableStates.length > 0) {
      _loop();
    }

    return nextStates;
  }

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers;
    var regex = state.regex;
    var captures = path.match(regex);
    var currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var _handler = handlers[i];
      var _names = _handler.names;
      var _params = {};

      for (var j = 0, m = _names.length; j < m; j++) {
        _params[_names[j]] = captures[currentCapture++];
      }

      result.push({ handler: _handler.handler, params: _params, isDynamic: !!_names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    var state = currentState.put({ validChars: '/' });
    segment.eachChar(function (ch) {
      state = state.put(ch);
    });

    if (segment.optional) {
      currentState.epsilon = currentState.epsilon || [];
      currentState.epsilon.push(state);
    }

    return state;
  }
  return {
    setters: [function (_aureliaPath) {
      buildQueryString = _aureliaPath.buildQueryString;
      parseQueryString = _aureliaPath.parseQueryString;
    }],
    execute: function () {
      _export('State', State = function () {
        function State(charSpec) {

          this.charSpec = charSpec;
          this.nextStates = [];
        }

        State.prototype.get = function get(charSpec) {
          for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var child = _ref;

            var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

            if (isEqual) {
              return child;
            }
          }

          return undefined;
        };

        State.prototype.put = function put(charSpec) {
          var state = this.get(charSpec);

          if (state) {
            return state;
          }

          state = new State(charSpec);

          this.nextStates.push(state);

          if (charSpec.repeat) {
            state.nextStates.push(state);
          }

          return state;
        };

        State.prototype.match = function match(ch) {
          var nextStates = this.nextStates;
          var results = [];

          for (var i = 0, l = nextStates.length; i < l; i++) {
            var child = nextStates[i];
            var charSpec = child.charSpec;

            if (charSpec.validChars !== undefined) {
              if (charSpec.validChars.indexOf(ch) !== -1) {
                results.push(child);
              }
            } else if (charSpec.invalidChars !== undefined) {
              if (charSpec.invalidChars.indexOf(ch) === -1) {
                results.push(child);
              }
            }
          }

          return results;
        };

        return State;
      }());

      _export('State', State);

      specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
      escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

      _export('StaticSegment', StaticSegment = function () {
        function StaticSegment(string, caseSensitive) {

          this.string = string;
          this.caseSensitive = caseSensitive;
        }

        StaticSegment.prototype.eachChar = function eachChar(callback) {
          var s = this.string;
          for (var i = 0, ii = s.length; i < ii; ++i) {
            var ch = s[i];
            callback({ validChars: this.caseSensitive ? ch : ch.toUpperCase() + ch.toLowerCase() });
          }
        };

        StaticSegment.prototype.regex = function regex() {
          return this.string.replace(escapeRegex, '\\$1');
        };

        StaticSegment.prototype.generate = function generate() {
          return this.string;
        };

        return StaticSegment;
      }());

      _export('StaticSegment', StaticSegment);

      _export('DynamicSegment', DynamicSegment = function () {
        function DynamicSegment(name, optional) {

          this.name = name;
          this.optional = optional;
        }

        DynamicSegment.prototype.eachChar = function eachChar(callback) {
          callback({ invalidChars: '/', repeat: true });
        };

        DynamicSegment.prototype.regex = function regex() {
          return this.optional ? '([^/]+)?' : '([^/]+)';
        };

        DynamicSegment.prototype.generate = function generate(params, consumed) {
          consumed[this.name] = true;
          return params[this.name];
        };

        return DynamicSegment;
      }());

      _export('DynamicSegment', DynamicSegment);

      _export('StarSegment', StarSegment = function () {
        function StarSegment(name) {

          this.name = name;
        }

        StarSegment.prototype.eachChar = function eachChar(callback) {
          callback({ invalidChars: '', repeat: true });
        };

        StarSegment.prototype.regex = function regex() {
          return '(.+)';
        };

        StarSegment.prototype.generate = function generate(params, consumed) {
          consumed[this.name] = true;
          return params[this.name];
        };

        return StarSegment;
      }());

      _export('StarSegment', StarSegment);

      _export('EpsilonSegment', EpsilonSegment = function () {
        function EpsilonSegment() {}

        EpsilonSegment.prototype.eachChar = function eachChar() {};

        EpsilonSegment.prototype.regex = function regex() {
          return '';
        };

        EpsilonSegment.prototype.generate = function generate() {
          return '';
        };

        return EpsilonSegment;
      }());

      _export('EpsilonSegment', EpsilonSegment);

      _export('RouteRecognizer', RouteRecognizer = function () {
        function RouteRecognizer() {

          this.rootState = new State();
          this.names = {};
        }

        RouteRecognizer.prototype.add = function add(route) {
          var _this = this;

          if (Array.isArray(route)) {
            route.forEach(function (r) {
              return _this.add(r);
            });
            return undefined;
          }

          var currentState = this.rootState;
          var regex = '^';
          var types = { statics: 0, dynamics: 0, stars: 0 };
          var names = [];
          var routeName = route.handler.name;
          var isEmpty = true;
          var isAllOptional = true;
          var segments = parse(route.path, names, types, route.caseSensitive);

          for (var i = 0, ii = segments.length; i < ii; i++) {
            var segment = segments[i];
            if (segment instanceof EpsilonSegment) {
              continue;
            }

            isEmpty = false;
            isAllOptional = isAllOptional && segment.optional;

            currentState = addSegment(currentState, segment);
            regex += segment.optional ? '/?' : '/';
            regex += segment.regex();
          }

          if (isAllOptional) {
            if (isEmpty) {
              currentState = currentState.put({ validChars: '/' });
              regex += '/';
            } else {
              var finalState = this.rootState.put({ validChars: '/' });
              currentState.epsilon = [finalState];
              currentState = finalState;
            }
          }

          var handlers = [{ handler: route.handler, names: names }];

          if (routeName) {
            var routeNames = Array.isArray(routeName) ? routeName : [routeName];
            for (var _i2 = 0; _i2 < routeNames.length; _i2++) {
              this.names[routeNames[_i2]] = {
                segments: segments,
                handlers: handlers
              };
            }
          }

          currentState.handlers = handlers;
          currentState.regex = new RegExp(regex + '$', route.caseSensitive ? '' : 'i');
          currentState.types = types;

          return currentState;
        };

        RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
          var route = this.names[name];
          if (!route) {
            throw new Error('There is no route named ' + name);
          }

          return [].concat(route.handlers);
        };

        RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
          return !!this.names[name];
        };

        RouteRecognizer.prototype.generate = function generate(name, params) {
          var route = this.names[name];
          if (!route) {
            throw new Error('There is no route named ' + name);
          }

          var handler = route.handlers[0].handler;
          if (handler.generationUsesHref) {
            return handler.href;
          }

          var routeParams = Object.assign({}, params);
          var segments = route.segments;
          var consumed = {};
          var output = '';

          for (var i = 0, l = segments.length; i < l; i++) {
            var segment = segments[i];

            if (segment instanceof EpsilonSegment) {
              continue;
            }

            var segmentValue = segment.generate(routeParams, consumed);
            if (segmentValue === null || segmentValue === undefined) {
              if (!segment.optional) {
                throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + name + '\'.');
              }
            } else {
              output += '/';
              output += segmentValue;
            }
          }

          if (output.charAt(0) !== '/') {
            output = '/' + output;
          }

          for (var param in consumed) {
            delete routeParams[param];
          }

          var queryString = buildQueryString(routeParams);
          output += queryString ? '?' + queryString : '';

          return output;
        };

        RouteRecognizer.prototype.recognize = function recognize(path) {
          var states = [this.rootState];
          var queryParams = {};
          var isSlashDropped = false;
          var normalizedPath = path;

          var queryStart = normalizedPath.indexOf('?');
          if (queryStart !== -1) {
            var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
            normalizedPath = normalizedPath.substr(0, queryStart);
            queryParams = parseQueryString(queryString);
          }

          normalizedPath = decodeURI(normalizedPath);

          if (normalizedPath.charAt(0) !== '/') {
            normalizedPath = '/' + normalizedPath;
          }

          var pathLen = normalizedPath.length;
          if (pathLen > 1 && normalizedPath.charAt(pathLen - 1) === '/') {
            normalizedPath = normalizedPath.substr(0, pathLen - 1);
            isSlashDropped = true;
          }

          for (var i = 0, l = normalizedPath.length; i < l; i++) {
            states = recognizeChar(states, normalizedPath.charAt(i));
            if (!states.length) {
              break;
            }
          }

          var solutions = [];
          for (var _i3 = 0, _l = states.length; _i3 < _l; _i3++) {
            if (states[_i3].handlers) {
              solutions.push(states[_i3]);
            }
          }

          states = sortSolutions(solutions);

          var state = solutions[0];
          if (state && state.handlers) {
            if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
              normalizedPath = normalizedPath + '/';
            }

            return findHandler(state, normalizedPath, queryParams);
          }

          return undefined;
        };

        return RouteRecognizer;
      }());

      _export('RouteRecognizer', RouteRecognizer);

      RecognizeResults = function RecognizeResults(queryParams) {

        this.splice = Array.prototype.splice;
        this.slice = Array.prototype.slice;
        this.push = Array.prototype.push;
        this.length = 0;
        this.queryParams = queryParams || {};
      };
    }
  };
});
'use strict';

System.register('node_modules/aurelia-history/dist/system/aurelia-history.js', [], function (_export, _context) {
  "use strict";

  var History;

  function mi(name) {
    throw new Error('History must implement ' + name + '().');
  }

  return {
    setters: [],
    execute: function () {
      _export('History', History = function () {
        function History() {}

        History.prototype.activate = function activate(options) {
          mi('activate');
        };

        History.prototype.deactivate = function deactivate() {
          mi('deactivate');
        };

        History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
          mi('getAbsoluteRoot');
        };

        History.prototype.navigate = function navigate(fragment, options) {
          mi('navigate');
        };

        History.prototype.navigateBack = function navigateBack() {
          mi('navigateBack');
        };

        History.prototype.setTitle = function setTitle(title) {
          mi('setTitle');
        };

        return History;
      }());

      _export('History', History);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-event-aggregator/dist/system/aurelia-event-aggregator.js', ['aurelia-logging'], function (_export, _context) {
  "use strict";

  var LogManager, logger, Handler, EventAggregator;

  function invokeCallback(callback, data, event) {
    try {
      callback(data, event);
    } catch (e) {
      logger.error(e);
    }
  }

  function invokeHandler(handler, data) {
    try {
      handler.handle(data);
    } catch (e) {
      logger.error(e);
    }
  }

  function includeEventsIn(obj) {
    var ea = new EventAggregator();

    obj.subscribeOnce = function (event, callback) {
      return ea.subscribeOnce(event, callback);
    };

    obj.subscribe = function (event, callback) {
      return ea.subscribe(event, callback);
    };

    obj.publish = function (event, data) {
      ea.publish(event, data);
    };

    return ea;
  }

  _export('includeEventsIn', includeEventsIn);

  function configure(config) {
    config.instance(EventAggregator, includeEventsIn(config.aurelia));
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      logger = LogManager.getLogger('event-aggregator');

      Handler = function () {
        function Handler(messageType, callback) {

          this.messageType = messageType;
          this.callback = callback;
        }

        Handler.prototype.handle = function handle(message) {
          if (message instanceof this.messageType) {
            this.callback.call(null, message);
          }
        };

        return Handler;
      }();

      _export('EventAggregator', EventAggregator = function () {
        function EventAggregator() {

          this.eventLookup = {};
          this.messageHandlers = [];
        }

        EventAggregator.prototype.publish = function publish(event, data) {
          var subscribers = void 0;
          var i = void 0;

          if (!event) {
            throw new Error('Event was invalid.');
          }

          if (typeof event === 'string') {
            subscribers = this.eventLookup[event];
            if (subscribers) {
              subscribers = subscribers.slice();
              i = subscribers.length;

              while (i--) {
                invokeCallback(subscribers[i], data, event);
              }
            }
          } else {
            subscribers = this.messageHandlers.slice();
            i = subscribers.length;

            while (i--) {
              invokeHandler(subscribers[i], event);
            }
          }
        };

        EventAggregator.prototype.subscribe = function subscribe(event, callback) {
          var handler = void 0;
          var subscribers = void 0;

          if (!event) {
            throw new Error('Event channel/type was invalid.');
          }

          if (typeof event === 'string') {
            handler = callback;
            subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
          } else {
            handler = new Handler(event, callback);
            subscribers = this.messageHandlers;
          }

          subscribers.push(handler);

          return {
            dispose: function dispose() {
              var idx = subscribers.indexOf(handler);
              if (idx !== -1) {
                subscribers.splice(idx, 1);
              }
            }
          };
        };

        EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
          var sub = this.subscribe(event, function (a, b) {
            sub.dispose();
            return callback(a, b);
          });

          return sub;
        };

        return EventAggregator;
      }());

      _export('EventAggregator', EventAggregator);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-router/dist/system/aurelia-router.js', ['aurelia-logging', 'aurelia-route-recognizer', 'aurelia-dependency-injection', 'aurelia-history', 'aurelia-event-aggregator'], function (_export, _context) {
  "use strict";

  var LogManager, RouteRecognizer, Container, History, EventAggregator, _typeof, _createClass, isRootedPath, isAbsoluteUrl, pipelineStatus, Pipeline, CommitChangesStep, NavigationInstruction, NavModel, Redirect, RedirectToRoute, RouterConfiguration, activationStrategy, BuildNavigationPlanStep, Router, CanDeactivatePreviousStep, CanActivateNextStep, DeactivatePreviousStep, ActivateNextStep, SafeSubscription, RouteLoader, LoadRouteStep, PipelineSlot, PipelineProvider, logger, AppRouter;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _normalizeAbsolutePath(path, hasPushState) {
    var absolute = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    if (!hasPushState && path[0] !== '#') {
      path = '#' + path;
    }

    if (hasPushState && absolute) {
      path = path.substring(1, path.length);
    }

    return path;
  }

  _export('_normalizeAbsolutePath', _normalizeAbsolutePath);

  function _createRootedPath(fragment, baseUrl, hasPushState, absolute) {
    if (isAbsoluteUrl.test(fragment)) {
      return fragment;
    }

    var path = '';

    if (baseUrl.length && baseUrl[0] !== '/') {
      path += '/';
    }

    path += baseUrl;

    if ((!path.length || path[path.length - 1] !== '/') && fragment[0] !== '/') {
      path += '/';
    }

    if (path.length && path[path.length - 1] === '/' && fragment[0] === '/') {
      path = path.substring(0, path.length - 1);
    }

    return _normalizeAbsolutePath(path + fragment, hasPushState, absolute);
  }

  _export('_createRootedPath', _createRootedPath);

  function _resolveUrl(fragment, baseUrl, hasPushState) {
    if (isRootedPath.test(fragment)) {
      return _normalizeAbsolutePath(fragment, hasPushState);
    }

    return _createRootedPath(fragment, baseUrl, hasPushState);
  }

  _export('_resolveUrl', _resolveUrl);

  function createCompletionHandler(next, status) {
    return function (output) {
      return Promise.resolve({ status: status, output: output, completed: status === pipelineStatus.completed });
    };
  }

  function prune(instruction) {
    instruction.previousInstruction = null;
    instruction.plan = null;
  }

  function isNavigationCommand(obj) {
    return obj && typeof obj.navigate === 'function';
  }

  _export('isNavigationCommand', isNavigationCommand);

  function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
    var prev = instruction.previousInstruction;
    var config = instruction.config;
    var plan = {};

    if ('redirect' in config) {
      var redirectLocation = _resolveUrl(config.redirect, getInstructionBaseUrl(instruction));
      if (instruction.queryString) {
        redirectLocation += '?' + instruction.queryString;
      }

      return Promise.reject(new Redirect(redirectLocation));
    }

    if (prev) {
      var newParams = hasDifferentParameterValues(prev, instruction);
      var pending = [];

      var _loop2 = function _loop2(viewPortName) {
        var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
        var nextViewPortConfig = config.viewPorts[viewPortName];

        if (!nextViewPortConfig) throw new Error('Invalid Route Config: Configuration for viewPort "' + viewPortName + '" was not found for route: "' + instruction.config.route + '."');

        var viewPortPlan = plan[viewPortName] = {
          name: viewPortName,
          config: nextViewPortConfig,
          prevComponent: prevViewPortInstruction.component,
          prevModuleId: prevViewPortInstruction.moduleId
        };

        if (prevViewPortInstruction.moduleId !== nextViewPortConfig.moduleId) {
          viewPortPlan.strategy = activationStrategy.replace;
        } else if ('determineActivationStrategy' in prevViewPortInstruction.component.viewModel) {
          var _prevViewPortInstruct;

          viewPortPlan.strategy = (_prevViewPortInstruct = prevViewPortInstruction.component.viewModel).determineActivationStrategy.apply(_prevViewPortInstruct, instruction.lifecycleArgs);
        } else if (config.activationStrategy) {
          viewPortPlan.strategy = config.activationStrategy;
        } else if (newParams || forceLifecycleMinimum) {
          viewPortPlan.strategy = activationStrategy.invokeLifecycle;
        } else {
          viewPortPlan.strategy = activationStrategy.noChange;
        }

        if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
          var path = instruction.getWildcardPath();
          var task = prevViewPortInstruction.childRouter._createNavigationInstruction(path, instruction).then(function (childInstruction) {
            viewPortPlan.childNavigationInstruction = childInstruction;

            return _buildNavigationPlan(childInstruction, viewPortPlan.strategy === activationStrategy.invokeLifecycle).then(function (childPlan) {
              childInstruction.plan = childPlan;
            });
          });

          pending.push(task);
        }
      };

      for (var viewPortName in prev.viewPortInstructions) {
        _loop2(viewPortName);
      }

      return Promise.all(pending).then(function () {
        return plan;
      });
    }

    for (var _viewPortName in config.viewPorts) {
      plan[_viewPortName] = {
        name: _viewPortName,
        strategy: activationStrategy.replace,
        config: instruction.config.viewPorts[_viewPortName]
      };
    }

    return Promise.resolve(plan);
  }

  _export('_buildNavigationPlan', _buildNavigationPlan);

  function hasDifferentParameterValues(prev, next) {
    var prevParams = prev.params;
    var nextParams = next.params;
    var nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;

    for (var key in nextParams) {
      if (key === nextWildCardName) {
        continue;
      }

      if (prevParams[key] !== nextParams[key]) {
        return true;
      }
    }

    for (var _key in prevParams) {
      if (_key === nextWildCardName) {
        continue;
      }

      if (prevParams[_key] !== nextParams[_key]) {
        return true;
      }
    }

    if (!next.options.compareQueryParams) {
      return false;
    }

    var prevQueryParams = prev.queryParams;
    var nextQueryParams = next.queryParams;
    for (var _key2 in nextQueryParams) {
      if (prevQueryParams[_key2] !== nextQueryParams[_key2]) {
        return true;
      }
    }

    for (var _key3 in prevQueryParams) {
      if (prevQueryParams[_key3] !== nextQueryParams[_key3]) {
        return true;
      }
    }

    return false;
  }

  function getInstructionBaseUrl(instruction) {
    var instructionBaseUrlParts = [];
    instruction = instruction.parentInstruction;

    while (instruction) {
      instructionBaseUrlParts.unshift(instruction.getBaseUrl());
      instruction = instruction.parentInstruction;
    }

    instructionBaseUrlParts.unshift('/');
    return instructionBaseUrlParts.join('');
  }

  function validateRouteConfig(config, routes) {
    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
      throw new Error('Invalid Route Config');
    }

    if (typeof config.route !== 'string') {
      var _name2 = config.name || '(no name)';
      throw new Error('Invalid Route Config for "' + _name2 + '": You must specify a "route:" pattern.');
    }

    if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
      throw new Error('Invalid Route Config for "' + config.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".');
    }
  }

  function evaluateNavigationStrategy(instruction, evaluator, context) {
    return Promise.resolve(evaluator.call(context, instruction)).then(function () {
      if (!('viewPorts' in instruction.config)) {
        instruction.config.viewPorts = {
          'default': {
            moduleId: instruction.config.moduleId
          }
        };
      }

      return instruction;
    });
  }

  function processDeactivatable(plan, callbackName, next, ignoreResult) {
    var infos = findDeactivatable(plan, callbackName);
    var i = infos.length;

    function inspect(val) {
      if (ignoreResult || shouldContinue(val)) {
        return iterate();
      }

      return next.cancel(val);
    }

    function iterate() {
      if (i--) {
        try {
          var viewModel = infos[i];
          var _result = viewModel[callbackName]();
          return processPotential(_result, inspect, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      }

      return next();
    }

    return iterate();
  }

  function findDeactivatable(plan, callbackName) {
    var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    for (var viewPortName in plan) {
      var _viewPortPlan = plan[viewPortName];
      var prevComponent = _viewPortPlan.prevComponent;

      if ((_viewPortPlan.strategy === activationStrategy.invokeLifecycle || _viewPortPlan.strategy === activationStrategy.replace) && prevComponent) {
        var viewModel = prevComponent.viewModel;

        if (callbackName in viewModel) {
          list.push(viewModel);
        }
      }

      if (_viewPortPlan.childNavigationInstruction) {
        findDeactivatable(_viewPortPlan.childNavigationInstruction.plan, callbackName, list);
      } else if (prevComponent) {
        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }

    return list;
  }

  function addPreviousDeactivatable(component, callbackName, list) {
    var childRouter = component.childRouter;

    if (childRouter && childRouter.currentInstruction) {
      var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;

      for (var viewPortName in viewPortInstructions) {
        var _viewPortInstruction2 = viewPortInstructions[viewPortName];
        var prevComponent = _viewPortInstruction2.component;
        var prevViewModel = prevComponent.viewModel;

        if (callbackName in prevViewModel) {
          list.push(prevViewModel);
        }

        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }
  }

  function processActivatable(navigationInstruction, callbackName, next, ignoreResult) {
    var infos = findActivatable(navigationInstruction, callbackName);
    var length = infos.length;
    var i = -1;

    function inspect(val, router) {
      if (ignoreResult || shouldContinue(val, router)) {
        return iterate();
      }

      return next.cancel(val);
    }

    function iterate() {
      i++;

      if (i < length) {
        try {
          var _ret3 = function () {
            var _current$viewModel;

            var current = infos[i];
            var result = (_current$viewModel = current.viewModel)[callbackName].apply(_current$viewModel, current.lifecycleArgs);
            return {
              v: processPotential(result, function (val) {
                return inspect(val, current.router);
              }, next.cancel)
            };
          }();

          if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
        } catch (error) {
          return next.cancel(error);
        }
      }

      return next();
    }

    return iterate();
  }

  function findActivatable(navigationInstruction, callbackName) {
    var list = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var router = arguments[3];

    var plan = navigationInstruction.plan;

    Object.keys(plan).filter(function (viewPortName) {
      var viewPortPlan = plan[viewPortName];
      var viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName];
      var viewModel = viewPortInstruction.component.viewModel;

      if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in viewModel) {
        list.push({
          viewModel: viewModel,
          lifecycleArgs: viewPortInstruction.lifecycleArgs,
          router: router
        });
      }

      if (viewPortPlan.childNavigationInstruction) {
        findActivatable(viewPortPlan.childNavigationInstruction, callbackName, list, viewPortInstruction.component.childRouter || router);
      }
    });

    return list;
  }

  function shouldContinue(output, router) {
    if (output instanceof Error) {
      return false;
    }

    if (isNavigationCommand(output)) {
      if (typeof output.setRouter === 'function') {
        output.setRouter(router);
      }

      return !!output.shouldContinueProcessing;
    }

    if (output === undefined) {
      return true;
    }

    return output;
  }

  function processPotential(obj, resolve, reject) {
    if (obj && typeof obj.then === 'function') {
      return Promise.resolve(obj).then(resolve).catch(reject);
    }

    if (obj && typeof obj.subscribe === 'function') {
      var _ret4 = function () {
        var obs = obj;
        return {
          v: new SafeSubscription(function (sub) {
            return obs.subscribe({
              next: function next() {
                if (sub.subscribed) {
                  sub.unsubscribe();
                  resolve(obj);
                }
              },
              error: function error(_error) {
                if (sub.subscribed) {
                  sub.unsubscribe();
                  reject(_error);
                }
              },
              complete: function complete() {
                if (sub.subscribed) {
                  sub.unsubscribe();
                  resolve(obj);
                }
              }
            });
          })
        };
      }();

      if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
    }

    try {
      return resolve(obj);
    } catch (error) {
      return reject(error);
    }
  }

  function loadNewRoute(routeLoader, navigationInstruction) {
    var toLoad = determineWhatToLoad(navigationInstruction);
    var loadPromises = toLoad.map(function (current) {
      return loadRoute(routeLoader, current.navigationInstruction, current.viewPortPlan);
    });

    return Promise.all(loadPromises);
  }

  function determineWhatToLoad(navigationInstruction) {
    var toLoad = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    var plan = navigationInstruction.plan;

    for (var viewPortName in plan) {
      var _viewPortPlan2 = plan[viewPortName];

      if (_viewPortPlan2.strategy === activationStrategy.replace) {
        toLoad.push({ viewPortPlan: _viewPortPlan2, navigationInstruction: navigationInstruction });

        if (_viewPortPlan2.childNavigationInstruction) {
          determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
        }
      } else {
        var _viewPortInstruction3 = navigationInstruction.addViewPortInstruction(viewPortName, _viewPortPlan2.strategy, _viewPortPlan2.prevModuleId, _viewPortPlan2.prevComponent);

        if (_viewPortPlan2.childNavigationInstruction) {
          _viewPortInstruction3.childNavigationInstruction = _viewPortPlan2.childNavigationInstruction;
          determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
        }
      }
    }

    return toLoad;
  }

  function loadRoute(routeLoader, navigationInstruction, viewPortPlan) {
    var moduleId = viewPortPlan.config.moduleId;

    return loadComponent(routeLoader, navigationInstruction, viewPortPlan.config).then(function (component) {
      var viewPortInstruction = navigationInstruction.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);

      var childRouter = component.childRouter;
      if (childRouter) {
        var path = navigationInstruction.getWildcardPath();

        return childRouter._createNavigationInstruction(path, navigationInstruction).then(function (childInstruction) {
          viewPortPlan.childNavigationInstruction = childInstruction;

          return _buildNavigationPlan(childInstruction).then(function (childPlan) {
            childInstruction.plan = childPlan;
            viewPortInstruction.childNavigationInstruction = childInstruction;

            return loadNewRoute(routeLoader, childInstruction);
          });
        });
      }

      return undefined;
    });
  }

  function loadComponent(routeLoader, navigationInstruction, config) {
    var router = navigationInstruction.router;
    var lifecycleArgs = navigationInstruction.lifecycleArgs;

    return routeLoader.loadRoute(router, config, navigationInstruction).then(function (component) {
      var viewModel = component.viewModel;
      var childContainer = component.childContainer;

      component.router = router;
      component.config = config;

      if ('configureRouter' in viewModel) {
        var _ret5 = function () {
          var childRouter = childContainer.getChildRouter();
          component.childRouter = childRouter;

          return {
            v: childRouter.configure(function (c) {
              return viewModel.configureRouter.apply(viewModel, [c, childRouter].concat(lifecycleArgs));
            }).then(function () {
              return component;
            })
          };
        }();

        if ((typeof _ret5 === 'undefined' ? 'undefined' : _typeof(_ret5)) === "object") return _ret5.v;
      }

      return component;
    });
  }

  function processResult(instruction, result, instructionCount, router) {
    if (!(result && 'completed' in result && 'output' in result)) {
      result = result || {};
      result.output = new Error('Expected router pipeline to return a navigation result, but got [' + JSON.stringify(result) + '] instead.');
    }

    var finalResult = null;
    if (isNavigationCommand(result.output)) {
      result.output.navigate(router);
    } else {
      finalResult = result;

      if (!result.completed) {
        if (result.output instanceof Error) {
          logger.error(result.output);
        }

        restorePreviousLocation(router);
      }
    }

    return router._dequeueInstruction(instructionCount + 1).then(function (innerResult) {
      return finalResult || innerResult || result;
    });
  }

  function resolveInstruction(instruction, result, isInnerInstruction, router) {
    instruction.resolve(result);

    var eventArgs = { instruction: instruction, result: result };
    if (!isInnerInstruction) {
      router.isNavigating = false;
      router.isExplicitNavigation = false;
      router.isExplicitNavigationBack = false;

      var eventName = void 0;

      if (result.output instanceof Error) {
        eventName = 'error';
      } else if (!result.completed) {
        eventName = 'canceled';
      } else {
        var _queryString = instruction.queryString ? '?' + instruction.queryString : '';
        router.history.previousLocation = instruction.fragment + _queryString;
        eventName = 'success';
      }

      router.events.publish('router:navigation:' + eventName, eventArgs);
      router.events.publish('router:navigation:complete', eventArgs);
    } else {
      router.events.publish('router:navigation:child:complete', eventArgs);
    }

    return result;
  }

  function restorePreviousLocation(router) {
    var previousLocation = router.history.previousLocation;
    if (previousLocation) {
      router.navigate(router.history.previousLocation, { trigger: false, replace: true });
    } else if (router.fallbackRoute) {
      router.navigate(router.fallbackRoute, { trigger: true, replace: true });
    } else {
      logger.error('Router navigation failed, and no previous location or fallbackRoute could be restored.');
    }
  }
  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaRouteRecognizer) {
      RouteRecognizer = _aureliaRouteRecognizer.RouteRecognizer;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaHistory) {
      History = _aureliaHistory.History;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      isRootedPath = /^#?\//;
      isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

      _export('pipelineStatus', pipelineStatus = {
        completed: 'completed',
        canceled: 'canceled',
        rejected: 'rejected',
        running: 'running'
      });

      _export('pipelineStatus', pipelineStatus);

      _export('Pipeline', Pipeline = function () {
        function Pipeline() {

          this.steps = [];
        }

        Pipeline.prototype.addStep = function addStep(step) {
          var run = void 0;

          if (typeof step === 'function') {
            run = step;
          } else if (typeof step.getSteps === 'function') {
            var steps = step.getSteps();
            for (var i = 0, l = steps.length; i < l; i++) {
              this.addStep(steps[i]);
            }

            return this;
          } else {
            run = step.run.bind(step);
          }

          this.steps.push(run);

          return this;
        };

        Pipeline.prototype.run = function run(instruction) {
          var index = -1;
          var steps = this.steps;

          function next() {
            index++;

            if (index < steps.length) {
              var currentStep = steps[index];

              try {
                return currentStep(instruction, next);
              } catch (e) {
                return next.reject(e);
              }
            } else {
              return next.complete();
            }
          }

          next.complete = createCompletionHandler(next, pipelineStatus.completed);
          next.cancel = createCompletionHandler(next, pipelineStatus.canceled);
          next.reject = createCompletionHandler(next, pipelineStatus.rejected);

          return next();
        };

        return Pipeline;
      }());

      _export('Pipeline', Pipeline);

      _export('CommitChangesStep', CommitChangesStep = function () {
        function CommitChangesStep() {}

        CommitChangesStep.prototype.run = function run(navigationInstruction, next) {
          return navigationInstruction._commitChanges(true).then(function () {
            navigationInstruction._updateTitle();
            return next();
          });
        };

        return CommitChangesStep;
      }());

      _export('CommitChangesStep', CommitChangesStep);

      _export('NavigationInstruction', NavigationInstruction = function () {
        function NavigationInstruction(init) {

          this.plan = null;
          this.options = {};

          Object.assign(this, init);

          this.params = this.params || {};
          this.viewPortInstructions = {};

          var ancestorParams = [];
          var current = this;
          do {
            var currentParams = Object.assign({}, current.params);
            if (current.config && current.config.hasChildRouter) {
              delete currentParams[current.getWildCardName()];
            }

            ancestorParams.unshift(currentParams);
            current = current.parentInstruction;
          } while (current);

          var allParams = Object.assign.apply(Object, [{}, this.queryParams].concat(ancestorParams));
          this.lifecycleArgs = [allParams, this.config, this];
        }

        NavigationInstruction.prototype.getAllInstructions = function getAllInstructions() {
          var instructions = [this];
          for (var key in this.viewPortInstructions) {
            var childInstruction = this.viewPortInstructions[key].childNavigationInstruction;
            if (childInstruction) {
              instructions.push.apply(instructions, childInstruction.getAllInstructions());
            }
          }

          return instructions;
        };

        NavigationInstruction.prototype.getAllPreviousInstructions = function getAllPreviousInstructions() {
          return this.getAllInstructions().map(function (c) {
            return c.previousInstruction;
          }).filter(function (c) {
            return c;
          });
        };

        NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
          var config = Object.assign({}, this.lifecycleArgs[1], { currentViewPort: viewPortName });
          var viewportInstruction = this.viewPortInstructions[viewPortName] = {
            name: viewPortName,
            strategy: strategy,
            moduleId: moduleId,
            component: component,
            childRouter: component.childRouter,
            lifecycleArgs: [].concat(this.lifecycleArgs[0], config, this.lifecycleArgs[2])
          };

          return viewportInstruction;
        };

        NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
          var wildcardIndex = this.config.route.lastIndexOf('*');
          return this.config.route.substr(wildcardIndex + 1);
        };

        NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
          var wildcardName = this.getWildCardName();
          var path = this.params[wildcardName] || '';

          if (this.queryString) {
            path += '?' + this.queryString;
          }

          return path;
        };

        NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
          var _this = this;

          var fragment = this.fragment;

          if (fragment === '') {
            var nonEmptyRoute = this.router.routes.find(function (route) {
              return route.name === _this.config.name && route.route !== '';
            });
            if (nonEmptyRoute) {
              fragment = nonEmptyRoute.route;
            }
          }

          if (!this.params) {
            return fragment;
          }

          var wildcardName = this.getWildCardName();
          var path = this.params[wildcardName] || '';

          if (!path) {
            return fragment;
          }

          path = encodeURI(path);
          return fragment.substr(0, fragment.lastIndexOf(path));
        };

        NavigationInstruction.prototype._commitChanges = function _commitChanges(waitToSwap) {
          var _this2 = this;

          var router = this.router;
          router.currentInstruction = this;

          if (this.previousInstruction) {
            this.previousInstruction.config.navModel.isActive = false;
          }

          this.config.navModel.isActive = true;

          router._refreshBaseUrl();
          router.refreshNavigation();

          var loads = [];
          var delaySwaps = [];

          var _loop = function _loop(viewPortName) {
            var viewPortInstruction = _this2.viewPortInstructions[viewPortName];
            var viewPort = router.viewPorts[viewPortName];

            if (!viewPort) {
              throw new Error('There was no router-view found in the view for ' + viewPortInstruction.moduleId + '.');
            }

            if (viewPortInstruction.strategy === activationStrategy.replace) {
              if (waitToSwap) {
                delaySwaps.push({ viewPort: viewPort, viewPortInstruction: viewPortInstruction });
              }

              loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function (x) {
                if (viewPortInstruction.childNavigationInstruction) {
                  return viewPortInstruction.childNavigationInstruction._commitChanges();
                }

                return undefined;
              }));
            } else {
              if (viewPortInstruction.childNavigationInstruction) {
                loads.push(viewPortInstruction.childNavigationInstruction._commitChanges(waitToSwap));
              }
            }
          };

          for (var viewPortName in this.viewPortInstructions) {
            _loop(viewPortName);
          }

          return Promise.all(loads).then(function () {
            delaySwaps.forEach(function (x) {
              return x.viewPort.swap(x.viewPortInstruction);
            });
            return null;
          }).then(function () {
            return prune(_this2);
          });
        };

        NavigationInstruction.prototype._updateTitle = function _updateTitle() {
          var title = this._buildTitle();
          if (title) {
            this.router.history.setTitle(title);
          }
        };

        NavigationInstruction.prototype._buildTitle = function _buildTitle() {
          var separator = arguments.length <= 0 || arguments[0] === undefined ? ' | ' : arguments[0];

          var title = '';
          var childTitles = [];

          if (this.config.navModel.title) {
            title = this.router.transformTitle(this.config.navModel.title);
          }

          for (var viewPortName in this.viewPortInstructions) {
            var _viewPortInstruction = this.viewPortInstructions[viewPortName];

            if (_viewPortInstruction.childNavigationInstruction) {
              var childTitle = _viewPortInstruction.childNavigationInstruction._buildTitle(separator);
              if (childTitle) {
                childTitles.push(childTitle);
              }
            }
          }

          if (childTitles.length) {
            title = childTitles.join(separator) + (title ? separator : '') + title;
          }

          if (this.router.title) {
            title += (title ? separator : '') + this.router.transformTitle(this.router.title);
          }

          return title;
        };

        return NavigationInstruction;
      }());

      _export('NavigationInstruction', NavigationInstruction);

      _export('NavModel', NavModel = function () {
        function NavModel(router, relativeHref) {

          this.isActive = false;
          this.title = null;
          this.href = null;
          this.relativeHref = null;
          this.settings = {};
          this.config = null;

          this.router = router;
          this.relativeHref = relativeHref;
        }

        NavModel.prototype.setTitle = function setTitle(title) {
          this.title = title;

          if (this.isActive) {
            this.router.updateTitle();
          }
        };

        return NavModel;
      }());

      _export('NavModel', NavModel);

      _export('Redirect', Redirect = function () {
        function Redirect(url) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          this.url = url;
          this.options = Object.assign({ trigger: true, replace: true }, options);
          this.shouldContinueProcessing = false;
        }

        Redirect.prototype.setRouter = function setRouter(router) {
          this.router = router;
        };

        Redirect.prototype.navigate = function navigate(appRouter) {
          var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
          navigatingRouter.navigate(this.url, this.options);
        };

        return Redirect;
      }());

      _export('Redirect', Redirect);

      _export('RedirectToRoute', RedirectToRoute = function () {
        function RedirectToRoute(route) {
          var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          this.route = route;
          this.params = params;
          this.options = Object.assign({ trigger: true, replace: true }, options);
          this.shouldContinueProcessing = false;
        }

        RedirectToRoute.prototype.setRouter = function setRouter(router) {
          this.router = router;
        };

        RedirectToRoute.prototype.navigate = function navigate(appRouter) {
          var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
          navigatingRouter.navigateToRoute(this.route, this.params, this.options);
        };

        return RedirectToRoute;
      }());

      _export('RedirectToRoute', RedirectToRoute);

      _export('RouterConfiguration', RouterConfiguration = function () {
        function RouterConfiguration() {

          this.instructions = [];
          this.options = {};
          this.pipelineSteps = [];
        }

        RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
          this.pipelineSteps.push({ name: name, step: step });
          return this;
        };

        RouterConfiguration.prototype.addAuthorizeStep = function addAuthorizeStep(step) {
          return this.addPipelineStep('authorize', step);
        };

        RouterConfiguration.prototype.addPreActivateStep = function addPreActivateStep(step) {
          return this.addPipelineStep('preActivate', step);
        };

        RouterConfiguration.prototype.addPreRenderStep = function addPreRenderStep(step) {
          return this.addPipelineStep('preRender', step);
        };

        RouterConfiguration.prototype.addPostRenderStep = function addPostRenderStep(step) {
          return this.addPipelineStep('postRender', step);
        };

        RouterConfiguration.prototype.fallbackRoute = function fallbackRoute(fragment) {
          this._fallbackRoute = fragment;
          return this;
        };

        RouterConfiguration.prototype.map = function map(route) {
          if (Array.isArray(route)) {
            route.forEach(this.map.bind(this));
            return this;
          }

          return this.mapRoute(route);
        };

        RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
          this.instructions.push(function (router) {
            var routeConfigs = [];

            if (Array.isArray(config.route)) {
              for (var i = 0, ii = config.route.length; i < ii; ++i) {
                var current = Object.assign({}, config);
                current.route = config.route[i];
                routeConfigs.push(current);
              }
            } else {
              routeConfigs.push(Object.assign({}, config));
            }

            var navModel = void 0;
            for (var _i = 0, _ii = routeConfigs.length; _i < _ii; ++_i) {
              var _routeConfig = routeConfigs[_i];
              _routeConfig.settings = _routeConfig.settings || {};
              if (!navModel) {
                navModel = router.createNavModel(_routeConfig);
              }

              router.addRoute(_routeConfig, navModel);
            }
          });

          return this;
        };

        RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
          this.unknownRouteConfig = config;
          return this;
        };

        RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
          var instructions = this.instructions;
          for (var i = 0, ii = instructions.length; i < ii; ++i) {
            instructions[i](router);
          }

          if (this.title) {
            router.title = this.title;
          }

          if (this.unknownRouteConfig) {
            router.handleUnknownRoutes(this.unknownRouteConfig);
          }

          if (this._fallbackRoute) {
            router.fallbackRoute = this._fallbackRoute;
          }

          router.options = this.options;

          var pipelineSteps = this.pipelineSteps;
          if (pipelineSteps.length) {
            if (!router.isRoot) {
              throw new Error('Pipeline steps can only be added to the root router');
            }

            var pipelineProvider = router.pipelineProvider;
            for (var _i2 = 0, _ii2 = pipelineSteps.length; _i2 < _ii2; ++_i2) {
              var _pipelineSteps$_i = pipelineSteps[_i2];
              var _name = _pipelineSteps$_i.name;
              var step = _pipelineSteps$_i.step;

              pipelineProvider.addStep(_name, step);
            }
          }
        };

        return RouterConfiguration;
      }());

      _export('RouterConfiguration', RouterConfiguration);

      _export('activationStrategy', activationStrategy = {
        noChange: 'no-change',
        invokeLifecycle: 'invoke-lifecycle',
        replace: 'replace'
      });

      _export('activationStrategy', activationStrategy);

      _export('BuildNavigationPlanStep', BuildNavigationPlanStep = function () {
        function BuildNavigationPlanStep() {}

        BuildNavigationPlanStep.prototype.run = function run(navigationInstruction, next) {
          return _buildNavigationPlan(navigationInstruction).then(function (plan) {
            navigationInstruction.plan = plan;
            return next();
          }).catch(next.cancel);
        };

        return BuildNavigationPlanStep;
      }());

      _export('BuildNavigationPlanStep', BuildNavigationPlanStep);

      _export('Router', Router = function () {
        function Router(container, history) {
          var _this3 = this;

          this.parent = null;
          this.options = {};

          this.transformTitle = function (title) {
            if (_this3.parent) {
              return _this3.parent.transformTitle(title);
            }
            return title;
          };

          this.container = container;
          this.history = history;
          this.reset();
        }

        Router.prototype.reset = function reset() {
          var _this4 = this;

          this.viewPorts = {};
          this.routes = [];
          this.baseUrl = '';
          this.isConfigured = false;
          this.isNavigating = false;
          this.isExplicitNavigation = false;
          this.isExplicitNavigationBack = false;
          this.navigation = [];
          this.currentInstruction = null;
          this._fallbackOrder = 100;
          this._recognizer = new RouteRecognizer();
          this._childRecognizer = new RouteRecognizer();
          this._configuredPromise = new Promise(function (resolve) {
            _this4._resolveConfiguredPromise = resolve;
          });
        };

        Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
          name = name || 'default';
          this.viewPorts[name] = viewPort;
        };

        Router.prototype.ensureConfigured = function ensureConfigured() {
          return this._configuredPromise;
        };

        Router.prototype.configure = function configure(callbackOrConfig) {
          var _this5 = this;

          this.isConfigured = true;

          var result = callbackOrConfig;
          var config = void 0;
          if (typeof callbackOrConfig === 'function') {
            config = new RouterConfiguration();
            result = callbackOrConfig(config);
          }

          return Promise.resolve(result).then(function (c) {
            if (c && c.exportToRouter) {
              config = c;
            }

            config.exportToRouter(_this5);
            _this5.isConfigured = true;
            _this5._resolveConfiguredPromise();
          });
        };

        Router.prototype.navigate = function navigate(fragment, options) {
          if (!this.isConfigured && this.parent) {
            return this.parent.navigate(fragment, options);
          }

          this.isExplicitNavigation = true;
          return this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
        };

        Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
          var path = this.generate(route, params);
          return this.navigate(path, options);
        };

        Router.prototype.navigateBack = function navigateBack() {
          this.isExplicitNavigationBack = true;
          this.history.navigateBack();
        };

        Router.prototype.createChild = function createChild(container) {
          var childRouter = new Router(container || this.container.createChild(), this.history);
          childRouter.parent = this;
          return childRouter;
        };

        Router.prototype.generate = function generate(name, params) {
          var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          var hasRoute = this._recognizer.hasRoute(name);
          if ((!this.isConfigured || !hasRoute) && this.parent) {
            return this.parent.generate(name, params);
          }

          if (!hasRoute) {
            throw new Error('A route with name \'' + name + '\' could not be found. Check that `name: \'' + name + '\'` was specified in the route\'s config.');
          }

          var path = this._recognizer.generate(name, params);
          var rootedPath = _createRootedPath(path, this.baseUrl, this.history._hasPushState, options.absolute);
          return options.absolute ? '' + this.history.getAbsoluteRoot() + rootedPath : rootedPath;
        };

        Router.prototype.createNavModel = function createNavModel(config) {
          var navModel = new NavModel(this, 'href' in config ? config.href : config.route);
          navModel.title = config.title;
          navModel.order = config.nav;
          navModel.href = config.href;
          navModel.settings = config.settings;
          navModel.config = config;

          return navModel;
        };

        Router.prototype.addRoute = function addRoute(config, navModel) {
          validateRouteConfig(config, this.routes);

          if (!('viewPorts' in config) && !config.navigationStrategy) {
            config.viewPorts = {
              'default': {
                moduleId: config.moduleId,
                view: config.view
              }
            };
          }

          if (!navModel) {
            navModel = this.createNavModel(config);
          }

          this.routes.push(config);

          var path = config.route;
          if (path.charAt(0) === '/') {
            path = path.substr(1);
          }
          var caseSensitive = config.caseSensitive === true;
          var state = this._recognizer.add({ path: path, handler: config, caseSensitive: caseSensitive });

          if (path) {
            var _settings = config.settings;
            delete config.settings;
            var withChild = JSON.parse(JSON.stringify(config));
            config.settings = _settings;
            withChild.route = path + '/*childRoute';
            withChild.hasChildRouter = true;
            this._childRecognizer.add({
              path: withChild.route,
              handler: withChild,
              caseSensitive: caseSensitive
            });

            withChild.navModel = navModel;
            withChild.settings = config.settings;
            withChild.navigationStrategy = config.navigationStrategy;
          }

          config.navModel = navModel;

          if ((navModel.order || navModel.order === 0) && this.navigation.indexOf(navModel) === -1) {
            if (!navModel.href && navModel.href !== '' && (state.types.dynamics || state.types.stars)) {
              throw new Error('Invalid route config for "' + config.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
            }

            if (typeof navModel.order !== 'number') {
              navModel.order = ++this._fallbackOrder;
            }

            this.navigation.push(navModel);
            this.navigation = this.navigation.sort(function (a, b) {
              return a.order - b.order;
            });
          }
        };

        Router.prototype.hasRoute = function hasRoute(name) {
          return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
        };

        Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
          return this._recognizer.hasRoute(name);
        };

        Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
          var _this6 = this;

          if (!config) {
            throw new Error('Invalid unknown route handler');
          }

          this.catchAllHandler = function (instruction) {
            return _this6._createRouteConfig(config, instruction).then(function (c) {
              instruction.config = c;
              return instruction;
            });
          };
        };

        Router.prototype.updateTitle = function updateTitle() {
          if (this.parent) {
            return this.parent.updateTitle();
          }

          if (this.currentInstruction) {
            this.currentInstruction._updateTitle();
          }
          return undefined;
        };

        Router.prototype.refreshNavigation = function refreshNavigation() {
          var nav = this.navigation;

          for (var i = 0, length = nav.length; i < length; i++) {
            var current = nav[i];
            if (!current.config.href) {
              current.href = _createRootedPath(current.relativeHref, this.baseUrl, this.history._hasPushState);
            } else {
              current.href = _normalizeAbsolutePath(current.config.href, this.history._hasPushState);
            }
          }
        };

        Router.prototype._refreshBaseUrl = function _refreshBaseUrl() {
          if (this.parent) {
            var baseUrl = this.parent.currentInstruction.getBaseUrl();
            this.baseUrl = this.parent.baseUrl + baseUrl;
          }
        };

        Router.prototype._createNavigationInstruction = function _createNavigationInstruction() {
          var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
          var parentInstruction = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

          var fragment = url;
          var queryString = '';

          var queryIndex = url.indexOf('?');
          if (queryIndex !== -1) {
            fragment = url.substr(0, queryIndex);
            queryString = url.substr(queryIndex + 1);
          }

          var results = this._recognizer.recognize(url);
          if (!results || !results.length) {
            results = this._childRecognizer.recognize(url);
          }

          var instructionInit = {
            fragment: fragment,
            queryString: queryString,
            config: null,
            parentInstruction: parentInstruction,
            previousInstruction: this.currentInstruction,
            router: this,
            options: {
              compareQueryParams: this.options.compareQueryParams
            }
          };

          if (results && results.length) {
            var first = results[0];
            var _instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
              params: first.params,
              queryParams: first.queryParams || results.queryParams,
              config: first.config || first.handler
            }));

            if (typeof first.handler === 'function') {
              return evaluateNavigationStrategy(_instruction, first.handler, first);
            } else if (first.handler && typeof first.handler.navigationStrategy === 'function') {
              return evaluateNavigationStrategy(_instruction, first.handler.navigationStrategy, first.handler);
            }

            return Promise.resolve(_instruction);
          } else if (this.catchAllHandler) {
            var _instruction2 = new NavigationInstruction(Object.assign({}, instructionInit, {
              params: { path: fragment },
              queryParams: results && results.queryParams,
              config: null }));

            return evaluateNavigationStrategy(_instruction2, this.catchAllHandler);
          }

          return Promise.reject(new Error('Route not found: ' + url));
        };

        Router.prototype._createRouteConfig = function _createRouteConfig(config, instruction) {
          var _this7 = this;

          return Promise.resolve(config).then(function (c) {
            if (typeof c === 'string') {
              return { moduleId: c };
            } else if (typeof c === 'function') {
              return c(instruction);
            }

            return c;
          }).then(function (c) {
            return typeof c === 'string' ? { moduleId: c } : c;
          }).then(function (c) {
            c.route = instruction.params.path;
            validateRouteConfig(c, _this7.routes);

            if (!c.navModel) {
              c.navModel = _this7.createNavModel(c);
            }

            return c;
          });
        };

        _createClass(Router, [{
          key: 'isRoot',
          get: function get() {
            return !this.parent;
          }
        }]);

        return Router;
      }());

      _export('Router', Router);

      _export('CanDeactivatePreviousStep', CanDeactivatePreviousStep = function () {
        function CanDeactivatePreviousStep() {}

        CanDeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
          return processDeactivatable(navigationInstruction.plan, 'canDeactivate', next);
        };

        return CanDeactivatePreviousStep;
      }());

      _export('CanDeactivatePreviousStep', CanDeactivatePreviousStep);

      _export('CanActivateNextStep', CanActivateNextStep = function () {
        function CanActivateNextStep() {}

        CanActivateNextStep.prototype.run = function run(navigationInstruction, next) {
          return processActivatable(navigationInstruction, 'canActivate', next);
        };

        return CanActivateNextStep;
      }());

      _export('CanActivateNextStep', CanActivateNextStep);

      _export('DeactivatePreviousStep', DeactivatePreviousStep = function () {
        function DeactivatePreviousStep() {}

        DeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
          return processDeactivatable(navigationInstruction.plan, 'deactivate', next, true);
        };

        return DeactivatePreviousStep;
      }());

      _export('DeactivatePreviousStep', DeactivatePreviousStep);

      _export('ActivateNextStep', ActivateNextStep = function () {
        function ActivateNextStep() {}

        ActivateNextStep.prototype.run = function run(navigationInstruction, next) {
          return processActivatable(navigationInstruction, 'activate', next, true);
        };

        return ActivateNextStep;
      }());

      _export('ActivateNextStep', ActivateNextStep);

      SafeSubscription = function () {
        function SafeSubscription(subscriptionFunc) {

          this._subscribed = true;
          this._subscription = subscriptionFunc(this);

          if (!this._subscribed) this.unsubscribe();
        }

        SafeSubscription.prototype.unsubscribe = function unsubscribe() {
          if (this._subscribed && this._subscription) this._subscription.unsubscribe();

          this._subscribed = false;
        };

        _createClass(SafeSubscription, [{
          key: 'subscribed',
          get: function get() {
            return this._subscribed;
          }
        }]);

        return SafeSubscription;
      }();

      _export('RouteLoader', RouteLoader = function () {
        function RouteLoader() {}

        RouteLoader.prototype.loadRoute = function loadRoute(router, config, navigationInstruction) {
          throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
        };

        return RouteLoader;
      }());

      _export('RouteLoader', RouteLoader);

      _export('LoadRouteStep', LoadRouteStep = function () {
        LoadRouteStep.inject = function inject() {
          return [RouteLoader];
        };

        function LoadRouteStep(routeLoader) {

          this.routeLoader = routeLoader;
        }

        LoadRouteStep.prototype.run = function run(navigationInstruction, next) {
          return loadNewRoute(this.routeLoader, navigationInstruction).then(next).catch(next.cancel);
        };

        return LoadRouteStep;
      }());

      _export('LoadRouteStep', LoadRouteStep);

      PipelineSlot = function () {
        function PipelineSlot(container, name, alias) {

          this.steps = [];

          this.container = container;
          this.slotName = name;
          this.slotAlias = alias;
        }

        PipelineSlot.prototype.getSteps = function getSteps() {
          var _this8 = this;

          return this.steps.map(function (x) {
            return _this8.container.get(x);
          });
        };

        return PipelineSlot;
      }();

      _export('PipelineProvider', PipelineProvider = function () {
        PipelineProvider.inject = function inject() {
          return [Container];
        };

        function PipelineProvider(container) {

          this.container = container;
          this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, this._createPipelineSlot('authorize'), CanActivateNextStep, this._createPipelineSlot('preActivate', 'modelbind'), DeactivatePreviousStep, ActivateNextStep, this._createPipelineSlot('preRender', 'precommit'), CommitChangesStep, this._createPipelineSlot('postRender', 'postcomplete')];
        }

        PipelineProvider.prototype.createPipeline = function createPipeline() {
          var _this9 = this;

          var pipeline = new Pipeline();
          this.steps.forEach(function (step) {
            return pipeline.addStep(_this9.container.get(step));
          });
          return pipeline;
        };

        PipelineProvider.prototype._findStep = function _findStep(name) {
          return this.steps.find(function (x) {
            return x.slotName === name || x.slotAlias === name;
          });
        };

        PipelineProvider.prototype.addStep = function addStep(name, step) {
          var found = this._findStep(name);
          if (found) {
            if (!found.steps.includes(step)) {
              found.steps.push(step);
            }
          } else {
            throw new Error('Invalid pipeline slot name: ' + name + '.');
          }
        };

        PipelineProvider.prototype.removeStep = function removeStep(name, step) {
          var slot = this._findStep(name);
          if (slot) {
            slot.steps.splice(slot.steps.indexOf(step), 1);
          }
        };

        PipelineProvider.prototype._clearSteps = function _clearSteps() {
          var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

          var slot = this._findStep(name);
          if (slot) {
            slot.steps = [];
          }
        };

        PipelineProvider.prototype.reset = function reset() {
          this._clearSteps('authorize');
          this._clearSteps('preActivate');
          this._clearSteps('preRender');
          this._clearSteps('postRender');
        };

        PipelineProvider.prototype._createPipelineSlot = function _createPipelineSlot(name, alias) {
          return new PipelineSlot(this.container, name, alias);
        };

        return PipelineProvider;
      }());

      _export('PipelineProvider', PipelineProvider);

      logger = LogManager.getLogger('app-router');

      _export('AppRouter', AppRouter = function (_Router) {
        _inherits(AppRouter, _Router);

        AppRouter.inject = function inject() {
          return [Container, History, PipelineProvider, EventAggregator];
        };

        function AppRouter(container, history, pipelineProvider, events) {

          var _this10 = _possibleConstructorReturn(this, _Router.call(this, container, history));

          _this10.pipelineProvider = pipelineProvider;
          _this10.events = events;
          return _this10;
        }

        AppRouter.prototype.reset = function reset() {
          _Router.prototype.reset.call(this);
          this.maxInstructionCount = 10;
          if (!this._queue) {
            this._queue = [];
          } else {
            this._queue.length = 0;
          }
        };

        AppRouter.prototype.loadUrl = function loadUrl(url) {
          var _this11 = this;

          return this._createNavigationInstruction(url).then(function (instruction) {
            return _this11._queueInstruction(instruction);
          }).catch(function (error) {
            logger.error(error);
            restorePreviousLocation(_this11);
          });
        };

        AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
          var _this12 = this;

          _Router.prototype.registerViewPort.call(this, viewPort, name);

          if (!this.isActive) {
            var _ret6 = function () {
              var viewModel = _this12._findViewModel(viewPort);
              if ('configureRouter' in viewModel) {
                if (!_this12.isConfigured) {
                  var _ret7 = function () {
                    var resolveConfiguredPromise = _this12._resolveConfiguredPromise;
                    _this12._resolveConfiguredPromise = function () {};
                    return {
                      v: {
                        v: _this12.configure(function (config) {
                          return viewModel.configureRouter(config, _this12);
                        }).then(function () {
                          _this12.activate();
                          resolveConfiguredPromise();
                        })
                      }
                    };
                  }();

                  if ((typeof _ret7 === 'undefined' ? 'undefined' : _typeof(_ret7)) === "object") return _ret7.v;
                }
              } else {
                _this12.activate();
              }
            }();

            if ((typeof _ret6 === 'undefined' ? 'undefined' : _typeof(_ret6)) === "object") return _ret6.v;
          } else {
            this._dequeueInstruction();
          }

          return Promise.resolve();
        };

        AppRouter.prototype.activate = function activate(options) {
          if (this.isActive) {
            return;
          }

          this.isActive = true;
          this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
          this.history.activate(this.options);
          this._dequeueInstruction();
        };

        AppRouter.prototype.deactivate = function deactivate() {
          this.isActive = false;
          this.history.deactivate();
        };

        AppRouter.prototype._queueInstruction = function _queueInstruction(instruction) {
          var _this13 = this;

          return new Promise(function (resolve) {
            instruction.resolve = resolve;
            _this13._queue.unshift(instruction);
            _this13._dequeueInstruction();
          });
        };

        AppRouter.prototype._dequeueInstruction = function _dequeueInstruction() {
          var _this14 = this;

          var instructionCount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

          return Promise.resolve().then(function () {
            if (_this14.isNavigating && !instructionCount) {
              return undefined;
            }

            var instruction = _this14._queue.shift();
            _this14._queue.length = 0;

            if (!instruction) {
              return undefined;
            }

            _this14.isNavigating = true;
            instruction.previousInstruction = _this14.currentInstruction;

            if (!instructionCount) {
              _this14.events.publish('router:navigation:processing', { instruction: instruction });
            } else if (instructionCount === _this14.maxInstructionCount - 1) {
              logger.error(instructionCount + 1 + ' navigation instructions have been attempted without success. Restoring last known good location.');
              restorePreviousLocation(_this14);
              return _this14._dequeueInstruction(instructionCount + 1);
            } else if (instructionCount > _this14.maxInstructionCount) {
              throw new Error('Maximum navigation attempts exceeded. Giving up.');
            }

            var pipeline = _this14.pipelineProvider.createPipeline();

            return pipeline.run(instruction).then(function (result) {
              return processResult(instruction, result, instructionCount, _this14);
            }).catch(function (error) {
              return { output: error instanceof Error ? error : new Error(error) };
            }).then(function (result) {
              return resolveInstruction(instruction, result, !!instructionCount, _this14);
            });
          });
        };

        AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
          if (this.container.viewModel) {
            return this.container.viewModel;
          }

          if (viewPort.container) {
            var container = viewPort.container;

            while (container) {
              if (container.viewModel) {
                this.container.viewModel = container.viewModel;
                return container.viewModel;
              }

              container = container.parent;
            }
          }

          return undefined;
        };

        return AppRouter;
      }(Router));

      _export('AppRouter', AppRouter);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-router/dist/system/route-href.js', ['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router', 'aurelia-pal', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var customAttribute, bindable, inject, Router, DOM, LogManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, logger, RouteHref;

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      logger = LogManager.getLogger('route-href');

      _export('RouteHref', RouteHref = (_dec = customAttribute('route-href'), _dec2 = bindable({ name: 'route', changeHandler: 'processChange' }), _dec3 = bindable({ name: 'params', changeHandler: 'processChange' }), _dec4 = bindable({ name: 'attribute', defaultValue: 'href' }), _dec5 = inject(Router, DOM.Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function () {
        function RouteHref(router, element) {

          this.router = router;
          this.element = element;
        }

        RouteHref.prototype.bind = function bind() {
          this.isActive = true;
          this.processChange();
        };

        RouteHref.prototype.unbind = function unbind() {
          this.isActive = false;
        };

        RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
          if (previous) {
            this.element.removeAttribute(previous);
          }

          this.processChange();
        };

        RouteHref.prototype.processChange = function processChange() {
          var _this = this;

          return this.router.ensureConfigured().then(function () {
            if (!_this.isActive) {
              return null;
            }

            var href = _this.router.generate(_this.route, _this.params);

            if (_this.element.au.controller) {
              _this.element.au.controller.viewModel[_this.attribute] = href;
            } else {
              _this.element.setAttribute(_this.attribute, href);
            }

            return null;
          }).catch(function (reason) {
            logger.error(reason);
          });
        };

        return RouteHref;
      }()) || _class) || _class) || _class) || _class) || _class));

      _export('RouteHref', RouteHref);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating-router/dist/system/aurelia-templating-router.js', ['aurelia-pal', 'aurelia-router', './route-loader', './router-view', './route-href'], function (_export, _context) {
  "use strict";

  var PLATFORM, Router, AppRouter, RouteLoader, TemplatingRouteLoader, RouterView, RouteHref;

  function configure(config) {
    config.singleton(RouteLoader, TemplatingRouteLoader).singleton(Router, AppRouter).globalResources(PLATFORM.moduleName('./router-view'), PLATFORM.moduleName('./route-href'));

    config.container.registerAlias(Router, AppRouter);
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      AppRouter = _aureliaRouter.AppRouter;
      RouteLoader = _aureliaRouter.RouteLoader;
    }, function (_routeLoader) {
      TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
    }, function (_routerView) {
      RouterView = _routerView.RouterView;
    }, function (_routeHref) {
      RouteHref = _routeHref.RouteHref;
    }],
    execute: function () {
      _export('TemplatingRouteLoader', TemplatingRouteLoader);

      _export('RouterView', RouterView);

      _export('RouteHref', RouteHref);

      _export('configure', configure);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-testing/dist/system/compile-spy.js', ['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var customAttribute, TargetInstruction, inject, LogManager, DOM, _dec, _dec2, _class, CompileSpy;

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      _export('CompileSpy', CompileSpy = (_dec = customAttribute('compile-spy'), _dec2 = inject(DOM.Element, TargetInstruction), _dec(_class = _dec2(_class = function CompileSpy(element, instruction) {

        LogManager.getLogger('compile-spy').info(element, instruction);
      }) || _class) || _class));

      _export('CompileSpy', CompileSpy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-testing/dist/system/view-spy.js', ['aurelia-templating', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var customAttribute, LogManager, _dec, _class, ViewSpy;

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      _export('ViewSpy', ViewSpy = (_dec = customAttribute('view-spy'), _dec(_class = function () {
        function ViewSpy() {

          this.logger = LogManager.getLogger('view-spy');
        }

        ViewSpy.prototype._log = function _log(lifecycleName, context) {
          if (!this.value && lifecycleName === 'created') {
            this.logger.info(lifecycleName, this.view);
          } else if (this.value && this.value.indexOf(lifecycleName) !== -1) {
            this.logger.info(lifecycleName, this.view, context);
          }
        };

        ViewSpy.prototype.created = function created(view) {
          this.view = view;
          this._log('created');
        };

        ViewSpy.prototype.bind = function bind(bindingContext) {
          this._log('bind', bindingContext);
        };

        ViewSpy.prototype.attached = function attached() {
          this._log('attached');
        };

        ViewSpy.prototype.detached = function detached() {
          this._log('detached');
        };

        ViewSpy.prototype.unbind = function unbind() {
          this._log('unbind');
        };

        return ViewSpy;
      }()) || _class));

      _export('ViewSpy', ViewSpy);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-loader/dist/system/aurelia-loader.js', ['aurelia-path', 'aurelia-metadata'], function (_export, _context) {
  "use strict";

  var relativeToFile, Origin, _createClass, TemplateDependency, TemplateRegistryEntry, Loader;

  return {
    setters: [function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('TemplateDependency', TemplateDependency = function TemplateDependency(src, name) {

        this.src = src;
        this.name = name;
      });

      _export('TemplateDependency', TemplateDependency);

      _export('TemplateRegistryEntry', TemplateRegistryEntry = function () {
        function TemplateRegistryEntry(address) {

          this.templateIsLoaded = false;
          this.factoryIsReady = false;
          this.resources = null;
          this.dependencies = null;

          this.address = address;
          this.onReady = null;
          this._template = null;
          this._factory = null;
        }

        TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
          var finalSrc = typeof src === 'string' ? relativeToFile(src, this.address) : Origin.get(src).moduleId;

          this.dependencies.push(new TemplateDependency(finalSrc, name));
        };

        _createClass(TemplateRegistryEntry, [{
          key: 'template',
          get: function get() {
            return this._template;
          },
          set: function set(value) {
            var address = this.address;
            var requires = void 0;
            var current = void 0;
            var src = void 0;
            var dependencies = void 0;

            this._template = value;
            this.templateIsLoaded = true;

            requires = value.content.querySelectorAll('require');
            dependencies = this.dependencies = new Array(requires.length);

            for (var i = 0, ii = requires.length; i < ii; ++i) {
              current = requires[i];
              src = current.getAttribute('from');

              if (!src) {
                throw new Error('<require> element in ' + address + ' has no "from" attribute.');
              }

              dependencies[i] = new TemplateDependency(relativeToFile(src, address), current.getAttribute('as'));

              if (current.parentNode) {
                current.parentNode.removeChild(current);
              }
            }
          }
        }, {
          key: 'factory',
          get: function get() {
            return this._factory;
          },
          set: function set(value) {
            this._factory = value;
            this.factoryIsReady = true;
          }
        }]);

        return TemplateRegistryEntry;
      }());

      _export('TemplateRegistryEntry', TemplateRegistryEntry);

      _export('Loader', Loader = function () {
        function Loader() {

          this.templateRegistry = {};
        }

        Loader.prototype.map = function map(id, source) {
          throw new Error('Loaders must implement map(id, source).');
        };

        Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
          throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
        };

        Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
          throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
        };

        Loader.prototype.loadModule = function loadModule(id) {
          throw new Error('Loaders must implement loadModule(id).');
        };

        Loader.prototype.loadAllModules = function loadAllModules(ids) {
          throw new Error('Loader must implement loadAllModules(ids).');
        };

        Loader.prototype.loadTemplate = function loadTemplate(url) {
          throw new Error('Loader must implement loadTemplate(url).');
        };

        Loader.prototype.loadText = function loadText(url) {
          throw new Error('Loader must implement loadText(url).');
        };

        Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
          throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
        };

        Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
          throw new Error('Loader must implement addPlugin(pluginName, implementation).');
        };

        Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
          return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
        };

        return Loader;
      }());

      _export('Loader', Loader);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-dependency-injection/dist/system/aurelia-dependency-injection.js', ['aurelia-metadata', 'aurelia-pal'], function (_export, _context) {
  "use strict";

  var protocol, metadata, AggregateError, _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _class7, _dec5, _class9, _dec6, _class11, _dec7, _class13, _classInvokers, resolver, Lazy, All, Optional, Parent, StrategyResolver, Factory, NewInstance, FactoryInvoker, TransientRegistration, SingletonRegistration, _emptyParameters, resolverDecorates, InvocationHandler, classInvokers, Container;

  function getDecoratorDependencies(target, name) {
    var dependencies = target.inject;
    if (typeof dependencies === 'function') {
      throw new Error('Decorator ' + name + ' cannot be used with "inject()".  Please use an array instead.');
    }
    if (!dependencies) {
      dependencies = metadata.getOwn(metadata.paramTypes, target).slice();
      target.inject = dependencies;
    }

    return dependencies;
  }

  _export('getDecoratorDependencies', getDecoratorDependencies);

  function lazy(keyValue) {
    return function (target, key, index) {
      var params = getDecoratorDependencies(target, 'lazy');
      params[index] = Lazy.of(keyValue);
    };
  }

  _export('lazy', lazy);

  function all(keyValue) {
    return function (target, key, index) {
      var params = getDecoratorDependencies(target, 'all');
      params[index] = All.of(keyValue);
    };
  }

  _export('all', all);

  function optional() {
    var checkParentOrTarget = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    var deco = function deco(checkParent) {
      return function (target, key, index) {
        var params = getDecoratorDependencies(target, 'optional');
        params[index] = Optional.of(params[index], checkParent);
      };
    };
    if (typeof checkParentOrTarget === 'boolean') {
      return deco(checkParentOrTarget);
    }
    return deco(true);
  }

  _export('optional', optional);

  function parent(target, key, index) {
    var params = getDecoratorDependencies(target, 'parent');
    params[index] = Parent.of(params[index]);
  }

  _export('parent', parent);

  function factory(keyValue, asValue) {
    return function (target, key, index) {
      var params = getDecoratorDependencies(target, 'factory');
      var factory = Factory.of(keyValue);
      params[index] = asValue ? factory.as(asValue) : factory;
    };
  }

  _export('factory', factory);

  function newInstance(asKeyOrTarget) {
    for (var _len4 = arguments.length, dynamicDependencies = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      dynamicDependencies[_key4 - 1] = arguments[_key4];
    }

    var deco = function deco(asKey) {
      return function (target, key, index) {
        var params = getDecoratorDependencies(target, 'newInstance');
        params[index] = NewInstance.of.apply(NewInstance, [params[index]].concat(dynamicDependencies));
        if (!!asKey) {
          params[index].as(asKey);
        }
      };
    };
    if (arguments.length >= 1) {
      return deco(asKeyOrTarget);
    }
    return deco();
  }

  _export('newInstance', newInstance);

  function invoker(value) {
    return function (target) {
      metadata.define(metadata.invoker, value, target);
    };
  }

  _export('invoker', invoker);

  function invokeAsFactory(potentialTarget) {
    var deco = function deco(target) {
      metadata.define(metadata.invoker, FactoryInvoker.instance, target);
    };

    return potentialTarget ? deco(potentialTarget) : deco;
  }

  _export('invokeAsFactory', invokeAsFactory);

  function registration(value) {
    return function (target) {
      metadata.define(metadata.registration, value, target);
    };
  }

  _export('registration', registration);

  function transient(key) {
    return registration(new TransientRegistration(key));
  }

  _export('transient', transient);

  function singleton(keyOrRegisterInChild) {
    var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
  }

  _export('singleton', singleton);

  function validateKey(key) {
    if (key === null || key === undefined) {
      throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
  }

  function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);

    while (i--) {
      args[i] = container.get(staticDependencies[i]);
    }

    if (dynamicDependencies !== undefined) {
      args = args.concat(dynamicDependencies);
    }

    return Reflect.construct(fn, args);
  }

  function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
      return [];
    }

    if (typeof f.inject === 'function') {
      return f.inject();
    }

    return f.inject;
  }

  function autoinject(potentialTarget) {
    var deco = function deco(target) {
      var previousInject = target.inject ? target.inject.slice() : null;
      var autoInject = metadata.getOwn(metadata.paramTypes, target) || _emptyParameters;
      if (!previousInject) {
        target.inject = autoInject;
      } else {
        for (var i = 0; i < autoInject.length; i++) {
          if (previousInject[i] && previousInject[i] !== autoInject[i]) {
            var prevIndex = previousInject.indexOf(autoInject[i]);
            if (prevIndex > -1) {
              previousInject.splice(prevIndex, 1);
            }
            previousInject.splice(prevIndex > -1 && prevIndex < i ? i - 1 : i, 0, autoInject[i]);
          } else if (!previousInject[i]) {
            previousInject[i] = autoInject[i];
          }
        }
        target.inject = previousInject;
      }
    };

    return potentialTarget ? deco(potentialTarget) : deco;
  }

  _export('autoinject', autoinject);

  function inject() {
    for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      rest[_key5] = arguments[_key5];
    }

    return function (target, key, descriptor) {
      if (typeof descriptor === 'number' && rest.length === 1) {
        var params = target.inject;
        if (typeof params === 'function') {
          throw new Error('Decorator inject cannot be used with "inject()".  Please use an array instead.');
        }
        if (!params) {
          params = metadata.getOwn(metadata.paramTypes, target).slice();
          target.inject = params;
        }
        params[descriptor] = rest[0];
        return;
      }

      if (descriptor) {
        var _fn = descriptor.value;
        _fn.inject = rest;
      } else {
        target.inject = rest;
      }
    };
  }

  _export('inject', inject);

  return {
    setters: [function (_aureliaMetadata) {
      protocol = _aureliaMetadata.protocol;
      metadata = _aureliaMetadata.metadata;
    }, function (_aureliaPal) {
      AggregateError = _aureliaPal.AggregateError;
    }],
    execute: function () {
      _export('resolver', resolver = protocol.create('aurelia:resolver', function (target) {
        if (!(typeof target.get === 'function')) {
          return 'Resolvers must implement: get(container: Container, key: any): any';
        }

        return true;
      }));

      _export('resolver', resolver);

      _export('Lazy', Lazy = (_dec = resolver(), _dec(_class = function () {
        function Lazy(key) {

          this._key = key;
        }

        Lazy.prototype.get = function get(container) {
          var _this = this;

          return function () {
            return container.get(_this._key);
          };
        };

        Lazy.of = function of(key) {
          return new Lazy(key);
        };

        return Lazy;
      }()) || _class));

      _export('Lazy', Lazy);

      _export('All', All = (_dec2 = resolver(), _dec2(_class3 = function () {
        function All(key) {

          this._key = key;
        }

        All.prototype.get = function get(container) {
          return container.getAll(this._key);
        };

        All.of = function of(key) {
          return new All(key);
        };

        return All;
      }()) || _class3));

      _export('All', All);

      _export('Optional', Optional = (_dec3 = resolver(), _dec3(_class5 = function () {
        function Optional(key) {
          var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

          this._key = key;
          this._checkParent = checkParent;
        }

        Optional.prototype.get = function get(container) {
          if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
          }

          return null;
        };

        Optional.of = function of(key) {
          var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

          return new Optional(key, checkParent);
        };

        return Optional;
      }()) || _class5));

      _export('Optional', Optional);

      _export('Parent', Parent = (_dec4 = resolver(), _dec4(_class7 = function () {
        function Parent(key) {

          this._key = key;
        }

        Parent.prototype.get = function get(container) {
          return container.parent ? container.parent.get(this._key) : null;
        };

        Parent.of = function of(key) {
          return new Parent(key);
        };

        return Parent;
      }()) || _class7));

      _export('Parent', Parent);

      _export('StrategyResolver', StrategyResolver = (_dec5 = resolver(), _dec5(_class9 = function () {
        function StrategyResolver(strategy, state) {

          this.strategy = strategy;
          this.state = state;
        }

        StrategyResolver.prototype.get = function get(container, key) {
          switch (this.strategy) {
            case 0:
              return this.state;
            case 1:
              var singleton = container.invoke(this.state);
              this.state = singleton;
              this.strategy = 0;
              return singleton;
            case 2:
              return container.invoke(this.state);
            case 3:
              return this.state(container, key, this);
            case 4:
              return this.state[0].get(container, key);
            case 5:
              return container.get(this.state);
            default:
              throw new Error('Invalid strategy: ' + this.strategy);
          }
        };

        return StrategyResolver;
      }()) || _class9));

      _export('StrategyResolver', StrategyResolver);

      _export('Factory', Factory = (_dec6 = resolver(), _dec6(_class11 = function () {
        function Factory(key) {

          this._key = key;
        }

        Factory.prototype.get = function get(container) {
          var _this2 = this;

          return function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
              rest[_key] = arguments[_key];
            }

            return container.invoke(_this2._key, rest);
          };
        };

        Factory.of = function of(key) {
          return new Factory(key);
        };

        return Factory;
      }()) || _class11));

      _export('Factory', Factory);

      _export('NewInstance', NewInstance = (_dec7 = resolver(), _dec7(_class13 = function () {
        function NewInstance(key) {

          this.key = key;
          this.asKey = key;

          for (var _len2 = arguments.length, dynamicDependencies = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            dynamicDependencies[_key2 - 1] = arguments[_key2];
          }

          this.dynamicDependencies = dynamicDependencies;
        }

        NewInstance.prototype.get = function get(container) {
          var dynamicDependencies = this.dynamicDependencies.length > 0 ? this.dynamicDependencies.map(function (dependency) {
            return dependency['protocol:aurelia:resolver'] ? dependency.get(container) : container.get(dependency);
          }) : undefined;
          var instance = container.invoke(this.key, dynamicDependencies);
          container.registerInstance(this.asKey, instance);
          return instance;
        };

        NewInstance.prototype.as = function as(key) {
          this.asKey = key;
          return this;
        };

        NewInstance.of = function of(key) {
          for (var _len3 = arguments.length, dynamicDependencies = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            dynamicDependencies[_key3 - 1] = arguments[_key3];
          }

          return new (Function.prototype.bind.apply(NewInstance, [null].concat([key], dynamicDependencies)))();
        };

        return NewInstance;
      }()) || _class13));

      _export('NewInstance', NewInstance);

      _export('FactoryInvoker', FactoryInvoker = function () {
        function FactoryInvoker() {}

        FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
          var i = dependencies.length;
          var args = new Array(i);

          while (i--) {
            args[i] = container.get(dependencies[i]);
          }

          return fn.apply(undefined, args);
        };

        FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
          var i = staticDependencies.length;
          var args = new Array(i);

          while (i--) {
            args[i] = container.get(staticDependencies[i]);
          }

          if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
          }

          return fn.apply(undefined, args);
        };

        return FactoryInvoker;
      }());

      _export('FactoryInvoker', FactoryInvoker);

      FactoryInvoker.instance = new FactoryInvoker();

      _export('TransientRegistration', TransientRegistration = function () {
        function TransientRegistration(key) {

          this._key = key;
        }

        TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
          var existingResolver = container.getResolver(this._key || key);
          return existingResolver === undefined ? container.registerTransient(this._key || key, fn) : existingResolver;
        };

        return TransientRegistration;
      }());

      _export('TransientRegistration', TransientRegistration);

      _export('SingletonRegistration', SingletonRegistration = function () {
        function SingletonRegistration(keyOrRegisterInChild) {
          var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

          if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
          } else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
          }
        }

        SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
          var targetContainer = this._registerInChild ? container : container.root;
          var existingResolver = targetContainer.getResolver(this._key || key);
          return existingResolver === undefined ? targetContainer.registerSingleton(this._key || key, fn) : existingResolver;
        };

        return SingletonRegistration;
      }());

      _export('SingletonRegistration', SingletonRegistration);

      _export('_emptyParameters', _emptyParameters = Object.freeze([]));

      _export('_emptyParameters', _emptyParameters);

      metadata.registration = 'aurelia:registration';
      metadata.invoker = 'aurelia:invoker';

      resolverDecorates = resolver.decorates;

      _export('InvocationHandler', InvocationHandler = function () {
        function InvocationHandler(fn, invoker, dependencies) {

          this.fn = fn;
          this.invoker = invoker;
          this.dependencies = dependencies;
        }

        InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
          return dynamicDependencies !== undefined ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
        };

        return InvocationHandler;
      }());

      _export('InvocationHandler', InvocationHandler);

      classInvokers = (_classInvokers = {}, _classInvokers[0] = {
        invoke: function invoke(container, Type) {
          return new Type();
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers[1] = {
        invoke: function invoke(container, Type, deps) {
          return new Type(container.get(deps[0]));
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers[2] = {
        invoke: function invoke(container, Type, deps) {
          return new Type(container.get(deps[0]), container.get(deps[1]));
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers[3] = {
        invoke: function invoke(container, Type, deps) {
          return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers[4] = {
        invoke: function invoke(container, Type, deps) {
          return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers[5] = {
        invoke: function invoke(container, Type, deps) {
          return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
        },

        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers.fallback = {
        invoke: invokeWithDynamicDependencies,
        invokeWithDynamicDependencies: invokeWithDynamicDependencies
      }, _classInvokers);

      _export('Container', Container = function () {
        function Container(configuration) {

          if (configuration === undefined) {
            configuration = {};
          }

          this._configuration = configuration;
          this._onHandlerCreated = configuration.onHandlerCreated;
          this._handlers = configuration.handlers || (configuration.handlers = new Map());
          this._resolvers = new Map();
          this.root = this;
          this.parent = null;
        }

        Container.prototype.makeGlobal = function makeGlobal() {
          Container.instance = this;
          return this;
        };

        Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
          this._onHandlerCreated = onHandlerCreated;
          this._configuration.onHandlerCreated = onHandlerCreated;
        };

        Container.prototype.registerInstance = function registerInstance(key, instance) {
          return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
        };

        Container.prototype.registerSingleton = function registerSingleton(key, fn) {
          return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
        };

        Container.prototype.registerTransient = function registerTransient(key, fn) {
          return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
        };

        Container.prototype.registerHandler = function registerHandler(key, handler) {
          return this.registerResolver(key, new StrategyResolver(3, handler));
        };

        Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
          return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
        };

        Container.prototype.registerResolver = function registerResolver(key, resolver) {
          validateKey(key);

          var allResolvers = this._resolvers;
          var result = allResolvers.get(key);

          if (result === undefined) {
            allResolvers.set(key, resolver);
          } else if (result.strategy === 4) {
            result.state.push(resolver);
          } else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver]));
          }

          return resolver;
        };

        Container.prototype.autoRegister = function autoRegister(key, fn) {
          fn = fn === undefined ? key : fn;

          if (typeof fn === 'function') {
            var _registration = metadata.get(metadata.registration, fn);

            if (_registration === undefined) {
              return this.registerResolver(key, new StrategyResolver(1, fn));
            }

            return _registration.registerResolver(this, key, fn);
          }

          return this.registerResolver(key, new StrategyResolver(0, fn));
        };

        Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
          var i = fns.length;
          while (i--) {
            this.autoRegister(fns[i]);
          }
        };

        Container.prototype.unregister = function unregister(key) {
          this._resolvers.delete(key);
        };

        Container.prototype.hasResolver = function hasResolver(key) {
          var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

          validateKey(key);

          return this._resolvers.has(key) || checkParent && this.parent !== null && this.parent.hasResolver(key, checkParent);
        };

        Container.prototype.getResolver = function getResolver(key) {
          return this._resolvers.get(key);
        };

        Container.prototype.get = function get(key) {
          validateKey(key);

          if (key === Container) {
            return this;
          }

          if (resolverDecorates(key)) {
            return key.get(this, key);
          }

          var resolver = this._resolvers.get(key);

          if (resolver === undefined) {
            if (this.parent === null) {
              return this.autoRegister(key).get(this, key);
            }

            var _registration2 = metadata.get(metadata.registration, key);

            if (_registration2 === undefined) {
              return this.parent._get(key);
            }

            return _registration2.registerResolver(this, key, key).get(this, key);
          }

          return resolver.get(this, key);
        };

        Container.prototype._get = function _get(key) {
          var resolver = this._resolvers.get(key);

          if (resolver === undefined) {
            if (this.parent === null) {
              return this.autoRegister(key).get(this, key);
            }

            return this.parent._get(key);
          }

          return resolver.get(this, key);
        };

        Container.prototype.getAll = function getAll(key) {
          validateKey(key);

          var resolver = this._resolvers.get(key);

          if (resolver === undefined) {
            if (this.parent === null) {
              return _emptyParameters;
            }

            return this.parent.getAll(key);
          }

          if (resolver.strategy === 4) {
            var state = resolver.state;
            var i = state.length;
            var results = new Array(i);

            while (i--) {
              results[i] = state[i].get(this, key);
            }

            return results;
          }

          return [resolver.get(this, key)];
        };

        Container.prototype.createChild = function createChild() {
          var child = new Container(this._configuration);
          child.root = this.root;
          child.parent = this;
          return child;
        };

        Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
          try {
            var _handler = this._handlers.get(fn);

            if (_handler === undefined) {
              _handler = this._createInvocationHandler(fn);
              this._handlers.set(fn, _handler);
            }

            return _handler.invoke(this, dynamicDependencies);
          } catch (e) {
            throw new AggregateError('Error invoking ' + fn.name + '. Check the inner error for details.', e, true);
          }
        };

        Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
          var dependencies = void 0;

          if (fn.inject === undefined) {
            dependencies = metadata.getOwn(metadata.paramTypes, fn) || _emptyParameters;
          } else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
              var _dependencies;

              (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor));
              ctor = Object.getPrototypeOf(ctor);
            }
          }

          var invoker = metadata.getOwn(metadata.invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback;

          var handler = new InvocationHandler(fn, invoker, dependencies);
          return this._onHandlerCreated !== undefined ? this._onHandlerCreated(handler) : handler;
        };

        return Container;
      }());

      _export('Container', Container);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-templating/dist/system/aurelia-templating.js', ['aurelia-logging', 'aurelia-metadata', 'aurelia-pal', 'aurelia-path', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-task-queue'], function (_export, _context) {
  "use strict";

  var LogManager, metadata, Origin, protocol, DOM, PLATFORM, FEATURE, relativeToFile, TemplateRegistryEntry, Loader, inject, Container, resolver, Binding, createOverrideContext, ValueConverterResource, BindingBehaviorResource, subscriberCollection, bindingMode, ObserverLocator, EventManager, TaskQueue, _createClass, _class, _temp, _dec, _class2, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class6, _class7, _temp2, _dec6, _class8, _class9, _temp3, _class11, _dec7, _class13, _dec8, _class14, _class15, _temp4, _dec9, _class16, _dec10, _class17, _dec11, _class18, _typeof, animationEvent, Animator, CompositionTransactionNotifier, CompositionTransactionOwnershipToken, CompositionTransaction, capitalMatcher, ViewEngineHooksResource, ElementEvents, ResourceLoadContext, ViewCompileInstruction, BehaviorInstruction, TargetInstruction, viewStrategy, RelativeViewStrategy, ConventionalViewStrategy, NoViewStrategy, TemplateRegistryViewStrategy, InlineViewStrategy, ViewLocator, BindingLanguage, noNodes, SlotCustomAttribute, PassThroughSlot, ShadowSlot, ShadowDOM, ViewResources, View, ViewSlot, ProviderResolver, providerResolverInstance, BoundViewFactory, ViewFactory, nextInjectorId, lastAUTargetID, ViewCompiler, ResourceModule, ResourceDescription, ModuleAnalyzer, logger, ProxyViewFactory, ViewEngine, Controller, BehaviorPropertyObserver, BindableProperty, lastProviderId, HtmlBehaviorResource, ChildObserver, noMutations, ChildObserverBinder, SwapStrategies, CompositionEngine, ElementConfigResource, defaultShadowDOMOptions, TemplatingEngine;

  function addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  }

  function _hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }

  _export('_hyphenate', _hyphenate);

  function _isAllWhitespace(node) {
    return !(node.auInterpolationTarget || /[^\t\n\r ]/.test(node.textContent));
  }

  _export('_isAllWhitespace', _isAllWhitespace);

  function viewEngineHooks(target) {
    var deco = function deco(t) {
      metadata.define(metadata.resource, new ViewEngineHooksResource(), t);
    };

    return target ? deco(target) : deco;
  }

  _export('viewEngineHooks', viewEngineHooks);

  function mi(name) {
    throw new Error('BindingLanguage must implement ' + name + '().');
  }

  function register(lookup, name, resource, type) {
    if (!name) {
      return;
    }

    var existing = lookup[name];
    if (existing) {
      if (existing !== resource) {
        throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
      }

      return;
    }

    lookup[name] = resource;
  }

  function getAnimatableElement(view) {
    if (view.animatableElement !== undefined) {
      return view.animatableElement;
    }

    var current = view.firstChild;

    while (current && current.nodeType !== 1) {
      current = current.nextSibling;
    }

    if (current && current.nodeType === 1) {
      return view.animatableElement = current.classList.contains('au-animate') ? current : null;
    }

    return view.animatableElement = null;
  }

  function elementContainerGet(key) {
    if (key === DOM.Element) {
      return this.element;
    }

    if (key === BoundViewFactory) {
      if (this.boundViewFactory) {
        return this.boundViewFactory;
      }

      var factory = this.instruction.viewFactory;
      var _partReplacements = this.partReplacements;

      if (_partReplacements) {
        factory = _partReplacements[factory.part] || factory;
      }

      this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
      return this.boundViewFactory;
    }

    if (key === ViewSlot) {
      if (this.viewSlot === undefined) {
        this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
        this.element.isContentProjectionSource = this.instruction.lifting;
        this.children.push(this.viewSlot);
      }

      return this.viewSlot;
    }

    if (key === ElementEvents) {
      return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
    }

    if (key === CompositionTransaction) {
      return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
    }

    if (key === ViewResources) {
      return this.viewResources;
    }

    if (key === TargetInstruction) {
      return this.instruction;
    }

    return this.superGet(key);
  }

  function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
    var container = parent.createChild();
    var providers = void 0;
    var i = void 0;

    container.element = element;
    container.instruction = instruction;
    container.children = children;
    container.viewResources = resources;
    container.partReplacements = partReplacements;

    providers = instruction.providers;
    i = providers.length;

    while (i--) {
      container._resolvers.set(providers[i], providerResolverInstance);
    }

    container.superGet = container.get;
    container.get = elementContainerGet;

    return container;
  }

  function hasAttribute(name) {
    return this._element.hasAttribute(name);
  }

  function getAttribute(name) {
    return this._element.getAttribute(name);
  }

  function setAttribute(name, value) {
    this._element.setAttribute(name, value);
  }

  function makeElementIntoAnchor(element, elementInstruction) {
    var anchor = DOM.createComment('anchor');

    if (elementInstruction) {
      var firstChild = element.firstChild;

      if (firstChild && firstChild.tagName === 'AU-CONTENT') {
        anchor.contentElement = firstChild;
      }

      anchor._element = element;

      anchor.hasAttribute = hasAttribute;
      anchor.getAttribute = getAttribute;
      anchor.setAttribute = setAttribute;
    }

    DOM.replaceNode(anchor, element);

    return anchor;
  }

  function applyInstructions(containers, element, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources) {
    var behaviorInstructions = instruction.behaviorInstructions;
    var expressions = instruction.expressions;
    var elementContainer = void 0;
    var i = void 0;
    var ii = void 0;
    var current = void 0;
    var instance = void 0;

    if (instruction.contentExpression) {
      bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
      element.nextSibling.auInterpolationTarget = true;
      element.parentNode.removeChild(element);
      return;
    }

    if (instruction.shadowSlot) {
      var commentAnchor = DOM.createComment('slot');
      var slot = void 0;

      if (instruction.slotDestination) {
        slot = new PassThroughSlot(commentAnchor, instruction.slotName, instruction.slotDestination, instruction.slotFallbackFactory);
      } else {
        slot = new ShadowSlot(commentAnchor, instruction.slotName, instruction.slotFallbackFactory);
      }

      DOM.replaceNode(commentAnchor, element);
      shadowSlots[instruction.slotName] = slot;
      controllers.push(slot);
      return;
    }

    if (behaviorInstructions.length) {
      if (!instruction.anchorIsContainer) {
        element = makeElementIntoAnchor(element, instruction.elementInstruction);
      }

      containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(elementContainer, current, element, bindings);
        controllers.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  function styleStringToObject(style, target) {
    var attributes = style.split(';');
    var firstIndexOfColon = void 0;
    var i = void 0;
    var current = void 0;
    var key = void 0;
    var value = void 0;

    target = target || {};

    for (i = 0; i < attributes.length; i++) {
      current = attributes[i];
      firstIndexOfColon = current.indexOf(':');
      key = current.substring(0, firstIndexOfColon).trim();
      value = current.substring(firstIndexOfColon + 1).trim();
      target[key] = value;
    }

    return target;
  }

  function styleObjectToString(obj) {
    var result = '';

    for (var key in obj) {
      result += key + ':' + obj[key] + ';';
    }

    return result;
  }

  function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
    var behaviorInstructions = instruction.behaviorInstructions;
    var expressions = instruction.expressions;
    var providers = instruction.providers;
    var values = instruction.values;
    var i = void 0;
    var ii = void 0;
    var current = void 0;
    var instance = void 0;
    var currentAttributeValue = void 0;

    i = providers.length;
    while (i--) {
      container._resolvers.set(providers[i], providerResolverInstance);
    }

    for (var key in values) {
      currentAttributeValue = element.getAttribute(key);

      if (currentAttributeValue) {
        if (key === 'class') {
          element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
        } else if (key === 'style') {
          var styleObject = styleStringToObject(values[key]);
          styleStringToObject(currentAttributeValue, styleObject);
          element.setAttribute('style', styleObjectToString(styleObject));
        }
      } else {
        element.setAttribute(key, values[key]);
      }
    }

    if (behaviorInstructions.length) {
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(container, current, element, bindings);

        if (instance.contentView) {
          children.push(instance.contentView);
        }

        controllers.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  function getNextInjectorId() {
    return ++nextInjectorId;
  }

  function getNextAUTargetID() {
    return (++lastAUTargetID).toString();
  }

  function makeIntoInstructionTarget(element) {
    var value = element.getAttribute('class');
    var auTargetID = getNextAUTargetID();

    element.setAttribute('class', value ? value + ' au-target' : 'au-target');
    element.setAttribute('au-target-id', auTargetID);

    return auTargetID;
  }

  function makeShadowSlot(compiler, resources, node, instructions, parentInjectorId) {
    var auShadowSlot = DOM.createElement('au-shadow-slot');
    DOM.replaceNode(auShadowSlot, node);

    var auTargetID = makeIntoInstructionTarget(auShadowSlot);
    var instruction = TargetInstruction.shadowSlot(parentInjectorId);

    instruction.slotName = node.getAttribute('name') || ShadowDOM.defaultSlotKey;
    instruction.slotDestination = node.getAttribute('slot');

    if (node.innerHTML.trim()) {
      var fragment = DOM.createDocumentFragment();
      var _child4 = void 0;

      while (_child4 = node.firstChild) {
        fragment.appendChild(_child4);
      }

      instruction.slotFallbackFactory = compiler.compile(fragment, resources);
    }

    instructions[auTargetID] = instruction;

    return auShadowSlot;
  }

  function ensureRegistryEntry(loader, urlOrRegistryEntry) {
    if (urlOrRegistryEntry instanceof TemplateRegistryEntry) {
      return Promise.resolve(urlOrRegistryEntry);
    }

    return loader.loadTemplate(urlOrRegistryEntry);
  }

  function getObserver(behavior, instance, name) {
    var lookup = instance.__observers__;

    if (lookup === undefined) {
      if (!behavior.isInitialized) {
        behavior.initialize(Container.instance || new Container(), instance.constructor);
      }

      lookup = behavior.observerLocator.getOrCreateObserversLookup(instance);
      behavior._ensurePropertiesDefined(instance, lookup);
    }

    return lookup[name];
  }

  function nextProviderId() {
    return ++lastProviderId;
  }

  function doProcessContent() {
    return true;
  }
  function doProcessAttributes() {}

  function createChildObserverDecorator(selectorOrConfig, all) {
    return function (target, key, descriptor) {
      var actualTarget = typeof key === 'string' ? target.constructor : target;
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, actualTarget);

      if (typeof selectorOrConfig === 'string') {
        selectorOrConfig = {
          selector: selectorOrConfig,
          name: key
        };
      }

      if (descriptor) {
        descriptor.writable = true;
        descriptor.configurable = true;
      }

      selectorOrConfig.all = all;
      r.addChildBinding(new ChildObserver(selectorOrConfig));
    };
  }

  function children(selectorOrConfig) {
    return createChildObserverDecorator(selectorOrConfig, true);
  }

  _export('children', children);

  function child(selectorOrConfig) {
    return createChildObserverDecorator(selectorOrConfig, false);
  }

  _export('child', child);

  function trackMutation(groupedMutations, binder, record) {
    var mutations = groupedMutations.get(binder);

    if (!mutations) {
      mutations = [];
      groupedMutations.set(binder, mutations);
    }

    mutations.push(record);
  }

  function onChildChange(mutations, observer) {
    var binders = observer.binders;
    var bindersLength = binders.length;
    var groupedMutations = new Map();

    for (var _i8 = 0, _ii8 = mutations.length; _i8 < _ii8; ++_i8) {
      var record = mutations[_i8];
      var added = record.addedNodes;
      var removed = record.removedNodes;

      for (var j = 0, jj = removed.length; j < jj; ++j) {
        var node = removed[j];
        if (node.nodeType === 1) {
          for (var k = 0; k < bindersLength; ++k) {
            var binder = binders[k];
            if (binder.onRemove(node)) {
              trackMutation(groupedMutations, binder, record);
            }
          }
        }
      }

      for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
        var _node = added[_j];
        if (_node.nodeType === 1) {
          for (var _k = 0; _k < bindersLength; ++_k) {
            var _binder = binders[_k];
            if (_binder.onAdd(_node)) {
              trackMutation(groupedMutations, _binder, record);
            }
          }
        }
      }
    }

    groupedMutations.forEach(function (value, key) {
      if (key.changeHandler !== null) {
        key.viewModel[key.changeHandler](value);
      }
    });
  }

  function remove(viewSlot, previous) {
    return Array.isArray(previous) ? viewSlot.removeMany(previous, true) : viewSlot.remove(previous, true);
  }

  function tryActivateViewModel(context) {
    if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
      return Promise.resolve();
    }

    return context.viewModel.activate(context.model) || Promise.resolve();
  }

  function validateBehaviorName(name, type) {
    if (/[A-Z]/.test(name)) {
      var newName = _hyphenate(name);
      LogManager.getLogger('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
      return newName;
    }
    return name;
  }

  function resource(instance) {
    return function (target) {
      metadata.define(metadata.resource, instance, target);
    };
  }

  _export('resource', resource);

  function behavior(override) {
    return function (target) {
      if (override instanceof HtmlBehaviorResource) {
        metadata.define(metadata.resource, override, target);
      } else {
        var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
        Object.assign(r, override);
      }
    };
  }

  _export('behavior', behavior);

  function customElement(name) {
    return function (target) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      r.elementName = validateBehaviorName(name, 'custom element');
    };
  }

  _export('customElement', customElement);

  function customAttribute(name, defaultBindingMode, aliases) {
    return function (target) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
      r.attributeName = validateBehaviorName(name, 'custom attribute');
      r.attributeDefaultBindingMode = defaultBindingMode;
      r.aliases = aliases;
    };
  }

  _export('customAttribute', customAttribute);

  function templateController(target) {
    var deco = function deco(t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.liftsContent = true;
    };

    return target ? deco(target) : deco;
  }

  _export('templateController', templateController);

  function bindable(nameOrConfigOrTarget, key, descriptor) {
    var deco = function deco(target, key2, descriptor2) {
      var actualTarget = key2 ? target.constructor : target;
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, actualTarget);
      var prop = void 0;

      if (key2) {
        nameOrConfigOrTarget = nameOrConfigOrTarget || {};
        nameOrConfigOrTarget.name = key2;
      }

      prop = new BindableProperty(nameOrConfigOrTarget);
      return prop.registerWith(actualTarget, r, descriptor2);
    };

    if (!nameOrConfigOrTarget) {
      return deco;
    }

    if (key) {
      var _target = nameOrConfigOrTarget;
      nameOrConfigOrTarget = null;
      return deco(_target, key, descriptor);
    }

    return deco;
  }

  _export('bindable', bindable);

  function dynamicOptions(target) {
    var deco = function deco(t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.hasDynamicOptions = true;
    };

    return target ? deco(target) : deco;
  }

  _export('dynamicOptions', dynamicOptions);

  function useShadowDOM(targetOrOptions) {
    var options = typeof targetOrOptions === 'function' || !targetOrOptions ? defaultShadowDOMOptions : targetOrOptions;

    var deco = function deco(t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.targetShadowDOM = true;
      r.shadowDOMOptions = options;
    };

    return typeof targetOrOptions === 'function' ? deco(targetOrOptions) : deco;
  }

  _export('useShadowDOM', useShadowDOM);

  function processAttributes(processor) {
    return function (t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.processAttributes = function (compiler, resources, node, attributes, elementInstruction) {
        try {
          processor(compiler, resources, node, attributes, elementInstruction);
        } catch (error) {
          LogManager.getLogger('templating').error(error);
        }
      };
    };
  }

  _export('processAttributes', processAttributes);

  function doNotProcessContent() {
    return false;
  }

  function processContent(processor) {
    return function (t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.processContent = processor ? function (compiler, resources, node, instruction) {
        try {
          return processor(compiler, resources, node, instruction);
        } catch (error) {
          LogManager.getLogger('templating').error(error);
          return false;
        }
      } : doNotProcessContent;
    };
  }

  _export('processContent', processContent);

  function containerless(target) {
    var deco = function deco(t) {
      var r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, t);
      r.containerless = true;
    };

    return target ? deco(target) : deco;
  }

  _export('containerless', containerless);

  function useViewStrategy(strategy) {
    return function (target) {
      metadata.define(ViewLocator.viewStrategyMetadataKey, strategy, target);
    };
  }

  _export('useViewStrategy', useViewStrategy);

  function useView(path) {
    return useViewStrategy(new RelativeViewStrategy(path));
  }

  _export('useView', useView);

  function inlineView(markup, dependencies, dependencyBaseUrl) {
    return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
  }

  _export('inlineView', inlineView);

  function noView(targetOrDependencies, dependencyBaseUrl) {
    var target = void 0;
    var dependencies = void 0;
    if (typeof targetOrDependencies === 'function') {
      target = targetOrDependencies;
    } else {
      dependencies = targetOrDependencies;
      target = undefined;
    }

    var deco = function deco(t) {
      metadata.define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(dependencies, dependencyBaseUrl), t);
    };

    return target ? deco(target) : deco;
  }

  _export('noView', noView);

  function elementConfig(target) {
    var deco = function deco(t) {
      metadata.define(metadata.resource, new ElementConfigResource(), t);
    };

    return target ? deco(target) : deco;
  }

  _export('elementConfig', elementConfig);

  function viewResources() {
    for (var _len = arguments.length, resources = Array(_len), _key = 0; _key < _len; _key++) {
      resources[_key] = arguments[_key];
    }

    return function (target) {
      metadata.define(ViewEngine.viewModelRequireMetadataKey, resources, target);
    };
  }

  _export('viewResources', viewResources);

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
      Origin = _aureliaMetadata.Origin;
      protocol = _aureliaMetadata.protocol;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      PLATFORM = _aureliaPal.PLATFORM;
      FEATURE = _aureliaPal.FEATURE;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function (_aureliaLoader) {
      TemplateRegistryEntry = _aureliaLoader.TemplateRegistryEntry;
      Loader = _aureliaLoader.Loader;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
      resolver = _aureliaDependencyInjection.resolver;
    }, function (_aureliaBinding) {
      Binding = _aureliaBinding.Binding;
      createOverrideContext = _aureliaBinding.createOverrideContext;
      ValueConverterResource = _aureliaBinding.ValueConverterResource;
      BindingBehaviorResource = _aureliaBinding.BindingBehaviorResource;
      subscriberCollection = _aureliaBinding.subscriberCollection;
      bindingMode = _aureliaBinding.bindingMode;
      ObserverLocator = _aureliaBinding.ObserverLocator;
      EventManager = _aureliaBinding.EventManager;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('animationEvent', animationEvent = {
        enterBegin: 'animation:enter:begin',
        enterActive: 'animation:enter:active',
        enterDone: 'animation:enter:done',
        enterTimeout: 'animation:enter:timeout',

        leaveBegin: 'animation:leave:begin',
        leaveActive: 'animation:leave:active',
        leaveDone: 'animation:leave:done',
        leaveTimeout: 'animation:leave:timeout',

        staggerNext: 'animation:stagger:next',

        removeClassBegin: 'animation:remove-class:begin',
        removeClassActive: 'animation:remove-class:active',
        removeClassDone: 'animation:remove-class:done',
        removeClassTimeout: 'animation:remove-class:timeout',

        addClassBegin: 'animation:add-class:begin',
        addClassActive: 'animation:add-class:active',
        addClassDone: 'animation:add-class:done',
        addClassTimeout: 'animation:add-class:timeout',

        animateBegin: 'animation:animate:begin',
        animateActive: 'animation:animate:active',
        animateDone: 'animation:animate:done',
        animateTimeout: 'animation:animate:timeout',

        sequenceBegin: 'animation:sequence:begin',
        sequenceDone: 'animation:sequence:done'
      });

      _export('animationEvent', animationEvent);

      _export('Animator', Animator = function () {
        function Animator() {}

        Animator.prototype.enter = function enter(element) {
          return Promise.resolve(false);
        };

        Animator.prototype.leave = function leave(element) {
          return Promise.resolve(false);
        };

        Animator.prototype.removeClass = function removeClass(element, className) {
          element.classList.remove(className);
          return Promise.resolve(false);
        };

        Animator.prototype.addClass = function addClass(element, className) {
          element.classList.add(className);
          return Promise.resolve(false);
        };

        Animator.prototype.animate = function animate(element, className) {
          return Promise.resolve(false);
        };

        Animator.prototype.runSequence = function runSequence(animations) {};

        Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

        Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

        return Animator;
      }());

      _export('Animator', Animator);

      _export('CompositionTransactionNotifier', CompositionTransactionNotifier = function () {
        function CompositionTransactionNotifier(owner) {

          this.owner = owner;
          this.owner._compositionCount++;
        }

        CompositionTransactionNotifier.prototype.done = function done() {
          this.owner._compositionCount--;
          this.owner._tryCompleteTransaction();
        };

        return CompositionTransactionNotifier;
      }());

      _export('CompositionTransactionNotifier', CompositionTransactionNotifier);

      _export('CompositionTransactionOwnershipToken', CompositionTransactionOwnershipToken = function () {
        function CompositionTransactionOwnershipToken(owner) {

          this.owner = owner;
          this.owner._ownershipToken = this;
          this.thenable = this._createThenable();
        }

        CompositionTransactionOwnershipToken.prototype.waitForCompositionComplete = function waitForCompositionComplete() {
          this.owner._tryCompleteTransaction();
          return this.thenable;
        };

        CompositionTransactionOwnershipToken.prototype.resolve = function resolve() {
          this._resolveCallback();
        };

        CompositionTransactionOwnershipToken.prototype._createThenable = function _createThenable() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            _this._resolveCallback = resolve;
          });
        };

        return CompositionTransactionOwnershipToken;
      }());

      _export('CompositionTransactionOwnershipToken', CompositionTransactionOwnershipToken);

      _export('CompositionTransaction', CompositionTransaction = function () {
        function CompositionTransaction() {

          this._ownershipToken = null;
          this._compositionCount = 0;
        }

        CompositionTransaction.prototype.tryCapture = function tryCapture() {
          return this._ownershipToken === null ? new CompositionTransactionOwnershipToken(this) : null;
        };

        CompositionTransaction.prototype.enlist = function enlist() {
          return new CompositionTransactionNotifier(this);
        };

        CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
          if (this._compositionCount <= 0) {
            this._compositionCount = 0;

            if (this._ownershipToken !== null) {
              var token = this._ownershipToken;
              this._ownershipToken = null;
              token.resolve();
            }
          }
        };

        return CompositionTransaction;
      }());

      _export('CompositionTransaction', CompositionTransaction);

      capitalMatcher = /([A-Z])/g;

      _export('ViewEngineHooksResource', ViewEngineHooksResource = function () {
        function ViewEngineHooksResource() {}

        ViewEngineHooksResource.prototype.initialize = function initialize(container, target) {
          this.instance = container.get(target);
        };

        ViewEngineHooksResource.prototype.register = function register(registry, name) {
          registry.registerViewEngineHooks(this.instance);
        };

        ViewEngineHooksResource.prototype.load = function load(container, target) {};

        ViewEngineHooksResource.convention = function convention(name) {
          if (name.endsWith('ViewEngineHooks')) {
            return new ViewEngineHooksResource();
          }
        };

        return ViewEngineHooksResource;
      }());

      _export('ViewEngineHooksResource', ViewEngineHooksResource);

      _export('ElementEvents', ElementEvents = function () {
        function ElementEvents(element) {

          this.element = element;
          this.subscriptions = {};
        }

        ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
          this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
          this.subscriptions[handler.eventName].push(handler);
        };

        ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
          var index = void 0;
          var subscriptions = this.subscriptions[handler.eventName];
          if (subscriptions) {
            index = subscriptions.indexOf(handler);
            if (index > -1) {
              subscriptions.splice(index, 1);
            }
          }
          return handler;
        };

        ElementEvents.prototype.publish = function publish(eventName) {
          var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          var event = DOM.createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
          this.element.dispatchEvent(event);
        };

        ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
          var _this2 = this;

          var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (handler && typeof handler === 'function') {
            handler.eventName = eventName;
            handler.handler = handler;
            handler.bubbles = bubbles;
            handler.dispose = function () {
              _this2.element.removeEventListener(eventName, handler, bubbles);
              _this2._dequeueHandler(handler);
            };
            this.element.addEventListener(eventName, handler, bubbles);
            this._enqueueHandler(handler);
            return handler;
          }

          return undefined;
        };

        ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
          var _this3 = this;

          var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (handler && typeof handler === 'function') {
            var _ret = function () {
              var _handler = function _handler(event) {
                handler(event);
                _handler.dispose();
              };
              return {
                v: _this3.subscribe(eventName, _handler, bubbles)
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }

          return undefined;
        };

        ElementEvents.prototype.dispose = function dispose(eventName) {
          if (eventName && typeof eventName === 'string') {
            var subscriptions = this.subscriptions[eventName];
            if (subscriptions) {
              while (subscriptions.length) {
                var subscription = subscriptions.pop();
                if (subscription) {
                  subscription.dispose();
                }
              }
            }
          } else {
            this.disposeAll();
          }
        };

        ElementEvents.prototype.disposeAll = function disposeAll() {
          for (var key in this.subscriptions) {
            this.dispose(key);
          }
        };

        return ElementEvents;
      }());

      _export('ElementEvents', ElementEvents);

      _export('ResourceLoadContext', ResourceLoadContext = function () {
        function ResourceLoadContext() {

          this.dependencies = {};
        }

        ResourceLoadContext.prototype.addDependency = function addDependency(url) {
          this.dependencies[url] = true;
        };

        ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
          return url in this.dependencies;
        };

        return ResourceLoadContext;
      }());

      _export('ResourceLoadContext', ResourceLoadContext);

      _export('ViewCompileInstruction', ViewCompileInstruction = function ViewCompileInstruction() {
        var targetShadowDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var compileSurrogate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.targetShadowDOM = targetShadowDOM;
        this.compileSurrogate = compileSurrogate;
        this.associatedModuleId = null;
      });

      _export('ViewCompileInstruction', ViewCompileInstruction);

      ViewCompileInstruction.normal = new ViewCompileInstruction();

      _export('BehaviorInstruction', BehaviorInstruction = function () {
        BehaviorInstruction.enhance = function enhance() {
          var instruction = new BehaviorInstruction();
          instruction.enhance = true;
          return instruction;
        };

        BehaviorInstruction.unitTest = function unitTest(type, attributes) {
          var instruction = new BehaviorInstruction();
          instruction.type = type;
          instruction.attributes = attributes || {};
          return instruction;
        };

        BehaviorInstruction.element = function element(node, type) {
          var instruction = new BehaviorInstruction();
          instruction.type = type;
          instruction.attributes = {};
          instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
          instruction.initiatedByBehavior = true;
          return instruction;
        };

        BehaviorInstruction.attribute = function attribute(attrName, type) {
          var instruction = new BehaviorInstruction();
          instruction.attrName = attrName;
          instruction.type = type || null;
          instruction.attributes = {};
          return instruction;
        };

        BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
          var instruction = new BehaviorInstruction();
          instruction.host = host;
          instruction.viewModel = viewModel;
          instruction.viewFactory = viewFactory;
          instruction.inheritBindingContext = true;
          return instruction;
        };

        function BehaviorInstruction() {

          this.initiatedByBehavior = false;
          this.enhance = false;
          this.partReplacements = null;
          this.viewFactory = null;
          this.originalAttrName = null;
          this.skipContentProcessing = false;
          this.contentFactory = null;
          this.viewModel = null;
          this.anchorIsContainer = false;
          this.host = null;
          this.attributes = null;
          this.type = null;
          this.attrName = null;
          this.inheritBindingContext = false;
        }

        return BehaviorInstruction;
      }());

      _export('BehaviorInstruction', BehaviorInstruction);

      BehaviorInstruction.normal = new BehaviorInstruction();

      _export('TargetInstruction', TargetInstruction = (_temp = _class = function () {
        TargetInstruction.shadowSlot = function shadowSlot(parentInjectorId) {
          var instruction = new TargetInstruction();
          instruction.parentInjectorId = parentInjectorId;
          instruction.shadowSlot = true;
          return instruction;
        };

        TargetInstruction.contentExpression = function contentExpression(expression) {
          var instruction = new TargetInstruction();
          instruction.contentExpression = expression;
          return instruction;
        };

        TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
          var instruction = new TargetInstruction();
          instruction.parentInjectorId = parentInjectorId;
          instruction.expressions = TargetInstruction.noExpressions;
          instruction.behaviorInstructions = [liftingInstruction];
          instruction.viewFactory = liftingInstruction.viewFactory;
          instruction.providers = [liftingInstruction.type.target];
          instruction.lifting = true;
          return instruction;
        };

        TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
          var instruction = new TargetInstruction();
          instruction.injectorId = injectorId;
          instruction.parentInjectorId = parentInjectorId;
          instruction.providers = providers;
          instruction.behaviorInstructions = behaviorInstructions;
          instruction.expressions = expressions;
          instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
          instruction.elementInstruction = elementInstruction;
          return instruction;
        };

        TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
          var instruction = new TargetInstruction();
          instruction.expressions = expressions;
          instruction.behaviorInstructions = behaviorInstructions;
          instruction.providers = providers;
          instruction.values = values;
          return instruction;
        };

        function TargetInstruction() {

          this.injectorId = null;
          this.parentInjectorId = null;

          this.shadowSlot = false;
          this.slotName = null;
          this.slotFallbackFactory = null;

          this.contentExpression = null;

          this.expressions = null;
          this.behaviorInstructions = null;
          this.providers = null;

          this.viewFactory = null;

          this.anchorIsContainer = false;
          this.elementInstruction = null;
          this.lifting = false;

          this.values = null;
        }

        return TargetInstruction;
      }(), _class.noExpressions = Object.freeze([]), _temp));

      _export('TargetInstruction', TargetInstruction);

      _export('viewStrategy', viewStrategy = protocol.create('aurelia:view-strategy', {
        validate: function validate(target) {
          if (!(typeof target.loadViewFactory === 'function')) {
            return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
          }

          return true;
        },
        compose: function compose(target) {
          if (!(typeof target.makeRelativeTo === 'function')) {
            target.makeRelativeTo = PLATFORM.noop;
          }
        }
      }));

      _export('viewStrategy', viewStrategy);

      _export('RelativeViewStrategy', RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class2 = function () {
        function RelativeViewStrategy(path) {

          this.path = path;
          this.absolutePath = null;
        }

        RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
          if (this.absolutePath === null && this.moduleId) {
            this.absolutePath = relativeToFile(this.path, this.moduleId);
          }

          compileInstruction.associatedModuleId = this.moduleId;
          return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext, target);
        };

        RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
          if (this.absolutePath === null) {
            this.absolutePath = relativeToFile(this.path, file);
          }
        };

        return RelativeViewStrategy;
      }()) || _class2));

      _export('RelativeViewStrategy', RelativeViewStrategy);

      _export('ConventionalViewStrategy', ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class3 = function () {
        function ConventionalViewStrategy(viewLocator, origin) {

          this.moduleId = origin.moduleId;
          this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
        }

        ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
          compileInstruction.associatedModuleId = this.moduleId;
          return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext, target);
        };

        return ConventionalViewStrategy;
      }()) || _class3));

      _export('ConventionalViewStrategy', ConventionalViewStrategy);

      _export('NoViewStrategy', NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class4 = function () {
        function NoViewStrategy(dependencies, dependencyBaseUrl) {

          this.dependencies = dependencies || null;
          this.dependencyBaseUrl = dependencyBaseUrl || '';
        }

        NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
          var entry = this.entry;
          var dependencies = this.dependencies;

          if (entry && entry.factoryIsReady) {
            return Promise.resolve(null);
          }

          this.entry = entry = new TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);

          entry.dependencies = [];
          entry.templateIsLoaded = true;

          if (dependencies !== null) {
            for (var i = 0, ii = dependencies.length; i < ii; ++i) {
              var current = dependencies[i];

              if (typeof current === 'string' || typeof current === 'function') {
                entry.addDependency(current);
              } else {
                entry.addDependency(current.from, current.as);
              }
            }
          }

          compileInstruction.associatedModuleId = this.moduleId;

          return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
        };

        return NoViewStrategy;
      }()) || _class4));

      _export('NoViewStrategy', NoViewStrategy);

      _export('TemplateRegistryViewStrategy', TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class5 = function () {
        function TemplateRegistryViewStrategy(moduleId, entry) {

          this.moduleId = moduleId;
          this.entry = entry;
        }

        TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
          var entry = this.entry;

          if (entry.factoryIsReady) {
            return Promise.resolve(entry.factory);
          }

          compileInstruction.associatedModuleId = this.moduleId;
          return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
        };

        return TemplateRegistryViewStrategy;
      }()) || _class5));

      _export('TemplateRegistryViewStrategy', TemplateRegistryViewStrategy);

      _export('InlineViewStrategy', InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class6 = function () {
        function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {

          this.markup = markup;
          this.dependencies = dependencies || null;
          this.dependencyBaseUrl = dependencyBaseUrl || '';
        }

        InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
          var entry = this.entry;
          var dependencies = this.dependencies;

          if (entry && entry.factoryIsReady) {
            return Promise.resolve(entry.factory);
          }

          this.entry = entry = new TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);
          entry.template = DOM.createTemplateFromMarkup(this.markup);

          if (dependencies !== null) {
            for (var i = 0, ii = dependencies.length; i < ii; ++i) {
              var current = dependencies[i];

              if (typeof current === 'string' || typeof current === 'function') {
                entry.addDependency(current);
              } else {
                entry.addDependency(current.from, current.as);
              }
            }
          }

          compileInstruction.associatedModuleId = this.moduleId;
          return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
        };

        return InlineViewStrategy;
      }()) || _class6));

      _export('InlineViewStrategy', InlineViewStrategy);

      _export('ViewLocator', ViewLocator = (_temp2 = _class7 = function () {
        function ViewLocator() {}

        ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
          if (!value) {
            return null;
          }

          if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
            var _origin = Origin.get(value.constructor);

            value = value.getViewStrategy();

            if (typeof value === 'string') {
              value = new RelativeViewStrategy(value);
            }

            viewStrategy.assert(value);

            if (_origin.moduleId) {
              value.makeRelativeTo(_origin.moduleId);
            }

            return value;
          }

          if (typeof value === 'string') {
            value = new RelativeViewStrategy(value);
          }

          if (viewStrategy.validate(value)) {
            return value;
          }

          if (typeof value !== 'function') {
            value = value.constructor;
          }

          var origin = Origin.get(value);
          var strategy = metadata.get(ViewLocator.viewStrategyMetadataKey, value);

          if (!strategy) {
            if (!origin.moduleId) {
              throw new Error('Cannot determine default view strategy for object.', value);
            }

            strategy = this.createFallbackViewStrategy(origin);
          } else if (origin.moduleId) {
            strategy.moduleId = origin.moduleId;
          }

          return strategy;
        };

        ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
          return new ConventionalViewStrategy(this, origin);
        };

        ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
          var moduleId = origin.moduleId;
          var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
          return id + '.html';
        };

        return ViewLocator;
      }(), _class7.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp2));

      _export('ViewLocator', ViewLocator);

      _export('BindingLanguage', BindingLanguage = function () {
        function BindingLanguage() {}

        BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
          mi('inspectAttribute');
        };

        BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
          mi('createAttributeInstruction');
        };

        BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
          mi('inspectTextContent');
        };

        return BindingLanguage;
      }());

      _export('BindingLanguage', BindingLanguage);

      noNodes = Object.freeze([]);

      _export('SlotCustomAttribute', SlotCustomAttribute = (_dec6 = inject(DOM.Element), _dec6(_class8 = function () {
        function SlotCustomAttribute(element) {

          this.element = element;
          this.element.auSlotAttribute = this;
        }

        SlotCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

        return SlotCustomAttribute;
      }()) || _class8));

      _export('SlotCustomAttribute', SlotCustomAttribute);

      _export('PassThroughSlot', PassThroughSlot = function () {
        function PassThroughSlot(anchor, name, destinationName, fallbackFactory) {

          this.anchor = anchor;
          this.anchor.viewSlot = this;
          this.name = name;
          this.destinationName = destinationName;
          this.fallbackFactory = fallbackFactory;
          this.destinationSlot = null;
          this.projections = 0;
          this.contentView = null;

          var attr = new SlotCustomAttribute(this.anchor);
          attr.value = this.destinationName;
        }

        PassThroughSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
          if (this.contentView === null) {
            this.contentView = this.fallbackFactory.create(this.ownerView.container);
            this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);

            var slots = Object.create(null);
            slots[this.destinationSlot.name] = this.destinationSlot;

            ShadowDOM.distributeView(this.contentView, slots, projectionSource, index, this.destinationSlot.name);
          }
        };

        PassThroughSlot.prototype.passThroughTo = function passThroughTo(destinationSlot) {
          this.destinationSlot = destinationSlot;
        };

        PassThroughSlot.prototype.addNode = function addNode(view, node, projectionSource, index) {
          if (this.contentView !== null) {
            this.contentView.removeNodes();
            this.contentView.detached();
            this.contentView.unbind();
            this.contentView = null;
          }

          if (node.viewSlot instanceof PassThroughSlot) {
            node.viewSlot.passThroughTo(this);
            return;
          }

          this.projections++;
          this.destinationSlot.addNode(view, node, projectionSource, index);
        };

        PassThroughSlot.prototype.removeView = function removeView(view, projectionSource) {
          this.projections--;
          this.destinationSlot.removeView(view, projectionSource);

          if (this.needsFallbackRendering) {
            this.renderFallbackContent(null, noNodes, projectionSource);
          }
        };

        PassThroughSlot.prototype.removeAll = function removeAll(projectionSource) {
          this.projections = 0;
          this.destinationSlot.removeAll(projectionSource);

          if (this.needsFallbackRendering) {
            this.renderFallbackContent(null, noNodes, projectionSource);
          }
        };

        PassThroughSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
          this.destinationSlot.projectFrom(view, projectionSource);
        };

        PassThroughSlot.prototype.created = function created(ownerView) {
          this.ownerView = ownerView;
        };

        PassThroughSlot.prototype.bind = function bind(view) {
          if (this.contentView) {
            this.contentView.bind(view.bindingContext, view.overrideContext);
          }
        };

        PassThroughSlot.prototype.attached = function attached() {
          if (this.contentView) {
            this.contentView.attached();
          }
        };

        PassThroughSlot.prototype.detached = function detached() {
          if (this.contentView) {
            this.contentView.detached();
          }
        };

        PassThroughSlot.prototype.unbind = function unbind() {
          if (this.contentView) {
            this.contentView.unbind();
          }
        };

        _createClass(PassThroughSlot, [{
          key: 'needsFallbackRendering',
          get: function get() {
            return this.fallbackFactory && this.projections === 0;
          }
        }]);

        return PassThroughSlot;
      }());

      _export('PassThroughSlot', PassThroughSlot);

      _export('ShadowSlot', ShadowSlot = function () {
        function ShadowSlot(anchor, name, fallbackFactory) {

          this.anchor = anchor;
          this.anchor.isContentProjectionSource = true;
          this.anchor.viewSlot = this;
          this.name = name;
          this.fallbackFactory = fallbackFactory;
          this.contentView = null;
          this.projections = 0;
          this.children = [];
          this.projectFromAnchors = null;
          this.destinationSlots = null;
        }

        ShadowSlot.prototype.addNode = function addNode(view, node, projectionSource, index, destination) {
          if (this.contentView !== null) {
            this.contentView.removeNodes();
            this.contentView.detached();
            this.contentView.unbind();
            this.contentView = null;
          }

          if (node.viewSlot instanceof PassThroughSlot) {
            node.viewSlot.passThroughTo(this);
            return;
          }

          if (this.destinationSlots !== null) {
            ShadowDOM.distributeNodes(view, [node], this.destinationSlots, this, index);
          } else {
            node.auOwnerView = view;
            node.auProjectionSource = projectionSource;
            node.auAssignedSlot = this;

            var anchor = this._findAnchor(view, node, projectionSource, index);
            var parent = anchor.parentNode;

            parent.insertBefore(node, anchor);
            this.children.push(node);
            this.projections++;
          }
        };

        ShadowSlot.prototype.removeView = function removeView(view, projectionSource) {
          if (this.destinationSlots !== null) {
            ShadowDOM.undistributeView(view, this.destinationSlots, this);
          } else if (this.contentView && this.contentView.hasSlots) {
            ShadowDOM.undistributeView(view, this.contentView.slots, projectionSource);
          } else {
            var found = this.children.find(function (x) {
              return x.auSlotProjectFrom === projectionSource;
            });
            if (found) {
              var _children = found.auProjectionChildren;

              for (var i = 0, ii = _children.length; i < ii; ++i) {
                var _child = _children[i];

                if (_child.auOwnerView === view) {
                  _children.splice(i, 1);
                  view.fragment.appendChild(_child);
                  i--;ii--;
                  this.projections--;
                }
              }

              if (this.needsFallbackRendering) {
                this.renderFallbackContent(view, noNodes, projectionSource);
              }
            }
          }
        };

        ShadowSlot.prototype.removeAll = function removeAll(projectionSource) {
          if (this.destinationSlots !== null) {
            ShadowDOM.undistributeAll(this.destinationSlots, this);
          } else if (this.contentView && this.contentView.hasSlots) {
            ShadowDOM.undistributeAll(this.contentView.slots, projectionSource);
          } else {
            var found = this.children.find(function (x) {
              return x.auSlotProjectFrom === projectionSource;
            });

            if (found) {
              var _children2 = found.auProjectionChildren;
              for (var i = 0, ii = _children2.length; i < ii; ++i) {
                var _child2 = _children2[i];
                _child2.auOwnerView.fragment.appendChild(_child2);
                this.projections--;
              }

              found.auProjectionChildren = [];

              if (this.needsFallbackRendering) {
                this.renderFallbackContent(null, noNodes, projectionSource);
              }
            }
          }
        };

        ShadowSlot.prototype._findAnchor = function _findAnchor(view, node, projectionSource, index) {
          if (projectionSource) {
            var found = this.children.find(function (x) {
              return x.auSlotProjectFrom === projectionSource;
            });
            if (found) {
              if (index !== undefined) {
                var _children3 = found.auProjectionChildren;
                var viewIndex = -1;
                var lastView = void 0;

                for (var i = 0, ii = _children3.length; i < ii; ++i) {
                  var current = _children3[i];

                  if (current.auOwnerView !== lastView) {
                    viewIndex++;
                    lastView = current.auOwnerView;

                    if (viewIndex >= index && lastView !== view) {
                      _children3.splice(i, 0, node);
                      return current;
                    }
                  }
                }
              }

              found.auProjectionChildren.push(node);
              return found;
            }
          }

          return this.anchor;
        };

        ShadowSlot.prototype.projectTo = function projectTo(slots) {
          this.destinationSlots = slots;
        };

        ShadowSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
          var anchor = DOM.createComment('anchor');
          var parent = this.anchor.parentNode;
          anchor.auSlotProjectFrom = projectionSource;
          anchor.auOwnerView = view;
          anchor.auProjectionChildren = [];
          parent.insertBefore(anchor, this.anchor);
          this.children.push(anchor);

          if (this.projectFromAnchors === null) {
            this.projectFromAnchors = [];
          }

          this.projectFromAnchors.push(anchor);
        };

        ShadowSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
          if (this.contentView === null) {
            this.contentView = this.fallbackFactory.create(this.ownerView.container);
            this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
            this.contentView.insertNodesBefore(this.anchor);
          }

          if (this.contentView.hasSlots) {
            var slots = this.contentView.slots;
            var projectFromAnchors = this.projectFromAnchors;

            if (projectFromAnchors !== null) {
              for (var slotName in slots) {
                var slot = slots[slotName];

                for (var i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
                  var anchor = projectFromAnchors[i];
                  slot.projectFrom(anchor.auOwnerView, anchor.auSlotProjectFrom);
                }
              }
            }

            this.fallbackSlots = slots;
            ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index);
          }
        };

        ShadowSlot.prototype.created = function created(ownerView) {
          this.ownerView = ownerView;
        };

        ShadowSlot.prototype.bind = function bind(view) {
          if (this.contentView) {
            this.contentView.bind(view.bindingContext, view.overrideContext);
          }
        };

        ShadowSlot.prototype.attached = function attached() {
          if (this.contentView) {
            this.contentView.attached();
          }
        };

        ShadowSlot.prototype.detached = function detached() {
          if (this.contentView) {
            this.contentView.detached();
          }
        };

        ShadowSlot.prototype.unbind = function unbind() {
          if (this.contentView) {
            this.contentView.unbind();
          }
        };

        _createClass(ShadowSlot, [{
          key: 'needsFallbackRendering',
          get: function get() {
            return this.fallbackFactory && this.projections === 0;
          }
        }]);

        return ShadowSlot;
      }());

      _export('ShadowSlot', ShadowSlot);

      _export('ShadowDOM', ShadowDOM = (_temp3 = _class9 = function () {
        function ShadowDOM() {}

        ShadowDOM.getSlotName = function getSlotName(node) {
          if (node.auSlotAttribute === undefined) {
            return ShadowDOM.defaultSlotKey;
          }

          return node.auSlotAttribute.value;
        };

        ShadowDOM.distributeView = function distributeView(view, slots, projectionSource, index, destinationOverride) {
          var nodes = void 0;

          if (view === null) {
            nodes = noNodes;
          } else {
            var childNodes = view.fragment.childNodes;
            var ii = childNodes.length;
            nodes = new Array(ii);

            for (var i = 0; i < ii; ++i) {
              nodes[i] = childNodes[i];
            }
          }

          ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride);
        };

        ShadowDOM.undistributeView = function undistributeView(view, slots, projectionSource) {
          for (var slotName in slots) {
            slots[slotName].removeView(view, projectionSource);
          }
        };

        ShadowDOM.undistributeAll = function undistributeAll(slots, projectionSource) {
          for (var slotName in slots) {
            slots[slotName].removeAll(projectionSource);
          }
        };

        ShadowDOM.distributeNodes = function distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride) {
          for (var i = 0, ii = nodes.length; i < ii; ++i) {
            var currentNode = nodes[i];
            var nodeType = currentNode.nodeType;

            if (currentNode.isContentProjectionSource) {
              currentNode.viewSlot.projectTo(slots);

              for (var slotName in slots) {
                slots[slotName].projectFrom(view, currentNode.viewSlot);
              }

              nodes.splice(i, 1);
              ii--;i--;
            } else if (nodeType === 1 || nodeType === 3 || currentNode.viewSlot instanceof PassThroughSlot) {
              if (nodeType === 3 && _isAllWhitespace(currentNode)) {
                nodes.splice(i, 1);
                ii--;i--;
              } else {
                var found = slots[destinationOverride || ShadowDOM.getSlotName(currentNode)];

                if (found) {
                  found.addNode(view, currentNode, projectionSource, index);
                  nodes.splice(i, 1);
                  ii--;i--;
                }
              }
            } else {
              nodes.splice(i, 1);
              ii--;i--;
            }
          }

          for (var _slotName in slots) {
            var slot = slots[_slotName];

            if (slot.needsFallbackRendering) {
              slot.renderFallbackContent(view, nodes, projectionSource, index);
            }
          }
        };

        return ShadowDOM;
      }(), _class9.defaultSlotKey = '__au-default-slot-key__', _temp3));

      _export('ShadowDOM', ShadowDOM);

      _export('ViewResources', ViewResources = function () {
        function ViewResources(parent, viewUrl) {

          this.bindingLanguage = null;

          this.parent = parent || null;
          this.hasParent = this.parent !== null;
          this.viewUrl = viewUrl || '';
          this.lookupFunctions = {
            valueConverters: this.getValueConverter.bind(this),
            bindingBehaviors: this.getBindingBehavior.bind(this)
          };
          this.attributes = Object.create(null);
          this.elements = Object.create(null);
          this.valueConverters = Object.create(null);
          this.bindingBehaviors = Object.create(null);
          this.attributeMap = Object.create(null);
          this.values = Object.create(null);
          this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
        }

        ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
          if (typeof obj[name] === 'function') {
            var func = obj[name].bind(obj);
            var counter = 1;
            var callbackName = void 0;

            while (this[callbackName = name + counter.toString()] !== undefined) {
              counter++;
            }

            this[name] = true;
            this[callbackName] = func;
          }
        };

        ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
          if (this.hasParent) {
            this.parent._invokeHook(name, one, two, three, four);
          }

          if (this[name]) {
            this[name + '1'](one, two, three, four);

            var callbackName = name + '2';
            if (this[callbackName]) {
              this[callbackName](one, two, three, four);

              callbackName = name + '3';
              if (this[callbackName]) {
                this[callbackName](one, two, three, four);

                var counter = 4;

                while (this[callbackName = name + counter.toString()] !== undefined) {
                  this[callbackName](one, two, three, four);
                  counter++;
                }
              }
            }
          }
        };

        ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
          this._tryAddHook(hooks, 'beforeCompile');
          this._tryAddHook(hooks, 'afterCompile');
          this._tryAddHook(hooks, 'beforeCreate');
          this._tryAddHook(hooks, 'afterCreate');
          this._tryAddHook(hooks, 'beforeBind');
          this._tryAddHook(hooks, 'beforeUnbind');
        };

        ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
          return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
        };

        ViewResources.prototype.patchInParent = function patchInParent(newParent) {
          var originalParent = this.parent;

          this.parent = newParent || null;
          this.hasParent = this.parent !== null;

          if (newParent.parent === null) {
            newParent.parent = originalParent;
            newParent.hasParent = originalParent !== null;
          }
        };

        ViewResources.prototype.relativeToView = function relativeToView(path) {
          return relativeToFile(path, this.viewUrl);
        };

        ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
          register(this.elements, tagName, behavior, 'an Element');
        };

        ViewResources.prototype.getElement = function getElement(tagName) {
          return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
        };

        ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
          return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
        };

        ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
          this.attributeMap[attribute] = knownAttribute;
          register(this.attributes, attribute, behavior, 'an Attribute');
        };

        ViewResources.prototype.getAttribute = function getAttribute(attribute) {
          return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
        };

        ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
          register(this.valueConverters, name, valueConverter, 'a ValueConverter');
        };

        ViewResources.prototype.getValueConverter = function getValueConverter(name) {
          return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
        };

        ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
          register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
        };

        ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
          return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
        };

        ViewResources.prototype.registerValue = function registerValue(name, value) {
          register(this.values, name, value, 'a value');
        };

        ViewResources.prototype.getValue = function getValue(name) {
          return this.values[name] || (this.hasParent ? this.parent.getValue(name) : null);
        };

        return ViewResources;
      }());

      _export('ViewResources', ViewResources);

      _export('View', View = function () {
        function View(container, viewFactory, fragment, controllers, bindings, children, slots) {

          this.container = container;
          this.viewFactory = viewFactory;
          this.resources = viewFactory.resources;
          this.fragment = fragment;
          this.firstChild = fragment.firstChild;
          this.lastChild = fragment.lastChild;
          this.controllers = controllers;
          this.bindings = bindings;
          this.children = children;
          this.slots = slots;
          this.hasSlots = false;
          this.fromCache = false;
          this.isBound = false;
          this.isAttached = false;
          this.bindingContext = null;
          this.overrideContext = null;
          this.controller = null;
          this.viewModelScope = null;
          this.animatableElement = undefined;
          this._isUserControlled = false;
          this.contentView = null;

          for (var key in slots) {
            this.hasSlots = true;
            break;
          }
        }

        View.prototype.returnToCache = function returnToCache() {
          this.viewFactory.returnViewToCache(this);
        };

        View.prototype.created = function created() {
          var i = void 0;
          var ii = void 0;
          var controllers = this.controllers;

          for (i = 0, ii = controllers.length; i < ii; ++i) {
            controllers[i].created(this);
          }
        };

        View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
          var controllers = void 0;
          var bindings = void 0;
          var children = void 0;
          var i = void 0;
          var ii = void 0;

          if (_systemUpdate && this._isUserControlled) {
            return;
          }

          if (this.isBound) {
            if (this.bindingContext === bindingContext) {
              return;
            }

            this.unbind();
          }

          this.isBound = true;
          this.bindingContext = bindingContext;
          this.overrideContext = overrideContext || createOverrideContext(bindingContext);

          this.resources._invokeHook('beforeBind', this);

          bindings = this.bindings;
          for (i = 0, ii = bindings.length; i < ii; ++i) {
            bindings[i].bind(this);
          }

          if (this.viewModelScope !== null) {
            bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
            this.viewModelScope = null;
          }

          controllers = this.controllers;
          for (i = 0, ii = controllers.length; i < ii; ++i) {
            controllers[i].bind(this);
          }

          children = this.children;
          for (i = 0, ii = children.length; i < ii; ++i) {
            children[i].bind(bindingContext, overrideContext, true);
          }

          if (this.hasSlots) {
            ShadowDOM.distributeView(this.contentView, this.slots);
          }
        };

        View.prototype.addBinding = function addBinding(binding) {
          this.bindings.push(binding);

          if (this.isBound) {
            binding.bind(this);
          }
        };

        View.prototype.unbind = function unbind() {
          var controllers = void 0;
          var bindings = void 0;
          var children = void 0;
          var i = void 0;
          var ii = void 0;

          if (this.isBound) {
            this.isBound = false;
            this.resources._invokeHook('beforeUnbind', this);

            if (this.controller !== null) {
              this.controller.unbind();
            }

            bindings = this.bindings;
            for (i = 0, ii = bindings.length; i < ii; ++i) {
              bindings[i].unbind();
            }

            controllers = this.controllers;
            for (i = 0, ii = controllers.length; i < ii; ++i) {
              controllers[i].unbind();
            }

            children = this.children;
            for (i = 0, ii = children.length; i < ii; ++i) {
              children[i].unbind();
            }

            this.bindingContext = null;
            this.overrideContext = null;
          }
        };

        View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
          refNode.parentNode.insertBefore(this.fragment, refNode);
        };

        View.prototype.appendNodesTo = function appendNodesTo(parent) {
          parent.appendChild(this.fragment);
        };

        View.prototype.removeNodes = function removeNodes() {
          var fragment = this.fragment;
          var current = this.firstChild;
          var end = this.lastChild;
          var next = void 0;

          while (current) {
            next = current.nextSibling;
            fragment.appendChild(current);

            if (current === end) {
              break;
            }

            current = next;
          }
        };

        View.prototype.attached = function attached() {
          var controllers = void 0;
          var children = void 0;
          var i = void 0;
          var ii = void 0;

          if (this.isAttached) {
            return;
          }

          this.isAttached = true;

          if (this.controller !== null) {
            this.controller.attached();
          }

          controllers = this.controllers;
          for (i = 0, ii = controllers.length; i < ii; ++i) {
            controllers[i].attached();
          }

          children = this.children;
          for (i = 0, ii = children.length; i < ii; ++i) {
            children[i].attached();
          }
        };

        View.prototype.detached = function detached() {
          var controllers = void 0;
          var children = void 0;
          var i = void 0;
          var ii = void 0;

          if (this.isAttached) {
            this.isAttached = false;

            if (this.controller !== null) {
              this.controller.detached();
            }

            controllers = this.controllers;
            for (i = 0, ii = controllers.length; i < ii; ++i) {
              controllers[i].detached();
            }

            children = this.children;
            for (i = 0, ii = children.length; i < ii; ++i) {
              children[i].detached();
            }
          }
        };

        return View;
      }());

      _export('View', View);

      _export('ViewSlot', ViewSlot = function () {
        function ViewSlot(anchor, anchorIsContainer) {
          var animator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Animator.instance;

          this.anchor = anchor;
          this.anchorIsContainer = anchorIsContainer;
          this.bindingContext = null;
          this.overrideContext = null;
          this.animator = animator;
          this.children = [];
          this.isBound = false;
          this.isAttached = false;
          this.contentSelectors = null;
          anchor.viewSlot = this;
          anchor.isContentProjectionSource = false;
        }

        ViewSlot.prototype.animateView = function animateView(view) {
          var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'enter';

          var animatableElement = getAnimatableElement(view);

          if (animatableElement !== null) {
            switch (direction) {
              case 'enter':
                return this.animator.enter(animatableElement);
              case 'leave':
                return this.animator.leave(animatableElement);
              default:
                throw new Error('Invalid animation direction: ' + direction);
            }
          }
        };

        ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
          var parent = this.anchor;

          this.children.push({
            fragment: parent,
            firstChild: parent.firstChild,
            lastChild: parent.lastChild,
            returnToCache: function returnToCache() {},
            removeNodes: function removeNodes() {
              var last = void 0;

              while (last = parent.lastChild) {
                parent.removeChild(last);
              }
            },
            created: function created() {},
            bind: function bind() {},
            unbind: function unbind() {},
            attached: function attached() {},
            detached: function detached() {}
          });
        };

        ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
          var i = void 0;
          var ii = void 0;
          var children = void 0;

          if (this.isBound) {
            if (this.bindingContext === bindingContext) {
              return;
            }

            this.unbind();
          }

          this.isBound = true;
          this.bindingContext = bindingContext = bindingContext || this.bindingContext;
          this.overrideContext = overrideContext = overrideContext || this.overrideContext;

          children = this.children;
          for (i = 0, ii = children.length; i < ii; ++i) {
            children[i].bind(bindingContext, overrideContext, true);
          }
        };

        ViewSlot.prototype.unbind = function unbind() {
          if (this.isBound) {
            var i = void 0;
            var ii = void 0;
            var _children4 = this.children;

            this.isBound = false;
            this.bindingContext = null;
            this.overrideContext = null;

            for (i = 0, ii = _children4.length; i < ii; ++i) {
              _children4[i].unbind();
            }
          }
        };

        ViewSlot.prototype.add = function add(view) {
          if (this.anchorIsContainer) {
            view.appendNodesTo(this.anchor);
          } else {
            view.insertNodesBefore(this.anchor);
          }

          this.children.push(view);

          if (this.isAttached) {
            view.attached();
            return this.animateView(view, 'enter');
          }
        };

        ViewSlot.prototype.insert = function insert(index, view) {
          var children = this.children;
          var length = children.length;

          if (index === 0 && length === 0 || index >= length) {
            return this.add(view);
          }

          view.insertNodesBefore(children[index].firstChild);
          children.splice(index, 0, view);

          if (this.isAttached) {
            view.attached();
            return this.animateView(view, 'enter');
          }
        };

        ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
          if (sourceIndex === targetIndex) {
            return;
          }

          var children = this.children;
          var view = children[sourceIndex];

          view.removeNodes();
          view.insertNodesBefore(children[targetIndex].firstChild);
          children.splice(sourceIndex, 1);
          children.splice(targetIndex, 0, view);
        };

        ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
          return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
        };

        ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
          var _this4 = this;

          var children = this.children;
          var ii = viewsToRemove.length;
          var i = void 0;
          var rmPromises = [];

          viewsToRemove.forEach(function (child) {
            if (skipAnimation) {
              child.removeNodes();
              return;
            }

            var animation = _this4.animateView(child, 'leave');
            if (animation) {
              rmPromises.push(animation.then(function () {
                return child.removeNodes();
              }));
            } else {
              child.removeNodes();
            }
          });

          var removeAction = function removeAction() {
            if (_this4.isAttached) {
              for (i = 0; i < ii; ++i) {
                viewsToRemove[i].detached();
              }
            }

            if (returnToCache) {
              for (i = 0; i < ii; ++i) {
                viewsToRemove[i].returnToCache();
              }
            }

            for (i = 0; i < ii; ++i) {
              var index = children.indexOf(viewsToRemove[i]);
              if (index >= 0) {
                children.splice(index, 1);
              }
            }
          };

          if (rmPromises.length > 0) {
            return Promise.all(rmPromises).then(function () {
              return removeAction();
            });
          }

          return removeAction();
        };

        ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
          var _this5 = this;

          var view = this.children[index];

          var removeAction = function removeAction() {
            index = _this5.children.indexOf(view);
            view.removeNodes();
            _this5.children.splice(index, 1);

            if (_this5.isAttached) {
              view.detached();
            }

            if (returnToCache) {
              view.returnToCache();
            }

            return view;
          };

          if (!skipAnimation) {
            var animation = this.animateView(view, 'leave');
            if (animation) {
              return animation.then(function () {
                return removeAction();
              });
            }
          }

          return removeAction();
        };

        ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
          var _this6 = this;

          var children = this.children;
          var ii = children.length;
          var i = void 0;
          var rmPromises = [];

          children.forEach(function (child) {
            if (skipAnimation) {
              child.removeNodes();
              return;
            }

            var animation = _this6.animateView(child, 'leave');
            if (animation) {
              rmPromises.push(animation.then(function () {
                return child.removeNodes();
              }));
            } else {
              child.removeNodes();
            }
          });

          var removeAction = function removeAction() {
            if (_this6.isAttached) {
              for (i = 0; i < ii; ++i) {
                children[i].detached();
              }
            }

            if (returnToCache) {
              for (i = 0; i < ii; ++i) {
                var _child3 = children[i];

                if (_child3) {
                  _child3.returnToCache();
                }
              }
            }

            _this6.children = [];
          };

          if (rmPromises.length > 0) {
            return Promise.all(rmPromises).then(function () {
              return removeAction();
            });
          }

          return removeAction();
        };

        ViewSlot.prototype.attached = function attached() {
          var i = void 0;
          var ii = void 0;
          var children = void 0;
          var child = void 0;

          if (this.isAttached) {
            return;
          }

          this.isAttached = true;

          children = this.children;
          for (i = 0, ii = children.length; i < ii; ++i) {
            child = children[i];
            child.attached();
            this.animateView(child, 'enter');
          }
        };

        ViewSlot.prototype.detached = function detached() {
          var i = void 0;
          var ii = void 0;
          var children = void 0;

          if (this.isAttached) {
            this.isAttached = false;
            children = this.children;
            for (i = 0, ii = children.length; i < ii; ++i) {
              children[i].detached();
            }
          }
        };

        ViewSlot.prototype.projectTo = function projectTo(slots) {
          var _this7 = this;

          this.projectToSlots = slots;
          this.add = this._projectionAdd;
          this.insert = this._projectionInsert;
          this.move = this._projectionMove;
          this.remove = this._projectionRemove;
          this.removeAt = this._projectionRemoveAt;
          this.removeMany = this._projectionRemoveMany;
          this.removeAll = this._projectionRemoveAll;
          this.children.forEach(function (view) {
            return ShadowDOM.distributeView(view, slots, _this7);
          });
        };

        ViewSlot.prototype._projectionAdd = function _projectionAdd(view) {
          ShadowDOM.distributeView(view, this.projectToSlots, this);

          this.children.push(view);

          if (this.isAttached) {
            view.attached();
          }
        };

        ViewSlot.prototype._projectionInsert = function _projectionInsert(index, view) {
          if (index === 0 && !this.children.length || index >= this.children.length) {
            this.add(view);
          } else {
            ShadowDOM.distributeView(view, this.projectToSlots, this, index);

            this.children.splice(index, 0, view);

            if (this.isAttached) {
              view.attached();
            }
          }
        };

        ViewSlot.prototype._projectionMove = function _projectionMove(sourceIndex, targetIndex) {
          if (sourceIndex === targetIndex) {
            return;
          }

          var children = this.children;
          var view = children[sourceIndex];

          ShadowDOM.undistributeView(view, this.projectToSlots, this);
          ShadowDOM.distributeView(view, this.projectToSlots, this, targetIndex);

          children.splice(sourceIndex, 1);
          children.splice(targetIndex, 0, view);
        };

        ViewSlot.prototype._projectionRemove = function _projectionRemove(view, returnToCache) {
          ShadowDOM.undistributeView(view, this.projectToSlots, this);
          this.children.splice(this.children.indexOf(view), 1);

          if (this.isAttached) {
            view.detached();
          }
        };

        ViewSlot.prototype._projectionRemoveAt = function _projectionRemoveAt(index, returnToCache) {
          var view = this.children[index];

          ShadowDOM.undistributeView(view, this.projectToSlots, this);
          this.children.splice(index, 1);

          if (this.isAttached) {
            view.detached();
          }
        };

        ViewSlot.prototype._projectionRemoveMany = function _projectionRemoveMany(viewsToRemove, returnToCache) {
          var _this8 = this;

          viewsToRemove.forEach(function (view) {
            return _this8.remove(view, returnToCache);
          });
        };

        ViewSlot.prototype._projectionRemoveAll = function _projectionRemoveAll(returnToCache) {
          ShadowDOM.undistributeAll(this.projectToSlots, this);

          var children = this.children;

          if (this.isAttached) {
            for (var i = 0, ii = children.length; i < ii; ++i) {
              children[i].detached();
            }
          }

          this.children = [];
        };

        return ViewSlot;
      }());

      _export('ViewSlot', ViewSlot);

      ProviderResolver = resolver(_class11 = function () {
        function ProviderResolver() {}

        ProviderResolver.prototype.get = function get(container, key) {
          var id = key.__providerId__;
          return id in container ? container[id] : container[id] = container.invoke(key);
        };

        return ProviderResolver;
      }()) || _class11;
      providerResolverInstance = new ProviderResolver();

      _export('BoundViewFactory', BoundViewFactory = function () {
        function BoundViewFactory(parentContainer, viewFactory, partReplacements) {

          this.parentContainer = parentContainer;
          this.viewFactory = viewFactory;
          this.factoryCreateInstruction = { partReplacements: partReplacements };
        }

        BoundViewFactory.prototype.create = function create() {
          var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
          view._isUserControlled = true;
          return view;
        };

        BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
          this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
        };

        BoundViewFactory.prototype.getCachedView = function getCachedView() {
          return this.viewFactory.getCachedView();
        };

        BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
          this.viewFactory.returnViewToCache(view);
        };

        _createClass(BoundViewFactory, [{
          key: 'isCaching',
          get: function get() {
            return this.viewFactory.isCaching;
          }
        }]);

        return BoundViewFactory;
      }());

      _export('BoundViewFactory', BoundViewFactory);

      _export('ViewFactory', ViewFactory = function () {
        function ViewFactory(template, instructions, resources) {

          this.isCaching = false;

          this.template = template;
          this.instructions = instructions;
          this.resources = resources;
          this.cacheSize = -1;
          this.cache = null;
        }

        ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
          if (size) {
            if (size === '*') {
              size = Number.MAX_VALUE;
            } else if (typeof size === 'string') {
              size = parseInt(size, 10);
            }
          }

          if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
            this.cacheSize = size;
          }

          if (this.cacheSize > 0) {
            this.cache = [];
          } else {
            this.cache = null;
          }

          this.isCaching = this.cacheSize > 0;
        };

        ViewFactory.prototype.getCachedView = function getCachedView() {
          return this.cache !== null ? this.cache.pop() || null : null;
        };

        ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
          if (view.isAttached) {
            view.detached();
          }

          if (view.isBound) {
            view.unbind();
          }

          if (this.cache !== null && this.cache.length < this.cacheSize) {
            view.fromCache = true;
            this.cache.push(view);
          }
        };

        ViewFactory.prototype.create = function create(container, createInstruction, element) {
          createInstruction = createInstruction || BehaviorInstruction.normal;

          var cachedView = this.getCachedView();
          if (cachedView !== null) {
            return cachedView;
          }

          var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
          var instructables = fragment.querySelectorAll('.au-target');
          var instructions = this.instructions;
          var resources = this.resources;
          var controllers = [];
          var bindings = [];
          var children = [];
          var shadowSlots = Object.create(null);
          var containers = { root: container };
          var partReplacements = createInstruction.partReplacements;
          var i = void 0;
          var ii = void 0;
          var view = void 0;
          var instructable = void 0;
          var instruction = void 0;

          this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

          if (element && this.surrogateInstruction !== null) {
            applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
          }

          if (createInstruction.enhance && fragment.hasAttribute('au-target-id')) {
            instructable = fragment;
            instruction = instructions[instructable.getAttribute('au-target-id')];
            applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
          }

          for (i = 0, ii = instructables.length; i < ii; ++i) {
            instructable = instructables[i];
            instruction = instructions[instructable.getAttribute('au-target-id')];
            applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
          }

          view = new View(container, this, fragment, controllers, bindings, children, shadowSlots);

          if (!createInstruction.initiatedByBehavior) {
            view.created();
          }

          this.resources._invokeHook('afterCreate', view);

          return view;
        };

        return ViewFactory;
      }());

      _export('ViewFactory', ViewFactory);

      nextInjectorId = 0;
      lastAUTargetID = 0;

      _export('ViewCompiler', ViewCompiler = (_dec7 = inject(BindingLanguage, ViewResources), _dec7(_class13 = function () {
        function ViewCompiler(bindingLanguage, resources) {

          this.bindingLanguage = bindingLanguage;
          this.resources = resources;
        }

        ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
          resources = resources || this.resources;
          compileInstruction = compileInstruction || ViewCompileInstruction.normal;
          source = typeof source === 'string' ? DOM.createTemplateFromMarkup(source) : source;

          var content = void 0;
          var part = void 0;
          var cacheSize = void 0;

          if (source.content) {
            part = source.getAttribute('part');
            cacheSize = source.getAttribute('view-cache');
            content = DOM.adoptNode(source.content);
          } else {
            content = source;
          }

          compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && FEATURE.shadowDOM;
          resources._invokeHook('beforeCompile', content, resources, compileInstruction);

          var instructions = {};
          this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);

          var firstChild = content.firstChild;
          if (firstChild && firstChild.nodeType === 1) {
            var targetId = firstChild.getAttribute('au-target-id');
            if (targetId) {
              var ins = instructions[targetId];

              if (ins.shadowSlot || ins.lifting || ins.elementInstruction && !ins.elementInstruction.anchorIsContainer) {
                content.insertBefore(DOM.createComment('view'), firstChild);
              }
            }
          }

          var factory = new ViewFactory(content, instructions, resources);

          factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
          factory.part = part;

          if (cacheSize) {
            factory.setCacheSize(cacheSize);
          }

          resources._invokeHook('afterCompile', factory);

          return factory;
        };

        ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
          switch (node.nodeType) {
            case 1:
              return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
            case 3:
              var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
              if (expression) {
                var marker = DOM.createElement('au-marker');
                var auTargetID = makeIntoInstructionTarget(marker);
                (node.parentNode || parentNode).insertBefore(marker, node);
                node.textContent = ' ';
                instructions[auTargetID] = TargetInstruction.contentExpression(expression);

                while (node.nextSibling && node.nextSibling.nodeType === 3) {
                  (node.parentNode || parentNode).removeChild(node.nextSibling);
                }
              } else {
                while (node.nextSibling && node.nextSibling.nodeType === 3) {
                  node = node.nextSibling;
                }
              }
              return node.nextSibling;
            case 11:
              var currentChild = node.firstChild;
              while (currentChild) {
                currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
              }
              break;
            default:
              break;
          }

          return node.nextSibling;
        };

        ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
          var tagName = node.tagName.toLowerCase();
          var attributes = node.attributes;
          var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
          var knownAttribute = void 0;
          var property = void 0;
          var instruction = void 0;
          var i = void 0;
          var ii = void 0;
          var attr = void 0;
          var attrName = void 0;
          var attrValue = void 0;
          var info = void 0;
          var type = void 0;
          var expressions = [];
          var expression = void 0;
          var behaviorInstructions = [];
          var values = {};
          var hasValues = false;
          var providers = [];

          for (i = 0, ii = attributes.length; i < ii; ++i) {
            attr = attributes[i];
            attrName = attr.name;
            attrValue = attr.value;

            info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
            type = resources.getAttribute(info.attrName);

            if (type) {
              knownAttribute = resources.mapAttribute(info.attrName);
              if (knownAttribute) {
                property = type.attributes[knownAttribute];

                if (property) {
                  info.defaultBindingMode = property.defaultBindingMode;

                  if (!info.command && !info.expression) {
                    info.command = property.hasOptions ? 'options' : null;
                  }

                  if (info.command && info.command !== 'options' && type.primaryProperty) {
                    var primaryProperty = type.primaryProperty;
                    attrName = info.attrName = primaryProperty.name;

                    info.defaultBindingMode = primaryProperty.defaultBindingMode;
                  }
                }
              }
            }

            instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

            if (instruction) {
              if (instruction.alteredAttr) {
                type = resources.getAttribute(instruction.attrName);
              }

              if (instruction.discrete) {
                expressions.push(instruction);
              } else {
                if (type) {
                  instruction.type = type;
                  this._configureProperties(instruction, resources);

                  if (type.liftsContent) {
                    throw new Error('You cannot place a template controller on a surrogate element.');
                  } else {
                    behaviorInstructions.push(instruction);
                  }
                } else {
                  expressions.push(instruction.attributes[instruction.attrName]);
                }
              }
            } else {
              if (type) {
                instruction = BehaviorInstruction.attribute(attrName, type);
                instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

                if (type.liftsContent) {
                  throw new Error('You cannot place a template controller on a surrogate element.');
                } else {
                  behaviorInstructions.push(instruction);
                }
              } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
                hasValues = true;
                values[attrName] = attrValue;
              }
            }
          }

          if (expressions.length || behaviorInstructions.length || hasValues) {
            for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
              instruction = behaviorInstructions[i];
              instruction.type.compile(this, resources, node, instruction);
              providers.push(instruction.type.target);
            }

            for (i = 0, ii = expressions.length; i < ii; ++i) {
              expression = expressions[i];
              if (expression.attrToRemove !== undefined) {
                node.removeAttribute(expression.attrToRemove);
              }
            }

            return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
          }

          return null;
        };

        ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
          var tagName = node.tagName.toLowerCase();
          var attributes = node.attributes;
          var expressions = [];
          var expression = void 0;
          var behaviorInstructions = [];
          var providers = [];
          var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
          var liftingInstruction = void 0;
          var viewFactory = void 0;
          var type = void 0;
          var elementInstruction = void 0;
          var elementProperty = void 0;
          var i = void 0;
          var ii = void 0;
          var attr = void 0;
          var attrName = void 0;
          var attrValue = void 0;
          var instruction = void 0;
          var info = void 0;
          var property = void 0;
          var knownAttribute = void 0;
          var auTargetID = void 0;
          var injectorId = void 0;

          if (tagName === 'slot') {
            if (targetLightDOM) {
              node = makeShadowSlot(this, resources, node, instructions, parentInjectorId);
            }
            return node.nextSibling;
          } else if (tagName === 'template') {
            viewFactory = this.compile(node, resources);
            viewFactory.part = node.getAttribute('part');
          } else {
            type = resources.getElement(node.getAttribute('as-element') || tagName);
            if (type) {
              elementInstruction = BehaviorInstruction.element(node, type);
              type.processAttributes(this, resources, node, attributes, elementInstruction);
              behaviorInstructions.push(elementInstruction);
            }
          }

          for (i = 0, ii = attributes.length; i < ii; ++i) {
            attr = attributes[i];
            attrName = attr.name;
            attrValue = attr.value;
            info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);

            if (targetLightDOM && info.attrName === 'slot') {
              info.attrName = attrName = 'au-slot';
            }

            type = resources.getAttribute(info.attrName);
            elementProperty = null;

            if (type) {
              knownAttribute = resources.mapAttribute(info.attrName);
              if (knownAttribute) {
                property = type.attributes[knownAttribute];

                if (property) {
                  info.defaultBindingMode = property.defaultBindingMode;

                  if (!info.command && !info.expression) {
                    info.command = property.hasOptions ? 'options' : null;
                  }

                  if (info.command && info.command !== 'options' && type.primaryProperty) {
                    var primaryProperty = type.primaryProperty;
                    attrName = info.attrName = primaryProperty.name;

                    info.defaultBindingMode = primaryProperty.defaultBindingMode;
                  }
                }
              }
            } else if (elementInstruction) {
              elementProperty = elementInstruction.type.attributes[info.attrName];
              if (elementProperty) {
                info.defaultBindingMode = elementProperty.defaultBindingMode;
              }
            }

            if (elementProperty) {
              instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
            } else {
              instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
            }

            if (instruction) {
              if (instruction.alteredAttr) {
                type = resources.getAttribute(instruction.attrName);
              }

              if (instruction.discrete) {
                expressions.push(instruction);
              } else {
                if (type) {
                  instruction.type = type;
                  this._configureProperties(instruction, resources);

                  if (type.liftsContent) {
                    instruction.originalAttrName = attrName;
                    liftingInstruction = instruction;
                    break;
                  } else {
                    behaviorInstructions.push(instruction);
                  }
                } else if (elementProperty) {
                  elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
                } else {
                  expressions.push(instruction.attributes[instruction.attrName]);
                }
              }
            } else {
              if (type) {
                instruction = BehaviorInstruction.attribute(attrName, type);
                instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

                if (type.liftsContent) {
                  instruction.originalAttrName = attrName;
                  liftingInstruction = instruction;
                  break;
                } else {
                  behaviorInstructions.push(instruction);
                }
              } else if (elementProperty) {
                elementInstruction.attributes[attrName] = attrValue;
              }
            }
          }

          if (liftingInstruction) {
            liftingInstruction.viewFactory = viewFactory;
            node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
            auTargetID = makeIntoInstructionTarget(node);
            instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
          } else {
            if (expressions.length || behaviorInstructions.length) {
              injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

              for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
                instruction = behaviorInstructions[i];
                instruction.type.compile(this, resources, node, instruction, parentNode);
                providers.push(instruction.type.target);
              }

              for (i = 0, ii = expressions.length; i < ii; ++i) {
                expression = expressions[i];
                if (expression.attrToRemove !== undefined) {
                  node.removeAttribute(expression.attrToRemove);
                }
              }

              auTargetID = makeIntoInstructionTarget(node);
              instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
            }

            if (elementInstruction && elementInstruction.skipContentProcessing) {
              return node.nextSibling;
            }

            var currentChild = node.firstChild;
            while (currentChild) {
              currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
            }
          }

          return node.nextSibling;
        };

        ViewCompiler.prototype._configureProperties = function _configureProperties(instruction, resources) {
          var type = instruction.type;
          var attrName = instruction.attrName;
          var attributes = instruction.attributes;
          var property = void 0;
          var key = void 0;
          var value = void 0;

          var knownAttribute = resources.mapAttribute(attrName);
          if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
            attributes[knownAttribute] = attributes[attrName];
            delete attributes[attrName];
          }

          for (key in attributes) {
            value = attributes[key];

            if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
              property = type.attributes[key];

              if (property !== undefined) {
                value.targetProperty = property.name;
              } else {
                value.targetProperty = key;
              }
            }
          }
        };

        return ViewCompiler;
      }()) || _class13));

      _export('ViewCompiler', ViewCompiler);

      _export('ResourceModule', ResourceModule = function () {
        function ResourceModule(moduleId) {

          this.id = moduleId;
          this.moduleInstance = null;
          this.mainResource = null;
          this.resources = null;
          this.viewStrategy = null;
          this.isInitialized = false;
          this.onLoaded = null;
          this.loadContext = null;
        }

        ResourceModule.prototype.initialize = function initialize(container) {
          var current = this.mainResource;
          var resources = this.resources;
          var vs = this.viewStrategy;

          if (this.isInitialized) {
            return;
          }

          this.isInitialized = true;

          if (current !== undefined) {
            current.metadata.viewStrategy = vs;
            current.initialize(container);
          }

          for (var i = 0, ii = resources.length; i < ii; ++i) {
            current = resources[i];
            current.metadata.viewStrategy = vs;
            current.initialize(container);
          }
        };

        ResourceModule.prototype.register = function register(registry, name) {
          var main = this.mainResource;
          var resources = this.resources;

          if (main !== undefined) {
            main.register(registry, name);
            name = null;
          }

          for (var i = 0, ii = resources.length; i < ii; ++i) {
            resources[i].register(registry, name);
            name = null;
          }
        };

        ResourceModule.prototype.load = function load(container, loadContext) {
          if (this.onLoaded !== null) {
            return this.loadContext === loadContext ? Promise.resolve() : this.onLoaded;
          }

          var main = this.mainResource;
          var resources = this.resources;
          var loads = void 0;

          if (main !== undefined) {
            loads = new Array(resources.length + 1);
            loads[0] = main.load(container, loadContext);
            for (var i = 0, ii = resources.length; i < ii; ++i) {
              loads[i + 1] = resources[i].load(container, loadContext);
            }
          } else {
            loads = new Array(resources.length);
            for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) {
              loads[_i] = resources[_i].load(container, loadContext);
            }
          }

          this.loadContext = loadContext;
          this.onLoaded = Promise.all(loads);
          return this.onLoaded;
        };

        return ResourceModule;
      }());

      _export('ResourceModule', ResourceModule);

      _export('ResourceDescription', ResourceDescription = function () {
        function ResourceDescription(key, exportedValue, resourceTypeMeta) {

          if (!resourceTypeMeta) {
            resourceTypeMeta = metadata.get(metadata.resource, exportedValue);

            if (!resourceTypeMeta) {
              resourceTypeMeta = new HtmlBehaviorResource();
              resourceTypeMeta.elementName = _hyphenate(key);
              metadata.define(metadata.resource, resourceTypeMeta, exportedValue);
            }
          }

          if (resourceTypeMeta instanceof HtmlBehaviorResource) {
            if (resourceTypeMeta.elementName === undefined) {
              resourceTypeMeta.elementName = _hyphenate(key);
            } else if (resourceTypeMeta.attributeName === undefined) {
              resourceTypeMeta.attributeName = _hyphenate(key);
            } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
              HtmlBehaviorResource.convention(key, resourceTypeMeta);
            }
          } else if (!resourceTypeMeta.name) {
            resourceTypeMeta.name = _hyphenate(key);
          }

          this.metadata = resourceTypeMeta;
          this.value = exportedValue;
        }

        ResourceDescription.prototype.initialize = function initialize(container) {
          this.metadata.initialize(container, this.value);
        };

        ResourceDescription.prototype.register = function register(registry, name) {
          this.metadata.register(registry, name);
        };

        ResourceDescription.prototype.load = function load(container, loadContext) {
          return this.metadata.load(container, this.value, loadContext);
        };

        return ResourceDescription;
      }());

      _export('ResourceDescription', ResourceDescription);

      _export('ModuleAnalyzer', ModuleAnalyzer = function () {
        function ModuleAnalyzer() {

          this.cache = Object.create(null);
        }

        ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
          return this.cache[moduleId];
        };

        ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
          var mainResource = void 0;
          var fallbackValue = void 0;
          var fallbackKey = void 0;
          var resourceTypeMeta = void 0;
          var key = void 0;
          var exportedValue = void 0;
          var resources = [];
          var conventional = void 0;
          var vs = void 0;
          var resourceModule = void 0;

          resourceModule = this.cache[moduleId];
          if (resourceModule) {
            return resourceModule;
          }

          resourceModule = new ResourceModule(moduleId);
          this.cache[moduleId] = resourceModule;

          if (typeof moduleInstance === 'function') {
            moduleInstance = { 'default': moduleInstance };
          }

          if (mainResourceKey) {
            mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
          }

          for (key in moduleInstance) {
            exportedValue = moduleInstance[key];

            if (key === mainResourceKey || typeof exportedValue !== 'function') {
              continue;
            }

            resourceTypeMeta = metadata.get(metadata.resource, exportedValue);

            if (resourceTypeMeta) {
              if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
                HtmlBehaviorResource.convention(key, resourceTypeMeta);
              }

              if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
                resourceTypeMeta.elementName = _hyphenate(key);
              }

              if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
                mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
              } else {
                resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
              }
            } else if (viewStrategy.decorates(exportedValue)) {
              vs = exportedValue;
            } else if (exportedValue instanceof TemplateRegistryEntry) {
              vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
            } else {
              if (conventional = HtmlBehaviorResource.convention(key)) {
                if (conventional.elementName !== null && !mainResource) {
                  mainResource = new ResourceDescription(key, exportedValue, conventional);
                } else {
                  resources.push(new ResourceDescription(key, exportedValue, conventional));
                }

                metadata.define(metadata.resource, conventional, exportedValue);
              } else if (conventional = ValueConverterResource.convention(key) || BindingBehaviorResource.convention(key) || ViewEngineHooksResource.convention(key)) {
                resources.push(new ResourceDescription(key, exportedValue, conventional));
                metadata.define(metadata.resource, conventional, exportedValue);
              } else if (!fallbackValue) {
                fallbackValue = exportedValue;
                fallbackKey = key;
              }
            }
          }

          if (!mainResource && fallbackValue) {
            mainResource = new ResourceDescription(fallbackKey, fallbackValue);
          }

          resourceModule.moduleInstance = moduleInstance;
          resourceModule.mainResource = mainResource;
          resourceModule.resources = resources;
          resourceModule.viewStrategy = vs;

          return resourceModule;
        };

        return ModuleAnalyzer;
      }());

      _export('ModuleAnalyzer', ModuleAnalyzer);

      logger = LogManager.getLogger('templating');

      ProxyViewFactory = function () {
        function ProxyViewFactory(promise) {
          var _this9 = this;

          promise.then(function (x) {
            return _this9.viewFactory = x;
          });
        }

        ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
          return this.viewFactory.create(container, bindingContext, createInstruction, element);
        };

        ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
          this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
        };

        ProxyViewFactory.prototype.getCachedView = function getCachedView() {
          return this.viewFactory.getCachedView();
        };

        ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
          this.viewFactory.returnViewToCache(view);
        };

        _createClass(ProxyViewFactory, [{
          key: 'isCaching',
          get: function get() {
            return this.viewFactory.isCaching;
          }
        }]);

        return ProxyViewFactory;
      }();

      _export('ViewEngine', ViewEngine = (_dec8 = inject(Loader, Container, ViewCompiler, ModuleAnalyzer, ViewResources), _dec8(_class14 = (_temp4 = _class15 = function () {
        function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {

          this.loader = loader;
          this.container = container;
          this.viewCompiler = viewCompiler;
          this.moduleAnalyzer = moduleAnalyzer;
          this.appResources = appResources;
          this._pluginMap = {};

          var auSlotBehavior = new HtmlBehaviorResource();
          auSlotBehavior.attributeName = 'au-slot';
          auSlotBehavior.initialize(container, SlotCustomAttribute);
          auSlotBehavior.register(appResources);
        }

        ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
          var name = extension.replace('.', '') + '-resource-plugin';
          this._pluginMap[extension] = name;
          this.loader.addPlugin(name, implementation);
        };

        ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext, target) {
          var _this10 = this;

          loadContext = loadContext || new ResourceLoadContext();

          return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
            if (registryEntry.onReady) {
              if (!loadContext.hasDependency(urlOrRegistryEntry)) {
                loadContext.addDependency(urlOrRegistryEntry);
                return registryEntry.onReady;
              }

              if (registryEntry.template === null) {
                return registryEntry.onReady;
              }

              return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
            }

            loadContext.addDependency(urlOrRegistryEntry);

            registryEntry.onReady = _this10.loadTemplateResources(registryEntry, compileInstruction, loadContext, target).then(function (resources) {
              registryEntry.resources = resources;

              if (registryEntry.template === null) {
                return registryEntry.factory = null;
              }

              var viewFactory = _this10.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
              return registryEntry.factory = viewFactory;
            });

            return registryEntry.onReady;
          });
        };

        ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext, target) {
          var resources = new ViewResources(this.appResources, registryEntry.address);
          var dependencies = registryEntry.dependencies;
          var importIds = void 0;
          var names = void 0;

          compileInstruction = compileInstruction || ViewCompileInstruction.normal;

          if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
            return Promise.resolve(resources);
          }

          importIds = dependencies.map(function (x) {
            return x.src;
          });
          names = dependencies.map(function (x) {
            return x.name;
          });
          logger.debug('importing resources for ' + registryEntry.address, importIds);

          if (target) {
            var viewModelRequires = metadata.get(ViewEngine.viewModelRequireMetadataKey, target);
            if (viewModelRequires) {
              var templateImportCount = importIds.length;
              for (var i = 0, ii = viewModelRequires.length; i < ii; ++i) {
                var req = viewModelRequires[i];
                var importId = typeof req === 'function' ? Origin.get(req).moduleId : relativeToFile(req.src || req, registryEntry.address);

                if (importIds.indexOf(importId) === -1) {
                  importIds.push(importId);
                  names.push(req.as);
                }
              }
              logger.debug('importing ViewModel resources for ' + compileInstruction.associatedModuleId, importIds.slice(templateImportCount));
            }
          }

          return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
        };

        ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
          var _this11 = this;

          return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
            var normalizedId = Origin.get(viewModelModule).moduleId;
            var resourceModule = _this11.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

            if (!resourceModule.mainResource) {
              throw new Error('No view model found in module "' + moduleImport + '".');
            }

            resourceModule.initialize(_this11.container);

            return resourceModule.mainResource;
          });
        };

        ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
          var _this12 = this;

          loadContext = loadContext || new ResourceLoadContext();
          compileInstruction = compileInstruction || ViewCompileInstruction.normal;

          moduleIds = moduleIds.map(function (x) {
            return _this12._applyLoaderPlugin(x);
          });

          return this.loader.loadAllModules(moduleIds).then(function (imports) {
            var i = void 0;
            var ii = void 0;
            var analysis = void 0;
            var normalizedId = void 0;
            var current = void 0;
            var associatedModule = void 0;
            var container = _this12.container;
            var moduleAnalyzer = _this12.moduleAnalyzer;
            var allAnalysis = new Array(imports.length);

            for (i = 0, ii = imports.length; i < ii; ++i) {
              current = imports[i];
              normalizedId = Origin.get(current).moduleId;

              analysis = moduleAnalyzer.analyze(normalizedId, current);
              analysis.initialize(container);
              analysis.register(resources, names[i]);

              allAnalysis[i] = analysis;
            }

            if (compileInstruction.associatedModuleId) {
              associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

              if (associatedModule) {
                associatedModule.register(resources);
              }
            }

            for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
              allAnalysis[i] = allAnalysis[i].load(container, loadContext);
            }

            return Promise.all(allAnalysis).then(function () {
              return resources;
            });
          });
        };

        ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
          var index = id.lastIndexOf('.');
          if (index !== -1) {
            var ext = id.substring(index);
            var pluginName = this._pluginMap[ext];

            if (pluginName === undefined) {
              return id;
            }

            return this.loader.applyPluginToUrl(id, pluginName);
          }

          return id;
        };

        return ViewEngine;
      }(), _class15.viewModelRequireMetadataKey = 'aurelia:view-model-require', _temp4)) || _class14));

      _export('ViewEngine', ViewEngine);

      _export('Controller', Controller = function () {
        function Controller(behavior, instruction, viewModel, container) {

          this.behavior = behavior;
          this.instruction = instruction;
          this.viewModel = viewModel;
          this.isAttached = false;
          this.view = null;
          this.isBound = false;
          this.scope = null;
          this.container = container;
          this.elementEvents = container.elementEvents || null;

          var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
          var handlesBind = behavior.handlesBind;
          var attributes = instruction.attributes;
          var boundProperties = this.boundProperties = [];
          var properties = behavior.properties;
          var i = void 0;
          var ii = void 0;

          behavior._ensurePropertiesDefined(viewModel, observerLookup);

          for (i = 0, ii = properties.length; i < ii; ++i) {
            properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
          }
        }

        Controller.prototype.created = function created(owningView) {
          if (this.behavior.handlesCreated) {
            this.viewModel.created(owningView, this.view);
          }
        };

        Controller.prototype.automate = function automate(overrideContext, owningView) {
          this.view.bindingContext = this.viewModel;
          this.view.overrideContext = overrideContext || createOverrideContext(this.viewModel);
          this.view._isUserControlled = true;

          if (this.behavior.handlesCreated) {
            this.viewModel.created(owningView || null, this.view);
          }

          this.bind(this.view);
        };

        Controller.prototype.bind = function bind(scope) {
          var skipSelfSubscriber = this.behavior.handlesBind;
          var boundProperties = this.boundProperties;
          var i = void 0;
          var ii = void 0;
          var x = void 0;
          var observer = void 0;
          var selfSubscriber = void 0;

          if (this.isBound) {
            if (this.scope === scope) {
              return;
            }

            this.unbind();
          }

          this.isBound = true;
          this.scope = scope;

          for (i = 0, ii = boundProperties.length; i < ii; ++i) {
            x = boundProperties[i];
            observer = x.observer;
            selfSubscriber = observer.selfSubscriber;
            observer.publishing = false;

            if (skipSelfSubscriber) {
              observer.selfSubscriber = null;
            }

            x.binding.bind(scope);
            observer.call();

            observer.publishing = true;
            observer.selfSubscriber = selfSubscriber;
          }

          var overrideContext = void 0;
          if (this.view !== null) {
            if (skipSelfSubscriber) {
              this.view.viewModelScope = scope;
            }

            if (this.viewModel === scope.overrideContext.bindingContext) {
              overrideContext = scope.overrideContext;
            } else if (this.instruction.inheritBindingContext) {
              overrideContext = createOverrideContext(this.viewModel, scope.overrideContext);
            } else {
              overrideContext = createOverrideContext(this.viewModel);
              overrideContext.__parentOverrideContext = scope.overrideContext;
            }

            this.view.bind(this.viewModel, overrideContext);
          } else if (skipSelfSubscriber) {
            overrideContext = scope.overrideContext;

            if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
              overrideContext = Object.assign({}, scope.overrideContext);
              overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
            }
            this.viewModel.bind(scope.bindingContext, overrideContext);
          }
        };

        Controller.prototype.unbind = function unbind() {
          if (this.isBound) {
            var _boundProperties = this.boundProperties;
            var _i2 = void 0;
            var _ii2 = void 0;

            this.isBound = false;
            this.scope = null;

            if (this.view !== null) {
              this.view.unbind();
            }

            if (this.behavior.handlesUnbind) {
              this.viewModel.unbind();
            }

            if (this.elementEvents !== null) {
              this.elementEvents.disposeAll();
            }

            for (_i2 = 0, _ii2 = _boundProperties.length; _i2 < _ii2; ++_i2) {
              _boundProperties[_i2].binding.unbind();
            }
          }
        };

        Controller.prototype.attached = function attached() {
          if (this.isAttached) {
            return;
          }

          this.isAttached = true;

          if (this.behavior.handlesAttached) {
            this.viewModel.attached();
          }

          if (this.view !== null) {
            this.view.attached();
          }
        };

        Controller.prototype.detached = function detached() {
          if (this.isAttached) {
            this.isAttached = false;

            if (this.view !== null) {
              this.view.detached();
            }

            if (this.behavior.handlesDetached) {
              this.viewModel.detached();
            }
          }
        };

        return Controller;
      }());

      _export('Controller', Controller);

      _export('BehaviorPropertyObserver', BehaviorPropertyObserver = (_dec9 = subscriberCollection(), _dec9(_class16 = function () {
        function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {

          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.notqueued = true;
          this.publishing = false;
          this.selfSubscriber = selfSubscriber;
          this.currentValue = this.oldValue = initialValue;
        }

        BehaviorPropertyObserver.prototype.getValue = function getValue() {
          return this.currentValue;
        };

        BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
          var oldValue = this.currentValue;

          if (oldValue !== newValue) {
            this.oldValue = oldValue;
            this.currentValue = newValue;

            if (this.publishing && this.notqueued) {
              if (this.taskQueue.flushing) {
                this.call();
              } else {
                this.notqueued = false;
                this.taskQueue.queueMicroTask(this);
              }
            }
          }
        };

        BehaviorPropertyObserver.prototype.call = function call() {
          var oldValue = this.oldValue;
          var newValue = this.currentValue;

          this.notqueued = true;

          if (newValue === oldValue) {
            return;
          }

          if (this.selfSubscriber) {
            this.selfSubscriber(newValue, oldValue);
          }

          this.callSubscribers(newValue, oldValue);
          this.oldValue = newValue;
        };

        BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
          this.addSubscriber(context, callable);
        };

        BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          this.removeSubscriber(context, callable);
        };

        return BehaviorPropertyObserver;
      }()) || _class16));

      _export('BehaviorPropertyObserver', BehaviorPropertyObserver);

      _export('BindableProperty', BindableProperty = function () {
        function BindableProperty(nameOrConfig) {

          if (typeof nameOrConfig === 'string') {
            this.name = nameOrConfig;
          } else {
            Object.assign(this, nameOrConfig);
          }

          this.attribute = this.attribute || _hyphenate(this.name);
          if (this.defaultBindingMode === null || this.defaultBindingMode === undefined) {
            this.defaultBindingMode = bindingMode.oneWay;
          }
          this.changeHandler = this.changeHandler || null;
          this.owner = null;
          this.descriptor = null;
        }

        BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
          behavior.properties.push(this);
          behavior.attributes[this.attribute] = this;
          this.owner = behavior;

          if (descriptor) {
            this.descriptor = descriptor;
            return this._configureDescriptor(behavior, descriptor);
          }

          return undefined;
        };

        BindableProperty.prototype._configureDescriptor = function _configureDescriptor(behavior, descriptor) {
          var name = this.name;

          descriptor.configurable = true;
          descriptor.enumerable = true;

          if ('initializer' in descriptor) {
            this.defaultValue = descriptor.initializer;
            delete descriptor.initializer;
            delete descriptor.writable;
          }

          if ('value' in descriptor) {
            this.defaultValue = descriptor.value;
            delete descriptor.value;
            delete descriptor.writable;
          }

          descriptor.get = function () {
            return getObserver(behavior, this, name).getValue();
          };

          descriptor.set = function (value) {
            getObserver(behavior, this, name).setValue(value);
          };

          descriptor.get.getObserver = function (obj) {
            return getObserver(behavior, obj, name);
          };

          return descriptor;
        };

        BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
          var name = this.name;
          var handlerName = void 0;

          if (this.changeHandler === null) {
            handlerName = name + 'Changed';
            if (handlerName in target.prototype) {
              this.changeHandler = handlerName;
            }
          }

          if (this.descriptor === null) {
            Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
          }
        };

        BindableProperty.prototype.createObserver = function createObserver(viewModel) {
          var selfSubscriber = null;
          var defaultValue = this.defaultValue;
          var changeHandlerName = this.changeHandler;
          var name = this.name;
          var initialValue = void 0;

          if (this.hasOptions) {
            return undefined;
          }

          if (changeHandlerName in viewModel) {
            if ('propertyChanged' in viewModel) {
              selfSubscriber = function selfSubscriber(newValue, oldValue) {
                viewModel[changeHandlerName](newValue, oldValue);
                viewModel.propertyChanged(name, newValue, oldValue);
              };
            } else {
              selfSubscriber = function selfSubscriber(newValue, oldValue) {
                return viewModel[changeHandlerName](newValue, oldValue);
              };
            }
          } else if ('propertyChanged' in viewModel) {
            selfSubscriber = function selfSubscriber(newValue, oldValue) {
              return viewModel.propertyChanged(name, newValue, oldValue);
            };
          } else if (changeHandlerName !== null) {
            throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
          }

          if (defaultValue !== undefined) {
            initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
          }

          return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
        };

        BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
          var selfSubscriber = void 0;
          var observer = void 0;
          var attribute = void 0;
          var defaultValue = this.defaultValue;

          if (this.isDynamic) {
            for (var key in attributes) {
              this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
            }
          } else if (!this.hasOptions) {
            observer = observerLookup[this.name];

            if (attributes !== null) {
              selfSubscriber = observer.selfSubscriber;
              attribute = attributes[this.attribute];

              if (behaviorHandlesBind) {
                observer.selfSubscriber = null;
              }

              if (typeof attribute === 'string') {
                viewModel[this.name] = attribute;
                observer.call();
              } else if (attribute) {
                boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
              } else if (defaultValue !== undefined) {
                observer.call();
              }

              observer.selfSubscriber = selfSubscriber;
            }

            observer.publishing = true;
          }
        };

        BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
          var changeHandlerName = name + 'Changed';
          var selfSubscriber = null;
          var observer = void 0;
          var info = void 0;

          if (changeHandlerName in viewModel) {
            if ('propertyChanged' in viewModel) {
              selfSubscriber = function selfSubscriber(newValue, oldValue) {
                viewModel[changeHandlerName](newValue, oldValue);
                viewModel.propertyChanged(name, newValue, oldValue);
              };
            } else {
              selfSubscriber = function selfSubscriber(newValue, oldValue) {
                return viewModel[changeHandlerName](newValue, oldValue);
              };
            }
          } else if ('propertyChanged' in viewModel) {
            selfSubscriber = function selfSubscriber(newValue, oldValue) {
              return viewModel.propertyChanged(name, newValue, oldValue);
            };
          }

          observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

          Object.defineProperty(viewModel, name, {
            configurable: true,
            enumerable: true,
            get: observer.getValue.bind(observer),
            set: observer.setValue.bind(observer)
          });

          if (behaviorHandlesBind) {
            observer.selfSubscriber = null;
          }

          if (typeof attribute === 'string') {
            viewModel[name] = attribute;
            observer.call();
          } else if (attribute) {
            info = { observer: observer, binding: attribute.createBinding(viewModel) };
            boundProperties.push(info);
          }

          observer.publishing = true;
          observer.selfSubscriber = selfSubscriber;
        };

        return BindableProperty;
      }());

      _export('BindableProperty', BindableProperty);

      lastProviderId = 0;

      _export('HtmlBehaviorResource', HtmlBehaviorResource = function () {
        function HtmlBehaviorResource() {

          this.elementName = null;
          this.attributeName = null;
          this.attributeDefaultBindingMode = undefined;
          this.liftsContent = false;
          this.targetShadowDOM = false;
          this.shadowDOMOptions = null;
          this.processAttributes = doProcessAttributes;
          this.processContent = doProcessContent;
          this.usesShadowDOM = false;
          this.childBindings = null;
          this.hasDynamicOptions = false;
          this.containerless = false;
          this.properties = [];
          this.attributes = {};
          this.isInitialized = false;
          this.primaryProperty = null;
        }

        HtmlBehaviorResource.convention = function convention(name, existing) {
          var behavior = void 0;

          if (name.endsWith('CustomAttribute')) {
            behavior = existing || new HtmlBehaviorResource();
            behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
          }

          if (name.endsWith('CustomElement')) {
            behavior = existing || new HtmlBehaviorResource();
            behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
          }

          return behavior;
        };

        HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
          if (this.childBindings === null) {
            this.childBindings = [];
          }

          this.childBindings.push(behavior);
        };

        HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
          var proto = target.prototype;
          var properties = this.properties;
          var attributeName = this.attributeName;
          var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
          var i = void 0;
          var ii = void 0;
          var current = void 0;

          if (this.isInitialized) {
            return;
          }

          this.isInitialized = true;
          target.__providerId__ = nextProviderId();

          this.observerLocator = container.get(ObserverLocator);
          this.taskQueue = container.get(TaskQueue);

          this.target = target;
          this.usesShadowDOM = this.targetShadowDOM && FEATURE.shadowDOM;
          this.handlesCreated = 'created' in proto;
          this.handlesBind = 'bind' in proto;
          this.handlesUnbind = 'unbind' in proto;
          this.handlesAttached = 'attached' in proto;
          this.handlesDetached = 'detached' in proto;
          this.htmlName = this.elementName || this.attributeName;

          if (attributeName !== null) {
            if (properties.length === 0) {
              new BindableProperty({
                name: 'value',
                changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
                attribute: attributeName,
                defaultBindingMode: attributeDefaultBindingMode
              }).registerWith(target, this);
            }

            current = properties[0];

            if (properties.length === 1 && current.name === 'value') {
              current.isDynamic = current.hasOptions = this.hasDynamicOptions;
              current.defineOn(target, this);
            } else {
              for (i = 0, ii = properties.length; i < ii; ++i) {
                properties[i].defineOn(target, this);
                if (properties[i].primaryProperty) {
                  if (this.primaryProperty) {
                    throw new Error('Only one bindable property on a custom element can be defined as the default');
                  }
                  this.primaryProperty = properties[i];
                }
              }

              current = new BindableProperty({
                name: 'value',
                changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
                attribute: attributeName,
                defaultBindingMode: attributeDefaultBindingMode
              });

              current.hasOptions = true;
              current.registerWith(target, this);
            }
          } else {
            for (i = 0, ii = properties.length; i < ii; ++i) {
              properties[i].defineOn(target, this);
            }
          }
        };

        HtmlBehaviorResource.prototype.register = function register(registry, name) {
          var _this13 = this;

          if (this.attributeName !== null) {
            registry.registerAttribute(name || this.attributeName, this, this.attributeName);

            if (Array.isArray(this.aliases)) {
              this.aliases.forEach(function (alias) {
                registry.registerAttribute(alias, _this13, _this13.attributeName);
              });
            }
          }

          if (this.elementName !== null) {
            registry.registerElement(name || this.elementName, this);
          }
        };

        HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
          var _this14 = this;

          var options = void 0;

          if (this.elementName !== null) {
            viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
            options = new ViewCompileInstruction(this.targetShadowDOM, true);

            if (!viewStrategy.moduleId) {
              viewStrategy.moduleId = Origin.get(target).moduleId;
            }

            return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext, target).then(function (viewFactory) {
              if (!transientView || !_this14.viewFactory) {
                _this14.viewFactory = viewFactory;
              }

              return viewFactory;
            });
          }

          return Promise.resolve(this);
        };

        HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
          if (this.liftsContent) {
            if (!instruction.viewFactory) {
              var template = DOM.createElement('template');
              var fragment = DOM.createDocumentFragment();
              var cacheSize = node.getAttribute('view-cache');
              var part = node.getAttribute('part');

              node.removeAttribute(instruction.originalAttrName);
              DOM.replaceNode(template, node, parentNode);
              fragment.appendChild(node);
              instruction.viewFactory = compiler.compile(fragment, resources);

              if (part) {
                instruction.viewFactory.part = part;
                node.removeAttribute('part');
              }

              if (cacheSize) {
                instruction.viewFactory.setCacheSize(cacheSize);
                node.removeAttribute('view-cache');
              }

              node = template;
            }
          } else if (this.elementName !== null) {
            var _partReplacements2 = {};

            if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
              var currentChild = node.firstChild;
              var contentElement = this.usesShadowDOM ? null : DOM.createElement('au-content');
              var nextSibling = void 0;
              var toReplace = void 0;

              while (currentChild) {
                nextSibling = currentChild.nextSibling;

                if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
                  _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
                  DOM.removeNode(currentChild, parentNode);
                  instruction.partReplacements = _partReplacements2;
                } else if (contentElement !== null) {
                  if (currentChild.nodeType === 3 && _isAllWhitespace(currentChild)) {
                    DOM.removeNode(currentChild, parentNode);
                  } else {
                    contentElement.appendChild(currentChild);
                  }
                }

                currentChild = nextSibling;
              }

              if (contentElement !== null && contentElement.hasChildNodes()) {
                node.appendChild(contentElement);
              }

              instruction.skipContentProcessing = false;
            } else {
              instruction.skipContentProcessing = true;
            }
          }

          return node;
        };

        HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
          var viewHost = void 0;
          var au = null;

          instruction = instruction || BehaviorInstruction.normal;
          element = element || null;
          bindings = bindings || null;

          if (this.elementName !== null && element) {
            if (this.usesShadowDOM) {
              viewHost = element.attachShadow(this.shadowDOMOptions);
              container.registerInstance(DOM.boundary, viewHost);
            } else {
              viewHost = element;
              if (this.targetShadowDOM) {
                container.registerInstance(DOM.boundary, viewHost);
              }
            }
          }

          if (element !== null) {
            element.au = au = element.au || {};
          }

          var viewModel = instruction.viewModel || container.get(this.target);
          var controller = new Controller(this, instruction, viewModel, container);
          var childBindings = this.childBindings;
          var viewFactory = void 0;

          if (this.liftsContent) {
            au.controller = controller;
          } else if (this.elementName !== null) {
            viewFactory = instruction.viewFactory || this.viewFactory;
            container.viewModel = viewModel;

            if (viewFactory) {
              controller.view = viewFactory.create(container, instruction, element);
            }

            if (element !== null) {
              au.controller = controller;

              if (controller.view) {
                if (!this.usesShadowDOM && (element.childNodes.length === 1 || element.contentElement)) {
                  var contentElement = element.childNodes[0] || element.contentElement;
                  controller.view.contentView = { fragment: contentElement };
                  contentElement.parentNode && DOM.removeNode(contentElement);
                }

                if (instruction.anchorIsContainer) {
                  if (childBindings !== null) {
                    for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) {
                      controller.view.addBinding(childBindings[_i3].create(element, viewModel, controller));
                    }
                  }

                  controller.view.appendNodesTo(viewHost);
                } else {
                  controller.view.insertNodesBefore(viewHost);
                }
              } else if (childBindings !== null) {
                for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) {
                  bindings.push(childBindings[_i4].create(element, viewModel, controller));
                }
              }
            } else if (controller.view) {
              controller.view.controller = controller;

              if (childBindings !== null) {
                for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) {
                  controller.view.addBinding(childBindings[_i5].create(instruction.host, viewModel, controller));
                }
              }
            } else if (childBindings !== null) {
              for (var _i6 = 0, _ii6 = childBindings.length; _i6 < _ii6; ++_i6) {
                bindings.push(childBindings[_i6].create(instruction.host, viewModel, controller));
              }
            }
          } else if (childBindings !== null) {
            for (var _i7 = 0, _ii7 = childBindings.length; _i7 < _ii7; ++_i7) {
              bindings.push(childBindings[_i7].create(element, viewModel, controller));
            }
          }

          if (au !== null) {
            au[this.htmlName] = controller;
          }

          if (instruction.initiatedByBehavior && viewFactory) {
            controller.view.created();
          }

          return controller;
        };

        HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
          var properties = void 0;
          var i = void 0;
          var ii = void 0;
          var observer = void 0;

          if ('__propertiesDefined__' in lookup) {
            return;
          }

          lookup.__propertiesDefined__ = true;
          properties = this.properties;

          for (i = 0, ii = properties.length; i < ii; ++i) {
            observer = properties[i].createObserver(instance);

            if (observer !== undefined) {
              lookup[observer.propertyName] = observer;
            }
          }
        };

        return HtmlBehaviorResource;
      }());

      _export('HtmlBehaviorResource', HtmlBehaviorResource);

      ChildObserver = function () {
        function ChildObserver(config) {

          this.name = config.name;
          this.changeHandler = config.changeHandler || this.name + 'Changed';
          this.selector = config.selector;
          this.all = config.all;
        }

        ChildObserver.prototype.create = function create(viewHost, viewModel, controller) {
          return new ChildObserverBinder(this.selector, viewHost, this.name, viewModel, controller, this.changeHandler, this.all);
        };

        return ChildObserver;
      }();

      noMutations = [];

      ChildObserverBinder = function () {
        function ChildObserverBinder(selector, viewHost, property, viewModel, controller, changeHandler, all) {

          this.selector = selector;
          this.viewHost = viewHost;
          this.property = property;
          this.viewModel = viewModel;
          this.controller = controller;
          this.changeHandler = changeHandler in viewModel ? changeHandler : null;
          this.usesShadowDOM = controller.behavior.usesShadowDOM;
          this.all = all;

          if (!this.usesShadowDOM && controller.view && controller.view.contentView) {
            this.contentView = controller.view.contentView;
          } else {
            this.contentView = null;
          }
        }

        ChildObserverBinder.prototype.matches = function matches(element) {
          if (element.matches(this.selector)) {
            if (this.contentView === null) {
              return true;
            }

            var contentView = this.contentView;
            var assignedSlot = element.auAssignedSlot;

            if (assignedSlot && assignedSlot.projectFromAnchors) {
              var anchors = assignedSlot.projectFromAnchors;

              for (var _i9 = 0, _ii9 = anchors.length; _i9 < _ii9; ++_i9) {
                if (anchors[_i9].auOwnerView === contentView) {
                  return true;
                }
              }

              return false;
            }

            return element.auOwnerView === contentView;
          }

          return false;
        };

        ChildObserverBinder.prototype.bind = function bind(source) {
          var viewHost = this.viewHost;
          var viewModel = this.viewModel;
          var observer = viewHost.__childObserver__;

          if (!observer) {
            observer = viewHost.__childObserver__ = DOM.createMutationObserver(onChildChange);

            var options = {
              childList: true,
              subtree: !this.usesShadowDOM
            };

            observer.observe(viewHost, options);
            observer.binders = [];
          }

          observer.binders.push(this);

          if (this.usesShadowDOM) {
            var current = viewHost.firstElementChild;

            if (this.all) {
              var items = viewModel[this.property];
              if (!items) {
                items = viewModel[this.property] = [];
              } else {
                items.length = 0;
              }

              while (current) {
                if (this.matches(current)) {
                  items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
                }

                current = current.nextElementSibling;
              }

              if (this.changeHandler !== null) {
                this.viewModel[this.changeHandler](noMutations);
              }
            } else {
              while (current) {
                if (this.matches(current)) {
                  var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
                  this.viewModel[this.property] = value;

                  if (this.changeHandler !== null) {
                    this.viewModel[this.changeHandler](value);
                  }

                  break;
                }

                current = current.nextElementSibling;
              }
            }
          }
        };

        ChildObserverBinder.prototype.onRemove = function onRemove(element) {
          if (this.matches(element)) {
            var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

            if (this.all) {
              var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
              var index = items.indexOf(value);

              if (index !== -1) {
                items.splice(index, 1);
              }

              return true;
            }

            return false;
          }

          return false;
        };

        ChildObserverBinder.prototype.onAdd = function onAdd(element) {
          if (this.matches(element)) {
            var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

            if (this.all) {
              var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
              var index = 0;
              var prev = element.previousElementSibling;

              while (prev) {
                if (this.matches(prev)) {
                  index++;
                }

                prev = prev.previousElementSibling;
              }

              items.splice(index, 0, value);
              return true;
            }

            this.viewModel[this.property] = value;

            if (this.changeHandler !== null) {
              this.viewModel[this.changeHandler](value);
            }
          }

          return false;
        };

        ChildObserverBinder.prototype.unbind = function unbind() {
          if (this.viewHost.__childObserver__) {
            this.viewHost.__childObserver__.disconnect();
            this.viewHost.__childObserver__ = null;
          }
        };

        return ChildObserverBinder;
      }();

      _export('SwapStrategies', SwapStrategies = {
        before: function before(viewSlot, previous, callback) {
          return previous === undefined ? callback() : callback().then(function () {
            return remove(viewSlot, previous);
          });
        },
        with: function _with(viewSlot, previous, callback) {
          return previous === undefined ? callback() : Promise.all([remove(viewSlot, previous), callback()]);
        },
        after: function after(viewSlot, previous, callback) {
          return Promise.resolve(viewSlot.removeAll(true)).then(callback);
        }
      });

      _export('SwapStrategies', SwapStrategies);

      _export('CompositionEngine', CompositionEngine = (_dec10 = inject(ViewEngine, ViewLocator), _dec10(_class17 = function () {
        function CompositionEngine(viewEngine, viewLocator) {

          this.viewEngine = viewEngine;
          this.viewLocator = viewLocator;
        }

        CompositionEngine.prototype._swap = function _swap(context, view) {
          var swapStrategy = SwapStrategies[context.swapOrder] || SwapStrategies.after;
          var previousViews = context.viewSlot.children.slice();

          return swapStrategy(context.viewSlot, previousViews, function () {
            return Promise.resolve(context.viewSlot.add(view)).then(function () {
              if (context.currentController) {
                context.currentController.unbind();
              }
            });
          }).then(function () {
            if (context.compositionTransactionNotifier) {
              context.compositionTransactionNotifier.done();
            }
          });
        };

        CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
          var _this15 = this;

          return this.createController(context).then(function (controller) {
            controller.automate(context.overrideContext, context.owningView);

            if (context.compositionTransactionOwnershipToken) {
              return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
                return _this15._swap(context, controller.view);
              }).then(function () {
                return controller;
              });
            }

            return _this15._swap(context, controller.view).then(function () {
              return controller;
            });
          });
        };

        CompositionEngine.prototype.createController = function createController(context) {
          var _this16 = this;

          var childContainer = void 0;
          var viewModel = void 0;
          var viewModelResource = void 0;
          var m = void 0;

          return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
            childContainer = context.childContainer;
            viewModel = context.viewModel;
            viewModelResource = context.viewModelResource;
            m = viewModelResource.metadata;

            var viewStrategy = _this16.viewLocator.getViewStrategy(context.view || viewModel);

            if (context.viewResources) {
              viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
            }

            return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
          }).then(function (viewFactory) {
            return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
          });
        };

        CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
          var childContainer = context.childContainer = context.childContainer || context.container.createChild();

          if (typeof context.viewModel === 'string') {
            context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

            return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
              childContainer.autoRegister(viewModelResource.value);

              if (context.host) {
                childContainer.registerInstance(DOM.Element, context.host);
              }

              context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
              context.viewModelResource = viewModelResource;
              return context;
            });
          }

          var m = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, context.viewModel.constructor);
          m.elementName = m.elementName || 'dynamic-element';
          m.initialize(context.container || childContainer, context.viewModel.constructor);
          context.viewModelResource = { metadata: m, value: context.viewModel.constructor };
          childContainer.viewModel = context.viewModel;
          return Promise.resolve(context);
        };

        CompositionEngine.prototype.compose = function compose(context) {
          var _this17 = this;

          context.childContainer = context.childContainer || context.container.createChild();
          context.view = this.viewLocator.getViewStrategy(context.view);

          var transaction = context.childContainer.get(CompositionTransaction);
          var compositionTransactionOwnershipToken = transaction.tryCapture();

          if (compositionTransactionOwnershipToken) {
            context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
          } else {
            context.compositionTransactionNotifier = transaction.enlist();
          }

          if (context.viewModel) {
            return this._createControllerAndSwap(context);
          } else if (context.view) {
            if (context.viewResources) {
              context.view.makeRelativeTo(context.viewResources.viewUrl);
            }

            return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
              var result = viewFactory.create(context.childContainer);
              result.bind(context.bindingContext, context.overrideContext);

              if (context.compositionTransactionOwnershipToken) {
                return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
                  return _this17._swap(context, result);
                }).then(function () {
                  return result;
                });
              }

              return _this17._swap(context, result).then(function () {
                return result;
              });
            });
          } else if (context.viewSlot) {
            context.viewSlot.removeAll();

            if (context.compositionTransactionNotifier) {
              context.compositionTransactionNotifier.done();
            }

            return Promise.resolve(null);
          }

          return Promise.resolve(null);
        };

        return CompositionEngine;
      }()) || _class17));

      _export('CompositionEngine', CompositionEngine);

      _export('ElementConfigResource', ElementConfigResource = function () {
        function ElementConfigResource() {}

        ElementConfigResource.prototype.initialize = function initialize(container, target) {};

        ElementConfigResource.prototype.register = function register(registry, name) {};

        ElementConfigResource.prototype.load = function load(container, target) {
          var config = new target();
          var eventManager = container.get(EventManager);
          eventManager.registerElementConfig(config);
        };

        return ElementConfigResource;
      }());

      _export('ElementConfigResource', ElementConfigResource);

      defaultShadowDOMOptions = { mode: 'open' };

      _export('TemplatingEngine', TemplatingEngine = (_dec11 = inject(Container, ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec11(_class18 = function () {
        function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {

          this._container = container;
          this._moduleAnalyzer = moduleAnalyzer;
          this._viewCompiler = viewCompiler;
          this._compositionEngine = compositionEngine;
          container.registerInstance(Animator, Animator.instance = new Animator());
        }

        TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
          this._container.unregister(Animator);
          this._container.registerInstance(Animator, Animator.instance = animator);
        };

        TemplatingEngine.prototype.compose = function compose(context) {
          return this._compositionEngine.compose(context);
        };

        TemplatingEngine.prototype.enhance = function enhance(instruction) {
          if (instruction instanceof DOM.Element) {
            instruction = { element: instruction };
          }

          var compilerInstructions = {};
          var resources = instruction.resources || this._container.get(ViewResources);

          this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

          var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
          var container = instruction.container || this._container.createChild();
          var view = factory.create(container, BehaviorInstruction.enhance());

          view.bind(instruction.bindingContext || {}, instruction.overrideContext);

          view.firstChild = view.lastChild = view.fragment;
          view.fragment = DOM.createDocumentFragment();
          view.attached();

          return view;
        };

        return TemplatingEngine;
      }()) || _class18));

      _export('TemplatingEngine', TemplatingEngine);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-path/dist/system/aurelia-path.js', [], function (_export, _context) {
  "use strict";

  var _typeof, encode, encodeKey;

  function trimDots(ary) {
    for (var i = 0; i < ary.length; ++i) {
      var part = ary[i];
      if (part === '.') {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === '..') {
        if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }

  function relativeToFile(name, file) {
    var fileParts = file && file.split('/');
    var nameParts = name.trim().split('/');

    if (nameParts[0].charAt(0) === '.' && fileParts) {
      var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      nameParts.unshift.apply(nameParts, normalizedBaseParts);
    }

    trimDots(nameParts);

    return nameParts.join('/');
  }

  _export('relativeToFile', relativeToFile);

  function join(path1, path2) {
    if (!path1) {
      return path2;
    }

    if (!path2) {
      return path1;
    }

    var schemeMatch = path1.match(/^([^/]*?:)\//);
    var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
    path1 = path1.substr(scheme.length);

    var urlPrefix = void 0;
    if (path1.indexOf('///') === 0 && scheme === 'file:') {
      urlPrefix = '///';
    } else if (path1.indexOf('//') === 0) {
      urlPrefix = '//';
    } else if (path1.indexOf('/') === 0) {
      urlPrefix = '/';
    } else {
      urlPrefix = '';
    }

    var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];

    for (var i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] === '..') {
        url3.pop();
      } else if (url1[i] === '.' || url1[i] === '') {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }

    for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
      if (url2[_i] === '..') {
        url3.pop();
      } else if (url2[_i] === '.' || url2[_i] === '') {
        continue;
      } else {
        url3.push(url2[_i]);
      }
    }

    return scheme + urlPrefix + url3.join('/') + trailingSlash;
  }

  _export('join', join);

  function buildParam(key, value, traditional) {
    var result = [];
    if (value === null || value === undefined) {
      return result;
    }
    if (Array.isArray(value)) {
      for (var i = 0, l = value.length; i < l; i++) {
        if (traditional) {
          result.push(encodeKey(key) + '=' + encode(value[i]));
        } else {
          var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
          result = result.concat(buildParam(arrayKey, value[i]));
        }
      }
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !traditional) {
      for (var propertyName in value) {
        result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
      }
    } else {
      result.push(encodeKey(key) + '=' + encode(value));
    }
    return result;
  }

  function buildQueryString(params, traditional) {
    var pairs = [];
    var keys = Object.keys(params || {}).sort();
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      pairs = pairs.concat(buildParam(key, params[key], traditional));
    }

    if (pairs.length === 0) {
      return '';
    }

    return pairs.join('&');
  }

  _export('buildQueryString', buildQueryString);

  function processScalarParam(existedParam, value) {
    if (Array.isArray(existedParam)) {
      existedParam.push(value);
      return existedParam;
    }
    if (existedParam !== undefined) {
      return [existedParam, value];
    }

    return value;
  }

  function parseComplexParam(queryParams, keys, value) {
    var currentParams = queryParams;
    var keysLastIndex = keys.length - 1;
    for (var j = 0; j <= keysLastIndex; j++) {
      var key = keys[j] === '' ? currentParams.length : keys[j];
      if (j < keysLastIndex) {
        var prevValue = !currentParams[key] || _typeof(currentParams[key]) === 'object' ? currentParams[key] : [currentParams[key]];
        currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
      } else {
        currentParams = currentParams[key] = value;
      }
    }
  }

  function parseQueryString(queryString) {
    var queryParams = {};
    if (!queryString || typeof queryString !== 'string') {
      return queryParams;
    }

    var query = queryString;
    if (query.charAt(0) === '?') {
      query = query.substr(1);
    }

    var pairs = query.replace(/\+/g, ' ').split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      var key = decodeURIComponent(pair[0]);
      if (!key) {
        continue;
      }

      var keys = key.split('][');
      var keysLastIndex = keys.length - 1;

      if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
        keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
        keys = keys.shift().split('[').concat(keys);
        keysLastIndex = keys.length - 1;
      } else {
        keysLastIndex = 0;
      }

      if (pair.length >= 2) {
        var value = pair[1] ? decodeURIComponent(pair[1]) : '';
        if (keysLastIndex) {
          parseComplexParam(queryParams, keys, value);
        } else {
          queryParams[key] = processScalarParam(queryParams[key], value);
        }
      } else {
        queryParams[key] = true;
      }
    }
    return queryParams;
  }

  _export('parseQueryString', parseQueryString);

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      encode = encodeURIComponent;

      encodeKey = function encodeKey(k) {
        return encode(k).replace('%24', '$');
      };
    }
  };
});
'use strict';

System.register('node_modules/aurelia-logging/dist/system/aurelia-logging.js', [], function (_export, _context) {
  "use strict";

  var logLevel, loggers, appenders, globalDefaultLevel, Logger;

  function appendArgs() {
    return [this].concat(Array.prototype.slice.call(arguments));
  }

  function logFactory(level) {
    var threshold = logLevel[level];
    return function () {
      if (this.level < threshold) {
        return;
      }

      var args = appendArgs.apply(this, arguments);
      var i = appenders.length;
      while (i--) {
        var _appenders$i;

        (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
      }
    };
  }

  function connectLoggers() {
    var proto = Logger.prototype;
    proto.debug = logFactory('debug');
    proto.info = logFactory('info');
    proto.warn = logFactory('warn');
    proto.error = logFactory('error');
  }

  function getLogger(id) {
    return loggers[id] || new Logger(id);
  }

  _export('getLogger', getLogger);

  function addAppender(appender) {
    if (appenders.push(appender) === 1) {
      connectLoggers();
    }
  }

  _export('addAppender', addAppender);

  function removeAppender(appender) {
    appenders = appenders.filter(function (a) {
      return a !== appender;
    });
  }

  _export('removeAppender', removeAppender);

  function setLevel(level) {
    globalDefaultLevel = level;
    for (var key in loggers) {
      loggers[key].setLevel(level);
    }
  }

  _export('setLevel', setLevel);

  function getLevel() {
    return globalDefaultLevel;
  }

  _export('getLevel', getLevel);

  return {
    setters: [],
    execute: function () {
      _export('logLevel', logLevel = {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      });

      _export('logLevel', logLevel);

      loggers = {};
      appenders = [];
      globalDefaultLevel = logLevel.none;

      _export('Logger', Logger = function () {
        function Logger(id) {

          var cached = loggers[id];
          if (cached) {
            return cached;
          }

          loggers[id] = this;
          this.id = id;
          this.level = globalDefaultLevel;
        }

        Logger.prototype.debug = function debug(message) {};

        Logger.prototype.info = function info(message) {};

        Logger.prototype.warn = function warn(message) {};

        Logger.prototype.error = function error(message) {};

        Logger.prototype.setLevel = function setLevel(level) {
          this.level = level;
        };

        return Logger;
      }());

      _export('Logger', Logger);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-binding/dist/system/aurelia-binding.js', ['aurelia-logging', 'aurelia-pal', 'aurelia-task-queue', 'aurelia-metadata'], function (_export, _context) {
  "use strict";

  var LogManager, PLATFORM, DOM, TaskQueue, metadata, _typeof, _createClass, _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class12, _temp, _dec10, _class13, _class14, _temp2, map, sourceContext, slotNames, versionSlotNames, i, queue, queued, nextId, minimumImmediate, frameBudget, isFlushRequested, immediate, arrayPool1, arrayPool2, poolUtilization, ExpressionObserver, EDIT_LEAVE, EDIT_UPDATE, EDIT_ADD, EDIT_DELETE, arraySplice, ModifyCollectionObserver, CollectionLengthObserver, pop, push, reverse, shift, sort, splice, unshift, ModifyArrayObserver, Expression, Chain, BindingBehavior, ValueConverter, Assign, Conditional, AccessThis, AccessScope, AccessMember, AccessKeyed, CallScope, CallMember, CallFunction, Binary, PrefixNot, LiteralPrimitive, LiteralString, LiteralArray, LiteralObject, _Unparser, ExpressionCloner, bindingMode, Token, Lexer, Scanner, OPERATORS, $EOF, $TAB, $LF, $VTAB, $FF, $CR, $SPACE, $BANG, $DQ, $$, $PERCENT, $AMPERSAND, $SQ, $LPAREN, $RPAREN, $STAR, $PLUS, $COMMA, $MINUS, $PERIOD, $SLASH, $COLON, $SEMICOLON, $LT, $EQ, $GT, $QUESTION, $0, $9, $A, $E, $Z, $LBRACKET, $BACKSLASH, $RBRACKET, $CARET, $_, $a, $e, $f, $n, $r, $t, $u, $v, $z, $LBRACE, $BAR, $RBRACE, $NBSP, EOF, Parser, ParserImplementation, mapProto, ModifyMapObserver, CapturedHandlerEntry, DelegateHandlerEntry, DefaultEventStrategy, delegationStrategy, EventManager, DirtyChecker, DirtyCheckProperty, logger, propertyAccessor, PrimitiveObserver, SetterObserver, XLinkAttributeObserver, dataAttributeAccessor, DataAttributeObserver, StyleObserver, ValueAttributeObserver, checkedArrayContext, checkedValueContext, CheckedObserver, selectArrayContext, SelectValueObserver, ClassObserver, ComputedExpression, svgElements, svgPresentationElements, svgPresentationAttributes, svgAnalyzer, elements, presentationElements, presentationAttributes, SVGAnalyzer, ObserverLocator, ObjectObservationAdapter, BindingExpression, targetContext, Binding, CallExpression, Call, ValueConverterResource, BindingBehaviorResource, ListenerExpression, Listener, NameExpression, NameBinder, LookupFunctions, BindingEngine, setProto, ModifySetObserver;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function camelCase(name) {
    if (name in map) {
      return map[name];
    }
    var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function (_, x) {
      return x.toUpperCase();
    });
    map[name] = result;
    return result;
  }

  _export('camelCase', camelCase);

  function createOverrideContext(bindingContext, parentOverrideContext) {
    return {
      bindingContext: bindingContext,
      parentOverrideContext: parentOverrideContext || null
    };
  }

  _export('createOverrideContext', createOverrideContext);

  function getContextFor(name, scope, ancestor) {
    var oc = scope.overrideContext;

    if (ancestor) {
      while (ancestor && oc) {
        ancestor--;
        oc = oc.parentOverrideContext;
      }
      if (ancestor || !oc) {
        return undefined;
      }
      return name in oc ? oc : oc.bindingContext;
    }

    while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
      oc = oc.parentOverrideContext;
    }
    if (oc) {
      return name in oc ? oc : oc.bindingContext;
    }

    return scope.bindingContext || scope.overrideContext;
  }

  _export('getContextFor', getContextFor);

  function createScopeForTest(bindingContext, parentBindingContext) {
    if (parentBindingContext) {
      return {
        bindingContext: bindingContext,
        overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
      };
    }
    return {
      bindingContext: bindingContext,
      overrideContext: createOverrideContext(bindingContext)
    };
  }

  _export('createScopeForTest', createScopeForTest);

  function addObserver(observer) {
    var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
    var i = observerSlots;
    while (i-- && this[slotNames[i]] !== observer) {}

    if (i === -1) {
      i = 0;
      while (this[slotNames[i]]) {
        i++;
      }
      this[slotNames[i]] = observer;
      observer.subscribe(sourceContext, this);

      if (i === observerSlots) {
        this._observerSlots = i + 1;
      }
    }

    if (this._version === undefined) {
      this._version = 0;
    }
    this[versionSlotNames[i]] = this._version;
  }

  function observeProperty(obj, propertyName) {
    var observer = this.observerLocator.getObserver(obj, propertyName);
    addObserver.call(this, observer);
  }

  function observeArray(array) {
    var observer = this.observerLocator.getArrayObserver(array);
    addObserver.call(this, observer);
  }

  function unobserve(all) {
    var i = this._observerSlots;
    while (i--) {
      if (all || this[versionSlotNames[i]] !== this._version) {
        var observer = this[slotNames[i]];
        this[slotNames[i]] = null;
        if (observer) {
          observer.unsubscribe(sourceContext, this);
        }
      }
    }
  }

  function connectable() {
    return function (target) {
      target.prototype.observeProperty = observeProperty;
      target.prototype.observeArray = observeArray;
      target.prototype.unobserve = unobserve;
      target.prototype.addObserver = addObserver;
    };
  }

  _export('connectable', connectable);

  function flush(animationFrameStart) {
    var length = queue.length;
    var i = 0;
    while (i < length) {
      var binding = queue[i];
      queued[binding.__connectQueueId] = false;
      binding.connect(true);
      i++;

      if (i % 100 === 0 && PLATFORM.performance.now() - animationFrameStart > frameBudget) {
        break;
      }
    }
    queue.splice(0, i);

    if (queue.length) {
      PLATFORM.requestAnimationFrame(flush);
    } else {
      isFlushRequested = false;
      immediate = 0;
    }
  }

  function enqueueBindingConnect(binding) {
    if (immediate < minimumImmediate) {
      immediate++;
      binding.connect(false);
    } else {
      var id = binding.__connectQueueId;
      if (id === undefined) {
        id = nextId;
        nextId++;
        binding.__connectQueueId = id;
      }

      if (!queued[id]) {
        queue.push(binding);
        queued[id] = true;
      }
    }
    if (!isFlushRequested) {
      isFlushRequested = true;
      PLATFORM.requestAnimationFrame(flush);
    }
  }

  _export('enqueueBindingConnect', enqueueBindingConnect);

  function addSubscriber(context, callable) {
    if (this.hasSubscriber(context, callable)) {
      return false;
    }
    if (!this._context0) {
      this._context0 = context;
      this._callable0 = callable;
      return true;
    }
    if (!this._context1) {
      this._context1 = context;
      this._callable1 = callable;
      return true;
    }
    if (!this._context2) {
      this._context2 = context;
      this._callable2 = callable;
      return true;
    }
    if (!this._contextsRest) {
      this._contextsRest = [context];
      this._callablesRest = [callable];
      return true;
    }
    this._contextsRest.push(context);
    this._callablesRest.push(callable);
    return true;
  }

  function removeSubscriber(context, callable) {
    if (this._context0 === context && this._callable0 === callable) {
      this._context0 = null;
      this._callable0 = null;
      return true;
    }
    if (this._context1 === context && this._callable1 === callable) {
      this._context1 = null;
      this._callable1 = null;
      return true;
    }
    if (this._context2 === context && this._callable2 === callable) {
      this._context2 = null;
      this._callable2 = null;
      return true;
    }
    var rest = this._contextsRest;
    var index = void 0;
    if (!rest || !rest.length || (index = rest.indexOf(context)) === -1 || this._callablesRest[index] !== callable) {
      return false;
    }
    rest.splice(index, 1);
    this._callablesRest.splice(index, 1);
    return true;
  }

  function callSubscribers(newValue, oldValue) {
    var context0 = this._context0;
    var callable0 = this._callable0;
    var context1 = this._context1;
    var callable1 = this._callable1;
    var context2 = this._context2;
    var callable2 = this._callable2;
    var length = this._contextsRest ? this._contextsRest.length : 0;
    var contextsRest = void 0;
    var callablesRest = void 0;
    var poolIndex = void 0;
    var i = void 0;
    if (length) {
      poolIndex = poolUtilization.length;
      while (poolIndex-- && poolUtilization[poolIndex]) {}
      if (poolIndex < 0) {
        poolIndex = poolUtilization.length;
        contextsRest = [];
        callablesRest = [];
        poolUtilization.push(true);
        arrayPool1.push(contextsRest);
        arrayPool2.push(callablesRest);
      } else {
        poolUtilization[poolIndex] = true;
        contextsRest = arrayPool1[poolIndex];
        callablesRest = arrayPool2[poolIndex];
      }

      i = length;
      while (i--) {
        contextsRest[i] = this._contextsRest[i];
        callablesRest[i] = this._callablesRest[i];
      }
    }

    if (context0) {
      if (callable0) {
        callable0.call(context0, newValue, oldValue);
      } else {
        context0(newValue, oldValue);
      }
    }
    if (context1) {
      if (callable1) {
        callable1.call(context1, newValue, oldValue);
      } else {
        context1(newValue, oldValue);
      }
    }
    if (context2) {
      if (callable2) {
        callable2.call(context2, newValue, oldValue);
      } else {
        context2(newValue, oldValue);
      }
    }
    if (length) {
      for (i = 0; i < length; i++) {
        var callable = callablesRest[i];
        var context = contextsRest[i];
        if (callable) {
          callable.call(context, newValue, oldValue);
        } else {
          context(newValue, oldValue);
        }
        contextsRest[i] = null;
        callablesRest[i] = null;
      }
      poolUtilization[poolIndex] = false;
    }
  }

  function hasSubscribers() {
    return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
  }

  function hasSubscriber(context, callable) {
    var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
    if (has) {
      return true;
    }
    var index = void 0;
    var contexts = this._contextsRest;
    if (!contexts || (index = contexts.length) === 0) {
      return false;
    }
    var callables = this._callablesRest;
    while (index--) {
      if (contexts[index] === context && callables[index] === callable) {
        return true;
      }
    }
    return false;
  }

  function subscriberCollection() {
    return function (target) {
      target.prototype.addSubscriber = addSubscriber;
      target.prototype.removeSubscriber = removeSubscriber;
      target.prototype.callSubscribers = callSubscribers;
      target.prototype.hasSubscribers = hasSubscribers;
      target.prototype.hasSubscriber = hasSubscriber;
    };
  }

  _export('subscriberCollection', subscriberCollection);

  function isIndex(s) {
    return +s === s >>> 0;
  }

  function toNumber(s) {
    return +s;
  }

  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  function ArraySplice() {}

  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
  }

  _export('calcSplices', calcSplices);

  function intersect(start1, end1, start2, end2) {
    if (end1 < start2 || end2 < start1) {
      return -1;
    }

    if (end1 === start2 || end2 === start1) {
      return 0;
    }

    if (start1 < start2) {
      if (end1 < end2) {
        return end1 - start2;
      }

      return end2 - start2;
    }

    if (end2 < end1) {
      return end2 - start1;
    }

    return end1 - start1;
  }

  function mergeSplice(splices, index, removed, addedCount) {
    var splice = newSplice(index, removed, addedCount);

    var inserted = false;
    var insertionOffset = 0;

    for (var _i5 = 0; _i5 < splices.length; _i5++) {
      var current = splices[_i5];
      current.index += insertionOffset;

      if (inserted) {
        continue;
      }

      var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

      if (intersectCount >= 0) {

        splices.splice(_i5, 1);
        _i5--;

        insertionOffset -= current.addedCount - current.removed.length;

        splice.addedCount += current.addedCount - intersectCount;
        var deleteCount = splice.removed.length + current.removed.length - intersectCount;

        if (!splice.addedCount && !deleteCount) {
          inserted = true;
        } else {
          var currentRemoved = current.removed;

          if (splice.index < current.index) {
            var prepend = splice.removed.slice(0, current.index - splice.index);
            Array.prototype.push.apply(prepend, currentRemoved);
            currentRemoved = prepend;
          }

          if (splice.index + splice.removed.length > current.index + current.addedCount) {
            var append = splice.removed.slice(current.index + current.addedCount - splice.index);
            Array.prototype.push.apply(currentRemoved, append);
          }

          splice.removed = currentRemoved;
          if (current.index < splice.index) {
            splice.index = current.index;
          }
        }
      } else if (splice.index < current.index) {

        inserted = true;

        splices.splice(_i5, 0, splice);
        _i5++;

        var offset = splice.addedCount - splice.removed.length;
        current.index += offset;
        insertionOffset += offset;
      }
    }

    if (!inserted) {
      splices.push(splice);
    }
  }

  _export('mergeSplice', mergeSplice);

  function createInitialSplices(array, changeRecords) {
    var splices = [];

    for (var _i6 = 0; _i6 < changeRecords.length; _i6++) {
      var record = changeRecords[_i6];
      switch (record.type) {
        case 'splice':
          mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
          break;
        case 'add':
        case 'update':
        case 'delete':
          if (!isIndex(record.name)) {
            continue;
          }

          var index = toNumber(record.name);
          if (index < 0) {
            continue;
          }

          mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
          break;
        default:
          console.error('Unexpected record type: ' + JSON.stringify(record));
          break;
      }
    }

    return splices;
  }

  function projectArraySplices(array, changeRecords) {
    var splices = [];

    createInitialSplices(array, changeRecords).forEach(function (splice) {
      if (splice.addedCount === 1 && splice.removed.length === 1) {
        if (splice.removed[0] !== array[splice.index]) {
          splices.push(splice);
        }

        return;
      }

      splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    });

    return splices;
  }

  _export('projectArraySplices', projectArraySplices);

  function newRecord(type, object, key, oldValue) {
    return {
      type: type,
      object: object,
      key: key,
      oldValue: oldValue
    };
  }

  function getChangeRecords(map) {
    var entries = new Array(map.size);
    var keys = map.keys();
    var i = 0;
    var item = void 0;

    while (item = keys.next()) {
      if (item.done) {
        break;
      }

      entries[i] = newRecord('added', map, item.value);
      i++;
    }

    return entries;
  }

  _export('getChangeRecords', getChangeRecords);

  function _getArrayObserver(taskQueue, array) {
    return ModifyArrayObserver.for(taskQueue, array);
  }

  function evalList(scope, list, lookupFunctions) {
    var length = list.length;
    var result = [];
    for (var _i14 = 0; _i14 < length; _i14++) {
      result[_i14] = list[_i14].evaluate(scope, lookupFunctions);
    }
    return result;
  }

  function autoConvertAdd(a, b) {
    if (a !== null && b !== null) {
      if (typeof a === 'string' && typeof b !== 'string') {
        return a + b.toString();
      }

      if (typeof a !== 'string' && typeof b === 'string') {
        return a.toString() + b;
      }

      return a + b;
    }

    if (a !== null) {
      return a;
    }

    if (b !== null) {
      return b;
    }

    return 0;
  }

  function getFunction(obj, name, mustExist) {
    var func = obj === null || obj === undefined ? null : obj[name];
    if (typeof func === 'function') {
      return func;
    }
    if (!mustExist && (func === null || func === undefined)) {
      return null;
    }
    throw new Error(name + ' is not a function');
  }

  function getKeyed(obj, key) {
    if (Array.isArray(obj)) {
      return obj[parseInt(key, 10)];
    } else if (obj) {
      return obj[key];
    } else if (obj === null || obj === undefined) {
      return undefined;
    }

    return obj[key];
  }

  function setKeyed(obj, key, value) {
    if (Array.isArray(obj)) {
      var index = parseInt(key, 10);

      if (obj.length <= index) {
        obj.length = index + 1;
      }

      obj[index] = value;
    } else {
      obj[key] = value;
    }

    return value;
  }

  function cloneExpression(expression) {
    var visitor = new ExpressionCloner();
    return expression.accept(visitor);
  }

  _export('cloneExpression', cloneExpression);

  function isWhitespace(code) {
    return code >= $TAB && code <= $SPACE || code === $NBSP;
  }

  function isIdentifierStart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
  }

  function isIdentifierPart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
  }

  function isDigit(code) {
    return $0 <= code && code <= $9;
  }

  function isExponentStart(code) {
    return code === $e || code === $E;
  }

  function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
  }

  function unescape(code) {
    switch (code) {
      case $n:
        return $LF;
      case $f:
        return $FF;
      case $r:
        return $CR;
      case $t:
        return $TAB;
      case $v:
        return $VTAB;
      default:
        return code;
    }
  }

  function assert(condition, message) {
    if (!condition) {
      throw message || 'Assertion failed';
    }
  }

  function _getMapObserver(taskQueue, map) {
    return ModifyMapObserver.for(taskQueue, map);
  }

  function findOriginalEventTarget(event) {
    return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
  }

  function stopPropagation() {
    this.standardStopPropagation();
    this.propagationStopped = true;
  }

  function interceptStopPropagation(event) {
    event.standardStopPropagation = event.stopPropagation;
    event.stopPropagation = stopPropagation;
  }

  function handleCapturedEvent(event) {
    var interceptInstalled = false;
    event.propagationStopped = false;
    var target = findOriginalEventTarget(event);

    var orderedCallbacks = [];

    while (target) {
      if (target.capturedCallbacks) {
        var callback = target.capturedCallbacks[event.type];
        if (callback) {
          if (!interceptInstalled) {
            interceptStopPropagation(event);
            interceptInstalled = true;
          }
          orderedCallbacks.push(callback);
        }
      }
      target = target.parentNode;
    }
    for (var _i22 = orderedCallbacks.length - 1; _i22 >= 0; _i22--) {
      var orderedCallback = orderedCallbacks[_i22];
      orderedCallback(event);
      if (event.propagationStopped) {
        break;
      }
    }
  }

  function handleDelegatedEvent(event) {
    var interceptInstalled = false;
    event.propagationStopped = false;
    var target = findOriginalEventTarget(event);

    while (target && !event.propagationStopped) {
      if (target.delegatedCallbacks) {
        var callback = target.delegatedCallbacks[event.type];
        if (callback) {
          if (!interceptInstalled) {
            interceptStopPropagation(event);
            interceptInstalled = true;
          }
          callback(event);
        }
      }

      target = target.parentNode;
    }
  }

  function hasDeclaredDependencies(descriptor) {
    return !!(descriptor && descriptor.get && descriptor.get.dependencies);
  }

  _export('hasDeclaredDependencies', hasDeclaredDependencies);

  function declarePropertyDependencies(ctor, propertyName, dependencies) {
    var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
    descriptor.get.dependencies = dependencies;
  }

  _export('declarePropertyDependencies', declarePropertyDependencies);

  function computedFrom() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
      descriptor.get.dependencies = rest;
      return descriptor;
    };
  }

  _export('computedFrom', computedFrom);

  function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
    var dependencies = descriptor.get.dependencies;
    if (!(dependencies instanceof ComputedExpression)) {
      var _i25 = dependencies.length;
      while (_i25--) {
        dependencies[_i25] = observerLocator.parser.parse(dependencies[_i25]);
      }
      dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
    }

    var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
    return new ExpressionObserver(scope, dependencies, observerLocator);
  }

  _export('createComputedObserver', createComputedObserver);

  function valueConverter(nameOrTarget) {
    if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
      return function (target) {
        metadata.define(metadata.resource, new ValueConverterResource(nameOrTarget), target);
      };
    }

    metadata.define(metadata.resource, new ValueConverterResource(), nameOrTarget);
  }

  _export('valueConverter', valueConverter);

  function bindingBehavior(nameOrTarget) {
    if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
      return function (target) {
        metadata.define(metadata.resource, new BindingBehaviorResource(nameOrTarget), target);
      };
    }

    metadata.define(metadata.resource, new BindingBehaviorResource(), nameOrTarget);
  }

  _export('bindingBehavior', bindingBehavior);

  function getAU(element) {
    var au = element.au;

    if (au === undefined) {
      throw new Error('No Aurelia APIs are defined for the element: "' + element.tagName + '".');
    }

    return au;
  }

  function _getSetObserver(taskQueue, set) {
    return ModifySetObserver.for(taskQueue, set);
  }

  function observable(targetOrConfig, key, descriptor) {
    function deco(target, key, descriptor, config) {
      var isClassDecorator = key === undefined;
      if (isClassDecorator) {
        target = target.prototype;
        key = typeof config === 'string' ? config : config.name;
      }

      var innerPropertyName = '_' + key;
      var innerPropertyDescriptor = {
        configurable: true,
        enumerable: false,
        writable: true
      };

      var callbackName = config && config.changeHandler || key + 'Changed';

      if (descriptor) {
        if (typeof descriptor.initializer === 'function') {
          innerPropertyDescriptor.value = descriptor.initializer();
        }
      } else {
        descriptor = {};
      }

      if (!('enumerable' in descriptor)) {
        descriptor.enumerable = true;
      }

      delete descriptor.value;
      delete descriptor.writable;
      delete descriptor.initializer;

      Reflect.defineProperty(target, innerPropertyName, innerPropertyDescriptor);

      descriptor.get = function () {
        return this[innerPropertyName];
      };
      descriptor.set = function (newValue) {
        var oldValue = this[innerPropertyName];
        if (newValue === oldValue) {
          return;
        }

        this[innerPropertyName] = newValue;
        Reflect.defineProperty(this, innerPropertyName, { enumerable: false });

        if (this[callbackName]) {
          this[callbackName](newValue, oldValue, key);
        }
      };

      descriptor.get.dependencies = [innerPropertyName];

      if (isClassDecorator) {
        Reflect.defineProperty(target, key, descriptor);
      } else {
        return descriptor;
      }
    }

    if (key === undefined) {
      return function (t, k, d) {
        return deco(t, k, d, targetOrConfig);
      };
    }
    return deco(targetOrConfig, key, descriptor);
  }

  _export('observable', observable);

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
      DOM = _aureliaPal.DOM;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaMetadata) {
      metadata = _aureliaMetadata.metadata;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      map = Object.create(null);

      _export('sourceContext', sourceContext = 'Binding:source');

      _export('sourceContext', sourceContext);

      slotNames = [];
      versionSlotNames = [];

      for (i = 0; i < 100; i++) {
        slotNames.push('_observer' + i);
        versionSlotNames.push('_observerVersion' + i);
      }queue = [];
      queued = {};
      nextId = 0;
      minimumImmediate = 100;
      frameBudget = 15;
      isFlushRequested = false;
      immediate = 0;
      arrayPool1 = [];
      arrayPool2 = [];
      poolUtilization = [];

      _export('ExpressionObserver', ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
        function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {

          this.scope = scope;
          this.expression = expression;
          this.observerLocator = observerLocator;
          this.lookupFunctions = lookupFunctions;
        }

        ExpressionObserver.prototype.getValue = function getValue() {
          return this.expression.evaluate(this.scope, this.lookupFunctions);
        };

        ExpressionObserver.prototype.setValue = function setValue(newValue) {
          this.expression.assign(this.scope, newValue);
        };

        ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
          var _this = this;

          if (!this.hasSubscribers()) {
            this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
            this.expression.connect(this, this.scope);
          }
          this.addSubscriber(context, callable);
          if (arguments.length === 1 && context instanceof Function) {
            return {
              dispose: function dispose() {
                _this.unsubscribe(context, callable);
              }
            };
          }
        };

        ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.unobserve(true);
            this.oldValue = undefined;
          }
        };

        ExpressionObserver.prototype.call = function call() {
          var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
          var oldValue = this.oldValue;
          if (newValue !== oldValue) {
            this.oldValue = newValue;
            this.callSubscribers(newValue, oldValue);
          }
          this._version++;
          this.expression.connect(this, this.scope);
          this.unobserve(false);
        };

        return ExpressionObserver;
      }()) || _class) || _class));

      _export('ExpressionObserver', ExpressionObserver);

      EDIT_LEAVE = 0;
      EDIT_UPDATE = 1;
      EDIT_ADD = 2;
      EDIT_DELETE = 3;
      ArraySplice.prototype = {
        calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var rowCount = oldEnd - oldStart + 1;
          var columnCount = currentEnd - currentStart + 1;
          var distances = new Array(rowCount);
          var north = void 0;
          var west = void 0;

          for (var _i = 0; _i < rowCount; ++_i) {
            distances[_i] = new Array(columnCount);
            distances[_i][0] = _i;
          }

          for (var j = 0; j < columnCount; ++j) {
            distances[0][j] = j;
          }

          for (var _i2 = 1; _i2 < rowCount; ++_i2) {
            for (var _j = 1; _j < columnCount; ++_j) {
              if (this.equals(current[currentStart + _j - 1], old[oldStart + _i2 - 1])) {
                distances[_i2][_j] = distances[_i2 - 1][_j - 1];
              } else {
                north = distances[_i2 - 1][_j] + 1;
                west = distances[_i2][_j - 1] + 1;
                distances[_i2][_j] = north < west ? north : west;
              }
            }
          }

          return distances;
        },

        spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
          var i = distances.length - 1;
          var j = distances[0].length - 1;
          var current = distances[i][j];
          var edits = [];
          while (i > 0 || j > 0) {
            if (i === 0) {
              edits.push(EDIT_ADD);
              j--;
              continue;
            }
            if (j === 0) {
              edits.push(EDIT_DELETE);
              i--;
              continue;
            }
            var northWest = distances[i - 1][j - 1];
            var west = distances[i - 1][j];
            var north = distances[i][j - 1];

            var min = void 0;
            if (west < north) {
              min = west < northWest ? west : northWest;
            } else {
              min = north < northWest ? north : northWest;
            }

            if (min === northWest) {
              if (northWest === current) {
                edits.push(EDIT_LEAVE);
              } else {
                edits.push(EDIT_UPDATE);
                current = northWest;
              }
              i--;
              j--;
            } else if (min === west) {
              edits.push(EDIT_DELETE);
              i--;
              current = west;
            } else {
              edits.push(EDIT_ADD);
              j--;
              current = north;
            }
          }

          edits.reverse();
          return edits;
        },

        calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var prefixCount = 0;
          var suffixCount = 0;

          var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
          if (currentStart === 0 && oldStart === 0) {
            prefixCount = this.sharedPrefix(current, old, minLength);
          }

          if (currentEnd === current.length && oldEnd === old.length) {
            suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
          }

          currentStart += prefixCount;
          oldStart += prefixCount;
          currentEnd -= suffixCount;
          oldEnd -= suffixCount;

          if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
            return [];
          }

          if (currentStart === currentEnd) {
            var _splice = newSplice(currentStart, [], 0);
            while (oldStart < oldEnd) {
              _splice.removed.push(old[oldStart++]);
            }

            return [_splice];
          } else if (oldStart === oldEnd) {
            return [newSplice(currentStart, [], currentEnd - currentStart)];
          }

          var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

          var splice = undefined;
          var splices = [];
          var index = currentStart;
          var oldIndex = oldStart;
          for (var _i3 = 0; _i3 < ops.length; ++_i3) {
            switch (ops[_i3]) {
              case EDIT_LEAVE:
                if (splice) {
                  splices.push(splice);
                  splice = undefined;
                }

                index++;
                oldIndex++;
                break;
              case EDIT_UPDATE:
                if (!splice) {
                  splice = newSplice(index, [], 0);
                }

                splice.addedCount++;
                index++;

                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
              case EDIT_ADD:
                if (!splice) {
                  splice = newSplice(index, [], 0);
                }

                splice.addedCount++;
                index++;
                break;
              case EDIT_DELETE:
                if (!splice) {
                  splice = newSplice(index, [], 0);
                }

                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            }
          }

          if (splice) {
            splices.push(splice);
          }
          return splices;
        },

        sharedPrefix: function sharedPrefix(current, old, searchLength) {
          for (var _i4 = 0; _i4 < searchLength; ++_i4) {
            if (!this.equals(current[_i4], old[_i4])) {
              return _i4;
            }
          }

          return searchLength;
        },

        sharedSuffix: function sharedSuffix(current, old, searchLength) {
          var index1 = current.length;
          var index2 = old.length;
          var count = 0;
          while (count < searchLength && this.equals(current[--index1], old[--index2])) {
            count++;
          }

          return count;
        },

        calculateSplices: function calculateSplices(current, previous) {
          return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
        },

        equals: function equals(currentValue, previousValue) {
          return currentValue === previousValue;
        }
      };

      arraySplice = new ArraySplice();

      _export('ModifyCollectionObserver', ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
        function ModifyCollectionObserver(taskQueue, collection) {

          this.taskQueue = taskQueue;
          this.queued = false;
          this.changeRecords = null;
          this.oldCollection = null;
          this.collection = collection;
          this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
        }

        ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
          this.addSubscriber(context, callable);
        };

        ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          this.removeSubscriber(context, callable);
        };

        ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
          if (!this.hasSubscribers() && !this.lengthObserver) {
            return;
          }

          if (changeRecord.type === 'splice') {
            var index = changeRecord.index;
            var arrayLength = changeRecord.object.length;
            if (index > arrayLength) {
              index = arrayLength - changeRecord.addedCount;
            } else if (index < 0) {
              index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
            }
            if (index < 0) {
              index = 0;
            }
            changeRecord.index = index;
          }

          if (this.changeRecords === null) {
            this.changeRecords = [changeRecord];
          } else {
            this.changeRecords.push(changeRecord);
          }

          if (!this.queued) {
            this.queued = true;
            this.taskQueue.queueMicroTask(this);
          }
        };

        ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
          if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
            this.call();
          }
        };

        ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
          this.oldCollection = oldCollection;

          if (this.hasSubscribers() && !this.queued) {
            this.queued = true;
            this.taskQueue.queueMicroTask(this);
          }
        };

        ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
          return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
        };

        ModifyCollectionObserver.prototype.call = function call() {
          var changeRecords = this.changeRecords;
          var oldCollection = this.oldCollection;
          var records = void 0;

          this.queued = false;
          this.changeRecords = [];
          this.oldCollection = null;

          if (this.hasSubscribers()) {
            if (oldCollection) {
              if (this.collection instanceof Map || this.collection instanceof Set) {
                records = getChangeRecords(oldCollection);
              } else {
                records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
              }
            } else {
              if (this.collection instanceof Map || this.collection instanceof Set) {
                records = changeRecords;
              } else {
                records = projectArraySplices(this.collection, changeRecords);
              }
            }

            this.callSubscribers(records);
          }

          if (this.lengthObserver) {
            this.lengthObserver.call(this.collection[this.lengthPropertyName]);
          }
        };

        return ModifyCollectionObserver;
      }()) || _class2));

      _export('ModifyCollectionObserver', ModifyCollectionObserver);

      _export('CollectionLengthObserver', CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
        function CollectionLengthObserver(collection) {

          this.collection = collection;
          this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
          this.currentValue = collection[this.lengthPropertyName];
        }

        CollectionLengthObserver.prototype.getValue = function getValue() {
          return this.collection[this.lengthPropertyName];
        };

        CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
          this.collection[this.lengthPropertyName] = newValue;
        };

        CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
          this.addSubscriber(context, callable);
        };

        CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          this.removeSubscriber(context, callable);
        };

        CollectionLengthObserver.prototype.call = function call(newValue) {
          var oldValue = this.currentValue;
          this.callSubscribers(newValue, oldValue);
          this.currentValue = newValue;
        };

        return CollectionLengthObserver;
      }()) || _class3));

      _export('CollectionLengthObserver', CollectionLengthObserver);

      pop = Array.prototype.pop;
      push = Array.prototype.push;
      reverse = Array.prototype.reverse;
      shift = Array.prototype.shift;
      sort = Array.prototype.sort;
      splice = Array.prototype.splice;
      unshift = Array.prototype.unshift;

      Array.prototype.pop = function () {
        var notEmpty = this.length > 0;
        var methodCallResult = pop.apply(this, arguments);
        if (notEmpty && this.__array_observer__ !== undefined) {
          this.__array_observer__.addChangeRecord({
            type: 'delete',
            object: this,
            name: this.length,
            oldValue: methodCallResult
          });
        }
        return methodCallResult;
      };

      Array.prototype.push = function () {
        var methodCallResult = push.apply(this, arguments);
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.addChangeRecord({
            type: 'splice',
            object: this,
            index: this.length - arguments.length,
            removed: [],
            addedCount: arguments.length
          });
        }
        return methodCallResult;
      };

      Array.prototype.reverse = function () {
        var oldArray = void 0;
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.flushChangeRecords();
          oldArray = this.slice();
        }
        var methodCallResult = reverse.apply(this, arguments);
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.reset(oldArray);
        }
        return methodCallResult;
      };

      Array.prototype.shift = function () {
        var notEmpty = this.length > 0;
        var methodCallResult = shift.apply(this, arguments);
        if (notEmpty && this.__array_observer__ !== undefined) {
          this.__array_observer__.addChangeRecord({
            type: 'delete',
            object: this,
            name: 0,
            oldValue: methodCallResult
          });
        }
        return methodCallResult;
      };

      Array.prototype.sort = function () {
        var oldArray = void 0;
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.flushChangeRecords();
          oldArray = this.slice();
        }
        var methodCallResult = sort.apply(this, arguments);
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.reset(oldArray);
        }
        return methodCallResult;
      };

      Array.prototype.splice = function () {
        var methodCallResult = splice.apply(this, arguments);
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.addChangeRecord({
            type: 'splice',
            object: this,
            index: +arguments[0],
            removed: methodCallResult,
            addedCount: arguments.length > 2 ? arguments.length - 2 : 0
          });
        }
        return methodCallResult;
      };

      Array.prototype.unshift = function () {
        var methodCallResult = unshift.apply(this, arguments);
        if (this.__array_observer__ !== undefined) {
          this.__array_observer__.addChangeRecord({
            type: 'splice',
            object: this,
            index: 0,
            removed: [],
            addedCount: arguments.length
          });
        }
        return methodCallResult;
      };

      _export('getArrayObserver', _getArrayObserver);

      ModifyArrayObserver = function (_ModifyCollectionObse) {
        _inherits(ModifyArrayObserver, _ModifyCollectionObse);

        function ModifyArrayObserver(taskQueue, array) {

          return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
        }

        ModifyArrayObserver.for = function _for(taskQueue, array) {
          if (!('__array_observer__' in array)) {
            Reflect.defineProperty(array, '__array_observer__', {
              value: ModifyArrayObserver.create(taskQueue, array),
              enumerable: false, configurable: false
            });
          }
          return array.__array_observer__;
        };

        ModifyArrayObserver.create = function create(taskQueue, array) {
          return new ModifyArrayObserver(taskQueue, array);
        };

        return ModifyArrayObserver;
      }(ModifyCollectionObserver);

      _export('Expression', Expression = function () {
        function Expression() {

          this.isChain = false;
          this.isAssignable = false;
        }

        Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
          throw new Error('Binding expression "' + this + '" cannot be evaluated.');
        };

        Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
          throw new Error('Binding expression "' + this + '" cannot be assigned to.');
        };

        Expression.prototype.toString = function toString() {
          return typeof FEATURE_NO_UNPARSER === 'undefined' ? _Unparser.unparse(this) : Function.prototype.toString.call(this);
        };

        return Expression;
      }());

      _export('Expression', Expression);

      _export('Chain', Chain = function (_Expression) {
        _inherits(Chain, _Expression);

        function Chain(expressions) {

          var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

          _this3.expressions = expressions;
          _this3.isChain = true;
          return _this3;
        }

        Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var result = void 0;
          var expressions = this.expressions;
          var last = void 0;

          for (var _i7 = 0, length = expressions.length; _i7 < length; ++_i7) {
            last = expressions[_i7].evaluate(scope, lookupFunctions);

            if (last !== null) {
              result = last;
            }
          }

          return result;
        };

        Chain.prototype.accept = function accept(visitor) {
          return visitor.visitChain(this);
        };

        return Chain;
      }(Expression));

      _export('Chain', Chain);

      _export('BindingBehavior', BindingBehavior = function (_Expression2) {
        _inherits(BindingBehavior, _Expression2);

        function BindingBehavior(expression, name, args) {

          var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

          _this4.expression = expression;
          _this4.name = name;
          _this4.args = args;
          return _this4;
        }

        BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return this.expression.evaluate(scope, lookupFunctions);
        };

        BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
          return this.expression.assign(scope, value, lookupFunctions);
        };

        BindingBehavior.prototype.accept = function accept(visitor) {
          return visitor.visitBindingBehavior(this);
        };

        BindingBehavior.prototype.connect = function connect(binding, scope) {
          this.expression.connect(binding, scope);
        };

        BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
          if (this.expression.expression && this.expression.bind) {
            this.expression.bind(binding, scope, lookupFunctions);
          }
          var behavior = lookupFunctions.bindingBehaviors(this.name);
          if (!behavior) {
            throw new Error('No BindingBehavior named "' + this.name + '" was found!');
          }
          var behaviorKey = 'behavior-' + this.name;
          if (binding[behaviorKey]) {
            throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
          }
          binding[behaviorKey] = behavior;
          behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
        };

        BindingBehavior.prototype.unbind = function unbind(binding, scope) {
          var behaviorKey = 'behavior-' + this.name;
          binding[behaviorKey].unbind(binding, scope);
          binding[behaviorKey] = null;
          if (this.expression.expression && this.expression.unbind) {
            this.expression.unbind(binding, scope);
          }
        };

        return BindingBehavior;
      }(Expression));

      _export('BindingBehavior', BindingBehavior);

      _export('ValueConverter', ValueConverter = function (_Expression3) {
        _inherits(ValueConverter, _Expression3);

        function ValueConverter(expression, name, args, allArgs) {

          var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

          _this5.expression = expression;
          _this5.name = name;
          _this5.args = args;
          _this5.allArgs = allArgs;
          return _this5;
        }

        ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var converter = lookupFunctions.valueConverters(this.name);
          if (!converter) {
            throw new Error('No ValueConverter named "' + this.name + '" was found!');
          }

          if ('toView' in converter) {
            return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
          }

          return this.allArgs[0].evaluate(scope, lookupFunctions);
        };

        ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
          var converter = lookupFunctions.valueConverters(this.name);
          if (!converter) {
            throw new Error('No ValueConverter named "' + this.name + '" was found!');
          }

          if ('fromView' in converter) {
            value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
          }

          return this.allArgs[0].assign(scope, value, lookupFunctions);
        };

        ValueConverter.prototype.accept = function accept(visitor) {
          return visitor.visitValueConverter(this);
        };

        ValueConverter.prototype.connect = function connect(binding, scope) {
          var expressions = this.allArgs;
          var i = expressions.length;
          while (i--) {
            expressions[i].connect(binding, scope);
          }
        };

        return ValueConverter;
      }(Expression));

      _export('ValueConverter', ValueConverter);

      _export('Assign', Assign = function (_Expression4) {
        _inherits(Assign, _Expression4);

        function Assign(target, value) {

          var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

          _this6.target = target;
          _this6.value = value;
          _this6.isAssignable = true;
          return _this6;
        }

        Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
        };

        Assign.prototype.accept = function accept(vistor) {
          vistor.visitAssign(this);
        };

        Assign.prototype.connect = function connect(binding, scope) {};

        Assign.prototype.assign = function assign(scope, value) {
          this.value.assign(scope, value);
          this.target.assign(scope, value);
        };

        return Assign;
      }(Expression));

      _export('Assign', Assign);

      _export('Conditional', Conditional = function (_Expression5) {
        _inherits(Conditional, _Expression5);

        function Conditional(condition, yes, no) {

          var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

          _this7.condition = condition;
          _this7.yes = yes;
          _this7.no = no;
          return _this7;
        }

        Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return !!this.condition.evaluate(scope, lookupFunctions) ? this.yes.evaluate(scope, lookupFunctions) : this.no.evaluate(scope, lookupFunctions);
        };

        Conditional.prototype.accept = function accept(visitor) {
          return visitor.visitConditional(this);
        };

        Conditional.prototype.connect = function connect(binding, scope) {
          this.condition.connect(binding, scope);
          if (this.condition.evaluate(scope)) {
            this.yes.connect(binding, scope);
          } else {
            this.no.connect(binding, scope);
          }
        };

        return Conditional;
      }(Expression));

      _export('Conditional', Conditional);

      _export('AccessThis', AccessThis = function (_Expression6) {
        _inherits(AccessThis, _Expression6);

        function AccessThis(ancestor) {

          var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

          _this8.ancestor = ancestor;
          return _this8;
        }

        AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var oc = scope.overrideContext;
          var i = this.ancestor;
          while (i-- && oc) {
            oc = oc.parentOverrideContext;
          }
          return i < 1 && oc ? oc.bindingContext : undefined;
        };

        AccessThis.prototype.accept = function accept(visitor) {
          return visitor.visitAccessThis(this);
        };

        AccessThis.prototype.connect = function connect(binding, scope) {};

        return AccessThis;
      }(Expression));

      _export('AccessThis', AccessThis);

      _export('AccessScope', AccessScope = function (_Expression7) {
        _inherits(AccessScope, _Expression7);

        function AccessScope(name, ancestor) {

          var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

          _this9.name = name;
          _this9.ancestor = ancestor;
          _this9.isAssignable = true;
          return _this9;
        }

        AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var context = getContextFor(this.name, scope, this.ancestor);
          return context[this.name];
        };

        AccessScope.prototype.assign = function assign(scope, value) {
          var context = getContextFor(this.name, scope, this.ancestor);
          return context ? context[this.name] = value : undefined;
        };

        AccessScope.prototype.accept = function accept(visitor) {
          return visitor.visitAccessScope(this);
        };

        AccessScope.prototype.connect = function connect(binding, scope) {
          var context = getContextFor(this.name, scope, this.ancestor);
          binding.observeProperty(context, this.name);
        };

        return AccessScope;
      }(Expression));

      _export('AccessScope', AccessScope);

      _export('AccessMember', AccessMember = function (_Expression8) {
        _inherits(AccessMember, _Expression8);

        function AccessMember(object, name) {

          var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

          _this10.object = object;
          _this10.name = name;
          _this10.isAssignable = true;
          return _this10;
        }

        AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var instance = this.object.evaluate(scope, lookupFunctions);
          return instance === null || instance === undefined ? instance : instance[this.name];
        };

        AccessMember.prototype.assign = function assign(scope, value) {
          var instance = this.object.evaluate(scope);

          if (instance === null || instance === undefined) {
            instance = {};
            this.object.assign(scope, instance);
          }

          instance[this.name] = value;
          return value;
        };

        AccessMember.prototype.accept = function accept(visitor) {
          return visitor.visitAccessMember(this);
        };

        AccessMember.prototype.connect = function connect(binding, scope) {
          this.object.connect(binding, scope);
          var obj = this.object.evaluate(scope);
          if (obj) {
            binding.observeProperty(obj, this.name);
          }
        };

        return AccessMember;
      }(Expression));

      _export('AccessMember', AccessMember);

      _export('AccessKeyed', AccessKeyed = function (_Expression9) {
        _inherits(AccessKeyed, _Expression9);

        function AccessKeyed(object, key) {

          var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

          _this11.object = object;
          _this11.key = key;
          _this11.isAssignable = true;
          return _this11;
        }

        AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var instance = this.object.evaluate(scope, lookupFunctions);
          var lookup = this.key.evaluate(scope, lookupFunctions);
          return getKeyed(instance, lookup);
        };

        AccessKeyed.prototype.assign = function assign(scope, value) {
          var instance = this.object.evaluate(scope);
          var lookup = this.key.evaluate(scope);
          return setKeyed(instance, lookup, value);
        };

        AccessKeyed.prototype.accept = function accept(visitor) {
          return visitor.visitAccessKeyed(this);
        };

        AccessKeyed.prototype.connect = function connect(binding, scope) {
          this.object.connect(binding, scope);
          var obj = this.object.evaluate(scope);
          if (obj instanceof Object) {
            this.key.connect(binding, scope);
            var key = this.key.evaluate(scope);

            if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
              binding.observeProperty(obj, key);
            }
          }
        };

        return AccessKeyed;
      }(Expression));

      _export('AccessKeyed', AccessKeyed);

      _export('CallScope', CallScope = function (_Expression10) {
        _inherits(CallScope, _Expression10);

        function CallScope(name, args, ancestor) {

          var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

          _this12.name = name;
          _this12.args = args;
          _this12.ancestor = ancestor;
          return _this12;
        }

        CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
          var args = evalList(scope, this.args, lookupFunctions);
          var context = getContextFor(this.name, scope, this.ancestor);
          var func = getFunction(context, this.name, mustEvaluate);
          if (func) {
            return func.apply(context, args);
          }
          return undefined;
        };

        CallScope.prototype.accept = function accept(visitor) {
          return visitor.visitCallScope(this);
        };

        CallScope.prototype.connect = function connect(binding, scope) {
          var args = this.args;
          var i = args.length;
          while (i--) {
            args[i].connect(binding, scope);
          }
        };

        return CallScope;
      }(Expression));

      _export('CallScope', CallScope);

      _export('CallMember', CallMember = function (_Expression11) {
        _inherits(CallMember, _Expression11);

        function CallMember(object, name, args) {

          var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

          _this13.object = object;
          _this13.name = name;
          _this13.args = args;
          return _this13;
        }

        CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
          var instance = this.object.evaluate(scope, lookupFunctions);
          var args = evalList(scope, this.args, lookupFunctions);
          var func = getFunction(instance, this.name, mustEvaluate);
          if (func) {
            return func.apply(instance, args);
          }
          return undefined;
        };

        CallMember.prototype.accept = function accept(visitor) {
          return visitor.visitCallMember(this);
        };

        CallMember.prototype.connect = function connect(binding, scope) {
          this.object.connect(binding, scope);
          var obj = this.object.evaluate(scope);
          if (getFunction(obj, this.name, false)) {
            var args = this.args;
            var _i8 = args.length;
            while (_i8--) {
              args[_i8].connect(binding, scope);
            }
          }
        };

        return CallMember;
      }(Expression));

      _export('CallMember', CallMember);

      _export('CallFunction', CallFunction = function (_Expression12) {
        _inherits(CallFunction, _Expression12);

        function CallFunction(func, args) {

          var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

          _this14.func = func;
          _this14.args = args;
          return _this14;
        }

        CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
          var func = this.func.evaluate(scope, lookupFunctions);
          if (typeof func === 'function') {
            return func.apply(null, evalList(scope, this.args, lookupFunctions));
          }
          if (!mustEvaluate && (func === null || func === undefined)) {
            return undefined;
          }
          throw new Error(this.func + ' is not a function');
        };

        CallFunction.prototype.accept = function accept(visitor) {
          return visitor.visitCallFunction(this);
        };

        CallFunction.prototype.connect = function connect(binding, scope) {
          this.func.connect(binding, scope);
          var func = this.func.evaluate(scope);
          if (typeof func === 'function') {
            var args = this.args;
            var _i9 = args.length;
            while (_i9--) {
              args[_i9].connect(binding, scope);
            }
          }
        };

        return CallFunction;
      }(Expression));

      _export('CallFunction', CallFunction);

      _export('Binary', Binary = function (_Expression13) {
        _inherits(Binary, _Expression13);

        function Binary(operation, left, right) {

          var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

          _this15.operation = operation;
          _this15.left = left;
          _this15.right = right;
          return _this15;
        }

        Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var left = this.left.evaluate(scope, lookupFunctions);

          switch (this.operation) {
            case '&&':
              return left && this.right.evaluate(scope, lookupFunctions);
            case '||':
              return left || this.right.evaluate(scope, lookupFunctions);
          }

          var right = this.right.evaluate(scope, lookupFunctions);

          switch (this.operation) {
            case '==':
              return left == right;
            case '===':
              return left === right;
            case '!=':
              return left != right;
            case '!==':
              return left !== right;
          }

          if (left === null || right === null || left === undefined || right === undefined) {
            switch (this.operation) {
              case '+':
                if (left !== null && left !== undefined) return left;
                if (right !== null && right !== undefined) return right;
                return 0;
              case '-':
                if (left !== null && left !== undefined) return left;
                if (right !== null && right !== undefined) return 0 - right;
                return 0;
            }

            return null;
          }

          switch (this.operation) {
            case '+':
              return autoConvertAdd(left, right);
            case '-':
              return left - right;
            case '*':
              return left * right;
            case '/':
              return left / right;
            case '%':
              return left % right;
            case '<':
              return left < right;
            case '>':
              return left > right;
            case '<=':
              return left <= right;
            case '>=':
              return left >= right;
            case '^':
              return left ^ right;
          }

          throw new Error('Internal error [' + this.operation + '] not handled');
        };

        Binary.prototype.accept = function accept(visitor) {
          return visitor.visitBinary(this);
        };

        Binary.prototype.connect = function connect(binding, scope) {
          this.left.connect(binding, scope);
          var left = this.left.evaluate(scope);
          if (this.operation === '&&' && !left || this.operation === '||' && left) {
            return;
          }
          this.right.connect(binding, scope);
        };

        return Binary;
      }(Expression));

      _export('Binary', Binary);

      _export('PrefixNot', PrefixNot = function (_Expression14) {
        _inherits(PrefixNot, _Expression14);

        function PrefixNot(operation, expression) {

          var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

          _this16.operation = operation;
          _this16.expression = expression;
          return _this16;
        }

        PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return !this.expression.evaluate(scope, lookupFunctions);
        };

        PrefixNot.prototype.accept = function accept(visitor) {
          return visitor.visitPrefix(this);
        };

        PrefixNot.prototype.connect = function connect(binding, scope) {
          this.expression.connect(binding, scope);
        };

        return PrefixNot;
      }(Expression));

      _export('PrefixNot', PrefixNot);

      _export('LiteralPrimitive', LiteralPrimitive = function (_Expression15) {
        _inherits(LiteralPrimitive, _Expression15);

        function LiteralPrimitive(value) {

          var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

          _this17.value = value;
          return _this17;
        }

        LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return this.value;
        };

        LiteralPrimitive.prototype.accept = function accept(visitor) {
          return visitor.visitLiteralPrimitive(this);
        };

        LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

        return LiteralPrimitive;
      }(Expression));

      _export('LiteralPrimitive', LiteralPrimitive);

      _export('LiteralString', LiteralString = function (_Expression16) {
        _inherits(LiteralString, _Expression16);

        function LiteralString(value) {

          var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

          _this18.value = value;
          return _this18;
        }

        LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return this.value;
        };

        LiteralString.prototype.accept = function accept(visitor) {
          return visitor.visitLiteralString(this);
        };

        LiteralString.prototype.connect = function connect(binding, scope) {};

        return LiteralString;
      }(Expression));

      _export('LiteralString', LiteralString);

      _export('LiteralArray', LiteralArray = function (_Expression17) {
        _inherits(LiteralArray, _Expression17);

        function LiteralArray(elements) {

          var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

          _this19.elements = elements;
          return _this19;
        }

        LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var elements = this.elements;
          var result = [];

          for (var _i10 = 0, length = elements.length; _i10 < length; ++_i10) {
            result[_i10] = elements[_i10].evaluate(scope, lookupFunctions);
          }

          return result;
        };

        LiteralArray.prototype.accept = function accept(visitor) {
          return visitor.visitLiteralArray(this);
        };

        LiteralArray.prototype.connect = function connect(binding, scope) {
          var length = this.elements.length;
          for (var _i11 = 0; _i11 < length; _i11++) {
            this.elements[_i11].connect(binding, scope);
          }
        };

        return LiteralArray;
      }(Expression));

      _export('LiteralArray', LiteralArray);

      _export('LiteralObject', LiteralObject = function (_Expression18) {
        _inherits(LiteralObject, _Expression18);

        function LiteralObject(keys, values) {

          var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

          _this20.keys = keys;
          _this20.values = values;
          return _this20;
        }

        LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          var instance = {};
          var keys = this.keys;
          var values = this.values;

          for (var _i12 = 0, length = keys.length; _i12 < length; ++_i12) {
            instance[keys[_i12]] = values[_i12].evaluate(scope, lookupFunctions);
          }

          return instance;
        };

        LiteralObject.prototype.accept = function accept(visitor) {
          return visitor.visitLiteralObject(this);
        };

        LiteralObject.prototype.connect = function connect(binding, scope) {
          var length = this.keys.length;
          for (var _i13 = 0; _i13 < length; _i13++) {
            this.values[_i13].connect(binding, scope);
          }
        };

        return LiteralObject;
      }(Expression));

      _export('LiteralObject', LiteralObject);

      _export('Unparser', _Unparser = null);

      _export('Unparser', _Unparser);

      if (typeof FEATURE_NO_UNPARSER === 'undefined') {
        _export('Unparser', _Unparser = function () {
          function Unparser(buffer) {

            this.buffer = buffer;
          }

          Unparser.unparse = function unparse(expression) {
            var buffer = [];
            var visitor = new _Unparser(buffer);

            expression.accept(visitor);

            return buffer.join('');
          };

          Unparser.prototype.write = function write(text) {
            this.buffer.push(text);
          };

          Unparser.prototype.writeArgs = function writeArgs(args) {
            this.write('(');

            for (var _i15 = 0, length = args.length; _i15 < length; ++_i15) {
              if (_i15 !== 0) {
                this.write(',');
              }

              args[_i15].accept(this);
            }

            this.write(')');
          };

          Unparser.prototype.visitChain = function visitChain(chain) {
            var expressions = chain.expressions;

            for (var _i16 = 0, length = expression.length; _i16 < length; ++_i16) {
              if (_i16 !== 0) {
                this.write(';');
              }

              expressions[_i16].accept(this);
            }
          };

          Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
            var args = behavior.args;

            behavior.expression.accept(this);
            this.write('&' + behavior.name);

            for (var _i17 = 0, length = args.length; _i17 < length; ++_i17) {
              this.write(':');
              args[_i17].accept(this);
            }
          };

          Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
            var args = converter.args;

            converter.expression.accept(this);
            this.write('|' + converter.name);

            for (var _i18 = 0, length = args.length; _i18 < length; ++_i18) {
              this.write(':');
              args[_i18].accept(this);
            }
          };

          Unparser.prototype.visitAssign = function visitAssign(assign) {
            assign.target.accept(this);
            this.write('=');
            assign.value.accept(this);
          };

          Unparser.prototype.visitConditional = function visitConditional(conditional) {
            conditional.condition.accept(this);
            this.write('?');
            conditional.yes.accept(this);
            this.write(':');
            conditional.no.accept(this);
          };

          Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
            if (access.ancestor === 0) {
              this.write('$this');
              return;
            }
            this.write('$parent');
            var i = access.ancestor - 1;
            while (i--) {
              this.write('.$parent');
            }
          };

          Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
            var i = access.ancestor;
            while (i--) {
              this.write('$parent.');
            }
            this.write(access.name);
          };

          Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
            access.object.accept(this);
            this.write('.' + access.name);
          };

          Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
            access.object.accept(this);
            this.write('[');
            access.key.accept(this);
            this.write(']');
          };

          Unparser.prototype.visitCallScope = function visitCallScope(call) {
            var i = call.ancestor;
            while (i--) {
              this.write('$parent.');
            }
            this.write(call.name);
            this.writeArgs(call.args);
          };

          Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
            call.func.accept(this);
            this.writeArgs(call.args);
          };

          Unparser.prototype.visitCallMember = function visitCallMember(call) {
            call.object.accept(this);
            this.write('.' + call.name);
            this.writeArgs(call.args);
          };

          Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
            this.write('(' + prefix.operation);
            prefix.expression.accept(this);
            this.write(')');
          };

          Unparser.prototype.visitBinary = function visitBinary(binary) {
            binary.left.accept(this);
            this.write(binary.operation);
            binary.right.accept(this);
          };

          Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
            this.write('' + literal.value);
          };

          Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
            var elements = literal.elements;

            this.write('[');

            for (var _i19 = 0, length = elements.length; _i19 < length; ++_i19) {
              if (_i19 !== 0) {
                this.write(',');
              }

              elements[_i19].accept(this);
            }

            this.write(']');
          };

          Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
            var keys = literal.keys;
            var values = literal.values;

            this.write('{');

            for (var _i20 = 0, length = keys.length; _i20 < length; ++_i20) {
              if (_i20 !== 0) {
                this.write(',');
              }

              this.write('\'' + keys[_i20] + '\':');
              values[_i20].accept(this);
            }

            this.write('}');
          };

          Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
            var escaped = literal.value.replace(/'/g, "\'");
            this.write('\'' + escaped + '\'');
          };

          return Unparser;
        }());
      }

      _export('ExpressionCloner', ExpressionCloner = function () {
        function ExpressionCloner() {}

        ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
          var clonedArray = [];
          var i = array.length;
          while (i--) {
            clonedArray[i] = array[i].accept(this);
          }
          return clonedArray;
        };

        ExpressionCloner.prototype.visitChain = function visitChain(chain) {
          return new Chain(this.cloneExpressionArray(chain.expressions));
        };

        ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
          return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
        };

        ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
          return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
        };

        ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
          return new Assign(assign.target.accept(this), assign.value.accept(this));
        };

        ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
          return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
        };

        ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
          return new AccessThis(access.ancestor);
        };

        ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
          return new AccessScope(access.name, access.ancestor);
        };

        ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
          return new AccessMember(access.object.accept(this), access.name);
        };

        ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
          return new AccessKeyed(access.object.accept(this), access.key.accept(this));
        };

        ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
          return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
        };

        ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
          return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
        };

        ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
          return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
        };

        ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
          return new PrefixNot(prefix.operation, prefix.expression.accept(this));
        };

        ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
          return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
        };

        ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
          return new LiteralPrimitive(literal);
        };

        ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
          return new LiteralArray(this.cloneExpressionArray(literal.elements));
        };

        ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
          return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
        };

        ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
          return new LiteralString(literal.value);
        };

        return ExpressionCloner;
      }());

      _export('ExpressionCloner', ExpressionCloner);

      _export('bindingMode', bindingMode = {
        oneTime: 0,
        oneWay: 1,
        twoWay: 2
      });

      _export('bindingMode', bindingMode);

      _export('Token', Token = function () {
        function Token(index, text) {

          this.index = index;
          this.text = text;
        }

        Token.prototype.withOp = function withOp(op) {
          this.opKey = op;
          return this;
        };

        Token.prototype.withGetterSetter = function withGetterSetter(key) {
          this.key = key;
          return this;
        };

        Token.prototype.withValue = function withValue(value) {
          this.value = value;
          return this;
        };

        Token.prototype.toString = function toString() {
          return 'Token(' + this.text + ')';
        };

        return Token;
      }());

      _export('Token', Token);

      _export('Lexer', Lexer = function () {
        function Lexer() {}

        Lexer.prototype.lex = function lex(text) {
          var scanner = new Scanner(text);
          var tokens = [];
          var token = scanner.scanToken();

          while (token) {
            tokens.push(token);
            token = scanner.scanToken();
          }

          return tokens;
        };

        return Lexer;
      }());

      _export('Lexer', Lexer);

      _export('Scanner', Scanner = function () {
        function Scanner(input) {

          this.input = input;
          this.length = input.length;
          this.peek = 0;
          this.index = -1;

          this.advance();
        }

        Scanner.prototype.scanToken = function scanToken() {
          while (this.peek <= $SPACE) {
            if (++this.index >= this.length) {
              this.peek = $EOF;
              return null;
            }

            this.peek = this.input.charCodeAt(this.index);
          }

          if (isIdentifierStart(this.peek)) {
            return this.scanIdentifier();
          }

          if (isDigit(this.peek)) {
            return this.scanNumber(this.index);
          }

          var start = this.index;

          switch (this.peek) {
            case $PERIOD:
              this.advance();
              return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
            case $LPAREN:
            case $RPAREN:
            case $LBRACE:
            case $RBRACE:
            case $LBRACKET:
            case $RBRACKET:
            case $COMMA:
            case $COLON:
            case $SEMICOLON:
              return this.scanCharacter(start, String.fromCharCode(this.peek));
            case $SQ:
            case $DQ:
              return this.scanString();
            case $PLUS:
            case $MINUS:
            case $STAR:
            case $SLASH:
            case $PERCENT:
            case $CARET:
            case $QUESTION:
              return this.scanOperator(start, String.fromCharCode(this.peek));
            case $LT:
            case $GT:
            case $BANG:
            case $EQ:
              return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
            case $AMPERSAND:
              return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
            case $BAR:
              return this.scanComplexOperator(start, $BAR, '|', '|');
            case $NBSP:
              while (isWhitespace(this.peek)) {
                this.advance();
              }

              return this.scanToken();
          }

          var character = String.fromCharCode(this.peek);
          this.error('Unexpected character [' + character + ']');
          return null;
        };

        Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
          assert(this.peek === text.charCodeAt(0));
          this.advance();
          return new Token(start, text);
        };

        Scanner.prototype.scanOperator = function scanOperator(start, text) {
          assert(this.peek === text.charCodeAt(0));
          assert(OPERATORS.indexOf(text) !== -1);
          this.advance();
          return new Token(start, text).withOp(text);
        };

        Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
          assert(this.peek === one.charCodeAt(0));
          this.advance();

          var text = one;

          if (this.peek === code) {
            this.advance();
            text += two;
          }

          if (this.peek === code) {
            this.advance();
            text += two;
          }

          assert(OPERATORS.indexOf(text) !== -1);

          return new Token(start, text).withOp(text);
        };

        Scanner.prototype.scanIdentifier = function scanIdentifier() {
          assert(isIdentifierStart(this.peek));
          var start = this.index;

          this.advance();

          while (isIdentifierPart(this.peek)) {
            this.advance();
          }

          var text = this.input.substring(start, this.index);
          var result = new Token(start, text);

          if (OPERATORS.indexOf(text) !== -1) {
            result.withOp(text);
          } else {
            result.withGetterSetter(text);
          }

          return result;
        };

        Scanner.prototype.scanNumber = function scanNumber(start) {
          assert(isDigit(this.peek));
          var simple = this.index === start;
          this.advance();

          while (true) {
            if (!isDigit(this.peek)) {
              if (this.peek === $PERIOD) {
                simple = false;
              } else if (isExponentStart(this.peek)) {
                this.advance();

                if (isExponentSign(this.peek)) {
                  this.advance();
                }

                if (!isDigit(this.peek)) {
                  this.error('Invalid exponent', -1);
                }

                simple = false;
              } else {
                break;
              }
            }

            this.advance();
          }

          var text = this.input.substring(start, this.index);
          var value = simple ? parseInt(text, 10) : parseFloat(text);
          return new Token(start, text).withValue(value);
        };

        Scanner.prototype.scanString = function scanString() {
          assert(this.peek === $SQ || this.peek === $DQ);

          var start = this.index;
          var quote = this.peek;

          this.advance();

          var buffer = void 0;
          var marker = this.index;

          while (this.peek !== quote) {
            if (this.peek === $BACKSLASH) {
              if (!buffer) {
                buffer = [];
              }

              buffer.push(this.input.substring(marker, this.index));
              this.advance();

              var _unescaped = void 0;

              if (this.peek === $u) {
                var hex = this.input.substring(this.index + 1, this.index + 5);

                if (!/[A-Z0-9]{4}/.test(hex)) {
                  this.error('Invalid unicode escape [\\u' + hex + ']');
                }

                _unescaped = parseInt(hex, 16);

                for (var _i21 = 0; _i21 < 5; ++_i21) {
                  this.advance();
                }
              } else {
                _unescaped = unescape(this.peek);
                this.advance();
              }

              buffer.push(String.fromCharCode(_unescaped));
              marker = this.index;
            } else if (this.peek === $EOF) {
              this.error('Unterminated quote');
            } else {
              this.advance();
            }
          }

          var last = this.input.substring(marker, this.index);
          this.advance();
          var text = this.input.substring(start, this.index);

          var unescaped = last;

          if (buffer !== null && buffer !== undefined) {
            buffer.push(last);
            unescaped = buffer.join('');
          }

          return new Token(start, text).withValue(unescaped);
        };

        Scanner.prototype.advance = function advance() {
          if (++this.index >= this.length) {
            this.peek = $EOF;
          } else {
            this.peek = this.input.charCodeAt(this.index);
          }
        };

        Scanner.prototype.error = function error(message) {
          var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

          var position = this.index + offset;
          throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
        };

        return Scanner;
      }());

      _export('Scanner', Scanner);

      OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];
      $EOF = 0;
      $TAB = 9;
      $LF = 10;
      $VTAB = 11;
      $FF = 12;
      $CR = 13;
      $SPACE = 32;
      $BANG = 33;
      $DQ = 34;
      $$ = 36;
      $PERCENT = 37;
      $AMPERSAND = 38;
      $SQ = 39;
      $LPAREN = 40;
      $RPAREN = 41;
      $STAR = 42;
      $PLUS = 43;
      $COMMA = 44;
      $MINUS = 45;
      $PERIOD = 46;
      $SLASH = 47;
      $COLON = 58;
      $SEMICOLON = 59;
      $LT = 60;
      $EQ = 61;
      $GT = 62;
      $QUESTION = 63;
      $0 = 48;
      $9 = 57;
      $A = 65;
      $E = 69;
      $Z = 90;
      $LBRACKET = 91;
      $BACKSLASH = 92;
      $RBRACKET = 93;
      $CARET = 94;
      $_ = 95;
      $a = 97;
      $e = 101;
      $f = 102;
      $n = 110;
      $r = 114;
      $t = 116;
      $u = 117;
      $v = 118;
      $z = 122;
      $LBRACE = 123;
      $BAR = 124;
      $RBRACE = 125;
      $NBSP = 160;
      EOF = new Token(-1, null);

      _export('Parser', Parser = function () {
        function Parser() {

          this.cache = {};
          this.lexer = new Lexer();
        }

        Parser.prototype.parse = function parse(input) {
          input = input || '';

          return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
        };

        return Parser;
      }());

      _export('Parser', Parser);

      _export('ParserImplementation', ParserImplementation = function () {
        function ParserImplementation(lexer, input) {

          this.index = 0;
          this.input = input;
          this.tokens = lexer.lex(input);
        }

        ParserImplementation.prototype.parseChain = function parseChain() {
          var isChain = false;
          var expressions = [];

          while (this.optional(';')) {
            isChain = true;
          }

          while (this.index < this.tokens.length) {
            if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
              this.error('Unconsumed token ' + this.peek.text);
            }

            var expr = this.parseBindingBehavior();
            expressions.push(expr);

            while (this.optional(';')) {
              isChain = true;
            }

            if (isChain) {
              this.error('Multiple expressions are not allowed.');
            }
          }

          return expressions.length === 1 ? expressions[0] : new Chain(expressions);
        };

        ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
          var result = this.parseValueConverter();

          while (this.optional('&')) {
            var name = this.peek.text;
            var args = [];

            this.advance();

            while (this.optional(':')) {
              args.push(this.parseExpression());
            }

            result = new BindingBehavior(result, name, args);
          }

          return result;
        };

        ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
          var result = this.parseExpression();

          while (this.optional('|')) {
            var name = this.peek.text;
            var args = [];

            this.advance();

            while (this.optional(':')) {
              args.push(this.parseExpression());
            }

            result = new ValueConverter(result, name, args, [result].concat(args));
          }

          return result;
        };

        ParserImplementation.prototype.parseExpression = function parseExpression() {
          var start = this.peek.index;
          var result = this.parseConditional();

          while (this.peek.text === '=') {
            if (!result.isAssignable) {
              var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
              var _expression = this.input.substring(start, end);

              this.error('Expression ' + _expression + ' is not assignable');
            }

            this.expect('=');
            result = new Assign(result, this.parseConditional());
          }

          return result;
        };

        ParserImplementation.prototype.parseConditional = function parseConditional() {
          var start = this.peek.index;
          var result = this.parseLogicalOr();

          if (this.optional('?')) {
            var yes = this.parseExpression();

            if (!this.optional(':')) {
              var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
              var _expression2 = this.input.substring(start, end);

              this.error('Conditional expression ' + _expression2 + ' requires all 3 expressions');
            }

            var no = this.parseExpression();
            result = new Conditional(result, yes, no);
          }

          return result;
        };

        ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
          var result = this.parseLogicalAnd();

          while (this.optional('||')) {
            result = new Binary('||', result, this.parseLogicalAnd());
          }

          return result;
        };

        ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
          var result = this.parseEquality();

          while (this.optional('&&')) {
            result = new Binary('&&', result, this.parseEquality());
          }

          return result;
        };

        ParserImplementation.prototype.parseEquality = function parseEquality() {
          var result = this.parseRelational();

          while (true) {
            if (this.optional('==')) {
              result = new Binary('==', result, this.parseRelational());
            } else if (this.optional('!=')) {
              result = new Binary('!=', result, this.parseRelational());
            } else if (this.optional('===')) {
              result = new Binary('===', result, this.parseRelational());
            } else if (this.optional('!==')) {
              result = new Binary('!==', result, this.parseRelational());
            } else {
              return result;
            }
          }
        };

        ParserImplementation.prototype.parseRelational = function parseRelational() {
          var result = this.parseAdditive();

          while (true) {
            if (this.optional('<')) {
              result = new Binary('<', result, this.parseAdditive());
            } else if (this.optional('>')) {
              result = new Binary('>', result, this.parseAdditive());
            } else if (this.optional('<=')) {
              result = new Binary('<=', result, this.parseAdditive());
            } else if (this.optional('>=')) {
              result = new Binary('>=', result, this.parseAdditive());
            } else {
              return result;
            }
          }
        };

        ParserImplementation.prototype.parseAdditive = function parseAdditive() {
          var result = this.parseMultiplicative();

          while (true) {
            if (this.optional('+')) {
              result = new Binary('+', result, this.parseMultiplicative());
            } else if (this.optional('-')) {
              result = new Binary('-', result, this.parseMultiplicative());
            } else {
              return result;
            }
          }
        };

        ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
          var result = this.parsePrefix();

          while (true) {
            if (this.optional('*')) {
              result = new Binary('*', result, this.parsePrefix());
            } else if (this.optional('%')) {
              result = new Binary('%', result, this.parsePrefix());
            } else if (this.optional('/')) {
              result = new Binary('/', result, this.parsePrefix());
            } else {
              return result;
            }
          }
        };

        ParserImplementation.prototype.parsePrefix = function parsePrefix() {
          if (this.optional('+')) {
            return this.parsePrefix();
          } else if (this.optional('-')) {
            return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
          } else if (this.optional('!')) {
            return new PrefixNot('!', this.parsePrefix());
          }

          return this.parseAccessOrCallMember();
        };

        ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
          var result = this.parsePrimary();

          while (true) {
            if (this.optional('.')) {
              var name = this.peek.text;

              this.advance();

              if (this.optional('(')) {
                var args = this.parseExpressionList(')');
                this.expect(')');
                if (result instanceof AccessThis) {
                  result = new CallScope(name, args, result.ancestor);
                } else {
                  result = new CallMember(result, name, args);
                }
              } else {
                if (result instanceof AccessThis) {
                  result = new AccessScope(name, result.ancestor);
                } else {
                  result = new AccessMember(result, name);
                }
              }
            } else if (this.optional('[')) {
              var key = this.parseExpression();
              this.expect(']');
              result = new AccessKeyed(result, key);
            } else if (this.optional('(')) {
              var _args = this.parseExpressionList(')');
              this.expect(')');
              result = new CallFunction(result, _args);
            } else {
              return result;
            }
          }
        };

        ParserImplementation.prototype.parsePrimary = function parsePrimary() {
          if (this.optional('(')) {
            var result = this.parseExpression();
            this.expect(')');
            return result;
          } else if (this.optional('null')) {
            return new LiteralPrimitive(null);
          } else if (this.optional('undefined')) {
            return new LiteralPrimitive(undefined);
          } else if (this.optional('true')) {
            return new LiteralPrimitive(true);
          } else if (this.optional('false')) {
            return new LiteralPrimitive(false);
          } else if (this.optional('[')) {
            var elements = this.parseExpressionList(']');
            this.expect(']');
            return new LiteralArray(elements);
          } else if (this.peek.text === '{') {
            return this.parseObject();
          } else if (this.peek.key !== null && this.peek.key !== undefined) {
            return this.parseAccessOrCallScope();
          } else if (this.peek.value !== null && this.peek.value !== undefined) {
            var value = this.peek.value;
            this.advance();
            return value instanceof String || typeof value === 'string' ? new LiteralString(value) : new LiteralPrimitive(value);
          } else if (this.index >= this.tokens.length) {
            throw new Error('Unexpected end of expression: ' + this.input);
          } else {
            this.error('Unexpected token ' + this.peek.text);
          }
        };

        ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
          var name = this.peek.key;

          this.advance();

          if (name === '$this') {
            return new AccessThis(0);
          }

          var ancestor = 0;
          while (name === '$parent') {
            ancestor++;
            if (this.optional('.')) {
              name = this.peek.key;
              this.advance();
            } else if (this.peek === EOF || this.peek.text === '(' || this.peek.text === ')' || this.peek.text === '[' || this.peek.text === '}' || this.peek.text === ',') {
              return new AccessThis(ancestor);
            } else {
              this.error('Unexpected token ' + this.peek.text);
            }
          }

          if (this.optional('(')) {
            var args = this.parseExpressionList(')');
            this.expect(')');
            return new CallScope(name, args, ancestor);
          }

          return new AccessScope(name, ancestor);
        };

        ParserImplementation.prototype.parseObject = function parseObject() {
          var keys = [];
          var values = [];

          this.expect('{');

          if (this.peek.text !== '}') {
            do {
              var peek = this.peek;
              var value = peek.value;
              keys.push(typeof value === 'string' ? value : peek.text);

              this.advance();
              if (peek.key && (this.peek.text === ',' || this.peek.text === '}')) {
                --this.index;
                values.push(this.parseAccessOrCallScope());
              } else {
                this.expect(':');
                values.push(this.parseExpression());
              }
            } while (this.optional(','));
          }

          this.expect('}');

          return new LiteralObject(keys, values);
        };

        ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
          var result = [];

          if (this.peek.text !== terminator) {
            do {
              result.push(this.parseExpression());
            } while (this.optional(','));
          }

          return result;
        };

        ParserImplementation.prototype.optional = function optional(text) {
          if (this.peek.text === text) {
            this.advance();
            return true;
          }

          return false;
        };

        ParserImplementation.prototype.expect = function expect(text) {
          if (this.peek.text === text) {
            this.advance();
          } else {
            this.error('Missing expected ' + text);
          }
        };

        ParserImplementation.prototype.advance = function advance() {
          this.index++;
        };

        ParserImplementation.prototype.error = function error(message) {
          var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

          throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
        };

        _createClass(ParserImplementation, [{
          key: 'peek',
          get: function get() {
            return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
          }
        }]);

        return ParserImplementation;
      }());

      _export('ParserImplementation', ParserImplementation);

      mapProto = Map.prototype;

      _export('getMapObserver', _getMapObserver);

      ModifyMapObserver = function (_ModifyCollectionObse2) {
        _inherits(ModifyMapObserver, _ModifyCollectionObse2);

        function ModifyMapObserver(taskQueue, map) {

          return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
        }

        ModifyMapObserver.for = function _for(taskQueue, map) {
          if (!('__map_observer__' in map)) {
            Reflect.defineProperty(map, '__map_observer__', {
              value: ModifyMapObserver.create(taskQueue, map),
              enumerable: false, configurable: false
            });
          }
          return map.__map_observer__;
        };

        ModifyMapObserver.create = function create(taskQueue, map) {
          var observer = new ModifyMapObserver(taskQueue, map);

          var proto = mapProto;
          if (proto.set !== map.set || proto.delete !== map.delete || proto.clear !== map.clear) {
            proto = {
              set: map.set,
              delete: map.delete,
              clear: map.clear
            };
          }

          map.set = function () {
            var hasValue = map.has(arguments[0]);
            var type = hasValue ? 'update' : 'add';
            var oldValue = map.get(arguments[0]);
            var methodCallResult = proto.set.apply(map, arguments);
            if (!hasValue || oldValue !== map.get(arguments[0])) {
              observer.addChangeRecord({
                type: type,
                object: map,
                key: arguments[0],
                oldValue: oldValue
              });
            }
            return methodCallResult;
          };

          map.delete = function () {
            var hasValue = map.has(arguments[0]);
            var oldValue = map.get(arguments[0]);
            var methodCallResult = proto.delete.apply(map, arguments);
            if (hasValue) {
              observer.addChangeRecord({
                type: 'delete',
                object: map,
                key: arguments[0],
                oldValue: oldValue
              });
            }
            return methodCallResult;
          };

          map.clear = function () {
            var methodCallResult = proto.clear.apply(map, arguments);
            observer.addChangeRecord({
              type: 'clear',
              object: map
            });
            return methodCallResult;
          };

          return observer;
        };

        return ModifyMapObserver;
      }(ModifyCollectionObserver);

      CapturedHandlerEntry = function () {
        function CapturedHandlerEntry(eventName) {

          this.eventName = eventName;
          this.count = 0;
        }

        CapturedHandlerEntry.prototype.increment = function increment() {
          this.count++;

          if (this.count === 1) {
            DOM.addEventListener(this.eventName, handleCapturedEvent, true);
          }
        };

        CapturedHandlerEntry.prototype.decrement = function decrement() {
          this.count--;

          if (this.count === 0) {
            DOM.removeEventListener(this.eventName, handleCapturedEvent, true);
          }
        };

        return CapturedHandlerEntry;
      }();

      DelegateHandlerEntry = function () {
        function DelegateHandlerEntry(eventName) {

          this.eventName = eventName;
          this.count = 0;
        }

        DelegateHandlerEntry.prototype.increment = function increment() {
          this.count++;

          if (this.count === 1) {
            DOM.addEventListener(this.eventName, handleDelegatedEvent, false);
          }
        };

        DelegateHandlerEntry.prototype.decrement = function decrement() {
          this.count--;

          if (this.count === 0) {
            DOM.removeEventListener(this.eventName, handleDelegatedEvent);
          }
        };

        return DelegateHandlerEntry;
      }();

      DefaultEventStrategy = function () {
        function DefaultEventStrategy() {

          this.delegatedHandlers = {};
          this.capturedHandlers = {};
        }

        DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, strategy) {
          var _this22 = this;

          var delegatedHandlers = void 0;
          var capturedHandlers = void 0;
          var handlerEntry = void 0;

          if (strategy === delegationStrategy.bubbling) {
            var _ret = function () {
              delegatedHandlers = _this22.delegatedHandlers;
              handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
              var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

              handlerEntry.increment();
              delegatedCallbacks[targetEvent] = callback;

              return {
                v: function v() {
                  handlerEntry.decrement();
                  delegatedCallbacks[targetEvent] = null;
                }
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }
          if (strategy === delegationStrategy.capturing) {
            var _ret2 = function () {
              capturedHandlers = _this22.capturedHandlers;
              handlerEntry = capturedHandlers[targetEvent] || (capturedHandlers[targetEvent] = new CapturedHandlerEntry(targetEvent));
              var capturedCallbacks = target.capturedCallbacks || (target.capturedCallbacks = {});

              handlerEntry.increment();
              capturedCallbacks[targetEvent] = callback;

              return {
                v: function v() {
                  handlerEntry.decrement();
                  capturedCallbacks[targetEvent] = null;
                }
              };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          }

          target.addEventListener(targetEvent, callback, false);

          return function () {
            target.removeEventListener(targetEvent, callback);
          };
        };

        return DefaultEventStrategy;
      }();

      _export('delegationStrategy', delegationStrategy = {
        none: 0,
        capturing: 1,
        bubbling: 2
      });

      _export('delegationStrategy', delegationStrategy);

      _export('EventManager', EventManager = function () {
        function EventManager() {

          this.elementHandlerLookup = {};
          this.eventStrategyLookup = {};

          this.registerElementConfig({
            tagName: 'input',
            properties: {
              value: ['change', 'input'],
              checked: ['change', 'input'],
              files: ['change', 'input']
            }
          });

          this.registerElementConfig({
            tagName: 'textarea',
            properties: {
              value: ['change', 'input']
            }
          });

          this.registerElementConfig({
            tagName: 'select',
            properties: {
              value: ['change']
            }
          });

          this.registerElementConfig({
            tagName: 'content editable',
            properties: {
              value: ['change', 'input', 'blur', 'keyup', 'paste']
            }
          });

          this.registerElementConfig({
            tagName: 'scrollable element',
            properties: {
              scrollTop: ['scroll'],
              scrollLeft: ['scroll']
            }
          });

          this.defaultEventStrategy = new DefaultEventStrategy();
        }

        EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
          var tagName = config.tagName.toLowerCase();
          var properties = config.properties;
          var propertyName = void 0;

          this.elementHandlerLookup[tagName] = {};

          for (propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
            }
          }
        };

        EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
          this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
        };

        EventManager.prototype.createElementHandler = function createElementHandler(events) {
          return {
            subscribe: function subscribe(target, callback) {
              events.forEach(function (changeEvent) {
                target.addEventListener(changeEvent, callback, false);
              });

              return function () {
                events.forEach(function (changeEvent) {
                  target.removeEventListener(changeEvent, callback);
                });
              };
            }
          };
        };

        EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
          this.elementHandlerLookup[tagName.toLowerCase()] = handler;
        };

        EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
          this.eventStrategyLookup[eventName] = strategy;
        };

        EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
          var tagName = void 0;
          var lookup = this.elementHandlerLookup;

          if (target.tagName) {
            tagName = target.tagName.toLowerCase();

            if (lookup[tagName] && lookup[tagName][propertyName]) {
              return lookup[tagName][propertyName];
            }

            if (propertyName === 'textContent' || propertyName === 'innerHTML') {
              return lookup['content editable'].value;
            }

            if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
              return lookup['scrollable element'][propertyName];
            }
          }

          return null;
        };

        EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
          return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
        };

        return EventManager;
      }());

      _export('EventManager', EventManager);

      _export('DirtyChecker', DirtyChecker = function () {
        function DirtyChecker() {

          this.tracked = [];
          this.checkDelay = 120;
        }

        DirtyChecker.prototype.addProperty = function addProperty(property) {
          var tracked = this.tracked;

          tracked.push(property);

          if (tracked.length === 1) {
            this.scheduleDirtyCheck();
          }
        };

        DirtyChecker.prototype.removeProperty = function removeProperty(property) {
          var tracked = this.tracked;
          tracked.splice(tracked.indexOf(property), 1);
        };

        DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
          var _this23 = this;

          setTimeout(function () {
            return _this23.check();
          }, this.checkDelay);
        };

        DirtyChecker.prototype.check = function check() {
          var tracked = this.tracked;
          var i = tracked.length;

          while (i--) {
            var current = tracked[i];

            if (current.isDirty()) {
              current.call();
            }
          }

          if (tracked.length) {
            this.scheduleDirtyCheck();
          }
        };

        return DirtyChecker;
      }());

      _export('DirtyChecker', DirtyChecker);

      _export('DirtyCheckProperty', DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
        function DirtyCheckProperty(dirtyChecker, obj, propertyName) {

          this.dirtyChecker = dirtyChecker;
          this.obj = obj;
          this.propertyName = propertyName;
        }

        DirtyCheckProperty.prototype.getValue = function getValue() {
          return this.obj[this.propertyName];
        };

        DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
          this.obj[this.propertyName] = newValue;
        };

        DirtyCheckProperty.prototype.call = function call() {
          var oldValue = this.oldValue;
          var newValue = this.getValue();

          this.callSubscribers(newValue, oldValue);

          this.oldValue = newValue;
        };

        DirtyCheckProperty.prototype.isDirty = function isDirty() {
          return this.oldValue !== this.obj[this.propertyName];
        };

        DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
          if (!this.hasSubscribers()) {
            this.oldValue = this.getValue();
            this.dirtyChecker.addProperty(this);
          }
          this.addSubscriber(context, callable);
        };

        DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
          if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.dirtyChecker.removeProperty(this);
          }
        };

        return DirtyCheckProperty;
      }()) || _class5));

      _export('DirtyCheckProperty', DirtyCheckProperty);

      logger = LogManager.getLogger('property-observation');

      _export('propertyAccessor', propertyAccessor = {
        getValue: function getValue(obj, propertyName) {
          return obj[propertyName];
        },
        setValue: function setValue(value, obj, propertyName) {
          obj[propertyName] = value;
        }
      });

      _export('propertyAccessor', propertyAccessor);

      _export('PrimitiveObserver', PrimitiveObserver = function () {
        function PrimitiveObserver(primitive, propertyName) {

          this.doNotCache = true;

          this.primitive = primitive;
          this.propertyName = propertyName;
        }

        PrimitiveObserver.prototype.getValue = function getValue() {
          return this.primitive[this.propertyName];
        };

        PrimitiveObserver.prototype.setValue = function setValue() {
          var type = _typeof(this.primitive);
          throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
        };

        PrimitiveObserver.prototype.subscribe = function subscribe() {};

        PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

        return PrimitiveObserver;
      }());

      _export('PrimitiveObserver', PrimitiveObserver);

      _export('SetterObserver', SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
        function SetterObserver(taskQueue, obj, propertyName) {

          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.queued = false;
          this.observing = false;
        }

        SetterObserver.prototype.getValue = function getValue() {
          return this.obj[this.propertyName];
        };

        SetterObserver.prototype.setValue = function setValue(newValue) {
          this.obj[this.propertyName] = newValue;
        };

        SetterObserver.prototype.getterValue = function getterValue() {
          return this.currentValue;
        };

        SetterObserver.prototype.setterValue = function setterValue(newValue) {
          var oldValue = this.currentValue;

          if (oldValue !== newValue) {
            if (!this.queued) {
              this.oldValue = oldValue;
              this.queued = true;
              this.taskQueue.queueMicroTask(this);
            }

            this.currentValue = newValue;
          }
        };

        SetterObserver.prototype.call = function call() {
          var oldValue = this.oldValue;
          var newValue = this.currentValue;

          this.queued = false;

          this.callSubscribers(newValue, oldValue);
        };

        SetterObserver.prototype.subscribe = function subscribe(context, callable) {
          if (!this.observing) {
            this.convertProperty();
          }
          this.addSubscriber(context, callable);
        };

        SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          this.removeSubscriber(context, callable);
        };

        SetterObserver.prototype.convertProperty = function convertProperty() {
          this.observing = true;
          this.currentValue = this.obj[this.propertyName];
          this.setValue = this.setterValue;
          this.getValue = this.getterValue;

          if (!Reflect.defineProperty(this.obj, this.propertyName, {
            configurable: true,
            enumerable: this.propertyName in this.obj ? this.obj.propertyIsEnumerable(this.propertyName) : true,
            get: this.getValue.bind(this),
            set: this.setValue.bind(this)
          })) {
            logger.warn('Cannot observe property \'' + this.propertyName + '\' of object', this.obj);
          }
        };

        return SetterObserver;
      }()) || _class7));

      _export('SetterObserver', SetterObserver);

      _export('XLinkAttributeObserver', XLinkAttributeObserver = function () {
        function XLinkAttributeObserver(element, propertyName, attributeName) {

          this.element = element;
          this.propertyName = propertyName;
          this.attributeName = attributeName;
        }

        XLinkAttributeObserver.prototype.getValue = function getValue() {
          return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
        };

        XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
          return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
        };

        XLinkAttributeObserver.prototype.subscribe = function subscribe() {
          throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
        };

        return XLinkAttributeObserver;
      }());

      _export('XLinkAttributeObserver', XLinkAttributeObserver);

      _export('dataAttributeAccessor', dataAttributeAccessor = {
        getValue: function getValue(obj, propertyName) {
          return obj.getAttribute(propertyName);
        },
        setValue: function setValue(value, obj, propertyName) {
          return obj.setAttribute(propertyName, value);
        }
      });

      _export('dataAttributeAccessor', dataAttributeAccessor);

      _export('DataAttributeObserver', DataAttributeObserver = function () {
        function DataAttributeObserver(element, propertyName) {

          this.element = element;
          this.propertyName = propertyName;
        }

        DataAttributeObserver.prototype.getValue = function getValue() {
          return this.element.getAttribute(this.propertyName);
        };

        DataAttributeObserver.prototype.setValue = function setValue(newValue) {
          return this.element.setAttribute(this.propertyName, newValue);
        };

        DataAttributeObserver.prototype.subscribe = function subscribe() {
          throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
        };

        return DataAttributeObserver;
      }());

      _export('DataAttributeObserver', DataAttributeObserver);

      _export('StyleObserver', StyleObserver = function () {
        function StyleObserver(element, propertyName) {

          this.element = element;
          this.propertyName = propertyName;

          this.styles = null;
          this.version = 0;
        }

        StyleObserver.prototype.getValue = function getValue() {
          return this.element.style.cssText;
        };

        StyleObserver.prototype._setProperty = function _setProperty(style, value) {
          var priority = '';

          if (value !== null && value !== undefined && typeof value.indexOf === 'function' && value.indexOf('!important') !== -1) {
            priority = 'important';
            value = value.replace('!important', '');
          }
          this.element.style.setProperty(style, value, priority);
        };

        StyleObserver.prototype.setValue = function setValue(newValue) {
          var styles = this.styles || {};
          var style = void 0;
          var version = this.version;

          if (newValue !== null && newValue !== undefined) {
            if (newValue instanceof Object) {
              var value = void 0;
              for (style in newValue) {
                if (newValue.hasOwnProperty(style)) {
                  value = newValue[style];
                  style = style.replace(/([A-Z])/g, function (m) {
                    return '-' + m.toLowerCase();
                  });
                  styles[style] = version;
                  this._setProperty(style, value);
                }
              }
            } else if (newValue.length) {
              var rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g;
              var pair = void 0;
              while ((pair = rx.exec(newValue)) !== null) {
                style = pair[1];
                if (!style) {
                  continue;
                }

                styles[style] = version;
                this._setProperty(style, pair[2]);
              }
            }
          }

          this.styles = styles;
          this.version += 1;

          if (version === 0) {
            return;
          }

          version -= 1;
          for (style in styles) {
            if (!styles.hasOwnProperty(style) || styles[style] !== version) {
              continue;
            }

            this.element.style.removeProperty(style);
          }
        };

        StyleObserver.prototype.subscribe = function subscribe() {
          throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
        };

        return StyleObserver;
      }());

      _export('StyleObserver', StyleObserver);

      _export('ValueAttributeObserver', ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
        function ValueAttributeObserver(element, propertyName, handler) {

          this.element = element;
          this.propertyName = propertyName;
          this.handler = handler;
          if (propertyName === 'files') {
            this.setValue = function () {};
          }
        }

        ValueAttributeObserver.prototype.getValue = function getValue() {
          return this.element[this.propertyName];
        };

        ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
          newValue = newValue === undefined || newValue === null ? '' : newValue;
          if (this.element[this.propertyName] !== newValue) {
            this.element[this.propertyName] = newValue;
            this.notify();
          }
        };

        ValueAttributeObserver.prototype.notify = function notify() {
          var oldValue = this.oldValue;
          var newValue = this.getValue();

          this.callSubscribers(newValue, oldValue);

          this.oldValue = newValue;
        };

        ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
          if (!this.hasSubscribers()) {
            this.oldValue = this.getValue();
            this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this));
          }

          this.addSubscriber(context, callable);
        };

        ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.disposeHandler();
            this.disposeHandler = null;
          }
        };

        return ValueAttributeObserver;
      }()) || _class8));

      _export('ValueAttributeObserver', ValueAttributeObserver);

      checkedArrayContext = 'CheckedObserver:array';
      checkedValueContext = 'CheckedObserver:value';

      _export('CheckedObserver', CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
        function CheckedObserver(element, handler, observerLocator) {

          this.element = element;
          this.handler = handler;
          this.observerLocator = observerLocator;
        }

        CheckedObserver.prototype.getValue = function getValue() {
          return this.value;
        };

        CheckedObserver.prototype.setValue = function setValue(newValue) {
          if (this.initialSync && this.value === newValue) {
            return;
          }

          if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(checkedArrayContext, this);
            this.arrayObserver = null;
          }

          if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
            this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
            this.arrayObserver.subscribe(checkedArrayContext, this);
          }

          this.oldValue = this.value;
          this.value = newValue;
          this.synchronizeElement();
          this.notify();

          if (!this.initialSync) {
            this.initialSync = true;
            this.observerLocator.taskQueue.queueMicroTask(this);
          }
        };

        CheckedObserver.prototype.call = function call(context, splices) {
          this.synchronizeElement();

          if (!this.valueObserver) {
            this.valueObserver = this.element.__observers__.model || this.element.__observers__.value;
            if (this.valueObserver) {
              this.valueObserver.subscribe(checkedValueContext, this);
            }
          }
        };

        CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
          var value = this.value;
          var element = this.element;
          var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
          var isRadio = element.type === 'radio';
          var matcher = element.matcher || function (a, b) {
            return a === b;
          };

          element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && value.findIndex(function (item) {
            return !!matcher(item, elementValue);
          }) !== -1;
        };

        CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
          var value = this.value;
          var element = this.element;
          var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
          var index = void 0;
          var matcher = element.matcher || function (a, b) {
            return a === b;
          };

          if (element.type === 'checkbox') {
            if (Array.isArray(value)) {
              index = value.findIndex(function (item) {
                return !!matcher(item, elementValue);
              });
              if (element.checked && index === -1) {
                value.push(elementValue);
              } else if (!element.checked && index !== -1) {
                value.splice(index, 1);
              }

              return;
            }

            value = element.checked;
          } else if (element.checked) {
            value = elementValue;
          } else {
            return;
          }

          this.oldValue = this.value;
          this.value = value;
          this.notify();
        };

        CheckedObserver.prototype.notify = function notify() {
          var oldValue = this.oldValue;
          var newValue = this.value;

          if (newValue === oldValue) {
            return;
          }

          this.callSubscribers(newValue, oldValue);
        };

        CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
          if (!this.hasSubscribers()) {
            this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
          }
          this.addSubscriber(context, callable);
        };

        CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.disposeHandler();
            this.disposeHandler = null;
          }
        };

        CheckedObserver.prototype.unbind = function unbind() {
          if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(checkedArrayContext, this);
            this.arrayObserver = null;
          }
          if (this.valueObserver) {
            this.valueObserver.unsubscribe(checkedValueContext, this);
          }
        };

        return CheckedObserver;
      }()) || _class9));

      _export('CheckedObserver', CheckedObserver);

      selectArrayContext = 'SelectValueObserver:array';

      _export('SelectValueObserver', SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
        function SelectValueObserver(element, handler, observerLocator) {

          this.element = element;
          this.handler = handler;
          this.observerLocator = observerLocator;
        }

        SelectValueObserver.prototype.getValue = function getValue() {
          return this.value;
        };

        SelectValueObserver.prototype.setValue = function setValue(newValue) {
          if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
            throw new Error('Only null or Array instances can be bound to a multi-select.');
          }
          if (this.value === newValue) {
            return;
          }

          if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(selectArrayContext, this);
            this.arrayObserver = null;
          }

          if (Array.isArray(newValue)) {
            this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
            this.arrayObserver.subscribe(selectArrayContext, this);
          }

          this.oldValue = this.value;
          this.value = newValue;
          this.synchronizeOptions();
          this.notify();

          if (!this.initialSync) {
            this.initialSync = true;
            this.observerLocator.taskQueue.queueMicroTask(this);
          }
        };

        SelectValueObserver.prototype.call = function call(context, splices) {
          this.synchronizeOptions();
        };

        SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
          var value = this.value;
          var isArray = void 0;

          if (Array.isArray(value)) {
            isArray = true;
          }

          var options = this.element.options;
          var i = options.length;
          var matcher = this.element.matcher || function (a, b) {
            return a === b;
          };

          var _loop = function _loop() {
            var option = options.item(i);
            var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
            if (isArray) {
              option.selected = value.findIndex(function (item) {
                return !!matcher(optionValue, item);
              }) !== -1;
              return 'continue';
            }
            option.selected = !!matcher(optionValue, value);
          };

          while (i--) {
            var _ret3 = _loop();

            if (_ret3 === 'continue') continue;
          }
        };

        SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
          var _this24 = this;

          var options = this.element.options;
          var count = 0;
          var value = [];

          for (var _i23 = 0, ii = options.length; _i23 < ii; _i23++) {
            var _option = options.item(_i23);
            if (!_option.selected) {
              continue;
            }
            value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
            count++;
          }

          if (this.element.multiple) {
            if (Array.isArray(this.value)) {
              var _ret4 = function () {
                var matcher = _this24.element.matcher || function (a, b) {
                  return a === b;
                };

                var i = 0;

                var _loop2 = function _loop2() {
                  var a = _this24.value[i];
                  if (value.findIndex(function (b) {
                    return matcher(a, b);
                  }) === -1) {
                    _this24.value.splice(i, 1);
                  } else {
                    i++;
                  }
                };

                while (i < _this24.value.length) {
                  _loop2();
                }

                i = 0;

                var _loop3 = function _loop3() {
                  var a = value[i];
                  if (_this24.value.findIndex(function (b) {
                    return matcher(a, b);
                  }) === -1) {
                    _this24.value.push(a);
                  }
                  i++;
                };

                while (i < value.length) {
                  _loop3();
                }
                return {
                  v: void 0
                };
              }();

              if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
            }
          } else {
            if (count === 0) {
              value = null;
            } else {
              value = value[0];
            }
          }

          if (value !== this.value) {
            this.oldValue = this.value;
            this.value = value;
            this.notify();
          }
        };

        SelectValueObserver.prototype.notify = function notify() {
          var oldValue = this.oldValue;
          var newValue = this.value;

          this.callSubscribers(newValue, oldValue);
        };

        SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
          if (!this.hasSubscribers()) {
            this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
          }
          this.addSubscriber(context, callable);
        };

        SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
          if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.disposeHandler();
            this.disposeHandler = null;
          }
        };

        SelectValueObserver.prototype.bind = function bind() {
          var _this25 = this;

          this.domObserver = DOM.createMutationObserver(function () {
            _this25.synchronizeOptions();
            _this25.synchronizeValue();
          });
          this.domObserver.observe(this.element, { childList: true, subtree: true });
        };

        SelectValueObserver.prototype.unbind = function unbind() {
          this.domObserver.disconnect();
          this.domObserver = null;

          if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(selectArrayContext, this);
            this.arrayObserver = null;
          }
        };

        return SelectValueObserver;
      }()) || _class10));

      _export('SelectValueObserver', SelectValueObserver);

      _export('ClassObserver', ClassObserver = function () {
        function ClassObserver(element) {

          this.element = element;
          this.doNotCache = true;
          this.value = '';
          this.version = 0;
        }

        ClassObserver.prototype.getValue = function getValue() {
          return this.value;
        };

        ClassObserver.prototype.setValue = function setValue(newValue) {
          var nameIndex = this.nameIndex || {};
          var version = this.version;
          var names = void 0;
          var name = void 0;

          if (newValue !== null && newValue !== undefined && newValue.length) {
            names = newValue.split(/\s+/);
            for (var _i24 = 0, length = names.length; _i24 < length; _i24++) {
              name = names[_i24];
              if (name === '') {
                continue;
              }
              nameIndex[name] = version;
              this.element.classList.add(name);
            }
          }

          this.value = newValue;
          this.nameIndex = nameIndex;
          this.version += 1;

          if (version === 0) {
            return;
          }

          version -= 1;
          for (name in nameIndex) {
            if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
              continue;
            }
            this.element.classList.remove(name);
          }
        };

        ClassObserver.prototype.subscribe = function subscribe() {
          throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
        };

        return ClassObserver;
      }());

      _export('ClassObserver', ClassObserver);

      _export('ComputedExpression', ComputedExpression = function (_Expression19) {
        _inherits(ComputedExpression, _Expression19);

        function ComputedExpression(name, dependencies) {

          var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));

          _this26.name = name;
          _this26.dependencies = dependencies;
          _this26.isAssignable = true;
          return _this26;
        }

        ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
          return scope.bindingContext[this.name];
        };

        ComputedExpression.prototype.assign = function assign(scope, value) {
          scope.bindingContext[this.name] = value;
        };

        ComputedExpression.prototype.accept = function accept(visitor) {
          throw new Error('not implemented');
        };

        ComputedExpression.prototype.connect = function connect(binding, scope) {
          var dependencies = this.dependencies;
          var i = dependencies.length;
          while (i--) {
            dependencies[i].connect(binding, scope);
          }
        };

        return ComputedExpression;
      }(Expression));

      _export('ComputedExpression', ComputedExpression);

      svgElements = void 0;
      svgPresentationElements = void 0;
      svgPresentationAttributes = void 0;
      svgAnalyzer = void 0;

      if (typeof FEATURE_NO_SVG === 'undefined') {
        (function () {
          svgElements = {
            a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
            altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
            animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
            ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
            feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
            feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
            feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
            feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
            feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
            feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
            feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
            feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
            feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
            'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
            'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
            'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
            'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
            'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
            glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
            image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
            linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
            marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
            mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
            'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
            mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
            style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
            svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
            switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
            symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
            text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
            title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
            tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
            view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
            vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
          };

          svgPresentationElements = {
            'a': true,
            'altGlyph': true,
            'animate': true,
            'animateColor': true,
            'circle': true,
            'clipPath': true,
            'defs': true,
            'ellipse': true,
            'feBlend': true,
            'feColorMatrix': true,
            'feComponentTransfer': true,
            'feComposite': true,
            'feConvolveMatrix': true,
            'feDiffuseLighting': true,
            'feDisplacementMap': true,
            'feFlood': true,
            'feGaussianBlur': true,
            'feImage': true,
            'feMerge': true,
            'feMorphology': true,
            'feOffset': true,
            'feSpecularLighting': true,
            'feTile': true,
            'feTurbulence': true,
            'filter': true,
            'font': true,
            'foreignObject': true,
            'g': true,
            'glyph': true,
            'glyphRef': true,
            'image': true,
            'line': true,
            'linearGradient': true,
            'marker': true,
            'mask': true,
            'missing-glyph': true,
            'path': true,
            'pattern': true,
            'polygon': true,
            'polyline': true,
            'radialGradient': true,
            'rect': true,
            'stop': true,
            'svg': true,
            'switch': true,
            'symbol': true,
            'text': true,
            'textPath': true,
            'tref': true,
            'tspan': true,
            'use': true
          };

          svgPresentationAttributes = {
            'alignment-baseline': true,
            'baseline-shift': true,
            'clip-path': true,
            'clip-rule': true,
            'clip': true,
            'color-interpolation-filters': true,
            'color-interpolation': true,
            'color-profile': true,
            'color-rendering': true,
            'color': true,
            'cursor': true,
            'direction': true,
            'display': true,
            'dominant-baseline': true,
            'enable-background': true,
            'fill-opacity': true,
            'fill-rule': true,
            'fill': true,
            'filter': true,
            'flood-color': true,
            'flood-opacity': true,
            'font-family': true,
            'font-size-adjust': true,
            'font-size': true,
            'font-stretch': true,
            'font-style': true,
            'font-variant': true,
            'font-weight': true,
            'glyph-orientation-horizontal': true,
            'glyph-orientation-vertical': true,
            'image-rendering': true,
            'kerning': true,
            'letter-spacing': true,
            'lighting-color': true,
            'marker-end': true,
            'marker-mid': true,
            'marker-start': true,
            'mask': true,
            'opacity': true,
            'overflow': true,
            'pointer-events': true,
            'shape-rendering': true,
            'stop-color': true,
            'stop-opacity': true,
            'stroke-dasharray': true,
            'stroke-dashoffset': true,
            'stroke-linecap': true,
            'stroke-linejoin': true,
            'stroke-miterlimit': true,
            'stroke-opacity': true,
            'stroke-width': true,
            'stroke': true,
            'text-anchor': true,
            'text-decoration': true,
            'text-rendering': true,
            'unicode-bidi': true,
            'visibility': true,
            'word-spacing': true,
            'writing-mode': true
          };

          var createElement = function createElement(html) {
            var div = DOM.createElement('div');
            div.innerHTML = html;
            return div.firstChild;
          };

          svgAnalyzer = function () {
            function SVGAnalyzer() {

              if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
                elements.altglyph = elements.altGlyph;
                delete elements.altGlyph;
                elements.altglyphdef = elements.altGlyphDef;
                delete elements.altGlyphDef;
                elements.altglyphitem = elements.altGlyphItem;
                delete elements.altGlyphItem;
                elements.glyphref = elements.glyphRef;
                delete elements.glyphRef;
              }
            }

            SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
              return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
            };

            return SVGAnalyzer;
          }();
        })();
      }

      _export('elements', elements = svgElements);

      _export('elements', elements);

      _export('presentationElements', presentationElements = svgPresentationElements);

      _export('presentationElements', presentationElements);

      _export('presentationAttributes', presentationAttributes = svgPresentationAttributes);

      _export('presentationAttributes', presentationAttributes);

      _export('SVGAnalyzer', SVGAnalyzer = svgAnalyzer || function () {
        function _class11() {}

        _class11.prototype.isStandardSvgAttribute = function isStandardSvgAttribute() {
          return false;
        };

        return _class11;
      }());

      _export('SVGAnalyzer', SVGAnalyzer);

      _export('ObserverLocator', ObserverLocator = (_temp = _class12 = function () {
        function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {

          this.taskQueue = taskQueue;
          this.eventManager = eventManager;
          this.dirtyChecker = dirtyChecker;
          this.svgAnalyzer = svgAnalyzer;
          this.parser = parser;
          this.adapters = [];
          this.logger = LogManager.getLogger('observer-locator');
        }

        ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
          var observersLookup = obj.__observers__;
          var observer = void 0;

          if (observersLookup && propertyName in observersLookup) {
            return observersLookup[propertyName];
          }

          observer = this.createPropertyObserver(obj, propertyName);

          if (!observer.doNotCache) {
            if (observersLookup === undefined) {
              observersLookup = this.getOrCreateObserversLookup(obj);
            }

            observersLookup[propertyName] = observer;
          }

          return observer;
        };

        ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
          return obj.__observers__ || this.createObserversLookup(obj);
        };

        ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
          var value = {};

          if (!Reflect.defineProperty(obj, '__observers__', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: value
          })) {
            this.logger.warn('Cannot add observers to object', obj);
          }

          return value;
        };

        ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
          this.adapters.push(adapter);
        };

        ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
          for (var _i26 = 0, ii = this.adapters.length; _i26 < ii; _i26++) {
            var adapter = this.adapters[_i26];
            var observer = adapter.getObserver(obj, propertyName, descriptor);
            if (observer) {
              return observer;
            }
          }
          return null;
        };

        ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
          var descriptor = void 0;
          var handler = void 0;
          var xlinkResult = void 0;

          if (!(obj instanceof Object)) {
            return new PrimitiveObserver(obj, propertyName);
          }

          if (obj instanceof DOM.Element) {
            if (propertyName === 'class') {
              return new ClassObserver(obj);
            }
            if (propertyName === 'style' || propertyName === 'css') {
              return new StyleObserver(obj, propertyName);
            }
            handler = this.eventManager.getElementHandler(obj, propertyName);
            if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
              return new SelectValueObserver(obj, handler, this);
            }
            if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
              return new CheckedObserver(obj, handler, this);
            }
            if (handler) {
              return new ValueAttributeObserver(obj, propertyName, handler);
            }
            xlinkResult = /^xlink:(.+)$/.exec(propertyName);
            if (xlinkResult) {
              return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
            }
            if (propertyName === 'role' && (obj instanceof DOM.Element || obj instanceof DOM.SVGElement) || /^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
              return new DataAttributeObserver(obj, propertyName);
            }
          }

          descriptor = Object.getPropertyDescriptor(obj, propertyName);

          if (hasDeclaredDependencies(descriptor)) {
            return createComputedObserver(obj, propertyName, descriptor, this);
          }

          if (descriptor) {
            var existingGetterOrSetter = descriptor.get || descriptor.set;
            if (existingGetterOrSetter) {
              if (existingGetterOrSetter.getObserver) {
                return existingGetterOrSetter.getObserver(obj);
              }

              var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
              if (adapterObserver) {
                return adapterObserver;
              }
              return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
            }
          }

          if (obj instanceof Array) {
            if (propertyName === 'length') {
              return this.getArrayObserver(obj).getLengthObserver();
            }

            return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
          } else if (obj instanceof Map) {
            if (propertyName === 'size') {
              return this.getMapObserver(obj).getLengthObserver();
            }

            return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
          } else if (obj instanceof Set) {
            if (propertyName === 'size') {
              return this.getSetObserver(obj).getLengthObserver();
            }

            return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
          }

          return new SetterObserver(this.taskQueue, obj, propertyName);
        };

        ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
          if (obj instanceof DOM.Element) {
            if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || propertyName === 'model' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
              return this.getObserver(obj, propertyName);
            }
            if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
              return dataAttributeAccessor;
            }
          }
          return propertyAccessor;
        };

        ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
          return _getArrayObserver(this.taskQueue, array);
        };

        ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
          return _getMapObserver(this.taskQueue, map);
        };

        ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
          return _getSetObserver(this.taskQueue, set);
        };

        return ObserverLocator;
      }(), _class12.inject = [TaskQueue, EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp));

      _export('ObserverLocator', ObserverLocator);

      _export('ObjectObservationAdapter', ObjectObservationAdapter = function () {
        function ObjectObservationAdapter() {}

        ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
          throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
        };

        return ObjectObservationAdapter;
      }());

      _export('ObjectObservationAdapter', ObjectObservationAdapter);

      _export('BindingExpression', BindingExpression = function () {
        function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {

          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.mode = mode;
          this.lookupFunctions = lookupFunctions;
          this.attribute = attribute;
          this.discrete = false;
        }

        BindingExpression.prototype.createBinding = function createBinding(target) {
          return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
        };

        return BindingExpression;
      }());

      _export('BindingExpression', BindingExpression);

      targetContext = 'Binding:target';

      _export('Binding', Binding = (_dec10 = connectable(), _dec10(_class13 = function () {
        function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {

          this.observerLocator = observerLocator;
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.targetProperty = targetProperty;
          this.mode = mode;
          this.lookupFunctions = lookupFunctions;
        }

        Binding.prototype.updateTarget = function updateTarget(value) {
          this.targetObserver.setValue(value, this.target, this.targetProperty);
        };

        Binding.prototype.updateSource = function updateSource(value) {
          this.sourceExpression.assign(this.source, value, this.lookupFunctions);
        };

        Binding.prototype.call = function call(context, newValue, oldValue) {
          if (!this.isBound) {
            return;
          }
          if (context === sourceContext) {
            oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
            newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
            if (newValue !== oldValue) {
              this.updateTarget(newValue);
            }
            if (this.mode !== bindingMode.oneTime) {
              this._version++;
              this.sourceExpression.connect(this, this.source);
              this.unobserve(false);
            }
            return;
          }
          if (context === targetContext) {
            if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
              this.updateSource(newValue);
            }
            return;
          }
          throw new Error('Unexpected call context ' + context);
        };

        Binding.prototype.bind = function bind(source) {
          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.isBound = true;
          this.source = source;

          if (this.sourceExpression.bind) {
            this.sourceExpression.bind(this, source, this.lookupFunctions);
          }

          var mode = this.mode;
          if (!this.targetObserver) {
            var method = mode === bindingMode.twoWay ? 'getObserver' : 'getAccessor';
            this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
          }

          if ('bind' in this.targetObserver) {
            this.targetObserver.bind();
          }
          var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
          this.updateTarget(value);

          if (mode === bindingMode.oneWay) {
            enqueueBindingConnect(this);
          } else if (mode === bindingMode.twoWay) {
            this.sourceExpression.connect(this, source);
            this.targetObserver.subscribe(targetContext, this);
          }
        };

        Binding.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          if (this.sourceExpression.unbind) {
            this.sourceExpression.unbind(this, this.source);
          }
          this.source = null;
          if ('unbind' in this.targetObserver) {
            this.targetObserver.unbind();
          }
          if (this.targetObserver.unsubscribe) {
            this.targetObserver.unsubscribe(targetContext, this);
          }
          this.unobserve(true);
        };

        Binding.prototype.connect = function connect(evaluate) {
          if (!this.isBound) {
            return;
          }
          if (evaluate) {
            var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
            this.updateTarget(value);
          }
          this.sourceExpression.connect(this, this.source);
        };

        return Binding;
      }()) || _class13));

      _export('Binding', Binding);

      _export('CallExpression', CallExpression = function () {
        function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {

          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.lookupFunctions = lookupFunctions;
        }

        CallExpression.prototype.createBinding = function createBinding(target) {
          return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
        };

        return CallExpression;
      }());

      _export('CallExpression', CallExpression);

      _export('Call', Call = function () {
        function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {

          this.sourceExpression = sourceExpression;
          this.target = target;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.lookupFunctions = lookupFunctions;
        }

        Call.prototype.callSource = function callSource($event) {
          var overrideContext = this.source.overrideContext;
          Object.assign(overrideContext, $event);
          overrideContext.$event = $event;
          var mustEvaluate = true;
          var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
          delete overrideContext.$event;
          for (var prop in $event) {
            delete overrideContext[prop];
          }
          return result;
        };

        Call.prototype.bind = function bind(source) {
          var _this27 = this;

          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.isBound = true;
          this.source = source;

          if (this.sourceExpression.bind) {
            this.sourceExpression.bind(this, source, this.lookupFunctions);
          }
          this.targetProperty.setValue(function ($event) {
            return _this27.callSource($event);
          });
        };

        Call.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          if (this.sourceExpression.unbind) {
            this.sourceExpression.unbind(this, this.source);
          }
          this.source = null;
          this.targetProperty.setValue(null);
        };

        return Call;
      }());

      _export('Call', Call);

      _export('ValueConverterResource', ValueConverterResource = function () {
        function ValueConverterResource(name) {

          this.name = name;
        }

        ValueConverterResource.convention = function convention(name) {
          if (name.endsWith('ValueConverter')) {
            return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
          }
        };

        ValueConverterResource.prototype.initialize = function initialize(container, target) {
          this.instance = container.get(target);
        };

        ValueConverterResource.prototype.register = function register(registry, name) {
          registry.registerValueConverter(name || this.name, this.instance);
        };

        ValueConverterResource.prototype.load = function load(container, target) {};

        return ValueConverterResource;
      }());

      _export('ValueConverterResource', ValueConverterResource);

      _export('BindingBehaviorResource', BindingBehaviorResource = function () {
        function BindingBehaviorResource(name) {

          this.name = name;
        }

        BindingBehaviorResource.convention = function convention(name) {
          if (name.endsWith('BindingBehavior')) {
            return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
          }
        };

        BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
          this.instance = container.get(target);
        };

        BindingBehaviorResource.prototype.register = function register(registry, name) {
          registry.registerBindingBehavior(name || this.name, this.instance);
        };

        BindingBehaviorResource.prototype.load = function load(container, target) {};

        return BindingBehaviorResource;
      }());

      _export('BindingBehaviorResource', BindingBehaviorResource);

      _export('ListenerExpression', ListenerExpression = function () {
        function ListenerExpression(eventManager, targetEvent, sourceExpression, delegationStrategy, preventDefault, lookupFunctions) {

          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.sourceExpression = sourceExpression;
          this.delegationStrategy = delegationStrategy;
          this.discrete = true;
          this.preventDefault = preventDefault;
          this.lookupFunctions = lookupFunctions;
        }

        ListenerExpression.prototype.createBinding = function createBinding(target) {
          return new Listener(this.eventManager, this.targetEvent, this.delegationStrategy, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
        };

        return ListenerExpression;
      }());

      _export('ListenerExpression', ListenerExpression);

      _export('Listener', Listener = function () {
        function Listener(eventManager, targetEvent, delegationStrategy, sourceExpression, target, preventDefault, lookupFunctions) {

          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.delegationStrategy = delegationStrategy;
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.preventDefault = preventDefault;
          this.lookupFunctions = lookupFunctions;
        }

        Listener.prototype.callSource = function callSource(event) {
          var overrideContext = this.source.overrideContext;
          overrideContext.$event = event;
          var mustEvaluate = true;
          var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
          delete overrideContext.$event;
          if (result !== true && this.preventDefault) {
            event.preventDefault();
          }
          return result;
        };

        Listener.prototype.bind = function bind(source) {
          var _this28 = this;

          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.isBound = true;
          this.source = source;

          if (this.sourceExpression.bind) {
            this.sourceExpression.bind(this, source, this.lookupFunctions);
          }
          this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function (event) {
            return _this28.callSource(event);
          }, this.delegationStrategy);
        };

        Listener.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          if (this.sourceExpression.unbind) {
            this.sourceExpression.unbind(this, this.source);
          }
          this.source = null;
          this._disposeListener();
          this._disposeListener = null;
        };

        return Listener;
      }());

      _export('Listener', Listener);

      _export('NameExpression', NameExpression = function () {
        function NameExpression(sourceExpression, apiName, lookupFunctions) {

          this.sourceExpression = sourceExpression;
          this.apiName = apiName;
          this.lookupFunctions = lookupFunctions;
          this.discrete = true;
        }

        NameExpression.prototype.createBinding = function createBinding(target) {
          return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
        };

        NameExpression.locateAPI = function locateAPI(element, apiName) {
          switch (apiName) {
            case 'element':
              return element;
            case 'controller':
              return getAU(element).controller;
            case 'view-model':
              return getAU(element).controller.viewModel;
            case 'view':
              return getAU(element).controller.view;
            default:
              var target = getAU(element)[apiName];

              if (target === undefined) {
                throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
              }

              return target.viewModel;
          }
        };

        return NameExpression;
      }());

      _export('NameExpression', NameExpression);

      NameBinder = function () {
        function NameBinder(sourceExpression, target, lookupFunctions) {

          this.sourceExpression = sourceExpression;
          this.target = target;
          this.lookupFunctions = lookupFunctions;
        }

        NameBinder.prototype.bind = function bind(source) {
          if (this.isBound) {
            if (this.source === source) {
              return;
            }
            this.unbind();
          }
          this.isBound = true;
          this.source = source;
          if (this.sourceExpression.bind) {
            this.sourceExpression.bind(this, source, this.lookupFunctions);
          }
          this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
        };

        NameBinder.prototype.unbind = function unbind() {
          if (!this.isBound) {
            return;
          }
          this.isBound = false;
          if (this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target) {
            this.sourceExpression.assign(this.source, null, this.lookupFunctions);
          }
          if (this.sourceExpression.unbind) {
            this.sourceExpression.unbind(this, this.source);
          }
          this.source = null;
        };

        return NameBinder;
      }();

      LookupFunctions = {
        bindingBehaviors: function bindingBehaviors(name) {
          return null;
        },
        valueConverters: function valueConverters(name) {
          return null;
        }
      };

      _export('BindingEngine', BindingEngine = (_temp2 = _class14 = function () {
        function BindingEngine(observerLocator, parser) {

          this.observerLocator = observerLocator;
          this.parser = parser;
        }

        BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
          var mode = arguments.length <= 2 || arguments[2] === undefined ? bindingMode.oneWay : arguments[2];
          var lookupFunctions = arguments.length <= 3 || arguments[3] === undefined ? LookupFunctions : arguments[3];

          return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
        };

        BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
          var _this29 = this;

          return {
            subscribe: function subscribe(callback) {
              var observer = _this29.observerLocator.getObserver(obj, propertyName);
              observer.subscribe(callback);
              return {
                dispose: function dispose() {
                  return observer.unsubscribe(callback);
                }
              };
            }
          };
        };

        BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
          var _this30 = this;

          return {
            subscribe: function subscribe(callback) {
              var observer = void 0;
              if (collection instanceof Array) {
                observer = _this30.observerLocator.getArrayObserver(collection);
              } else if (collection instanceof Map) {
                observer = _this30.observerLocator.getMapObserver(collection);
              } else if (collection instanceof Set) {
                observer = _this30.observerLocator.getSetObserver(collection);
              } else {
                throw new Error('collection must be an instance of Array, Map or Set.');
              }
              observer.subscribe(callback);
              return {
                dispose: function dispose() {
                  return observer.unsubscribe(callback);
                }
              };
            }
          };
        };

        BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
          var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
          return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
        };

        BindingEngine.prototype.parseExpression = function parseExpression(expression) {
          return this.parser.parse(expression);
        };

        BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
          this.observerLocator.addAdapter(adapter);
        };

        return BindingEngine;
      }(), _class14.inject = [ObserverLocator, Parser], _temp2));

      _export('BindingEngine', BindingEngine);

      setProto = Set.prototype;

      _export('getSetObserver', _getSetObserver);

      ModifySetObserver = function (_ModifyCollectionObse3) {
        _inherits(ModifySetObserver, _ModifyCollectionObse3);

        function ModifySetObserver(taskQueue, set) {

          return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
        }

        ModifySetObserver.for = function _for(taskQueue, set) {
          if (!('__set_observer__' in set)) {
            Reflect.defineProperty(set, '__set_observer__', {
              value: ModifySetObserver.create(taskQueue, set),
              enumerable: false, configurable: false
            });
          }
          return set.__set_observer__;
        };

        ModifySetObserver.create = function create(taskQueue, set) {
          var observer = new ModifySetObserver(taskQueue, set);

          var proto = setProto;
          if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
            proto = {
              add: set.add,
              delete: set.delete,
              clear: set.clear
            };
          }

          set.add = function () {
            var type = 'add';
            var oldSize = set.size;
            var methodCallResult = proto.add.apply(set, arguments);
            var hasValue = set.size === oldSize;
            if (!hasValue) {
              observer.addChangeRecord({
                type: type,
                object: set,
                value: Array.from(set).pop()
              });
            }
            return methodCallResult;
          };

          set.delete = function () {
            var hasValue = set.has(arguments[0]);
            var methodCallResult = proto.delete.apply(set, arguments);
            if (hasValue) {
              observer.addChangeRecord({
                type: 'delete',
                object: set,
                value: arguments[0]
              });
            }
            return methodCallResult;
          };

          set.clear = function () {
            var methodCallResult = proto.clear.apply(set, arguments);
            observer.addChangeRecord({
              type: 'clear',
              object: set
            });
            return methodCallResult;
          };

          return observer;
        };

        return ModifySetObserver;
      }(ModifyCollectionObserver);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-metadata/dist/system/aurelia-metadata.js', ['aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM, _extends, _typeof, metadata, originStorage, unknownOrigin, Origin;

  function isObject(val) {
    return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
  }

  function decorators() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var applicator = function applicator(target, key, descriptor) {
      var i = rest.length;

      if (key) {
        descriptor = descriptor || {
          value: target[key],
          writable: true,
          configurable: true,
          enumerable: true
        };

        while (i--) {
          descriptor = rest[i](target, key, descriptor) || descriptor;
        }

        Object.defineProperty(target, key, descriptor);
      } else {
        while (i--) {
          target = rest[i](target) || target;
        }
      }

      return target;
    };

    applicator.on = applicator;
    return applicator;
  }

  _export('decorators', decorators);

  function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
    function decorator(target, key, descriptor) {
      var methodSignature = target.constructor.name + '#' + key;
      var options = maybeKey ? {} : optionsOrTarget || {};
      var message = 'DEPRECATION - ' + methodSignature;

      if (typeof descriptor.value !== 'function') {
        throw new SyntaxError('Only methods can be marked as deprecated.');
      }

      if (options.message) {
        message += ' - ' + options.message;
      }

      return _extends({}, descriptor, {
        value: function deprecationWrapper() {
          if (options.error) {
            throw new Error(message);
          } else {
            console.warn(message);
          }

          return descriptor.value.apply(this, arguments);
        }
      });
    }

    return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
  }

  _export('deprecated', deprecated);

  function mixin(behavior) {
    var instanceKeys = Object.keys(behavior);

    function _mixin(possible) {
      var decorator = function decorator(target) {
        var resolvedTarget = typeof target === 'function' ? target.prototype : target;

        var i = instanceKeys.length;
        while (i--) {
          var property = instanceKeys[i];
          Object.defineProperty(resolvedTarget, property, {
            value: behavior[property],
            writable: true
          });
        }
      };

      return possible ? decorator(possible) : decorator;
    }

    return _mixin;
  }

  _export('mixin', mixin);

  function alwaysValid() {
    return true;
  }
  function noCompose() {}

  function ensureProtocolOptions(options) {
    if (options === undefined) {
      options = {};
    } else if (typeof options === 'function') {
      options = {
        validate: options
      };
    }

    if (!options.validate) {
      options.validate = alwaysValid;
    }

    if (!options.compose) {
      options.compose = noCompose;
    }

    return options;
  }

  function createProtocolValidator(validate) {
    return function (target) {
      var result = validate(target);
      return result === true;
    };
  }

  function createProtocolAsserter(name, validate) {
    return function (target) {
      var result = validate(target);
      if (result !== true) {
        throw new Error(result || name + ' was not correctly implemented.');
      }
    };
  }

  function protocol(name, options) {
    options = ensureProtocolOptions(options);

    var result = function result(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      options.compose(resolvedTarget);
      result.assert(resolvedTarget);

      Object.defineProperty(resolvedTarget, 'protocol:' + name, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: true
      });
    };

    result.validate = createProtocolValidator(options.validate);
    result.assert = createProtocolAsserter(name, options.validate);

    return result;
  }

  _export('protocol', protocol);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('metadata', metadata = {
        resource: 'aurelia:resource',
        paramTypes: 'design:paramtypes',
        propertyType: 'design:type',
        properties: 'design:properties',
        get: function get(metadataKey, target, targetKey) {
          if (!isObject(target)) {
            return undefined;
          }
          var result = metadata.getOwn(metadataKey, target, targetKey);
          return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
        },
        getOwn: function getOwn(metadataKey, target, targetKey) {
          if (!isObject(target)) {
            return undefined;
          }
          return Reflect.getOwnMetadata(metadataKey, target, targetKey);
        },
        define: function define(metadataKey, metadataValue, target, targetKey) {
          Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
        },
        getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
          var result = metadata.getOwn(metadataKey, target, targetKey);

          if (result === undefined) {
            result = new Type();
            Reflect.defineMetadata(metadataKey, result, target, targetKey);
          }

          return result;
        }
      });

      _export('metadata', metadata);

      originStorage = new Map();
      unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

      _export('Origin', Origin = function () {
        function Origin(moduleId, moduleMember) {

          this.moduleId = moduleId;
          this.moduleMember = moduleMember;
        }

        Origin.get = function get(fn) {
          var origin = originStorage.get(fn);

          if (origin === undefined) {
            PLATFORM.eachModule(function (key, value) {
              if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                for (var name in value) {
                  var exp = value[name];
                  if (exp === fn) {
                    originStorage.set(fn, origin = new Origin(key, name));
                    return true;
                  }
                }
              }

              if (value === fn) {
                originStorage.set(fn, origin = new Origin(key, 'default'));
                return true;
              }

              return false;
            });
          }

          return origin || unknownOrigin;
        };

        Origin.set = function set(fn, origin) {
          originStorage.set(fn, origin);
        };

        return Origin;
      }());

      _export('Origin', Origin);

      protocol.create = function (name, options) {
        options = ensureProtocolOptions(options);
        var hidden = 'protocol:' + name;
        var result = function result(target) {
          var decorator = protocol(name, options);
          return target ? decorator(target) : decorator;
        };

        result.decorates = function (obj) {
          return obj[hidden] === true;
        };
        result.validate = createProtocolValidator(options.validate);
        result.assert = createProtocolAsserter(name, options.validate);

        return result;
      };
    }
  };
});
'use strict';

System.register('node_modules/aurelia-pal/dist/system/aurelia-pal.js', [], function (_export, _context) {
  "use strict";

  var FEATURE, PLATFORM, DOM, isInitialized;
  function AggregateError(message, innerError, skipIfAlreadyAggregate) {
    if (innerError) {
      if (innerError.innerError && skipIfAlreadyAggregate) {
        return innerError;
      }

      var separator = '\n------------------------------------------------\n';

      message += separator + 'Inner Error:\n';

      if (typeof innerError === 'string') {
        message += 'Message: ' + innerError;
      } else {
        if (innerError.message) {
          message += 'Message: ' + innerError.message;
        } else {
          message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
        }

        if (innerError.stack) {
          message += '\nInner Error Stack:\n' + innerError.stack;
          message += '\nEnd Inner Error Stack';
        }
      }

      message += separator;
    }

    var e = new Error(message);
    if (innerError) {
      e.innerError = innerError;
    }

    return e;
  }

  _export('AggregateError', AggregateError);

  function initializePAL(callback) {
    if (isInitialized) {
      return;
    }
    _export('isInitialized', isInitialized = true);
    if (typeof Object.getPropertyDescriptor !== 'function') {
      Object.getPropertyDescriptor = function (subject, name) {
        var pd = Object.getOwnPropertyDescriptor(subject, name);
        var proto = Object.getPrototypeOf(subject);
        while (typeof pd === 'undefined' && proto !== null) {
          pd = Object.getOwnPropertyDescriptor(proto, name);
          proto = Object.getPrototypeOf(proto);
        }
        return pd;
      };
    }

    callback(PLATFORM, FEATURE, DOM);
  }

  _export('initializePAL', initializePAL);

  function reset() {
    _export('isInitialized', isInitialized = false);
  }

  _export('reset', reset);

  return {
    setters: [],
    execute: function () {
      _export('FEATURE', FEATURE = {});

      _export('FEATURE', FEATURE);

      _export('PLATFORM', PLATFORM = {
        noop: function noop() {},
        eachModule: function eachModule() {},
        moduleName: function (_moduleName) {
          function moduleName(_x) {
            return _moduleName.apply(this, arguments);
          }

          moduleName.toString = function () {
            return _moduleName.toString();
          };

          return moduleName;
        }(function (moduleName) {
          return moduleName;
        })
      });

      _export('PLATFORM', PLATFORM);

      PLATFORM.global = function () {
        if (typeof self !== 'undefined') {
          return self;
        }

        if (typeof global !== 'undefined') {
          return global;
        }

        return new Function('return this')();
      }();

      _export('DOM', DOM = {});

      _export('DOM', DOM);

      _export('isInitialized', isInitialized = false);

      _export('isInitialized', isInitialized);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-task-queue/dist/system/aurelia-task-queue.js', ['aurelia-pal'], function (_export, _context) {
  "use strict";

  var DOM, FEATURE, _typeof, hasSetImmediate, stackSeparator, microStackSeparator, TaskQueue;

  function makeRequestFlushFromMutationObserver(flush) {
    var toggle = 1;
    var observer = DOM.createMutationObserver(flush);
    var node = DOM.createTextNode('');
    observer.observe(node, { characterData: true });
    return function requestFlush() {
      toggle = -toggle;
      node.data = toggle;
    };
  }

  function makeRequestFlushFromTimer(flush) {
    return function requestFlush() {
      var timeoutHandle = setTimeout(handleFlushTimer, 0);

      var intervalHandle = setInterval(handleFlushTimer, 50);
      function handleFlushTimer() {
        clearTimeout(timeoutHandle);
        clearInterval(intervalHandle);
        flush();
      }
    };
  }

  function onError(error, task, longStacks) {
    if (longStacks && task.stack && (typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error !== null) {
      error.stack = filterFlushStack(error.stack) + task.stack;
    }

    if ('onError' in task) {
      task.onError(error);
    } else if (hasSetImmediate) {
      setImmediate(function () {
        throw error;
      });
    } else {
      setTimeout(function () {
        throw error;
      }, 0);
    }
  }

  function captureStack() {
    var error = new Error();

    if (error.stack) {
      return error.stack;
    }

    try {
      throw error;
    } catch (e) {
      return e.stack;
    }
  }

  function filterQueueStack(stack) {
    return stack.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, '');
  }

  function filterFlushStack(stack) {
    var index = stack.lastIndexOf('flushMicroTaskQueue');
    if (index < 0) {
      index = stack.lastIndexOf('flushTaskQueue');
      if (index < 0) {
        return stack;
      }
    }
    index = stack.lastIndexOf('\n', index);
    return index < 0 ? stack : stack.substr(0, index);
  }
  return {
    setters: [function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      FEATURE = _aureliaPal.FEATURE;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      hasSetImmediate = typeof setImmediate === 'function';
      stackSeparator = '\nEnqueued in TaskQueue by:\n';
      microStackSeparator = '\nEnqueued in MicroTaskQueue by:\n';

      _export('TaskQueue', TaskQueue = function () {
        function TaskQueue() {
          var _this = this;

          this.flushing = false;
          this.longStacks = false;

          this.microTaskQueue = [];
          this.microTaskQueueCapacity = 1024;
          this.taskQueue = [];

          if (FEATURE.mutationObserver) {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
              return _this.flushMicroTaskQueue();
            });
          } else {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
              return _this.flushMicroTaskQueue();
            });
          }

          this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
            return _this.flushTaskQueue();
          });
        }

        TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
          if (this.microTaskQueue.length < 1) {
            this.requestFlushMicroTaskQueue();
          }

          if (this.longStacks) {
            task.stack = this.prepareQueueStack(microStackSeparator);
          }
          this.microTaskQueue.push(task);
        };

        TaskQueue.prototype.queueTask = function queueTask(task) {
          if (this.taskQueue.length < 1) {
            this.requestFlushTaskQueue();
          }

          if (this.longStacks) {
            task.stack = this.prepareQueueStack(stackSeparator);
          }
          this.taskQueue.push(task);
        };

        TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
          var queue = this.taskQueue;
          var index = 0;
          var task = void 0;

          this.taskQueue = [];

          try {
            this.flushing = true;
            while (index < queue.length) {
              task = queue[index];
              if (this.longStacks) {
                this.stack = typeof task.stack === 'string' ? task.stack : undefined;
              }
              task.call();
              index++;
            }
          } catch (error) {
            onError(error, task, this.longStacks);
          } finally {
            this.flushing = false;
          }
        };

        TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
          var queue = this.microTaskQueue;
          var capacity = this.microTaskQueueCapacity;
          var index = 0;
          var task = void 0;

          try {
            this.flushing = true;
            while (index < queue.length) {
              task = queue[index];
              if (this.longStacks) {
                this.stack = typeof task.stack === 'string' ? task.stack : undefined;
              }
              task.call();
              index++;

              if (index > capacity) {
                for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                  queue[scan] = queue[scan + index];
                }

                queue.length -= index;
                index = 0;
              }
            }
          } catch (error) {
            onError(error, task, this.longStacks);
          } finally {
            this.flushing = false;
          }

          queue.length = 0;
        };

        TaskQueue.prototype.prepareQueueStack = function prepareQueueStack(separator) {
          var stack = separator + filterQueueStack(captureStack());
          if (typeof this.stack === 'string') {
            stack = filterFlushStack(stack) + this.stack;
          }
          return stack;
        };

        return TaskQueue;
      }());

      _export('TaskQueue', TaskQueue);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-framework/dist/system/aurelia-framework.js', ['aurelia-logging', 'aurelia-dependency-injection', 'aurelia-loader', 'aurelia-templating', 'aurelia-pal', 'aurelia-path', 'aurelia-binding', 'aurelia-metadata', 'aurelia-task-queue'], function (_export, _context) {
  "use strict";

  var TheLogManager, Container, Loader, BindingLanguage, ViewSlot, ViewResources, TemplatingEngine, CompositionTransaction, ViewEngine, DOM, PLATFORM, relativeToFile, join, Aurelia, logger, extPattern, FrameworkConfiguration, LogManager;

  function preventActionlessFormSubmit() {
    DOM.addEventListener('submit', function (evt) {
      var target = evt.target;
      var action = target.action;

      if (target.tagName.toLowerCase() === 'form' && !action) {
        evt.preventDefault();
      }
    });
  }

  function runTasks(config, tasks) {
    var current = void 0;
    var next = function next() {
      current = tasks.shift();
      if (current) {
        return Promise.resolve(current(config)).then(next);
      }

      return Promise.resolve();
    };

    return next();
  }

  function loadPlugin(config, loader, info) {
    logger.debug('Loading plugin ' + info.moduleId + '.');
    config.resourcesRelativeTo = info.resourcesRelativeTo;

    var id = info.moduleId;

    if (info.resourcesRelativeTo.length > 1) {
      return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
        return _loadPlugin(normalizedId);
      });
    }

    return _loadPlugin(id);

    function _loadPlugin(moduleId) {
      return loader.loadModule(moduleId).then(function (m) {
        if ('configure' in m) {
          return Promise.resolve(m.configure(config, info.config || {})).then(function () {
            config.resourcesRelativeTo = null;
            logger.debug('Configured plugin ' + info.moduleId + '.');
          });
        }

        config.resourcesRelativeTo = null;
        logger.debug('Loaded plugin ' + info.moduleId + '.');
      });
    }
  }

  function loadResources(aurelia, resourcesToLoad, appResources) {
    var viewEngine = aurelia.container.get(ViewEngine);

    return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
      return _normalize(resourcesToLoad[n]);
    })).then(function (loads) {
      var names = [];
      var importIds = [];

      loads.forEach(function (l) {
        names.push(undefined);
        importIds.push(l.importId);
      });

      return viewEngine.importViewResources(importIds, names, appResources);
    });

    function _normalize(load) {
      var moduleId = load.moduleId;
      var ext = getExt(moduleId);

      if (isOtherResource(moduleId)) {
        moduleId = removeExt(moduleId);
      }

      return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
        return {
          name: load.moduleId,
          importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
        };
      });
    }

    function isOtherResource(name) {
      var ext = getExt(name);
      if (!ext) return false;
      if (ext === '') return false;
      if (ext === '.js' || ext === '.ts') return false;
      return true;
    }

    function removeExt(name) {
      return name.replace(extPattern, '');
    }

    function addOriginalExt(normalized, ext) {
      return removeExt(normalized) + '.' + ext;
    }
  }

  function getExt(name) {
    var match = name.match(extPattern);
    if (match && match.length > 0) {
      return match[0].split('.')[1];
    }
  }

  function assertProcessed(plugins) {
    if (plugins.processed) {
      throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
    }
  }

  return {
    setters: [function (_aureliaLogging) {
      TheLogManager = _aureliaLogging;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      var _exportObj = {};

      for (var _key in _aureliaDependencyInjection) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _aureliaDependencyInjection[_key];
      }

      _export(_exportObj);
    }, function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
      var _exportObj2 = {};

      for (var _key2 in _aureliaLoader) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _aureliaLoader[_key2];
      }

      _export(_exportObj2);
    }, function (_aureliaTemplating) {
      BindingLanguage = _aureliaTemplating.BindingLanguage;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
      TemplatingEngine = _aureliaTemplating.TemplatingEngine;
      CompositionTransaction = _aureliaTemplating.CompositionTransaction;
      ViewEngine = _aureliaTemplating.ViewEngine;
      var _exportObj3 = {};

      for (var _key3 in _aureliaTemplating) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _aureliaTemplating[_key3];
      }

      _export(_exportObj3);
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      PLATFORM = _aureliaPal.PLATFORM;
      var _exportObj4 = {};

      for (var _key4 in _aureliaPal) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _aureliaPal[_key4];
      }

      _export(_exportObj4);
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
      join = _aureliaPath.join;
      var _exportObj5 = {};

      for (var _key5 in _aureliaPath) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _aureliaPath[_key5];
      }

      _export(_exportObj5);
    }, function (_aureliaBinding) {
      var _exportObj6 = {};

      for (var _key6 in _aureliaBinding) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _aureliaBinding[_key6];
      }

      _export(_exportObj6);
    }, function (_aureliaMetadata) {
      var _exportObj7 = {};

      for (var _key7 in _aureliaMetadata) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _aureliaMetadata[_key7];
      }

      _export(_exportObj7);
    }, function (_aureliaTaskQueue) {
      var _exportObj8 = {};

      for (var _key8 in _aureliaTaskQueue) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _aureliaTaskQueue[_key8];
      }

      _export(_exportObj8);
    }],
    execute: function () {
      _export('Aurelia', Aurelia = function () {
        function Aurelia(loader, container, resources) {

          this.loader = loader || new PLATFORM.Loader();
          this.container = container || new Container().makeGlobal();
          this.resources = resources || new ViewResources();
          this.use = new FrameworkConfiguration(this);
          this.logger = TheLogManager.getLogger('aurelia');
          this.hostConfigured = false;
          this.host = null;

          this.use.instance(Aurelia, this);
          this.use.instance(Loader, this.loader);
          this.use.instance(ViewResources, this.resources);
        }

        Aurelia.prototype.start = function start() {
          var _this = this;

          if (this._started) {
            return this._started;
          }

          this.logger.info('Aurelia Starting');
          return this._started = this.use.apply().then(function () {
            preventActionlessFormSubmit();

            if (!_this.container.hasResolver(BindingLanguage)) {
              var message = 'You must configure Aurelia with a BindingLanguage implementation.';
              _this.logger.error(message);
              throw new Error(message);
            }

            _this.logger.info('Aurelia Started');
            var evt = DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
            DOM.dispatchEvent(evt);
            return _this;
          });
        };

        Aurelia.prototype.enhance = function enhance() {
          var _this2 = this;

          var bindingContext = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

          this._configureHost(applicationHost || DOM.querySelectorAll('body')[0]);

          return new Promise(function (resolve) {
            var engine = _this2.container.get(TemplatingEngine);
            _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
            _this2.root.attached();
            _this2._onAureliaComposed();
            resolve(_this2);
          });
        };

        Aurelia.prototype.setRoot = function setRoot() {
          var _this3 = this;

          var root = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
          var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

          var instruction = {};

          if (this.root && this.root.viewModel && this.root.viewModel.router) {
            this.root.viewModel.router.deactivate();
            this.root.viewModel.router.reset();
          }

          this._configureHost(applicationHost);

          var engine = this.container.get(TemplatingEngine);
          var transaction = this.container.get(CompositionTransaction);
          delete transaction.initialComposition;

          if (!root) {
            if (this.configModuleId) {
              root = relativeToFile('./app', this.configModuleId);
            } else {
              root = 'app';
            }
          }

          instruction.viewModel = root;
          instruction.container = instruction.childContainer = this.container;
          instruction.viewSlot = this.hostSlot;
          instruction.host = this.host;

          return engine.compose(instruction).then(function (r) {
            _this3.root = r;
            instruction.viewSlot.attached();
            _this3._onAureliaComposed();
            return _this3;
          });
        };

        Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
          if (this.hostConfigured) {
            return;
          }
          applicationHost = applicationHost || this.host;

          if (!applicationHost || typeof applicationHost === 'string') {
            this.host = DOM.getElementById(applicationHost || 'applicationHost');
          } else {
            this.host = applicationHost;
          }

          if (!this.host) {
            throw new Error('No applicationHost was specified.');
          }

          this.hostConfigured = true;
          this.host.aurelia = this;
          this.hostSlot = new ViewSlot(this.host, true);
          this.hostSlot.transformChildNodesIntoView();
          this.container.registerInstance(DOM.boundary, this.host);
        };

        Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
          var evt = DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
          setTimeout(function () {
            return DOM.dispatchEvent(evt);
          }, 1);
        };

        return Aurelia;
      }());

      _export('Aurelia', Aurelia);

      logger = TheLogManager.getLogger('aurelia');
      extPattern = /\.[^/.]+$/;

      _export('FrameworkConfiguration', FrameworkConfiguration = function () {
        function FrameworkConfiguration(aurelia) {
          var _this4 = this;

          this.aurelia = aurelia;
          this.container = aurelia.container;
          this.info = [];
          this.processed = false;
          this.preTasks = [];
          this.postTasks = [];
          this.resourcesToLoad = {};
          this.preTask(function () {
            return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
              return _this4.bootstrapperName = name;
            });
          });
          this.postTask(function () {
            return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
          });
        }

        FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
          this.container.registerInstance(type, _instance);
          return this;
        };

        FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
          this.container.registerSingleton(type, implementation);
          return this;
        };

        FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
          this.container.registerTransient(type, implementation);
          return this;
        };

        FrameworkConfiguration.prototype.preTask = function preTask(task) {
          assertProcessed(this);
          this.preTasks.push(task);
          return this;
        };

        FrameworkConfiguration.prototype.postTask = function postTask(task) {
          assertProcessed(this);
          this.postTasks.push(task);
          return this;
        };

        FrameworkConfiguration.prototype.feature = function feature(plugin) {
          var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          var hasIndex = /\/index$/i.test(plugin);
          var moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
          var root = hasIndex ? plugin.substr(0, plugin.length - 6) : plugin;
          return this.plugin({ moduleId: moduleId, resourcesRelativeTo: [root, ''], config: config });
        };

        FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
          assertProcessed(this);

          var toAdd = Array.isArray(resources) ? resources : arguments;
          var resource = void 0;
          var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

          for (var i = 0, ii = toAdd.length; i < ii; ++i) {
            resource = toAdd[i];
            if (typeof resource !== 'string') {
              throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
            }

            var parent = resourcesRelativeTo[0];
            var grandParent = resourcesRelativeTo[1];
            var name = resource;

            if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
              name = join(parent, resource);
            }

            this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
          }

          return this;
        };

        FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
          assertProcessed(this);
          this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
          return this;
        };

        FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
          assertProcessed(this);

          if (typeof _plugin === 'string') {
            return this.plugin({ moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: config || {} });
          }

          this.info.push(_plugin);
          return this;
        };

        FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
          var _this5 = this;

          var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
          this.plugin(plugin);

          this.preTask(function () {
            var relativeTo = [name, _this5.bootstrapperName];
            plugin.moduleId = name;
            plugin.resourcesRelativeTo = relativeTo;
            return Promise.resolve();
          });

          return this;
        };

        FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
          return this._addNormalizedPlugin('aurelia-templating-binding');
        };

        FrameworkConfiguration.prototype.router = function router() {
          return this._addNormalizedPlugin('aurelia-templating-router');
        };

        FrameworkConfiguration.prototype.history = function history() {
          return this._addNormalizedPlugin('aurelia-history-browser');
        };

        FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
          return this._addNormalizedPlugin('aurelia-templating-resources');
        };

        FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
          return this._addNormalizedPlugin('aurelia-event-aggregator');
        };

        FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
          return this.defaultBindingLanguage().defaultResources().eventAggregator();
        };

        FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
          return this.basicConfiguration().history().router();
        };

        FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
          var _this6 = this;

          this.preTask(function () {
            return _this6.aurelia.loader.normalize('aurelia-logging-console', _this6.bootstrapperName).then(function (name) {
              return _this6.aurelia.loader.loadModule(name).then(function (m) {
                TheLogManager.addAppender(new m.ConsoleAppender());
                TheLogManager.setLevel(TheLogManager.logLevel.debug);
              });
            });
          });

          return this;
        };

        FrameworkConfiguration.prototype.apply = function apply() {
          var _this7 = this;

          if (this.processed) {
            return Promise.resolve();
          }

          return runTasks(this, this.preTasks).then(function () {
            var loader = _this7.aurelia.loader;
            var info = _this7.info;
            var current = void 0;

            var next = function next() {
              current = info.shift();
              if (current) {
                return loadPlugin(_this7, loader, current).then(next);
              }

              _this7.processed = true;
              return Promise.resolve();
            };

            return next().then(function () {
              return runTasks(_this7, _this7.postTasks);
            });
          });
        };

        return FrameworkConfiguration;
      }());

      _export('FrameworkConfiguration', FrameworkConfiguration);

      _export('LogManager', LogManager = TheLogManager);

      _export('LogManager', LogManager);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-testing/dist/system/component-tester.js', ['aurelia-templating', 'aurelia-framework', './wait'], function (_export, _context) {
  "use strict";

  var View, Aurelia, waitFor, StageComponent, ComponentTester;

  return {
    setters: [function (_aureliaTemplating) {
      View = _aureliaTemplating.View;
    }, function (_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
    }, function (_wait) {
      waitFor = _wait.waitFor;
    }],
    execute: function () {
      _export('StageComponent', StageComponent = function () {
        function StageComponent() {}

        StageComponent.withResources = function withResources(resources) {
          return new ComponentTester().withResources(resources);
        };

        return StageComponent;
      }());

      _export('StageComponent', StageComponent);

      _export('ComponentTester', ComponentTester = function () {
        function ComponentTester() {

          this.configure = function (aurelia) {
            return aurelia.use.standardConfiguration();
          };

          this._resources = [];
        }

        ComponentTester.prototype.bootstrap = function bootstrap(configure) {
          this.configure = configure;
        };

        ComponentTester.prototype.withResources = function withResources(resources) {
          this._resources = resources;
          return this;
        };

        ComponentTester.prototype.inView = function inView(html) {
          this._html = html;
          return this;
        };

        ComponentTester.prototype.boundTo = function boundTo(bindingContext) {
          this._bindingContext = bindingContext;
          return this;
        };

        ComponentTester.prototype.manuallyHandleLifecycle = function manuallyHandleLifecycle() {
          this._prepareLifecycle();
          return this;
        };

        ComponentTester.prototype.create = function create(bootstrap) {
          var _this = this;

          return bootstrap(function (aurelia) {
            return Promise.resolve(_this.configure(aurelia)).then(function () {
              if (_this._resources) {
                aurelia.use.globalResources(_this._resources);
              }

              return aurelia.start().then(function (a) {
                _this.host = document.createElement('div');
                _this.host.innerHTML = _this._html;

                document.body.appendChild(_this.host);

                return aurelia.enhance(_this._bindingContext, _this.host).then(function () {
                  _this._rootView = aurelia.root;
                  _this.element = _this.host.firstElementChild;

                  if (aurelia.root.controllers.length) {
                    _this.viewModel = aurelia.root.controllers[0].viewModel;
                  }

                  return new Promise(function (resolve) {
                    return setTimeout(function () {
                      return resolve();
                    }, 0);
                  });
                });
              });
            });
          });
        };

        ComponentTester.prototype.dispose = function dispose() {
          if (this.host === undefined || this._rootView === undefined) {
            throw new Error('Cannot call ComponentTester.dispose() before ComponentTester.create()');
          }

          this._rootView.detached();
          this._rootView.unbind();

          return this.host.parentNode.removeChild(this.host);
        };

        ComponentTester.prototype._prepareLifecycle = function _prepareLifecycle() {
          var _this2 = this;

          var bindPrototype = View.prototype.bind;
          View.prototype.bind = function () {};
          this.bind = function (bindingContext) {
            return new Promise(function (resolve) {
              View.prototype.bind = bindPrototype;
              if (bindingContext !== undefined) {
                _this2._bindingContext = bindingContext;
              }
              _this2._rootView.bind(_this2._bindingContext);
              setTimeout(function () {
                return resolve();
              }, 0);
            });
          };

          var attachedPrototype = View.prototype.attached;
          View.prototype.attached = function () {};
          this.attached = function () {
            return new Promise(function (resolve) {
              View.prototype.attached = attachedPrototype;
              _this2._rootView.attached();
              setTimeout(function () {
                return resolve();
              }, 0);
            });
          };

          this.detached = function () {
            return new Promise(function (resolve) {
              _this2._rootView.detached();
              setTimeout(function () {
                return resolve();
              }, 0);
            });
          };

          this.unbind = function () {
            return new Promise(function (resolve) {
              _this2._rootView.unbind();
              setTimeout(function () {
                return resolve();
              }, 0);
            });
          };
        };

        ComponentTester.prototype.waitForElement = function waitForElement(selector, options) {
          var _this3 = this;

          return waitFor(function () {
            return _this3.element.querySelector(selector);
          }, options);
        };

        ComponentTester.prototype.waitForElements = function waitForElements(selector, options) {
          var _this4 = this;

          return waitFor(function () {
            return _this4.element.querySelectorAll(selector);
          }, options);
        };

        return ComponentTester;
      }());

      _export('ComponentTester', ComponentTester);
    }
  };
});
'use strict';

System.register('node_modules/aurelia-testing/dist/system/wait.js', [], function (_export, _context) {
  "use strict";

  function waitFor(getter, options) {
    var timedOut = false;

    options = Object.assign({
      present: true,
      interval: 50,
      timeout: 5000
    }, options);

    function wait() {
      var element = getter();

      var found = element !== null && (!(element instanceof NodeList) && !element.jquery || element.length > 0);

      if (!options.present ^ found || timedOut) {
        return Promise.resolve(element);
      }

      return new Promise(function (rs) {
        return setTimeout(rs, options.interval);
      }).then(wait);
    }

    return Promise.race([new Promise(function (rs, rj) {
      return setTimeout(function () {
        timedOut = true;
        rj(options.present ? 'Element not found' : 'Element not removed');
      }, options.timeout);
    }), wait()]);
  }

  _export('waitFor', waitFor);

  function waitForDocumentElement(selector, options) {
    return waitFor(function () {
      return document.querySelector(selector);
    }, options);
  }

  _export('waitForDocumentElement', waitForDocumentElement);

  function waitForDocumentElements(selector, options) {
    return waitFor(function () {
      return document.querySelectorAll(selector);
    }, options);
  }

  _export('waitForDocumentElements', waitForDocumentElements);

  return {
    setters: [],
    execute: function () {}
  };
});
'use strict';

System.register('node_modules/aurelia-testing/dist/system/aurelia-testing.js', ['./compile-spy', './view-spy', './component-tester', './wait'], function (_export, _context) {
  "use strict";

  var CompileSpy, ViewSpy, StageComponent, ComponentTester, waitFor, waitForDocumentElement, waitForDocumentElements;

  function configure(config) {
    config.globalResources('./compile-spy', './view-spy');
  }

  return {
    setters: [function (_compileSpy) {
      CompileSpy = _compileSpy.CompileSpy;
    }, function (_viewSpy) {
      ViewSpy = _viewSpy.ViewSpy;
    }, function (_componentTester) {
      StageComponent = _componentTester.StageComponent;
      ComponentTester = _componentTester.ComponentTester;
    }, function (_wait) {
      waitFor = _wait.waitFor;
      waitForDocumentElement = _wait.waitForDocumentElement;
      waitForDocumentElements = _wait.waitForDocumentElements;
    }],
    execute: function () {
      _export('CompileSpy', CompileSpy);

      _export('ViewSpy', ViewSpy);

      _export('StageComponent', StageComponent);

      _export('ComponentTester', ComponentTester);

      _export('configure', configure);

      _export('waitFor', waitFor);

      _export('waitForDocumentElement', waitForDocumentElement);

      _export('waitForDocumentElements', waitForDocumentElements);
    }
  };
});
System.registerDynamic('node_modules/systemjs-plugin-text/text.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /*
    Text plugin
  */
  exports.translate = function (load) {
    if (this.builder && this.transpiler) {
      load.metadata.format = 'esm';
      return 'exp' + 'ort var __useDefault = true; exp' + 'ort default ' + JSON.stringify(load.source) + ';';
    }

    load.metadata.format = 'amd';
    return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(load.source) + ';\n});';
  };
});