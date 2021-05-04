
// mixin   重写了vue1.x 中弃用的broadcast 和dispatch 方法 为后面的form组件打基础
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

export default {
    methods: {
        // 向父组件和爷爷组件 传递 事件 
        // 组件名  事件名 参数
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        // 向子组件和孙子组件 分发 事件 
        // 组件名  事件名 参数
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
};