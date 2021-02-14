import router from '../src/routes';
import * as http from "http";

import Web from './middlewares/web';

interface routes {
    type: String,
    route: String,
    action: String | null
}

class Kernel {
    private middlewares: Array<Object> = [
        new Web()
    ];
    public handle() {
        let self = this;
        http.createServer(function( req:http.IncomingMessage, res:http.ServerResponse) {

            return self.handleRouteAction(req, res);
        }).listen(8898);

        let routes = router.getAllRegisteredRoutes();
        routes.forEach((item: routes) => {

        });
    }

    private handleRouteAction(req:http.IncomingMessage, res:http.ServerResponse) {
        console.log();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('{"hello": "world"}');
        res.end();
    }
}

export default Kernel;
