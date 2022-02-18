import { GooglePage } from "../../main/page-classes/google-page";

describe ('search suite', () => {
    let googlePage;
    let searchPage;
    let videosPage;
    const searchItem = 'House';
    const emptyValue = '';

    beforeEach('perform a search using a search item', () => {
        googlePage = new GooglePage();
    })

    it('verify results page', () => {
        searchPage = googlePage.searchByInput(searchItem);
        searchPage.verifyResultsPage();
    })

    it('verify search elements', () => {
        searchPage = googlePage.searchByInput(searchItem);
        searchPage.verifySearchResults();
    })

    it('verify empty search criteria', () => {
        searchPage = googlePage.searchByInput(emptyValue);
        searchPage.verifyEmptySearch(emptyValue);
       
    })

    it('verify Youtube results', () => {
        searchPage = googlePage.searchByInput(searchItem);
        videosPage = searchPage.clickOnVideos();
        videosPage.getYoutubeVideoDeatils();
   })
})