import { Contract } from 'ethers';
import { ERC20_ABI } from './abis/ERC20';
import { DremManager } from './manager';


// really just abstracts
export class ERC20 extends Contract {
    constructor(manager: DremManager, address: string) {
        // an erc 20 with minimal inputs
        super(address, ERC20_ABI, manager.defaultSignerOrProvider);
    }
}

/*
await .name() --> name of the contract
await .symbol() --> symbol of the contract
*/
