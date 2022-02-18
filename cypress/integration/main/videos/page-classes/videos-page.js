import { googleSelectors } from "../../../../selectors/selectors";

export class VideosPage  {
    constructor (visit = true) {
       if(visit){
         cy.title().should('contain', 'videos')
        }
     }

     getYoutubeVideoDeatils(){
        cy.get(googleSelectors.searchResults).each(($el, $list) => {
            if($el.text().includes('YouTube')){
                cy.log($el.text());
            }
        })
     }
}