import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BankingStore } from '../services/banking.store';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>Date of Transaction</th>
          <th>Type</th>
          <th>Amount</th>
          <th>New Balance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>2024-11-01 blah</th>
          <td>Deposit</td>
          <td>200.00</td>
          <td>1200.00</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>2024-11-02 blah</th>
          <td>Withdrawal</td>
          <td>100.00</td>
          <td>1100.00</td>
        </tr>
      </tbody>
    </table>
  </div>`,
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
