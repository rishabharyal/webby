import router from '../src/routes';
import Router from '../services/router/index';

class Kernel {
    public handle() {
        let routes = router.getAllRegisteredRoutes();
        
    }
}

export default Kernel;