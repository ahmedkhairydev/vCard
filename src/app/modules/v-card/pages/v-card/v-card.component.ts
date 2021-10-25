import { Component, OnInit } from '@angular/core';
import * as vCard from 'qr-code-and-vcard/dist/QrCode';

@Component({
  selector: 'app-v-card',
  templateUrl: './v-card.component.html',
  styleUrls: ['./v-card.component.scss']
})
export class VCardComponent implements OnInit {

  vCard;
  card: { version: string; fullName: string; firstName: string; middleName: string; lastName: string; organization: string; workPhone: string; homePhone: string; birthday: string; anniversary: string; title: string; department: string; email: string; workEmail: string; source: string; note: string; socialUrls: {}; };

  constructor() { }

  ngOnInit(): void {
    this.card = {
      version: '3.0',
      fullName: 'Eslam Shohdy',
      firstName: 'Eslam',
      middleName: '',
      lastName: 'Shohdy',
      organization: 'YOUXEL Technology',
      workPhone: '+201016660497',
      homePhone: '',
      birthday: "8/9/1984",
      anniversary: "",
      title: 'Senior Project Manager',
      department: 'Operation Manager',
      email: '',
      workEmail: 'eshohdy@youxel.com',

      source: '',
      note: '',
      socialUrls: {}
    };

    this.vCard = vCard.createVCardQr(this.card, { typeNumber: 10, cellSize: 2 });
    console.log(vCard);
  }

  jwt =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJnb29nbGUiLCJvcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3QiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwOi8vbG9jYWxob3N0OjEzMzciLCJodHRwczovL3NhdmUtdG8tZ29vZ2xlLXBheS5zdGFja2JsaXR6LmlvIiwiaHR0cHM6Ly9ncGF5LWxpdmUtZGVtby1zdGFnaW5nLndlYi5hcHAiXSwiaXNzIjoic29jLWxveWFsdHlhcGktZGVtb0BhcHBzcG90LmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ0eXAiOiJzYXZldG93YWxsZXQiLCJwYXlsb2FkIjp7ImxveWFsdHlPYmplY3RzIjpbeyJpZCI6IjMzODgwMDAwMDAwMTAwNDg2NjguYWxleF9hdF9leGFtcGxlLmNvbS1ncGF5LXJld2FyZHMifV19LCJpYXQiOjE2MTU1OTQ2NTF9.ZbEvdvkRh5nCuBq85bBEjR6216L7j6W10nyVWpPSAZlaSe8O6hJ_Ig-TrrvFtn7aHucMZr4cTmttONrlaFU-gFKMYHMEJFiZ-qv58sE9dNUdgUwTJWWzH8aukltM0pCBLHcpvLXTCpGk4PoXWM4q5H6WIjP1Jem8v1_YGdV6J_UBNyAGqJUE5XJnDgHl2qGFilTmF0el6EBFQLnF2PuIvyZcWXgbXgJLZfx-opepVAgODW5BQjQ7li8QoDl3ffdESO2-7qWVm-VoxLb8eDh3z3gRktPb8APh_VsaAb8mjvNCLk_SOPrQhpuph4b0Rg4xnt59u5c87_eD2kT3_IuHxw';

  onSuccess = (event: CustomEvent): void => {
    console.log('success');
  };

  onFailure = (event: CustomEvent<Error>): void => {
    console.error('failure', event.detail);
  };
}
