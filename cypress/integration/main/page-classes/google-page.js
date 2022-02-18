/// <reference types = "cypress" />

import { googleSelectors } from "../../../selectors/selectors"
import { SearchPage } from "../../search/page-classes/search-page"

export class GooglePage {
    constructor (visit = true) {
        // visit google page 
        cy.visit('').viewport(1280, 720)
        // main page assertions
        if(visit)   {
        cy.title().should('eq', 'Google')
        cy.document().should("have.property", "charset").and("eq", "UTF-8"); 
       }
    }

       verifyBannerElements(){
           //this method asserts the elements from google main page
           //verify banner elements
           cy.get(googleSelectors.googleMainBanner).should('have.length', 1);
           expect(googleSelectors.gmailLink).exist;
           expect(googleSelectors.imagesLink).exist;
       }

       verifyLogo(){
        //verify google logo
        expect(googleSelectors.googleLogo).exist;
        cy.get(googleSelectors.googleLogo).should('have.css', 'width').and('eq', '272px');
        cy.get(googleSelectors.googleLogo).should('have.css', 'height').and('eq', '92px');

    }

       searchByInput(searchItem){
           //perform a search using an input value
           cy.get(googleSelectors.inputSearch).type(searchItem + '{enter}');
           return new SearchPage(false);
       }

       verifyAutocompleteList(searchItem){
           //verify the amount of autocomplete suggestion items
        cy.get(googleSelectors.inputSearch).type(searchItem)
        cy.wait(1000)
        cy.get(googleSelectors.autocompleteElements).each(($el, $list) => {}).then(($list) => {
            expect($list).to.have.length(11);
        })
     }
}