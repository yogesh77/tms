import { Component } from '@angular/core';
import { userService } from '../../../service/app.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'fuse-datatable',
    templateUrl: './datatable.component.html',
    styleUrls  : ['./datatable.component.scss']
})
export class FuseDatatableComponent
{
    records: any[];
    pdfSrc: string = 'assets/document/Stretches_yoga.pdf';
    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;
    constructor(private fuseTranslationLoader: FuseTranslationLoaderService,
        private userservice: userService)
    {
        this.records = [];
        userservice.accessApi()
        .subscribe(  (res) => {
           for(let i in res){
               this.records.push(res[i]);
           }

        });

        this.fuseTranslationLoader.loadTranslations(english, turkish);
    }
    afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
        console.log('hell');
      }
    
      nextPage() {
        this.page++;
      }
    
      prevPage() {
        this.page--;
      }
}
