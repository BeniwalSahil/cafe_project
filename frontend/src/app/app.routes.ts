import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { MenuPageComponent } from './menu-page.component';
import { StoryPageComponent } from './story-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'menu', component: MenuPageComponent },
  { path: 'our-story', component: StoryPageComponent },
  { path: '**', redirectTo: '' },
];
