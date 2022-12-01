import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  upload(currentFile: File) {
    throw new Error('Method not implemented.');
  }
  ApiUrl = environment.ApiUrl;

  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get(`${this.ApiUrl}${url}`);
  }


  logindata(url: string,data:any){
    return this.http.post(`${this.ApiUrl}${url}`,data);
  }
 postdata(url:string,data:any){
  return this.http.post(`${this.ApiUrl}${url}`,data);
 }

 empPostData(url:string,data:any,id:any){
  return this.http.post(`${this.ApiUrl}${url}${id}`,data);

 
 }
 updatedata(url:String, id:any ,data: any){
 
  return this.http.post(`${this.ApiUrl}${url}${id}`,data)
    
}

}
