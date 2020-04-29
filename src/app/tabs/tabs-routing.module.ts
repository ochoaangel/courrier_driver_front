import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'deliveries',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deliveries/deliveries.module').then(m => m.DeliveriesPageModule)
          }
        ]
      },
      {
        path: 'transaction',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../transaction/transaction.module').then(m => m.TransactionPageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../more/more.module').then(m => m.MorePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/deliveries',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/deliveries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
