import { LightningElement } from 'lwc';


export default class ChildCompOfChildToParent extends LightningElement {
    handleAdd(){
        this.dispatchEvent(new CustomEvent('addition'));
    }
    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtraction'));
    }
}