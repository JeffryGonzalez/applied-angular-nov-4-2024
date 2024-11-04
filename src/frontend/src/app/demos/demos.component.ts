import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-blah',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>Demos Go Here And This is Rad</p>
    `,
    styles: ``
})
export class DemosComponent {

}