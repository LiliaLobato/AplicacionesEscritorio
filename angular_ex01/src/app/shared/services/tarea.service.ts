import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor( private httpClient: HttpClient) { 
   }

  getTareas(){
    const url: string = environment.apiUrl + 'todos'
    return this.httpClient.get(url)
  }

}

