"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4580],{

/***/ 14580:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/accordion/fesm2022/ngx-bootstrap-accordion.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionComponent: () => (/* binding */ AccordionComponent),
/* harmony export */   AccordionConfig: () => (/* binding */ AccordionConfig),
/* harmony export */   AccordionModule: () => (/* binding */ AccordionModule),
/* harmony export */   AccordionPanelComponent: () => (/* binding */ AccordionPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 5992);







/**
 * Configuration service, provides default values for the AccordionComponent.
 */
const _c0 = ["*"];
const _c1 = [[["", "accordion-heading", ""]], "*"];
const _c2 = ["[accordion-heading]", "*"];
const _c3 = a0 => ({
  "text-muted": a0
});
function AccordionPanelComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.isDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.heading, " ");
  }
}
class AccordionConfig {
  constructor() {
    /** Whether the other panels should be closed when a panel is opened */
    this.closeOthers = false;
    /** turn on/off animation */
    this.isAnimated = false;
  }
  static {
    this.ɵfac = function AccordionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccordionConfig)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccordionConfig,
      factory: AccordionConfig.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/** Displays collapsible content panels for presenting information in a limited amount of space. */
class AccordionComponent {
  constructor(config) {
    /** turn on/off animation */
    this.isAnimated = false;
    /** if `true` expanding one item will close all others */
    this.closeOthers = false;
    this.groups = [];
    Object.assign(this, config);
  }
  closeOtherPanels(openGroup) {
    if (!this.closeOthers) {
      return;
    }
    this.groups.forEach(group => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  addGroup(group) {
    group.isAnimated = this.isAnimated;
    this.groups.push(group);
  }
  removeGroup(group) {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
  static {
    this.ɵfac = function AccordionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionConfig));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionComponent,
      selectors: [["accordion"]],
      hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"],
      hostVars: 1,
      hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.closeOthers);
        }
      },
      inputs: {
        isAnimated: "isAnimated",
        closeOthers: "closeOthers"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function AccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'accordion',
      template: `<ng-content></ng-content>`,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        '[attr.aria-multiselectable]': 'closeOthers',
        role: 'tablist',
        class: 'panel-group',
        style: 'display: block'
      }
    }]
  }], () => [{
    type: AccordionConfig
  }], {
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOthers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
  // Questionable, maybe .panel-open should be on child div.panel element?
  /** Is accordion group open or closed. This property supports two-way binding */
  get isOpen() {
    return this._isOpen;
  }
  set isOpen(value) {
    if (value !== this.isOpen) {
      if (value) {
        this.accordion.closeOtherPanels(this);
      }
      this._isOpen = value;
      Promise.resolve(null).then(() => {
        this.isOpenChange.emit(value);
      });
    }
  }
  constructor(accordion) {
    /** turn on/off animation */
    this.isAnimated = false;
    /** Provides an ability to use Bootstrap's contextual panel classes
     * (`panel-primary`, `panel-success`, `panel-info`, etc...).
     * List of all available classes [available here]
     * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
     */
    this.panelClass = 'panel-default';
    /** if <code>true</code> — disables accordion group */
    this.isDisabled = false;
    /** Emits when the opened state changes */
    this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._isOpen = false;
    this.accordion = accordion;
  }
  ngOnInit() {
    this.accordion.addGroup(this);
  }
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
  toggleOpen() {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
  static {
    this.ɵfac = function AccordionPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccordionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionComponent));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionPanelComponent,
      selectors: [["accordion-group"], ["accordion-panel"]],
      hostAttrs: [1, "panel", 2, "display", "block"],
      hostVars: 2,
      hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("panel-open", ctx.isOpen);
        }
      },
      inputs: {
        heading: "heading",
        panelClass: "panelClass",
        isDisabled: "isDisabled",
        isOpen: "isOpen"
      },
      outputs: {
        isOpenChange: "isOpenChange"
      },
      ngContentSelectors: _c2,
      decls: 9,
      vars: 6,
      consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "click", "ngClass"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]],
      template: function AccordionPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionPanelComponent_Template_div_click_1_listener() {
            return ctx.toggleOpen();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.panelClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseDirective],
      styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'accordion-group, accordion-panel',
      host: {
        class: 'panel',
        style: 'display: block'
      },
      template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
      styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}\n"]
    }]
  }], () => [{
    type: AccordionComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [AccordionComponent]
    }]
  }], {
    heading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isOpenChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.panel-open']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class AccordionModule {
  static forRoot() {
    return {
      ngModule: AccordionModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function AccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccordionModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccordionModule,
      declarations: [AccordionComponent, AccordionPanelComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule],
      exports: [AccordionComponent, AccordionPanelComponent]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__.CollapseModule],
      declarations: [AccordionComponent, AccordionPanelComponent],
      exports: [AccordionComponent, AccordionPanelComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-bootstrap-accordion.mjs.map

/***/ }),

/***/ 5992:
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm2022/ngx-bootstrap-collapse.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseDirective: () => (/* binding */ CollapseDirective),
/* harmony export */   CollapseModule: () => (/* binding */ CollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 49969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);




const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
const expandAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  visibility: 'hidden'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(COLLAPSE_ANIMATION_TIMING, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  visibility: 'visible'
}))];
const collapseAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  visibility: 'visible'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(COLLAPSE_ANIMATION_TIMING, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  visibility: 'hidden'
}))];
class CollapseDirective {
  set display(value) {
    this._display = value;
    if (value === 'none') {
      this.hide();
      return;
    }
    this.isAnimated ? this.toggle() : this.show();
  }
  /** A flag indicating visibility of content (shown or hidden) */
  set collapse(value) {
    this.collapseNewValue = value;
    if (!this._player || this._isAnimationDone) {
      this.isExpanded = value;
      this.toggle();
    }
  }
  get collapse() {
    return this.isExpanded;
  }
  constructor(_el, _renderer, _builder) {
    this._el = _el;
    this._renderer = _renderer;
    /** This event fires as soon as content collapses */
    this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** This event fires when collapsing is started */
    this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** This event fires as soon as content becomes visible */
    this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** This event fires when expansion is started */
    this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    // shown
    this.isExpanded = true;
    this.collapseNewValue = true;
    // hidden
    this.isCollapsed = false;
    // stale state
    this.isCollapse = true;
    // animation state
    this.isCollapsing = false;
    /** turn on/off animation */
    this.isAnimated = false;
    this._display = 'block';
    this._stylesLoaded = false;
    this._COLLAPSE_ACTION_NAME = 'collapse';
    this._EXPAND_ACTION_NAME = 'expand';
    this._factoryCollapseAnimation = _builder.build(collapseAnimation);
    this._factoryExpandAnimation = _builder.build(expandAnimation);
  }
  ngAfterViewChecked() {
    this._stylesLoaded = true;
    if (!this._player || !this._isAnimationDone) {
      return;
    }
    this._player.reset();
    this._renderer.setStyle(this._el.nativeElement, 'height', '*');
  }
  /** allows to manually toggle content visibility */
  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }
  /** allows to manually hide content */
  hide() {
    this.isCollapsing = true;
    this.isExpanded = false;
    this.isCollapsed = true;
    this.isCollapsing = false;
    this.collapses.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
        this.show();
        return;
      }
      this.collapsed.emit(this);
      this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
    });
  }
  /** allows to manually show collapsed content */
  show() {
    this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
    this.isCollapsing = true;
    this.isExpanded = true;
    this.isCollapsed = false;
    this.isCollapsing = false;
    this.expands.emit(this);
    this._isAnimationDone = false;
    this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
      this._isAnimationDone = true;
      if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
        this.hide();
        return;
      }
      this.expanded.emit(this);
      this._renderer.removeStyle(this._el.nativeElement, 'overflow');
    });
  }
  animationRun(isAnimated, action) {
    if (!isAnimated || !this._stylesLoaded) {
      return callback => callback();
    }
    this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
    this._renderer.addClass(this._el.nativeElement, 'collapse');
    const factoryAnimation = action === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;
    if (this._player) {
      this._player.reset();
    }
    this._player = factoryAnimation.create(this._el.nativeElement);
    this._player.play();
    return callback => this._player?.onDone(callback);
  }
  static {
    this.ɵfac = function CollapseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CollapseDirective,
      selectors: [["", "collapse", ""]],
      hostVars: 9,
      hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", ctx.isCollapsed);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
        }
      },
      inputs: {
        display: "display",
        isAnimated: "isAnimated",
        collapse: "collapse"
      },
      outputs: {
        collapsed: "collapsed",
        collapses: "collapses",
        expanded: "expanded",
        expands: "expands"
      },
      exportAs: ["bs-collapse"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[collapse]',
      exportAs: 'bs-collapse',
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        '[class.collapse]': 'true'
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
  }, {
    type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AnimationBuilder
  }], {
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    collapses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    expands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.in']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.show']
    }],
    isCollapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['attr.aria-hidden']
    }],
    isCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.collapse']
    }],
    isCollapsing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.collapsing']
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    collapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class CollapseModule {
  static forRoot() {
    return {
      ngModule: CollapseModule,
      providers: []
    };
  }
  static {
    this.ɵfac = function CollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CollapseModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CollapseModule,
      declarations: [CollapseDirective],
      exports: [CollapseDirective]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [CollapseDirective],
      exports: [CollapseDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-bootstrap-collapse.mjs.map

/***/ })

}]);