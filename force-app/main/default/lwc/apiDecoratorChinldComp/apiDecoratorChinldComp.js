import { LightningElement ,api} from 'lwc';


export default class ApiDecoratorChinldComp extends LightningElement {

    @api item="salesforce noob";

    @api handleChangeValue(){

        this.item="this is child function";
    }

     
}