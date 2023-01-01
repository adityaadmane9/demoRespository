import { LightningElement, track } from 'lwc';
import getPlayers from '@salesforce/apex/OpportunityImperativeDemo.getPlayers';
const columns=[
    {label:'Player Name', fieldName:'Name'},
    {label:'Player Id', fieldName:'Id'}
]
export default class ImperativeMethodDemo extends LightningElement {
    @track columns=columns;
    @track data=[]

    connectedCallback(){
        getPlayers()
        .then(result =>{
            this.data=result;
        })
        .catch(error=>{
            console.log('Error Occured');
        })
    }


}