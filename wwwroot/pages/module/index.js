import { App, ComponentBase } from '../../js/app.js';
import ElementPlus from '../../js/element-plus/index.full.min.js';
import * as ElementPlusIconsVue from '../../js/element-plus/icons-vue/index.min.js';
class IndexComponent extends ComponentBase {
    options() {
        return {
            template: '#vue3template'
        };
    }
    data() {
        return {
            treeData: [],
            showNew: true,
            filterText: '',
            title: '',
            defaultProps: {
                children: 'children',
                label: 'label',
                id: 'id'
            },
        };
    }
    async created() {
        this.loadTree();
        var html = await fetch("/api/hello/world");
        let template = await html.text();
        let self = this;
        self.title = template;
    }
    access() {
        window.open('/api/hello/world', '_blank');
    }
    loadTree() {
        let self = this;
        let objs = [
            {
                "id": "1",
                "label": "BPM",
                "type": "uwf",
                "children": [
                    {
                        "id": "E5682956-3C0E-48FD-9E05-1FC24E5F8837",
                        "label": "OTD Order Delivery",
                        "type": "process"
                    }
                ]
            },
            {
                "id": "2",
                "label": "Database",
                "type": "database",
                "children": [
                    {
                        "id": "E5682956-3C0E-48FD-9E05-1FC24E5F8839",
                        "label": "Expense Claim",
                        "type": "process"
                    }
                ]
            },
            {
                "id": "3",
                "label": "Excel",
                "type": "excel",
                "children": []
            },
            {
                "id": "4",
                "label": "Webapi",
                "type": "webapi",
                "children": [
                    {
                        "id": "E5682956-3C0E-48FD-9E05-1FC24E5F8840",
                        "label": "Cash Advance",
                        "type": "process"
                    }
                ]
            },
            {
                "id": "5",
                "label": "BPA",
                "type": "uwf",
                "children": [
                    {
                        "id": "E5682956-3C0E-48FD-9E05-1FC24E5F8838",
                        "label": "Expense Application",
                        "type": "process"
                    }
                ]
            }
        ];
        self.treeData = objs;
    }
}
let app = new App({});
app.component('index-component', IndexComponent);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus);
app.mount('#app');
//# sourceMappingURL=index.js.map