import { Component } from '@angular/core';
import { Socket, SocketOptions, io } from 'socket.io-client';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'queue-system-rpi-ui';
	socket: Socket;	

	constructor() {
		this.socket = io('http://localhost:5000', {
			query: {
				client: 'screen'
			}
		});

		this.socket.on('connect', () => {
			console.log('Connected to Sockets');
		})
		
		this.socket.on('disconnect', () => {
			console.log('Disconnected from Socket')
		})
	}
}