
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@clients/app/app.module';


const bootstrap  = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }


