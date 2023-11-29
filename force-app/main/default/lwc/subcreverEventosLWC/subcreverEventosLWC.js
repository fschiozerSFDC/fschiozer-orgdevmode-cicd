import { LightningElement} from 'lwc';
import { subscribe, unsubscribe, onError} from 'lightning/empApi';

export default class SubcreverEventosLWC extends LightningElement {


    channelName = '/data/Employee__ChangeEvent';
    isSubscribeDisabled = false;
    isUnsubscribeDisabled = !this.isSubscribeDisabled;
    lastEvent = '';

    subscription = {};
/*
    // getter for productId
    get lastEvent(){
        return `${this.lastEvent}`;
    }
*/
    // Tracks changes to channelName text field
    handleChannelName(event) {
        this.channelName = event.target.value;
    }

    // Initializes the component
    connectedCallback() {
        // Register error listener
        this.registerErrorListener();
    }

    // Handles subscribe button click
    handleSubscribe() {

        // o this o javascript dentro da funções significa a função e não a classe
        // para fazer o this ser a classe, pode fazer como abaixo, com o bind ou com => na function comentada.
        // Callback invoked whenever a new event message is received
        const messageCallback = function (response) {

            this.lastEvent = JSON.stringify(response);
            console.log('New message received: ', this.lastEvent);
        }.bind(this);

        /*
        const messageCallback = (response) => {

            this.lastEvent = JSON.stringify(response);
            console.log('New message received: ', this.lastEvent);
        };
        */

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            console.log(
                'Subscription request sent to: ',
                JSON.stringify(response.channel)
            );

            this.subscription = response;
            this.toggleSubscribeButton(true);
        });
    }

    // Handles unsubscribe button click
    handleUnsubscribe() {
        this.toggleSubscribeButton(false);

        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, (response) => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }

    toggleSubscribeButton(enableSubscribe) {
        this.isSubscribeDisabled = enableSubscribe;
        this.isUnsubscribeDisabled = !enableSubscribe;
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError((error) => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }
}