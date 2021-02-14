interface routes {
    type: String,
    route: String,
    action: String | null,
}



class Router {

    private static instance: Router;
    private routes: Array<routes> = [];

    public static getInstance(): Router {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public getAllRegisteredRoutes(): Array<routes> {
        return this.routes;
    }

    public middleware(item: any = '') {

        return this;
    }

    public get(route: String, handle:String | null) {
        this.routes.push({
            type: 'GET',
            route: route,
            action: handle
        });

        return this;
    }

    public post(route: String, handle:String | null) {
        this.routes.push({
            type: 'POST',
            route: route,
            action: handle
        });

        return this;
    }

    public put(route: String, handle:String | null) {
        this.routes.push({
            type: 'PUT',
            route: route,
            action: handle
        });

        return this;
    }

    public delete(route: String, handle:String | null) {
        this.routes.push({
            type: 'DELETE',
            route: route,
            action: handle
        });

        return this;
    }
}

export default Router;