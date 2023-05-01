import { InvalidPercentError } from '../lib/errors';

// a simple class for defining percentages
export class Percent extends number {
    value: number;

    constructor(value: number) {
        super();

        // no error --> assign the value
        this.value = value;

        // check if still a percent
        this.check();
    }

    add(value: number): void {
        this.value += value;

        // check
        this.check();
    }

    addPercent(percent: Percent): void {
        this.value += percent.value;

        // check
        this.check();
    }

    // check if a percent
    check() {
        if ( (this.value < 0) || (this.value > 1) ) {
            throw InvalidPercentError('Percent must be between 0 and 1');
        }
    }
}
