class UserController extends Controller {
    public index(id: Number = 0) {
        if (id === 0) {
            return this.response(["No parameter."]);
        }
        return this.response(["Basic example"]);
    }
}