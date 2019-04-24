import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreload } from './app-preload';
import { TodoComponent } from './components/todos-component/todos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  {
    path: 'todos',
    component: TodoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  preloadingStrategy: CustomPreload
})

@NgModule({
  imports: [routing],
  providers: [CustomPreload],
  exports: [RouterModule],
})
export class AppRoutingModule {}