import registration from './registration.vue'
class Registration {
    constructor({ wrapper, page }) {
        this.$wrapper = $(wrapper);
        this.page = page;
        let $vm = new Vue({
            el: this.$wrapper.get(0),
            render: (h) =>
                h(registration, {

                }),
        });
    }
}
frappe.provide("frappe.ui");
frappe.ui.Registration = Registration;
export default Registration;