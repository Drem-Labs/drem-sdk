import * as ethers from 'ethers';
import { Contract } from 'ethers';
import { AlphaRouter, SwapOptionsSwapRouter02, SwapRoute, SwapType } from '@uniswap/smart-order-router';
import { CurrencyAmount, Token, TradeType } from '@uniswap/sdk-core';
import { Percent as UniswapPercent } from '@uniswap/sdk-core';
import { Percent } from '../../types/Percent';
import { BaseStep } from '../BaseStep';
import { DremManager } from '../../manager';
import { Vault } from '../../vault';
import { ERC20_ABI } from '../../abis/ERC20';
import { AssetNotWhitelisted } from '../../lib/errors';

// set the precision factor to what uniswap docs use
const PRECISION_FACTOR = 10000;

export class UniswapV3SwapStep extends BaseStep {
    // default slippage to 0.5%
    private slippage: Percent = new Percent(0.005);

    // will need an asset registry
    private assetRegistry: any;

    // need to keep track of the token in and token out
    private tokenIn: Contract;
    private tokenOut: Contract;

    // keep track of amountOutMinimum
    // this is simple, needs to be converted into raw for variable args
    private amountOutMinimum: number;
    // could have a deadline, but that is really always now

    constructor(manager: DremManager) {
        super(manager);

        // get an sdk to use
        var sdk = manager.sdk();

        // get the swap step
        this.base = sdk.steps.UniswapV3SwapStep;

        // get the asset registry
        this.assetRegistry = sdk.AssetRegistry;
    }

    // need to be able to load a step --> should autoload the amount in
    async load(vault: Vault, stepKey: number): Promise<void> {
        // get the step data out of the mapping

        // trace the path from transfer to output

        // reverse the path into 2 assets (seems difficult, see if the uniswap docs help)

        // set the token in and token out
    }

    // setter for fixed arg data (don't need approvals, as the vault will handle these)
    // https://docs.uniswap.org/sdk/v3/guides/routing
    // note on tokens: they take the chain id as a number, the contract, and a number of decimals (don't need the token name or symbol, even though they use it in the example)
    async setPath(tokenIn: string, tokenOut: string, averageFlowEstimate: number): Promise<void> {
        // validate token in (whitelisted)
        var whitelisted = this.assetRegistry.isAssetWhitelisted(tokenIn);

        // throw if not whitelisted
        if (!whitelisted) {
            throw new AssetNotWhitelisted('Token in is not whitelisted');
        }

        // throw if not a signer (not compatible with base provider)

        // token out does not need to be whitelisted, allowing for any assets to be swapped

        // set the contracts for the tokens
        this.tokenIn = new Contract(tokenIn, ERC20_ABI, this.manager.defaultSignerOrProvider);
        this.tokenOut = new Contract(tokenOut, ERC20_ABI, this.manager.defaultSignerOrProvider);

        // need to create the tokens for uniswap input
        var uniswapTokenIn = await this._getUniswapToken(this.tokenIn);
        var uniswapTokenOut = await this._getUniswapToken(this.tokenOut);

        // need to get the provider
        var provider: ethers.providers.BaseProvider;

        if (this.manager.defaultSignerOrProvider instanceof ethers.Signer) {
            provider = this.manager.defaultSignerOrProvider.provider as ethers.providers.BaseProvider;
        }
        else if (this.manager.defaultSignerOrProvider instanceof ethers.providers.BaseProvider) {
            provider = this.manager.defaultSignerOrProvider;
        }
        else {
            provider = this.manager.defaultSignerOrProvider as ethers.providers.BaseProvider;
        }

        // get the path from uniswap
            // note: this path may be imperfect, as it will not account for the whitelisted token
            // we could deconstruct this path, but this will take a while to build, so let's leave that validation for later (not going to do anything except keep the transaction from going through)
            // don't need this anywhere else, so just fine to do it here
        const router = new AlphaRouter({
            chainId: this.manager.chainId,
            provider: provider
        });

        // create the route
            // currently going to use the asset registry, as we cannot assume that the vault has been created yet
        const options: SwapOptionsSwapRouter02 = {
            recipient: this.assetRegistry.address,
            slippageTolerance: new UniswapPercent(this.slippage.value * PRECISION_FACTOR, PRECISION_FACTOR),
            deadline: Math.floor(Date.now() / 1000 + 1800),
            type: SwapType.SWAP_ROUTER_02
        }

        // this route IS the fixed args
        const route = await router.route(
            CurrencyAmount.fromRawAmount(
                uniswapTokenIn,
                ethers.utils.parseUnits(averageFlowEstimate.toString(), uniswapTokenIn.decimals).toString(),
                ),
                uniswapTokenOut,
                TradeType.EXACT_INPUT,
                options
            );

        // set the fixed arg data here
        this.fixedArgData = route?.methodParameters?.value;
    }

    // setter for slippage (will be 0.5% by default)
    setSlippage(slippage: number): void {
        this.slippage = new Percent(slippage);
    }

    // getter for slippage
    getSlippage(): number {
        return this.slippage.value;
    }

    // getter for fixed arg data --> returns an entire list of addresses that are the path to take to the swap

    // getter for variable arg data (min funds out)
    getAmountOutMinimum(): number {
        return this.amountOutMinimum;
    }

    // getter to construct uniswap tokens
    private async _getUniswapToken(token: Contract): Promise<Token> {
        var uniswapToken = new Token(
            this.manager.chainId,
            token.address,
            (await token.decimals()),
            (await token.symbol()),
            (await token.name())
            );

        return uniswapToken;
    }
}

/* Notes
- average flow is a number that describes how much will likely flow through the vault
    - large amounts have different pools than small amounts
    - we can have a few settings: Micro ($10), Small ($100), Medium ($1,000), Large ($10,000), Jumbo ($100,000+)
*/

/* To Do:
- need to simplify the winding for exports
- SHOULD validate the entire path, but this is complex, so not done YET (just takes time, will be done before going live)
- [OPTIONAL] return the address AND contract name for the token in and out
*/
