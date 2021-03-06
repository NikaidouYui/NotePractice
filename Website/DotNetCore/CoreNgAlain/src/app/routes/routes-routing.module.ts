import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';

// single pages
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';

// 业务
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { FormSetDynamicControlComponent } from './form-set-dynamic-control/form-set-dynamic-control.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';
import { DataTransferTwoComponent } from './data-transfer-two/data-transfer-two.component';

import { CanDeactivateGuardService } from './can-deactivate/can-deactivate-guard.service';


const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'can-deactivate', component: CanDeactivateComponent, canDeactivate: [CanDeactivateGuardService]},
      {path: 'form-set-dynamic-control', component: FormSetDynamicControlComponent},
      {path: 'data-transfer', component: DataTransferComponent},
      {path: 'promise-test', component: PromiseTestComponent},
      {path: 'data-transfer-two', component: DataTransferTwoComponent},
    ],
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '403', component: Exception403Component },
  { path: '404', component: Exception404Component },
  { path: '500', component: Exception500Component },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
