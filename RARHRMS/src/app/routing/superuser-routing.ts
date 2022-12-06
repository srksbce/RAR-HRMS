export const SUP_ROUTES = [
    { path: '', loadChildren: () => import("../superuser/superuser/superuser.module").then(x => x.SuperuserModule) }
];