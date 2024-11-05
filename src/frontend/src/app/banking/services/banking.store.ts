import { signalStore, withState } from '@ngrx/signals';

export const BankingStore = signalStore(withState({ balance: 0 }));
