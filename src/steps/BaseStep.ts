export class BaseStep {
    base: any;
    // address is accessible from base, no need to rewrite it

    // constructor, which sets the easy-access address and the base
    constructor(base: any) {
        // set the base
        this.base = base;
    }
}
