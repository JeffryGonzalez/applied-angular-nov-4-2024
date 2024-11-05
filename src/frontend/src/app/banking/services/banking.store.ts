import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type BankState = {
  balance: number;
};

const initialState: BankState = {
  balance: 0,
};
export const BankingStore = signalStore(
  withState<BankState>(initialState),
  withMethods((store) => {
    // injection context
    return {
      withdraw: (amount: number) =>
        patchState(store, { balance: store.balance() - amount }),
      deposit: (amount: number) =>
        patchState(store, { balance: store.balance() + amount }),
    };
  }),
);
