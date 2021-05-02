import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-zone',
	templateUrl: './zone.component.html',
	styleUrls: ['./zone.component.scss']
})

export class ZoneComponent implements OnInit {
	@Input() background: any;
	@Input() height: any;
	@Input() width: any;
	@Input() xpos: any;
	@Input() ypos: any;
	@Input() z_index: any;

	constructor() { }

	ngOnInit(): void {
	}

}
