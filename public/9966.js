"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9966],{

/***/ 69966:
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/fesm2022/ngx-bootstrap-popover.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverConfig: () => (/* binding */ PopoverConfig),
/* harmony export */   PopoverContainerComponent: () => (/* binding */ PopoverContainerComponent),
/* harmony export */   PopoverDirective: () => (/* binding */ PopoverDirective),
/* harmony export */   PopoverModule: () => (/* binding */ PopoverModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ 76932);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ 72806);
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/positioning */ 71946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1807);











/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
const _c0 = ["*"];
function PopoverContainerComponent_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
class PopoverConfig {
  constructor() {
    /** sets disable adaptive position */
    this.adaptivePosition = true;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
     */
    this.placement = 'top';
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    this.triggers = 'click';
    this.outsideClick = false;
    /** delay before showing the tooltip */
    this.delay = 0;
  }
  static {
    this.ɵfac = function PopoverConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PopoverConfig)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PopoverConfig,
      factory: PopoverConfig.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class PopoverContainerComponent {
  set placement(value) {
    if (!this._bsVersions.isBs5) {
      this._placement = value;
    } else {
      this._placement = ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PlacementForBs5[value];
    }
  }
  get _bsVersions() {
    return (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__.getBsVer)();
  }
  constructor(config) {
    this._placement = 'top';
    Object.assign(this, config);
  }
  checkMarginNecessity() {
    return (0,ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.checkMargins)(this._placement);
  }
  static {
    this.ɵfac = function PopoverContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopoverContainerComponent,
      selectors: [["popover-container"]],
      hostAttrs: ["role", "tooltip", 2, "display", "block", "position", "absolute"],
      hostVars: 7,
      hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.popoverId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx._placement + " " + "bs-popover-" + ctx._placement + " " + ctx._placement + " " + ctx.containerClass + " " + ctx.checkMarginNecessity());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx._bsVersions.isBs3)("bs3", ctx._bsVersions.isBs3);
        }
      },
      inputs: {
        placement: "placement",
        title: "title"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 1,
      consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
      template: function PopoverContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}[_nghost-%COMP%]   .popover-arrow[_ngcontent-%COMP%]{position:absolute}"],
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'popover-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '[attr.id]': 'popoverId',
        '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + " " + checkMarginNecessity()',
        '[class.show]': '!_bsVersions.isBs3',
        '[class.bs3]': '_bsVersions.isBs3',
        role: 'tooltip',
        style: 'display:block; position:absolute'
      },
      template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
      styles: [":host.popover.bottom>.arrow{margin-left:-4px}:host .popover-arrow{position:absolute}\n"]
    }]
  }], () => [{
    type: PopoverConfig
  }], {
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let id = 0;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
  /**
   * Returns whether or not the popover is currently being shown
   */
  get isOpen() {
    return this._popover.isShown;
  }
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    /** unique id popover - use for aria-describedby */
    this.popoverId = id++;
    /** sets disable adaptive position */
    this.adaptivePosition = true;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     */
    this.placement = 'top';
    /**
     * Close popover on outside click
     */
    this.outsideClick = false;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    this.triggers = 'click';
    /**
     * Css class for popover container
     */
    this.containerClass = '';
    /**
     * Delay before showing the tooltip
     */
    this.delay = 0;
    this._isInited = false;
    this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
      provide: PopoverConfig,
      useValue: _config
    });
    Object.assign(this, _config);
    this.onShown = this._popover.onShown;
    this.onHidden = this._popover.onHidden;
    // fix: no focus on button on Mac OS #1795
    if (typeof window !== 'undefined') {
      _elementRef.nativeElement.addEventListener('click', function () {
        try {
          _elementRef.nativeElement.focus();
        } catch (err) {
          return;
        }
      });
    }
  }
  /**
   * Set attribute aria-describedBy for element directive and
   * set id for the popover
   */
  setAriaDescribedBy() {
    this._ariaDescribedby = this.isOpen ? `ngx-popover-${this.popoverId}` : void 0;
    if (this._ariaDescribedby) {
      if (this._popover.instance) {
        this._popover.instance.popoverId = this._ariaDescribedby;
      }
      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
    } else {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
    }
  }
  /**
   * Opens an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  show() {
    if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
      return;
    }
    this._positionService.setOptions({
      modifiers: {
        flip: {
          enabled: this.adaptivePosition
        },
        preventOverflow: {
          enabled: this.adaptivePosition,
          boundariesElement: this.boundariesElement || 'scrollParent'
        }
      }
    });
    const showPopover = () => {
      if (this._delayTimeoutId) {
        this._delayTimeoutId = undefined;
      }
      this._popover.attach(PopoverContainerComponent).to(this.container).position({
        attachment: this.placement
      }).show({
        content: this.popover,
        context: this.popoverContext,
        placement: this.placement,
        title: this.popoverTitle,
        containerClass: this.containerClass
      });
      if (!this.adaptivePosition && this._popover._componentRef) {
        this._positionService.calcPosition();
        this._positionService.deletePositionElement(this._popover._componentRef.location);
      }
      this.isOpen = true;
      this.setAriaDescribedBy();
    };
    const cancelDelayedTooltipShowing = () => {
      if (this._popoverCancelShowFn) {
        this._popoverCancelShowFn();
      }
    };
    if (this.delay) {
      const _timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(this.delay).subscribe(() => {
        showPopover();
        cancelDelayedTooltipShowing();
      });
      if (this.triggers) {
        (0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__.parseTriggers)(this.triggers).forEach(trigger => {
          if (!trigger.close) {
            return;
          }
          this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
            _timer.unsubscribe();
            cancelDelayedTooltipShowing();
          });
        });
      }
    } else {
      showPopover();
    }
  }
  /**
   * Closes an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  hide() {
    if (this._delayTimeoutId) {
      clearTimeout(this._delayTimeoutId);
      this._delayTimeoutId = undefined;
    }
    if (this.isOpen) {
      this._popover.hide();
      this.setAriaDescribedBy();
      this.isOpen = false;
    }
  }
  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  toggle() {
    if (this.isOpen) {
      return this.hide();
    }
    this.show();
  }
  ngOnInit() {
    // fix: seems there are an issue with `routerLinkActive`
    // which result in duplicated call ngOnInit without call to ngOnDestroy
    // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
    if (this._isInited) {
      return;
    }
    this._isInited = true;
    this._popover.listen({
      triggers: this.triggers,
      outsideClick: this.outsideClick,
      show: () => this.show(),
      hide: () => this.hide()
    });
  }
  ngOnDestroy() {
    this._popover.dispose();
  }
  static {
    this.ɵfac = function PopoverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PopoverDirective,
      selectors: [["", "popover", ""]],
      inputs: {
        adaptivePosition: "adaptivePosition",
        boundariesElement: "boundariesElement",
        popover: "popover",
        popoverContext: "popoverContext",
        popoverTitle: "popoverTitle",
        placement: "placement",
        outsideClick: "outsideClick",
        triggers: "triggers",
        container: "container",
        containerClass: "containerClass",
        isOpen: "isOpen",
        delay: "delay"
      },
      outputs: {
        onShown: "onShown",
        onHidden: "onHidden"
      },
      exportAs: ["bs-popover"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[popover]',
      exportAs: 'bs-popover'
    }]
  }], () => [{
    type: PopoverConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderFactory
  }, {
    type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService
  }], {
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    boundariesElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class PopoverModule {
  static forRoot() {
    return {
      ngModule: PopoverModule,
      providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderFactory, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_1__.PositioningService]
    };
  }
  static {
    this.ɵfac = function PopoverModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PopoverModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PopoverModule,
      declarations: [PopoverDirective, PopoverContainerComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [PopoverDirective]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [PopoverDirective, PopoverContainerComponent],
      exports: [PopoverDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-bootstrap-popover.mjs.map

/***/ })

}]);