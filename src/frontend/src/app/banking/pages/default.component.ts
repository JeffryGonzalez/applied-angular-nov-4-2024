import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
   
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>This is the Default Component</p>
    `,
    styles: ``
})
export class DefaultComponent {

}