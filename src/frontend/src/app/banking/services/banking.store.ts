import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntity, setEntities, withEntities } from '@ngrx/signals/entities';
import { BankTransaction } from './types';
import { BankingService } from './banking.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { setError, setFulfilled, setPending, withRequestStatus } from '@shared';

type BankState = {
  openingBalance: number;
  _balance: number;
};

const initialState: BankState = {
  openingBalance: 0,
  _balance: 0,
};
export const BankingStore = signalStore(
  withDevtools('banking-store'),
  withState<BankState>(initialState),
  withEntities<BankTransaction>(),
  withRequestStatus(),
  withMethods((store) => {
    const service = inject(BankingService);
    return {
      _load: rxMethod<void>(
        pipe(
          tap(() => patchState(store, setPending())),
          switchMap(() =>
            service.loadCurrentStatement().pipe(
              tapResponse({
                next(value) {
                  patchState(store, setEntities(value), setFulfilled());
                },
                error() {
                  patchState(store, setError('Could not get the transactions'));
                },
              }),
            ),
          ),
        ),
      ),

      withdraw: (amount: number) => {
        // patchState(store, { _balance: store._balance() - amount });
        const withdrawalRecord: BankTransaction = {
          id: crypto.randomUUID(),
          kind: 'withdrawal',
          date: new Date().getTime(),
          amount,
          newBalance: store._balance() - amount,
        };
        patchState(store, addEntity(withdrawalRecord), {
          _balance: withdrawalRecord.newBalance,
        });
      },
      deposit: (amount: number) => {
        const depositRecord: BankTransaction = {
          id: crypto.randomUUID(),
          kind: 'deposit',
          date: new Date().getTime(),
          amount,
          newBalance: store._balance() + amount,
        };
        patchState(store, addEntity(depositRecord), {
          _balance: depositRecord.newBalance,
        });
      },
    };
  }),
  withComputed((store) => {
    return {
      withdrawalAvailable: computed(() => store._balance() > 0),
      balance: computed(() => {
        return store.entities().reduce((lhs, rhs) => {
          if (rhs.kind === 'deposit') {
            return lhs + rhs.amount;
          } else {
            return lhs - rhs.amount;
          }
        }, store.openingBalance());
      }),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
