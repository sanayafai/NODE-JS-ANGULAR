import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule, InputTextModule, MenubarModule} from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/components/common/messageservice';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
//    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ToastModule

  ],
  exports: [CardModule,
    InputTextModule,
    ButtonModule, MenubarModule, ToastModule],
  providers: [MessageService]
})
export class UIModule {
}
