import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { userService } from './service/app.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { FuseDatatableModule } from './main/content/datatable/datatable.module';




const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    },
    {
        path      : 'sample',
        redirectTo: 'sample'
    },
    {
        path      : 'datatable',
        redirectTo: 'datatable'
    }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,
        FuseSampleModule,
        FuseDatatableModule,
    ],
    providers: [userService],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
