import { LightningElement } from 'lwc';

export default class ParentLwcInParentToChild extends LightningElement {
   //to make counterValue initially null or zero
    counterValue=0;

    //to pass parameter - event which hold the changeble values
    counterChange(event){
        // to make value to Integer we use parseInt method
        this.counterValue= parseInt(event.target.value);
        
    }
    counterClick(){
        // to call the method from child we use this syntax with .childMethodName
        this.template.querySelector('c-child-lwc-in-parent-to-child').addValueToCounter();
    }
}