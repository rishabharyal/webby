import boot from './bootstrap/boot';
import i from './bootstrap/i';
import Router from './services/router';
import Kernel from './src/Kernel';


let i_ = new i();;


i_.singleton(Router);
boot.execute(i_);
i_.start(new Kernel());