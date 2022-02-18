/// <reference types = "cypress" />

import { GooglePage } from "../page-classes/google-page";

describe ('google main page tests', () => {
    let googlePage;
    let searchItem = 'D'

    before('initialize page object ', () =>{
       googlePage = new GooglePage()
    })

    it('verify banner elements', () => {
        googlePage.verifyBannerElements();
    })

    it('verify google logo', () => {
        googlePage.verifyLogo();   
    })

    it('verify autocomplete list', () => {
        googlePage.verifyAutocompleteList(searchItem)
        
    })
})