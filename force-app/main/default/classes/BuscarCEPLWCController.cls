public with sharing class BuscarCEPLWCController {

    @AuraEnabled(cacheable=true)
    public static String buscarCEP(String cep) {

        System.debug('buscarCEP');


        Http h = new Http();
        String url = 'https://viacep.com.br/ws/' +  cep + '/json/';

        HttpRequest req = new HttpRequest();

        req.setEndpoint(url);
        req.setMethod('GET');

        HttpResponse res = h.send(req);

        System.debug('getBody: ' + res.getBody());
        return res.getBody();
    }

}