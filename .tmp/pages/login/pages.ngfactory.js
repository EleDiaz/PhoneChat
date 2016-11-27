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
import * as import10 from 'ionic-angular/components/alert/alert';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/input/input.ngfactory';
import * as import24 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from 'ionic-angular/components/app/app';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from 'ionic-angular/components/item/item-reorder';
import * as import36 from 'ionic-angular/platform/platform';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import38 from 'ionic-angular/components/navbar/navbar';
import * as import39 from 'ionic-angular/components/label/label';
import * as import40 from '@angular/forms/src/directives/ng_model';
import * as import41 from '@angular/forms/src/directives/ng_control';
import * as import42 from '@angular/forms/src/directives/ng_control_status';
import * as import43 from 'ionic-angular/components/input/input';
import * as import44 from 'ionic-angular/components/item/item';
import * as import45 from 'ionic-angular/components/list/list';
import * as import46 from 'ionic-angular/components/button/button';
import * as import47 from 'ionic-angular/components/content/content';
export var Wrapper_Login = (function () {
    function Wrapper_Login(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.Login(p0, p1, p2);
    }
    Wrapper_Login.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Login;
}());
var renderType_Login_Host = null;
var _View_Login_Host0 = (function (_super) {
    __extends(_View_Login_Host0, _super);
    function _View_Login_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Login_Host0, renderType_Login_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Login_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('login', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Login0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Login_0_4 = new Wrapper_Login(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.AlertController));
        this._appEl_0.initComponent(this._Login_0_4.context, [], compView_0);
        compView_0.create(this._Login_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Login_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Login) && (0 === requestNodeIndex))) {
            return this._Login_0_4.context;
        }
        return notFoundResult;
    };
    _View_Login_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Login_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Login_Host0;
}(import1.AppView));
function viewFactory_Login_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Login_Host === null)) {
        (renderType_Login_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_Login_Host0(viewUtils, parentInjector, declarationEl);
}
export var LoginNgFactory = new import12.ComponentFactory('login', viewFactory_Login_Host0, import0.Login);
var styles_Login = [];
var renderType_Login = null;
var _View_Login0 = (function (_super) {
    __extends(_View_Login0, _super);
    function _View_Login0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Login0, renderType_Login, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Login0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Wrapper_Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import14.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Wrapper_Navbar(this.parentInjector.get(import28.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import15.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import15.Wrapper_ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import29.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Start to chat with PhoneChat', null);
        compView_5.create(this._ToolbarTitle_5_4.context, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_10 = new import3.AppElement(10, null, this, this._el_10);
        var compView_10 = import16.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import16.Wrapper_Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import28.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4.context, [], compView_10);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-list', null);
        this._List_12_3 = new import17.Wrapper_List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_12), this.renderer, this.parentInjector.get(import33.GestureController));
        this._text_13 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'item item-block');
        this._appEl_14 = new import3.AppElement(14, 12, this, this._el_14);
        var compView_14 = import18.viewFactory_Item0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Item_14_4 = new import18.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import35.ItemReorder, null));
        this._ItemContent_14_5 = new import18.Wrapper_ItemContent();
        this._query_Label_14_0 = new import19.QueryList();
        this._query_Button_14_1 = new import19.QueryList();
        this._query_Icon_14_2 = new import19.QueryList();
        this._appEl_14.initComponent(this._Item_14_4.context, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n      ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_16, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_16, 'stacked', '');
        this._Label_16_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_16), this.renderer, null, '', null, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Email', null);
        this._text_18 = this.renderer.createText(null, '\n      ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_19, 'placeholder', 'Your email');
        this.renderer.setElementAttribute(this._el_19, 'type', 'email');
        this._appEl_19 = new import3.AppElement(19, 14, this, this._el_19);
        var compView_19 = import23.viewFactory_TextInput0(this.viewUtils, this.injector(19), this._appEl_19);
        this._NgModel_19_4 = new import21.Wrapper_NgModel(null, null, null, null);
        this._NgControl_19_5 = this._NgModel_19_4.context;
        this._NgControlStatus_19_6 = new import22.Wrapper_NgControlStatus(this._NgControl_19_5);
        this._TextInput_19_7 = new import23.Wrapper_TextInput(this.parentInjector.get(import25.Config), this.parentInjector.get(import34.Form), this._Item_14_4.context, this.parentInjector.get(import28.App), this.parentInjector.get(import36.Platform), new import26.ElementRef(this._el_19), this.renderer, this._Content_10_4.context, this.parentInjector.get(import8.NavController, null), this._NgControl_19_5);
        this._appEl_19.initComponent(this._TextInput_19_7.context, [], compView_19);
        compView_19.create(this._TextInput_19_7.context, [], null);
        this._text_20 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_14_0.reset([this._Label_16_3.context]);
        this._Item_14_4.context.contentLabel = this._query_Label_14_0.first;
        compView_14.create(this._Item_14_4.context, [
            [],
            [].concat([this._el_16]),
            [].concat([
                this._text_15,
                this._text_18,
                this._text_20
            ]),
            [].concat([this._el_19]),
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_12, '\n\n    ', null);
        this._el_22 = this.renderer.createElement(this._el_12, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'item item-block');
        this._appEl_22 = new import3.AppElement(22, 12, this, this._el_22);
        var compView_22 = import18.viewFactory_Item0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Item_22_4 = new import18.Wrapper_Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_22), this.renderer, this.parentInjector.get(import35.ItemReorder, null));
        this._ItemContent_22_5 = new import18.Wrapper_ItemContent();
        this._query_Label_22_0 = new import19.QueryList();
        this._query_Button_22_1 = new import19.QueryList();
        this._query_Icon_22_2 = new import19.QueryList();
        this._appEl_22.initComponent(this._Item_22_4.context, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n      ', null);
        this._el_24 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_24, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_24, 'stacked', '');
        this._Label_24_3 = new import20.Wrapper_Label(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_24), this.renderer, null, '', null, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Password', null);
        this._text_26 = this.renderer.createText(null, '\n      ', null);
        this._el_27 = this.renderer.createElement(null, 'ion-input', null);
        this.renderer.setElementAttribute(this._el_27, 'placeholder', 'Your password');
        this.renderer.setElementAttribute(this._el_27, 'type', 'password');
        this._appEl_27 = new import3.AppElement(27, 22, this, this._el_27);
        var compView_27 = import23.viewFactory_TextInput0(this.viewUtils, this.injector(27), this._appEl_27);
        this._NgModel_27_4 = new import21.Wrapper_NgModel(null, null, null, null);
        this._NgControl_27_5 = this._NgModel_27_4.context;
        this._NgControlStatus_27_6 = new import22.Wrapper_NgControlStatus(this._NgControl_27_5);
        this._TextInput_27_7 = new import23.Wrapper_TextInput(this.parentInjector.get(import25.Config), this.parentInjector.get(import34.Form), this._Item_22_4.context, this.parentInjector.get(import28.App), this.parentInjector.get(import36.Platform), new import26.ElementRef(this._el_27), this.renderer, this._Content_10_4.context, this.parentInjector.get(import8.NavController, null), this._NgControl_27_5);
        this._appEl_27.initComponent(this._TextInput_27_7.context, [], compView_27);
        compView_27.create(this._TextInput_27_7.context, [], null);
        this._text_28 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_22_0.reset([this._Label_24_3.context]);
        this._Item_22_4.context.contentLabel = this._query_Label_22_0.first;
        compView_22.create(this._Item_22_4.context, [
            [],
            [].concat([this._el_24]),
            [].concat([
                this._text_23,
                this._text_26,
                this._text_28
            ]),
            [].concat([this._el_27]),
            []
        ], null);
        this._text_29 = this.renderer.createText(this._el_12, '\n  ', null);
        this._text_30 = this.renderer.createText(null, '\n  ', null);
        this._el_31 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_31, 'padding', '');
        this._text_32 = this.renderer.createText(this._el_31, '\n    ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'button', null);
        this.renderer.setElementAttribute(this._el_33, 'block', '');
        this.renderer.setElementAttribute(this._el_33, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_33, 'type', 'button');
        this._appEl_33 = new import3.AppElement(33, 31, this, this._el_33);
        var compView_33 = import24.viewFactory_Button0(this.viewUtils, this.injector(33), this._appEl_33);
        this._Button_33_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_33), this.renderer);
        this._appEl_33.initComponent(this._Button_33_4.context, [], compView_33);
        this._text_34 = this.renderer.createText(null, 'Log In', null);
        compView_33.create(this._Button_33_4.context, [[].concat([this._text_34])], null);
        this._text_35 = this.renderer.createText(this._el_31, '\n    ', null);
        this._el_36 = this.renderer.createElement(this._el_31, 'button', null);
        this.renderer.setElementAttribute(this._el_36, 'block', '');
        this.renderer.setElementAttribute(this._el_36, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_36, 'type', 'button');
        this._appEl_36 = new import3.AppElement(36, 31, this, this._el_36);
        var compView_36 = import24.viewFactory_Button0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Button_36_4 = new import24.Wrapper_Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_36), this.renderer);
        this._appEl_36.initComponent(this._Button_36_4.context, [], compView_36);
        this._text_37 = this.renderer.createText(null, 'Haven\'t an account?', null);
        compView_36.create(this._Button_36_4.context, [[].concat([this._text_37])], null);
        this._text_38 = this.renderer.createText(this._el_31, '\n  ', null);
        this._text_39 = this.renderer.createText(null, '\n', null);
        compView_10.create(this._Content_10_4.context, [
            [],
            [].concat([
                this._text_11,
                this._el_12,
                this._text_30,
                this._el_31,
                this._text_39
            ]),
            []
        ], null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_19, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_19_0.bind(this)));
        var subscription_0 = this._NgModel_19_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_19_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_27, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        var subscription_1 = this._NgModel_27_4.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_27_0.bind(this)));
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this._expr_20 = import7.UNINITIALIZED;
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._text_40
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    };
    _View_Login0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4.context;
        }
        if (((token === import38.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import29.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3.context;
        }
        if (((token === import39.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3.context;
        }
        if (((token === import40.NgModel) && (19 === requestNodeIndex))) {
            return this._NgModel_19_4.context;
        }
        if (((token === import41.NgControl) && (19 === requestNodeIndex))) {
            return this._NgControl_19_5;
        }
        if (((token === import42.NgControlStatus) && (19 === requestNodeIndex))) {
            return this._NgControlStatus_19_6.context;
        }
        if (((token === import43.TextInput) && (19 === requestNodeIndex))) {
            return this._TextInput_19_7.context;
        }
        if (((token === import44.Item) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_14_4.context;
        }
        if (((token === import44.ItemContent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ItemContent_14_5.context;
        }
        if (((token === import39.Label) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Label_24_3.context;
        }
        if (((token === import40.NgModel) && (27 === requestNodeIndex))) {
            return this._NgModel_27_4.context;
        }
        if (((token === import41.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_5;
        }
        if (((token === import42.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_6.context;
        }
        if (((token === import43.TextInput) && (27 === requestNodeIndex))) {
            return this._TextInput_27_7.context;
        }
        if (((token === import44.Item) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Item_22_4.context;
        }
        if (((token === import44.ItemContent) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ItemContent_22_5.context;
        }
        if (((token === import45.List) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._List_12_3.context;
        }
        if (((token === import46.Button) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Button_33_4.context;
        }
        if (((token === import46.Button) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Button_36_4.context;
        }
        if (((token === import47.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Content_10_4.context;
        }
        return notFoundResult;
    };
    _View_Login0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        if (this._ToolbarTitle_5_4.detectChangesInternal(this, this._el_5, throwOnChange)) {
            this._appEl_5.componentView.markAsCheckOnce();
        }
        if (this._Content_10_4.detectChangesInternal(this, this._el_10, throwOnChange)) {
            this._appEl_10.componentView.markAsCheckOnce();
        }
        this._List_12_3.detectChangesInternal(this, this._el_12, throwOnChange);
        if (this._Item_14_4.detectChangesInternal(this, this._el_14, throwOnChange)) {
            this._appEl_14.componentView.markAsCheckOnce();
        }
        this._ItemContent_14_5.detectChangesInternal(this, this._el_14, throwOnChange);
        var currVal_3 = 'primary';
        this._Label_16_3.check_color(currVal_3, throwOnChange, false);
        this._Label_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        var currVal_5 = this.context.email;
        this._NgModel_19_4.check_model(currVal_5, throwOnChange, false);
        this._NgModel_19_4.detectChangesInternal(this, this._el_19, throwOnChange);
        this._NgControlStatus_19_6.detectChangesInternal(this, this._el_19, throwOnChange);
        var currVal_12 = 'Your email';
        this._TextInput_19_7.check_placeholder(currVal_12, throwOnChange, false);
        var currVal_13 = 'email';
        this._TextInput_19_7.check_type(currVal_13, throwOnChange, false);
        this._TextInput_19_7.detectChangesInternal(this, this._el_19, throwOnChange);
        if (this._Item_22_4.detectChangesInternal(this, this._el_22, throwOnChange)) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        this._ItemContent_22_5.detectChangesInternal(this, this._el_22, throwOnChange);
        var currVal_14 = 'primary';
        this._Label_24_3.check_color(currVal_14, throwOnChange, false);
        this._Label_24_3.detectChangesInternal(this, this._el_24, throwOnChange);
        var currVal_16 = this.context.password;
        this._NgModel_27_4.check_model(currVal_16, throwOnChange, false);
        this._NgModel_27_4.detectChangesInternal(this, this._el_27, throwOnChange);
        this._NgControlStatus_27_6.detectChangesInternal(this, this._el_27, throwOnChange);
        var currVal_23 = 'Your password';
        this._TextInput_27_7.check_placeholder(currVal_23, throwOnChange, false);
        var currVal_24 = 'password';
        this._TextInput_27_7.check_type(currVal_24, throwOnChange, false);
        this._TextInput_27_7.detectChangesInternal(this, this._el_27, throwOnChange);
        var currVal_26 = '';
        this._Button_33_4.check_block(currVal_26, throwOnChange, false);
        if (this._Button_33_4.detectChangesInternal(this, this._el_33, throwOnChange)) {
            this._appEl_33.componentView.markAsCheckOnce();
        }
        var currVal_28 = '';
        this._Button_36_4.check_block(currVal_28, throwOnChange, false);
        if (this._Button_36_4.detectChangesInternal(this, this._el_36, throwOnChange)) {
            this._appEl_36.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_14_1.dirty) {
                this._query_Button_14_1.reset([]);
                this._Item_14_4.context._buttons = this._query_Button_14_1;
                this._query_Button_14_1.notifyOnChanges();
            }
            if (this._query_Icon_14_2.dirty) {
                this._query_Icon_14_2.reset([]);
                this._Item_14_4.context._icons = this._query_Icon_14_2;
                this._query_Icon_14_2.notifyOnChanges();
            }
            if (this._query_Button_22_1.dirty) {
                this._query_Button_22_1.reset([]);
                this._Item_22_4.context._buttons = this._query_Button_22_1;
                this._query_Button_22_1.notifyOnChanges();
            }
            if (this._query_Icon_22_2.dirty) {
                this._query_Icon_22_2.reset([]);
                this._Item_22_4.context._icons = this._query_Icon_22_2;
                this._query_Icon_22_2.notifyOnChanges();
            }
            this._TextInput_19_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_14_4.context.ngAfterContentInit();
            }
            this._TextInput_27_7.context.ngAfterContentChecked();
            if ((this.numberOfChecks === 0)) {
                this._Item_22_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_33_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_36_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_10_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_6 = this._NgControlStatus_19_6.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_19, 'ng-untouched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_19_6.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_19, 'ng-touched', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_19_6.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_19, 'ng-pristine', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_19_6.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_19, 'ng-dirty', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_19_6.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_19, 'ng-valid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._NgControlStatus_19_6.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_19, 'ng-invalid', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_17 = this._NgControlStatus_27_6.context.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_27, 'ng-untouched', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_27_6.context.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_27, 'ng-touched', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._NgControlStatus_27_6.context.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_27, 'ng-pristine', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this._NgControlStatus_27_6.context.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementClass(this._el_27, 'ng-dirty', currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = this._NgControlStatus_27_6.context.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementClass(this._el_27, 'ng-valid', currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this._NgControlStatus_27_6.context.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_27, 'ng-invalid', currVal_22);
            this._expr_22 = currVal_22;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_Login0.prototype.destroyInternal = function () {
        this._NgModel_19_4.context.ngOnDestroy();
        this._TextInput_19_7.context.ngOnDestroy();
        this._NgModel_27_4.context.ngOnDestroy();
        this._TextInput_27_7.context.ngOnDestroy();
        this._Content_10_4.context.ngOnDestroy();
    };
    _View_Login0.prototype._handle_ngModelChange_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.email = $event) !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_ngModelChange_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.password = $event) !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_click_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.login() !== false);
        return (true && pd_0);
    };
    _View_Login0.prototype._handle_click_36_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.signup() !== false);
        return (true && pd_0);
    };
    return _View_Login0;
}(import1.AppView));
export function viewFactory_Login0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Login === null)) {
        (renderType_Login = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, styles_Login, {}));
    }
    return new _View_Login0(viewUtils, parentInjector, declarationEl);
}