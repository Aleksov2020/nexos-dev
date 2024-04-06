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
 * 
 */
registerBlockType( metadata.name, {
	attributes: {
		startTradeTitle: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		spanTradeTitle: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		leftStartText: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		spanCounterItem1: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		spanCounterItem2: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		spanCounterItem3: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		counterItem1: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		counterItem2: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		counterItem3: {
			type: 'string', // Тип атрибута: строка
			default: '', // Значение по умолчанию
		},
		buttonHref: {
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
