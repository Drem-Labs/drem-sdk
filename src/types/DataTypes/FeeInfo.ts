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
    constructor(entranceFee: number, exitFee: number, performanceFee: number, managementFee: number, collector: string) {
        // convert all the fees to percents to ensure that they get converted correctly
        this.entranceFee = new Percent(entranceFee);
        this.exitFee = new Percent(exitFee);
        this.performanceFee = new Percent(performanceFee);
        this.managementFee = new Percent(managementFee);

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

        return value;
    }
}

/* To Do:
- add check that the collector is a valid address
*/
