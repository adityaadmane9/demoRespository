import { LightningElement } from 'lwc';

export default class ApiDecoratorParentComp extends LightningElement {

    handleClickHere(){
        this.template.querySelector("c-api-decorator-chinld-comp").handleChangeValue();
    }
}