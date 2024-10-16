"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4333],{

/***/ 11846:
/*!*****************************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-not-closable-zone.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownNotClosableZone: () => (/* binding */ DropdownNotClosableZone)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);


/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownNotClosableZone.ts
 */
let DropdownNotClosableZone = class DropdownNotClosableZone {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  contains(element) {
    if (this.dropdownNotClosabledZone === false) return false;
    const thisElement = this.elementRef.nativeElement;
    return thisElement.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      dropdownNotClosabledZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ["dropdown-not-closable-zone"]
      }]
    };
  }
};
DropdownNotClosableZone = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "[dropdown-not-closable-zone]",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])], DropdownNotClosableZone);


/***/ }),

/***/ 55720:
/*!****************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-open.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownOpen: () => (/* binding */ DropdownOpen)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 51429);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownOpen.ts
 */
let DropdownOpen = class DropdownOpen {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(dropdown, elementRef) {
    this.dropdown = dropdown;
    this.elementRef = elementRef;
    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------
    /**
     * This hack is needed for dropdown not to open and instantly closed
     */
    this.openedByFocus = false;
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event) {
      _this.closeIfInClosableZone(event);
    };
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  toggle() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (this.dropdown.isOpened()) return;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  close() {
    if (!this.dropdown.isOpened()) return;
    this.dropdown.close();
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  openDropdown() {
    if (this.dropdown.activateOnFocus && this.openedByFocus) {
      this.openedByFocus = false;
      return;
    }
    if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
      this.close();
    } else {
      this.open();
    }
  }
  dropdownKeydown(event) {
    if (event.keyCode === 40) {
      // down
      this.openDropdown();
    }
  }
  onFocus() {
    if (!this.dropdown.activateOnFocus) return;
    this.openedByFocus = true;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  onBlur(event) {
    if (!this.dropdown.activateOnFocus) return;
    if (event.relatedTarget && !this.dropdown.isInClosableZone(event.relatedTarget) && event.relatedTarget !== this.elementRef.nativeElement) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  // -------------------------------------------------------------------------
  // Lifecycle Methods
  // -------------------------------------------------------------------------
  ngOnDestroy() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------
  closeIfInClosableZone(event) {
    if (!this.dropdown.isInClosableZone(event.target) && event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      openDropdown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["click"]
      }],
      dropdownKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["keydown", ["$event"]]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["focus"]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["blur", ["$event"]]
      }]
    };
  }
};
DropdownOpen = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown-open]",
  exportAs: "dropdownOpen",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], DropdownOpen);


/***/ }),

/***/ 51429:
/*!***********************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-not-closable-zone.directive */ 11846);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/Dropdown.ts
 */
let Dropdown = class Dropdown {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.toggleClick = true;
    this.activateOnFocus = false;
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  open() {
    const element = this.elementRef.nativeElement;
    element.classList.add("open");
    this.onOpen.emit(undefined);
  }
  close() {
    const element = this.elementRef.nativeElement;
    element.classList.remove("open");
    this.onClose.emit(undefined);
  }
  isOpened() {
    const element = this.elementRef.nativeElement;
    return element.classList.contains("open");
  }
  isInClosableZone(element) {
    if (!this.notClosableZone) return false;
    return this.notClosableZone.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      toggleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownToggle"]
      }],
      activateOnFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownFocusActivate"]
      }],
      onOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      onClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      notClosableZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
        args: [_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownNotClosableZone]
      }]
    };
  }
};
Dropdown = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown]",
  exportAs: "dropdown",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], Dropdown);


/***/ }),

/***/ 77494:
/*!**************************************************************!*\
  !*** ./node_modules/@ngu/carousel/fesm2022/ngu-carousel.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NguCarousel: () => (/* binding */ NguCarousel),
/* harmony export */   NguCarouselConfig: () => (/* binding */ NguCarouselConfig),
/* harmony export */   NguCarouselDefDirective: () => (/* binding */ NguCarouselDefDirective),
/* harmony export */   NguCarouselItemDirective: () => (/* binding */ NguCarouselItemDirective),
/* harmony export */   NguCarouselNextDirective: () => (/* binding */ NguCarouselNextDirective),
/* harmony export */   NguCarouselOutlet: () => (/* binding */ NguCarouselOutlet),
/* harmony export */   NguCarouselPointDirective: () => (/* binding */ NguCarouselPointDirective),
/* harmony export */   NguCarouselPrevDirective: () => (/* binding */ NguCarouselPrevDirective),
/* harmony export */   NguCarouselStore: () => (/* binding */ NguCarouselStore),
/* harmony export */   NguItemComponent: () => (/* binding */ NguItemComponent),
/* harmony export */   NguTileComponent: () => (/* binding */ NguTileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 59030);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44668);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 56977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 57786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 983);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 99172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60177);





const _c0 = ["ngucarousel"];
const _c1 = ["nguItemsContainer"];
const _c2 = ["touchContainer"];
const _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
const _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
const _c5 = ["*"];
class NguCarouselStore {
  constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
    this.touch = touch;
    this.vertical = vertical;
    this.interval = interval;
    this.transform = transform;
    this.button = button;
    this.visibleItems = visibleItems;
    this.deviceType = deviceType;
    this.type = type;
    this.token = token;
    this.items = items;
    this.load = load;
    this.deviceWidth = deviceWidth;
    this.carouselWidth = carouselWidth;
    this.itemWidth = itemWidth;
    this.slideItems = slideItems;
    this.itemWidthPer = itemWidthPer;
    this.itemLength = itemLength;
    this.currentSlide = currentSlide;
    this.easing = easing;
    this.speed = speed;
    this.loop = loop;
    this.dexVal = dexVal;
    this.touchTransform = touchTransform;
    this.isEnd = isEnd;
    this.isFirst = isFirst;
    this.isLast = isLast;
    this.RTL = RTL;
    this.point = point;
    this.velocity = velocity;
  }
}
class ItemsControl {}
class Vertical {}
class NguButton {}
class Touch {}
// This is misspelled. Must be changed to `Transform`.
class Transfrom {
  constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.all = all;
    this.xl = 0;
  }
}
/**
 * Default values
 * {sm: 768, md: 992, lg: 1200, xl: 1200}
 *
 * Bootstrap values:
 * {sm: 576, md: 768, lg: 992, xl: 1200}
 */
class Breakpoints {
  constructor(sm = 768, md = 992, lg = 1200, xl = 1200) {
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
  }
}
class NguCarouselConfig {}
class NguCarouselOutletContext {
  constructor(data) {
    this.$implicit = data;
  }
}
const IS_BROWSER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('IS_BROWSER', {
  providedIn: 'root',
  factory: () => (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID))
});
class NguCarouselItemDirective {
  static {
    this.ɵfac = function NguCarouselItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselItemDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselItemDirective,
      selectors: [["", "NguCarouselItem", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[NguCarouselItem]',
      standalone: true
    }]
  }], null, null);
})();
class NguCarouselNextDirective {
  static {
    this.ɵfac = function NguCarouselNextDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselNextDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselNextDirective,
      selectors: [["", "NguCarouselNext", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselNextDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[NguCarouselNext]',
      standalone: true
    }]
  }], null, null);
})();
class NguCarouselPrevDirective {
  static {
    this.ɵfac = function NguCarouselPrevDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselPrevDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselPrevDirective,
      selectors: [["", "NguCarouselPrev", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselPrevDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[NguCarouselPrev]',
      standalone: true
    }]
  }], null, null);
})();
class NguCarouselPointDirective {
  static {
    this.ɵfac = function NguCarouselPointDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselPointDirective)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselPointDirective,
      selectors: [["", "NguCarouselPoint", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselPointDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[NguCarouselPoint]',
      standalone: true
    }]
  }], null, null);
})();
class NguCarouselDefDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NguCarouselDefDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselDefDirective,
      selectors: [["", "nguCarouselDef", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselDefDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[nguCarouselDef]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
// eslint-disable-next-line @angular-eslint/directive-class-suffix
class NguCarouselOutlet {
  constructor(viewContainer) {
    this.viewContainer = viewContainer;
  }
  static {
    this.ɵfac = function NguCarouselOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NguCarouselOutlet,
      selectors: [["", "nguCarouselOutlet", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[nguCarouselOutlet]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }], null);
})();
class NguHammerLoader {
  constructor() {
    this._hammer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defer)(() => __webpack_require__.e(/*! import() */ 4511).then(__webpack_require__.t.bind(__webpack_require__, /*! hammerjs */ 64511, 19))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
  }
  load() {
    return this._hammer$;
  }
  static {
    this.ɵfac = function NguHammerLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguHammerLoader)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NguHammerLoader,
      factory: NguHammerLoader.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguHammerLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class NguCarouselHammerManager {
  constructor(_ngZone, _nguHammerLoader) {
    this._ngZone = _ngZone;
    this._nguHammerLoader = _nguHammerLoader;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnDestroy() {
    this._destroy$.next();
  }
  createHammer(element) {
    return this._nguHammerLoader.load().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() =>
    // Note: The Hammer manager should be created outside of the Angular zone since it sets up
    //       `pointermove` event listener which triggers change detection every time the pointer is moved.
    this._ngZone.runOutsideAngular(() => new Hammer(element))),
    // Note: the dynamic import is always a microtask which may run after the view is destroyed.
    //       `takeUntil` is used to prevent setting Hammer up if the view had been destroyed before
    //       the HammerJS is loaded.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$));
  }
  on(hammer, event) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(hammer, event).pipe(
    // Note: We have to re-enter the Angular zone because Hammer would trigger events outside of the
    //       Angular zone (since we set it up with `runOutsideAngular`).
    enterNgZone(this._ngZone), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$));
  }
  static {
    this.ɵfac = function NguCarouselHammerManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarouselHammerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NguHammerLoader));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NguCarouselHammerManager,
      factory: NguCarouselHammerManager.ɵfac
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarouselHammerManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: NguHammerLoader
  }], null);
})();
function enterNgZone(ngZone) {
  return source => new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(subscriber => source.subscribe({
    next: value => ngZone.run(() => subscriber.next(value)),
    error: error => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  }));
}
class NguWindowScrollListener extends rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject {
  constructor(isBrowser, ngZone) {
    super();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    // Note: this service is shared between multiple `NguCarousel` components and each instance
    //       doesn't add new events listener for the `window`.
    if (isBrowser) {
      ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'scroll').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(this));
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
  }
  static {
    this.ɵfac = function NguWindowScrollListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguWindowScrollListener)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](IS_BROWSER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NguWindowScrollListener,
      factory: NguWindowScrollListener.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguWindowScrollListener, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [IS_BROWSER]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
// eslint-disable-next-line @angular-eslint/component-class-suffix
class NguCarousel extends NguCarouselStore {
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(data) {
    if (data) {
      this._switchDataSource(data);
    }
  }
  /**
   * The setter is used to catch the button if the button is wrapped with `ngIf`.
   * https://github.com/uiuniversal/ngu-carousel/issues/91
   */
  set nextButton(nextButton) {
    this._nextButton$.next(nextButton?.nativeElement);
  }
  /**
   * The setter is used to catch the button if the button is wrapped with `ngIf`.
   * https://github.com/uiuniversal/ngu-carousel/issues/91
   */
  set prevButton(prevButton) {
    this._prevButton$.next(prevButton?.nativeElement);
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
   * relative to the function to know if a Items should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if (NG_DEV_MODE && fn != null && typeof fn !== 'function' && console?.warn) {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  constructor(_host, _renderer, _differs, _isBrowser, _cdr, _ngZone, _nguWindowScrollListener, _nguCarouselHammerManager) {
    super();
    this._host = _host;
    this._renderer = _renderer;
    this._differs = _differs;
    this._isBrowser = _isBrowser;
    this._cdr = _cdr;
    this._ngZone = _ngZone;
    this._nguWindowScrollListener = _nguWindowScrollListener;
    this._nguCarouselHammerManager = _nguCarouselHammerManager;
    /** Public property that may be accessed outside of the component. */
    this.activePoint = 0;
    /** Public property that may be accessed outside of the component. */
    this.pointNumbers = [];
    this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._arrayChanges = null;
    this._dataSource = null;
    this._intervalController$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._hammer = null;
    this._withAnimation = true;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.ngu_dirty = true;
    this._markedForCheck = false;
    /** Subjects used to notify whenever buttons are removed or rendered so we can re-add listeners. */
    this._prevButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._nextButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._setupButtonListeners();
  }
  ngDoCheck() {
    this._checkChanges();
  }
  _checkChanges() {
    if (this.ngu_dirty) {
      this.ngu_dirty = false;
      const dataStream = this._dataSource;
      if (!this._arrayChanges && !!dataStream) {
        this._dataDiffer = this._differs.find(dataStream).create((index, item) => this.trackBy ? this.trackBy(index, item) : item);
      }
    }
    if (this._dataDiffer) {
      this._arrayChanges = this._markedForCheck && this._arrayChanges ? this._arrayChanges : this._dataDiffer.diff(this._dataSource);
      if (this._arrayChanges) {
        this.renderNodeChanges(Array.from(this._dataSource));
      }
    }
  }
  _switchDataSource(dataSource) {
    this._dataSource = dataSource;
    this.ngu_dirty = true;
  }
  renderNodeChanges(data) {
    if (!this._arrayChanges) return;
    this.isLast = this._pointIndex === this.currentSlide;
    const viewContainer = this._nodeOutlet.viewContainer;
    this._markedForCheck = false;
    this._arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      const node = this._getNodeDef(data[currentIndex], currentIndex);
      if (node?.template) {
        if (item.previousIndex == null) {
          const context = new NguCarouselOutletContext(data[currentIndex]);
          context.index = currentIndex;
          viewContainer.createEmbeddedView(node.template, context, currentIndex);
        } else if (currentIndex == null) {
          viewContainer.remove(adjustedPreviousIndex);
        } else {
          const view = viewContainer.get(adjustedPreviousIndex);
          viewContainer.move(view, currentIndex);
        }
      }
    });
    this._updateItemIndexContext();
    if (this._host.nativeElement) {
      this._storeCarouselData();
    }
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateItemIndexContext() {
    const viewContainer = this._nodeOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      context.index = renderIndex;
    }
  }
  _getNodeDef(data, i) {
    if (this._defDirectives?.length === 1) {
      return this._defDirectives.first;
    }
    const nodeDef = (this._defDirectives || []).find(def => !!def.when?.(i, data));
    return nodeDef;
  }
  ngAfterViewInit() {
    this._inputValidation();
    this._carouselCssNode = this._createStyleElem();
    if (this._isBrowser) {
      this._carouselInterval();
      if (!this.vertical.enabled && this.inputs.touch) {
        this._setupHammer();
      }
      this._setupWindowResizeListener();
      this._onWindowScrolling();
    }
  }
  ngAfterContentInit() {
    this._cdr.markForCheck();
    this._defDirectives.changes.subscribe(() => {
      this._markedForCheck = true;
      this._checkChanges();
    });
    this._defDirectives.notifyOnChanges();
  }
  _inputValidation() {
    this.inputs.gridBreakpoints = this.inputs.gridBreakpoints ? this.inputs.gridBreakpoints : new Breakpoints();
    if (this.inputs.grid.xl === undefined) {
      this.inputs.grid.xl = this.inputs.grid.lg;
    }
    this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
    this.loop = this.inputs.loop || false;
    this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
    this.touch.active = this.inputs.touch || false;
    this.RTL = this.inputs.RTL ? true : false;
    this.interval = this.inputs.interval || undefined;
    this.velocity = typeof this.inputs.velocity === 'number' ? this.inputs.velocity : this.velocity;
    if (this.inputs.vertical && this.inputs.vertical.enabled) {
      this.vertical.enabled = this.inputs.vertical.enabled;
      this.vertical.height = this.inputs.vertical.height;
    }
    this._directionSymbol = this.RTL ? '' : '-';
    this.point = this.inputs.point && typeof this.inputs.point.visible !== 'undefined' ? this.inputs.point.visible : true;
    this._carouselSize();
  }
  ngOnDestroy() {
    this._hammer?.destroy();
    this._destroy$.next();
  }
  /** Get Touch input */
  _setupHammer() {
    // Note: doesn't need to unsubscribe because streams are piped with `takeUntil` already.
    this._nguCarouselHammerManager.createHammer(this._touchContainer.nativeElement).subscribe(hammer => {
      this._hammer = hammer;
      hammer.get('pan').set({
        direction: Hammer.DIRECTION_HORIZONTAL
      });
      this._nguCarouselHammerManager.on(hammer, 'panstart').subscribe(() => {
        this.carouselWidth = this._nguItemsContainer.nativeElement.offsetWidth;
        this.touchTransform = this.transform[this.deviceType];
        this.dexVal = 0;
        this._setStyle(this._nguItemsContainer.nativeElement, 'transition', '');
      });
      if (this.vertical.enabled) {
        this._nguCarouselHammerManager.on(hammer, 'panup').subscribe(ev => {
          this._touchHandling('panleft', ev);
        });
        this._nguCarouselHammerManager.on(hammer, 'pandown').subscribe(ev => {
          this._touchHandling('panright', ev);
        });
      } else {
        this._nguCarouselHammerManager.on(hammer, 'panleft').subscribe(ev => {
          this._touchHandling('panleft', ev);
        });
        this._nguCarouselHammerManager.on(hammer, 'panright').subscribe(ev => {
          this._touchHandling('panright', ev);
        });
      }
      this._nguCarouselHammerManager.on(hammer, 'panend pancancel').subscribe(({
        velocity
      }) => {
        if (Math.abs(velocity) >= this.velocity) {
          this.touch.velocity = velocity;
          let direc = 0;
          if (!this.RTL) {
            direc = this.touch.swipe === 'panright' ? 0 : 1;
          } else {
            direc = this.touch.swipe === 'panright' ? 1 : 0;
          }
          this._carouselScrollOne(direc);
        } else {
          this.dexVal = 0;
          this._setStyle(this._nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
          this._setStyle(this._nguItemsContainer.nativeElement, 'transform', '');
        }
      });
      this._nguCarouselHammerManager.on(hammer, 'hammer.input').subscribe(({
        srcEvent
      }) => {
        // allow nested touch events to no propagate, this may have other side affects but works for now.
        // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
        srcEvent.stopPropagation();
      });
    });
  }
  /** handle touch input */
  _touchHandling(e, ev) {
    // vertical touch events seem to cause to panstart event with an odd delta
    // and a center of {x:0,y:0} so this will ignore them
    if (ev.center.x === 0) {
      return;
    }
    ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
    let valt = ev - this.dexVal;
    valt = this.type === 'responsive' ? Math.abs(ev - this.dexVal) / (this.vertical.enabled ? this.vertical.height : this.carouselWidth) * 100 : valt;
    this.dexVal = ev;
    this.touch.swipe = e;
    this._setTouchTransfrom(e, valt);
    this._setTransformFromTouch();
  }
  _setTouchTransfrom(e, valt) {
    const condition = this.RTL ? 'panright' : 'panleft';
    this.touchTransform = e === condition ? valt + this.touchTransform : this.touchTransform - valt;
  }
  _setTransformFromTouch() {
    if (this.touchTransform < 0) {
      this.touchTransform = 0;
    }
    const type = this.type === 'responsive' ? '%' : 'px';
    this._setStyle(this._nguItemsContainer.nativeElement, 'transform', this.vertical.enabled ? `translate3d(0, ${this._directionSymbol}${this.touchTransform}${type}, 0)` : `translate3d(${this._directionSymbol}${this.touchTransform}${type}, 0, 0)`);
  }
  /** this fn used to disable the interval when it is not on the viewport */
  _onWindowScrolling() {
    const {
      offsetTop,
      offsetHeight
    } = this._host.nativeElement;
    const {
      scrollY: windowScrollY,
      innerHeight: windowInnerHeight
    } = window;
    const isCarouselOnScreen = offsetTop <= windowScrollY + windowInnerHeight - offsetHeight / 4 && offsetHeight + offsetHeight / 2 >= windowScrollY;
    if (isCarouselOnScreen) {
      this._intervalController$.next(1);
    } else {
      this._intervalController$.next(0);
    }
  }
  /** store data based on width of the screen for the carousel */
  _storeCarouselData() {
    const breakpoints = this.inputs.gridBreakpoints;
    this.deviceWidth = this._isBrowser ? window.innerWidth : breakpoints?.xl;
    this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
    if (this.type === 'responsive') {
      this.deviceType = this.deviceWidth >= breakpoints?.xl ? 'xl' : this.deviceWidth >= breakpoints?.lg ? 'lg' : this.deviceWidth >= breakpoints?.md ? 'md' : this.deviceWidth >= breakpoints?.sm ? 'sm' : 'xs';
      this.items = this.inputs.grid[this.deviceType];
      this.itemWidth = this.carouselWidth / this.items;
    } else {
      this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
      this.itemWidth = this.inputs.grid.all;
      this.deviceType = 'all';
    }
    this.slideItems = +(this.inputs.slide < this.items ? this.inputs.slide : this.items);
    this.load = this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
    this.speed = this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
    this._carouselPoint();
  }
  /** Used to reset the carousel */
  reset(withoutAnimation) {
    withoutAnimation && (this._withAnimation = false);
    this._carouselCssNode.textContent = '';
    this.moveTo(0);
    this._carouselPoint();
  }
  /** Init carousel point */
  _carouselPoint() {
    const Nos = Array.from(this._dataSource).length - (this.items - this.slideItems);
    this._pointIndex = Math.ceil(Nos / this.slideItems);
    const pointers = [];
    if (this._pointIndex > 1 || !this.inputs.point?.hideOnSingleSlide) {
      for (let i = 0; i < this._pointIndex; i++) {
        pointers.push(i);
      }
    }
    this.pointNumbers = pointers;
    this._carouselPointActiver();
    if (this._pointIndex <= 1) {
      this._btnBoolean(1, 1);
    } else {
      if (this.currentSlide === 0 && !this.loop) {
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
      }
    }
  }
  /** change the active point in carousel */
  _carouselPointActiver() {
    const i = Math.ceil(this.currentSlide / this.slideItems);
    this.activePoint = i;
    this._cdr.markForCheck();
  }
  /** this function is used to scoll the carousel when point is clicked */
  moveTo(slide, withoutAnimation) {
    // slide = slide - 1;
    withoutAnimation && (this._withAnimation = false);
    if (this.activePoint !== slide && slide < this._pointIndex) {
      let slideremains;
      const btns = this.currentSlide < slide ? 1 : 0;
      switch (slide) {
        case 0:
          this._btnBoolean(1, 0);
          slideremains = slide * this.slideItems;
          break;
        case this._pointIndex - 1:
          this._btnBoolean(0, 1);
          slideremains = Array.from(this._dataSource).length - this.items;
          break;
        default:
          this._btnBoolean(0, 0);
          slideremains = slide * this.slideItems;
      }
      this._carouselScrollTwo(btns, slideremains, this.speed);
    }
  }
  /** set the style of the carousel based the inputs data */
  _carouselSize() {
    this.token = this._generateID();
    let dism = '';
    this._styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
    if (this.inputs.custom === 'banner') {
      this._renderer.addClass(this._host.nativeElement, 'banner');
    }
    if (this.inputs.animation === 'lazy') {
      dism += `${this._styleid} > .item {transition: transform .6s ease;}`;
    }
    const breakpoints = this.inputs.gridBreakpoints;
    let itemStyle = '';
    if (this.vertical.enabled) {
      const itemWidthXS = `${this._styleid} > .item {height: ${this.vertical.height / +this.inputs.grid.xs}px}`;
      const itemWidthSM = `${this._styleid} > .item {height: ${this.vertical.height / +this.inputs.grid.sm}px}`;
      const itemWidthMD = `${this._styleid} > .item {height: ${this.vertical.height / +this.inputs.grid.md}px}`;
      const itemWidthLG = `${this._styleid} > .item {height: ${this.vertical.height / +this.inputs.grid.lg}px}`;
      const itemWidthXL = `${this._styleid} > .item {height: ${this.vertical.height / +this.inputs.grid.xl}px}`;
      itemStyle = `@media (max-width:${breakpoints?.sm - 1}px){${itemWidthXS}}
                    @media (max-width:${breakpoints?.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints?.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints?.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints?.xl}px){${itemWidthXL}}`;
    } else if (this.type === 'responsive') {
      const itemWidthXS = this.inputs.type === 'mobile' ? `${this._styleid} .item {flex: 0 0 ${95 / +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}` : `${this._styleid} .item {flex: 0 0 ${100 / +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
      const itemWidthSM = `${this._styleid} > .item {flex: 0 0 ${100 / +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
      const itemWidthMD = `${this._styleid} > .item {flex: 0 0 ${100 / +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
      const itemWidthLG = `${this._styleid} > .item {flex: 0 0 ${100 / +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
      const itemWidthXL = `${this._styleid} > .item {flex: 0 0 ${100 / +this.inputs.grid.xl}%; width: ${100 / +this.inputs.grid.xl}%}`;
      itemStyle = `@media (max-width:${breakpoints?.sm - 1}px){${itemWidthXS}}
                    @media (min-width:${breakpoints?.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints?.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints?.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints?.xl}px){${itemWidthXL}}`;
    } else {
      itemStyle = `${this._styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
    }
    this._renderer.addClass(this._host.nativeElement, this.token);
    if (this.vertical.enabled) {
      this._renderer.addClass(this._nguItemsContainer.nativeElement, 'nguvertical');
      this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
    }
    this.RTL && !this.vertical.enabled && this._renderer.addClass(this._host.nativeElement, 'ngurtl');
    this._createStyleElem(`${dism} ${itemStyle}`);
    this._storeCarouselData();
  }
  /** logic to scroll the carousel step 1 */
  _carouselScrollOne(Btn) {
    let itemSpeed = this.speed;
    let currentSlide = 0;
    let touchMove = Math.ceil(this.dexVal / this.itemWidth);
    touchMove = isFinite(touchMove) ? touchMove : 0;
    this._setStyle(this._nguItemsContainer.nativeElement, 'transform', '');
    if (this._pointIndex === 1) {
      return;
    } else if (Btn === 0 && (!this.loop && !this.isFirst || this.loop)) {
      const currentSlideD = this.currentSlide - this.slideItems;
      const MoveSlide = currentSlideD + this.slideItems;
      this._btnBoolean(0, 1);
      if (this.currentSlide === 0) {
        currentSlide = Array.from(this._dataSource).length - this.items;
        itemSpeed = 400;
        this._btnBoolean(0, 1);
      } else if (this.slideItems >= MoveSlide) {
        currentSlide = 0;
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
        if (touchMove > this.slideItems) {
          currentSlide = this.currentSlide - touchMove;
          itemSpeed = 200;
        } else {
          currentSlide = this.currentSlide - this.slideItems;
        }
      }
      this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
    } else if (Btn === 1 && (!this.loop && !this.isLast || this.loop)) {
      if (Array.from(this._dataSource).length <= this.currentSlide + this.items + this.slideItems && !this.isLast) {
        currentSlide = Array.from(this._dataSource).length - this.items;
        this._btnBoolean(0, 1);
      } else if (this.isLast) {
        currentSlide = 0;
        itemSpeed = 400;
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
        if (touchMove > this.slideItems) {
          currentSlide = this.currentSlide + this.slideItems + (touchMove - this.slideItems);
          itemSpeed = 200;
        } else {
          currentSlide = this.currentSlide + this.slideItems;
        }
      }
      this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
    }
  }
  /** logic to scroll the carousel step 2 */
  _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
    if (this.dexVal !== 0) {
      const val = Math.abs(this.touch.velocity);
      let somt = Math.floor(this.dexVal / val / this.dexVal * (this.deviceWidth - this.dexVal));
      somt = somt > itemSpeed ? itemSpeed : somt;
      itemSpeed = somt < 200 ? 200 : somt;
      this.dexVal = 0;
    }
    if (this._withAnimation) {
      this._setStyle(this._nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
      this.inputs.animation && this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
    } else {
      this._setStyle(this._nguItemsContainer.nativeElement, 'transition', ``);
    }
    this.itemLength = Array.from(this._dataSource).length;
    this._transformStyle(currentSlide);
    this.currentSlide = currentSlide;
    this.onMove.emit(this);
    this._carouselPointActiver();
    this._carouselLoadTrigger();
    this._withAnimation = true;
  }
  /** boolean function for making isFirst and isLast */
  _btnBoolean(first, last) {
    this.isFirst = !!first;
    this.isLast = !!last;
  }
  _transformString(grid, slide) {
    let collect = '';
    collect += `${this._styleid} { transform: translate3d(`;
    if (this.vertical.enabled) {
      this.transform[grid] = this.vertical.height / this.inputs.grid[grid] * slide;
      collect += `0, -${this.transform[grid]}px, 0`;
    } else {
      this.transform[grid] = 100 / this.inputs.grid[grid] * slide;
      collect += `${this._directionSymbol}${this.transform[grid]}%, 0, 0`;
    }
    collect += `); }`;
    return collect;
  }
  /** set the transform style to scroll the carousel  */
  _transformStyle(slide) {
    let slideCss = '';
    if (this.type === 'responsive') {
      const breakpoints = this.inputs.gridBreakpoints;
      slideCss = `@media (max-width: ${breakpoints?.sm - 1}px) {${this._transformString('xs', slide)}}
      @media (min-width: ${breakpoints?.sm}px) {${this._transformString('sm', slide)} }
      @media (min-width: ${breakpoints?.md}px) {${this._transformString('md', slide)} }
      @media (min-width: ${breakpoints?.lg}px) {${this._transformString('lg', slide)} }
      @media (min-width: ${breakpoints?.xl}px) {${this._transformString('xl', slide)} }`;
    } else {
      this.transform.all = this.inputs.grid.all * slide;
      slideCss = `${this._styleid} { transform: translate3d(${this._directionSymbol}${this.transform.all}px, 0, 0);`;
    }
    this._carouselCssNode.textContent = slideCss;
  }
  /** this will trigger the carousel to load the items */
  _carouselLoadTrigger() {
    if (typeof this.inputs.load === 'number') {
      Array.from(this._dataSource).length - this.load <= this.currentSlide + this.items && this.carouselLoad.emit(this.currentSlide);
    }
  }
  /** generate Class for each carousel to set specific style */
  _generateID() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return `ngucarousel${text}`;
  }
  /** handle the auto slide */
  _carouselInterval() {
    const container = this.carouselMain1.nativeElement;
    if (this.interval && this.loop) {
      this._nguWindowScrollListener.pipe(
      // Note: do not use `debounceTime` since it may flush queued actions within the Angular zone.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(600)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => {
        // Note: we don't run change detection on each `scroll` event, but we re-enter the
        //       Angular zone once the DOM timer fires to be backwards compatible.
        //       TODO: revisit later since we may not run change detection at all on this task.
        this._ngZone.run(() => this._onWindowScrolling());
      });
      const mapToZero = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => 0);
      const mapToOne = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => 1);
      const play$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(container, 'mouseleave').pipe(mapToOne);
      const pause$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(container, 'mouseenter').pipe(mapToZero);
      const touchPlay$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(container, 'touchstart').pipe(mapToOne);
      const touchPause$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(container, 'touchend').pipe(mapToZero);
      const interval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(this.inputs.interval?.timing).pipe(mapToOne);
      const initialDelay = this.interval.initialDelay || 0;
      const carouselInterval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(play$, touchPlay$, pause$, touchPause$, this._intervalController$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(val => {
        this._cdr.markForCheck();
        return val ? interval$ : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
      }));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(initialDelay).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => carouselInterval$), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => {
        this._carouselScrollOne(1);
      });
    }
  }
  /** animate the carousel items */
  _carouselAnimator(direction, start, end, speed, length) {
    const viewContainer = this._nodeOutlet.viewContainer;
    let val = length < 5 ? length : 5;
    val = val === 1 ? 3 : val;
    const collectedIndexes = [];
    if (direction === 1) {
      for (let i = start - 1; i < end; i++) {
        collectedIndexes.push(i);
        val = val * 2;
        const viewRef = viewContainer.get(i);
        const context = viewRef.context;
        context.animate = {
          value: true,
          params: {
            distance: val
          }
        };
      }
    } else {
      for (let i = end - 1; i >= start - 1; i--) {
        collectedIndexes.push(i);
        val = val * 2;
        const viewRef = viewContainer.get(i);
        const context = viewRef.context;
        context.animate = {
          value: true,
          params: {
            distance: -val
          }
        };
      }
    }
    this._cdr.markForCheck();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(speed * 0.7).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => this._removeAnimations(collectedIndexes));
  }
  _removeAnimations(collectedIndexes) {
    const viewContainer = this._nodeOutlet.viewContainer;
    collectedIndexes.forEach(i => {
      const viewRef = viewContainer.get(i);
      const context = viewRef.context;
      context.animate = {
        value: false,
        params: {
          distance: 0
        }
      };
    });
    this._cdr.markForCheck();
  }
  /** Short form for setElementStyle */
  _setStyle(el, prop, val) {
    this._renderer.setStyle(el, prop, val);
  }
  /** For generating style tag */
  _createStyleElem(datas) {
    const styleItem = this._renderer.createElement('style');
    if (datas) {
      const styleText = this._renderer.createText(datas);
      this._renderer.appendChild(styleItem, styleText);
    }
    this._renderer.appendChild(this._host.nativeElement, styleItem);
    return styleItem;
  }
  _setupButtonListeners() {
    this._prevButton$.pipe(
    // Returning `EMPTY` will remove event listener once the button is removed from the DOM.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(prevButton => prevButton ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(prevButton, 'click') : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => this._carouselScrollOne(0));
    this._nextButton$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(nextButton => nextButton ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nextButton, 'click') : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => this._carouselScrollOne(1));
  }
  _setupWindowResizeListener() {
    this._ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.deviceWidth !== window.outerWidth), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(() => {
      this._setStyle(this._nguItemsContainer.nativeElement, 'transition', ``);
      // Re-enter the Angular zone only after `resize` events have been dispatched
      // and the timer has run (in `debounceTime`).
      this._ngZone.run(() => {
        this._storeCarouselData();
        this._cdr.markForCheck();
      });
    }));
  }
  static {
    this.ɵfac = function NguCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IS_BROWSER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NguWindowScrollListener), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NguCarouselHammerManager));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NguCarousel,
      selectors: [["ngu-carousel"]],
      contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NguCarouselNextDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NguCarouselPrevDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NguCarouselDefDirective, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._defDirectives = _t);
        }
      },
      viewQuery: function NguCarousel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NguCarouselOutlet, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselMain1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nguItemsContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._touchContainer = _t.first);
        }
      },
      inputs: {
        inputs: "inputs",
        dataSource: "dataSource",
        trackBy: "trackBy"
      },
      outputs: {
        carouselLoad: "carouselLoad",
        onMove: "onMove"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NguCarouselHammerManager]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c4,
      decls: 11,
      vars: 0,
      consts: [["ngucarousel", ""], ["touchContainer", ""], ["nguItemsContainer", ""], [1, "ngucarousel"], [1, "ngu-touch-container"], [1, "ngucarousel-items"], ["nguCarouselOutlet", ""], [1, "nguclearFix"]],
      template: function NguCarousel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4, 1)(5, "div", 5, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](7, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 2);
        }
      },
      dependencies: [NguCarouselOutlet],
      styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{position:relative;display:flex;height:100%}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:white}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"],
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguCarousel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngu-carousel',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [NguCarouselHammerManager],
      imports: [NguCarouselOutlet],
      standalone: true,
      template: "<div #ngucarousel class=\"ngucarousel\">\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  <div #touchContainer class=\"ngu-touch-container\">\n    <div #nguItemsContainer class=\"ngucarousel-items\">\n      <ng-container nguCarouselOutlet></ng-container>\n    </div>\n  </div>\n  <div class=\"nguclearFix\"></div>\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\n</div>\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\n",
      styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:white}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [IS_BROWSER]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: NguWindowScrollListener
  }, {
    type: NguCarouselHammerManager
  }], {
    inputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    carouselLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _defDirectives: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NguCarouselDefDirective]
    }],
    _nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [NguCarouselOutlet, {
        static: true
      }]
    }],
    nextButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NguCarouselNextDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: false
      }]
    }],
    prevButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NguCarouselPrevDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: false
      }]
    }],
    carouselMain1: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ngucarousel', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    _nguItemsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nguItemsContainer', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    _touchContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['touchContainer', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NguItemComponent {
  constructor() {
    this.classes = true;
  }
  static {
    this.ɵfac = function NguItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguItemComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NguItemComponent,
      selectors: [["ngu-item"]],
      hostVars: 2,
      hostBindings: function NguItemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.classes);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c5,
      decls: 1,
      vars: 0,
      template: function NguItemComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngu-item',
      standalone: true,
      template: "<ng-content></ng-content>\n"
    }]
  }], null, {
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.item']
    }]
  });
})();
class NguTileComponent {
  constructor() {
    this.classes = true;
  }
  static {
    this.ɵfac = function NguTileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NguTileComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NguTileComponent,
      selectors: [["ngu-tile"]],
      hostVars: 2,
      hostBindings: function NguTileComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.classes);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c5,
      decls: 2,
      vars: 0,
      consts: [[1, "tile"]],
      template: function NguTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]{padding:10px;box-sizing:border-box}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NguTileComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngu-tile',
      standalone: true,
      template: "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n",
      styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}\n"]
    }]
  }], null, {
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.item']
    }]
  });
})();

/*
 * Public API Surface of carousel
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngu-carousel.mjs.map

/***/ })

}]);