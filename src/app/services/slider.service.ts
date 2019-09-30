import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private apiKey = '93b9a81026a4a9128cefd16ccfdc478f3caa894e3312abd50ca78b5bb783e0f8';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getRandomPhoto(count?): Observable<any> {
    const quantity = count ? `&count=${count}` : '';
    return this.httpClient.get(`https://api.unsplash.com/photos/random?client_id=${this.apiKey}${quantity}`);
  }
}