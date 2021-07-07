/**
 *
 *  Usage:
 *
 *
 *  @author Howard.Zuo
 *  @date Oct 29, 2014
 *
 **/
(function(global, factory) {
    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        global.Loading = factory();
    }

}(window, function() {
    'use strict';

    var removeLoadingMask = function() {
        if ($loadingMaskDiv) {
            $body = document.body;
            $body.removeChild($loadingMaskDiv);
        }
    };

    var createDivWithClass = function(cls) {
        var $div = document.createElement('div');
        $div.setAttribute('class', cls);
        return $div;
    };

    var createLoadingMask = function(cls, spinner) {
        $loadingMaskDiv = createDivWithClass('loading-mask ' + cls);
        if (spinner) {
            $loadingMaskDiv.appendChild(spinner);
        }
        $body = document.body;
        $body.appendChild($loadingMaskDiv);
    };

    var createDoubleBounce = function() {
        var $bounce1Div = createDivWithClass('double-bounce1');
        var $bounce2Div = createDivWithClass('double-bounce2');

        var $spinnerDiv = createDivWithClass('ho-spinner');
        $spinnerDiv.appendChild($bounce1Div);
        $spinnerDiv.appendChild($bounce2Div);

        createLoadingMask('double-bounce', $spinnerDiv);
    };

    var createRotatingPlane = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('rotating-plane', $spinnerDiv);
    };

    var createWave = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        for (var i = 1; i <= 5; i++) {
            var $rect = createDivWithClass('rect' + i);
            $spinnerDiv.appendChild($rect);
        }
        createLoadingMask('wave', $spinnerDiv);
    };

    var createWanderingCubes = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('wandering-cubes', $spinnerDiv);
    };

    var createPulse = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('pulse', $spinnerDiv);
    };

    var createChasingDots = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');

        for (var i = 1; i <= 2; i++) {
            var $dot = createDivWithClass('dot' + i);
            $spinnerDiv.appendChild($dot);
        }
        createLoadingMask('chasing-dots', $spinnerDiv);
    };

    var createThreeBounce = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');

        for (var i = 1; i <= 3; i++) {
            var $bounce = createDivWithClass('bounce' + i);
            $spinnerDiv.appendChild($bounce);
        }
        createLoadingMask('three-bounce', $spinnerDiv);
    };

    var createCircle = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');

        for (var i = 1; i <= 12; i++) {
            var $circle = createDivWithClass('circle' + i + ' circle');
            $spinnerDiv.appendChild($circle);
        }
        createLoadingMask('circle-wrapper', $spinnerDiv);
    };

    var createCubeGrid = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');

        for (var i = 1; i <= 9; i++) {
            var $cube = createDivWithClass('cube');
            $spinnerDiv.appendChild($cube);
        }
        createLoadingMask('cube-wrapper', $spinnerDiv);
    };

    var createWordPress = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        var $innerCircle = createDivWithClass('inner-circle');
        $spinnerDiv.appendChild($innerCircle);
        createLoadingMask('wordpress', $spinnerDiv);
    };

    var createAudioWave = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('audio-wave', $spinnerDiv);
    };

    var createSpinningDisc = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('spinning-disc', $spinnerDiv);
    };

    var createCircularSquare = function() {
        var $spinnerDiv = createDivWithClass('ho-spinner');
        createLoadingMask('circular-square', $spinnerDiv);
    };

    var _THEMES = {
        'double-bounce': createDoubleBounce,
        'rotating-plane': createRotatingPlane,
        'wave': createWave,
        'wandering-cubes': createWanderingCubes,
        'pulse': createPulse,
        'chasing-dots': createChasingDots,
        'three-bounce': createThreeBounce,
        'circle': createCircle,
        'cube-grid': createCubeGrid,
        'wordpress': createWordPress,
        'audio-wave': createAudioWave,
        'spinning-disc': createSpinningDisc,
        'circular-square': createCircularSquare
    };

    var $html = document.getElementsByTagName('html')[0];
    var $body = document.body;
    var $loadingMaskDiv;
    var lastOverflow;

    var wheel = function(e) {
        var ex = e || window.event;
        if (ex.preventDefault) {
            ex.preventDefault();
        }
        ex.returnValue = false;
    };

    var disableScrollbar = function() {
        lastOverflow = $body.style.overflow;
        $body.style.overflow = 'hidden';
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', wheel, false);
            window.addEventListener('touchstart', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = wheel;
        window.ontouchstart = document.ontouchstart = wheel;
    };

    var recoverScrollbar = function() {
        $body.style.overflow = lastOverflow;
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', wheel, false);
            window.removeEventListener('touchstart', wheel, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.ontouchstart = document.ontouchstart = null;
    };

    var _isRunning = false;

    var Loading = {};
    Loading.version = '1.1.0';

    Loading.enable = function(theme, timeout) {
        var _this = this;
        var the = 'double-bounce';
        if (_THEMES[theme]) {
            the = theme;
        }

        if (_isRunning) {
            console.warn('loading mask already running');
            return;
        }
        _isRunning = true;

        _THEMES[the]();
        disableScrollbar();

        if (timeout) {
            setTimeout(function() {
                _this.destroy();
            }, timeout);
        }
    };

    Loading.destroy = function() {
        _isRunning = false;
        removeLoadingMask();
        recoverScrollbar();
    };

    return Loading;
}));