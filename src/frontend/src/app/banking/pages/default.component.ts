import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BankingStore } from '../services/banking.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="card bg-base-100 w-96 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Your Account</h2>
        <p>You Currently have a Balance of {{ service.balance() }}</p>
      </div>
    </div>

    <div>
      <a [routerLink]="['..', 'deposit']" class="btn btn-primary">Deposit</a>
      <a routerLink="../withdraw" class="btn btn-primary">Withdraw</a>
      <a routerLink="../statement" class="btn btn-primary">Statement</a>
    </div>
  `,
  styles: ``,
})
export class DefaultComponent {
  service = inject(BankingStore);
}
