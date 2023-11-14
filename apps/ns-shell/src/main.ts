import { initFederation } from '@angular-architects/module-federation';

initFederation('./assets/federation.manifest.json', true)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
