export const MANAGER_ROUTES = [
    { path: '', loadChildren: () => import("../manager/manager/manager.module").then(x => x.ManagerModule) }
];