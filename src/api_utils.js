const user_id = "clnrrevzg0005vems05qoacgs"
const orgs_id = "clohjkfm20001h1622t5bsvl1"
const employee_id = ""
const user_email = ""
const audit_id = ""

// base_url
export const base_url = "https://ovasite.onrender.com/api/v1"

// auth
export const login_url = `${base_url}/auth/login`
export const register_url = `${base_url}/auth/register`
export const logout_url = `${base_url}/auth/logout`

// user
export const get_all_users_url = `${base_url}/users`
export const get_user_by_email_url = `${base_url}/users/email?=${user_email}` 
export const get_user_url = `${base_url}/users/${user_id}`
export const delete_user_url = `${base_url}/users/${user_id}`

// project
export const create_project_url = `${base_url}/orgs/`
export const attach_employee_url = `${base_url}/orgs/${orgs_id}/adduser/:projectId`
export const get_project_url = `${base_url}/orgs/${orgs_id}/project/:projectId`
export const get_all_org_projects_url = `${base_url}/orgs/`
export const get_employee_projects_url =`${base_url}/orgs/${orgs_id}/userprojects/:empId`
export const get_project_employees_url =`${base_url}/orgs/${orgs_id}/projectusers/:projectId`
export const update_employee_role_url =`${base_url}/orgs/${orgs_id}/updateprojectrole/:projectId`
export const remove_employee_url =`${base_url}/orgs/${orgs_id}/removeemployee/:empId`
export const update_project_url =`${base_url}/orgs/`
export const export_project_url=`${base_url}/orgs/${orgs_id}/export/project/:projectId`
export const delete_project_url =`${base_url}/orgs/`
// organization replace team with organization
export const get_all_organizations_url = `${base_url}/orgs`
export const get_organization_url = `${base_url}/orgs/${orgs_id}`
export const update_organization_url =`${base_url}/orgs/`
export const delete_organization_url =`${base_url}/orgs/`
// employee
export const get_all_employees_url  =  `${base_url}/orgs/`
export const get_employee_url =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}`
export const update_employee_url  =  `${base_url}/orgs/${orgs_id}/employees/`
export const delete_employee_url =  `${base_url}/orgs/${orgs_id}/employees/`
export const update_employee_role_in_org_url =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}/change-role`
export const search_for_an_employer_url =  `${base_url}/orgs/${orgs_id}/employees/search?query=dan@123.com`
export const get_employee_by_mail_url =  `${base_url}/orgs/${orgs_id}/employees?query=dan@123.com`
export const get_employee_count_url =  `${base_url}/orgs/${orgs_id}/employees/count`
// export const  =  `${base_url}/orgs/${orgs_id}/employees/count`

// invitation
export const generate_invite_link_url = `${base_url}/invites/${user_id}/generate-invite-link`
export const join_organization_url = `${base_url}/invites/join/${user_id}`

// audit trail
export const get_all_audits_url = `${base_url}/orgs/:${orgs_id}/audit`
export const get_org_audits_url = `${base_url}//orgs/:${orgs_id}/orgaudit`
export const get_audit_url = `${base_url}/orgs/:${orgs_id}/audit/:${audit_id}`
export const delete_audit_url = `${base_url}/orgs/:${orgs_id}/audit/delete/`
export const delete_org_audit_url = `${base_url}/orgs/:${orgs_id}/orgaudit/delete/:${audit_id}`
