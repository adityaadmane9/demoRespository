import { LightningElement,wire } from 'lwc';
import {publish,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/counting_Update__c';// importing msgchannel

export default class PubLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;// MessageContext is variable used for saving the passed value from publish method 

    handleIncrement(){
        const payload={// payload where the messageChannal Fields are present
            operator:'addition',
            constant:1
        }
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);// publish() method contains three parameter-messageContext,payload,msgchannel_Name
    }

    handleDecrement(){
        const payload={
            operator:'subtract',
            constant:1
        }
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }

    handleMultiply(){
        const payload={
            operator:'multiply',
            constant:2
        }
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
}