import router from '../src/routes';
import Router from '../services/router/index';
import * as http from "http";

import Web from './middlewares/web';

class Kernel {
    private middlewares: Array<Object> = [
        new Web()
    ];
    public handle() {
        let self = this;
        http.createServer(function(req:any, res:any) {
            self.handleRouteAction(req, res);
        }).listen(8898);

        let routes = router.getAllRegisteredRoutes();
        routes.forEach((item: any) => {
            // handler..
        });
    }

    private handleRouteAction(req:any, res:any) {
        console.log(req);
        res.writeHead(200, {'Content-Type': 'application/json'});        
        res.write('{"hello": "world"}');
        res.end();
    }
}

export default Kernel;
