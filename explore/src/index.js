/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	attributes: {
        exploreTitle: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		spanExploreTitle: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		exploreSubtitle: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		elementText1: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore1: {
			type: 'string',
			default: null,
		},
		elementText2: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore2: {
			type: 'string',
			default: null,
		},
		elementText3: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore3: {
			type: 'string',
			default: null,
		},
		elementText4: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore4: {
			type: 'string',
			default: null,
		},
		elementText5: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore5: {
			type: 'string',
			default: null,
		},
		elementText6: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrcExplore6: {
			type: 'string',
			default: null,
		},
		exploreButtonHref: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },

    },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
