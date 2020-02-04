import scrollingEffect from './scrolling'
scrollingEffect();

import enableMenu from './menu';
enableMenu();

import enableCarousels from './carousels';
enableCarousels();

import { oldWebCleanup } from './cache-cleanup'
oldWebCleanup()

window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#252e39"
        },
        "button": {
            "background": "#14a7d0"
        }
    },
    "content": {
        "message": "This website uses cookies because it's a necessary evil that helps us deliver our services and we have to let you know.",
        "dismiss": "Got it!",
        "link": "Learn more",
        "href": "/cookiepolicy"
    }
});