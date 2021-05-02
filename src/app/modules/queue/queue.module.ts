import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './pages/queue/queue.component';
import { ZoneComponent } from './components/zone/zone.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { QUEUE_ROUTES } from './queue-router.module';

@NgModule({
	declarations: [
		QueueComponent, 
		ZoneComponent, 
		LayoutComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(QUEUE_ROUTES)
	]
})

export class QueueModule { 
	constructor() {
		console.log('Entered Queue Module');
	}
}
