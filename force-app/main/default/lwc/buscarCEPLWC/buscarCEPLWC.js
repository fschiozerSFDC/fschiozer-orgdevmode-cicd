import { LightningElement, api, wire } from 'lwc';
import buscarCEP from '@salesforce/apex/BuscarCEPLWCController.buscarCEP';

export default class BuscarCEPLWC extends LightningElement {

    ibge;
    uf;
    localidade;
    bairro;
    logradouro;
    ready = false;
    cep;

    changeCEPHandler(event) {
        this.cep = event.target.value;
    }

    ///@wire (buscarCEP, { cep: cep }) buscarCEP;

    handleClick(event) {

        console.log('CEP: ' + this.cep);

        buscarCEP({

            cep: this.cep

        })
        .then((result) => {


            var responseObj = JSON.parse(result);

            this.ibge = responseObj.ibge;
            this.uf = responseObj.uf;
            this.localidade = responseObj.localidade;
            this.bairro = responseObj.bairro;
            this.logradouro = responseObj.logradouro;
            this.ready = true;
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            console.error(error.message);
        });
    }

    
}