import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MediaComponent } from './pages/media/media.component';

export const routes: Routes = [
    { path: '', component: MediaComponent },
    { path: 'admin', component: ProductsComponent },
];
