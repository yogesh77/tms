import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseDatatableComponent } from './datatable.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
const routes = [
    {
        path     : 'datatable',
        component: FuseDatatableComponent
    }
];

@NgModule({
    declarations: [
        FuseDatatableComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule, PdfViewerModule
    ],
    exports     : [
        FuseDatatableComponent
    ]
})

export class FuseDatatableModule
{
}
