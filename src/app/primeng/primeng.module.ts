import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    AvatarModule,
    RadioButtonModule,
    InputMaskModule,
    FileUploadModule,
    InputTextareaModule,
    DropdownModule,
    GalleriaModule,
    CalendarModule,
    ButtonModule,
    ToolbarModule,
    MenuModule,
    CardModule,
    InputTextModule,
    AvatarModule,
    TooltipModule,
    InputNumberModule,
    TableModule,
    CheckboxModule

  ],
  exports: [
    ButtonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    AvatarModule,
    RadioButtonModule,
    InputMaskModule,
    FileUploadModule,
    InputTextareaModule,
    DropdownModule,
    GalleriaModule,
    CalendarModule,
    ToolbarModule,
    MenuModule,
    CardModule,
    InputTextModule,
    AvatarModule,
    TableModule,
    TooltipModule,
    InputNumberModule,
    CheckboxModule

  ]
})
export class PrimengModule { }
