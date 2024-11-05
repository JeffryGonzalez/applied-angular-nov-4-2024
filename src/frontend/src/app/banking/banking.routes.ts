import { Routes } from '@angular/router';
import { BankingComponent } from './banking.component';
import { DefaultComponent } from './pages/default.component';
import { DepositComponent } from './pages/deposit.component';
import { StatementComponent } from './pages/statement.component';
import { WithdrawComponent } from './pages/withdraw.component';
import { BankingStore } from './services/banking.store';

export const BANKING_ROUTES: Routes = [
  {
    path: '',
    component: BankingComponent,
    providers: [BankingStore],
    children: [
      {
        path: 'dashboard',
        component: DefaultComponent,
      },
      {
        path: 'deposit',
        component: DepositComponent,
      },
      {
        path: 'withdraw',
        component: WithdrawComponent,
      },
      {
        path: 'statement',
        component: StatementComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];
