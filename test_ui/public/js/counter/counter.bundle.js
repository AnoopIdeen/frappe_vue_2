import counter from './Counter.vue'
class Counter {
    constructor({ wrapper, page }) {
        this.$wrapper = $(wrapper);
        this.page = page;
        let $vm = new Vue({
            el: this.$wrapper.get(0),
            render: (h) =>
                h(counter, {

                }),
        });
    }
}

frappe.provide("frappe.ui");
frappe.ui.Counter = Counter;
export default Counter;