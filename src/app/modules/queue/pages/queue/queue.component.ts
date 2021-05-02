import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-queue',
	templateUrl: './queue.component.html',
	styleUrls: ['./queue.component.scss']
})

export class QueueComponent implements OnInit {
	zones: any[] | undefined;

	constructor() { }

	ngOnInit(): void {
		this.zones = [
			{
				background: '#222',
				height: 1080,
				width: 500,
				xpos: 0,
				ypos: 0,
				z_index: 1
			},
			{
				background: '#444',
				height: 800,
				width: 1420,
				xpos: 500,
				ypos: 0,
				z_index: 1
			},
			{
				background: '#666',
				height: 280,
				width: 1420,
				xpos: 500,
				ypos: 800,
				z_index: 1
			}
		]
	}
}
