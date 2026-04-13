import { Routes, RouterModule } from '@angular/router';

import {StatsBoardIndexComponent} from './index/index.component';
export const routes: Routes = [
  { path: 'page', component: StatsBoardIndexComponent },
];

// export const StatsBoardRoutes = RouterModule.forChild(routes);
