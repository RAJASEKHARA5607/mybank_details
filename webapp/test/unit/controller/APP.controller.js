/*global QUnit*/

sap.ui.define([
	"display_bank_details_of_employee/my_bank_details/controller/APP.controller"
], function (Controller) {
	"use strict";

	QUnit.module("APP Controller");

	QUnit.test("I should test the APP controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
