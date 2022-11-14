import { api, LightningElement } from 'lwc';

export default class App extends LightningElement {
 @api name = 'Dios';
 firstName = 'Web';
 lastName = 'Component';
 handleInput(event){
   this.name = event.target.value;
 };
 get UpperCaseFullName(){   
  const  fullName = `${this.firstName} ${this.lastName}`;
  return fullName.trim().toUpperCase();
 }

}