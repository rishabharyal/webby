import i from './i';
import Registrar from '../registrars/registrar';

class Boot {
    execute(i_: i) {
        i_.loadRegistrar((new Registrar()).registrations());
    }
}

export default new Boot()