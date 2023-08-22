import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServService {
  constructor(private http: HttpClient) { }

  userLogin!: string;
  userPassw!: string;
}
