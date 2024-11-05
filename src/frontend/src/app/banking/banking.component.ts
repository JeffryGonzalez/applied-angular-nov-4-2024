import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-banking',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
    template: `
     <div>
        Balance summary, whatever
     </div>
     <router-outlet />
    `,
    styles: ``
})
export class BankingComponent {

  
}