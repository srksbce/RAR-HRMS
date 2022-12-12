export const EMPLOYEE_ROUTES = [
    { path: '', loadChildren: () => import("../employee/employee.module").then(x => x.EmployeeModule) }
];