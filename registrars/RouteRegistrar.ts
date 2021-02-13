import register from '../src/routes';

class RouteRegistrar {

    public boot() {
        this.registerRoutes();
    }

    private registerRoutes() {
        register();
    }
}

export default RouteRegistrar;