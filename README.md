# vue3classapi
dotnet8 Vue3 template based class api style.

## Vue3 class api style
index.ts
```typescript
//import vue3 and vue-class-component
import { App,ComponentBase } from '../../js/app.js';
//import elementplus
import ElementPlus from '../../js/element-plus/index.full.min.js';
import * as ElementPlusIconsVue from '../../js/element-plus/icons-vue/index.min.js'

//vue3.0 component
class IndexComponent extends ComponentBase {

    //vue options
    options() {
        return {
            //vue3 template control or vue3 template string
            template: '#vue3template'
        }
    }

    //vue data
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
        }
    }

    //vue created funciton
    async created() {
        this.loadTree();

        var html = await fetch("/api/hello/world");
        let template = await html.text();

        let self:any = this;
        self.title = template;
    }

    //custom function
    access() {
        window.open('/api/hello/world','_blank');
    }
}

//register components
let app = new App({});
app.component('index-component', IndexComponent);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus);
app.mount('#app');

```

## C# WebApi
### Config UseStaticFiles
startup.cs
```csharp
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });

        var options = new RewriteOptions();
        options.AddRewrite("^$", "index.html", true);
        app.UseRewriter(options);

        app.UseStaticFiles();
            
    }
```

