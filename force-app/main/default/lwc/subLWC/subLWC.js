
import { LightningElement, wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/counting_Update__c';// importing msgchannel


export default class SubLWC extends LightningElement {
    counter=0;
    subscription=null;//subscribetomessageChannel() function check whether subscription null or not

    @wire(MessageContext)// wire decorator cause unsubscribe()method not require
    messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();// first call this function in DOM
    }
    subscribeToMessageChannel(){
        this.subscription=subscribe(// this method take three param-msgContext,msgChannel,method that handle the published msg
            this.messageContext,
            COUNTING_UPDATE_CHANNEL,
            (message) => this.handleMessage(message)//msg in used to store publish value
        );
    }
    handleMessage(message){
       // alert("message:"+JSON.stringify(message));

    //logic
       if(message.operator == 'addition'){
        this.counter += message.constant;
       }
       else if(message.operator == 'subtract'){
        this.counter -= message.constant;
       }
       else if(message.operator == 'multiply'){
        this.counter *= message.constant;
       }
    }
}