import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementsStartupService {

  constructor() { }

  init() {
    this.createToken();
  }

  createToken() {
    console.log('createToken');
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('token', 'dummy');
    }
  }
}
