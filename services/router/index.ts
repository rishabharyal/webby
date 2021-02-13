class Router {
    
    private static instance: Router;
    private routes: Array<Object> = [];

    public static getInstance(): Router {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public getAllRegisteredRoutes(): Array<any> {
        return this.routes;
    }

    public get(route: String, handle:any = null) {
        this.routes.push({
            type: 'GET',
            route: route,
            action: handle
        });
    }

    public post(route: String, handle:any = null) {
        this.routes.push({
            type: 'POST',
            route: route,
            action: handle
        });
    }

    public put(route: String, handle:any = null) {
        this.routes.push({
            type: 'PUT',
            route: route,
            action: handle
        });
    }

    public delete(route: String, handle:any = null) {
        this.routes.push({
            type: 'DELETE',
            route: route,
            action: handle
        });
    }
}

export default Router;