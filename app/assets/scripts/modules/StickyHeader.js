import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = $('.page-section');
        this.headerLink = $('.primary-nav a');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLink.smoothScroll();
    }

    createHeaderWaypoint() {
        const that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: (direction) => {
                if (direction == 'down') {
                this.siteHeader.addClass('site-header--dark');
                } else {
                this.siteHeader.removeClass('site-header--dark');
                
                }
            }
        });
    }

    createPageSectionWaypoints() {
        const that = this;
        this.pageSections.each(function() {
            const currentPageSection = this;
            new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                   if (direction == 'down') {
                    const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                    that.headerLink.removeClass('is-current-link');
                    $(matchingHeaderLink).addClass('is-current-link');
                   }
               },
               offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == 'up') {
                    const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                    that.headerLink.removeClass('is-current-link');
                    $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            }) 
        });
    }
}

export default StickyHeader;