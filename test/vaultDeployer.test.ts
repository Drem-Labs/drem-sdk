import { manager } from './reference/setup';
import { VaultDeployer } from '../src/vaultDeployer';

describe('VaultDeployer', () => {
    describe('constructor', () => {
        it('should create a vault deployer', () => {
            expect(() => {
                var vaultDeployer = new VaultDeployer(manager);
            }).not.toThrow();
        });
    });
});
