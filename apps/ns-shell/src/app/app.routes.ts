import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'ng-mfe',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './appRoutes'
        })
            .then(m => m['appRoutes'])
            .catch(err => console.error('Oh no!', err))
    }
];