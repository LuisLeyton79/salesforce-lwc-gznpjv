import { api, LightningElement } from 'lwc';

export default class App extends LightningElement {
 @api name = 'Dios';
 firstName = 'Web';
 lastName = 'Component';
 isTemplateOne = false;

 contacts = [
  {
      Id: '003171931112854375',
      Name: 'Amy Taylor',
      Title: 'COO',
  },
  {
      Id: '003192301009134555',
      Name: 'Michael Jones',
      Title: 'CTO',
  },
  {
      Id: '003848991274589432',
      Name: 'Jennifer Wu',
      Title: 'CEO',
  },
];

 handleInput(event){
   this.name = event.target.value;
 };
 get UpperCaseFullName(){   
  const  fullName = `${this.firstName} ${this.lastName}`;
  return fullName.trim().toUpperCase();
 }

}