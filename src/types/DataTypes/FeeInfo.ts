import { Percent } from '../Percent';

// precision factor for the fee controller
const PRECISION_FACTOR = 1000000;

// fee info struct (export type)
export type FeeInfoStruct = [number, number, number, number, string];

// fee info
export class FeeInfo {
    entranceFee: Percent;
    exitFee: Percent;
    performanceFee: Percent;
    managementFee: Percent;
    collector: string;

    // set the fees
    constructor(entranceFee: Percent, exitFee: Percent, performanceFee: Percent, managementFee: Percent, collector: string) {
        this.entranceFee = entranceFee;
        this.exitFee = exitFee;
        this.performanceFee = performanceFee;
        this.managementFee = managementFee;
        this.collector = collector;
    }

    // to struct, which converts all of the percents with the appropriate precision factor
    toStruct(): FeeInfoStruct {
        return [
            this._convertFee(this.entranceFee),
            this._convertFee(this.exitFee),
            this._convertFee(this.performanceFee),
            this._convertFee(this.managementFee),
            this.collector
            ];
    }

    // internal function for rounding & precision
    private _convertFee(fee: Percent): number {
        // make a value by converting the fee to a number with the precision factor and rounding it
        const value = Math.round(fee.value * PRECISION_FACTOR);
    }
}

/* To Do:
- add check that the collector is a valid address
*/
