import { LightningElement } from 'lwc';
import publicarEvent from '@salesforce/apex/PublicarEventLWCController.publicarEvent';

export default class PublicarEventoLWC extends LightningElement {

    mensagem;
    result;

    changeInputHandler(event) {
        this.mensagem = event.target.value;
    }

    handleClick(event) {

        console.log('mensagem: ' + this.mensagem);

        publicarEvent({

            mensagem: this.mensagem

        })
        .then((res) => {

            this.result = res;
            console.log(result);
        })
        .catch((error) => {
            this.error = error;
            this.result = error.message;
        });
    }

    handleClickPublica(event) {

        console.log('handleClickPublica');

    }

}