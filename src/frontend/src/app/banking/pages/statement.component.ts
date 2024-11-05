import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({

    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>statement</p>
    `,
    styles: ``
})
export class StatementComponent {

}