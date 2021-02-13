import Kernel from "../src/Kernel";

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
        console.log(classRef.getInstance(), new classRef);
        classRef.getInstance();
    }
}

export default i;
