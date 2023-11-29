/**
 * Created by brandon.rogers on 2019-12-11.
 */

global with sharing class ckz_ProductService extends ccrz.ccServiceProduct{

    global virtual override Map<String, Object> getFieldsMap(Map<String, Object> inputData) {
        inputData = super.getFieldsMap(inputData);
        String objectFields = (String) inputData.get(ccrz.ccService.OBJECTFIELDS);
        objectFields += ',ckz_isAssortment__c';

        return new Map<String, Object>{
                ccrz.ccService.OBJECTFIELDS => objectFields
        };
    }

}