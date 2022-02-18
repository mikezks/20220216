import { loadRemoteEntry } from '@angular-architects/module-federation';

// ab ng13: type:'module'
loadRemoteEntry({type:'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
	.catch(err => console.error(err))
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));
