const user_id = "clnrrevzg0005vems05qoacgs"
const orgs_id = "clnrrevzg0005vems05qoacgs"
const employee_id = ""
export const base_url = "https://ovasite.onrender.com/api/v1"
export const generate_invite_link = `${base_url}/invites/${user_id}/generate-invite-link`

// project
export const creat_project_url = `${base_url}/orgs/${orgs_id}/create/project`
export const attach_employee_url = `${base_url}/orgs/${orgs_id}/adduser/:projectId`
export const get_project_url = `${base_url}/orgs/${orgs_id}/project/:projectId`
export const get_projects = `${base_url}/orgs/${orgs_id}/projects`
export const employee_projects_url =`${base_url}/orgs/${orgs_id}/userprojects/:empId`
export const project_wmployess_url =`${base_url}/orgs/${orgs_id}/projectusers/:projectId`
export const update_employee_url =`${base_url}/orgs/${orgs_id}/updateprojectrole/:projectId`
export const remove_employee_url =`${base_url}/orgs/${orgs_id}/removeemployee/:empId`
export const update_project_url =`${base_url}/orgs/${orgs_id}/update/project/:projectId`
export const export_project_url=`${base_url}/orgs/${orgs_id}/export/project/:projectId`
export const delete_project_url =`${base_url}/orgs/${orgs_id}/delete/project/:projectId`
// organization
export const get_all_organizations_url = `${base_url}/orgs`
export const get_a_single_organization = `${base_url}/orgs/${orgs_id}`
export const update_organization_url =`${base_url}/orgs/${orgs_id}`
export const delete_organization_url =`${base_url}/orgs/${orgs_id}`
// employee
export const get_all_employees_url  =  `${base_url}/orgs/${orgs_id}/employees/`
export const get_a_single_employee_url =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}`
export const update_an_employee_url  =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}`
export const delete_an_employee_url =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}`
export const change_an_employee_role_url =  `${base_url}/orgs/${orgs_id}/employees/${employee_id}/change-role`
export const search_for_an_employer_url =  `${base_url}/orgs/${orgs_id}/employees/search?query=dan@123.com`
export const get_employee_by_mail =  `${base_url}/orgs/${orgs_id}/employees?query=dan@123.com`
export const get_employee_count =  `${base_url}/orgs/${orgs_id}/employees/count`
// export const  =  `${base_url}/orgs/${orgs_id}/employees/count`