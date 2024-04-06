/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document.addEventListener("DOMContentLoaded", function() {
    const splide = new Splide('.splide', {
        type   : 'loop',
        perPage: 8,
        arrows: false,
        pagination: false,
        autoScroll: {
        speed: 1,
        rewind: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        },
        breakpoints: {
        1800: {
            perPage: 7,
        },
        1600: {
            perPage: 6,
        },
        1360: {
            perPage: 5,
        },
        1140: {
            perPage: 4,
        },
        904: {
            perPage: 3,
        },
        767: {
            perPage: 2,
        },
        400: {
            perPage: 2,
        }
        }
        
    });
splide.mount(window.splide.Extensions);
});


/* eslint-enable no-console */
