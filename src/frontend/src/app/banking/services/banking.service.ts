import { signal } from '@angular/core';

export class BankingService {
  #balance = signal(999.99);

  getBalance() {
    return this.#balance.asReadonly;
  }
}
