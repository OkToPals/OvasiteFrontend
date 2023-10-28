import {get_all_users_url, get_user_url, delete_user_url, create_project_url, attach_employee_url, get_project_url, get_employee_projects_url, get_project_employees_url, update_employee_url, update_employee_role_url, export_project_url, remove_employee_url, update_project_url, delete_project_url, get_all_organizations_url, get_organization_url, update_organization_url, delete_organization_url, get_employee_url, search_for_an_employer_url, get_employee_count_url, generate_invite_link_url, join_organization_url, get_org_audits_url, get_audit_url, delete_audit_url } from "./api_utils"
import axios_instance from "./axiosInstance"


// user
export const get_all_users = () => {
    try {
        const response = axios_instance.get(get_all_users_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_user_by_email = () => {
    try {
        const response = axios_instance.get(get_user_by_email_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_user = () => {
    try {
        const response = axios_instance.get(get_user_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_user = () => {
    try {
        const response = axios_instance.delete(delete_user_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

// project
export const create_project  = () => {
    try {
        const response = axios_instance.post(create_project_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const attach_employee = () => {
    try {
        const response = axios_instance.post(attach_employee_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_project = () => {
    try {
        const response = axios_instance.get(get_project_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_projects = () => {
    try {
        const response = axios_instance.get(get_projects_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_employee_projects = () => {
    try {
        const response = axios_instance.get(get_employee_projects_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_project_employees = () => {
    try {
        const response = axios_instance.get(get_project_employees_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const update_employee_role_in_project = () => {
    try {
        const response = axios_instance.put(update_employee_role_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const remove_employee = () => {
    try {
        const response = axios_instance.delete(remove_employee_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const update_project = () => {
    try {
        const response = axios_instance.put(update_project_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const export_project = () => {
    try {
        const response = axios_instance.get(export_project_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_project = () => {
    try {
        const response = axios_instance.delete(delete_project_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

// organization
export const get_all_organizations = () => {
    try {
        const response = axios_instance.get(get_all_organizations_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_organization = () => {
    try {
        const response = axios_instance.get(get_organization_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const update_organization = () => {
    try {
        const response = axios_instance.patch(update_organization_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_organization = () => {
    try {
        const response = axios_instance.delete(delete_organization_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

// employees
export const get_all_employees = () => {
    try {
        const response = axios_instance.get(get_all_employees)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_employee = () => {
    try {
        const response = axios_instance.get(get_employee_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const update_employee = () => {
    try {
        const response = axios_instance.patch(update_employee_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_employee_url = () => {
    try {
        const response = axios_instance.get(delete_employee_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const update_employee_role_in_org_url = () => {
    try {
        const response = axios_instance.patch(update_employee_role_in_org_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const search_for_an_employer = () => {
    try {
        const response = axios_instance.get(search_for_an_employer_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_employee_by_mail = () => {
    try {
        const response = axios_instance.get(get_employee_by_mail)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_employee_count = () => {
    try {
        const response = axios_instance.get(get_employee_count_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const generate_invite_link = () => {
    try {
        const response = axios_instance.post(generate_invite_link_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const join_organization = () => {
    try {
        const response = axios_instance.post(join_organization_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

// audit trail

export const get_all_audits = () => {
    try {
        const response = axios_instance.get(get_all_audits_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_org_audits = () => {
    try {
        const response = axios_instance.get(get_org_audits_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const get_audit = () => {
    try {
        const response = axios_instance.get(get_audit_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_audit_ = () => {
    try {
        const response = axios_instance.delete(delete_audit_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}

export const delete_org_audit_url = () => {
    try {
        const response = axios_instance.delete(delete_org_audit_url)
        console.log(response);
        
    } catch (error) {

        console.log(error);
        
    }
}