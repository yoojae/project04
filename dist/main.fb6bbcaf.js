// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
$(function () {
  var slideIndexS = 0,
    sliding = false;
  $('#fullpage').fullpage({
    anchors: ['page00', 'page01', 'page02', 'page03', 'page04'],
    menu: '#menu',
    css3: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    normalScrollElements: '.page03 .xd, .page03 .left .swiper-container',
    afterLoad: function afterLoad(origin, destination, direction) {
      if (destination.anchor == 'page00') {
        $('.page00').css('cursor', 'default');
      }
      if (destination.anchor == 'page01') {
        $('.p1').animate({
          top: '0'
        }, 600);
        $('.p2').animate({
          top: '0'
        }, 600);
        $('.p3').animate({
          left: '0',
          opacity: '1'
        }, 700);
        $('.p4').fadeIn(700);
        $('.p5').fadeIn(700);
        $('.p6').fadeIn(700);
        $('.page01 .left>img').animate({
          marginTop: '25px',
          opacity: '1'
        }, 300).animate({
          marginTop: '30px'
        }, 300);
        $('.page01 .bubble01').stop().animate({
          marginTop: '-4px',
          opacity: '1'
        }, 300).animate({
          marginTop: '0'
        }, 300);
        $('.page01 .bubble01').hover(function () {
          $(this).stop().animate({
            marginTop: '-5px'
          }, 300);
        }, function () {
          $(this).stop().animate({
            marginTop: '0'
          }, 300);
        });
      }
      ;
      if (destination.anchor == 'page02') {
        $('.progressbox01 span').each(function () {
          $(this).delay(500).animate({
            width: $(this).attr('data-progress') + "%"
          }, 1500);
          $(this).text($(this).attr('data-progress') + "%");
        });
      }
      ;
      if (destination.anchor == 'page03') {
        $('.xd_pro01').click(function () {
          $('.xd_file01').show();
        });
        $('.xd_clo01').click(function () {
          $('.xd_file01').hide();
        });
        $('.xd_pro02').click(function () {
          $('.xd_file02').show();
        });
        $('.xd_clo02').click(function () {
          $('.xd_file02').hide();
        });
        $('.xd_pro03').click(function () {
          $('.xd_file03').show();
        });
        $('.xd_clo03').click(function () {
          $('.xd_file03').hide();
        });
        $('.xd_pro04').click(function () {
          $('.xd_file04').show();
        });
        $('.xd_clo04').click(function () {
          $('.xd_file04').hide();
        });
        $('.page03 .bubble03').stop().animate({
          top: '250px',
          opacity: '1'
        }, 200).animate({
          top: '255px'
        }, 200);
      }
      if (destination.anchor == 'page04') {
        $('.card_box').animate({
          top: '390px'
        }, 300).animate({
          top: '400px'
        }, 300).animate({
          top: '390px'
        }, 300).animate({
          top: '400px'
        }, 300);
        $('.card_box').on('click', function () {
          $('.card_show').css('display', 'block').animate({
            width: '812px',
            height: '440px'
          }, 500);
        });
      }
      ;
    },
    afterSlideLoad: function afterSlideLoad(section, origin, destination, direction) {
      slideIndexS = destination.index + 1;
      if (direction == 'right') {
        $('.education').animate({
          top: '-10px',
          opacity: '1'
        }, 400).animate({
          top: '0px'
        }, 400);
        $('.career').delay(300).animate({
          top: '150px',
          opacity: '1'
        }, 400).animate({
          top: '160px'
        }, 400);
        $('.participation').delay(800).animate({
          top: '290px',
          opacity: '1'
        }, 500).animate({
          top: '300px'
        }, 400);
        $('.bubble02').animate({
          marginTop: '-5px'
        }, 300).animate({
          marginTop: '0'
        }, 400);
        $('.education').hover(function () {
          $(this).animate({
            top: '-10px'
          }, 400);
        }, function () {
          $(this).animate({
            top: '0px'
          }, 400);
        });
        $('.career').hover(function () {
          $(this).animate({
            top: '150px'
          }, 400);
        }, function () {
          $(this).animate({
            top: '160px'
          }, 400);
        });
        $('.participation').hover(function () {
          $(this).animate({
            top: '290px'
          }, 400);
        }, function () {
          $(this).animate({
            top: '300px'
          }, 400);
        });
        $('.bubble02').hover(function () {
          $('.file04 p').addClass('in');
        }, function () {
          $('.file04 p').removeClass('in');
        });
        var display = $('.mini_window div');
        var folder = $('.fol div');
        display.mouseover(function () {
          var i = $(this).index();
          folder.removeClass('hover');
          folder.eq(i).addClass('hover');
        });
        display.mouseout(function () {
          folder.removeClass('hover');
        });
      }
    },
    onLeave: function onLeave(origin, destination, direction) {
      if (origin.index === 1 && !sliding) {
        if (direction === 'down' && slideIndexS < 2) {
          $.fn.fullpage.moveSlideRight();
          return false;
        } else if (direction === 'up' && slideIndexS > 1) {
          $.fn.fullpage.moveSlideLeft();
          return false;
        }
      }
    }
  });
  var content = "HELLO! \n 안녕하세요 \n 프론트엔드 개발자 유가영입니다";
  var text = document.querySelector(".text");
  var i = 0;
  function typing() {
    if (i < content.length) {
      var txt = content.charAt(i);
      text.innerHTML += txt === "\n" ? "<br/>" : txt;
      i++;
    }
  }
  setInterval(typing, 200);
  var bullet = ['개인 프로젝트', '팀 프로젝트', '리액트 프로젝트', '개인 포트폴리오'];
  var fourthPage = new Swiper(".page03 .left .swiper-container", {
    slidesPerView: "auto",
    direction: 'horizontal',
    mousewheel: true,
    navigation: {
      nextEl: ".page03 .left .swiper-button-next",
      prevEl: ".page03 .left .swiper-button-prev"
    },
    pagination: {
      el: '.page03 .left .swiper-pagination',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function renderBullet(index, className) {
        return '<div class="' + className + '"><span>' + bullet[index] + '</span></div>';
      }
    }
  });
  var project01 = new Swiper(".page03 .project01", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project01 .swiper-button-next",
      prevEl: ".page03 .project01 .swiper-button-prev"
    },
    pagination: {
      el: '.page03 .project01 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });
  var project02 = new Swiper(".page03 .project02", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project02 .swiper-button-next",
      prevEl: ".page03 .project02 .swiper-button-prev"
    },
    pagination: {
      el: '.page03 .project02 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });
  var project03 = new Swiper(".page03 .project03", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project03 .swiper-button-next",
      prevEl: ".page03 .project03 .swiper-button-prev"
    },
    pagination: {
      el: '.page03 .project03 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });
  var project04 = new Swiper(".page03 .project04", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".page03 .project04 .swiper-button-next",
      prevEl: ".page03 .project04 .swiper-button-prev"
    },
    pagination: {
      el: '.page03 .project04 .swiper-pagination',
      clickable: 'true',
      type: 'bullets'
    }
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "14565" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map