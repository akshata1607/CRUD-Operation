import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API } from '../shared/app-list';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getEmp() {
    return this.http.get(BACKEND_URL + API.GET_EMP);
  }

  createEmp(empData: any) {
    return this.http.post(BACKEND_URL + API.CREATE_EMP, empData);
  }

  updateEmp(id: string, empData: any) {
    return this.http.patch(`${BACKEND_URL + API.UPDATE_EMP}/${id}`, empData);
  }

  deleteEmp(id: string) {
    return this.http.delete(`${BACKEND_URL + API.DELETE_EMP}/${id}`);
  }
}
