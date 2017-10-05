import {Injectable} from '@angular/core';

@Injectable()
export class SharedService{
    public category:string;
    constructor(){
        
    }
    getCategory(){
        return this.category;
    }
    setCategory(category:any){
        this.category = category;
    }
}