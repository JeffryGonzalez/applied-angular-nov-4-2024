import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-change-detection',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>Change Detection Stuff</p>
    `,
    styles: ``
})
export class ChangeDetectionComponent {

}