import { manager } from '../../reference/setup';
import { VaultDeployer } from '../../../src/vaultDeployer';
import { StepTree } from '../../../src/stepTree';
import { TransferStep } from '../../../src/steps/transfer/transferStep';

describe('TransferStep', () => {
    describe('constructor', () => {
        it('should create a transfer step', () => {
            expect(() => {
                var transferStep = new TransferStep(manager);
            }).not.toThrow();
        });
    });

});
