import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { QueueComponent } from './pages/queue/queue.component';

export const QUEUE_ROUTES: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
            {
                path: '',
                component: QueueComponent
            }
        ]
	}
];