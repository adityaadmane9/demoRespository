import { LightningElement,api } from 'lwc';

export default class ChildLwcInParentToChild extends LightningElement {
    // make public the varible we use api decorator
    @api counter;
    
    @api addValueToCounter(){
        this.counter += 100;
    }
}