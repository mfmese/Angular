import { NgModule } from '@angular/core';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { CoreModule } from 'src/app/core/core.module';
import { ModalPopupListComponent } from './modal-popup-list/modal-popup-list.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [SharedModule.components, ],
  entryComponents:[SharedModule.components],
  exports:[SharedModule.components]
})
export class SharedModule { 
  static components = [
    ModalPopupComponent,
    ModalPopupListComponent
  ];
}
