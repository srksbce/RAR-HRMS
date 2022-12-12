export const MNG_ROUTES = [
    { path: '', loadChildren: () => import("../Manager/manager/manager.module").then(x => x.ManagerModule) }
];