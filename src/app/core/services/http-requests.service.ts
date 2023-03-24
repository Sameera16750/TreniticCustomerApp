import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http:HttpClient) { }

  public request(endpointConfig:any):Observable<any>{
    if (endpointConfig.TYPE==="POST"){
      return this.http.post(endpointConfig.URL,endpointConfig.DATA)
    }else if(endpointConfig.TYPE==="PUT"){
      if(endpointConfig.VARIABLES!=null){
        return this.http.put(endpointConfig.URL+"/"+endpointConfig.VARIABLES,endpointConfig.DATA)
      }else {
        return this.http.put(endpointConfig.URL,endpointConfig.DATA)
      }
    }else{
      if(endpointConfig.DATA===null){
        return this.http.get(endpointConfig.URL)
      }else {
        let params=new HttpParams().append(endpointConfig.DATA.key,endpointConfig.DATA.value);
        return this.http.get(endpointConfig.URL,{params:params})
      }
    }
  }
}
