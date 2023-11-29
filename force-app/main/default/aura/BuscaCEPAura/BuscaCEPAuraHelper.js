({
	handleAjaxRequest : function(component, event, cep) {

		const xhr = new XMLHttpRequest();

        const number = component.get('v.number');

        const url = 'https://viacep.com.br/ws/' + cep + '/json/';

		console.log('calling ... ' + url);

        xhr.open('GET', url, true);

        xhr.onload = function() {
            
			if(this.status === 200) {

                const response = JSON.parse(this.responseText);

				component.set("v.ibge", response.ibge);
				component.set("v.uf", response.uf);
				component.set("v.localidade", response.localidade);
				component.set("v.bairro", response.bairro);
				component.set("v.logradouro", response.logradouro);

				$A.util.removeClass(component.find("reponsebox"), "slds-hide");

            } else {
				console.log("we are in bad shape: " + this.status);
			}
        };

        xhr.send();

	}
})