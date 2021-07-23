import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeystoreService {

  public get sparcSciCrunchApiKey(): string | undefined {
    return localStorage.getItem('SCICRUNCH_API_KEY') || 'no longer needed :-)';
  }
  public set sparcSciCrunchApiKey(key: string | undefined) {
    if (key && key.trim().length > 0) {
      localStorage.setItem('SCICRUNCH_API_KEY', key);
    } else {
      localStorage.removeItem('SCICRUNCH_API_KEY');
    }
  }
}
