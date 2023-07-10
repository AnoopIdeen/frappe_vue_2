frappe.pages['registartion-form'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		single_column: true
	});
},
	frappe.pages["registartion-form"].on_page_show = function (wrapper) {
		load_vue_page(wrapper);
	};

function load_vue_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();
	frappe.require("registration.bundle.js").then(() => {
		new frappe.ui.Registration({
			wrapper: $parent,
			page: wrapper.page,
		});
	});

}