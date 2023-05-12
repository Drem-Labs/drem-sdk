import { manager } from './reference/setup';
import { ERC20 } from '../src/erc20';


describe('ERC20', () => {
    describe('constructor', () => {
        it('should create an ERC20', () => {
            expect(() => {
                var erc20 = new ERC20(manager, manager.sdk().testing.MockERC20.address);
            }).not.toThrow();
        });
    });
});
