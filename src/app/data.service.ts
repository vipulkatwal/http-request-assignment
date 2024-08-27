import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Item {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint for mock data

  constructor(private http: HttpClient) {}

  getData(): Observable<Item[]> {
    // Fetch data from the API and handle any errors
    return this.http
      .get<Item[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Handle client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Handle server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage); // Log the error for debugging
    return throwError(() => new Error(errorMessage)); // Return a user-friendly error message
  }
}
