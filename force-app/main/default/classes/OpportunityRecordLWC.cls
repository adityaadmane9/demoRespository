public with sharing class OpportunityRecordLWC {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityRecordLWC(String accId, Integer amt) {
        return [SELECT Id, Name, Amount from Opportunity where accountId =:accId and Amount < :amt];
    }
}
