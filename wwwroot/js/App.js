import { createApp } from '../js/vue/vue-v3.min.js';
import { Options } from '../js/vue/vue-class-component-v3.js';
export { Vue as ComponentBase } from '../js/vue/vue-class-component-v3.js';
export class App {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.create(options);
    }
    create(options) {
        this._app = createApp(options);
        return this._app;
    }
    get innerApp() {
        return this._app;
    }
    static async getTemplate(path) {
        if (path.indexOf('?') > 0) {
            path += '&randt=' + import.meta.url;
        }
        else {
            path += '?randt=' + import.meta.url;
        }
        var html = await fetch(path);
        let template = await html.text();
        return template;
    }
    component(name, component) {
        let flag = false;
        if (!component) {
            component = name;
            flag = true;
        }
        component = this.convert(component);
        if (flag) {
            this._app.component(component);
        }
        else {
            this._app.component(name, component);
        }
    }
    convert(component) {
        if (component.prototype && component.prototype.options) {
            let options = component.prototype.options();
            let option = Options(options);
            let comp = option(component);
            component = comp;
            return comp;
        }
        return component;
    }
    use(plugin) {
        this._app.use(plugin, { self: this });
    }
    mount(rootContainer) {
        this._app.mount(rootContainer);
    }
}
//# sourceMappingURL=app.js.map