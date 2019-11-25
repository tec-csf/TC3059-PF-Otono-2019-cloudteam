import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import {
  RequestTableOptions,
  ResponseTableItems,
  getTableHttpParams
} from '../../app-modules/table-module';

import {
  HttpErrorHandler,
  HandleError
} from '../../app-modules/app-services-module';

import { AppConfig } from '../../app.config';
const apiUrl = AppConfig.apiURL;

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandler,
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('SpacesService');
  }

  getSpaces = (spaceGroupId: string) => {
    return(options: RequestTableOptions) => {
      console.log('getSpaces');
      return this.httpClient.get(`${apiUrl}admin/spaces/${spaceGroupId}`, { params: getTableHttpParams(options) }).pipe(
        map((response: any) => {
          console.log('getSpaces response', response);
          return { items: response.items.docs, totalCount: response.items.totalDocs } as ResponseTableItems;
        }),
        catchError(this.handleError('getSpaces', null))
      );
    };
  }

  createSpace = (spaceData: any) => {
    console.log('createSpace', spaceData);
    return this.httpClient.post(`${apiUrl}admin/space`, spaceData).pipe(
      map((response: any) => {
        console.log('createSpace response', response);
        return response.item;
      }),
      catchError(this.handleError('createSpace', null))
    );
  }

  getSpace = (spaceId: string) => {
    console.log('getSpace', spaceId);
    return this.httpClient.get(`${apiUrl}admin/space/${spaceId}`).pipe(
      map((response: any) => {
        console.log('getSpace response', response);
        return response.item;
      }),
      catchError(this.handleError('getSpace', null))
    );
  }

  updateSpace = (spaceId: string, spaceData: any) => {
    console.log('updateSpace', spaceData);
    return this.httpClient.patch(`${apiUrl}admin/space/${spaceId}`, spaceData).pipe(
      map((response: any) => {
        console.log('updateSpace response', response);
        return response.item;
      }),
      catchError(this.handleError('updateSpace', null))
    );
  }

  deleteSpace = (spaceId: string) => {
    console.log('deleteSpace', spaceId);
    return this.httpClient.delete(`${apiUrl}admin/space/${spaceId}`).pipe(
      map((response: any) => {
        console.log('deleteSpace response', response);
        return response.success;
      }),
      catchError(this.handleError('deleteSpace', null))
    );
  }
}
