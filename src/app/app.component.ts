import { Component } from '@angular/core';
import { FrontpageService } from './services/fontpage.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [FrontpageService]
})
export class AppComponent {
    
    name = 'test';
    
    
}
