public with sharing class PublicarEventLWCController {

    @AuraEnabled(cacheable=true)
    public static String publicarEvent(String mensagem) {

        System.debug('publicarEvent');
        String resultado;
        List<Mensageiro__e> eventsList = new List<Mensageiro__e>();

        Mensageiro__e evento = new Mensageiro__e();
        evento.Msg__c = mensagem;

        eventsList.add(evento);

        List<Database.SaveResult> results = EventBus.publish(eventsList);

        // Inspect publishing result for each event
        for (Database.SaveResult sr : results) {

            if (sr.isSuccess()) {

                resultado = 'Successfully published event.';
                System.debug(resultado);

            } else {
                Integer i = 1;
                for(Database.Error err : sr.getErrors()) {

                    resultado = 'Error ' + i + ' returned: ' + err.getStatusCode() + ' - ' + err.getMessage();
                    System.debug(resultado);
                    i++;
                }
            }
        }

        return resultado;

    }
}