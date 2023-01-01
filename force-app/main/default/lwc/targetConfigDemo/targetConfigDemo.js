import { LightningElement, wire, api } from 'lwc';
import getOpportunityRecordLWC from '@salesforce/apex/OpportunityRecordLWC.getOpportunityRecordLWC';

export default class TargetConfigDemo extends LightningElement {
    @api recordId;
    @api amount;
    @wire(getOpportunityRecordLWC, {accId:'$recordId', amt: '$amount'}) 
    opportunities;
}