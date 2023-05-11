import { Contract } from 'ethers';
import { Percent } from '../../types/Percent';
import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';
import { AlphaRouter, SwapOptionsSwapRouter02 } from '@uniswap/smart-order-router';
import { CurrencyAmount, Token } from '@uniswap/sdk-core';

export class UniswapV3SwapStep extends BaseStep {
    // default slippage to 0.5%
    private slippage: Percent = 0.005;

    // need to keep track of the token in and token out
    private tokenIn: Contract;
    private tokenOut: Contract;

    // keep track of amountOutMinimum
    // this is simple, needs to be converted into raw for variable args
    private amountOutMinimum: number;
    // could have a deadline, but that is really always now

    constructor(manager: DremManager) {
        super();

        // get the swap step
        this.base = manager.sdk().steps.UniswapV3SwapStep;
    }

    // need to be able to load a step
    async load(vault: any, stepKey: number): void {
        // get the step data out of the mapping

        // reverse the path into 2 assets (seems difficult, see if the uniswap docs help)

        // set the token in and token out
    }

    // setter for fixed arg data (don't need approvals, as the vault will handle these)
    // https://docs.uniswap.org/sdk/v3/guides/routing
    // note on tokens: they take the chain id as a number, the contract, and a number of decimals (don't need the token name or symbol, even though they use it in the example)
    async setPath(tokenIn: string, tokenOut: string, averageFlowEstimate: number): void {
        // validate token in (whitelisted)

        // validate token out (whitelisted)

        // get the path from uniswap

        // set the token in and token out
    }

    // setter for slippage (will be 0.5% by default)
    setSlippage(slippage: number): void {
        this.slippage = Percent(number);
    }

    // getter for slippage
    getSlippage(): number {
        return this.slippage.value;
    }

    // getter for fixed arg data --> returns an entire list of addresses that are the path to take to the swap

    // autoset the variable arg data


    // manually set the

    // getter for variable arg data (min funds out)

}

/* Notes
- average flow is a number that describes how much will likely flow through the vault
    - large amounts have different pools than small amounts
    - we can have a few settings: Micro ($10), Small ($100), Medium ($1,000), Large ($10,000), Jumbo ($100,000+)
*/

/* To Do:
- need to simplify the winding for exports
- [OPTIONAL] return the address AND contract name for the token in and out
*/
