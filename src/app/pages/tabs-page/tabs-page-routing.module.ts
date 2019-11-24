import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: () => import('../users/users.module').then(m => m.UsersPageModule)
          }
        ]
      },
      {
        path: 'hotels',
        children: [
          {
            path: '',
            loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsPageModule)
          }
        ]
      },
      {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren: () => import('../restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
          }
        ]
      },
      {
        path: 'recreations',
        children: [
          {
            path: '',
            loadChildren: () => import('../recreations/recreations.module').then(m => m.RecreationsPageModule)
          }
        ]
      },
      {
        path: 'planner',
        children: [
          {
            path: '',
            loadChildren: () => import('../planner/planner.module').then(m => m.PlannerPageModule)
          }
        ]
      },
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

