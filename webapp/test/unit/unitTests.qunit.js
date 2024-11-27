/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"display_bank_details_of_employee/my_bank_details/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
