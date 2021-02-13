import Router from '../services/router/index';

class Kernel {
    public handle() {
        let routes = Router.getInstance().getAllRegisteredRoutes();

        console.log(routes);
    }
}

export default Kernel;