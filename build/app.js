/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(2);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', init, false);
	function init() {
	  _controller2.default.init("adsdf");
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _javascriptStateMachine = __webpack_require__(3);
	
	var _javascriptStateMachine2 = _interopRequireDefault(_javascriptStateMachine);
	
	var _components = __webpack_require__(5);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Controller = new _javascriptStateMachine2.default({
	  transitions: [{
	    name: 'init',
	    from: 'none',
	    to: 'ready'
	  }, {
	    name: 'start',
	    from: 'ready',
	    to: 'starting'
	  }, {
	    name: 'search',
	    from: 'starting',
	    to: 'searching'
	  }, {
	    name: 'pause',
	    from: 'searching',
	    to: 'paused'
	  }, {
	    name: 'resume',
	    from: 'paused',
	    to: 'searching'
	  }, {
	    name: 'reset',
	    from: '*',
	    to: 'ready'
	  }],
	  methods: {
	    onBeforeTransition: function onBeforeTransition() {
	      console.log('onBeforeTransition => ' + this.state);
	      console.log(arguments);
	    },
	    onBeforeNone: function onBeforeNone() {
	      console.log('onBeforeNone => ' + this.state);
	      console.log(arguments);
	    },
	    onLeaveState: function onLeaveState() {
	      console.log('onLeaveState => ' + this.state);
	      console.log(arguments);
	    },
	    onLeaveNone: function onLeaveNone() {
	      console.log('onLeaveNone => ' + this.state);
	      _components2.default.forEach(function (component) {
	        component.init();
	      });
	      console.log(arguments);
	    },
	    onTransition: function onTransition() {
	      console.log('onTransition => ' + this.state);
	      console.log(arguments);
	    },
	    onEnterState: function onEnterState() {
	      console.log('onEnterState => ' + this.state);
	      console.log(arguments);
	    },
	    onEnterReady: function onEnterReady() {
	      console.log('onEnterReady => ' + this.state);
	      console.log(arguments);
	    },
	    onAfterTransition: function onAfterTransition() {
	      console.log('onAfterTransition => ' + this.state);
	      console.log(arguments);
	    },
	    onAfterInit: function onAfterInit() {
	      console.log('onAfterInit => ' + this.state);
	      console.log(arguments);
	    }
	  }
	});
	exports.default = Controller;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
	  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["StateMachine"] = factory();else root["StateMachine"] = factory();
	})(undefined, function () {
	  return (/******/function (modules) {
	      // webpackBootstrap
	      /******/ // The module cache
	      /******/var installedModules = {};
	      /******/
	      /******/ // The require function
	      /******/function __webpack_require__(moduleId) {
	        /******/
	        /******/ // Check if module is in cache
	        /******/if (installedModules[moduleId]) {
	          /******/return installedModules[moduleId].exports;
	          /******/
	        }
	        /******/ // Create a new module (and put it into the cache)
	        /******/var module = installedModules[moduleId] = {
	          /******/i: moduleId,
	          /******/l: false,
	          /******/exports: {}
	          /******/ };
	        /******/
	        /******/ // Execute the module function
	        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	        /******/
	        /******/ // Flag the module as loaded
	        /******/module.l = true;
	        /******/
	        /******/ // Return the exports of the module
	        /******/return module.exports;
	        /******/
	      }
	      /******/
	      /******/
	      /******/ // expose the modules object (__webpack_modules__)
	      /******/__webpack_require__.m = modules;
	      /******/
	      /******/ // expose the module cache
	      /******/__webpack_require__.c = installedModules;
	      /******/
	      /******/ // identity function for calling harmony imports with the correct context
	      /******/__webpack_require__.i = function (value) {
	        return value;
	      };
	      /******/
	      /******/ // define getter function for harmony exports
	      /******/__webpack_require__.d = function (exports, name, getter) {
	        /******/if (!__webpack_require__.o(exports, name)) {
	          /******/Object.defineProperty(exports, name, {
	            /******/configurable: false,
	            /******/enumerable: true,
	            /******/get: getter
	            /******/ });
	          /******/
	        }
	        /******/
	      };
	      /******/
	      /******/ // getDefaultExport function for compatibility with non-harmony modules
	      /******/__webpack_require__.n = function (module) {
	        /******/var getter = module && module.__esModule ?
	        /******/function getDefault() {
	          return module['default'];
	        } :
	        /******/function getModuleExports() {
	          return module;
	        };
	        /******/__webpack_require__.d(getter, 'a', getter);
	        /******/return getter;
	        /******/
	      };
	      /******/
	      /******/ // Object.prototype.hasOwnProperty.call
	      /******/__webpack_require__.o = function (object, property) {
	        return Object.prototype.hasOwnProperty.call(object, property);
	      };
	      /******/
	      /******/ // __webpack_public_path__
	      /******/__webpack_require__.p = "";
	      /******/
	      /******/ // Load entry module and return exports
	      /******/return __webpack_require__(__webpack_require__.s = 5);
	      /******/
	    }(
	    /************************************************************************/
	    /******/[
	    /* 0 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      module.exports = function (target, sources) {
	        var n, source, key;
	        for (n = 1; n < arguments.length; n++) {
	          source = arguments[n];
	          for (key in source) {
	            if (source.hasOwnProperty(key)) target[key] = source[key];
	          }
	        }
	        return target;
	      };
	
	      /***/
	    },
	    /* 1 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      //-------------------------------------------------------------------------------------------------
	
	      var mixin = __webpack_require__(0);
	
	      //-------------------------------------------------------------------------------------------------
	
	      module.exports = {
	
	        build: function build(target, config) {
	          var n,
	              max,
	              plugin,
	              plugins = config.plugins;
	          for (n = 0, max = plugins.length; n < max; n++) {
	            plugin = plugins[n];
	            if (plugin.methods) mixin(target, plugin.methods);
	            if (plugin.properties) Object.defineProperties(target, plugin.properties);
	          }
	        },
	
	        hook: function hook(fsm, name, additional) {
	          var n,
	              max,
	              method,
	              plugin,
	              plugins = fsm.config.plugins,
	              args = [fsm.context];
	
	          if (additional) args = args.concat(additional);
	
	          for (n = 0, max = plugins.length; n < max; n++) {
	            plugin = plugins[n];
	            method = plugins[n][name];
	            if (method) method.apply(plugin, args);
	          }
	        }
	
	        //-------------------------------------------------------------------------------------------------
	
	
	        /***/ };
	    },
	    /* 2 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      //-------------------------------------------------------------------------------------------------
	
	      function camelize(label) {
	
	        if (label.length === 0) return label;
	
	        var n,
	            result,
	            word,
	            words = label.split(/[_-]/);
	
	        // single word with first character already lowercase, return untouched
	        if (words.length === 1 && words[0][0].toLowerCase() === words[0][0]) return label;
	
	        result = words[0].toLowerCase();
	        for (n = 1; n < words.length; n++) {
	          result = result + words[n].charAt(0).toUpperCase() + words[n].substring(1).toLowerCase();
	        }
	
	        return result;
	      }
	
	      //-------------------------------------------------------------------------------------------------
	
	      camelize.prepended = function (prepend, label) {
	        label = camelize(label);
	        return prepend + label[0].toUpperCase() + label.substring(1);
	      };
	
	      //-------------------------------------------------------------------------------------------------
	
	      module.exports = camelize;
	
	      /***/
	    },
	    /* 3 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      //-------------------------------------------------------------------------------------------------
	
	      var mixin = __webpack_require__(0),
	          camelize = __webpack_require__(2);
	
	      //-------------------------------------------------------------------------------------------------
	
	      function Config(options, StateMachine) {
	
	        options = options || {};
	
	        this.options = options; // preserving original options can be useful (e.g visualize plugin)
	        this.defaults = StateMachine.defaults;
	        this.states = [];
	        this.transitions = [];
	        this.map = {};
	        this.lifecycle = this.configureLifecycle();
	        this.init = this.configureInitTransition(options.init);
	        this.data = this.configureData(options.data);
	        this.methods = this.configureMethods(options.methods);
	
	        this.map[this.defaults.wildcard] = {};
	
	        this.configureTransitions(options.transitions || []);
	
	        this.plugins = this.configurePlugins(options.plugins, StateMachine.plugin);
	      }
	
	      //-------------------------------------------------------------------------------------------------
	
	      mixin(Config.prototype, {
	
	        addState: function addState(name) {
	          if (!this.map[name]) {
	            this.states.push(name);
	            this.addStateLifecycleNames(name);
	            this.map[name] = {};
	          }
	        },
	
	        addStateLifecycleNames: function addStateLifecycleNames(name) {
	          this.lifecycle.onEnter[name] = camelize.prepended('onEnter', name);
	          this.lifecycle.onLeave[name] = camelize.prepended('onLeave', name);
	          this.lifecycle.on[name] = camelize.prepended('on', name);
	        },
	
	        addTransition: function addTransition(name) {
	          if (this.transitions.indexOf(name) < 0) {
	            this.transitions.push(name);
	            this.addTransitionLifecycleNames(name);
	          }
	        },
	
	        addTransitionLifecycleNames: function addTransitionLifecycleNames(name) {
	          this.lifecycle.onBefore[name] = camelize.prepended('onBefore', name);
	          this.lifecycle.onAfter[name] = camelize.prepended('onAfter', name);
	          this.lifecycle.on[name] = camelize.prepended('on', name);
	        },
	
	        mapTransition: function mapTransition(transition) {
	          var name = transition.name,
	              from = transition.from,
	              to = transition.to;
	          this.addState(from);
	          if (typeof to !== 'function') this.addState(to);
	          this.addTransition(name);
	          this.map[from][name] = transition;
	          return transition;
	        },
	
	        configureLifecycle: function configureLifecycle() {
	          return {
	            onBefore: { transition: 'onBeforeTransition' },
	            onAfter: { transition: 'onAfterTransition' },
	            onEnter: { state: 'onEnterState' },
	            onLeave: { state: 'onLeaveState' },
	            on: { transition: 'onTransition' }
	          };
	        },
	
	        configureInitTransition: function configureInitTransition(init) {
	          if (typeof init === 'string') {
	            return this.mapTransition(mixin({}, this.defaults.init, { to: init, active: true }));
	          } else if ((typeof init === 'undefined' ? 'undefined' : _typeof(init)) === 'object') {
	            return this.mapTransition(mixin({}, this.defaults.init, init, { active: true }));
	          } else {
	            this.addState(this.defaults.init.from);
	            return this.defaults.init;
	          }
	        },
	
	        configureData: function configureData(data) {
	          if (typeof data === 'function') return data;else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') return function () {
	            return data;
	          };else return function () {
	            return {};
	          };
	        },
	
	        configureMethods: function configureMethods(methods) {
	          return methods || {};
	        },
	
	        configurePlugins: function configurePlugins(plugins, builtin) {
	          plugins = plugins || [];
	          var n, max, plugin;
	          for (n = 0, max = plugins.length; n < max; n++) {
	            plugin = plugins[n];
	            if (typeof plugin === 'function') plugins[n] = plugin = plugin();
	            if (plugin.configure) plugin.configure(this);
	          }
	          return plugins;
	        },
	
	        configureTransitions: function configureTransitions(transitions) {
	          var i,
	              n,
	              transition,
	              from,
	              to,
	              wildcard = this.defaults.wildcard;
	          for (n = 0; n < transitions.length; n++) {
	            transition = transitions[n];
	            from = Array.isArray(transition.from) ? transition.from : [transition.from || wildcard];
	            to = transition.to || wildcard;
	            for (i = 0; i < from.length; i++) {
	              this.mapTransition({ name: transition.name, from: from[i], to: to });
	            }
	          }
	        },
	
	        transitionFor: function transitionFor(state, transition) {
	          var wildcard = this.defaults.wildcard;
	          return this.map[state][transition] || this.map[wildcard][transition];
	        },
	
	        transitionsFor: function transitionsFor(state) {
	          var wildcard = this.defaults.wildcard;
	          return Object.keys(this.map[state]).concat(Object.keys(this.map[wildcard]));
	        },
	
	        allStates: function allStates() {
	          return this.states;
	        },
	
	        allTransitions: function allTransitions() {
	          return this.transitions;
	        }
	
	      });
	
	      //-------------------------------------------------------------------------------------------------
	
	      module.exports = Config;
	
	      //-------------------------------------------------------------------------------------------------
	
	
	      /***/
	    },
	    /* 4 */
	    /***/function (module, exports, __webpack_require__) {
	
	      var mixin = __webpack_require__(0),
	          Exception = __webpack_require__(6),
	          plugin = __webpack_require__(1),
	          UNOBSERVED = [null, []];
	
	      //-------------------------------------------------------------------------------------------------
	
	      function JSM(context, config) {
	        this.context = context;
	        this.config = config;
	        this.state = config.init.from;
	        this.observers = [context];
	      }
	
	      //-------------------------------------------------------------------------------------------------
	
	      mixin(JSM.prototype, {
	
	        init: function init(args) {
	          mixin(this.context, this.config.data.apply(this.context, args));
	          plugin.hook(this, 'init');
	          if (this.config.init.active) return this.fire(this.config.init.name, []);
	        },
	
	        is: function is(state) {
	          return Array.isArray(state) ? state.indexOf(this.state) >= 0 : this.state === state;
	        },
	
	        isPending: function isPending() {
	          return this.pending;
	        },
	
	        can: function can(transition) {
	          return !this.isPending() && !!this.seek(transition);
	        },
	
	        cannot: function cannot(transition) {
	          return !this.can(transition);
	        },
	
	        allStates: function allStates() {
	          return this.config.allStates();
	        },
	
	        allTransitions: function allTransitions() {
	          return this.config.allTransitions();
	        },
	
	        transitions: function transitions() {
	          return this.config.transitionsFor(this.state);
	        },
	
	        seek: function seek(transition, args) {
	          var wildcard = this.config.defaults.wildcard,
	              entry = this.config.transitionFor(this.state, transition),
	              to = entry && entry.to;
	          if (typeof to === 'function') return to.apply(this.context, args);else if (to === wildcard) return this.state;else return to;
	        },
	
	        fire: function fire(transition, args) {
	          return this.transit(transition, this.state, this.seek(transition, args), args);
	        },
	
	        transit: function transit(transition, from, to, args) {
	
	          var lifecycle = this.config.lifecycle,
	              changed = this.config.options.observeUnchangedState || from !== to;
	
	          if (!to) return this.context.onInvalidTransition(transition, from, to);
	
	          if (this.isPending()) return this.context.onPendingTransition(transition, from, to);
	
	          this.config.addState(to); // might need to add this state if it's unknown (e.g. conditional transition or goto)
	
	          this.beginTransit();
	
	          args.unshift({ // this context will be passed to each lifecycle event observer
	            transition: transition,
	            from: from,
	            to: to,
	            fsm: this.context
	          });
	
	          return this.observeEvents([this.observersForEvent(lifecycle.onBefore.transition), this.observersForEvent(lifecycle.onBefore[transition]), changed ? this.observersForEvent(lifecycle.onLeave.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onLeave[from]) : UNOBSERVED, this.observersForEvent(lifecycle.on.transition), changed ? ['doTransit', [this]] : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter.state) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.onEnter[to]) : UNOBSERVED, changed ? this.observersForEvent(lifecycle.on[to]) : UNOBSERVED, this.observersForEvent(lifecycle.onAfter.transition), this.observersForEvent(lifecycle.onAfter[transition]), this.observersForEvent(lifecycle.on[transition])], args);
	        },
	
	        beginTransit: function beginTransit() {
	          this.pending = true;
	        },
	        endTransit: function endTransit(result) {
	          this.pending = false;return result;
	        },
	        failTransit: function failTransit(result) {
	          this.pending = false;throw result;
	        },
	        doTransit: function doTransit(lifecycle) {
	          this.state = lifecycle.to;
	        },
	
	        observe: function observe(args) {
	          if (args.length === 2) {
	            var observer = {};
	            observer[args[0]] = args[1];
	            this.observers.push(observer);
	          } else {
	            this.observers.push(args[0]);
	          }
	        },
	
	        observersForEvent: function observersForEvent(event) {
	          // TODO: this could be cached
	          var n = 0,
	              max = this.observers.length,
	              observer,
	              result = [];
	          for (; n < max; n++) {
	            observer = this.observers[n];
	            if (observer[event]) result.push(observer);
	          }
	          return [event, result, true];
	        },
	
	        observeEvents: function observeEvents(events, args, previousEvent, previousResult) {
	          if (events.length === 0) {
	            return this.endTransit(previousResult === undefined ? true : previousResult);
	          }
	
	          var event = events[0][0],
	              observers = events[0][1],
	              pluggable = events[0][2];
	
	          args[0].event = event;
	          if (event && pluggable && event !== previousEvent) plugin.hook(this, 'lifecycle', args);
	
	          if (observers.length === 0) {
	            events.shift();
	            return this.observeEvents(events, args, event, previousResult);
	          } else {
	            var observer = observers.shift(),
	                result = observer[event].apply(observer, args);
	            if (result && typeof result.then === 'function') {
	              return result.then(this.observeEvents.bind(this, events, args, event)).catch(this.failTransit.bind(this));
	            } else if (result === false) {
	              return this.endTransit(false);
	            } else {
	              return this.observeEvents(events, args, event, result);
	            }
	          }
	        },
	
	        onInvalidTransition: function onInvalidTransition(transition, from, to) {
	          throw new Exception("transition is invalid in current state", transition, from, to, this.state);
	        },
	
	        onPendingTransition: function onPendingTransition(transition, from, to) {
	          throw new Exception("transition is invalid while previous transition is still in progress", transition, from, to, this.state);
	        }
	
	      });
	
	      //-------------------------------------------------------------------------------------------------
	
	      module.exports = JSM;
	
	      //-------------------------------------------------------------------------------------------------
	
	
	      /***/
	    },
	    /* 5 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      //-----------------------------------------------------------------------------------------------
	
	      var mixin = __webpack_require__(0),
	          camelize = __webpack_require__(2),
	          plugin = __webpack_require__(1),
	          Config = __webpack_require__(3),
	          JSM = __webpack_require__(4);
	
	      //-----------------------------------------------------------------------------------------------
	
	      var PublicMethods = {
	        is: function is(state) {
	          return this._fsm.is(state);
	        },
	        can: function can(transition) {
	          return this._fsm.can(transition);
	        },
	        cannot: function cannot(transition) {
	          return this._fsm.cannot(transition);
	        },
	        observe: function observe() {
	          return this._fsm.observe(arguments);
	        },
	        transitions: function transitions() {
	          return this._fsm.transitions();
	        },
	        allTransitions: function allTransitions() {
	          return this._fsm.allTransitions();
	        },
	        allStates: function allStates() {
	          return this._fsm.allStates();
	        },
	        onInvalidTransition: function onInvalidTransition(t, from, to) {
	          return this._fsm.onInvalidTransition(t, from, to);
	        },
	        onPendingTransition: function onPendingTransition(t, from, to) {
	          return this._fsm.onPendingTransition(t, from, to);
	        }
	      };
	
	      var PublicProperties = {
	        state: {
	          configurable: false,
	          enumerable: true,
	          get: function get() {
	            return this._fsm.state;
	          },
	          set: function set(state) {
	            throw Error('use transitions to change state');
	          }
	        }
	
	        //-----------------------------------------------------------------------------------------------
	
	      };function StateMachine(options) {
	        return apply(this || {}, options);
	      }
	
	      function factory() {
	        var cstor, options;
	        if (typeof arguments[0] === 'function') {
	          cstor = arguments[0];
	          options = arguments[1] || {};
	        } else {
	          cstor = function cstor() {
	            this._fsm.apply(this, arguments);
	          };
	          options = arguments[0] || {};
	        }
	        var config = new Config(options, StateMachine);
	        build(cstor.prototype, config);
	        cstor.prototype._fsm.config = config; // convenience access to shared config without needing an instance
	        return cstor;
	      }
	
	      //-------------------------------------------------------------------------------------------------
	
	      function apply(instance, options) {
	        var config = new Config(options, StateMachine);
	        build(instance, config);
	        instance._fsm();
	        return instance;
	      }
	
	      function build(target, config) {
	        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || Array.isArray(target)) throw Error('StateMachine can only be applied to objects');
	        plugin.build(target, config);
	        Object.defineProperties(target, PublicProperties);
	        mixin(target, PublicMethods);
	        mixin(target, config.methods);
	        config.allTransitions().forEach(function (transition) {
	          target[camelize(transition)] = function () {
	            return this._fsm.fire(transition, [].slice.call(arguments));
	          };
	        });
	        target._fsm = function () {
	          this._fsm = new JSM(this, config);
	          this._fsm.init(arguments);
	        };
	      }
	
	      //-----------------------------------------------------------------------------------------------
	
	      StateMachine.version = '3.0.1';
	      StateMachine.factory = factory;
	      StateMachine.apply = apply;
	      StateMachine.defaults = {
	        wildcard: '*',
	        init: {
	          name: 'init',
	          from: 'none'
	        }
	
	        //===============================================================================================
	
	      };module.exports = StateMachine;
	
	      /***/
	    },
	    /* 6 */
	    /***/function (module, exports, __webpack_require__) {
	
	      "use strict";
	
	      module.exports = function (message, transition, from, to, current) {
	        this.message = message;
	        this.transition = transition;
	        this.from = from;
	        this.to = to;
	        this.current = current;
	      };
	
	      /***/
	    }]
	    /******/)
	  );
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _component = __webpack_require__(6);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _component3 = __webpack_require__(17);
	
	var _component4 = _interopRequireDefault(_component3);
	
	var _component5 = __webpack_require__(20);
	
	var _component6 = _interopRequireDefault(_component5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Components = [_component2.default, _component4.default, _component6.default];
	
	exports.default = Components;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _javascriptStateMachine = __webpack_require__(3);
	
	var _javascriptStateMachine2 = _interopRequireDefault(_javascriptStateMachine);
	
	var _template = __webpack_require__(7);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _mapParser = __webpack_require__(8);
	
	var _mapParser2 = _interopRequireDefault(_mapParser);
	
	var _mapBuilder = __webpack_require__(9);
	
	var _mapBuilder2 = _interopRequireDefault(_mapBuilder);
	
	var _Map = __webpack_require__(14);
	
	var _Map2 = _interopRequireDefault(_Map);
	
	var _jquery = __webpack_require__(15);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _baseComponent = __webpack_require__(16);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DebuggerComponent = new _javascriptStateMachine2.default(_jquery2.default.extend(_baseComponent2.default, {
	
	  methods: {
	    onLeaveNone: function onLeaveNone() {
	      (0, _jquery2.default)("#path-component").html(_template2.default);
	      this.bindEvents();
	    },
	    bindEvents: function bindEvents() {
	      var _this = this;
	
	      (0, _jquery2.default)(".path_component__load_algo").on('change', function (e) {
	        var debugFile = e.target.files[0];
	        _this.debugger = new Debugger(debugFile);
	      });
	    }
	  }
	}));
	
	exports.default = DebuggerComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var template = function template() {
	  return "\n  <input type = 'file' id='load-algo' />\n";
	};
	exports.default = template;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (file, callback) {
	    var mapReader = new FileReader();
	
	    mapReader.addEventListener("load", function (event) {
	        var textFile = event.target;
	        var data = textFile.result.split(/\n|\r\n/);
	
	        data.shift();
	
	        var height = Number(data.shift().split(' ').pop());
	        var width = Number(data.shift().split(' ').pop());
	        data.shift();
	        var mapStr = data.reduce(function (f, e) {
	            return f + e;
	        }, '');
	        console.log("mapData", width, height, mapStr);
	
	        var mapData = { height: height, width: width, mapStr: mapStr };
	        callback(mapData);
	    });
	
	    //Read the text file
	    mapReader.readAsText(file);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var async = __webpack_require__(10);
	var xmlns = "http://www.w3.org/2000/svg";
	var rects = [];
	var width = null;
	var height = null;
	var mapStr = null;
	var nodeSize = 30;
	var mapBuilder = function mapBuilder(mapData, callback) {
	  console.log(mapData);
	  mapStr = mapData.mapStr;
	  width = mapData.width;
	  height = mapData.height;
	  var tasks = [];
	  for (var i = 0; i < width; ++i) {
	    tasks.push(createRowTask(i));
	  }
	
	  Promise.all(tasks).then(function () {
	    var tmp = document.createElement("div");
	    var svg = document.createElementNS(xmlns, "svg");
	    svg.setAttributeNS(null, "width", nodeSize * width);
	    svg.setAttributeNS(null, "height", nodeSize * height);
	    rects.flat().forEach(function (rect) {
	      svg.appendChild(rect);
	    });
	    tmp.append(svg);
	    var domString = tmp.innerHTML;
	    callback(domString);
	  });
	};
	var createRowTask = function createRowTask(rowId) {
	  return new Promise(function (resolve, reject) {
	    rects[rowId] = [];
	    for (var colId = 0; colId < width; ++colId) {
	      var x = colId * nodeSize;
	      var y = rowId * nodeSize;
	      var stringIndex = rowId * width + colId;
	      var fillColor = 'white';
	      if (mapStr[stringIndex] == '@') {
	        fillColor = 'grey';
	      }
	      var elem = document.createElementNS(xmlns, "rect");
	
	      elem.setAttributeNS(null, "x", x);
	      elem.setAttributeNS(null, "y", y);
	      elem.setAttributeNS(null, "width", nodeSize);
	      elem.setAttributeNS(null, "height", nodeSize);
	      elem.setAttributeNS(null, "fill", fillColor);
	      elem.setAttributeNS(null, "stroke", "black");
	      elem.setAttributeNS(null, "stroke-width", 0.1);
	      rects[rowId].push(elem);
	    }
	    resolve();
	  });
	};
	
	exports.default = mapBuilder;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(setImmediate, process, global, module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.async = global.async || {});
	})(undefined, function (exports) {
	    'use strict';
	
	    function slice(arrayLike, start) {
	        start = start | 0;
	        var newLen = Math.max(arrayLike.length - start, 0);
	        var newArr = Array(newLen);
	        for (var idx = 0; idx < newLen; idx++) {
	            newArr[idx] = arrayLike[start + idx];
	        }
	        return newArr;
	    }
	
	    /**
	     * Creates a continuation function with some arguments already applied.
	     *
	     * Useful as a shorthand when combined with other control flow functions. Any
	     * arguments passed to the returned function are added to the arguments
	     * originally passed to apply.
	     *
	     * @name apply
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {Function} fn - The function you want to eventually apply all
	     * arguments to. Invokes with (arguments...).
	     * @param {...*} arguments... - Any number of arguments to automatically apply
	     * when the continuation is called.
	     * @returns {Function} the partially-applied function
	     * @example
	     *
	     * // using apply
	     * async.parallel([
	     *     async.apply(fs.writeFile, 'testfile1', 'test1'),
	     *     async.apply(fs.writeFile, 'testfile2', 'test2')
	     * ]);
	     *
	     *
	     * // the same process without using apply
	     * async.parallel([
	     *     function(callback) {
	     *         fs.writeFile('testfile1', 'test1', callback);
	     *     },
	     *     function(callback) {
	     *         fs.writeFile('testfile2', 'test2', callback);
	     *     }
	     * ]);
	     *
	     * // It's possible to pass any number of additional arguments when calling the
	     * // continuation:
	     *
	     * node> var fn = async.apply(sys.puts, 'one');
	     * node> fn('two', 'three');
	     * one
	     * two
	     * three
	     */
	    var apply = function apply(fn /*, ...args*/) {
	        var args = slice(arguments, 1);
	        return function () /*callArgs*/{
	            var callArgs = slice(arguments);
	            return fn.apply(null, args.concat(callArgs));
	        };
	    };
	
	    var initialParams = function initialParams(fn) {
	        return function () /*...args, callback*/{
	            var args = slice(arguments);
	            var callback = args.pop();
	            fn.call(this, args, callback);
	        };
	    };
	
	    /**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
	    function isObject(value) {
	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	        return value != null && (type == 'object' || type == 'function');
	    }
	
	    var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
	    var hasNextTick = (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof process.nextTick === 'function';
	
	    function fallback(fn) {
	        setTimeout(fn, 0);
	    }
	
	    function wrap(defer) {
	        return function (fn /*, ...args*/) {
	            var args = slice(arguments, 1);
	            defer(function () {
	                fn.apply(null, args);
	            });
	        };
	    }
	
	    var _defer;
	
	    if (hasSetImmediate) {
	        _defer = setImmediate;
	    } else if (hasNextTick) {
	        _defer = process.nextTick;
	    } else {
	        _defer = fallback;
	    }
	
	    var setImmediate$1 = wrap(_defer);
	
	    /**
	     * Take a sync function and make it async, passing its return value to a
	     * callback. This is useful for plugging sync functions into a waterfall,
	     * series, or other async functions. Any arguments passed to the generated
	     * function will be passed to the wrapped function (except for the final
	     * callback argument). Errors thrown will be passed to the callback.
	     *
	     * If the function passed to `asyncify` returns a Promise, that promises's
	     * resolved/rejected state will be used to call the callback, rather than simply
	     * the synchronous return value.
	     *
	     * This also means you can asyncify ES2017 `async` functions.
	     *
	     * @name asyncify
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @alias wrapSync
	     * @category Util
	     * @param {Function} func - The synchronous function, or Promise-returning
	     * function to convert to an {@link AsyncFunction}.
	     * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
	     * invoked with `(args..., callback)`.
	     * @example
	     *
	     * // passing a regular synchronous function
	     * async.waterfall([
	     *     async.apply(fs.readFile, filename, "utf8"),
	     *     async.asyncify(JSON.parse),
	     *     function (data, next) {
	     *         // data is the result of parsing the text.
	     *         // If there was a parsing error, it would have been caught.
	     *     }
	     * ], callback);
	     *
	     * // passing a function returning a promise
	     * async.waterfall([
	     *     async.apply(fs.readFile, filename, "utf8"),
	     *     async.asyncify(function (contents) {
	     *         return db.model.create(contents);
	     *     }),
	     *     function (model, next) {
	     *         // `model` is the instantiated model object.
	     *         // If there was an error, this function would be skipped.
	     *     }
	     * ], callback);
	     *
	     * // es2017 example, though `asyncify` is not needed if your JS environment
	     * // supports async functions out of the box
	     * var q = async.queue(async.asyncify(async function(file) {
	     *     var intermediateStep = await processFile(file);
	     *     return await somePromise(intermediateStep)
	     * }));
	     *
	     * q.push(files);
	     */
	    function asyncify(func) {
	        return initialParams(function (args, callback) {
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (isObject(result) && typeof result.then === 'function') {
	                result.then(function (value) {
	                    invokeCallback(callback, null, value);
	                }, function (err) {
	                    invokeCallback(callback, err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    }
	
	    function invokeCallback(callback, error, value) {
	        try {
	            callback(error, value);
	        } catch (e) {
	            setImmediate$1(rethrow, e);
	        }
	    }
	
	    function rethrow(error) {
	        throw error;
	    }
	
	    var supportsSymbol = typeof Symbol === 'function';
	
	    function isAsync(fn) {
	        return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
	    }
	
	    function wrapAsync(asyncFn) {
	        return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
	    }
	
	    function applyEach$1(eachfn) {
	        return function (fns /*, ...args*/) {
	            var args = slice(arguments, 1);
	            var go = initialParams(function (args, callback) {
	                var that = this;
	                return eachfn(fns, function (fn, cb) {
	                    wrapAsync(fn).apply(that, args.concat(cb));
	                }, callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            } else {
	                return go;
	            }
	        };
	    }
	
	    /** Detect free variable `global` from Node.js. */
	    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	    /** Detect free variable `self`. */
	    var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	    /** Used as a reference to the global object. */
	    var root = freeGlobal || freeSelf || Function('return this')();
	
	    /** Built-in value references. */
	    var Symbol$1 = root.Symbol;
	
	    /** Used for built-in method references. */
	    var objectProto = Object.prototype;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;
	
	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var nativeObjectToString = objectProto.toString;
	
	    /** Built-in value references. */
	    var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
	
	    /**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */
	    function getRawTag(value) {
	        var isOwn = hasOwnProperty.call(value, symToStringTag$1),
	            tag = value[symToStringTag$1];
	
	        try {
	            value[symToStringTag$1] = undefined;
	            var unmasked = true;
	        } catch (e) {}
	
	        var result = nativeObjectToString.call(value);
	        if (unmasked) {
	            if (isOwn) {
	                value[symToStringTag$1] = tag;
	            } else {
	                delete value[symToStringTag$1];
	            }
	        }
	        return result;
	    }
	
	    /** Used for built-in method references. */
	    var objectProto$1 = Object.prototype;
	
	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var nativeObjectToString$1 = objectProto$1.toString;
	
	    /**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */
	    function objectToString(value) {
	        return nativeObjectToString$1.call(value);
	    }
	
	    /** `Object#toString` result references. */
	    var nullTag = '[object Null]';
	    var undefinedTag = '[object Undefined]';
	
	    /** Built-in value references. */
	    var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
	
	    /**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    function baseGetTag(value) {
	        if (value == null) {
	            return value === undefined ? undefinedTag : nullTag;
	        }
	        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	    }
	
	    /** `Object#toString` result references. */
	    var asyncTag = '[object AsyncFunction]';
	    var funcTag = '[object Function]';
	    var genTag = '[object GeneratorFunction]';
	    var proxyTag = '[object Proxy]';
	
	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	        if (!isObject(value)) {
	            return false;
	        }
	        // The use of `Object#toString` avoids issues with the `typeof` operator
	        // in Safari 9 which returns 'object' for typed arrays and other constructors.
	        var tag = baseGetTag(value);
	        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	    }
	
	    /** Used as references for various `Number` constants. */
	    var MAX_SAFE_INTEGER = 9007199254740991;
	
	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
	    function isLength(value) {
	        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }
	
	    /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
	    function isArrayLike(value) {
	        return value != null && isLength(value.length) && !isFunction(value);
	    }
	
	    // A temporary value used to identify if the loop should be broken.
	    // See #1064, #1293
	    var breakLoop = {};
	
	    /**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */
	    function noop() {
	        // No operation performed.
	    }
	
	    function once(fn) {
	        return function () {
	            if (fn === null) return;
	            var callFn = fn;
	            fn = null;
	            callFn.apply(this, arguments);
	        };
	    }
	
	    var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;
	
	    var getIterator = function getIterator(coll) {
	        return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
	    };
	
	    /**
	     * The base implementation of `_.times` without support for iteratee shorthands
	     * or max array length checks.
	     *
	     * @private
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     */
	    function baseTimes(n, iteratee) {
	        var index = -1,
	            result = Array(n);
	
	        while (++index < n) {
	            result[index] = iteratee(index);
	        }
	        return result;
	    }
	
	    /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
	    function isObjectLike(value) {
	        return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	    }
	
	    /** `Object#toString` result references. */
	    var argsTag = '[object Arguments]';
	
	    /**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */
	    function baseIsArguments(value) {
	        return isObjectLike(value) && baseGetTag(value) == argsTag;
	    }
	
	    /** Used for built-in method references. */
	    var objectProto$3 = Object.prototype;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
	
	    /** Built-in value references. */
	    var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
	
	    /**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    var isArguments = baseIsArguments(function () {
	        return arguments;
	    }()) ? baseIsArguments : function (value) {
	        return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    };
	
	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */
	    var isArray = Array.isArray;
	
	    /**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */
	    function stubFalse() {
	        return false;
	    }
	
	    /** Detect free variable `exports`. */
	    var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	    /** Detect free variable `module`. */
	    var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	    /** Detect the popular CommonJS extension `module.exports`. */
	    var moduleExports = freeModule && freeModule.exports === freeExports;
	
	    /** Built-in value references. */
	    var Buffer = moduleExports ? root.Buffer : undefined;
	
	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	    /**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */
	    var isBuffer = nativeIsBuffer || stubFalse;
	
	    /** Used as references for various `Number` constants. */
	    var MAX_SAFE_INTEGER$1 = 9007199254740991;
	
	    /** Used to detect unsigned integer values. */
	    var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	        length = length == null ? MAX_SAFE_INTEGER$1 : length;
	
	        return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	    }
	
	    /** `Object#toString` result references. */
	    var argsTag$1 = '[object Arguments]';
	    var arrayTag = '[object Array]';
	    var boolTag = '[object Boolean]';
	    var dateTag = '[object Date]';
	    var errorTag = '[object Error]';
	    var funcTag$1 = '[object Function]';
	    var mapTag = '[object Map]';
	    var numberTag = '[object Number]';
	    var objectTag = '[object Object]';
	    var regexpTag = '[object RegExp]';
	    var setTag = '[object Set]';
	    var stringTag = '[object String]';
	    var weakMapTag = '[object WeakMap]';
	
	    var arrayBufferTag = '[object ArrayBuffer]';
	    var dataViewTag = '[object DataView]';
	    var float32Tag = '[object Float32Array]';
	    var float64Tag = '[object Float64Array]';
	    var int8Tag = '[object Int8Array]';
	    var int16Tag = '[object Int16Array]';
	    var int32Tag = '[object Int32Array]';
	    var uint8Tag = '[object Uint8Array]';
	    var uint8ClampedTag = '[object Uint8ClampedArray]';
	    var uint16Tag = '[object Uint16Array]';
	    var uint32Tag = '[object Uint32Array]';
	
	    /** Used to identify `toStringTag` values of typed arrays. */
	    var typedArrayTags = {};
	    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	    typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	    /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */
	    function baseIsTypedArray(value) {
	        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	    }
	
	    /**
	     * The base implementation of `_.unary` without support for storing metadata.
	     *
	     * @private
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     */
	    function baseUnary(func) {
	        return function (value) {
	            return func(value);
	        };
	    }
	
	    /** Detect free variable `exports`. */
	    var freeExports$1 = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	    /** Detect free variable `module`. */
	    var freeModule$1 = freeExports$1 && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	    /** Detect the popular CommonJS extension `module.exports`. */
	    var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
	
	    /** Detect free variable `process` from Node.js. */
	    var freeProcess = moduleExports$1 && freeGlobal.process;
	
	    /** Used to access faster Node.js helpers. */
	    var nodeUtil = function () {
	        try {
	            // Use `util.types` for Node.js 10+.
	            var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;
	
	            if (types) {
	                return types;
	            }
	
	            // Legacy `process.binding('util')` for Node.js < 10.
	            return freeProcess && freeProcess.binding && freeProcess.binding('util');
	        } catch (e) {}
	    }();
	
	    /* Node.js helper references. */
	    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	    /** Used for built-in method references. */
	    var objectProto$2 = Object.prototype;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
	
	    /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */
	    function arrayLikeKeys(value, inherited) {
	        var isArr = isArray(value),
	            isArg = !isArr && isArguments(value),
	            isBuff = !isArr && !isArg && isBuffer(value),
	            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	            skipIndexes = isArr || isArg || isBuff || isType,
	            result = skipIndexes ? baseTimes(value.length, String) : [],
	            length = result.length;
	
	        for (var key in value) {
	            if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (
	            // Safari 9 has enumerable `arguments.length` in strict mode.
	            key == 'length' ||
	            // Node.js 0.10 has enumerable non-index properties on buffers.
	            isBuff && (key == 'offset' || key == 'parent') ||
	            // PhantomJS 2 has enumerable non-index properties on typed arrays.
	            isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	            // Skip index properties.
	            isIndex(key, length)))) {
	                result.push(key);
	            }
	        }
	        return result;
	    }
	
	    /** Used for built-in method references. */
	    var objectProto$5 = Object.prototype;
	
	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	        var Ctor = value && value.constructor,
	            proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
	
	        return value === proto;
	    }
	
	    /**
	     * Creates a unary function that invokes `func` with its argument transformed.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {Function} transform The argument transform.
	     * @returns {Function} Returns the new function.
	     */
	    function overArg(func, transform) {
	        return function (arg) {
	            return func(transform(arg));
	        };
	    }
	
	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeKeys = overArg(Object.keys, Object);
	
	    /** Used for built-in method references. */
	    var objectProto$4 = Object.prototype;
	
	    /** Used to check objects for own properties. */
	    var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
	
	    /**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	        if (!isPrototype(object)) {
	            return nativeKeys(object);
	        }
	        var result = [];
	        for (var key in Object(object)) {
	            if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	                result.push(key);
	            }
	        }
	        return result;
	    }
	
	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    function keys(object) {
	        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	    }
	
	    function createArrayIterator(coll) {
	        var i = -1;
	        var len = coll.length;
	        return function next() {
	            return ++i < len ? { value: coll[i], key: i } : null;
	        };
	    }
	
	    function createES2015Iterator(iterator) {
	        var i = -1;
	        return function next() {
	            var item = iterator.next();
	            if (item.done) return null;
	            i++;
	            return { value: item.value, key: i };
	        };
	    }
	
	    function createObjectIterator(obj) {
	        var okeys = keys(obj);
	        var i = -1;
	        var len = okeys.length;
	        return function next() {
	            var key = okeys[++i];
	            return i < len ? { value: obj[key], key: key } : null;
	        };
	    }
	
	    function iterator(coll) {
	        if (isArrayLike(coll)) {
	            return createArrayIterator(coll);
	        }
	
	        var iterator = getIterator(coll);
	        return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
	    }
	
	    function onlyOnce(fn) {
	        return function () {
	            if (fn === null) throw new Error("Callback was already called.");
	            var callFn = fn;
	            fn = null;
	            callFn.apply(this, arguments);
	        };
	    }
	
	    function _eachOfLimit(limit) {
	        return function (obj, iteratee, callback) {
	            callback = once(callback || noop);
	            if (limit <= 0 || !obj) {
	                return callback(null);
	            }
	            var nextElem = iterator(obj);
	            var done = false;
	            var running = 0;
	            var looping = false;
	
	            function iterateeCallback(err, value) {
	                running -= 1;
	                if (err) {
	                    done = true;
	                    callback(err);
	                } else if (value === breakLoop || done && running <= 0) {
	                    done = true;
	                    return callback(null);
	                } else if (!looping) {
	                    replenish();
	                }
	            }
	
	            function replenish() {
	                looping = true;
	                while (running < limit && !done) {
	                    var elem = nextElem();
	                    if (elem === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
	                }
	                looping = false;
	            }
	
	            replenish();
	        };
	    }
	
	    /**
	     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name eachOfLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.eachOf]{@link module:Collections.eachOf}
	     * @alias forEachOfLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async function to apply to each
	     * item in `coll`. The `key` is the item's key, or index in the case of an
	     * array.
	     * Invoked with (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    function eachOfLimit(coll, limit, iteratee, callback) {
	        _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
	    }
	
	    function doLimit(fn, limit) {
	        return function (iterable, iteratee, callback) {
	            return fn(iterable, limit, iteratee, callback);
	        };
	    }
	
	    // eachOf implementation optimized for array-likes
	    function eachOfArrayLike(coll, iteratee, callback) {
	        callback = once(callback || noop);
	        var index = 0,
	            completed = 0,
	            length = coll.length;
	        if (length === 0) {
	            callback(null);
	        }
	
	        function iteratorCallback(err, value) {
	            if (err) {
	                callback(err);
	            } else if (++completed === length || value === breakLoop) {
	                callback(null);
	            }
	        }
	
	        for (; index < length; index++) {
	            iteratee(coll[index], index, onlyOnce(iteratorCallback));
	        }
	    }
	
	    // a generic version of eachOf which can handle array, object, and iterator cases.
	    var eachOfGeneric = doLimit(eachOfLimit, Infinity);
	
	    /**
	     * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
	     * to the iteratee.
	     *
	     * @name eachOf
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias forEachOf
	     * @category Collection
	     * @see [async.each]{@link module:Collections.each}
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A function to apply to each
	     * item in `coll`.
	     * The `key` is the item's key, or index in the case of an array.
	     * Invoked with (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     * @example
	     *
	     * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
	     * var configs = {};
	     *
	     * async.forEachOf(obj, function (value, key, callback) {
	     *     fs.readFile(__dirname + value, "utf8", function (err, data) {
	     *         if (err) return callback(err);
	     *         try {
	     *             configs[key] = JSON.parse(data);
	     *         } catch (e) {
	     *             return callback(e);
	     *         }
	     *         callback();
	     *     });
	     * }, function (err) {
	     *     if (err) console.error(err.message);
	     *     // configs is now a map of JSON data
	     *     doSomethingWith(configs);
	     * });
	     */
	    var eachOf = function eachOf(coll, iteratee, callback) {
	        var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
	        eachOfImplementation(coll, wrapAsync(iteratee), callback);
	    };
	
	    function doParallel(fn) {
	        return function (obj, iteratee, callback) {
	            return fn(eachOf, obj, wrapAsync(iteratee), callback);
	        };
	    }
	
	    function _asyncMap(eachfn, arr, iteratee, callback) {
	        callback = callback || noop;
	        arr = arr || [];
	        var results = [];
	        var counter = 0;
	        var _iteratee = wrapAsync(iteratee);
	
	        eachfn(arr, function (value, _, callback) {
	            var index = counter++;
	            _iteratee(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    /**
	     * Produces a new collection of values by mapping each value in `coll` through
	     * the `iteratee` function. The `iteratee` is called with an item from `coll`
	     * and a callback for when it has finished processing. Each of these callback
	     * takes 2 arguments: an `error`, and the transformed item from `coll`. If
	     * `iteratee` passes an error to its callback, the main `callback` (for the
	     * `map` function) is immediately called with the error.
	     *
	     * Note, that since this function applies the `iteratee` to each item in
	     * parallel, there is no guarantee that the `iteratee` functions will complete
	     * in order. However, the results array will be in the same order as the
	     * original `coll`.
	     *
	     * If `map` is passed an Object, the results will be an Array.  The results
	     * will roughly be in the order of the original Objects' keys (but this can
	     * vary across JavaScript engines).
	     *
	     * @name map
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with the transformed item.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an Array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     * @example
	     *
	     * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
	     *     // results is now an array of stats for each file
	     * });
	     */
	    var map = doParallel(_asyncMap);
	
	    /**
	     * Applies the provided arguments to each function in the array, calling
	     * `callback` after all functions have completed. If you only provide the first
	     * argument, `fns`, then it will return a function which lets you pass in the
	     * arguments as if it were a single function call. If more arguments are
	     * provided, `callback` is required while `args` is still optional.
	     *
	     * @name applyEach
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
	     * to all call with the same arguments
	     * @param {...*} [args] - any number of separate arguments to pass to the
	     * function.
	     * @param {Function} [callback] - the final argument should be the callback,
	     * called when all functions have completed processing.
	     * @returns {Function} - If only the first argument, `fns`, is provided, it will
	     * return a function which lets you pass in the arguments as if it were a single
	     * function call. The signature is `(..args, callback)`. If invoked with any
	     * arguments, `callback` is required.
	     * @example
	     *
	     * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
	     *
	     * // partial application example:
	     * async.each(
	     *     buckets,
	     *     async.applyEach([enableSearch, updateSchema]),
	     *     callback
	     * );
	     */
	    var applyEach = applyEach$1(map);
	
	    function doParallelLimit(fn) {
	        return function (obj, limit, iteratee, callback) {
	            return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
	        };
	    }
	
	    /**
	     * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name mapLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with the transformed item.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     */
	    var mapLimit = doParallelLimit(_asyncMap);
	
	    /**
	     * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
	     *
	     * @name mapSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with the transformed item.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Results is an array of the
	     * transformed items from the `coll`. Invoked with (err, results).
	     */
	    var mapSeries = doLimit(mapLimit, 1);
	
	    /**
	     * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
	     *
	     * @name applyEachSeries
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.applyEach]{@link module:ControlFlow.applyEach}
	     * @category Control Flow
	     * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
	     * call with the same arguments
	     * @param {...*} [args] - any number of separate arguments to pass to the
	     * function.
	     * @param {Function} [callback] - the final argument should be the callback,
	     * called when all functions have completed processing.
	     * @returns {Function} - If only the first argument is provided, it will return
	     * a function which lets you pass in the arguments as if it were a single
	     * function call.
	     */
	    var applyEachSeries = applyEach$1(mapSeries);
	
	    /**
	     * A specialized version of `_.forEach` for arrays without support for
	     * iteratee shorthands.
	     *
	     * @private
	     * @param {Array} [array] The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	        var index = -1,
	            length = array == null ? 0 : array.length;
	
	        while (++index < length) {
	            if (iteratee(array[index], index, array) === false) {
	                break;
	            }
	        }
	        return array;
	    }
	
	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	        return function (object, iteratee, keysFunc) {
	            var index = -1,
	                iterable = Object(object),
	                props = keysFunc(object),
	                length = props.length;
	
	            while (length--) {
	                var key = props[fromRight ? length : ++index];
	                if (iteratee(iterable[key], key, iterable) === false) {
	                    break;
	                }
	            }
	            return object;
	        };
	    }
	
	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();
	
	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	        return object && baseFor(object, iteratee, keys);
	    }
	
	    /**
	     * The base implementation of `_.findIndex` and `_.findLastIndex` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {number} fromIndex The index to search from.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function baseFindIndex(array, predicate, fromIndex, fromRight) {
	        var length = array.length,
	            index = fromIndex + (fromRight ? 1 : -1);
	
	        while (fromRight ? index-- : ++index < length) {
	            if (predicate(array[index], index, array)) {
	                return index;
	            }
	        }
	        return -1;
	    }
	
	    /**
	     * The base implementation of `_.isNaN` without support for number objects.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     */
	    function baseIsNaN(value) {
	        return value !== value;
	    }
	
	    /**
	     * A specialized version of `_.indexOf` which performs strict equality
	     * comparisons of values, i.e. `===`.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} fromIndex The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function strictIndexOf(array, value, fromIndex) {
	        var index = fromIndex - 1,
	            length = array.length;
	
	        while (++index < length) {
	            if (array[index] === value) {
	                return index;
	            }
	        }
	        return -1;
	    }
	
	    /**
	     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} fromIndex The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function baseIndexOf(array, value, fromIndex) {
	        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	    }
	
	    /**
	     * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
	     * their requirements. Each function can optionally depend on other functions
	     * being completed first, and each function is run as soon as its requirements
	     * are satisfied.
	     *
	     * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
	     * will stop. Further tasks will not execute (so any other functions depending
	     * on it will not run), and the main `callback` is immediately called with the
	     * error.
	     *
	     * {@link AsyncFunction}s also receive an object containing the results of functions which
	     * have completed so far as the first argument, if they have dependencies. If a
	     * task function has no dependencies, it will only be passed a callback.
	     *
	     * @name auto
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Object} tasks - An object. Each of its properties is either a
	     * function or an array of requirements, with the {@link AsyncFunction} itself the last item
	     * in the array. The object's key of a property serves as the name of the task
	     * defined by that property, i.e. can be used when specifying requirements for
	     * other tasks. The function receives one or two arguments:
	     * * a `results` object, containing the results of the previously executed
	     *   functions, only passed if the task has any dependencies,
	     * * a `callback(err, result)` function, which must be called when finished,
	     *   passing an `error` (which can be `null`) and the result of the function's
	     *   execution.
	     * @param {number} [concurrency=Infinity] - An optional `integer` for
	     * determining the maximum number of tasks that can be run in parallel. By
	     * default, as many as possible.
	     * @param {Function} [callback] - An optional callback which is called when all
	     * the tasks have been completed. It receives the `err` argument if any `tasks`
	     * pass an error to their callback. Results are always returned; however, if an
	     * error occurs, no further `tasks` will be performed, and the results object
	     * will only contain partial results. Invoked with (err, results).
	     * @returns undefined
	     * @example
	     *
	     * async.auto({
	     *     // this function will just be passed a callback
	     *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
	     *     showData: ['readData', function(results, cb) {
	     *         // results.readData is the file's contents
	     *         // ...
	     *     }]
	     * }, callback);
	     *
	     * async.auto({
	     *     get_data: function(callback) {
	     *         console.log('in get_data');
	     *         // async code to get some data
	     *         callback(null, 'data', 'converted to array');
	     *     },
	     *     make_folder: function(callback) {
	     *         console.log('in make_folder');
	     *         // async code to create a directory to store a file in
	     *         // this is run at the same time as getting the data
	     *         callback(null, 'folder');
	     *     },
	     *     write_file: ['get_data', 'make_folder', function(results, callback) {
	     *         console.log('in write_file', JSON.stringify(results));
	     *         // once there is some data and the directory exists,
	     *         // write the data to a file in the directory
	     *         callback(null, 'filename');
	     *     }],
	     *     email_link: ['write_file', function(results, callback) {
	     *         console.log('in email_link', JSON.stringify(results));
	     *         // once the file is written let's email a link to it...
	     *         // results.write_file contains the filename returned by write_file.
	     *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
	     *     }]
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('results = ', results);
	     * });
	     */
	    var auto = function auto(tasks, concurrency, callback) {
	        if (typeof concurrency === 'function') {
	            // concurrency is optional, shift the args.
	            callback = concurrency;
	            concurrency = null;
	        }
	        callback = once(callback || noop);
	        var keys$$1 = keys(tasks);
	        var numTasks = keys$$1.length;
	        if (!numTasks) {
	            return callback(null);
	        }
	        if (!concurrency) {
	            concurrency = numTasks;
	        }
	
	        var results = {};
	        var runningTasks = 0;
	        var hasError = false;
	
	        var listeners = Object.create(null);
	
	        var readyTasks = [];
	
	        // for cycle detection:
	        var readyToCheck = []; // tasks that have been identified as reachable
	        // without the possibility of returning to an ancestor task
	        var uncheckedDependencies = {};
	
	        baseForOwn(tasks, function (task, key) {
	            if (!isArray(task)) {
	                // no dependencies
	                enqueueTask(key, [task]);
	                readyToCheck.push(key);
	                return;
	            }
	
	            var dependencies = task.slice(0, task.length - 1);
	            var remainingDependencies = dependencies.length;
	            if (remainingDependencies === 0) {
	                enqueueTask(key, task);
	                readyToCheck.push(key);
	                return;
	            }
	            uncheckedDependencies[key] = remainingDependencies;
	
	            arrayEach(dependencies, function (dependencyName) {
	                if (!tasks[dependencyName]) {
	                    throw new Error('async.auto task `' + key + '` has a non-existent dependency `' + dependencyName + '` in ' + dependencies.join(', '));
	                }
	                addListener(dependencyName, function () {
	                    remainingDependencies--;
	                    if (remainingDependencies === 0) {
	                        enqueueTask(key, task);
	                    }
	                });
	            });
	        });
	
	        checkForDeadlocks();
	        processQueue();
	
	        function enqueueTask(key, task) {
	            readyTasks.push(function () {
	                runTask(key, task);
	            });
	        }
	
	        function processQueue() {
	            if (readyTasks.length === 0 && runningTasks === 0) {
	                return callback(null, results);
	            }
	            while (readyTasks.length && runningTasks < concurrency) {
	                var run = readyTasks.shift();
	                run();
	            }
	        }
	
	        function addListener(taskName, fn) {
	            var taskListeners = listeners[taskName];
	            if (!taskListeners) {
	                taskListeners = listeners[taskName] = [];
	            }
	
	            taskListeners.push(fn);
	        }
	
	        function taskComplete(taskName) {
	            var taskListeners = listeners[taskName] || [];
	            arrayEach(taskListeners, function (fn) {
	                fn();
	            });
	            processQueue();
	        }
	
	        function runTask(key, task) {
	            if (hasError) return;
	
	            var taskCallback = onlyOnce(function (err, result) {
	                runningTasks--;
	                if (arguments.length > 2) {
	                    result = slice(arguments, 1);
	                }
	                if (err) {
	                    var safeResults = {};
	                    baseForOwn(results, function (val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[key] = result;
	                    hasError = true;
	                    listeners = Object.create(null);
	
	                    callback(err, safeResults);
	                } else {
	                    results[key] = result;
	                    taskComplete(key);
	                }
	            });
	
	            runningTasks++;
	            var taskFn = wrapAsync(task[task.length - 1]);
	            if (task.length > 1) {
	                taskFn(results, taskCallback);
	            } else {
	                taskFn(taskCallback);
	            }
	        }
	
	        function checkForDeadlocks() {
	            // Kahn's algorithm
	            // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
	            // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
	            var currentTask;
	            var counter = 0;
	            while (readyToCheck.length) {
	                currentTask = readyToCheck.pop();
	                counter++;
	                arrayEach(getDependents(currentTask), function (dependent) {
	                    if (--uncheckedDependencies[dependent] === 0) {
	                        readyToCheck.push(dependent);
	                    }
	                });
	            }
	
	            if (counter !== numTasks) {
	                throw new Error('async.auto cannot execute tasks due to a recursive dependency');
	            }
	        }
	
	        function getDependents(taskName) {
	            var result = [];
	            baseForOwn(tasks, function (task, key) {
	                if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
	                    result.push(key);
	                }
	            });
	            return result;
	        }
	    };
	
	    /**
	     * A specialized version of `_.map` for arrays without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} [array] The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	        var index = -1,
	            length = array == null ? 0 : array.length,
	            result = Array(length);
	
	        while (++index < length) {
	            result[index] = iteratee(array[index], index, array);
	        }
	        return result;
	    }
	
	    /** `Object#toString` result references. */
	    var symbolTag = '[object Symbol]';
	
	    /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
	    function isSymbol(value) {
	        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	    }
	
	    /** Used as references for various `Number` constants. */
	    var INFINITY = 1 / 0;
	
	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
	    var symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	    /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
	    function baseToString(value) {
	        // Exit early for strings to avoid a performance hit in some environments.
	        if (typeof value == 'string') {
	            return value;
	        }
	        if (isArray(value)) {
	            // Recursively convert values (susceptible to call stack limits).
	            return arrayMap(value, baseToString) + '';
	        }
	        if (isSymbol(value)) {
	            return symbolToString ? symbolToString.call(value) : '';
	        }
	        var result = value + '';
	        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	    }
	
	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	        var index = -1,
	            length = array.length;
	
	        if (start < 0) {
	            start = -start > length ? 0 : length + start;
	        }
	        end = end > length ? length : end;
	        if (end < 0) {
	            end += length;
	        }
	        length = start > end ? 0 : end - start >>> 0;
	        start >>>= 0;
	
	        var result = Array(length);
	        while (++index < length) {
	            result[index] = array[index + start];
	        }
	        return result;
	    }
	
	    /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
	    function castSlice(array, start, end) {
	        var length = array.length;
	        end = end === undefined ? length : end;
	        return !start && end >= length ? array : baseSlice(array, start, end);
	    }
	
	    /**
	     * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	     * that is not found in the character symbols.
	     *
	     * @private
	     * @param {Array} strSymbols The string symbols to inspect.
	     * @param {Array} chrSymbols The character symbols to find.
	     * @returns {number} Returns the index of the last unmatched string symbol.
	     */
	    function charsEndIndex(strSymbols, chrSymbols) {
	        var index = strSymbols.length;
	
	        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	        return index;
	    }
	
	    /**
	     * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	     * that is not found in the character symbols.
	     *
	     * @private
	     * @param {Array} strSymbols The string symbols to inspect.
	     * @param {Array} chrSymbols The character symbols to find.
	     * @returns {number} Returns the index of the first unmatched string symbol.
	     */
	    function charsStartIndex(strSymbols, chrSymbols) {
	        var index = -1,
	            length = strSymbols.length;
	
	        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	        return index;
	    }
	
	    /**
	     * Converts an ASCII `string` to an array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the converted array.
	     */
	    function asciiToArray(string) {
	        return string.split('');
	    }
	
	    /** Used to compose unicode character classes. */
	    var rsAstralRange = '\\ud800-\\udfff';
	    var rsComboMarksRange = '\\u0300-\\u036f';
	    var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
	    var rsComboSymbolsRange = '\\u20d0-\\u20ff';
	    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
	    var rsVarRange = '\\ufe0e\\ufe0f';
	
	    /** Used to compose unicode capture groups. */
	    var rsZWJ = '\\u200d';
	
	    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	    var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
	
	    /**
	     * Checks if `string` contains Unicode symbols.
	     *
	     * @private
	     * @param {string} string The string to inspect.
	     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	     */
	    function hasUnicode(string) {
	        return reHasUnicode.test(string);
	    }
	
	    /** Used to compose unicode character classes. */
	    var rsAstralRange$1 = '\\ud800-\\udfff';
	    var rsComboMarksRange$1 = '\\u0300-\\u036f';
	    var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
	    var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
	    var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
	    var rsVarRange$1 = '\\ufe0e\\ufe0f';
	
	    /** Used to compose unicode capture groups. */
	    var rsAstral = '[' + rsAstralRange$1 + ']';
	    var rsCombo = '[' + rsComboRange$1 + ']';
	    var rsFitz = '\\ud83c[\\udffb-\\udfff]';
	    var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
	    var rsNonAstral = '[^' + rsAstralRange$1 + ']';
	    var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
	    var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
	    var rsZWJ$1 = '\\u200d';
	
	    /** Used to compose unicode regexes. */
	    var reOptMod = rsModifier + '?';
	    var rsOptVar = '[' + rsVarRange$1 + ']?';
	    var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
	    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	    var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	    var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	    /**
	     * Converts a Unicode `string` to an array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the converted array.
	     */
	    function unicodeToArray(string) {
	        return string.match(reUnicode) || [];
	    }
	
	    /**
	     * Converts `string` to an array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the converted array.
	     */
	    function stringToArray(string) {
	        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
	    }
	
	    /**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
	    function toString(value) {
	        return value == null ? '' : baseToString(value);
	    }
	
	    /** Used to match leading and trailing whitespace. */
	    var reTrim = /^\s+|\s+$/g;
	
	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	        string = toString(string);
	        if (string && (guard || chars === undefined)) {
	            return string.replace(reTrim, '');
	        }
	        if (!string || !(chars = baseToString(chars))) {
	            return string;
	        }
	        var strSymbols = stringToArray(string),
	            chrSymbols = stringToArray(chars),
	            start = charsStartIndex(strSymbols, chrSymbols),
	            end = charsEndIndex(strSymbols, chrSymbols) + 1;
	
	        return castSlice(strSymbols, start, end).join('');
	    }
	
	    var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
	    var FN_ARG_SPLIT = /,/;
	    var FN_ARG = /(=.+)?(\s*)$/;
	    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	
	    function parseParams(func) {
	        func = func.toString().replace(STRIP_COMMENTS, '');
	        func = func.match(FN_ARGS)[2].replace(' ', '');
	        func = func ? func.split(FN_ARG_SPLIT) : [];
	        func = func.map(function (arg) {
	            return trim(arg.replace(FN_ARG, ''));
	        });
	        return func;
	    }
	
	    /**
	     * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
	     * tasks are specified as parameters to the function, after the usual callback
	     * parameter, with the parameter names matching the names of the tasks it
	     * depends on. This can provide even more readable task graphs which can be
	     * easier to maintain.
	     *
	     * If a final callback is specified, the task results are similarly injected,
	     * specified as named parameters after the initial error parameter.
	     *
	     * The autoInject function is purely syntactic sugar and its semantics are
	     * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
	     *
	     * @name autoInject
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.auto]{@link module:ControlFlow.auto}
	     * @category Control Flow
	     * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
	     * the form 'func([dependencies...], callback). The object's key of a property
	     * serves as the name of the task defined by that property, i.e. can be used
	     * when specifying requirements for other tasks.
	     * * The `callback` parameter is a `callback(err, result)` which must be called
	     *   when finished, passing an `error` (which can be `null`) and the result of
	     *   the function's execution. The remaining parameters name other tasks on
	     *   which the task is dependent, and the results from those tasks are the
	     *   arguments of those parameters.
	     * @param {Function} [callback] - An optional callback which is called when all
	     * the tasks have been completed. It receives the `err` argument if any `tasks`
	     * pass an error to their callback, and a `results` object with any completed
	     * task results, similar to `auto`.
	     * @example
	     *
	     * //  The example from `auto` can be rewritten as follows:
	     * async.autoInject({
	     *     get_data: function(callback) {
	     *         // async code to get some data
	     *         callback(null, 'data', 'converted to array');
	     *     },
	     *     make_folder: function(callback) {
	     *         // async code to create a directory to store a file in
	     *         // this is run at the same time as getting the data
	     *         callback(null, 'folder');
	     *     },
	     *     write_file: function(get_data, make_folder, callback) {
	     *         // once there is some data and the directory exists,
	     *         // write the data to a file in the directory
	     *         callback(null, 'filename');
	     *     },
	     *     email_link: function(write_file, callback) {
	     *         // once the file is written let's email a link to it...
	     *         // write_file contains the filename returned by write_file.
	     *         callback(null, {'file':write_file, 'email':'user@example.com'});
	     *     }
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('email_link = ', results.email_link);
	     * });
	     *
	     * // If you are using a JS minifier that mangles parameter names, `autoInject`
	     * // will not work with plain functions, since the parameter names will be
	     * // collapsed to a single letter identifier.  To work around this, you can
	     * // explicitly specify the names of the parameters your task function needs
	     * // in an array, similar to Angular.js dependency injection.
	     *
	     * // This still has an advantage over plain `auto`, since the results a task
	     * // depends on are still spread into arguments.
	     * async.autoInject({
	     *     //...
	     *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
	     *         callback(null, 'filename');
	     *     }],
	     *     email_link: ['write_file', function(write_file, callback) {
	     *         callback(null, {'file':write_file, 'email':'user@example.com'});
	     *     }]
	     *     //...
	     * }, function(err, results) {
	     *     console.log('err = ', err);
	     *     console.log('email_link = ', results.email_link);
	     * });
	     */
	    function autoInject(tasks, callback) {
	        var newTasks = {};
	
	        baseForOwn(tasks, function (taskFn, key) {
	            var params;
	            var fnIsAsync = isAsync(taskFn);
	            var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;
	
	            if (isArray(taskFn)) {
	                params = taskFn.slice(0, -1);
	                taskFn = taskFn[taskFn.length - 1];
	
	                newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
	            } else if (hasNoDeps) {
	                // no dependencies, use the function as-is
	                newTasks[key] = taskFn;
	            } else {
	                params = parseParams(taskFn);
	                if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
	                    throw new Error("autoInject task functions require explicit parameters.");
	                }
	
	                // remove callback param
	                if (!fnIsAsync) params.pop();
	
	                newTasks[key] = params.concat(newTask);
	            }
	
	            function newTask(results, taskCb) {
	                var newArgs = arrayMap(params, function (name) {
	                    return results[name];
	                });
	                newArgs.push(taskCb);
	                wrapAsync(taskFn).apply(null, newArgs);
	            }
	        });
	
	        auto(newTasks, callback);
	    }
	
	    // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
	    // used for queues. This implementation assumes that the node provided by the user can be modified
	    // to adjust the next and last properties. We implement only the minimal functionality
	    // for queue support.
	    function DLL() {
	        this.head = this.tail = null;
	        this.length = 0;
	    }
	
	    function setInitial(dll, node) {
	        dll.length = 1;
	        dll.head = dll.tail = node;
	    }
	
	    DLL.prototype.removeLink = function (node) {
	        if (node.prev) node.prev.next = node.next;else this.head = node.next;
	        if (node.next) node.next.prev = node.prev;else this.tail = node.prev;
	
	        node.prev = node.next = null;
	        this.length -= 1;
	        return node;
	    };
	
	    DLL.prototype.empty = function () {
	        while (this.head) {
	            this.shift();
	        }return this;
	    };
	
	    DLL.prototype.insertAfter = function (node, newNode) {
	        newNode.prev = node;
	        newNode.next = node.next;
	        if (node.next) node.next.prev = newNode;else this.tail = newNode;
	        node.next = newNode;
	        this.length += 1;
	    };
	
	    DLL.prototype.insertBefore = function (node, newNode) {
	        newNode.prev = node.prev;
	        newNode.next = node;
	        if (node.prev) node.prev.next = newNode;else this.head = newNode;
	        node.prev = newNode;
	        this.length += 1;
	    };
	
	    DLL.prototype.unshift = function (node) {
	        if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
	    };
	
	    DLL.prototype.push = function (node) {
	        if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
	    };
	
	    DLL.prototype.shift = function () {
	        return this.head && this.removeLink(this.head);
	    };
	
	    DLL.prototype.pop = function () {
	        return this.tail && this.removeLink(this.tail);
	    };
	
	    DLL.prototype.toArray = function () {
	        var arr = Array(this.length);
	        var curr = this.head;
	        for (var idx = 0; idx < this.length; idx++) {
	            arr[idx] = curr.data;
	            curr = curr.next;
	        }
	        return arr;
	    };
	
	    DLL.prototype.remove = function (testFn) {
	        var curr = this.head;
	        while (!!curr) {
	            var next = curr.next;
	            if (testFn(curr)) {
	                this.removeLink(curr);
	            }
	            curr = next;
	        }
	        return this;
	    };
	
	    function queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        } else if (concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }
	
	        var _worker = wrapAsync(worker);
	        var numRunning = 0;
	        var _workersList = [];
	
	        var processingScheduled = false;
	        function _insert(data, insertAtFront, callback) {
	            if (callback != null && typeof callback !== 'function') {
	                throw new Error('task callback must be a function');
	            }
	            q.started = true;
	            if (!isArray(data)) {
	                data = [data];
	            }
	            if (data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return setImmediate$1(function () {
	                    q.drain();
	                });
	            }
	
	            for (var i = 0, l = data.length; i < l; i++) {
	                var item = {
	                    data: data[i],
	                    callback: callback || noop
	                };
	
	                if (insertAtFront) {
	                    q._tasks.unshift(item);
	                } else {
	                    q._tasks.push(item);
	                }
	            }
	
	            if (!processingScheduled) {
	                processingScheduled = true;
	                setImmediate$1(function () {
	                    processingScheduled = false;
	                    q.process();
	                });
	            }
	        }
	
	        function _next(tasks) {
	            return function (err) {
	                numRunning -= 1;
	
	                for (var i = 0, l = tasks.length; i < l; i++) {
	                    var task = tasks[i];
	
	                    var index = baseIndexOf(_workersList, task, 0);
	                    if (index === 0) {
	                        _workersList.shift();
	                    } else if (index > 0) {
	                        _workersList.splice(index, 1);
	                    }
	
	                    task.callback.apply(task, arguments);
	
	                    if (err != null) {
	                        q.error(err, task.data);
	                    }
	                }
	
	                if (numRunning <= q.concurrency - q.buffer) {
	                    q.unsaturated();
	                }
	
	                if (q.idle()) {
	                    q.drain();
	                }
	                q.process();
	            };
	        }
	
	        var isProcessing = false;
	        var q = {
	            _tasks: new DLL(),
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            unsaturated: noop,
	            buffer: concurrency / 4,
	            empty: noop,
	            drain: noop,
	            error: noop,
	            started: false,
	            paused: false,
	            push: function push(data, callback) {
	                _insert(data, false, callback);
	            },
	            kill: function kill() {
	                q.drain = noop;
	                q._tasks.empty();
	            },
	            unshift: function unshift(data, callback) {
	                _insert(data, true, callback);
	            },
	            remove: function remove(testFn) {
	                q._tasks.remove(testFn);
	            },
	            process: function process() {
	                // Avoid trying to start too many processing operations. This can occur
	                // when callbacks resolve synchronously (#1267).
	                if (isProcessing) {
	                    return;
	                }
	                isProcessing = true;
	                while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
	                    var tasks = [],
	                        data = [];
	                    var l = q._tasks.length;
	                    if (q.payload) l = Math.min(l, q.payload);
	                    for (var i = 0; i < l; i++) {
	                        var node = q._tasks.shift();
	                        tasks.push(node);
	                        _workersList.push(node);
	                        data.push(node.data);
	                    }
	
	                    numRunning += 1;
	
	                    if (q._tasks.length === 0) {
	                        q.empty();
	                    }
	
	                    if (numRunning === q.concurrency) {
	                        q.saturated();
	                    }
	
	                    var cb = onlyOnce(_next(tasks));
	                    _worker(data, cb);
	                }
	                isProcessing = false;
	            },
	            length: function length() {
	                return q._tasks.length;
	            },
	            running: function running() {
	                return numRunning;
	            },
	            workersList: function workersList() {
	                return _workersList;
	            },
	            idle: function idle() {
	                return q._tasks.length + numRunning === 0;
	            },
	            pause: function pause() {
	                q.paused = true;
	            },
	            resume: function resume() {
	                if (q.paused === false) {
	                    return;
	                }
	                q.paused = false;
	                setImmediate$1(q.process);
	            }
	        };
	        return q;
	    }
	
	    /**
	     * A cargo of tasks for the worker function to complete. Cargo inherits all of
	     * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
	     * @typedef {Object} CargoObject
	     * @memberOf module:ControlFlow
	     * @property {Function} length - A function returning the number of items
	     * waiting to be processed. Invoke like `cargo.length()`.
	     * @property {number} payload - An `integer` for determining how many tasks
	     * should be process per round. This property can be changed after a `cargo` is
	     * created to alter the payload on-the-fly.
	     * @property {Function} push - Adds `task` to the `queue`. The callback is
	     * called once the `worker` has finished processing the task. Instead of a
	     * single task, an array of `tasks` can be submitted. The respective callback is
	     * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
	     * @property {Function} saturated - A callback that is called when the
	     * `queue.length()` hits the concurrency and further tasks will be queued.
	     * @property {Function} empty - A callback that is called when the last item
	     * from the `queue` is given to a `worker`.
	     * @property {Function} drain - A callback that is called when the last item
	     * from the `queue` has returned from the `worker`.
	     * @property {Function} idle - a function returning false if there are items
	     * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
	     * @property {Function} pause - a function that pauses the processing of tasks
	     * until `resume()` is called. Invoke like `cargo.pause()`.
	     * @property {Function} resume - a function that resumes the processing of
	     * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
	     * @property {Function} kill - a function that removes the `drain` callback and
	     * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
	     */
	
	    /**
	     * Creates a `cargo` object with the specified payload. Tasks added to the
	     * cargo will be processed altogether (up to the `payload` limit). If the
	     * `worker` is in progress, the task is queued until it becomes available. Once
	     * the `worker` has completed some tasks, each callback of those tasks is
	     * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
	     * for how `cargo` and `queue` work.
	     *
	     * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
	     * at a time, cargo passes an array of tasks to a single worker, repeating
	     * when the worker is finished.
	     *
	     * @name cargo
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.queue]{@link module:ControlFlow.queue}
	     * @category Control Flow
	     * @param {AsyncFunction} worker - An asynchronous function for processing an array
	     * of queued tasks. Invoked with `(tasks, callback)`.
	     * @param {number} [payload=Infinity] - An optional `integer` for determining
	     * how many tasks should be processed per round; if omitted, the default is
	     * unlimited.
	     * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
	     * attached as certain properties to listen for specific events during the
	     * lifecycle of the cargo and inner queue.
	     * @example
	     *
	     * // create a cargo object with payload 2
	     * var cargo = async.cargo(function(tasks, callback) {
	     *     for (var i=0; i<tasks.length; i++) {
	     *         console.log('hello ' + tasks[i].name);
	     *     }
	     *     callback();
	     * }, 2);
	     *
	     * // add some items
	     * cargo.push({name: 'foo'}, function(err) {
	     *     console.log('finished processing foo');
	     * });
	     * cargo.push({name: 'bar'}, function(err) {
	     *     console.log('finished processing bar');
	     * });
	     * cargo.push({name: 'baz'}, function(err) {
	     *     console.log('finished processing baz');
	     * });
	     */
	    function cargo(worker, payload) {
	        return queue(worker, 1, payload);
	    }
	
	    /**
	     * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
	     *
	     * @name eachOfSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.eachOf]{@link module:Collections.eachOf}
	     * @alias forEachOfSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * Invoked with (item, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Invoked with (err).
	     */
	    var eachOfSeries = doLimit(eachOfLimit, 1);
	
	    /**
	     * Reduces `coll` into a single value using an async `iteratee` to return each
	     * successive step. `memo` is the initial state of the reduction. This function
	     * only operates in series.
	     *
	     * For performance reasons, it may make sense to split a call to this function
	     * into a parallel map, and then use the normal `Array.prototype.reduce` on the
	     * results. This function is for situations where each step in the reduction
	     * needs to be async; if you can get the data before reducing it, then it's
	     * probably a good idea to do so.
	     *
	     * @name reduce
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias inject
	     * @alias foldl
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {*} memo - The initial state of the reduction.
	     * @param {AsyncFunction} iteratee - A function applied to each item in the
	     * array to produce the next step in the reduction.
	     * The `iteratee` should complete with the next state of the reduction.
	     * If the iteratee complete with an error, the reduction is stopped and the
	     * main `callback` is immediately called with the error.
	     * Invoked with (memo, item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the reduced value. Invoked with
	     * (err, result).
	     * @example
	     *
	     * async.reduce([1,2,3], 0, function(memo, item, callback) {
	     *     // pointless async:
	     *     process.nextTick(function() {
	     *         callback(null, memo + item)
	     *     });
	     * }, function(err, result) {
	     *     // result is now equal to the last value of memo, which is 6
	     * });
	     */
	    function reduce(coll, memo, iteratee, callback) {
	        callback = once(callback || noop);
	        var _iteratee = wrapAsync(iteratee);
	        eachOfSeries(coll, function (x, i, callback) {
	            _iteratee(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, memo);
	        });
	    }
	
	    /**
	     * Version of the compose function that is more natural to read. Each function
	     * consumes the return value of the previous function. It is the equivalent of
	     * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
	     *
	     * Each function is executed with the `this` binding of the composed function.
	     *
	     * @name seq
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.compose]{@link module:ControlFlow.compose}
	     * @category Control Flow
	     * @param {...AsyncFunction} functions - the asynchronous functions to compose
	     * @returns {Function} a function that composes the `functions` in order
	     * @example
	     *
	     * // Requires lodash (or underscore), express3 and dresende's orm2.
	     * // Part of an app, that fetches cats of the logged user.
	     * // This example uses `seq` function to avoid overnesting and error
	     * // handling clutter.
	     * app.get('/cats', function(request, response) {
	     *     var User = request.models.User;
	     *     async.seq(
	     *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
	     *         function(user, fn) {
	     *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
	     *         }
	     *     )(req.session.user_id, function (err, cats) {
	     *         if (err) {
	     *             console.error(err);
	     *             response.json({ status: 'error', message: err.message });
	     *         } else {
	     *             response.json({ status: 'ok', message: 'Cats found', data: cats });
	     *         }
	     *     });
	     * });
	     */
	    function seq() /*...functions*/{
	        var _functions = arrayMap(arguments, wrapAsync);
	        return function () /*...args*/{
	            var args = slice(arguments);
	            var that = this;
	
	            var cb = args[args.length - 1];
	            if (typeof cb == 'function') {
	                args.pop();
	            } else {
	                cb = noop;
	            }
	
	            reduce(_functions, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat(function (err /*, ...nextargs*/) {
	                    var nextargs = slice(arguments, 1);
	                    cb(err, nextargs);
	                }));
	            }, function (err, results) {
	                cb.apply(that, [err].concat(results));
	            });
	        };
	    }
	
	    /**
	     * Creates a function which is a composition of the passed asynchronous
	     * functions. Each function consumes the return value of the function that
	     * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
	     * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
	     *
	     * Each function is executed with the `this` binding of the composed function.
	     *
	     * @name compose
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {...AsyncFunction} functions - the asynchronous functions to compose
	     * @returns {Function} an asynchronous function that is the composed
	     * asynchronous `functions`
	     * @example
	     *
	     * function add1(n, callback) {
	     *     setTimeout(function () {
	     *         callback(null, n + 1);
	     *     }, 10);
	     * }
	     *
	     * function mul3(n, callback) {
	     *     setTimeout(function () {
	     *         callback(null, n * 3);
	     *     }, 10);
	     * }
	     *
	     * var add1mul3 = async.compose(mul3, add1);
	     * add1mul3(4, function (err, result) {
	     *     // result now equals 15
	     * });
	     */
	    var compose = function compose() /*...args*/{
	        return seq.apply(null, slice(arguments).reverse());
	    };
	
	    var _concat = Array.prototype.concat;
	
	    /**
	     * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name concatLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.concat]{@link module:Collections.concat}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
	     * which should use an array as its result. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is an array
	     * containing the concatenated results of the `iteratee` function. Invoked with
	     * (err, results).
	     */
	    var concatLimit = function concatLimit(coll, limit, iteratee, callback) {
	        callback = callback || noop;
	        var _iteratee = wrapAsync(iteratee);
	        mapLimit(coll, limit, function (val, callback) {
	            _iteratee(val, function (err /*, ...args*/) {
	                if (err) return callback(err);
	                return callback(null, slice(arguments, 1));
	            });
	        }, function (err, mapResults) {
	            var result = [];
	            for (var i = 0; i < mapResults.length; i++) {
	                if (mapResults[i]) {
	                    result = _concat.apply(result, mapResults[i]);
	                }
	            }
	
	            return callback(err, result);
	        });
	    };
	
	    /**
	     * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
	     * the concatenated list. The `iteratee`s are called in parallel, and the
	     * results are concatenated as they return. There is no guarantee that the
	     * results array will be returned in the original order of `coll` passed to the
	     * `iteratee` function.
	     *
	     * @name concat
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
	     * which should use an array as its result. Invoked with (item, callback).
	     * @param {Function} [callback(err)] - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is an array
	     * containing the concatenated results of the `iteratee` function. Invoked with
	     * (err, results).
	     * @example
	     *
	     * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
	     *     // files is now a list of filenames that exist in the 3 directories
	     * });
	     */
	    var concat = doLimit(concatLimit, Infinity);
	
	    /**
	     * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
	     *
	     * @name concatSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.concat]{@link module:Collections.concat}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
	     * The iteratee should complete with an array an array of results.
	     * Invoked with (item, callback).
	     * @param {Function} [callback(err)] - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is an array
	     * containing the concatenated results of the `iteratee` function. Invoked with
	     * (err, results).
	     */
	    var concatSeries = doLimit(concatLimit, 1);
	
	    /**
	     * Returns a function that when called, calls-back with the values provided.
	     * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
	     * [`auto`]{@link module:ControlFlow.auto}.
	     *
	     * @name constant
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {...*} arguments... - Any number of arguments to automatically invoke
	     * callback with.
	     * @returns {AsyncFunction} Returns a function that when invoked, automatically
	     * invokes the callback with the previous given arguments.
	     * @example
	     *
	     * async.waterfall([
	     *     async.constant(42),
	     *     function (value, next) {
	     *         // value === 42
	     *     },
	     *     //...
	     * ], callback);
	     *
	     * async.waterfall([
	     *     async.constant(filename, "utf8"),
	     *     fs.readFile,
	     *     function (fileData, next) {
	     *         //...
	     *     }
	     *     //...
	     * ], callback);
	     *
	     * async.auto({
	     *     hostname: async.constant("https://server.net/"),
	     *     port: findFreePort,
	     *     launchServer: ["hostname", "port", function (options, cb) {
	     *         startServer(options, cb);
	     *     }],
	     *     //...
	     * }, callback);
	     */
	    var constant = function constant() /*...values*/{
	        var values = slice(arguments);
	        var args = [null].concat(values);
	        return function () /*...ignoredArgs, callback*/{
	            var callback = arguments[arguments.length - 1];
	            return callback.apply(this, args);
	        };
	    };
	
	    /**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */
	    function identity(value) {
	        return value;
	    }
	
	    function _createTester(check, getResult) {
	        return function (eachfn, arr, iteratee, cb) {
	            cb = cb || noop;
	            var testPassed = false;
	            var testResult;
	            eachfn(arr, function (value, _, callback) {
	                iteratee(value, function (err, result) {
	                    if (err) {
	                        callback(err);
	                    } else if (check(result) && !testResult) {
	                        testPassed = true;
	                        testResult = getResult(true, value);
	                        callback(null, breakLoop);
	                    } else {
	                        callback();
	                    }
	                });
	            }, function (err) {
	                if (err) {
	                    cb(err);
	                } else {
	                    cb(null, testPassed ? testResult : getResult(false));
	                }
	            });
	        };
	    }
	
	    function _findGetResult(v, x) {
	        return x;
	    }
	
	    /**
	     * Returns the first value in `coll` that passes an async truth test. The
	     * `iteratee` is applied in parallel, meaning the first iteratee to return
	     * `true` will fire the detect `callback` with that result. That means the
	     * result might not be the first item in the original `coll` (in terms of order)
	     * that passes the test.
	    
	     * If order within the original `coll` is important, then look at
	     * [`detectSeries`]{@link module:Collections.detectSeries}.
	     *
	     * @name detect
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias find
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee must complete with a boolean value as its result.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     * @example
	     *
	     * async.detect(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // result now equals the first file in the list that exists
	     * });
	     */
	    var detect = doParallel(_createTester(identity, _findGetResult));
	
	    /**
	     * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name detectLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.detect]{@link module:Collections.detect}
	     * @alias findLimit
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee must complete with a boolean value as its result.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     */
	    var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));
	
	    /**
	     * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
	     *
	     * @name detectSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.detect]{@link module:Collections.detect}
	     * @alias findSeries
	     * @category Collections
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
	     * The iteratee must complete with a boolean value as its result.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the `iteratee` functions have finished.
	     * Result will be the first item in the array that passes the truth test
	     * (iteratee) or the value `undefined` if none passed. Invoked with
	     * (err, result).
	     */
	    var detectSeries = doLimit(detectLimit, 1);
	
	    function consoleFunc(name) {
	        return function (fn /*, ...args*/) {
	            var args = slice(arguments, 1);
	            args.push(function (err /*, ...args*/) {
	                var args = slice(arguments, 1);
	                if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    } else if (console[name]) {
	                        arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            });
	            wrapAsync(fn).apply(null, args);
	        };
	    }
	
	    /**
	     * Logs the result of an [`async` function]{@link AsyncFunction} to the
	     * `console` using `console.dir` to display the properties of the resulting object.
	     * Only works in Node.js or in browsers that support `console.dir` and
	     * `console.error` (such as FF and Chrome).
	     * If multiple arguments are returned from the async function,
	     * `console.dir` is called on each argument in order.
	     *
	     * @name dir
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} function - The function you want to eventually apply
	     * all arguments to.
	     * @param {...*} arguments... - Any number of arguments to apply to the function.
	     * @example
	     *
	     * // in a module
	     * var hello = function(name, callback) {
	     *     setTimeout(function() {
	     *         callback(null, {hello: name});
	     *     }, 1000);
	     * };
	     *
	     * // in the node repl
	     * node> async.dir(hello, 'world');
	     * {hello: 'world'}
	     */
	    var dir = consoleFunc('dir');
	
	    /**
	     * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
	     * the order of operations, the arguments `test` and `fn` are switched.
	     *
	     * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
	     * @name doDuring
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.during]{@link module:ControlFlow.during}
	     * @category Control Flow
	     * @param {AsyncFunction} fn - An async function which is called each time
	     * `test` passes. Invoked with (callback).
	     * @param {AsyncFunction} test - asynchronous truth test to perform before each
	     * execution of `fn`. Invoked with (...args, callback), where `...args` are the
	     * non-error args from the previous callback of `fn`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error if one occurred, otherwise `null`.
	     */
	    function doDuring(fn, test, callback) {
	        callback = onlyOnce(callback || noop);
	        var _fn = wrapAsync(fn);
	        var _test = wrapAsync(test);
	
	        function next(err /*, ...args*/) {
	            if (err) return callback(err);
	            var args = slice(arguments, 1);
	            args.push(check);
	            _test.apply(this, args);
	        }
	
	        function check(err, truth) {
	            if (err) return callback(err);
	            if (!truth) return callback(null);
	            _fn(next);
	        }
	
	        check(null, true);
	    }
	
	    /**
	     * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
	     * the order of operations, the arguments `test` and `iteratee` are switched.
	     *
	     * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
	     *
	     * @name doWhilst
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {AsyncFunction} iteratee - A function which is called each time `test`
	     * passes. Invoked with (callback).
	     * @param {Function} test - synchronous truth test to perform after each
	     * execution of `iteratee`. Invoked with any non-error callback results of
	     * `iteratee`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `iteratee` has stopped.
	     * `callback` will be passed an error and any arguments passed to the final
	     * `iteratee`'s callback. Invoked with (err, [results]);
	     */
	    function doWhilst(iteratee, test, callback) {
	        callback = onlyOnce(callback || noop);
	        var _iteratee = wrapAsync(iteratee);
	        var next = function next(err /*, ...args*/) {
	            if (err) return callback(err);
	            var args = slice(arguments, 1);
	            if (test.apply(this, args)) return _iteratee(next);
	            callback.apply(null, [null].concat(args));
	        };
	        _iteratee(next);
	    }
	
	    /**
	     * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
	     * argument ordering differs from `until`.
	     *
	     * @name doUntil
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
	     * @category Control Flow
	     * @param {AsyncFunction} iteratee - An async function which is called each time
	     * `test` fails. Invoked with (callback).
	     * @param {Function} test - synchronous truth test to perform after each
	     * execution of `iteratee`. Invoked with any non-error callback results of
	     * `iteratee`.
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has passed and repeated execution of `iteratee` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `iteratee`'s
	     * callback. Invoked with (err, [results]);
	     */
	    function doUntil(iteratee, test, callback) {
	        doWhilst(iteratee, function () {
	            return !test.apply(this, arguments);
	        }, callback);
	    }
	
	    /**
	     * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
	     * is passed a callback in the form of `function (err, truth)`. If error is
	     * passed to `test` or `fn`, the main callback is immediately called with the
	     * value of the error.
	     *
	     * @name during
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {AsyncFunction} test - asynchronous truth test to perform before each
	     * execution of `fn`. Invoked with (callback).
	     * @param {AsyncFunction} fn - An async function which is called each time
	     * `test` passes. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `fn` has stopped. `callback`
	     * will be passed an error, if one occurred, otherwise `null`.
	     * @example
	     *
	     * var count = 0;
	     *
	     * async.during(
	     *     function (callback) {
	     *         return callback(null, count < 5);
	     *     },
	     *     function (callback) {
	     *         count++;
	     *         setTimeout(callback, 1000);
	     *     },
	     *     function (err) {
	     *         // 5 seconds have passed
	     *     }
	     * );
	     */
	    function during(test, fn, callback) {
	        callback = onlyOnce(callback || noop);
	        var _fn = wrapAsync(fn);
	        var _test = wrapAsync(test);
	
	        function next(err) {
	            if (err) return callback(err);
	            _test(check);
	        }
	
	        function check(err, truth) {
	            if (err) return callback(err);
	            if (!truth) return callback(null);
	            _fn(next);
	        }
	
	        _test(check);
	    }
	
	    function _withoutIndex(iteratee) {
	        return function (value, index, callback) {
	            return iteratee(value, callback);
	        };
	    }
	
	    /**
	     * Applies the function `iteratee` to each item in `coll`, in parallel.
	     * The `iteratee` is called with an item from the list, and a callback for when
	     * it has finished. If the `iteratee` passes an error to its `callback`, the
	     * main `callback` (for the `each` function) is immediately called with the
	     * error.
	     *
	     * Note, that since this function applies `iteratee` to each item in parallel,
	     * there is no guarantee that the iteratee functions will complete in order.
	     *
	     * @name each
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias forEach
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to
	     * each item in `coll`. Invoked with (item, callback).
	     * The array index is not passed to the iteratee.
	     * If you need the index, use `eachOf`.
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     * @example
	     *
	     * // assuming openFiles is an array of file names and saveFile is a function
	     * // to save the modified contents of that file:
	     *
	     * async.each(openFiles, saveFile, function(err){
	     *   // if any of the saves produced an error, err would equal that error
	     * });
	     *
	     * // assuming openFiles is an array of file names
	     * async.each(openFiles, function(file, callback) {
	     *
	     *     // Perform operation on file here.
	     *     console.log('Processing file ' + file);
	     *
	     *     if( file.length > 32 ) {
	     *       console.log('This file name is too long');
	     *       callback('File name too long');
	     *     } else {
	     *       // Do work to process file here
	     *       console.log('File processed');
	     *       callback();
	     *     }
	     * }, function(err) {
	     *     // if any of the file processing produced an error, err would equal that error
	     *     if( err ) {
	     *       // One of the iterations produced an error.
	     *       // All processing will now stop.
	     *       console.log('A file failed to process');
	     *     } else {
	     *       console.log('All files have been processed successfully');
	     *     }
	     * });
	     */
	    function eachLimit(coll, iteratee, callback) {
	        eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
	    }
	
	    /**
	     * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name eachLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.each]{@link module:Collections.each}
	     * @alias forEachLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The array index is not passed to the iteratee.
	     * If you need the index, use `eachOfLimit`.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    function eachLimit$1(coll, limit, iteratee, callback) {
	        _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
	    }
	
	    /**
	     * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
	     *
	     * @name eachSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.each]{@link module:Collections.each}
	     * @alias forEachSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each
	     * item in `coll`.
	     * The array index is not passed to the iteratee.
	     * If you need the index, use `eachOfSeries`.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called when all
	     * `iteratee` functions have finished, or an error occurs. Invoked with (err).
	     */
	    var eachSeries = doLimit(eachLimit$1, 1);
	
	    /**
	     * Wrap an async function and ensure it calls its callback on a later tick of
	     * the event loop.  If the function already calls its callback on a next tick,
	     * no extra deferral is added. This is useful for preventing stack overflows
	     * (`RangeError: Maximum call stack size exceeded`) and generally keeping
	     * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
	     * contained. ES2017 `async` functions are returned as-is -- they are immune
	     * to Zalgo's corrupting influences, as they always resolve on a later tick.
	     *
	     * @name ensureAsync
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} fn - an async function, one that expects a node-style
	     * callback as its last argument.
	     * @returns {AsyncFunction} Returns a wrapped function with the exact same call
	     * signature as the function passed in.
	     * @example
	     *
	     * function sometimesAsync(arg, callback) {
	     *     if (cache[arg]) {
	     *         return callback(null, cache[arg]); // this would be synchronous!!
	     *     } else {
	     *         doSomeIO(arg, callback); // this IO would be asynchronous
	     *     }
	     * }
	     *
	     * // this has a risk of stack overflows if many results are cached in a row
	     * async.mapSeries(args, sometimesAsync, done);
	     *
	     * // this will defer sometimesAsync's callback if necessary,
	     * // preventing stack overflows
	     * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
	     */
	    function ensureAsync(fn) {
	        if (isAsync(fn)) return fn;
	        return initialParams(function (args, callback) {
	            var sync = true;
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    setImmediate$1(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            fn.apply(this, args);
	            sync = false;
	        });
	    }
	
	    function notId(v) {
	        return !v;
	    }
	
	    /**
	     * Returns `true` if every element in `coll` satisfies an async test. If any
	     * iteratee call returns `false`, the main `callback` is immediately called.
	     *
	     * @name every
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias all
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collection in parallel.
	     * The iteratee must complete with a boolean result value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     * @example
	     *
	     * async.every(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // if result is true then every file exists
	     * });
	     */
	    var every = doParallel(_createTester(notId, notId));
	
	    /**
	     * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name everyLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.every]{@link module:Collections.every}
	     * @alias allLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collection in parallel.
	     * The iteratee must complete with a boolean result value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     */
	    var everyLimit = doParallelLimit(_createTester(notId, notId));
	
	    /**
	     * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
	     *
	     * @name everySeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.every]{@link module:Collections.every}
	     * @alias allSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collection in series.
	     * The iteratee must complete with a boolean result value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result will be either `true` or `false`
	     * depending on the values of the async tests. Invoked with (err, result).
	     */
	    var everySeries = doLimit(everyLimit, 1);
	
	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
	    function baseProperty(key) {
	        return function (object) {
	            return object == null ? undefined : object[key];
	        };
	    }
	
	    function filterArray(eachfn, arr, iteratee, callback) {
	        var truthValues = new Array(arr.length);
	        eachfn(arr, function (x, index, callback) {
	            iteratee(x, function (err, v) {
	                truthValues[index] = !!v;
	                callback(err);
	            });
	        }, function (err) {
	            if (err) return callback(err);
	            var results = [];
	            for (var i = 0; i < arr.length; i++) {
	                if (truthValues[i]) results.push(arr[i]);
	            }
	            callback(null, results);
	        });
	    }
	
	    function filterGeneric(eachfn, coll, iteratee, callback) {
	        var results = [];
	        eachfn(coll, function (x, index, callback) {
	            iteratee(x, function (err, v) {
	                if (err) {
	                    callback(err);
	                } else {
	                    if (v) {
	                        results.push({ index: index, value: x });
	                    }
	                    callback();
	                }
	            });
	        }, function (err) {
	            if (err) {
	                callback(err);
	            } else {
	                callback(null, arrayMap(results.sort(function (a, b) {
	                    return a.index - b.index;
	                }), baseProperty('value')));
	            }
	        });
	    }
	
	    function _filter(eachfn, coll, iteratee, callback) {
	        var filter = isArrayLike(coll) ? filterArray : filterGeneric;
	        filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
	    }
	
	    /**
	     * Returns a new array of all the values in `coll` which pass an async truth
	     * test. This operation is performed in parallel, but the results array will be
	     * in the same order as the original.
	     *
	     * @name filter
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias select
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     * @example
	     *
	     * async.filter(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, results) {
	     *     // results now equals an array of the existing files
	     * });
	     */
	    var filter = doParallel(_filter);
	
	    /**
	     * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name filterLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @alias selectLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var filterLimit = doParallelLimit(_filter);
	
	    /**
	     * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
	     *
	     * @name filterSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @alias selectSeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - A truth test to apply to each item in `coll`.
	     * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
	     * with a boolean argument once it has completed. Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results)
	     */
	    var filterSeries = doLimit(filterLimit, 1);
	
	    /**
	     * Calls the asynchronous function `fn` with a callback parameter that allows it
	     * to call itself again, in series, indefinitely.
	    
	     * If an error is passed to the callback then `errback` is called with the
	     * error, and execution stops, otherwise it will never be called.
	     *
	     * @name forever
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {AsyncFunction} fn - an async function to call repeatedly.
	     * Invoked with (next).
	     * @param {Function} [errback] - when `fn` passes an error to it's callback,
	     * this function will be called, and execution stops. Invoked with (err).
	     * @example
	     *
	     * async.forever(
	     *     function(next) {
	     *         // next is suitable for passing to things that need a callback(err [, whatever]);
	     *         // it will result in this function being called again.
	     *     },
	     *     function(err) {
	     *         // if next is called with a value in its first parameter, it will appear
	     *         // in here as 'err', and execution will stop.
	     *     }
	     * );
	     */
	    function forever(fn, errback) {
	        var done = onlyOnce(errback || noop);
	        var task = wrapAsync(ensureAsync(fn));
	
	        function next(err) {
	            if (err) return done(err);
	            task(next);
	        }
	        next();
	    }
	
	    /**
	     * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name groupByLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.groupBy]{@link module:Collections.groupBy}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with a `key` to group the value under.
	     * Invoked with (value, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Result is an `Object` whoses
	     * properties are arrays of values which returned the corresponding key.
	     */
	    var groupByLimit = function groupByLimit(coll, limit, iteratee, callback) {
	        callback = callback || noop;
	        var _iteratee = wrapAsync(iteratee);
	        mapLimit(coll, limit, function (val, callback) {
	            _iteratee(val, function (err, key) {
	                if (err) return callback(err);
	                return callback(null, { key: key, val: val });
	            });
	        }, function (err, mapResults) {
	            var result = {};
	            // from MDN, handle object having an `hasOwnProperty` prop
	            var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	            for (var i = 0; i < mapResults.length; i++) {
	                if (mapResults[i]) {
	                    var key = mapResults[i].key;
	                    var val = mapResults[i].val;
	
	                    if (hasOwnProperty.call(result, key)) {
	                        result[key].push(val);
	                    } else {
	                        result[key] = [val];
	                    }
	                }
	            }
	
	            return callback(err, result);
	        });
	    };
	
	    /**
	     * Returns a new object, where each value corresponds to an array of items, from
	     * `coll`, that returned the corresponding key. That is, the keys of the object
	     * correspond to the values passed to the `iteratee` callback.
	     *
	     * Note: Since this function applies the `iteratee` to each item in parallel,
	     * there is no guarantee that the `iteratee` functions will complete in order.
	     * However, the values for each key in the `result` will be in the same order as
	     * the original `coll`. For Objects, the values will roughly be in the order of
	     * the original Objects' keys (but this can vary across JavaScript engines).
	     *
	     * @name groupBy
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with a `key` to group the value under.
	     * Invoked with (value, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Result is an `Object` whoses
	     * properties are arrays of values which returned the corresponding key.
	     * @example
	     *
	     * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
	     *     db.findById(userId, function(err, user) {
	     *         if (err) return callback(err);
	     *         return callback(null, user.age);
	     *     });
	     * }, function(err, result) {
	     *     // result is object containing the userIds grouped by age
	     *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
	     * });
	     */
	    var groupBy = doLimit(groupByLimit, Infinity);
	
	    /**
	     * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
	     *
	     * @name groupBySeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.groupBy]{@link module:Collections.groupBy}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with a `key` to group the value under.
	     * Invoked with (value, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. Result is an `Object` whoses
	     * properties are arrays of values which returned the corresponding key.
	     */
	    var groupBySeries = doLimit(groupByLimit, 1);
	
	    /**
	     * Logs the result of an `async` function to the `console`. Only works in
	     * Node.js or in browsers that support `console.log` and `console.error` (such
	     * as FF and Chrome). If multiple arguments are returned from the async
	     * function, `console.log` is called on each argument in order.
	     *
	     * @name log
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} function - The function you want to eventually apply
	     * all arguments to.
	     * @param {...*} arguments... - Any number of arguments to apply to the function.
	     * @example
	     *
	     * // in a module
	     * var hello = function(name, callback) {
	     *     setTimeout(function() {
	     *         callback(null, 'hello ' + name);
	     *     }, 1000);
	     * };
	     *
	     * // in the node repl
	     * node> async.log(hello, 'world');
	     * 'hello world'
	     */
	    var log = consoleFunc('log');
	
	    /**
	     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name mapValuesLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.mapValues]{@link module:Collections.mapValues}
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - A function to apply to each value and key
	     * in `coll`.
	     * The iteratee should complete with the transformed value as its result.
	     * Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. `result` is a new object consisting
	     * of each key from `obj`, with each transformed value on the right-hand side.
	     * Invoked with (err, result).
	     */
	    function mapValuesLimit(obj, limit, iteratee, callback) {
	        callback = once(callback || noop);
	        var newObj = {};
	        var _iteratee = wrapAsync(iteratee);
	        eachOfLimit(obj, limit, function (val, key, next) {
	            _iteratee(val, key, function (err, result) {
	                if (err) return next(err);
	                newObj[key] = result;
	                next();
	            });
	        }, function (err) {
	            callback(err, newObj);
	        });
	    }
	
	    /**
	     * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
	     *
	     * Produces a new Object by mapping each value of `obj` through the `iteratee`
	     * function. The `iteratee` is called each `value` and `key` from `obj` and a
	     * callback for when it has finished processing. Each of these callbacks takes
	     * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
	     * passes an error to its callback, the main `callback` (for the `mapValues`
	     * function) is immediately called with the error.
	     *
	     * Note, the order of the keys in the result is not guaranteed.  The keys will
	     * be roughly in the order they complete, (but this is very engine-specific)
	     *
	     * @name mapValues
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A function to apply to each value and key
	     * in `coll`.
	     * The iteratee should complete with the transformed value as its result.
	     * Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. `result` is a new object consisting
	     * of each key from `obj`, with each transformed value on the right-hand side.
	     * Invoked with (err, result).
	     * @example
	     *
	     * async.mapValues({
	     *     f1: 'file1',
	     *     f2: 'file2',
	     *     f3: 'file3'
	     * }, function (file, key, callback) {
	     *   fs.stat(file, callback);
	     * }, function(err, result) {
	     *     // result is now a map of stats for each file, e.g.
	     *     // {
	     *     //     f1: [stats for file1],
	     *     //     f2: [stats for file2],
	     *     //     f3: [stats for file3]
	     *     // }
	     * });
	     */
	
	    var mapValues = doLimit(mapValuesLimit, Infinity);
	
	    /**
	     * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
	     *
	     * @name mapValuesSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.mapValues]{@link module:Collections.mapValues}
	     * @category Collection
	     * @param {Object} obj - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - A function to apply to each value and key
	     * in `coll`.
	     * The iteratee should complete with the transformed value as its result.
	     * Invoked with (value, key, callback).
	     * @param {Function} [callback] - A callback which is called when all `iteratee`
	     * functions have finished, or an error occurs. `result` is a new object consisting
	     * of each key from `obj`, with each transformed value on the right-hand side.
	     * Invoked with (err, result).
	     */
	    var mapValuesSeries = doLimit(mapValuesLimit, 1);
	
	    function has(obj, key) {
	        return key in obj;
	    }
	
	    /**
	     * Caches the results of an async function. When creating a hash to store
	     * function results against, the callback is omitted from the hash and an
	     * optional hash function can be used.
	     *
	     * If no hash function is specified, the first argument is used as a hash key,
	     * which may work reasonably if it is a string or a data type that converts to a
	     * distinct string. Note that objects and arrays will not behave reasonably.
	     * Neither will cases where the other arguments are significant. In such cases,
	     * specify your own hash function.
	     *
	     * The cache of results is exposed as the `memo` property of the function
	     * returned by `memoize`.
	     *
	     * @name memoize
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} fn - The async function to proxy and cache results from.
	     * @param {Function} hasher - An optional function for generating a custom hash
	     * for storing results. It has all the arguments applied to it apart from the
	     * callback, and must be synchronous.
	     * @returns {AsyncFunction} a memoized version of `fn`
	     * @example
	     *
	     * var slow_fn = function(name, callback) {
	     *     // do something
	     *     callback(null, result);
	     * };
	     * var fn = async.memoize(slow_fn);
	     *
	     * // fn can now be used as if it were slow_fn
	     * fn('some name', function() {
	     *     // callback
	     * });
	     */
	    function memoize(fn, hasher) {
	        var memo = Object.create(null);
	        var queues = Object.create(null);
	        hasher = hasher || identity;
	        var _fn = wrapAsync(fn);
	        var memoized = initialParams(function memoized(args, callback) {
	            var key = hasher.apply(null, args);
	            if (has(memo, key)) {
	                setImmediate$1(function () {
	                    callback.apply(null, memo[key]);
	                });
	            } else if (has(queues, key)) {
	                queues[key].push(callback);
	            } else {
	                queues[key] = [callback];
	                _fn.apply(null, args.concat(function () /*args*/{
	                    var args = slice(arguments);
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                }));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    }
	
	    /**
	     * Calls `callback` on a later loop around the event loop. In Node.js this just
	     * calls `process.nextTick`.  In the browser it will use `setImmediate` if
	     * available, otherwise `setTimeout(callback, 0)`, which means other higher
	     * priority events may precede the execution of `callback`.
	     *
	     * This is used internally for browser-compatibility purposes.
	     *
	     * @name nextTick
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @see [async.setImmediate]{@link module:Utils.setImmediate}
	     * @category Util
	     * @param {Function} callback - The function to call on a later loop around
	     * the event loop. Invoked with (args...).
	     * @param {...*} args... - any number of additional arguments to pass to the
	     * callback on the next tick.
	     * @example
	     *
	     * var call_order = [];
	     * async.nextTick(function() {
	     *     call_order.push('two');
	     *     // call_order now equals ['one','two']
	     * });
	     * call_order.push('one');
	     *
	     * async.setImmediate(function (a, b, c) {
	     *     // a, b, and c equal 1, 2, and 3
	     * }, 1, 2, 3);
	     */
	    var _defer$1;
	
	    if (hasNextTick) {
	        _defer$1 = process.nextTick;
	    } else if (hasSetImmediate) {
	        _defer$1 = setImmediate;
	    } else {
	        _defer$1 = fallback;
	    }
	
	    var nextTick = wrap(_defer$1);
	
	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = isArrayLike(tasks) ? [] : {};
	
	        eachfn(tasks, function (task, key, callback) {
	            wrapAsync(task)(function (err, result) {
	                if (arguments.length > 2) {
	                    result = slice(arguments, 1);
	                }
	                results[key] = result;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    /**
	     * Run the `tasks` collection of functions in parallel, without waiting until
	     * the previous function has completed. If any of the functions pass an error to
	     * its callback, the main `callback` is immediately called with the value of the
	     * error. Once the `tasks` have completed, the results are passed to the final
	     * `callback` as an array.
	     *
	     * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
	     * parallel execution of code.  If your tasks do not use any timers or perform
	     * any I/O, they will actually be executed in series.  Any synchronous setup
	     * sections for each task will happen one after the other.  JavaScript remains
	     * single-threaded.
	     *
	     * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
	     * execution of other tasks when a task fails.
	     *
	     * It is also possible to use an object instead of an array. Each property will
	     * be run as a function and the results will be passed to the final `callback`
	     * as an object instead of an array. This can be a more readable way of handling
	     * results from {@link async.parallel}.
	     *
	     * @name parallel
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection of
	     * [async functions]{@link AsyncFunction} to run.
	     * Each async function can complete with any number of optional `result` values.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed successfully. This function gets a results array
	     * (or object) containing all the result arguments passed to the task callbacks.
	     * Invoked with (err, results).
	     *
	     * @example
	     * async.parallel([
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // the results array will equal ['one','two'] even though
	     *     // the second function had a shorter timeout.
	     * });
	     *
	     * // an example using an object instead of an array
	     * async.parallel({
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 1);
	     *         }, 200);
	     *     },
	     *     two: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 2);
	     *         }, 100);
	     *     }
	     * }, function(err, results) {
	     *     // results is now equals to: {one: 1, two: 2}
	     * });
	     */
	    function parallelLimit(tasks, callback) {
	        _parallel(eachOf, tasks, callback);
	    }
	
	    /**
	     * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name parallelLimit
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.parallel]{@link module:ControlFlow.parallel}
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection of
	     * [async functions]{@link AsyncFunction} to run.
	     * Each async function can complete with any number of optional `result` values.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed successfully. This function gets a results array
	     * (or object) containing all the result arguments passed to the task callbacks.
	     * Invoked with (err, results).
	     */
	    function parallelLimit$1(tasks, limit, callback) {
	        _parallel(_eachOfLimit(limit), tasks, callback);
	    }
	
	    /**
	     * A queue of tasks for the worker function to complete.
	     * @typedef {Object} QueueObject
	     * @memberOf module:ControlFlow
	     * @property {Function} length - a function returning the number of items
	     * waiting to be processed. Invoke with `queue.length()`.
	     * @property {boolean} started - a boolean indicating whether or not any
	     * items have been pushed and processed by the queue.
	     * @property {Function} running - a function returning the number of items
	     * currently being processed. Invoke with `queue.running()`.
	     * @property {Function} workersList - a function returning the array of items
	     * currently being processed. Invoke with `queue.workersList()`.
	     * @property {Function} idle - a function returning false if there are items
	     * waiting or being processed, or true if not. Invoke with `queue.idle()`.
	     * @property {number} concurrency - an integer for determining how many `worker`
	     * functions should be run in parallel. This property can be changed after a
	     * `queue` is created to alter the concurrency on-the-fly.
	     * @property {Function} push - add a new task to the `queue`. Calls `callback`
	     * once the `worker` has finished processing the task. Instead of a single task,
	     * a `tasks` array can be submitted. The respective callback is used for every
	     * task in the list. Invoke with `queue.push(task, [callback])`,
	     * @property {Function} unshift - add a new task to the front of the `queue`.
	     * Invoke with `queue.unshift(task, [callback])`.
	     * @property {Function} remove - remove items from the queue that match a test
	     * function.  The test function will be passed an object with a `data` property,
	     * and a `priority` property, if this is a
	     * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
	     * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
	     * `function ({data, priority}) {}` and returns a Boolean.
	     * @property {Function} saturated - a callback that is called when the number of
	     * running workers hits the `concurrency` limit, and further tasks will be
	     * queued.
	     * @property {Function} unsaturated - a callback that is called when the number
	     * of running workers is less than the `concurrency` & `buffer` limits, and
	     * further tasks will not be queued.
	     * @property {number} buffer - A minimum threshold buffer in order to say that
	     * the `queue` is `unsaturated`.
	     * @property {Function} empty - a callback that is called when the last item
	     * from the `queue` is given to a `worker`.
	     * @property {Function} drain - a callback that is called when the last item
	     * from the `queue` has returned from the `worker`.
	     * @property {Function} error - a callback that is called when a task errors.
	     * Has the signature `function(error, task)`.
	     * @property {boolean} paused - a boolean for determining whether the queue is
	     * in a paused state.
	     * @property {Function} pause - a function that pauses the processing of tasks
	     * until `resume()` is called. Invoke with `queue.pause()`.
	     * @property {Function} resume - a function that resumes the processing of
	     * queued tasks when the queue is paused. Invoke with `queue.resume()`.
	     * @property {Function} kill - a function that removes the `drain` callback and
	     * empties remaining tasks from the queue forcing it to go idle. No more tasks
	     * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
	     */
	
	    /**
	     * Creates a `queue` object with the specified `concurrency`. Tasks added to the
	     * `queue` are processed in parallel (up to the `concurrency` limit). If all
	     * `worker`s are in progress, the task is queued until one becomes available.
	     * Once a `worker` completes a `task`, that `task`'s callback is called.
	     *
	     * @name queue
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {AsyncFunction} worker - An async function for processing a queued task.
	     * If you want to handle errors from an individual task, pass a callback to
	     * `q.push()`. Invoked with (task, callback).
	     * @param {number} [concurrency=1] - An `integer` for determining how many
	     * `worker` functions should be run in parallel.  If omitted, the concurrency
	     * defaults to `1`.  If the concurrency is `0`, an error is thrown.
	     * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
	     * attached as certain properties to listen for specific events during the
	     * lifecycle of the queue.
	     * @example
	     *
	     * // create a queue object with concurrency 2
	     * var q = async.queue(function(task, callback) {
	     *     console.log('hello ' + task.name);
	     *     callback();
	     * }, 2);
	     *
	     * // assign a callback
	     * q.drain = function() {
	     *     console.log('all items have been processed');
	     * };
	     *
	     * // add some items to the queue
	     * q.push({name: 'foo'}, function(err) {
	     *     console.log('finished processing foo');
	     * });
	     * q.push({name: 'bar'}, function (err) {
	     *     console.log('finished processing bar');
	     * });
	     *
	     * // add some items to the queue (batch-wise)
	     * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
	     *     console.log('finished processing item');
	     * });
	     *
	     * // add some items to the front of the queue
	     * q.unshift({name: 'bar'}, function (err) {
	     *     console.log('finished processing bar');
	     * });
	     */
	    var queue$1 = function queue$1(worker, concurrency) {
	        var _worker = wrapAsync(worker);
	        return queue(function (items, cb) {
	            _worker(items[0], cb);
	        }, concurrency, 1);
	    };
	
	    /**
	     * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
	     * completed in ascending priority order.
	     *
	     * @name priorityQueue
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.queue]{@link module:ControlFlow.queue}
	     * @category Control Flow
	     * @param {AsyncFunction} worker - An async function for processing a queued task.
	     * If you want to handle errors from an individual task, pass a callback to
	     * `q.push()`.
	     * Invoked with (task, callback).
	     * @param {number} concurrency - An `integer` for determining how many `worker`
	     * functions should be run in parallel.  If omitted, the concurrency defaults to
	     * `1`.  If the concurrency is `0`, an error is thrown.
	     * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
	     * differences between `queue` and `priorityQueue` objects:
	     * * `push(task, priority, [callback])` - `priority` should be a number. If an
	     *   array of `tasks` is given, all tasks will be assigned the same priority.
	     * * The `unshift` method was removed.
	     */
	    var priorityQueue = function priorityQueue(worker, concurrency) {
	        // Start with a normal queue
	        var q = queue$1(worker, concurrency);
	
	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            if (callback == null) callback = noop;
	            if (typeof callback !== 'function') {
	                throw new Error('task callback must be a function');
	            }
	            q.started = true;
	            if (!isArray(data)) {
	                data = [data];
	            }
	            if (data.length === 0) {
	                // call drain immediately if there are no tasks
	                return setImmediate$1(function () {
	                    q.drain();
	                });
	            }
	
	            priority = priority || 0;
	            var nextNode = q._tasks.head;
	            while (nextNode && priority >= nextNode.priority) {
	                nextNode = nextNode.next;
	            }
	
	            for (var i = 0, l = data.length; i < l; i++) {
	                var item = {
	                    data: data[i],
	                    priority: priority,
	                    callback: callback
	                };
	
	                if (nextNode) {
	                    q._tasks.insertBefore(nextNode, item);
	                } else {
	                    q._tasks.push(item);
	                }
	            }
	            setImmediate$1(q.process);
	        };
	
	        // Remove unshift function
	        delete q.unshift;
	
	        return q;
	    };
	
	    /**
	     * Runs the `tasks` array of functions in parallel, without waiting until the
	     * previous function has completed. Once any of the `tasks` complete or pass an
	     * error to its callback, the main `callback` is immediately called. It's
	     * equivalent to `Promise.race()`.
	     *
	     * @name race
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
	     * to run. Each function can complete with an optional `result` value.
	     * @param {Function} callback - A callback to run once any of the functions have
	     * completed. This function gets an error or result from the first function that
	     * completed. Invoked with (err, result).
	     * @returns undefined
	     * @example
	     *
	     * async.race([
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ],
	     * // main callback
	     * function(err, result) {
	     *     // the result will be equal to 'two' as it finishes earlier
	     * });
	     */
	    function race(tasks, callback) {
	        callback = once(callback || noop);
	        if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
	        if (!tasks.length) return callback();
	        for (var i = 0, l = tasks.length; i < l; i++) {
	            wrapAsync(tasks[i])(callback);
	        }
	    }
	
	    /**
	     * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
	     *
	     * @name reduceRight
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reduce]{@link module:Collections.reduce}
	     * @alias foldr
	     * @category Collection
	     * @param {Array} array - A collection to iterate over.
	     * @param {*} memo - The initial state of the reduction.
	     * @param {AsyncFunction} iteratee - A function applied to each item in the
	     * array to produce the next step in the reduction.
	     * The `iteratee` should complete with the next state of the reduction.
	     * If the iteratee complete with an error, the reduction is stopped and the
	     * main `callback` is immediately called with the error.
	     * Invoked with (memo, item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the reduced value. Invoked with
	     * (err, result).
	     */
	    function reduceRight(array, memo, iteratee, callback) {
	        var reversed = slice(array).reverse();
	        reduce(reversed, memo, iteratee, callback);
	    }
	
	    /**
	     * Wraps the async function in another function that always completes with a
	     * result object, even when it errors.
	     *
	     * The result object has either the property `error` or `value`.
	     *
	     * @name reflect
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} fn - The async function you want to wrap
	     * @returns {Function} - A function that always passes null to it's callback as
	     * the error. The second argument to the callback will be an `object` with
	     * either an `error` or a `value` property.
	     * @example
	     *
	     * async.parallel([
	     *     async.reflect(function(callback) {
	     *         // do some stuff ...
	     *         callback(null, 'one');
	     *     }),
	     *     async.reflect(function(callback) {
	     *         // do some more stuff but error ...
	     *         callback('bad stuff happened');
	     *     }),
	     *     async.reflect(function(callback) {
	     *         // do some more stuff ...
	     *         callback(null, 'two');
	     *     })
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results[0].value = 'one'
	     *     // results[1].error = 'bad stuff happened'
	     *     // results[2].value = 'two'
	     * });
	     */
	    function reflect(fn) {
	        var _fn = wrapAsync(fn);
	        return initialParams(function reflectOn(args, reflectCallback) {
	            args.push(function callback(error, cbArg) {
	                if (error) {
	                    reflectCallback(null, { error: error });
	                } else {
	                    var value;
	                    if (arguments.length <= 2) {
	                        value = cbArg;
	                    } else {
	                        value = slice(arguments, 1);
	                    }
	                    reflectCallback(null, { value: value });
	                }
	            });
	
	            return _fn.apply(this, args);
	        });
	    }
	
	    /**
	     * A helper function that wraps an array or an object of functions with `reflect`.
	     *
	     * @name reflectAll
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @see [async.reflect]{@link module:Utils.reflect}
	     * @category Util
	     * @param {Array|Object|Iterable} tasks - The collection of
	     * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
	     * @returns {Array} Returns an array of async functions, each wrapped in
	     * `async.reflect`
	     * @example
	     *
	     * let tasks = [
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     function(callback) {
	     *         // do some more stuff but error ...
	     *         callback(new Error('bad stuff happened'));
	     *     },
	     *     function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'two');
	     *         }, 100);
	     *     }
	     * ];
	     *
	     * async.parallel(async.reflectAll(tasks),
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results[0].value = 'one'
	     *     // results[1].error = Error('bad stuff happened')
	     *     // results[2].value = 'two'
	     * });
	     *
	     * // an example using an object instead of an array
	     * let tasks = {
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'one');
	     *         }, 200);
	     *     },
	     *     two: function(callback) {
	     *         callback('two');
	     *     },
	     *     three: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 'three');
	     *         }, 100);
	     *     }
	     * };
	     *
	     * async.parallel(async.reflectAll(tasks),
	     * // optional callback
	     * function(err, results) {
	     *     // values
	     *     // results.one.value = 'one'
	     *     // results.two.error = 'two'
	     *     // results.three.value = 'three'
	     * });
	     */
	    function reflectAll(tasks) {
	        var results;
	        if (isArray(tasks)) {
	            results = arrayMap(tasks, reflect);
	        } else {
	            results = {};
	            baseForOwn(tasks, function (task, key) {
	                results[key] = reflect.call(this, task);
	            });
	        }
	        return results;
	    }
	
	    function reject$1(eachfn, arr, iteratee, callback) {
	        _filter(eachfn, arr, function (value, cb) {
	            iteratee(value, function (err, v) {
	                cb(err, !v);
	            });
	        }, callback);
	    }
	
	    /**
	     * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
	     *
	     * @name reject
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.filter]{@link module:Collections.filter}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - An async truth test to apply to each item in
	     * `coll`.
	     * The should complete with a boolean value as its `result`.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     * @example
	     *
	     * async.reject(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, results) {
	     *     // results now equals an array of missing files
	     *     createFiles(results);
	     * });
	     */
	    var reject = doParallel(reject$1);
	
	    /**
	     * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name rejectLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reject]{@link module:Collections.reject}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {Function} iteratee - An async truth test to apply to each item in
	     * `coll`.
	     * The should complete with a boolean value as its `result`.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var rejectLimit = doParallelLimit(reject$1);
	
	    /**
	     * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
	     *
	     * @name rejectSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.reject]{@link module:Collections.reject}
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {Function} iteratee - An async truth test to apply to each item in
	     * `coll`.
	     * The should complete with a boolean value as its `result`.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Invoked with (err, results).
	     */
	    var rejectSeries = doLimit(rejectLimit, 1);
	
	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */
	    function constant$1(value) {
	        return function () {
	            return value;
	        };
	    }
	
	    /**
	     * Attempts to get a successful response from `task` no more than `times` times
	     * before returning an error. If the task is successful, the `callback` will be
	     * passed the result of the successful task. If all attempts fail, the callback
	     * will be passed the error and result (if any) of the final attempt.
	     *
	     * @name retry
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @see [async.retryable]{@link module:ControlFlow.retryable}
	     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
	     * object with `times` and `interval` or a number.
	     * * `times` - The number of attempts to make before giving up.  The default
	     *   is `5`.
	     * * `interval` - The time to wait between retries, in milliseconds.  The
	     *   default is `0`. The interval may also be specified as a function of the
	     *   retry count (see example).
	     * * `errorFilter` - An optional synchronous function that is invoked on
	     *   erroneous result. If it returns `true` the retry attempts will continue;
	     *   if the function returns `false` the retry flow is aborted with the current
	     *   attempt's error and result being returned to the final callback.
	     *   Invoked with (err).
	     * * If `opts` is a number, the number specifies the number of times to retry,
	     *   with the default interval of `0`.
	     * @param {AsyncFunction} task - An async function to retry.
	     * Invoked with (callback).
	     * @param {Function} [callback] - An optional callback which is called when the
	     * task has succeeded, or after the final failed attempt. It receives the `err`
	     * and `result` arguments of the last attempt at completing the `task`. Invoked
	     * with (err, results).
	     *
	     * @example
	     *
	     * // The `retry` function can be used as a stand-alone control flow by passing
	     * // a callback, as shown below:
	     *
	     * // try calling apiMethod 3 times
	     * async.retry(3, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod 3 times, waiting 200 ms between each retry
	     * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod 10 times with exponential backoff
	     * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
	     * async.retry({
	     *   times: 10,
	     *   interval: function(retryCount) {
	     *     return 50 * Math.pow(2, retryCount);
	     *   }
	     * }, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod the default 5 times no delay between each retry
	     * async.retry(apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // try calling apiMethod only when error condition satisfies, all other
	     * // errors will abort the retry control flow and return to final callback
	     * async.retry({
	     *   errorFilter: function(err) {
	     *     return err.message === 'Temporary error'; // only retry on a specific error
	     *   }
	     * }, apiMethod, function(err, result) {
	     *     // do something with the result
	     * });
	     *
	     * // to retry individual methods that are not as reliable within other
	     * // control flow functions, use the `retryable` wrapper:
	     * async.auto({
	     *     users: api.getUsers.bind(api),
	     *     payments: async.retryable(3, api.getPayments.bind(api))
	     * }, function(err, results) {
	     *     // do something with the results
	     * });
	     *
	     */
	    function retry(opts, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;
	
	        var options = {
	            times: DEFAULT_TIMES,
	            intervalFunc: constant$1(DEFAULT_INTERVAL)
	        };
	
	        function parseTimes(acc, t) {
	            if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object') {
	                acc.times = +t.times || DEFAULT_TIMES;
	
	                acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
	
	                acc.errorFilter = t.errorFilter;
	            } else if (typeof t === 'number' || typeof t === 'string') {
	                acc.times = +t || DEFAULT_TIMES;
	            } else {
	                throw new Error("Invalid arguments for async.retry");
	            }
	        }
	
	        if (arguments.length < 3 && typeof opts === 'function') {
	            callback = task || noop;
	            task = opts;
	        } else {
	            parseTimes(options, opts);
	            callback = callback || noop;
	        }
	
	        if (typeof task !== 'function') {
	            throw new Error("Invalid arguments for async.retry");
	        }
	
	        var _task = wrapAsync(task);
	
	        var attempt = 1;
	        function retryAttempt() {
	            _task(function (err) {
	                if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
	                    setTimeout(retryAttempt, options.intervalFunc(attempt));
	                } else {
	                    callback.apply(null, arguments);
	                }
	            });
	        }
	
	        retryAttempt();
	    }
	
	    /**
	     * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
	     * wraps a task and makes it retryable, rather than immediately calling it
	     * with retries.
	     *
	     * @name retryable
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.retry]{@link module:ControlFlow.retry}
	     * @category Control Flow
	     * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
	     * options, exactly the same as from `retry`
	     * @param {AsyncFunction} task - the asynchronous function to wrap.
	     * This function will be passed any arguments passed to the returned wrapper.
	     * Invoked with (...args, callback).
	     * @returns {AsyncFunction} The wrapped function, which when invoked, will
	     * retry on an error, based on the parameters specified in `opts`.
	     * This function will accept the same parameters as `task`.
	     * @example
	     *
	     * async.auto({
	     *     dep1: async.retryable(3, getFromFlakyService),
	     *     process: ["dep1", async.retryable(3, function (results, cb) {
	     *         maybeProcessData(results.dep1, cb);
	     *     })]
	     * }, callback);
	     */
	    var retryable = function retryable(opts, task) {
	        if (!task) {
	            task = opts;
	            opts = null;
	        }
	        var _task = wrapAsync(task);
	        return initialParams(function (args, callback) {
	            function taskFn(cb) {
	                _task.apply(null, args.concat(cb));
	            }
	
	            if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
	        });
	    };
	
	    /**
	     * Run the functions in the `tasks` collection in series, each one running once
	     * the previous function has completed. If any functions in the series pass an
	     * error to its callback, no more functions are run, and `callback` is
	     * immediately called with the value of the error. Otherwise, `callback`
	     * receives an array of results when `tasks` have completed.
	     *
	     * It is also possible to use an object instead of an array. Each property will
	     * be run as a function, and the results will be passed to the final `callback`
	     * as an object instead of an array. This can be a more readable way of handling
	     *  results from {@link async.series}.
	     *
	     * **Note** that while many implementations preserve the order of object
	     * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
	     * explicitly states that
	     *
	     * > The mechanics and order of enumerating the properties is not specified.
	     *
	     * So if you rely on the order in which your series of functions are executed,
	     * and want this to work on all platforms, consider using an array.
	     *
	     * @name series
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection containing
	     * [async functions]{@link AsyncFunction} to run in series.
	     * Each function can complete with any number of optional `result` values.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed. This function gets a results array (or object)
	     * containing all the result arguments passed to the `task` callbacks. Invoked
	     * with (err, result).
	     * @example
	     * async.series([
	     *     function(callback) {
	     *         // do some stuff ...
	     *         callback(null, 'one');
	     *     },
	     *     function(callback) {
	     *         // do some more stuff ...
	     *         callback(null, 'two');
	     *     }
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     // results is now equal to ['one', 'two']
	     * });
	     *
	     * async.series({
	     *     one: function(callback) {
	     *         setTimeout(function() {
	     *             callback(null, 1);
	     *         }, 200);
	     *     },
	     *     two: function(callback){
	     *         setTimeout(function() {
	     *             callback(null, 2);
	     *         }, 100);
	     *     }
	     * }, function(err, results) {
	     *     // results is now equal to: {one: 1, two: 2}
	     * });
	     */
	    function series(tasks, callback) {
	        _parallel(eachOfSeries, tasks, callback);
	    }
	
	    /**
	     * Returns `true` if at least one element in the `coll` satisfies an async test.
	     * If any iteratee call returns `true`, the main `callback` is immediately
	     * called.
	     *
	     * @name some
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @alias any
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collections in parallel.
	     * The iteratee should complete with a boolean `result` value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     * @example
	     *
	     * async.some(['file1','file2','file3'], function(filePath, callback) {
	     *     fs.access(filePath, function(err) {
	     *         callback(null, !err)
	     *     });
	     * }, function(err, result) {
	     *     // if result is true then at least one of the files exists
	     * });
	     */
	    var some = doParallel(_createTester(Boolean, identity));
	
	    /**
	     * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
	     *
	     * @name someLimit
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.some]{@link module:Collections.some}
	     * @alias anyLimit
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collections in parallel.
	     * The iteratee should complete with a boolean `result` value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     */
	    var someLimit = doParallelLimit(_createTester(Boolean, identity));
	
	    /**
	     * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
	     *
	     * @name someSeries
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @see [async.some]{@link module:Collections.some}
	     * @alias anySeries
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async truth test to apply to each item
	     * in the collections in series.
	     * The iteratee should complete with a boolean `result` value.
	     * Invoked with (item, callback).
	     * @param {Function} [callback] - A callback which is called as soon as any
	     * iteratee returns `true`, or after all the iteratee functions have finished.
	     * Result will be either `true` or `false` depending on the values of the async
	     * tests. Invoked with (err, result).
	     */
	    var someSeries = doLimit(someLimit, 1);
	
	    /**
	     * Sorts a list by the results of running each `coll` value through an async
	     * `iteratee`.
	     *
	     * @name sortBy
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {AsyncFunction} iteratee - An async function to apply to each item in
	     * `coll`.
	     * The iteratee should complete with a value to use as the sort criteria as
	     * its `result`.
	     * Invoked with (item, callback).
	     * @param {Function} callback - A callback which is called after all the
	     * `iteratee` functions have finished, or an error occurs. Results is the items
	     * from the original `coll` sorted by the values returned by the `iteratee`
	     * calls. Invoked with (err, results).
	     * @example
	     *
	     * async.sortBy(['file1','file2','file3'], function(file, callback) {
	     *     fs.stat(file, function(err, stats) {
	     *         callback(err, stats.mtime);
	     *     });
	     * }, function(err, results) {
	     *     // results is now the original array of files sorted by
	     *     // modified date
	     * });
	     *
	     * // By modifying the callback parameter the
	     * // sorting order can be influenced:
	     *
	     * // ascending order
	     * async.sortBy([1,9,3,5], function(x, callback) {
	     *     callback(null, x);
	     * }, function(err,result) {
	     *     // result callback
	     * });
	     *
	     * // descending order
	     * async.sortBy([1,9,3,5], function(x, callback) {
	     *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
	     * }, function(err,result) {
	     *     // result callback
	     * });
	     */
	    function sortBy(coll, iteratee, callback) {
	        var _iteratee = wrapAsync(iteratee);
	        map(coll, function (x, callback) {
	            _iteratee(x, function (err, criteria) {
	                if (err) return callback(err);
	                callback(null, { value: x, criteria: criteria });
	            });
	        }, function (err, results) {
	            if (err) return callback(err);
	            callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
	        });
	
	        function comparator(left, right) {
	            var a = left.criteria,
	                b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    }
	
	    /**
	     * Sets a time limit on an asynchronous function. If the function does not call
	     * its callback within the specified milliseconds, it will be called with a
	     * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
	     *
	     * @name timeout
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @category Util
	     * @param {AsyncFunction} asyncFn - The async function to limit in time.
	     * @param {number} milliseconds - The specified time limit.
	     * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
	     * to timeout Error for more information..
	     * @returns {AsyncFunction} Returns a wrapped function that can be used with any
	     * of the control flow functions.
	     * Invoke this function with the same parameters as you would `asyncFunc`.
	     * @example
	     *
	     * function myFunction(foo, callback) {
	     *     doAsyncTask(foo, function(err, data) {
	     *         // handle errors
	     *         if (err) return callback(err);
	     *
	     *         // do some stuff ...
	     *
	     *         // return processed data
	     *         return callback(null, data);
	     *     });
	     * }
	     *
	     * var wrapped = async.timeout(myFunction, 1000);
	     *
	     * // call `wrapped` as you would `myFunction`
	     * wrapped({ bar: 'bar' }, function(err, data) {
	     *     // if `myFunction` takes < 1000 ms to execute, `err`
	     *     // and `data` will have their expected values
	     *
	     *     // else `err` will be an Error with the code 'ETIMEDOUT'
	     * });
	     */
	    function timeout(asyncFn, milliseconds, info) {
	        var fn = wrapAsync(asyncFn);
	
	        return initialParams(function (args, callback) {
	            var timedOut = false;
	            var timer;
	
	            function timeoutCallback() {
	                var name = asyncFn.name || 'anonymous';
	                var error = new Error('Callback function "' + name + '" timed out.');
	                error.code = 'ETIMEDOUT';
	                if (info) {
	                    error.info = info;
	                }
	                timedOut = true;
	                callback(error);
	            }
	
	            args.push(function () {
	                if (!timedOut) {
	                    callback.apply(null, arguments);
	                    clearTimeout(timer);
	                }
	            });
	
	            // setup timer and call original function
	            timer = setTimeout(timeoutCallback, milliseconds);
	            fn.apply(null, args);
	        });
	    }
	
	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil;
	    var nativeMax = Math.max;
	
	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	        var index = -1,
	            length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	            result = Array(length);
	
	        while (length--) {
	            result[fromRight ? length : ++index] = start;
	            start += step;
	        }
	        return result;
	    }
	
	    /**
	     * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
	     * time.
	     *
	     * @name timesLimit
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.times]{@link module:ControlFlow.times}
	     * @category Control Flow
	     * @param {number} count - The number of times to run the function.
	     * @param {number} limit - The maximum number of async operations at a time.
	     * @param {AsyncFunction} iteratee - The async function to call `n` times.
	     * Invoked with the iteration index and a callback: (n, next).
	     * @param {Function} callback - see [async.map]{@link module:Collections.map}.
	     */
	    function timeLimit(count, limit, iteratee, callback) {
	        var _iteratee = wrapAsync(iteratee);
	        mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
	    }
	
	    /**
	     * Calls the `iteratee` function `n` times, and accumulates results in the same
	     * manner you would use with [map]{@link module:Collections.map}.
	     *
	     * @name times
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.map]{@link module:Collections.map}
	     * @category Control Flow
	     * @param {number} n - The number of times to run the function.
	     * @param {AsyncFunction} iteratee - The async function to call `n` times.
	     * Invoked with the iteration index and a callback: (n, next).
	     * @param {Function} callback - see {@link module:Collections.map}.
	     * @example
	     *
	     * // Pretend this is some complicated async factory
	     * var createUser = function(id, callback) {
	     *     callback(null, {
	     *         id: 'user' + id
	     *     });
	     * };
	     *
	     * // generate 5 users
	     * async.times(5, function(n, next) {
	     *     createUser(n, function(err, user) {
	     *         next(err, user);
	     *     });
	     * }, function(err, users) {
	     *     // we should now have 5 users
	     * });
	     */
	    var times = doLimit(timeLimit, Infinity);
	
	    /**
	     * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
	     *
	     * @name timesSeries
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.times]{@link module:ControlFlow.times}
	     * @category Control Flow
	     * @param {number} n - The number of times to run the function.
	     * @param {AsyncFunction} iteratee - The async function to call `n` times.
	     * Invoked with the iteration index and a callback: (n, next).
	     * @param {Function} callback - see {@link module:Collections.map}.
	     */
	    var timesSeries = doLimit(timeLimit, 1);
	
	    /**
	     * A relative of `reduce`.  Takes an Object or Array, and iterates over each
	     * element in series, each step potentially mutating an `accumulator` value.
	     * The type of the accumulator defaults to the type of collection passed in.
	     *
	     * @name transform
	     * @static
	     * @memberOf module:Collections
	     * @method
	     * @category Collection
	     * @param {Array|Iterable|Object} coll - A collection to iterate over.
	     * @param {*} [accumulator] - The initial state of the transform.  If omitted,
	     * it will default to an empty Object or Array, depending on the type of `coll`
	     * @param {AsyncFunction} iteratee - A function applied to each item in the
	     * collection that potentially modifies the accumulator.
	     * Invoked with (accumulator, item, key, callback).
	     * @param {Function} [callback] - A callback which is called after all the
	     * `iteratee` functions have finished. Result is the transformed accumulator.
	     * Invoked with (err, result).
	     * @example
	     *
	     * async.transform([1,2,3], function(acc, item, index, callback) {
	     *     // pointless async:
	     *     process.nextTick(function() {
	     *         acc.push(item * 2)
	     *         callback(null)
	     *     });
	     * }, function(err, result) {
	     *     // result is now equal to [2, 4, 6]
	     * });
	     *
	     * @example
	     *
	     * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
	     *     setImmediate(function () {
	     *         obj[key] = val * 2;
	     *         callback();
	     *     })
	     * }, function (err, result) {
	     *     // result is equal to {a: 2, b: 4, c: 6}
	     * })
	     */
	    function transform(coll, accumulator, iteratee, callback) {
	        if (arguments.length <= 3) {
	            callback = iteratee;
	            iteratee = accumulator;
	            accumulator = isArray(coll) ? [] : {};
	        }
	        callback = once(callback || noop);
	        var _iteratee = wrapAsync(iteratee);
	
	        eachOf(coll, function (v, k, cb) {
	            _iteratee(accumulator, v, k, cb);
	        }, function (err) {
	            callback(err, accumulator);
	        });
	    }
	
	    /**
	     * It runs each task in series but stops whenever any of the functions were
	     * successful. If one of the tasks were successful, the `callback` will be
	     * passed the result of the successful task. If all tasks fail, the callback
	     * will be passed the error and result (if any) of the final attempt.
	     *
	     * @name tryEach
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array|Iterable|Object} tasks - A collection containing functions to
	     * run, each function is passed a `callback(err, result)` it must call on
	     * completion with an error `err` (which can be `null`) and an optional `result`
	     * value.
	     * @param {Function} [callback] - An optional callback which is called when one
	     * of the tasks has succeeded, or all have failed. It receives the `err` and
	     * `result` arguments of the last attempt at completing the `task`. Invoked with
	     * (err, results).
	     * @example
	     * async.tryEach([
	     *     function getDataFromFirstWebsite(callback) {
	     *         // Try getting the data from the first website
	     *         callback(err, data);
	     *     },
	     *     function getDataFromSecondWebsite(callback) {
	     *         // First website failed,
	     *         // Try getting the data from the backup website
	     *         callback(err, data);
	     *     }
	     * ],
	     * // optional callback
	     * function(err, results) {
	     *     Now do something with the data.
	     * });
	     *
	     */
	    function tryEach(tasks, callback) {
	        var error = null;
	        var result;
	        callback = callback || noop;
	        eachSeries(tasks, function (task, callback) {
	            wrapAsync(task)(function (err, res /*, ...args*/) {
	                if (arguments.length > 2) {
	                    result = slice(arguments, 1);
	                } else {
	                    result = res;
	                }
	                error = err;
	                callback(!err);
	            });
	        }, function () {
	            callback(error, result);
	        });
	    }
	
	    /**
	     * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
	     * unmemoized form. Handy for testing.
	     *
	     * @name unmemoize
	     * @static
	     * @memberOf module:Utils
	     * @method
	     * @see [async.memoize]{@link module:Utils.memoize}
	     * @category Util
	     * @param {AsyncFunction} fn - the memoized function
	     * @returns {AsyncFunction} a function that calls the original unmemoized function
	     */
	    function unmemoize(fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    }
	
	    /**
	     * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
	     * stopped, or an error occurs.
	     *
	     * @name whilst
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Function} test - synchronous truth test to perform before each
	     * execution of `iteratee`. Invoked with ().
	     * @param {AsyncFunction} iteratee - An async function which is called each time
	     * `test` passes. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has failed and repeated execution of `iteratee` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `iteratee`'s
	     * callback. Invoked with (err, [results]);
	     * @returns undefined
	     * @example
	     *
	     * var count = 0;
	     * async.whilst(
	     *     function() { return count < 5; },
	     *     function(callback) {
	     *         count++;
	     *         setTimeout(function() {
	     *             callback(null, count);
	     *         }, 1000);
	     *     },
	     *     function (err, n) {
	     *         // 5 seconds have passed, n = 5
	     *     }
	     * );
	     */
	    function whilst(test, iteratee, callback) {
	        callback = onlyOnce(callback || noop);
	        var _iteratee = wrapAsync(iteratee);
	        if (!test()) return callback(null);
	        var next = function next(err /*, ...args*/) {
	            if (err) return callback(err);
	            if (test()) return _iteratee(next);
	            var args = slice(arguments, 1);
	            callback.apply(null, [null].concat(args));
	        };
	        _iteratee(next);
	    }
	
	    /**
	     * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
	     * stopped, or an error occurs. `callback` will be passed an error and any
	     * arguments passed to the final `iteratee`'s callback.
	     *
	     * The inverse of [whilst]{@link module:ControlFlow.whilst}.
	     *
	     * @name until
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @see [async.whilst]{@link module:ControlFlow.whilst}
	     * @category Control Flow
	     * @param {Function} test - synchronous truth test to perform before each
	     * execution of `iteratee`. Invoked with ().
	     * @param {AsyncFunction} iteratee - An async function which is called each time
	     * `test` fails. Invoked with (callback).
	     * @param {Function} [callback] - A callback which is called after the test
	     * function has passed and repeated execution of `iteratee` has stopped. `callback`
	     * will be passed an error and any arguments passed to the final `iteratee`'s
	     * callback. Invoked with (err, [results]);
	     */
	    function until(test, iteratee, callback) {
	        whilst(function () {
	            return !test.apply(this, arguments);
	        }, iteratee, callback);
	    }
	
	    /**
	     * Runs the `tasks` array of functions in series, each passing their results to
	     * the next in the array. However, if any of the `tasks` pass an error to their
	     * own callback, the next function is not executed, and the main `callback` is
	     * immediately called with the error.
	     *
	     * @name waterfall
	     * @static
	     * @memberOf module:ControlFlow
	     * @method
	     * @category Control Flow
	     * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
	     * to run.
	     * Each function should complete with any number of `result` values.
	     * The `result` values will be passed as arguments, in order, to the next task.
	     * @param {Function} [callback] - An optional callback to run once all the
	     * functions have completed. This will be passed the results of the last task's
	     * callback. Invoked with (err, [results]).
	     * @returns undefined
	     * @example
	     *
	     * async.waterfall([
	     *     function(callback) {
	     *         callback(null, 'one', 'two');
	     *     },
	     *     function(arg1, arg2, callback) {
	     *         // arg1 now equals 'one' and arg2 now equals 'two'
	     *         callback(null, 'three');
	     *     },
	     *     function(arg1, callback) {
	     *         // arg1 now equals 'three'
	     *         callback(null, 'done');
	     *     }
	     * ], function (err, result) {
	     *     // result now equals 'done'
	     * });
	     *
	     * // Or, with named functions:
	     * async.waterfall([
	     *     myFirstFunction,
	     *     mySecondFunction,
	     *     myLastFunction,
	     * ], function (err, result) {
	     *     // result now equals 'done'
	     * });
	     * function myFirstFunction(callback) {
	     *     callback(null, 'one', 'two');
	     * }
	     * function mySecondFunction(arg1, arg2, callback) {
	     *     // arg1 now equals 'one' and arg2 now equals 'two'
	     *     callback(null, 'three');
	     * }
	     * function myLastFunction(arg1, callback) {
	     *     // arg1 now equals 'three'
	     *     callback(null, 'done');
	     * }
	     */
	    var waterfall = function waterfall(tasks, callback) {
	        callback = once(callback || noop);
	        if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
	        if (!tasks.length) return callback();
	        var taskIndex = 0;
	
	        function nextTask(args) {
	            var task = wrapAsync(tasks[taskIndex++]);
	            args.push(onlyOnce(next));
	            task.apply(null, args);
	        }
	
	        function next(err /*, ...args*/) {
	            if (err || taskIndex === tasks.length) {
	                return callback.apply(null, arguments);
	            }
	            nextTask(slice(arguments, 1));
	        }
	
	        nextTask([]);
	    };
	
	    /**
	     * An "async function" in the context of Async is an asynchronous function with
	     * a variable number of parameters, with the final parameter being a callback.
	     * (`function (arg1, arg2, ..., callback) {}`)
	     * The final callback is of the form `callback(err, results...)`, which must be
	     * called once the function is completed.  The callback should be called with a
	     * Error as its first argument to signal that an error occurred.
	     * Otherwise, if no error occurred, it should be called with `null` as the first
	     * argument, and any additional `result` arguments that may apply, to signal
	     * successful completion.
	     * The callback must be called exactly once, ideally on a later tick of the
	     * JavaScript event loop.
	     *
	     * This type of function is also referred to as a "Node-style async function",
	     * or a "continuation passing-style function" (CPS). Most of the methods of this
	     * library are themselves CPS/Node-style async functions, or functions that
	     * return CPS/Node-style async functions.
	     *
	     * Wherever we accept a Node-style async function, we also directly accept an
	     * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
	     * In this case, the `async` function will not be passed a final callback
	     * argument, and any thrown error will be used as the `err` argument of the
	     * implicit callback, and the return value will be used as the `result` value.
	     * (i.e. a `rejected` of the returned Promise becomes the `err` callback
	     * argument, and a `resolved` value becomes the `result`.)
	     *
	     * Note, due to JavaScript limitations, we can only detect native `async`
	     * functions and not transpilied implementations.
	     * Your environment must have `async`/`await` support for this to work.
	     * (e.g. Node > v7.6, or a recent version of a modern browser).
	     * If you are using `async` functions through a transpiler (e.g. Babel), you
	     * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
	     * because the `async function` will be compiled to an ordinary function that
	     * returns a promise.
	     *
	     * @typedef {Function} AsyncFunction
	     * @static
	     */
	
	    /**
	     * Async is a utility module which provides straight-forward, powerful functions
	     * for working with asynchronous JavaScript. Although originally designed for
	     * use with [Node.js](http://nodejs.org) and installable via
	     * `npm install --save async`, it can also be used directly in the browser.
	     * @module async
	     * @see AsyncFunction
	     */
	
	    /**
	     * A collection of `async` functions for manipulating collections, such as
	     * arrays and objects.
	     * @module Collections
	     */
	
	    /**
	     * A collection of `async` functions for controlling the flow through a script.
	     * @module ControlFlow
	     */
	
	    /**
	     * A collection of `async` utility functions.
	     * @module Utils
	     */
	
	    var index = {
	        apply: apply,
	        applyEach: applyEach,
	        applyEachSeries: applyEachSeries,
	        asyncify: asyncify,
	        auto: auto,
	        autoInject: autoInject,
	        cargo: cargo,
	        compose: compose,
	        concat: concat,
	        concatLimit: concatLimit,
	        concatSeries: concatSeries,
	        constant: constant,
	        detect: detect,
	        detectLimit: detectLimit,
	        detectSeries: detectSeries,
	        dir: dir,
	        doDuring: doDuring,
	        doUntil: doUntil,
	        doWhilst: doWhilst,
	        during: during,
	        each: eachLimit,
	        eachLimit: eachLimit$1,
	        eachOf: eachOf,
	        eachOfLimit: eachOfLimit,
	        eachOfSeries: eachOfSeries,
	        eachSeries: eachSeries,
	        ensureAsync: ensureAsync,
	        every: every,
	        everyLimit: everyLimit,
	        everySeries: everySeries,
	        filter: filter,
	        filterLimit: filterLimit,
	        filterSeries: filterSeries,
	        forever: forever,
	        groupBy: groupBy,
	        groupByLimit: groupByLimit,
	        groupBySeries: groupBySeries,
	        log: log,
	        map: map,
	        mapLimit: mapLimit,
	        mapSeries: mapSeries,
	        mapValues: mapValues,
	        mapValuesLimit: mapValuesLimit,
	        mapValuesSeries: mapValuesSeries,
	        memoize: memoize,
	        nextTick: nextTick,
	        parallel: parallelLimit,
	        parallelLimit: parallelLimit$1,
	        priorityQueue: priorityQueue,
	        queue: queue$1,
	        race: race,
	        reduce: reduce,
	        reduceRight: reduceRight,
	        reflect: reflect,
	        reflectAll: reflectAll,
	        reject: reject,
	        rejectLimit: rejectLimit,
	        rejectSeries: rejectSeries,
	        retry: retry,
	        retryable: retryable,
	        seq: seq,
	        series: series,
	        setImmediate: setImmediate$1,
	        some: some,
	        someLimit: someLimit,
	        someSeries: someSeries,
	        sortBy: sortBy,
	        timeout: timeout,
	        times: times,
	        timesLimit: timeLimit,
	        timesSeries: timesSeries,
	        transform: transform,
	        tryEach: tryEach,
	        unmemoize: unmemoize,
	        until: until,
	        waterfall: waterfall,
	        whilst: whilst,
	
	        // aliases
	        all: every,
	        allLimit: everyLimit,
	        allSeries: everySeries,
	        any: some,
	        anyLimit: someLimit,
	        anySeries: someSeries,
	        find: detect,
	        findLimit: detectLimit,
	        findSeries: detectSeries,
	        forEach: eachLimit,
	        forEachSeries: eachSeries,
	        forEachLimit: eachLimit$1,
	        forEachOf: eachOf,
	        forEachOfSeries: eachOfSeries,
	        forEachOfLimit: eachOfLimit,
	        inject: reduce,
	        foldl: reduce,
	        foldr: reduceRight,
	        select: filter,
	        selectLimit: filterLimit,
	        selectSeries: filterSeries,
	        wrapSync: asyncify
	    };
	
	    exports['default'] = index;
	    exports.apply = apply;
	    exports.applyEach = applyEach;
	    exports.applyEachSeries = applyEachSeries;
	    exports.asyncify = asyncify;
	    exports.auto = auto;
	    exports.autoInject = autoInject;
	    exports.cargo = cargo;
	    exports.compose = compose;
	    exports.concat = concat;
	    exports.concatLimit = concatLimit;
	    exports.concatSeries = concatSeries;
	    exports.constant = constant;
	    exports.detect = detect;
	    exports.detectLimit = detectLimit;
	    exports.detectSeries = detectSeries;
	    exports.dir = dir;
	    exports.doDuring = doDuring;
	    exports.doUntil = doUntil;
	    exports.doWhilst = doWhilst;
	    exports.during = during;
	    exports.each = eachLimit;
	    exports.eachLimit = eachLimit$1;
	    exports.eachOf = eachOf;
	    exports.eachOfLimit = eachOfLimit;
	    exports.eachOfSeries = eachOfSeries;
	    exports.eachSeries = eachSeries;
	    exports.ensureAsync = ensureAsync;
	    exports.every = every;
	    exports.everyLimit = everyLimit;
	    exports.everySeries = everySeries;
	    exports.filter = filter;
	    exports.filterLimit = filterLimit;
	    exports.filterSeries = filterSeries;
	    exports.forever = forever;
	    exports.groupBy = groupBy;
	    exports.groupByLimit = groupByLimit;
	    exports.groupBySeries = groupBySeries;
	    exports.log = log;
	    exports.map = map;
	    exports.mapLimit = mapLimit;
	    exports.mapSeries = mapSeries;
	    exports.mapValues = mapValues;
	    exports.mapValuesLimit = mapValuesLimit;
	    exports.mapValuesSeries = mapValuesSeries;
	    exports.memoize = memoize;
	    exports.nextTick = nextTick;
	    exports.parallel = parallelLimit;
	    exports.parallelLimit = parallelLimit$1;
	    exports.priorityQueue = priorityQueue;
	    exports.queue = queue$1;
	    exports.race = race;
	    exports.reduce = reduce;
	    exports.reduceRight = reduceRight;
	    exports.reflect = reflect;
	    exports.reflectAll = reflectAll;
	    exports.reject = reject;
	    exports.rejectLimit = rejectLimit;
	    exports.rejectSeries = rejectSeries;
	    exports.retry = retry;
	    exports.retryable = retryable;
	    exports.seq = seq;
	    exports.series = series;
	    exports.setImmediate = setImmediate$1;
	    exports.some = some;
	    exports.someLimit = someLimit;
	    exports.someSeries = someSeries;
	    exports.sortBy = sortBy;
	    exports.timeout = timeout;
	    exports.times = times;
	    exports.timesLimit = timeLimit;
	    exports.timesSeries = timesSeries;
	    exports.transform = transform;
	    exports.tryEach = tryEach;
	    exports.unmemoize = unmemoize;
	    exports.until = until;
	    exports.waterfall = waterfall;
	    exports.whilst = whilst;
	    exports.all = every;
	    exports.allLimit = everyLimit;
	    exports.allSeries = everySeries;
	    exports.any = some;
	    exports.anyLimit = someLimit;
	    exports.anySeries = someSeries;
	    exports.find = detect;
	    exports.findLimit = detectLimit;
	    exports.findSeries = detectSeries;
	    exports.forEach = eachLimit;
	    exports.forEachSeries = eachSeries;
	    exports.forEachLimit = eachLimit$1;
	    exports.forEachOf = eachOf;
	    exports.forEachOfSeries = eachOfSeries;
	    exports.forEachOfLimit = eachOfLimit;
	    exports.inject = reduce;
	    exports.foldl = reduce;
	    exports.foldr = reduceRight;
	    exports.select = filter;
	    exports.selectLimit = filterLimit;
	    exports.selectSeries = filterSeries;
	    exports.wrapSync = asyncify;
	
	    Object.defineProperty(exports, '__esModule', { value: true });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(13), (function() { return this; }()), __webpack_require__(4)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(scope, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(12);
	// On some exotic environments, it's not clear which object `setimmediate` was
	// able to install onto.  Search each possibility in the same order as the
	// `setimmediate` library.
	exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
	exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	
	(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mapParser = __webpack_require__(8);
	
	var _mapParser2 = _interopRequireDefault(_mapParser);
	
	var _mapBuilder = __webpack_require__(9);
	
	var _mapBuilder2 = _interopRequireDefault(_mapBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Map = function () {
	  function Map(mapFile) {
	    _classCallCheck(this, Map);
	
	    this.mapFile = mapFile;
	    this._mapData = null;
	    this._mapNodes = null;
	  }
	
	  _createClass(Map, [{
	    key: 'mapData',
	    get: function get() {
	      if (!this._mapData) {
	        var that = this;
	        this._mapData = new Promise(function (resolve, reject) {
	          try {
	            (0, _mapParser2.default)(that.mapFile, resolve);
	          } catch (e) {
	            reject(e);
	          }
	        });
	      }
	      return this._mapData;
	    }
	  }, {
	    key: 'mapNodes',
	    get: function get() {
	      if (!this._mapNodes) {
	        this._mapNodes = this.mapData.then(function (mapData) {
	          return new Promise(function (resolve, reject) {
	            (0, _mapBuilder2.default)(mapData, resolve);
	          });
	        });
	      }
	      return this._mapNodes;
	    }
	  }]);
	
	  return Map;
	}();
	
	exports.default = Map;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	(function (global, factory) {
	
		"use strict";
	
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	
		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	
		// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
		// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
		// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
		// enough that all such attempts are guarded in a try block.
		"use strict";
	
		var arr = [];
	
		var document = window.document;
	
		var getProto = Object.getPrototypeOf;
	
		var _slice = arr.slice;
	
		var concat = arr.concat;
	
		var push = arr.push;
	
		var indexOf = arr.indexOf;
	
		var class2type = {};
	
		var toString = class2type.toString;
	
		var hasOwn = class2type.hasOwnProperty;
	
		var fnToString = hasOwn.toString;
	
		var ObjectFunctionString = fnToString.call(Object);
	
		var support = {};
	
		var isFunction = function isFunction(obj) {
	
			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			return typeof obj === "function" && typeof obj.nodeType !== "number";
		};
	
		var isWindow = function isWindow(obj) {
			return obj != null && obj === obj.window;
		};
	
		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};
	
		function DOMEval(code, doc, node) {
			doc = doc || document;
	
			var i,
			    script = doc.createElement("script");
	
			script.text = code;
			if (node) {
				for (i in preservedScriptAttributes) {
					if (node[i]) {
						script[i] = node[i];
					}
				}
			}
			doc.head.appendChild(script).parentNode.removeChild(script);
		}
	
		function toType(obj) {
			if (obj == null) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		}
		/* global Symbol */
		// Defining this global in .eslintrc.json would create a danger of using the global
		// unguarded in another place, it seems safer to define global only for this module
	
	
		var version = "3.3.1",
	
	
		// Define a local copy of jQuery
		jQuery = function jQuery(selector, context) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},
	
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	
		jQuery.fn = jQuery.prototype = {
	
			// The current version of jQuery being used
			jquery: version,
	
			constructor: jQuery,
	
			// The default length of a jQuery object is 0
			length: 0,
	
			toArray: function toArray() {
				return _slice.call(this);
			},
	
			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function get(num) {
	
				// Return all the elements in a clean array
				if (num == null) {
					return _slice.call(this);
				}
	
				// Return just the one element from the set
				return num < 0 ? this[num + this.length] : this[num];
			},
	
			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function pushStack(elems) {
	
				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);
	
				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
	
				// Return the newly-formed element set
				return ret;
			},
	
			// Execute a callback for every element in the matched set.
			each: function each(callback) {
				return jQuery.each(this, callback);
			},
	
			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},
	
			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},
	
			first: function first() {
				return this.eq(0);
			},
	
			last: function last() {
				return this.eq(-1);
			},
	
			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},
	
			end: function end() {
				return this.prevObject || this.constructor();
			},
	
			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};
	
		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;
	
			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;
	
				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}
	
			// Handle case when target is a string or something (possible in deep copy)
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
				target = {};
			}
	
			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
	
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
	
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];
	
						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}
	
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
	
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && Array.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);
	
							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			// Return the modified object
			return target;
		};
	
		jQuery.extend({
	
			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	
			// Assume jQuery is ready without the ready module
			isReady: true,
	
			error: function error(msg) {
				throw new Error(msg);
			},
	
			noop: function noop() {},
	
			isPlainObject: function isPlainObject(obj) {
				var proto, Ctor;
	
				// Detect obvious negatives
				// Use toString instead of jQuery.type to catch host objects
				if (!obj || toString.call(obj) !== "[object Object]") {
					return false;
				}
	
				proto = getProto(obj);
	
				// Objects with no prototype (e.g., `Object.create( null )`) are plain
				if (!proto) {
					return true;
				}
	
				// Objects with prototype are plain iff they were constructed by a global Object function
				Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
				return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
			},
	
			isEmptyObject: function isEmptyObject(obj) {
	
				/* eslint-disable no-unused-vars */
				// See https://github.com/eslint/eslint/issues/6125
				var name;
	
				for (name in obj) {
					return false;
				}
				return true;
			},
	
			// Evaluates a script in a global context
			globalEval: function globalEval(code) {
				DOMEval(code);
			},
	
			each: function each(obj, callback) {
				var length,
				    i = 0;
	
				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}
	
				return obj;
			},
	
			// Support: Android <=4.0 only
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},
	
			// results is for internal usage only
			makeArray: function makeArray(arr, results) {
				var ret = results || [];
	
				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}
	
				return ret;
			},
	
			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},
	
			// Support: Android <=4.0 only, PhantomJS 1 only
			// push.apply(_, arraylike) throws on ancient WebKit
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;
	
				for (; j < len; j++) {
					first[i++] = second[j];
				}
	
				first.length = i;
	
				return first;
			},
	
			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;
	
				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}
	
				return matches;
			},
	
			// arg is for internal usage only
			map: function map(elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];
	
				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
	
					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				}
	
				// Flatten any nested arrays
				return concat.apply([], ret);
			},
	
			// A global GUID counter for objects
			guid: 1,
	
			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});
	
		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}
	
		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});
	
		function isArrayLike(obj) {
	
			// Support: real iOS 8.2 only (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = toType(obj);
	
			if (isFunction(obj) || isWindow(obj)) {
				return false;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
	  * Sizzle CSS Selector Engine v2.3.3
	  * https://sizzlejs.com/
	  *
	  * Copyright jQuery Foundation and other contributors
	  * Released under the MIT license
	  * http://jquery.org/license
	  *
	  * Date: 2016-08-08
	  */
		function (window) {
	
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
	
	
			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
	
	
			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
	
	
			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
	
			// Use a stripped-down indexOf as it's faster than native
			// https://jsperf.com/thor-indexof-vs-for/5
			indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
	
			// Regular expressions
	
			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",
	
	
			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
	
			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",
	
	
			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
	
	
			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
	
	
			// CSS escapes
			// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
	
	
			// CSS string/identifier serialization
			// https://drafts.csswg.org/cssom/#common-serializing-idioms
			rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			    fcssescape = function fcssescape(ch, asCodePoint) {
				if (asCodePoint) {
	
					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if (ch === "\0") {
						return "\uFFFD";
					}
	
					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}
	
				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			},
	
	
			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function unloadHandler() {
				setDocument();
			},
			    disabledAncestor = addCombinator(function (elem) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			}, { dir: "parentNode", next: "legend" });
	
			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?
	
					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :
	
					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}
	
			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,
	
	
				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;
	
				results = results || [];
	
				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
	
					return results;
				}
	
				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {
	
					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;
	
					if (documentIsHTML) {
	
						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
	
							// ID selector
							if (m = match[1]) {
	
								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {
	
										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}
	
									// Element context
								} else {
	
									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
	
										results.push(elem);
										return results;
									}
								}
	
								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;
	
								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
	
								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}
	
						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
	
							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;
	
								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {
	
								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rcssescape, fcssescape);
								} else {
									context.setAttribute("id", nid = expando);
								}
	
								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								while (i--) {
									groups[i] = "#" + nid + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");
	
								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}
	
							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}
	
				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}
	
			/**
	   * Create key-value caches of limited size
	   * @returns {function(string, object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var keys = [];
	
				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}
	
			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}
	
			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created element and returns a boolean result
	   */
			function assert(fn) {
				var el = document.createElement("fieldset");
	
				try {
					return !!fn(el);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (el.parentNode) {
						el.parentNode.removeChild(el);
					}
					// release memory in IE
					el = null;
				}
			}
	
			/**
	   * Adds the same handler for all of the specified attrs
	   * @param {String} attrs Pipe-separated list of attributes
	   * @param {Function} handler The method that will be applied
	   */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;
	
				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}
	
			/**
	   * Checks document order of two siblings
	   * @param {Element} a
	   * @param {Element} b
	   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	   */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
	
				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}
	
				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}
	
				return a ? 1 : -1;
			}
	
			/**
	   * Returns a function to use in pseudos for input types
	   * @param {String} type
	   */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for buttons
	   * @param {String} type
	   */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for :enabled/:disabled
	   * @param {Boolean} disabled true for :disabled; false for :enabled
	   */
			function createDisabledPseudo(disabled) {
	
				// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
				return function (elem) {
	
					// Only certain elements can match :enabled or :disabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
					if ("form" in elem) {
	
						// Check for inherited disabledness on relevant non-disabled elements:
						// * listed form-associated elements in a disabled fieldset
						//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
						// * option elements in a disabled optgroup
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
						// All such elements have a "form" property.
						if (elem.parentNode && elem.disabled === false) {
	
							// Option elements defer to a parent optgroup if present
							if ("label" in elem) {
								if ("label" in elem.parentNode) {
									return elem.parentNode.disabled === disabled;
								} else {
									return elem.disabled === disabled;
								}
							}
	
							// Support: IE 6 - 11
							// Use the isDisabled shortcut property to check for disabled fieldset ancestors
							return elem.isDisabled === disabled ||
	
							// Where there is no isDisabled, check manually
							/* jshint -W018 */
							elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
						}
	
						return elem.disabled === disabled;
	
						// Try to winnow out elements that can't be disabled before trusting the disabled property.
						// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
						// even exist on them, let alone have a boolean value.
					} else if ("label" in elem) {
						return elem.disabled === disabled;
					}
	
					// Remaining elements are neither :enabled nor :disabled
					return false;
				};
			}
	
			/**
	   * Returns a function to use in pseudos for positionals
	   * @param {Function} fn
	   */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;
	
						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}
	
			/**
	   * Checks a node for validity as a Sizzle context
	   * @param {Element|Object=} context
	   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	   */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}
	
			// Expose support vars for convenience
			support = Sizzle.support = {};
	
			/**
	   * Detects XML nodes
	   * @param {Element|Object} elem An element or a document
	   * @returns {Boolean} True iff elem is a non-HTML XML node
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};
	
			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    subWindow,
				    doc = node ? node.ownerDocument || node : preferredDoc;
	
				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}
	
				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);
	
				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
	
					// Support: IE 11, Edge
					if (subWindow.addEventListener) {
						subWindow.addEventListener("unload", unloadHandler, false);
	
						// Support: IE 9 - 10 only
					} else if (subWindow.attachEvent) {
						subWindow.attachEvent("onunload", unloadHandler);
					}
				}
	
				/* Attributes
	   ---------------------------------------------------------------------- */
	
				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (el) {
					el.className = "i";
					return !el.getAttribute("className");
				});
	
				/* getElement(s)By*
	   ---------------------------------------------------------------------- */
	
				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (el) {
					el.appendChild(document.createComment(""));
					return !el.getElementsByTagName("*").length;
				});
	
				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);
	
				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programmatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (el) {
					docElem.appendChild(el).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});
	
				// ID filter and find
				if (support.getById) {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var elem = context.getElementById(id);
							return elem ? [elem] : [];
						}
					};
				} else {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
	
					// Support: IE 6 - 7 only
					// getElementById is not reliable as a find shortcut
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var node,
							    i,
							    elems,
							    elem = context.getElementById(id);
	
							if (elem) {
	
								// Verify the id attribute
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
	
								// Fall back on getElementsByName
								elems = context.getElementsByName(id);
								i = 0;
								while (elem = elems[i++]) {
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}
								}
							}
	
							return [];
						}
					};
				}
	
				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
	
						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
	
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);
	
					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}
	
						return tmp;
					}
					return results;
				};
	
				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};
	
				/* QSA/matchesSelector
	   ---------------------------------------------------------------------- */
	
				// QSA and matchesSelector support
	
				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];
	
				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See https://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];
	
				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (el) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// https://bugs.jquery.com/ticket/12359
						docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
	
						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (el.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}
	
						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!el.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}
	
						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}
	
						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!el.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
	
						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibling-combinator selector` fails
						if (!el.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});
	
					assert(function (el) {
						el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
	
						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						el.appendChild(input).setAttribute("name", "D");
	
						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (el.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}
	
						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (el.querySelectorAll(":enabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Support: IE9-11+
						// IE's :disabled selector does not pick up the children of disabled fieldsets
						docElem.appendChild(el).disabled = true;
						if (el.querySelectorAll(":disabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						// Opera 10-11 does not throw on post-comma invalid pseudos
						el.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}
	
				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	
					assert(function (el) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(el, "*");
	
						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(el, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}
	
				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	
				/* Contains
	   ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);
	
				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
	
				/* Sorting
	   ---------------------------------------------------------------------- */
	
				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {
	
					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}
	
					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :
	
					// Otherwise we know they are disconnected
					1;
	
					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
	
						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}
	
						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}
	
					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];
	
					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	
						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}
	
					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}
	
					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}
	
					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :
	
					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};
	
				return document;
			};
	
			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};
	
			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");
	
				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	
					try {
						var ret = matches.call(elem, expr);
	
						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}
	
				return Sizzle(expr, document, null, [elem]).length > 0;
			};
	
			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};
	
			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				var fn = Expr.attrHandle[name.toLowerCase()],
	
				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	
				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};
	
			Sizzle.escape = function (sel) {
				return (sel + "").replace(rcssescape, fcssescape);
			};
	
			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};
	
			/**
	   * Document sorting and removing duplicates
	   * @param {ArrayLike} results
	   */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;
	
				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);
	
				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}
	
				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;
	
				return results;
			};
	
			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;
	
				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes
	
				return ret;
			};
	
			Expr = Sizzle.selectors = {
	
				// Can be adjusted by the user
				cacheLength: 50,
	
				createPseudo: markFunction,
	
				match: matchExpr,
	
				attrHandle: {},
	
				find: {},
	
				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},
	
				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);
	
						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
	
						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}
	
						return match.slice(0, 4);
					},
	
					"CHILD": function CHILD(match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();
	
						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}
	
							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
	
							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}
	
						return match;
					},
	
					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];
	
						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}
	
						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";
	
							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
	
							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}
	
						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},
	
				filter: {
	
					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},
	
					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];
	
						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},
	
					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);
	
							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}
	
							result += "";
	
							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},
	
					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";
	
						return first === 1 && last === 0 ?
	
						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;
	
							if (parent) {
	
								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
	
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}
	
								start = [forward ? parent.firstChild : parent.lastChild];
	
								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
	
									// Seek `elem` from a previously-cached index
	
									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];
	
									while (node = ++nodeIndex && node && node[dir] || (
	
									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {
	
										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});
	
										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}
	
									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	
											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
	
												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});
	
													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	
													uniqueCache[type] = [dirruns, diff];
												}
	
												if (node === elem) {
													break;
												}
											}
										}
									}
								}
	
								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},
	
					"PSEUDO": function PSEUDO(pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
	
						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}
	
						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}
	
						return fn;
					}
				},
	
				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));
	
						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;
	
							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),
	
					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),
	
					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),
	
					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),
	
					// Miscellaneous
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},
	
					"root": function root(elem) {
						return elem === docElem;
					},
	
					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},
	
					// Boolean properties
					"enabled": createDisabledPseudo(false),
					"disabled": createDisabledPseudo(true),
	
					"checked": function checked(elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},
	
					"selected": function selected(elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}
	
						return elem.selected === true;
					},
	
					// Contents
					"empty": function empty(elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
	
					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},
	
					// Element/input types
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},
	
					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},
	
					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},
	
					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (
	
						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},
	
					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),
	
					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),
	
					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),
	
					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};
	
			Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}
	
			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();
	
			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];
	
				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}
	
				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;
	
				while (soFar) {
	
					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}
	
					matched = false;
	
					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}
	
					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}
	
					if (!matched) {
						break;
					}
				}
	
				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};
	
			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}
	
			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    skip = combinator.next,
				    key = skip || dir,
				    checkNonElements = base && key === "parentNode",
				    doneName = done++;
	
				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
					return false;
				} :
	
				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];
	
					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
	
								if (skip && skip === elem.nodeName.toLowerCase()) {
									elem = elem[dir] || elem;
								} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
	
									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[key] = newCache;
	
									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}
	
			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}
	
			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}
	
			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;
	
				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}
	
				return newUnmatched;
			}
	
			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
	
	
					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
	
	
					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?
	
					// ...intermediate processing is necessary
					[] :
	
					// ...otherwise use results directly
					results : matcherIn;
	
					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}
	
					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);
	
						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}
	
					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}
	
							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
	
									seed[temp] = !(results[temp] = elem);
								}
							}
						}
	
						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}
	
			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
	
	
				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];
	
				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
	
						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}
	
				return elementMatcher(matchers);
			}
	
			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
	
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),
	
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;
	
					if (outermost) {
						outermostContext = context === document || context || outermost;
					}
	
					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
	
						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}
	
							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
	
					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;
	
					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}
	
						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
	
							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}
	
						// Add matches to results
						push.apply(results, setMatched);
	
						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	
							Sizzle.uniqueSort(results);
						}
					}
	
					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
	
					return unmatched;
				};
	
				return bySet ? markFunction(superMatcher) : superMatcher;
			}
	
			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];
	
				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}
	
					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
	
					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};
	
			/**
	   * A low-level selection function that works with Sizzle's compiled
	   *  selector functions
	   * @param {String|Function} selector A selector or a pre-compiled
	   *  selector function built with Sizzle.compile
	   * @param {Element} context
	   * @param {Array} [results]
	   * @param {Array} [seed] A set of elements to match against
	   */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);
	
				results = results || [];
	
				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {
	
					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	
						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
	
							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}
	
						selector = selector.slice(tokens.shift().value.length);
					}
	
					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];
	
						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
	
								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}
	
								break;
							}
						}
					}
				}
	
				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};
	
			// One-time assignments
	
			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
	
			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;
	
			// Initialize against the default document
			setDocument();
	
			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (el) {
				// Should return 1, but returns 4 (following)
				return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
			});
	
			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (el) {
				el.innerHTML = "<a href='#'></a>";
				return el.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
	
			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (el) {
				el.innerHTML = "<input/>";
				el.firstChild.setAttribute("value", "");
				return el.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}
	
			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (el) {
				return el.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}
	
			return Sizzle;
		}(window);
	
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
	
		// Deprecated
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
		jQuery.escapeSelector = Sizzle.escape;
	
		var dir = function dir(elem, _dir, until) {
			var matched = [],
			    truncate = until !== undefined;
	
			while ((elem = elem[_dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};
	
		var _siblings = function _siblings(n, elem) {
			var matched = [];
	
			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}
	
			return matched;
		};
	
		var rneedsContext = jQuery.expr.match.needsContext;
	
		function nodeName(elem, name) {
	
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		};
		var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	
		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}
	
			// Single element
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}
	
			// Arraylike of elements (jQuery, arguments, Array)
			if (typeof qualifier !== "string") {
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not;
				});
			}
	
			// Filtered directly for both simple and complex selectors
			return jQuery.filter(qualifier, elements, not);
		}
	
		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];
	
			if (not) {
				expr = ":not(" + expr + ")";
			}
	
			if (elems.length === 1 && elem.nodeType === 1) {
				return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
			}
	
			return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};
	
		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret,
				    len = this.length,
				    self = this;
	
				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}
	
				ret = this.pushStack([]);
	
				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}
	
				return len > 1 ? jQuery.uniqueSort(ret) : ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});
	
		// Initialize a jQuery object
	
	
		// A central reference to the root jQuery(document)
		var rootjQuery,
	
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
	
				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {
	
					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
	
						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
	
								// Properties of context are called as methods if possible
								if (isFunction(this[match])) {
									this[match](context[match]);
	
									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}
	
						return this;
	
						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);
	
						if (elem) {
	
							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}
	
					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);
	
					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}
	
				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this[0] = selector;
				this.length = 1;
				return this;
	
				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (isFunction(selector)) {
				return root.ready !== undefined ? root.ready(selector) :
	
				// Execute immediately if ready is not present
				selector(jQuery);
			}
	
			return jQuery.makeArray(selector, this);
		};
	
		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;
	
		// Initialize central reference
		rootjQuery = jQuery(document);
	
		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;
	
				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},
	
			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    targets = typeof selectors !== "string" && jQuery(selectors);
	
				// Positional selectors never match, since there's no _selection_ context
				if (!rneedsContext.test(selectors)) {
					for (; i < l; i++) {
						for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
	
							// Always skip document fragments
							if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	
								matched.push(cur);
								break;
							}
						}
					}
				}
	
				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},
	
			// Determine the position of an element within the set
			index: function index(elem) {
	
				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}
	
				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}
	
				// Locate the position of the desired element
				return indexOf.call(this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},
	
			add: function add(selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},
	
			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});
	
		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}
	
		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return _siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return _siblings(elem.firstChild);
			},
			contents: function contents(elem) {
				if (nodeName(elem, "iframe")) {
					return elem.contentDocument;
				}
	
				// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
				// Treat the template element as a regular one in browsers that
				// don't support it.
				if (nodeName(elem, "template")) {
					elem = elem.content || elem;
				}
	
				return jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);
	
				if (name.slice(-5) !== "Until") {
					selector = until;
				}
	
				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}
	
				if (this.length > 1) {
	
					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}
	
					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}
	
				return this.pushStack(matched);
			};
		});
		var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
	
		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}
	
		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {
	
			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
	
			var // Flag to know if list is currently firing
			firing,
	
	
			// Last fire value for non-forgettable lists
			memory,
	
	
			// Flag to know if list was already fired
			_fired,
	
	
			// Flag to prevent firing
			_locked,
	
	
			// Actual callback list
			list = [],
	
	
			// Queue of execution data for repeatable lists
			queue = [],
	
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
	
			// Fire callbacks
			fire = function fire() {
	
				// Enforce single-firing
				_locked = _locked || options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				_fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {
	
						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if (_locked) {
	
					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];
	
						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function add() {
					if (list) {
	
						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}
	
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && toType(arg) !== "string") {
	
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
	
						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function remove() {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
	
							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function empty() {
					if (list) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function disable() {
					_locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function disabled() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function lock() {
					_locked = queue = [];
					if (!memory && !firing) {
						list = memory = "";
					}
					return this;
				},
				locked: function locked() {
					return !!_locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function fireWith(context, args) {
					if (!_locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function fired() {
					return !!_fired;
				}
			};
	
			return self;
		};
	
		function Identity(v) {
			return v;
		}
		function Thrower(ex) {
			throw ex;
		}
	
		function adoptValue(value, resolve, reject, noValue) {
			var method;
	
			try {
	
				// Check for promise aspect first to privilege synchronous behavior
				if (value && isFunction(method = value.promise)) {
					method.call(value).done(resolve).fail(reject);
	
					// Other thenables
				} else if (value && isFunction(method = value.then)) {
					method.call(value, resolve, reject);
	
					// Other non-thenables
				} else {
	
					// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
					// * false: [ value ].slice( 0 ) => resolve( value )
					// * true: [ value ].slice( 1 ) => resolve()
					resolve.apply(undefined, [value].slice(noValue));
				}
	
				// For Promises/A+, convert exceptions into rejections
				// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
				// Deferred#then to conditionally suppress rejection.
			} catch (value) {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				reject.apply(undefined, [value]);
			}
		}
	
		jQuery.extend({
	
			Deferred: function Deferred(func) {
				var tuples = [
	
				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					"catch": function _catch(fn) {
						return _promise.then(null, fn);
					},
	
					// Keep pipe for back-compat
					pipe: function pipe() /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
	
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function then(onFulfilled, onRejected, onProgress) {
						var maxDepth = 0;
						function resolve(depth, deferred, handler, special) {
							return function () {
								var that = this,
								    args = arguments,
								    mightThrow = function mightThrow() {
									var returned, then;
	
									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if (depth < maxDepth) {
										return;
									}
	
									returned = handler.apply(that, args);
	
									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise()) {
										throw new TypeError("Thenable self-resolution");
									}
	
									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned && (
	
									// Support: Promises/A+ section 2.3.4
									// https://promisesaplus.com/#point-64
									// Only check objects and functions for thenability
									(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;
	
									// Handle a returned thenable
									if (isFunction(then)) {
	
										// Special processors (notify) just wait for resolution
										if (special) {
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
	
											// Normal processors (resolve) also hook into progress
										} else {
	
											// ...and disregard older resolution values
											maxDepth++;
	
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
										}
	
										// Handle all other returned values
									} else {
	
										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Identity) {
											that = undefined;
											args = [returned];
										}
	
										// Process the value(s)
										// Default process is resolve
										(special || deferred.resolveWith)(that, args);
									}
								},
	
	
								// Only normal processors (resolve) catch and reject exceptions
								process = special ? mightThrow : function () {
									try {
										mightThrow();
									} catch (e) {
	
										if (jQuery.Deferred.exceptionHook) {
											jQuery.Deferred.exceptionHook(e, process.stackTrace);
										}
	
										// Support: Promises/A+ section 2.3.3.3.4.1
										// https://promisesaplus.com/#point-61
										// Ignore post-resolution exceptions
										if (depth + 1 >= maxDepth) {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Thrower) {
												that = undefined;
												args = [e];
											}
	
											deferred.rejectWith(that, args);
										}
									}
								};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if (depth) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if (jQuery.Deferred.getStackHook) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout(process);
								}
							};
						}
	
						return jQuery.Deferred(function (newDefer) {
	
							// progress_handlers.add( ... )
							tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
	
							// fulfilled_handlers.add( ... )
							tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
	
							// rejected_handlers.add( ... )
							tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
						}).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};
	
				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[5];
	
					// promise.progress = list.add
					// promise.done = list.add
					// promise.fail = list.add
					_promise[tuple[1]] = list.add;
	
					// Handle state
					if (stateString) {
						list.add(function () {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							_state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[3 - i][2].disable,
	
						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[3 - i][3].disable,
	
						// progress_callbacks.lock
						tuples[0][2].lock,
	
						// progress_handlers.lock
						tuples[0][3].lock);
					}
	
					// progress_handlers.fire
					// fulfilled_handlers.fire
					// rejected_handlers.fire
					list.add(tuple[3].fire);
	
					// deferred.notify = function() { deferred.notifyWith(...) }
					// deferred.resolve = function() { deferred.resolveWith(...) }
					// deferred.reject = function() { deferred.rejectWith(...) }
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
						return this;
					};
	
					// deferred.notifyWith = list.fireWith
					// deferred.resolveWith = list.fireWith
					// deferred.rejectWith = list.fireWith
					deferred[tuple[0] + "With"] = list.fireWith;
				});
	
				// Make the deferred a promise
				_promise.promise(deferred);
	
				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}
	
				// All done!
				return deferred;
			},
	
			// Deferred helper
			when: function when(singleValue) {
				var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
	
				// count of unprocessed arguments
				i = remaining,
	
	
				// subordinate fulfillment data
				resolveContexts = Array(i),
				    resolveValues = _slice.call(arguments),
	
	
				// the master Deferred
				master = jQuery.Deferred(),
	
	
				// subordinate callback factory
				updateFunc = function updateFunc(i) {
					return function (value) {
						resolveContexts[i] = this;
						resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (! --remaining) {
							master.resolveWith(resolveContexts, resolveValues);
						}
					};
				};
	
				// Single- and empty arguments are adopted like Promise.resolve
				if (remaining <= 1) {
					adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
	
					// Use .then() to unwrap secondary thenables (cf. gh-3000)
					if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
	
						return master.then();
					}
				}
	
				// Multiple arguments are aggregated like Promise.all array elements
				while (i--) {
					adoptValue(resolveValues[i], updateFunc(i), master.reject);
				}
	
				return master.promise();
			}
		});
	
		// These usually indicate a programmer mistake during development,
		// warn about them ASAP rather than swallowing them by default.
		var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
		jQuery.Deferred.exceptionHook = function (error, stack) {
	
			// Support: IE 8 - 9 only
			// Console exists when dev tools are open, which can happen at any time
			if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
				window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
			}
		};
	
		jQuery.readyException = function (error) {
			window.setTimeout(function () {
				throw error;
			});
		};
	
		// The deferred used on DOM ready
		var readyList = jQuery.Deferred();
	
		jQuery.fn.ready = function (fn) {
	
			readyList.then(fn)
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch(function (error) {
				jQuery.readyException(error);
			});
	
			return this;
		};
	
		jQuery.extend({
	
			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,
	
			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,
	
			// Handle when the DOM is ready
			ready: function ready(wait) {
	
				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}
	
				// Remember that the DOM is ready
				jQuery.isReady = true;
	
				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}
	
				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
			}
		});
	
		jQuery.ready.then = readyList.then;
	
		// The ready event handler and self cleanup method
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}
	
		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE <=9 - 10 only
		// Older IE sometimes signals "interactive" too soon
		if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
	
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout(jQuery.ready);
		} else {
	
			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", completed);
	
			// A fallback to window.onload, that will always work
			window.addEventListener("load", completed);
		}
	
		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;
	
			// Sets many values
			if (toType(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}
	
				// Sets one value
			} else if (value !== undefined) {
				chainable = true;
	
				if (!isFunction(value)) {
					raw = true;
				}
	
				if (bulk) {
	
					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;
	
						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}
	
				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}
	
			if (chainable) {
				return elems;
			}
	
			// Gets
			if (bulk) {
				return fn.call(elems);
			}
	
			return len ? fn(elems[0], key) : emptyGet;
		};
	
		// Matches dashed string for camelizing
		var rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([a-z])/g;
	
		// Used by camelCase as callback to replace()
		function fcamelCase(all, letter) {
			return letter.toUpperCase();
		}
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 15
		// Microsoft forgot to hump their vendor prefix (#9572)
		function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		}
		var acceptData = function acceptData(owner) {
	
			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};
	
		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}
	
		Data.uid = 1;
	
		Data.prototype = {
	
			cache: function cache(owner) {
	
				// Check if the owner object already has a cache
				var value = owner[this.expando];
	
				// If not, create one
				if (!value) {
					value = {};
	
					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {
	
						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;
	
							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
							Object.defineProperty(owner, this.expando, {
								value: value,
								configurable: true
							});
						}
					}
				}
	
				return value;
			},
			set: function set(owner, data, value) {
				var prop,
				    cache = this.cache(owner);
	
				// Handle: [ owner, key, value ] args
				// Always use camelCase key (gh-2257)
				if (typeof data === "string") {
					cache[camelCase(data)] = value;
	
					// Handle: [ owner, { properties } ] args
				} else {
	
					// Copy the properties one-by-one to the cache object
					for (prop in data) {
						cache[camelCase(prop)] = data[prop];
					}
				}
				return cache;
			},
			get: function get(owner, key) {
				return key === undefined ? this.cache(owner) :
	
				// Always use camelCase key (gh-2257)
				owner[this.expando] && owner[this.expando][camelCase(key)];
			},
			access: function access(owner, key, value) {
	
				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {
	
					return this.get(owner, key);
				}
	
				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);
	
				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    cache = owner[this.expando];
	
				if (cache === undefined) {
					return;
				}
	
				if (key !== undefined) {
	
					// Support array or space separated string of keys
					if (Array.isArray(key)) {
	
						// If key is an array of keys...
						// We always set camelCase keys, so remove that.
						key = key.map(camelCase);
					} else {
						key = camelCase(key);
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
					}
	
					i = key.length;
	
					while (i--) {
						delete cache[key[i]];
					}
				}
	
				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {
	
					// Support: Chrome <=35 - 45
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function hasData(owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();
	
		var dataUser = new Data();
	
		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;
	
		function getData(data) {
			if (data === "true") {
				return true;
			}
	
			if (data === "false") {
				return false;
			}
	
			if (data === "null") {
				return null;
			}
	
			// Only convert to a number if it doesn't change the string
			if (data === +data + "") {
				return +data;
			}
	
			if (rbrace.test(data)) {
				return JSON.parse(data);
			}
	
			return data;
		}
	
		function dataAttr(elem, key, data) {
			var name;
	
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);
	
				if (typeof data === "string") {
					try {
						data = getData(data);
					} catch (e) {}
	
					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}
	
		jQuery.extend({
			hasData: function hasData(elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},
	
			data: function data(elem, name, _data) {
				return dataUser.access(elem, name, _data);
			},
	
			removeData: function removeData(elem, name) {
				dataUser.remove(elem, name);
			},
	
			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function _data(elem, name, data) {
				return dataPriv.access(elem, name, data);
			},
	
			_removeData: function _removeData(elem, name) {
				dataPriv.remove(elem, name);
			}
		});
	
		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;
	
				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);
	
						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {
	
								// Support: IE 11 only
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}
	
					return data;
				}
	
				// Sets multiple values
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}
	
				return access(this, function (value) {
					var data;
	
					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {
	
						// Attempt to get data from the cache
						// The key will always be camelCased in Data
						data = dataUser.get(elem, key);
						if (data !== undefined) {
							return data;
						}
	
						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, key);
						if (data !== undefined) {
							return data;
						}
	
						// We tried really hard, but the data doesn't exist.
						return;
					}
	
					// Set the data...
					this.each(function () {
	
						// We always store the camelCased key
						dataUser.set(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},
	
			removeData: function removeData(key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});
	
		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;
	
				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);
	
					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || Array.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},
	
			dequeue: function dequeue(elem, type) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};
	
				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}
	
				if (fn) {
	
					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}
	
				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},
	
			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});
	
		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;
	
				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}
	
				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}
	
				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);
	
					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);
	
					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},
	
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};
	
				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";
	
				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	
		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
	
		var cssExpand = ["Top", "Right", "Bottom", "Left"];
	
		var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" || elem.style.display === "" &&
	
			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
		};
	
		var swap = function swap(elem, options, callback, args) {
			var ret,
			    name,
			    old = {};
	
			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}
	
			ret = callback.apply(elem, args || []);
	
			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}
	
			return ret;
		};
	
		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
	
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
	
			if (initialInUnit && initialInUnit[3] !== unit) {
	
				// Support: Firefox <=54
				// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
				initial = initial / 2;
	
				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];
	
				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;
	
				while (maxIterations--) {
	
					// Evaluate and update our best guess (doubling guesses that zero out).
					// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
					jQuery.style(elem, prop, initialInUnit + unit);
					if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
						maxIterations = 0;
					}
					initialInUnit = initialInUnit / scale;
				}
	
				initialInUnit = initialInUnit * 2;
				jQuery.style(elem, prop, initialInUnit + unit);
	
				// Make sure we update the tween properties later on
				valueParts = valueParts || [];
			}
	
			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;
	
				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}
	
		var defaultDisplayMap = {};
	
		function getDefaultDisplay(elem) {
			var temp,
			    doc = elem.ownerDocument,
			    nodeName = elem.nodeName,
			    display = defaultDisplayMap[nodeName];
	
			if (display) {
				return display;
			}
	
			temp = doc.body.appendChild(doc.createElement(nodeName));
			display = jQuery.css(temp, "display");
	
			temp.parentNode.removeChild(temp);
	
			if (display === "none") {
				display = "block";
			}
			defaultDisplayMap[nodeName] = display;
	
			return display;
		}
	
		function showHide(elements, show) {
			var display,
			    elem,
			    values = [],
			    index = 0,
			    length = elements.length;
	
			// Determine new display value for elements that need to change
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
	
				display = elem.style.display;
				if (show) {
	
					// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
					// check is required in this first loop unless we have a nonempty display value (either
					// inline or about-to-be-restored)
					if (display === "none") {
						values[index] = dataPriv.get(elem, "display") || null;
						if (!values[index]) {
							elem.style.display = "";
						}
					}
					if (elem.style.display === "" && isHiddenWithinTree(elem)) {
						values[index] = getDefaultDisplay(elem);
					}
				} else {
					if (display !== "none") {
						values[index] = "none";
	
						// Remember what we're overwriting
						dataPriv.set(elem, "display", display);
					}
				}
			}
	
			// Set the display of the elements in a second loop to avoid constant reflow
			for (index = 0; index < length; index++) {
				if (values[index] != null) {
					elements[index].style.display = values[index];
				}
			}
	
			return elements;
		}
	
		jQuery.fn.extend({
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}
	
				return this.each(function () {
					if (isHiddenWithinTree(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
		var rcheckableType = /^(?:checkbox|radio)$/i;
	
		var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
	
		var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
	
		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {
	
			// Support: IE <=9 only
			option: [1, "<select multiple='multiple'>", "</select>"],
	
			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	
			_default: [0, "", ""]
		};
	
		// Support: IE <=9 only
		wrapMap.optgroup = wrapMap.option;
	
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		function getAll(context, tag) {
	
			// Support: IE <=9 - 11 only
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret;
	
			if (typeof context.getElementsByTagName !== "undefined") {
				ret = context.getElementsByTagName(tag || "*");
			} else if (typeof context.querySelectorAll !== "undefined") {
				ret = context.querySelectorAll(tag || "*");
			} else {
				ret = [];
			}
	
			if (tag === undefined || tag && nodeName(context, tag)) {
				return jQuery.merge([context], ret);
			}
	
			return ret;
		}
	
		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;
	
			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}
	
		var rhtml = /<|&#?\w+;/;
	
		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;
	
			for (; i < l; i++) {
				elem = elems[i];
	
				if (elem || elem === 0) {
	
					// Add nodes directly
					if (toType(elem) === "object") {
	
						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
	
						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));
	
						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));
	
						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
	
						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}
	
						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while (elem = nodes[i++]) {
	
				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}
	
				contains = jQuery.contains(elem.ownerDocument, elem);
	
				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");
	
				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}
	
				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}
	
			return fragment;
		}
	
		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");
	
			// Support: Android 4.0 - 4.3 only
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");
	
			div.appendChild(input);
	
			// Support: Android <=4.1 only
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
	
			// Support: IE <=11 only
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var documentElement = document.documentElement;
	
		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
		function returnTrue() {
			return true;
		}
	
		function returnFalse() {
			return false;
		}
	
		// Support: IE <=9 only
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}
	
		function _on(elem, types, selector, data, fn, one) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
	
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
	
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					_on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}
	
			if (data == null && fn == null) {
	
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
	
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
	
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}
	
			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
	
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
	
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}
	
		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {
	
			global: {},
	
			add: function add(elem, types, handler, data, selector) {
	
				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);
	
				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}
	
				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}
	
				// Ensure that invalid selectors throw exceptions at attach time
				// Evaluate against documentElement in case elem is a non-element node (e.g., document)
				if (selector) {
					jQuery.find.matchesSelector(documentElement, selector);
				}
	
				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}
	
				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
	
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}
	
				// Handle multiple events separated by a space
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}
	
					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};
	
					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;
	
					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};
	
					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);
	
					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;
	
						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
	
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}
	
					if (special.add) {
						special.add.call(elem, handleObj);
	
						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}
	
					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}
	
					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},
	
			// Detach an event or set of events from an element
			remove: function remove(elem, types, handler, selector, mappedTypes) {
	
				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
	
				if (!elemData || !(events = elemData.events)) {
					return;
				}
	
				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}
	
					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
	
					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];
	
						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);
	
							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}
	
					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
	
							jQuery.removeEvent(elem, type, elemData.handle);
						}
	
						delete events[type];
					}
				}
	
				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},
	
			dispatch: function dispatch(nativeEvent) {
	
				// Make a writable jQuery.Event from the native event object
				var event = jQuery.event.fix(nativeEvent);
	
				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue,
				    args = new Array(arguments.length),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};
	
				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
	
				for (i = 1; i < arguments.length; i++) {
					args[i] = arguments[i];
				}
	
				event.delegateTarget = this;
	
				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}
	
				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);
	
				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;
	
					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
	
						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
	
							event.handleObj = handleObj;
							event.data = handleObj.data;
	
							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
	
							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}
	
				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}
	
				return event.result;
			},
	
			handlers: function handlers(event, _handlers) {
				var i,
				    handleObj,
				    sel,
				    matchedHandlers,
				    matchedSelectors,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;
	
				// Find delegate handlers
				if (delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!(event.type === "click" && event.button >= 1)) {
	
					for (; cur !== this; cur = cur.parentNode || this) {
	
						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
							matchedHandlers = [];
							matchedSelectors = {};
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];
	
								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";
	
								if (matchedSelectors[sel] === undefined) {
									matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matchedSelectors[sel]) {
									matchedHandlers.push(handleObj);
								}
							}
							if (matchedHandlers.length) {
								handlerQueue.push({ elem: cur, handlers: matchedHandlers });
							}
						}
					}
				}
	
				// Add the remaining (directly-bound) handlers
				cur = this;
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
				}
	
				return handlerQueue;
			},
	
			addProp: function addProp(name, hook) {
				Object.defineProperty(jQuery.Event.prototype, name, {
					enumerable: true,
					configurable: true,
	
					get: isFunction(hook) ? function () {
						if (this.originalEvent) {
							return hook(this.originalEvent);
						}
					} : function () {
						if (this.originalEvent) {
							return this.originalEvent[name];
						}
					},
	
					set: function set(value) {
						Object.defineProperty(this, name, {
							enumerable: true,
							configurable: true,
							writable: true,
							value: value
						});
					}
				});
			},
	
			fix: function fix(originalEvent) {
				return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
			},
	
			special: {
				load: {
	
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {
	
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
	
					// For checkbox, fire native event so checked state will be right
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
							this.click();
							return false;
						}
					},
	
					// For cross-browser consistency, don't fire native .click() on links
					_default: function _default(event) {
						return nodeName(event.target, "a");
					}
				},
	
				beforeunload: {
					postDispatch: function postDispatch(event) {
	
						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};
	
		jQuery.removeEvent = function (elem, type, handle) {
	
			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};
	
		jQuery.Event = function (src, props) {
	
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}
	
			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;
	
				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
	
				// Support: Android <=2.3 only
				src.returnValue === false ? returnTrue : returnFalse;
	
				// Create target properties
				// Support: Safari <=6 - 7 only
				// Target should not be a text node (#504, #13143)
				this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
	
				this.currentTarget = src.currentTarget;
				this.relatedTarget = src.relatedTarget;
	
				// Event type
			} else {
				this.type = src;
			}
	
			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}
	
			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || Date.now();
	
			// Mark it as fixed
			this[jQuery.expando] = true;
		};
	
		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: false,
	
			preventDefault: function preventDefault() {
				var e = this.originalEvent;
	
				this.isDefaultPrevented = returnTrue;
	
				if (e && !this.isSimulated) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;
	
				this.isPropagationStopped = returnTrue;
	
				if (e && !this.isSimulated) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;
	
				this.isImmediatePropagationStopped = returnTrue;
	
				if (e && !this.isSimulated) {
					e.stopImmediatePropagation();
				}
	
				this.stopPropagation();
			}
		};
	
		// Includes all common event props including KeyEvent and MouseEvent specific props
		jQuery.each({
			altKey: true,
			bubbles: true,
			cancelable: true,
			changedTouches: true,
			ctrlKey: true,
			detail: true,
			eventPhase: true,
			metaKey: true,
			pageX: true,
			pageY: true,
			shiftKey: true,
			view: true,
			"char": true,
			charCode: true,
			key: true,
			keyCode: true,
			button: true,
			buttons: true,
			clientX: true,
			clientY: true,
			offsetX: true,
			offsetY: true,
			pointerId: true,
			pointerType: true,
			screenX: true,
			screenY: true,
			targetTouches: true,
			toElement: true,
			touches: true,
	
			which: function which(event) {
				var button = event.button;
	
				// Add which for key events
				if (event.which == null && rkeyEvent.test(event.type)) {
					return event.charCode != null ? event.charCode : event.keyCode;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
					if (button & 1) {
						return 1;
					}
	
					if (button & 2) {
						return 3;
					}
	
					if (button & 4) {
						return 2;
					}
	
					return 0;
				}
	
				return event.which;
			}
		}, jQuery.event.addProp);
	
		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,
	
				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;
	
					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});
	
		jQuery.fn.extend({
	
			on: function on(types, selector, data, fn) {
				return _on(this, types, selector, data, fn);
			},
			one: function one(types, selector, data, fn) {
				return _on(this, types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
	
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
	
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
	
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});
	
		var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
		// Prefer a tbody over its parent table for containing new rows
		function manipulationTarget(elem, content) {
			if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
	
				return jQuery(elem).children("tbody")[0] || elem;
			}
	
			return elem;
		}
	
		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			if ((elem.type || "").slice(0, 5) === "true/") {
				elem.type = elem.type.slice(5);
			} else {
				elem.removeAttribute("type");
			}
	
			return elem;
		}
	
		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
			if (dest.nodeType !== 1) {
				return;
			}
	
			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;
	
				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};
	
					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}
	
			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);
	
				dataUser.set(dest, udataCur);
			}
		}
	
		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();
	
			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;
	
				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}
	
		function domManip(collection, args, callback, ignored) {
	
			// Flatten any nested arrays
			args = concat.apply([], args);
	
			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    valueIsFunction = isFunction(value);
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (valueIsFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}
	
			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;
	
				if (fragment.childNodes.length === 1) {
					fragment = first;
				}
	
				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;
	
						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);
	
							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
	
								// Support: Android <=4.0 only, PhantomJS 1 only
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}
	
						callback.call(collection[i], node, i);
					}
	
					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;
	
						// Reenable scripts
						jQuery.map(scripts, restoreScript);
	
						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
	
								if (node.src && (node.type || "").toLowerCase() !== "module") {
	
									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
								}
							}
						}
					}
				}
			}
	
			return collection;
		}
	
		function _remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;
	
			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}
	
				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}
	
			return elem;
		}
	
		jQuery.extend({
			htmlPrefilter: function htmlPrefilter(html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},
	
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);
	
				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
	
					// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);
	
					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}
	
				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);
	
						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}
	
				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}
	
				// Return the cloned set
				return clone;
			},
	
			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;
	
				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
	
										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
	
							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {
	
							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});
	
		jQuery.fn.extend({
			detach: function detach(selector) {
				return _remove(this, selector, true);
			},
	
			remove: function remove(selector) {
				return _remove(this, selector);
			},
	
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},
	
			append: function append() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},
	
			prepend: function prepend() {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},
	
			before: function before() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},
	
			after: function after() {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},
	
			empty: function empty() {
				var elem,
				    i = 0;
	
				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
	
						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));
	
						// Remove any remaining nodes
						elem.textContent = "";
					}
				}
	
				return this;
			},
	
			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},
	
			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;
	
					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}
	
					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	
						value = jQuery.htmlPrefilter(value);
	
						try {
							for (; i < l; i++) {
								elem = this[i] || {};
	
								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}
	
							elem = 0;
	
							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}
	
					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},
	
			replaceWith: function replaceWith() {
				var ignored = [];
	
				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;
	
					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}
	
					// Force callback invocation
				}, ignored);
			}
		});
	
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;
	
				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// .get() because push.apply(_, arraylike) throws on ancient WebKit
					push.apply(ret, elems.get());
				}
	
				return this.pushStack(ret);
			};
		});
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	
		var getStyles = function getStyles(elem) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if (!view || !view.opener) {
				view = window;
			}
	
			return view.getComputedStyle(elem);
		};
	
		var rboxStyle = new RegExp(cssExpand.join("|"), "i");
	
		(function () {
	
			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {
	
				// This is a singleton, we need to execute it only once
				if (!div) {
					return;
				}
	
				container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
				div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
				documentElement.appendChild(container).appendChild(div);
	
				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";
	
				// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
				reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
	
				// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
				// Some styles come back with percentage values, even though they shouldn't
				div.style.right = "60%";
				pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
	
				// Support: IE 9 - 11 only
				// Detect misreporting of content dimensions for box-sizing:border-box elements
				boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
	
				// Support: IE 9 only
				// Detect overflow:scroll screwiness (gh-3699)
				div.style.position = "absolute";
				scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
	
				documentElement.removeChild(container);
	
				// Nullify the div so it wouldn't be stored in the memory and
				// it will also be a sign that checks already performed
				div = null;
			}
	
			function roundPixelMeasures(measure) {
				return Math.round(parseFloat(measure));
			}
	
			var pixelPositionVal,
			    boxSizingReliableVal,
			    scrollboxSizeVal,
			    pixelBoxStylesVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");
	
			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}
	
			// Support: IE <=9 - 11 only
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
			jQuery.extend(support, {
				boxSizingReliable: function boxSizingReliable() {
					computeStyleTests();
					return boxSizingReliableVal;
				},
				pixelBoxStyles: function pixelBoxStyles() {
					computeStyleTests();
					return pixelBoxStylesVal;
				},
				pixelPosition: function pixelPosition() {
					computeStyleTests();
					return pixelPositionVal;
				},
				reliableMarginLeft: function reliableMarginLeft() {
					computeStyleTests();
					return reliableMarginLeftVal;
				},
				scrollboxSize: function scrollboxSize() {
					computeStyleTests();
					return scrollboxSizeVal;
				}
			});
		})();
	
		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
	
	
			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;
	
			computed = computed || getStyles(elem);
	
			// getPropertyValue is needed for:
			//   .css('filter') (IE 9 only, #12537)
			//   .css('--customProperty) (#3144)
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];
	
				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// https://drafts.csswg.org/cssom/#resolved-values
				if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}
	
		function addGetHookIf(conditionFn, hookFn) {
	
			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function get() {
					if (conditionFn()) {
	
						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}
	
					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}
	
		var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rcustomProp = /^--/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;
	
		// Return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {
	
			// Shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}
	
			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;
	
			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}
	
		// Return a property mapped along what jQuery.cssProps suggests or to
		// a vendor prefixed property.
		function finalPropName(name) {
			var ret = jQuery.cssProps[name];
			if (!ret) {
				ret = jQuery.cssProps[name] = vendorPropName(name) || name;
			}
			return ret;
		}
	
		function setPositiveNumber(elem, value, subtract) {
	
			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}
	
		function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
			var i = dimension === "width" ? 1 : 0,
			    extra = 0,
			    delta = 0;
	
			// Adjustment may not be necessary
			if (box === (isBorderBox ? "border" : "content")) {
				return 0;
			}
	
			for (; i < 4; i += 2) {
	
				// Both box models exclude margin
				if (box === "margin") {
					delta += jQuery.css(elem, box + cssExpand[i], true, styles);
				}
	
				// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
				if (!isBorderBox) {
	
					// Add padding
					delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	
					// For "border" or "margin", add border
					if (box !== "padding") {
						delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
	
						// But still keep track of it otherwise
					} else {
						extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
	
					// If we get here with a border-box (content + padding + border), we're seeking "content" or
					// "padding" or "margin"
				} else {
	
					// For "content", subtract padding
					if (box === "content") {
						delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}
	
					// For "content" or "padding", subtract border
					if (box !== "margin") {
						delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}
	
			// Account for positive content-box scroll gutter when requested by providing computedVal
			if (!isBorderBox && computedVal >= 0) {
	
				// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
				// Assuming integer scroll gutter, subtract the rest and round down
				delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
			}
	
			return delta;
		}
	
		function getWidthOrHeight(elem, dimension, extra) {
	
			// Start with computed style
			var styles = getStyles(elem),
			    val = curCSS(elem, dimension, styles),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
			    valueIsBorderBox = isBorderBox;
	
			// Support: Firefox <=54
			// Return a confounding non-pixel value or feign ignorance, as appropriate.
			if (rnumnonpx.test(val)) {
				if (!extra) {
					return val;
				}
				val = "auto";
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);
	
			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
	
				val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];
	
				// offsetWidth/offsetHeight provide border-box values
				valueIsBorderBox = true;
			}
	
			// Normalize "" and auto
			val = parseFloat(val) || 0;
	
			// Adjust for the element's box model
			return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,
	
			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val) + "px";
		}
	
		jQuery.extend({
	
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
	
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},
	
			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},
	
			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {},
	
			// Get and set the style property on a DOM Node
			style: function style(elem, name, value, extra) {
	
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}
	
				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = camelCase(name),
				    isCustomProp = rcustomProp.test(name),
				    style = elem.style;
	
				// Make sure that we're working with the right name. We don't
				// want to query the value if it is a CSS custom property
				// since they are user-defined.
				if (!isCustomProp) {
					name = finalPropName(origName);
				}
	
				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);
	
						// Fixes bug #9237
						type = "number";
					}
	
					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}
	
					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}
	
					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}
	
					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
	
						if (isCustomProp) {
							style.setProperty(name, value);
						} else {
							style[name] = value;
						}
					}
				} else {
	
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
	
						return ret;
					}
	
					// Otherwise just get the value from the style object
					return style[name];
				}
			},
	
			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = camelCase(name),
				    isCustomProp = rcustomProp.test(name);
	
				// Make sure that we're working with the right name. We don't
				// want to modify the value if it is a CSS custom property
				// since they are user-defined.
				if (!isCustomProp) {
					name = finalPropName(origName);
				}
	
				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}
	
				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}
	
				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}
	
				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
	
				return val;
			}
		});
	
		jQuery.each(["height", "width"], function (i, dimension) {
			jQuery.cssHooks[dimension] = {
				get: function get(elem, computed, extra) {
					if (computed) {
	
						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && (
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, dimension, extra);
						}) : getWidthOrHeight(elem, dimension, extra);
					}
				},
	
				set: function set(elem, value, extra) {
					var matches,
					    styles = getStyles(elem),
					    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
					    subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);
	
					// Account for unreliable border-box dimensions by comparing offset* to computed and
					// faking a content-box to get border and padding (gh-3699)
					if (isBorderBox && support.scrollboxSize() === styles.position) {
						subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
					}
	
					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
	
						elem.style[dimension] = value;
						value = jQuery.css(elem, dimension);
					}
	
					return setPositiveNumber(elem, value, subtract);
				}
			};
		});
	
		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});
	
		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
	
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];
	
					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}
	
					return expanded;
				}
			};
	
			if (prefix !== "margin") {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
	
		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;
	
					if (Array.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;
	
						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}
	
						return map;
					}
	
					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			}
		});
	
		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;
	
		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];
	
				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];
	
				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;
	
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}
	
				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};
	
		Tween.prototype.init.prototype = Tween.prototype;
	
		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;
	
					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}
	
					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");
	
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
	
					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};
	
		// Support: IE <=9 only
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};
	
		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};
	
		jQuery.fx = Tween.prototype.init;
	
		// Back compat <1.8 extension point
		jQuery.fx.step = {};
	
		var fxNow,
		    inProgress,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;
	
		function schedule() {
			if (inProgress) {
				if (document.hidden === false && window.requestAnimationFrame) {
					window.requestAnimationFrame(schedule);
				} else {
					window.setTimeout(schedule, jQuery.fx.interval);
				}
	
				jQuery.fx.tick();
			}
		}
	
		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = Date.now();
		}
	
		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };
	
			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}
	
			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}
	
			return attrs;
		}
	
		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
	
					// We're done with this property
					return tween;
				}
			}
		}
	
		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    hooks,
			    oldfire,
			    propTween,
			    restoreDisplay,
			    display,
			    isBox = "width" in props || "height" in props,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHiddenWithinTree(elem),
			    dataShow = dataPriv.get(elem, "fxshow");
	
			// Queue-skipping animations hijack the fx hooks
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;
	
				anim.always(function () {
	
					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}
	
			// Detect show/hide animations
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.test(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
	
						// Pretend to be hidden if this is a "show" and
						// there is still data from a stopped show/hide
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
	
							// Ignore all other no-op show/hide data
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				}
			}
	
			// Bail out if this is a no-op like .hide().hide()
			propTween = !jQuery.isEmptyObject(props);
			if (!propTween && jQuery.isEmptyObject(orig)) {
				return;
			}
	
			// Restrict "overflow" and "display" styles during box animations
			if (isBox && elem.nodeType === 1) {
	
				// Support: IE <=9 - 11, Edge 12 - 15
				// Record all 3 overflow attributes because IE does not infer the shorthand
				// from identically-valued overflowX and overflowY and Edge just mirrors
				// the overflowX value there.
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];
	
				// Identify a display type, preferring old show/hide data over the CSS cascade
				restoreDisplay = dataShow && dataShow.display;
				if (restoreDisplay == null) {
					restoreDisplay = dataPriv.get(elem, "display");
				}
				display = jQuery.css(elem, "display");
				if (display === "none") {
					if (restoreDisplay) {
						display = restoreDisplay;
					} else {
	
						// Get nonempty value(s) by temporarily forcing visibility
						showHide([elem], true);
						restoreDisplay = elem.style.display || restoreDisplay;
						display = jQuery.css(elem, "display");
						showHide([elem]);
					}
				}
	
				// Animate inline elements as inline-block
				if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
					if (jQuery.css(elem, "float") === "none") {
	
						// Restore the original display value at the end of pure show/hide animations
						if (!propTween) {
							anim.done(function () {
								style.display = restoreDisplay;
							});
							if (restoreDisplay == null) {
								display = style.display;
								restoreDisplay = display === "none" ? "" : display;
							}
						}
						style.display = "inline-block";
					}
				}
			}
	
			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
	
			// Implement show/hide animations
			propTween = false;
			for (prop in orig) {
	
				// General show/hide setup for this element animation
				if (!propTween) {
					if (dataShow) {
						if ("hidden" in dataShow) {
							hidden = dataShow.hidden;
						}
					} else {
						dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
					}
	
					// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
					if (toggle) {
						dataShow.hidden = !hidden;
					}
	
					// Show elements before animating them
					if (hidden) {
						showHide([elem], true);
					}
	
					/* eslint-disable no-loop-func */
	
					anim.done(function () {
	
						/* eslint-enable no-loop-func */
	
						// The final step of a "hide" animation is actually hiding the element
						if (!hidden) {
							showHide([elem]);
						}
						dataPriv.remove(elem, "fxshow");
						for (prop in orig) {
							jQuery.style(elem, prop, orig[prop]);
						}
					});
				}
	
				// Per-property setup
				propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = propTween.start;
					if (hidden) {
						propTween.end = propTween.start;
						propTween.start = 0;
					}
				}
			}
		}
	
		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;
	
			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (Array.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}
	
				if (index !== name) {
					props[name] = value;
					delete props[index];
				}
	
				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];
	
					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}
	
		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
	
	
				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;
	
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
	
				deferred.notifyWith(elem, [animation, percent, remaining]);
	
				// If there's more to do, yield
				if (percent < 1 && length) {
					return remaining;
				}
	
				// If this was an empty animation, synthesize a final progress notification
				if (!length) {
					deferred.notifyWith(elem, [animation, 1, 0]);
				}
	
				// Resolve the animation and report its conclusion
				deferred.resolveWith(elem, [animation]);
				return false;
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
	
	
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;
	
			propFilter(props, animation.opts.specialEasing);
	
			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
					}
					return result;
				}
			}
	
			jQuery.map(props, createTween, animation);
	
			if (isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}
	
			// Attach callbacks from options
			animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	
			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));
	
			return animation;
		}
	
		jQuery.Animation = jQuery.extend(Animation, {
	
			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},
	
			tweener: function tweener(props, callback) {
				if (isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnothtmlwhite);
				}
	
				var prop,
				    index = 0,
				    length = props.length;
	
				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},
	
			prefilters: [defaultPrefilter],
	
			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});
	
		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !isFunction(easing) && easing
			};
	
			// Go to the end state if fx are off
			if (jQuery.fx.off) {
				opt.duration = 0;
			} else {
				if (typeof opt.duration !== "number") {
					if (opt.duration in jQuery.fx.speeds) {
						opt.duration = jQuery.fx.speeds[opt.duration];
					} else {
						opt.duration = jQuery.fx.speeds._default;
					}
				}
			}
	
			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}
	
			// Queueing
			opt.old = opt.complete;
	
			opt.complete = function () {
				if (isFunction(opt.old)) {
					opt.old.call(this);
				}
	
				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};
	
			return opt;
		};
	
		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
	
				// Show any hidden elements after setting opacity to 0
				return this.filter(isHiddenWithinTree).css("opacity", 0).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);
	
					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;
	
				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};
	
				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}
	
				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);
	
					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
	
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}
	
					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;
	
					// Enable finishing flag on private data
					data.finish = true;
	
					// Empty the queue first
					jQuery.queue(this, type, []);
	
					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}
	
					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}
	
					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}
	
					// Turn off finishing flag
					delete data.finish;
				});
			}
		});
	
		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});
	
		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});
	
		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;
	
			fxNow = Date.now();
	
			for (; i < timers.length; i++) {
				timer = timers[i];
	
				// Run the timer and safely remove it when done (allowing for external removal)
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}
	
			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};
	
		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			jQuery.fx.start();
		};
	
		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (inProgress) {
				return;
			}
	
			inProgress = true;
			schedule();
		};
	
		jQuery.fx.stop = function () {
			inProgress = null;
		};
	
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
	
			// Default speed
			_default: 400
		};
	
		// Based off of the plugin by Clint Helfers, with permission.
		// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";
	
			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};
	
		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));
	
			input.type = "checkbox";
	
			// Support: Android <=4.3 only
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";
	
			// Support: IE <=11 only
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;
	
			// Support: IE <=11 only
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();
	
		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;
	
		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},
	
			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});
	
		jQuery.extend({
			attr: function attr(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;
	
				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}
	
				// Attribute hooks are determined by the lowercase version
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}
	
				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}
	
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}
	
					elem.setAttribute(name, value + "");
					return value;
				}
	
				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}
	
				ret = jQuery.find.attr(elem, name);
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},
	
			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},
	
			removeAttr: function removeAttr(elem, value) {
				var name,
				    i = 0,
	
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match(rnothtmlwhite);
	
				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						elem.removeAttribute(name);
					}
				}
			}
		});
	
		// Hooks for boolean attributes
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
	
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
	
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;
	
			attrHandle[name] = function (elem, name, isXML) {
				var ret,
				    handle,
				    lowercaseName = name.toLowerCase();
	
				if (!isXML) {
	
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[lowercaseName];
					attrHandle[lowercaseName] = ret;
					ret = getter(elem, name, isXML) != null ? lowercaseName : null;
					attrHandle[lowercaseName] = handle;
				}
				return ret;
			};
		});
	
		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;
	
		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},
	
			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});
	
		jQuery.extend({
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;
	
				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
	
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}
	
				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}
	
					return elem[name] = value;
				}
	
				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}
	
				return elem[name];
			},
	
			propHooks: {
				tabIndex: {
					get: function get(elem) {
	
						// Support: IE <=9 - 11 only
						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");
	
						if (tabindex) {
							return parseInt(tabindex, 10);
						}
	
						if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
							return 0;
						}
	
						return -1;
					}
				}
			},
	
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});
	
		// Support: IE <=11 only
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		// eslint rule "no-unused-expressions" is disabled for this code
		// since it considers such accessions noop
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
	
					/* eslint no-unused-expressions: "off" */
	
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				},
				set: function set(elem) {
	
					/* eslint no-unused-expressions: "off" */
	
					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;
	
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}
	
		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});
	
		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse(value) {
			var tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(" ");
		}
	
		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}
	
		function classesToArray(value) {
			if (Array.isArray(value)) {
				return value;
			}
			if (typeof value === "string") {
				return value.match(rnothtmlwhite) || [];
			}
			return [];
		}
	
		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;
	
				if (isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}
	
				classes = classesToArray(value);
	
				if (classes.length) {
					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
	
							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}
	
				return this;
			},
	
			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;
	
				if (isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}
	
				if (!arguments.length) {
					return this.attr("class", "");
				}
	
				classes = classesToArray(value);
	
				if (classes.length) {
					while (elem = this[i++]) {
						curValue = getClass(elem);
	
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
	
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
	
							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}
	
				return this;
			},
	
			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value),
				    isValidValue = type === "string" || Array.isArray(value);
	
				if (typeof stateVal === "boolean" && isValidValue) {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}
	
				if (isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}
	
				return this.each(function () {
					var className, i, self, classNames;
	
					if (isValidValue) {
	
						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = classesToArray(value);
	
						while (className = classNames[i++]) {
	
							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
	
						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {
	
							// Store className if set
							dataPriv.set(this, "__className__", className);
						}
	
						// If the element has a class name or if we're passed `false`,
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						if (this.setAttribute) {
							this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
						}
					}
				});
			},
	
			hasClass: function hasClass(selector) {
				var className,
				    elem,
				    i = 0;
	
				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
						return true;
					}
				}
	
				return false;
			}
		});
	
		var rreturn = /\r/g;
	
		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    valueIsFunction,
				    elem = this[0];
	
				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
	
						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}
	
						ret = elem.value;
	
						// Handle most common string cases
						if (typeof ret === "string") {
							return ret.replace(rreturn, "");
						}
	
						// Handle cases where value is null/undef or number
						return ret == null ? "" : ret;
					}
	
					return;
				}
	
				valueIsFunction = isFunction(value);
	
				return this.each(function (i) {
					var val;
	
					if (this.nodeType !== 1) {
						return;
					}
	
					if (valueIsFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}
	
					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (Array.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}
	
					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
	
					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});
	
		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
	
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    i,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one",
						    values = one ? null : [],
						    max = one ? index + 1 : options.length;
	
						if (index < 0) {
							i = max;
						} else {
							i = one ? index : 0;
						}
	
						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];
	
							// Support: IE <=9 only
							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) &&
	
							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
	
								// Get the specific value for the option
								value = jQuery(option).val();
	
								// We don't need an array for one selects
								if (one) {
									return value;
								}
	
								// Multi-Selects return an array
								values.push(value);
							}
						}
	
						return values;
					},
	
					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;
	
						while (i--) {
							option = options[i];
	
							/* eslint-disable no-cond-assign */
	
							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}
	
							/* eslint-enable no-cond-assign */
						}
	
						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});
	
		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (Array.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});
	
		// Return jQuery for attributes-only inclusion
	
	
		support.focusin = "onfocusin" in window;
	
		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    stopPropagationCallback = function stopPropagationCallback(e) {
			e.stopPropagation();
		};
	
		jQuery.extend(jQuery.event, {
	
			trigger: function trigger(event, data, elem, onlyHandlers) {
	
				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    lastElement,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	
				cur = lastElement = tmp = elem = elem || document;
	
				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}
	
				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}
	
				if (type.indexOf(".") > -1) {
	
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;
	
				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);
	
				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	
				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}
	
				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);
	
				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}
	
				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
	
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}
	
					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}
	
				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
					lastElement = cur;
					event.type = i > 1 ? bubbleType : special.bindType || type;
	
					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}
	
					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;
	
				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {
	
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
	
						// Call a native DOM method on the target with the same name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
	
							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];
	
							if (tmp) {
								elem[ontype] = null;
							}
	
							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
	
							if (event.isPropagationStopped()) {
								lastElement.addEventListener(type, stopPropagationCallback);
							}
	
							elem[type]();
	
							if (event.isPropagationStopped()) {
								lastElement.removeEventListener(type, stopPropagationCallback);
							}
	
							jQuery.event.triggered = undefined;
	
							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}
	
				return event.result;
			},
	
			// Piggyback on a donor event to simulate a different one
			// Used only for `focus(in | out)` events
			simulate: function simulate(type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true
				});
	
				jQuery.event.trigger(e, null, elem);
			}
	
		});
	
		jQuery.fn.extend({
	
			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});
	
		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
	
				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};
	
				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);
	
						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;
	
						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;
	
		var nonce = Date.now();
	
		var rquery = /\?/;
	
		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}
	
			// Support: IE 9 - 11 only
			// IE throws on parseFromString with invalid input.
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}
	
			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};
	
		var rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
		function buildParams(prefix, obj, traditional, add) {
			var name;
	
			if (Array.isArray(obj)) {
	
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
	
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
	
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && toType(obj) === "object") {
	
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
	
				// Serialize scalar item.
				add(prefix, obj);
			}
		}
	
		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, valueOrFunction) {
	
				// If value is a function, invoke it and use its return value
				var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
	
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
			};
	
			// If an array was passed in, assume that it is an array of form elements.
			if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
	
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
	
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}
	
			// Return the resulting serialization
			return s.join("&");
		};
	
		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
	
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
	
					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();
	
					if (val == null) {
						return null;
					}
	
					if (Array.isArray(val)) {
						return jQuery.map(val, function (val) {
							return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
						});
					}
	
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});
	
		var r20 = /%20/g,
		    rhash = /#.*$/,
		    rantiCache = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
	
	
		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},
	
	
		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},
	
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),
	
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;
	
		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {
	
			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {
	
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}
	
				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
	
				if (isFunction(func)) {
	
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
	
						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
	
							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}
	
		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	
			var inspected = {},
			    seekingTransport = structure === transports;
	
			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
	
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}
	
			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}
	
		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}
	
			return target;
		}
	
		/* Handles responses to an ajax request:
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {
	
			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;
	
			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}
	
			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}
	
			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
	
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
	
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}
	
			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}
	
		/* Chain conversions given the request and the original response
	  * Also sets the responseXXX fields on the jqXHR instance
	  */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
	
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}
	
			current = dataTypes.shift();
	
			// Convert to each sequential dataType
			while (current) {
	
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}
	
				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}
	
				prev = current;
				current = dataTypes.shift();
	
				if (current) {
	
					// There's only work to do if current dataType is non-auto
					if (current === "*") {
	
						current = prev;
	
						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {
	
						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];
	
						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {
	
								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
	
									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
	
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];
	
											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}
	
						// Apply converter (if not an equivalence)
						if (conv !== true) {
	
							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}
	
			return { state: "success", data: response };
		}
	
		jQuery.extend({
	
			// Counter for holding the number of active queries
			active: 0,
	
			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},
	
			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */
	
				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
	
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
	
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
	
				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {
	
					// Convert anything to text
					"* text": String,
	
					// Text to html (true = no transformation)
					"text html": true,
	
					// Evaluate text as a json expression
					"text json": JSON.parse,
	
					// Parse text as xml
					"text xml": jQuery.parseXML
				},
	
				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},
	
			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ?
	
				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
	
				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},
	
			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),
	
			// Main method
			ajax: function ajax(url, options) {
	
				// If url is an object, simulate pre-1.5 signature
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}
	
				// Force options to be an object
				options = options || {};
	
				var transport,
	
	
				// URL without anti-cache param
				cacheURL,
	
	
				// Response headers
				responseHeadersString,
				    responseHeaders,
	
	
				// timeout handle
				timeoutTimer,
	
	
				// Url cleanup var
				urlAnchor,
	
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
	
				// To know if global events are to be dispatched
				fireGlobals,
	
	
				// Loop variable
				i,
	
	
				// uncached part of the url
				uncached,
	
	
				// Create the final options object
				s = jQuery.ajaxSetup({}, options),
	
	
				// Callbacks context
				callbackContext = s.context || s,
	
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
	
	
				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
	
	
				// Status-dependent callbacks
				_statusCode = s.statusCode || {},
	
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},
	
	
				// Default abort message
				strAbort = "canceled",
	
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (completed) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function getAllResponseHeaders() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function setRequestHeader(name, value) {
						if (completed == null) {
							name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function overrideMimeType(type) {
						if (completed == null) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (completed) {
	
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
	
				// Attach deferreds
				deferred.promise(jqXHR);
	
				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
	
				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;
	
				// Extract dataTypes list
				s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
	
				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");
	
					// Support: IE <=8 - 11, Edge 12 - 15
					// IE throws exception on accessing the href property if url is malformed,
					// e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;
	
						// Support: IE <=8 - 11 only
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {
	
						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}
	
				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}
	
				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
	
				// If request was aborted inside a prefilter, stop there
				if (completed) {
					return jqXHR;
				}
	
				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;
	
				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}
	
				// Uppercase the type
				s.type = s.type.toUpperCase();
	
				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);
	
				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				// Remove hash to simplify url manipulation
				cacheURL = s.url.replace(rhash, "");
	
				// More options handling for requests with no content
				if (!s.hasContent) {
	
					// Remember the hash so we can put it back
					uncached = s.url.slice(cacheURL.length);
	
					// If data is available and should be processed, append data to url
					if (s.data && (s.processData || typeof s.data === "string")) {
						cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
	
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}
	
					// Add or update anti-cache param if needed
					if (s.cache === false) {
						cacheURL = cacheURL.replace(rantiCache, "$1");
						uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
					}
	
					// Put hash and anti-cache on the URL that will be requested (gh-1732)
					s.url = cacheURL + uncached;
	
					// Change '%20' to '+' if this is encoded form body content (gh-2658)
				} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
					s.data = s.data.replace(r20, "+");
				}
	
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}
	
				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}
	
				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
	
				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}
	
				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
	
					// Abort if not done already and return
					return jqXHR.abort();
				}
	
				// Aborting is no longer a cancellation
				strAbort = "abort";
	
				// Install callbacks on deferreds
				completeDeferred.add(s.complete);
				jqXHR.done(s.success);
				jqXHR.fail(s.error);
	
				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
	
				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;
	
					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
	
					// If request was aborted inside ajaxSend, stop there
					if (completed) {
						return jqXHR;
					}
	
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}
	
					try {
						completed = false;
						transport.send(requestHeaders, done);
					} catch (e) {
	
						// Rethrow post-completion exceptions
						if (completed) {
							throw e;
						}
	
						// Propagate others as results
						done(-1, e);
					}
				}
	
				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;
	
					// Ignore repeat invocations
					if (completed) {
						return;
					}
	
					completed = true;
	
					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}
	
					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;
	
					// Cache response headers
					responseHeadersString = headers || "";
	
					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;
	
					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;
	
					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}
	
					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);
	
					// If successful, handle type chaining
					if (isSuccess) {
	
						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}
	
						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
	
							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";
	
							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
	
						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}
	
					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";
	
					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}
	
					// Status-dependent callbacks
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;
	
					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}
	
					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
	
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}
	
				return jqXHR;
			},
	
			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},
	
			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});
	
		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
	
				// Shift arguments if data argument was omitted
				if (isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}
	
				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});
	
		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
	
				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,
				"throws": true
			});
		};
	
		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				var wrap;
	
				if (this[0]) {
					if (isFunction(html)) {
						html = html.call(this[0]);
					}
	
					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
	
					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}
	
					wrap.map(function () {
						var elem = this;
	
						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}
	
						return elem;
					}).append(this);
				}
	
				return this;
			},
	
			wrapInner: function wrapInner(html) {
				if (isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}
	
				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();
	
					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},
	
			wrap: function wrap(html) {
				var htmlIsFunction = isFunction(html);
	
				return this.each(function (i) {
					jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
				});
			},
	
			unwrap: function unwrap(selector) {
				this.parent(selector).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes);
				});
				return this;
			}
		});
	
		jQuery.expr.pseudos.hidden = function (elem) {
			return !jQuery.expr.pseudos.visible(elem);
		};
		jQuery.expr.pseudos.visible = function (elem) {
			return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
		};
	
		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};
	
		var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();
	
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;
	
		jQuery.ajaxTransport(function (options) {
			var _callback, errorCallback;
	
			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr();
	
						xhr.open(options.type, options.url, options.async, options.username, options.password);
	
						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}
	
						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}
	
						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}
	
						// Callback
						_callback = function callback(type) {
							return function () {
								if (_callback) {
									_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
	
									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {
	
										// Support: IE <=9 only
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};
	
						// Listen to events
						xhr.onload = _callback();
						errorCallback = xhr.onerror = xhr.ontimeout = _callback("error");
	
						// Support: IE 9 only
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {
	
								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {
	
									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (_callback) {
											errorCallback();
										}
									});
								}
							};
						}
	
						// Create the abort callback
						_callback = _callback("abort");
	
						try {
	
							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {
	
							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (_callback) {
								throw e;
							}
						}
					},
	
					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});
	
		// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
		jQuery.ajaxPrefilter(function (s) {
			if (s.crossDomain) {
				s.contents.script = false;
			}
		});
	
		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});
	
		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});
	
		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {
	
			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});
	
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});
	
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;
	
		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});
	
		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
	
			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {
	
				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
	
				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}
	
				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};
	
				// Force json dataType
				s.dataTypes[0] = "json";
	
				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};
	
				// Clean-up function (fires after converters)
				jqXHR.always(function () {
	
					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);
	
						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}
	
					// Save back as free
					if (s[callbackName]) {
	
						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;
	
						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}
	
					// Call if it was a function and we have a response
					if (responseContainer && isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}
	
					responseContainer = overwritten = undefined;
				});
	
				// Delegate to script
				return "script";
			}
		});
	
		// Support: Safari 8 only
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();
	
		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (typeof data !== "string") {
				return [];
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
	
			var base, parsed, scripts;
	
			if (!context) {
	
				// Stop scripts or inline event handlers from being executed immediately
				// by using document.implementation
				if (support.createHTMLDocument) {
					context = document.implementation.createHTMLDocument("");
	
					// Set the base href for the created document
					// so any parsed elements with URLs
					// are based on the document's URL (gh-2965)
					base = context.createElement("base");
					base.href = document.location.href;
					context.head.appendChild(base);
				} else {
					context = document;
				}
			}
	
			parsed = rsingleTag.exec(data);
			scripts = !keepScripts && [];
	
			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}
	
			parsed = buildFragment([data], context, scripts);
	
			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}
	
			return jQuery.merge([], parsed.childNodes);
		};
	
		/**
	  * Load a url into a page
	  */
		jQuery.fn.load = function (url, params, callback) {
			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");
	
			if (off > -1) {
				selector = stripAndCollapse(url.slice(off));
				url = url.slice(0, off);
			}
	
			// If it's a function
			if (isFunction(params)) {
	
				// We assume that it's the callback
				callback = params;
				params = undefined;
	
				// Otherwise, build a param string
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}
	
			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,
	
					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {
	
					// Save response for use in complete callback
					response = arguments;
	
					self.html(selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
	
					// Otherwise use the full result
					responseText);
	
					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}
	
			return this;
		};
	
		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});
	
		jQuery.expr.pseudos.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	
		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};
	
				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}
	
				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
	
				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}
	
				if (isFunction(options)) {
	
					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}
	
				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}
	
				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};
	
		jQuery.fn.extend({
	
			// offset() relates an element's border box to the document origin
			offset: function offset(options) {
	
				// Preserve chaining for setter
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}
	
				var rect,
				    win,
				    elem = this[0];
	
				if (!elem) {
					return;
				}
	
				// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
				// Support: IE <=11 only
				// Running getBoundingClientRect on a
				// disconnected node in IE throws an error
				if (!elem.getClientRects().length) {
					return { top: 0, left: 0 };
				}
	
				// Get document-relative position by adding viewport scroll to viewport-relative gBCR
				rect = elem.getBoundingClientRect();
				win = elem.ownerDocument.defaultView;
				return {
					top: rect.top + win.pageYOffset,
					left: rect.left + win.pageXOffset
				};
			},
	
			// position() relates an element's margin box to its offset parent's padding box
			// This corresponds to the behavior of CSS absolute positioning
			position: function position() {
				if (!this[0]) {
					return;
				}
	
				var offsetParent,
				    offset,
				    doc,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };
	
				// position:fixed elements are offset from the viewport, which itself always has zero offset
				if (jQuery.css(elem, "position") === "fixed") {
	
					// Assume position:fixed implies availability of getBoundingClientRect
					offset = elem.getBoundingClientRect();
				} else {
					offset = this.offset();
	
					// Account for the *real* offset parent, which can be the document or its root element
					// when a statically positioned element is identified
					doc = elem.ownerDocument;
					offsetParent = elem.offsetParent || doc.documentElement;
					while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
	
						offsetParent = offsetParent.parentNode;
					}
					if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
	
						// Incorporate borders into its offset, since they are outside its content origin
						parentOffset = jQuery(offsetParent).offset();
						parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
						parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
					}
				}
	
				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},
	
			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent;
	
					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || documentElement;
				});
			}
		});
	
		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;
	
			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
	
					// Coalesce documents and windows
					var win;
					if (isWindow(elem)) {
						win = elem;
					} else if (elem.nodeType === 9) {
						win = elem.defaultView;
					}
	
					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}
	
					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});
	
		// Support: Safari <=7 - 9.1, Chrome <=37 - 49
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});
	
		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
	
				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	
					return access(this, function (elem, type, value) {
						var doc;
	
						if (isWindow(elem)) {
	
							// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
							return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
						}
	
						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;
	
							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}
	
						return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :
	
						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable);
				};
			});
		});
	
		jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
	
			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});
	
		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});
	
		jQuery.fn.extend({
	
			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},
	
			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
	
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
		// However, it is not slated for removal any time soon
		jQuery.proxy = function (fn, context) {
			var tmp, args, proxy;
	
			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!isFunction(fn)) {
				return undefined;
			}
	
			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		};
	
		jQuery.holdReady = function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		};
		jQuery.isArray = Array.isArray;
		jQuery.parseJSON = JSON.parse;
		jQuery.nodeName = nodeName;
		jQuery.isFunction = isFunction;
		jQuery.isWindow = isWindow;
		jQuery.camelCase = camelCase;
		jQuery.type = toType;
	
		jQuery.now = Date.now;
	
		jQuery.isNumeric = function (obj) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&
	
			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		};
	
		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.
	
		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}
	
			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		};
	
		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}
	
		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BaseComponent = {
	  transitions: [{
	    name: 'init',
	    from: 'none',
	    to: 'ready'
	  }, {
	    name: 'render',
	    from: 'ready',
	    to: 'rendered'
	  }]
	};
	
	exports.default = BaseComponent;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _javascriptStateMachine = __webpack_require__(3);
	
	var _javascriptStateMachine2 = _interopRequireDefault(_javascriptStateMachine);
	
	var _template = __webpack_require__(18);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _Map = __webpack_require__(14);
	
	var _Map2 = _interopRequireDefault(_Map);
	
	var _jquery = __webpack_require__(15);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _baseComponent = __webpack_require__(16);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _errorNotifier = __webpack_require__(19);
	
	var _errorNotifier2 = _interopRequireDefault(_errorNotifier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MapComponent = new _javascriptStateMachine2.default(_jquery2.default.extend(_baseComponent2.default, {
	  methods: {
	    onBeforeInit: function onBeforeInit() {
	      (0, _jquery2.default)("#pathfinder").html("<div id='map-component'></div>");
	    },
	    onLeaveNone: function onLeaveNone() {
	      (0, _jquery2.default)("#map-component").html(_template2.default);
	      this.bindEvents();
	    },
	    bindEvents: function bindEvents() {
	      var _this = this;
	
	      (0, _jquery2.default)("#load-map").on('change', function (e) {
	        var mapFile = e.target.files[0];
	        _this.map = new _Map2.default(mapFile);
	        _this.drawMap();
	      });
	    },
	    drawMap: function drawMap() {
	      this.map.mapNodes.then(function (nodesStr) {
	        (0, _jquery2.default)('#map-canvas').html(nodesStr);
	      }, function (err) {
	        (0, _errorNotifier2.default)(err);
	      });
	    }
	  }
	}));
	
	exports.default = MapComponent;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var template = function template() {
	  return "\n  <input type='file' id='load-map' />\n  <div id='map-canvas'></div>\n";
	};
	exports.default = template;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var errorNotifier = function errorNotifier(error) {
	  console.log(error);
	};
	
	exports.default = errorNotifier;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _javascriptStateMachine = __webpack_require__(3);
	
	var _javascriptStateMachine2 = _interopRequireDefault(_javascriptStateMachine);
	
	var _template = __webpack_require__(21);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _jquery = __webpack_require__(15);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _baseComponent = __webpack_require__(16);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StatsComponent = new _javascriptStateMachine2.default(_jquery2.default.extend(_baseComponent2.default, {}));
	
	exports.default = StatsComponent;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var template = function template() {
	  return "\n  <div id='map-stats'></div>\n";
	};
	exports.default = template;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map