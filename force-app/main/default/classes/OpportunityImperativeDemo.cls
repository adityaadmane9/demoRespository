public with sharing class OpportunityImperativeDemo {
    @AuraEnabled
    public static List<Player__c> getPlayers() {
        return [SELECT Id, Name from Player__c Limit 4];
    }
}
