import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BankingStore } from '../services/banking.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>statement your balance is XXXX</p> `,
  styles: ``,
})
export class StatementComponent {
  // private bankingService:BankingService;

  // constructor(bankingService:BankingService) {
  //     this.bankingService = bankingService
  // }

  // constructor(private bankingService:BankingService) {}
  private bankingService = inject(BankingStore);
}
