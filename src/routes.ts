import Router from "../services/router";

let router = new Router();

router.get('/index', 'UserController@index');
router.get('/index2', 'UserController@index');

export default router;