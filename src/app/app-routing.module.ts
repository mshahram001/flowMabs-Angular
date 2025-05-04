import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'header',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HeaderComponent },
    ]
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'footer',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
    ]
  },
  {
  path: 'products/product-type/reagents',
  component: LayoutComponent,
  loadChildren: () => import('./products/reagents/reagents-routing.module').then(m => m.ReagentsRoutingModule),
},
{
  path: 'about-us/our-company',
  component: LayoutComponent,
  loadChildren: () => import('./about-us/our-company/our-company-routing.module').then(m => m.OurComapnyRoutingModule)
},
{
  path: 'contact-us',
  component: LayoutComponent,
  loadChildren: () => import('./contact-us/contact-us-routing.module').then(m => m.ContactUsRoutingModule)
},
{
  path: 'products/product-type/reagents/search-result',
  component: LayoutComponent,
  loadChildren: () => import('./products/search-result/search-result-routing.module').then(m => m.SearchResultRoutingModule)
},
{
  path: 'register',
  loadChildren: () => import('./register/register-routing.module').then(m => m.RegisterRoutingModule)
},
{
  path: 'login',
  loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule)
},
{
  path: 'my-cart',
  component: LayoutComponent,
  loadChildren: () => import('./my-cart/my-cart-routing.module').then(m => m.MyCartRoutingModule)
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
