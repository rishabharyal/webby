import Kernel from "../src/Kernel";

interface classREf {

}

class i {
    public loadRegistrar(registrations:Array<any>) {
        registrations.forEach(r => {
            r.boot();
        });
    }

    public start(kernel: Kernel) {
        kernel.handle();
    }

    public singleton(classRef: any) {
        classRef.getInstance();
    }
}

export default i;
