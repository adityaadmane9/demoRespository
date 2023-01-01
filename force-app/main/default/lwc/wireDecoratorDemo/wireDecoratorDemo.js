import { LightningElement, wire,track } from 'lwc';
import getPlayerList from '@salesforce/apex/wireDecoratorDemo.getPlayerList';
const columns= [
    {label:'Name', fieldName:'Name'},
    {label:'Player Id', fieldName:'Id'},
]
export default class WireDecoratorDemo extends LightningElement {

    @track columns= columns;
    @track data=[];

    @wire(getPlayerList)
    wirePlayers({data,error}){
        if(data){
            this.data=data;
        }else if(error){
            console.log('error occured');
        }
    }
}