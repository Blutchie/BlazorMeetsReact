"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(require("react-dom"));
const react_1 = __importDefault(require("react"));
const Divider_1 = require("./Divider");
const Greeting_1 = require("./Greeting");
const NestedComponent_1 = require("./NestedComponent");
const SimpleComponent_1 = require("./SimpleComponent");
window.renderReact = function (componentName, props, renderElement) {
    const reactComponents = {};
    reactComponents['Divider'] = react_1.default.createElement(Divider_1.Divider, { ...props });
    reactComponents['Greeting'] = react_1.default.createElement(Greeting_1.Greeting, { ...props });
    reactComponents['NestedComponent'] = react_1.default.createElement(NestedComponent_1.NestedComponent, { ...props });
    reactComponents['SimpleComponent'] = react_1.default.createElement(SimpleComponent_1.SimpleComponent, { ...props });
    react_dom_1.default.render(reactComponents[componentName], renderElement);
};
//# sourceMappingURL=_index.js.map