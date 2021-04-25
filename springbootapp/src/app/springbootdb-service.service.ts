import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringbootdbServiceService {

  private url = 'http://localhost:8285/all';
  constructor(
    private httpCliente:HttpClient
  ) {

  }


  public  get(){
    this.httpCliente.get(this.url).subscribe(data =>
      console.log(data));
  }
}
