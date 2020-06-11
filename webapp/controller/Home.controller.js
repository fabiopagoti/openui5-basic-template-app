sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

			var oModel = new sap.ui.model.json.JSONModel("http://localhost:3002/http://api.open-notify.org/astros.json");
			this.getView().setModel(oModel);

		}
	});
});