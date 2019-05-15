import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home/near-me', pathMatch: 'full' },
  { path: 'home', component: TabsPage, children: [
    { path: 'near-me', loadChildren: './near-me/near-me.module#NearMePageModule' },
    { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
    { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
    { path: '', redirectTo: 'home/near-me', pathMatch: 'full' }
  ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
