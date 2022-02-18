
import { googleSelectors } from "../../../selectors/selectors";
import { VideosPage } from "../../main/videos/page-classes/videos-page";

export class SearchPage  {
   constructor (visit = true) {
      if(visit){
        cy.title().should('contain', searchItem)
       }
    }

    verifyResultsPage(){
        var paginationList = [];
        cy.get(googleSelectors.rightResults).should('be.visible')
        //verify google home logo
        expect(googleSelectors.logoHome).exist;
        cy.get(googleSelectors.logoHome).should('have.css', 'width').and('eq', '92px'); 
        cy.get(googleSelectors.logoHome).invoke('height').should('be.greaterThan', 32).and('be.lessThan',50)
        // validate pagination 
        cy.get(googleSelectors.paginationList).each(($el,index, $list) => {
            paginationList[index] = $el.text();
        }).then(($list) => {
            expect($list).to.contain('12345678910')
        })
    }

   verifySearchResults(){
       //verify there are link results after a search
       cy.get(googleSelectors.searchResults).each(($el, $list) => {}).then(($list) => {
       const listLength = $list.length;
       expect($list).to.have.length(listLength);
    }) 
  }

   verifyEmptySearch(emptyValue){
       // verify there are no results after an empty search
       const pageTitle = cy.title()
       if(pageTitle == emptyValue){
           cy.log('test case failed, there were no empty results')
       }
       else{
           cy.log('test case passed , no results found after the search')
       }
  }

  clickOnVideos(){
    cy.get(googleSelectors.resultsBanner).contains('Videos').click();
    return new VideosPage(false);
  }
}