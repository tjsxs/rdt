import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class FrontpageService {
    private _baseUrl: string = 'https://www.reddit.com/.json?limit=10'
    private subUrl: string;
    constructor(private _http:Http){}


    getSubreddit(subreddit:string){
        this._baseUrl  = 'https://www.reddit.com/r/'+subreddit+'/.json?limit=10';
        return this._http.get(this._baseUrl)
                    .map(res => res.json());
    }
}