import { writable, derived } from 'svelte/store';
import { getAllAccounts, getAccountById } from "@lib/repos/accounts";
import { getTransactionsByAccount } from "@lib/repos/transactions";
import transactionsService from "@lib/services/transactions/transactions";

import { params } from "@lib/store";
import {liveQuery} from "dexie";

export const accounts = derived(
    liveQuery(getAllAccounts),
    $accounts => $accounts || []
);

export const projects = writable([]);

// XXX : Check if in the future params throw updates too often
export const transactionsRecap = derived(
    params,
    ($params, set) => {
        if (!$params?.favoriteAccountId) return null;

        // Can't use async function in derived
        (async () => {
            // TODO : add date
            let transactions = await getTransactionsByAccount($params.favoriteAccountId);
    
            let recap = transactionsService.getTransactionsRecap(transactions);
            set(recap);
        })();
    }
);