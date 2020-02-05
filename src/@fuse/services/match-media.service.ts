import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FuseMatchMediaService
{
    activeMediaQuery: string;
    onMediaChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private MediaObserver: MediaObserver)
    {
        this.activeMediaQuery = '';

        // this.MediaObserver.asObservable().subscribe((change: MediaChange) => {
        //     if ( this.activeMediaQuery !== change.mqAlias )
        //     {
        //         this.activeMediaQuery = change.mqAlias;
        //         this.onMediaChange.next(change.mqAlias);
        //     }
        // });
    }
}
