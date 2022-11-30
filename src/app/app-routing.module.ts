import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard],
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),

    // canLoad: [AuthGuard],
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./pages/intro/intro.module').then((m) => m.IntroPageModule),
    canActivate: [AuthGuard],
  },

  {
    path: '',
    redirectTo: '/intrests',
    pathMatch: 'full',
  },
  {
    path: 'forget-password',
    loadChildren: () =>
      import('./pages/forget-password/forget-password.module').then(
        (m) => m.ForgetPasswordPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('./pages/change-password/change-password.module').then(
        (m) => m.ChangePasswordPageModule
      ),
  },
  {
    path: 'intrests',
    loadChildren: () =>
      import('./pages/intrests/intrests.module').then(
        (m) => m.IntrestsPageModule
      ),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./pages/event/event.module').then((m) => m.EventPageModule),
  },
  {
    path: 'codeModal',
    loadChildren: () =>
      import('./pages/code-modal/code-modal.module').then(
        (m) => m.CodeModalPageModule
      ),
  },
  {
    path: 'errorModal',
    loadChildren: () =>
      import('./pages/error-modal/error-modal.module').then(
        (m) => m.ErrorModalPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
