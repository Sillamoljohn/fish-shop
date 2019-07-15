import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
    fishData = {};
    private source = new BehaviorSubject(this.fishData);
    Fishdetails = this.source.asObservable();

    constructor() { }

    setData(message: string) {
        this.source.next(message);
    }

}
