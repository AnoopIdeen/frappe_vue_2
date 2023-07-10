import frappe
import json

@frappe.whitelist()
def save_user(data):
    data=json.loads(data)
    new_user = frappe.new_doc("Registration")
    new_user.email=data['email']
    new_user.password = data['password']
    new_user.insert(ignore_permissions=True)

@frappe.whitelist()
def get_all():
    return frappe.db.get_all("Registration",fields=["name",'email'])

