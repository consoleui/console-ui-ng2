import { Component, OnInit, Input } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'cui-button-b',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class CuiButtonComponent implements OnInit {
    @Input() color: string = 'default';

    constructor() { }

    ngOnInit() { }
}

