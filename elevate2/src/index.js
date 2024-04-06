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
        title: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		spanTitle: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle1: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle2: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle3: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle4: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle5: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle6: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle7: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextTitle8: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle1: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle2: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle3: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle4: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle5: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle6: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle7: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		tableTextSubtitle8: {
            type: 'string', // Тип атрибута: строка
            default: '', // Значение по умолчанию
        },
		imageSrc1: {
			type: 'string',
			default: null,
		},
		imageSrc2: {
			type: 'string',
			default: null,
		},
		imageSrc3: {
			type: 'string',
			default: null,
		},
		imageSrc4: {
			type: 'string',
			default: null,
		},
		imageSrc5: {
			type: 'string',
			default: null,
		},
		imageSrc6: {
			type: 'string',
			default: null,
		},
		imageSrc7: {
			type: 'string',
			default: null,
		},
		imageSrc8: {
			type: 'string',
			default: null,
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
