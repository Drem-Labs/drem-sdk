import { StepTree } from '../../stepTree';
import { DremLensDataType } from '../DremLens';

export type ProcessingDataStruct = [number, string[]];

export class ProcessingData extends DremLensDataType {
    // internal data
    followerTokenId: number;
    stepTree: StepTree;

    //  constructor to create the processing data
    constructor(followerTokenId: number, stepTree: StepTree) {
        super();

        // set all the internal data members
        this.followerTokenId = followerTokenId;  // assuming someone doesn't do something silly, like passing a floating point number
        this.stepTree = stepTree;
    }

    // send it to a struct
    async toStruct(): Promise<ProcessingDataStruct> {
        return [
            this.followerTokenId,
            (await this.stepTree.toVariableArgs())
            ];
    }

    // get the types
    structTypes(): string[] {
        return [
            'uint256',
            'bytes[]'
            ];
    }
}
