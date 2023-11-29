({
	buscarcep : function(component, event, helper) {
        
        //helper.helperMethod();

		let attrcep = component.get("v.cep");
		//alert("ahhhh: " + attrcep);
		//component.set("v.localidade", attrcep);

		helper.handleAjaxRequest(component, event, attrcep);

		//let cep_to_search = component.find("idcep");
        //alert("ahhhh: " + cep_to_search.get("v.value"));
		//component.set("v.localidade", cep_to_search.get("v.value"));
		
	}
})