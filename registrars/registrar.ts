import RouteRegistrar from './RouteRegistrar';

class Registrar {
    public registrations() {
        return [
            new RouteRegistrar()
        ];
    }
}

export default Registrar;