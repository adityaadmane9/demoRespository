import { LightningElement } from 'lwc';

export default class ParentCompOfChildToParent extends LightningElement {
    countValue=0;
    handleAdd(){
        this.countValue++;
    }
    handlesub(){
        this.countValue--;
    }
}