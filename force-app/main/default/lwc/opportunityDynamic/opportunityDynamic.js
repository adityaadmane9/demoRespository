import { LightningElement, api, wire} from 'lwc';
import getOpportunityRecordLWC from '@salesforce/apex/OpportunityRecordLWC.getOpportunityRecordLWC';

export default class OpportunityDynamic extends LightningElement {
    @api recordId;// variable which store id
    @wire(getOpportunityRecordLWC, {accId:'$recordId'})
    opportunities;// all the return by method is save in opportunities
    
}