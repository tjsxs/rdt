import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class FrontpageService {
    private _baseUrl: string = 'https://www.reddit.com/.json?limit=10'
    private subUrl: string;
    private _commentUrl:string;

    constructor(private _http:Http){}

    getFP(){
        return this._http.get(this._baseUrl)
                .map(res => res.json());
    }


    getSubreddit(subreddit:string, cId:string){
        if(cId == null){
            this.subUrl = 'https://www.reddit.com/r/'+subreddit+'/.json?limit=10';
        } else{
            this.subUrl = 'https://www.reddit.com/r/'+subreddit+'/comments/'+ cId +'.json';
        }
        return this._http.get(this.subUrl)
                    .map(res => res.json());
    }
}