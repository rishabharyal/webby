import Router from "../services/router";

let router = new Router();

function register() {
    router.get('/index', 'UserController@index');
    router.get('/index2', 'UserController@index');
}

export default register;