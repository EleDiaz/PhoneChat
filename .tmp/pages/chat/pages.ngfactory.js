/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './pages';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import19 from 'ionic-angular/components/menu/menu-controller';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from 'ionic-angular/platform/platform';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/gestures/gesture-controller';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/navbar/navbar';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/components/toolbar/toolbar';
import * as import31 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import32 from 'ionic-angular/components/list/list';
import * as import33 from 'ionic-angular/components/content/content';
import * as import34 from 'ionic-angular/components/menu/menu';
export var Wrapper_Chat = (function () {
    function Wrapper_Chat(p0, p1) {
        this.changed = false;
        this.context = new import0.Chat(p0, p1);
    }
    Wrapper_Chat.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Chat;
}());
var renderType_Chat_Host = null;
var _View_Chat_Host0 = (function (_super) {
    __extends(_View_Chat_Host0, _super);
    function _View_Chat_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Chat_Host0, renderType_Chat_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Chat_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('chat', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Chat0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Chat_0_4 = new Wrapper_Chat(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._Chat_0_4.context, [], compView_0);
        compView_0.create(this._Chat_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Chat_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Chat) && (0 === requestNodeIndex))) {
            return this._Chat_0_4.context;
        }
        return notFoundResult;
    };
    _View_Chat_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Chat_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Chat_Host0;
}(import1.AppView));
function viewFactory_Chat_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Chat_Host === null)) {
        (renderType_Chat_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Chat_Host0(viewUtils, parentInjector, declarationEl);
}
export var ChatNgFactory = new import11.ComponentFactory('chat', viewFactory_Chat_Host0, import0.Chat);
var styles_Chat = [];
var renderType_Chat = null;
var _View_Chat0 = (function (_super) {
    __extends(_View_Chat0, _super);
    function _View_Chat0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Chat0, renderType_Chat, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Chat0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-menu', null);
        this.renderer.setElementAttribute(this._el_0, 'role', 'navigation');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import12.viewFactory_Menu0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Menu_0_4 = new import12.Wrapper_Menu(this.parentInjector.get(import19.MenuController), new import20.ElementRef(this._el_0), this.parentInjector.get(import21.Config), this.parentInjector.get(import22.Platform), this.renderer, this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import25.GestureController));
        this._query_Content_0_0 = new import13.QueryList();
        this._appEl_0.initComponent(this._Menu_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-header', null);
        this._Header_2_3 = new import14.Wrapper_Header(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import14.viewFactory_Toolbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Toolbar_4_4 = new import14.Wrapper_Toolbar(this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Toolbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import15.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_6), this.renderer, this._Toolbar_4_4.context, this.parentInjector.get(import27.Navbar, null));
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, '', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Toolbar_4_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_5,
                this._el_6,
                this._text_8
            ])
        ], null);
        this._text_9 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-content', null);
        this._appEl_11 = new import3.AppElement(11, 0, this, this._el_11);
        var compView_11 = import16.viewFactory_Content0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Content_11_4 = new import16.Wrapper_Content(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-list', null);
        this._List_13_3 = new import17.Wrapper_List(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import25.GestureController));
        this._text_14 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_15
            ]),
            []
        ], null);
        this._text_16 = this.renderer.createText(null, '\n\n', null);
        this._query_Content_0_0.reset([this._Content_11_4.context]);
        this._Menu_0_4.context.menuContent = this._query_Content_0_0.first;
        compView_0.create(this._Menu_0_4.context, [[].concat([
                this._text_1,
                this._el_2,
                this._text_10,
                this._el_11,
                this._text_16
            ])], null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_18_3 = new import14.Wrapper_Header(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_18), this.renderer, this.parentInjector.get(import26.ViewController, null));
        this._text_19 = this.renderer.createText(this._el_18, '\n  ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'toolbar');
        this._appEl_20 = new import3.AppElement(20, 18, this, this._el_20);
        var compView_20 = import18.viewFactory_Navbar0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Navbar_20_4 = new import18.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_20), this.renderer);
        this._appEl_20.initComponent(this._Navbar_20_4.context, [], compView_20);
        this._text_21 = this.renderer.createText(null, '\n    ', null);
        this._el_22 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_22 = new import3.AppElement(22, 20, this, this._el_22);
        var compView_22 = import15.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(22), this._appEl_22);
        this._ToolbarTitle_22_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_22), this.renderer, this.parentInjector.get(import30.Toolbar, null), this._Navbar_20_4.context);
        this._appEl_22.initComponent(this._ToolbarTitle_22_4.context, [], compView_22);
        this._text_23 = this.renderer.createText(null, 'User', null);
        compView_22.create(this._ToolbarTitle_22_4.context, [[].concat([this._text_23])], null);
        this._text_24 = this.renderer.createText(null, '\n  ', null);
        compView_20.create(this._Navbar_20_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_21,
                this._el_22,
                this._text_24
            ])
        ], null);
        this._text_25 = this.renderer.createText(this._el_18, '\n', null);
        this._text_26 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_27 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_27 = new import3.AppElement(27, null, this, this._el_27);
        var compView_27 = import16.viewFactory_Content0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Content_27_4 = new import16.Wrapper_Content(this.parentInjector.get(import21.Config), new import20.ElementRef(this._el_27), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import23.Keyboard), this.parentInjector.get(import24.NgZone), this.parentInjector.get(import26.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_27.initComponent(this._Content_27_4.context, [], compView_27);
        this._text_28 = this.renderer.createText(null, '\n\n', null);
        compView_27.create(this._Content_27_4.context, [
            [],
            [].concat([this._text_28]),
            []
        ], null);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29
        ], [], []);
        return null;
    };
    _View_Chat0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import30.Toolbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Toolbar_4_4.context;
        }
        if (((token === import30.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_2_3.context;
        }
        if (((token === import32.List) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._List_13_3.context;
        }
        if (((token === import33.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Content_11_4.context;
        }
        if (((token === import34.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Menu_0_4.context;
        }
        if (((token === import31.ToolbarTitle) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._ToolbarTitle_22_4.context;
        }
        if (((token === import27.Navbar) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Navbar_20_4.context;
        }
        if (((token === import30.Header) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Header_18_3.context;
        }
        if (((token === import33.Content) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Content_27_4.context;
        }
        return notFoundResult;
    };
    _View_Chat0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Menu_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._Toolbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        this._List_13_3.detectChangesInternal(this, this._el_13, throwOnChange);
        this._Header_18_3.detectChangesInternal(this, this._el_18, throwOnChange);
        this._Navbar_20_4.detectChangesInternal(this, this._el_20, throwOnChange);
        if (this._ToolbarTitle_22_4.detectChangesInternal(this, this._el_22, throwOnChange)) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        if (this._Content_27_4.detectChangesInternal(this, this._el_27, throwOnChange)) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Toolbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.user, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_7, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Navbar_20_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementProperty(this._el_20, 'hidden', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Navbar_20_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_20, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._Content_27_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_27, 'statusbar-padding', currVal_5);
            this._expr_5 = currVal_5;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_20_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Chat0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
        this._Menu_0_4.context.ngOnDestroy();
        this._Content_27_4.context.ngOnDestroy();
    };
    return _View_Chat0;
}(import1.AppView));
export function viewFactory_Chat0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Chat === null)) {
        (renderType_Chat = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_Chat, {}));
    }
    return new _View_Chat0(viewUtils, parentInjector, declarationEl);
}