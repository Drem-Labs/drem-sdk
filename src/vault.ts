import { DremManager } from './manager';

// class for a vault
class Vault {}


// get a vault
export function getVault(manager: DremManager, vaultAddress: string): Vault {
    // create a vault
    const defaultVault = manager.sdk().Vault;

    // attach the vault to the vault address
    defaultVault.attach(vaultAddress);

    // make the more powerful vault
    Object.assign(Vault.prototype, defaultVault.prototype);

    let newVault = new Vault();

    return newVault;
}
