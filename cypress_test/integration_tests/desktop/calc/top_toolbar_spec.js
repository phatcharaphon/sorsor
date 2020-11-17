/* global describe it cy beforeEach require afterEach expect*/

var helper = require('../../common/helper');
var calcHelper = require('../../common/calc_helper');

describe('Top toolbar tests.', function() {
	var testFileName = 'top_toolbar.ods';

	beforeEach(function() {
		helper.beforeAll(testFileName, 'calc');

		calcHelper.clickOnFirstCell();
	});

	afterEach(function() {
		helper.afterAll(testFileName, this.currentTest.state);
	});

	it('Remove cell border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();
		 
		//Add left border
		cy.get('.w2ui-tb-image.w2ui-icon.frame02')
			 .click({force: true});
			 
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-left: 1px solid #000000');
		
		// Then remove it
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame01')
			 .click({force: true});
			 
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('not.have.attr', 'style');
	});
	
	it('Apply left border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame02')
			 .click({force: true});
			 
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-left: 1px solid #000000');
	});

	it('Apply right border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame03')
			 .click({force: true});

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-right: 1px solid #000000');
	});

	it('Apply left and right border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame04')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-left: 1px solid #000000; border-right: 1px solid #000000');
	});

	it('Apply top border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame05')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-top: 1px solid #000000');
	});

	it('Apply bottom border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame06')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-bottom: 1px solid #000000');
	});
	
	it('Apply top and bottom border', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame07')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000');
	});

	it('Apply border for all sides', function() {
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame08')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
	});

	it('Apply horizontal borders for multiple cells', function() {
		calcHelper.selectAllMobile();
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame09')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should(function(cells) {
				expect(cells).to.have.lengthOf(4);
				for (var i = 0; i < cells.length; i++) {
					expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000');
				}
			});
	});

	it('Apply horizontal inner borders and vertical outer borders', function() {
		calcHelper.selectAllMobile();
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame10')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should(function(cells) {
				expect(cells).to.have.lengthOf(4);
				for (var i = 0; i < cells.length; i++) {
					if (i == 0)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000');
					else if (i == 1)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000');
					else if (i == 2)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000');
					else
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000');
				}
			});
	});

	it('Apply vertical inner borders and horizontal outer borders', function() {
		calcHelper.selectAllMobile();
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame11')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should(function(cells) {
				expect(cells).to.have.lengthOf(4);
				for (var i = 0; i < cells.length; i++) {
					if (i == 0)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
					else if (i == 1)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
					else if (i == 2)
						expect(cells[i]).to.have.attr('style', 'border-left: 1px solid #000000; border-right: 1px solid #000000');
					else
						expect(cells[i]).to.have.attr('style', 'border-left: 1px solid #000000; border-right: 1px solid #000000');
				}
			});
	});

	it('Apply all inner and outer borders', function() {
		calcHelper.selectAllMobile();
		cy.get('#tb_editbar_item_setborderstyle')
			.click();

		cy.get('.w2ui-tb-image.w2ui-icon.frame12')
			 .click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should(function(cells) {
				expect(cells).to.have.lengthOf(4);
				for (var i = 0; i < cells.length; i++) {
					if (i == 0)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
					else if (i == 1)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
					else if (i == 2)
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
					else
						expect(cells[i]).to.have.attr('style', 'border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000');
				}
			});
	});

	it('Clear Direct formatting.', function() {
		cy.get('#tb_editbar_item_bold')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td b')
			.should('exist');

		cy.get('#tb_editbar_item_reset')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td b')
			.should('not.exist');
		
	});

	it('Apply font style.', function() {
		cy.get('#tb_editbar_item_fonts')
			.click();

		cy.contains('.select2-results__option','Alef')
			 .click({force: true});
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td font')
		    .should('have.attr', 'face', 'Alef');
	});

	it('Apply font size.', function() {
		cy.get('#tb_editbar_item_fontsizes')
			.click();

		cy.contains('.select2-results__option','12')
			 .click({force: true});
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td font')
		    .should('have.attr', 'size', '3');
	});

	it('Apply bold font.', function() {
		cy.get('#tb_editbar_item_bold')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td b')
			.should('exist');
	});

	it('Apply underline.', function() {
		cy.get('#tb_editbar_item_underline')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td u')
			.should('exist');
	});

	it('Apply italic.', function() {
		cy.get('#tb_editbar_item_italic')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td i')
			.should('exist');
	});

	it('Apply strikethrough.', function() {
		cy.get('#tb_editbar_item_strikeout')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td s')
			.should('exist');
	});

	it('Apply highlight color.', function() {
		cy.get('#tb_editbar_item_backgroundcolor')
			.click();

		cy.get('.w2ui-color [name="8E7CC3"]')
			.click();
		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'bgcolor', '#8E7CC3');
	});

	it('Apply font color.', function() {
		cy.get('#tb_editbar_item_fontcolor')
			.click();

		cy.get('.w2ui-color [name="FFF2CC"]')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td font')
			.should('have.attr', 'color', '#FFF2CC');
	});

	it('Add/Delete decimal places', function() {
		// Add decimal place
		cy.get('#tb_editbar_item_numberformatincdecimals')
			.click();

		calcHelper.selectAllMobile();

		var regex = new RegExp(';0;0.0$');
		cy.get('#copy-paste-container table td')
			.should('have.attr', 'sdnum')
			.should('match', regex);

		// Delete Decimal place
		calcHelper.clickOnFirstCell();

		cy.get('#tb_editbar_item_numberformatdecdecimals')
			.click();

		calcHelper.selectAllMobile();

		regex = new RegExp(';0;0$');
		cy.get('#copy-paste-container table td')
			.should('have.attr', 'sdnum')
			.should('match', regex);
	});

	it('Format as currency.', function() {
		cy.get('#tb_editbar_item_numberformatcurrency')
			.click();

		calcHelper.selectAllMobile();

		var regex = new RegExp(';0;\\[\\$\\$-409]#,##0.00;\\[RED]-\\[\\$\\$-409]#,##0.00$');
		cy.get('#copy-paste-container table td')
			.should('have.attr', 'sdnum')
			.should('match', regex);
	});

	it('Format as Percent.', function() {
		cy.get('#tb_editbar_item_numberformatpercent')
			.click();

		calcHelper.selectAllMobile();

		var regex = new RegExp(';0;0.00%$');
		cy.get('#copy-paste-container table td')
			.should('have.attr', 'sdnum')
			.should('match', regex);
	});

	it('Apply left/right alignment', function() {
		// Set right aligment first
		cy.get('#tb_editbar_item_textalign .w2ui-tb-down')
			.click();

		cy.contains('.menu-text', 'Align Right')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'align', 'right');

		// Change alignment back
		calcHelper.clickOnFirstCell();

		cy.get('#tb_editbar_item_textalign .w2ui-tb-down')
			.click();

		cy.contains('.menu-text', 'Align Left')
			.click();

		calcHelper.selectAllMobile();

		cy.get('#copy-paste-container table td')
			.should('have.attr', 'align', 'left');
	});

});
