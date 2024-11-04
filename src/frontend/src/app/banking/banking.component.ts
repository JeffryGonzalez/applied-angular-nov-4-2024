import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { TransactionComponent } from "./components/transaction.component";


@Component({
    selector: 'app-banking',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CurrencyPipe, TransactionComponent],
    template: `
        <p>Banking Stuff</p>
        <p>Your Current Balance is {{ balance() | currency }}</p>

        <app-banking-transaction (transactionHappened)="doDeposit($event)" buttonLabel="Deposit" />
       <app-banking-transaction (transactionHappened)="doWithdrawal($event)" buttonLabel="Withdrawal" />
    `,
    styles: ``
})
export class BankingComponent {
    balance = signal(0);
    warning = signal(false);
    doWithdrawal(amount:number) {
        this.balance.update(b => b - amount);
    }

    doDeposit(amount:number) {
        this.balance.update(b => b + amount)
    }

    // injection context (first mention of this, more tomorrow)
    constructor() {
        effect(() => { // this is dumb classroom stuff - effects should
            // be used with caution. You should get a note from your mother.
            console.log(`The balance is now ${this.balance()}`)
            if(this.balance() < 0) {
                this.warning.set(true);
            }
        }, {allowSignalWrites: true})
    }
  
}