import { InvalidPercentError } from '../lib/errors';

// a simple class for defining percentages
export class Percent extends Number {
    value: number;

    constructor(value: number) {
        super();

        // no error --> assign the value
        this.value = value;

        // check if still a percent
        this.check();
    }

    // add changes the state of the percent type
    add(value: Percent | number): void {
        // add the values
        if (value instanceof Percent) {
            this.value += value.value;

        }
        else {
            this.value += value;
        }

        // check
        this.check();
    }

    // check if a percent
    check() {
        if ( (this.value < 0) || (this.value > 1) ) {
            throw new InvalidPercentError('Percent must be between 0 and 1');
        }
    }
}
