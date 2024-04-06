/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import {  URLInput } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const {
        empowerTitle, spanEmpower, empowerDescription, buttonHref
    } = attributes;
	return (
			<section class="empower"{ ...useBlockProps() }>
				<div class="wrapper emp-wrapper">
					<div class="empower-text-wrapper col">
						<div class="row align-center">
							<RichText
							tagName="div"
							className='empower-title title'
							value={ empowerTitle }
							onChange={ ( newEmpowerTitle ) => setAttributes( { empowerTitle: newEmpowerTitle } ) }
							placeholder="Enter title here..."
							/>
							<RichText
								tagName="span"
								className='accent'
								value={ spanEmpower }
								onChange={ ( newSpanEmpower ) => setAttributes( { spanEmpower: newSpanEmpower } ) }
								placeholder="Enter subtitle here..."
							/>
						</div>
						<RichText
							tagName="div"
							className='emplower-description light-text'
							value={ empowerDescription }
							onChange={ ( newEmpowerDescription ) => setAttributes( { empowerDescription: newEmpowerDescription } ) }
							placeholder="Enter description here..."
						/>
						<URLInput
							value={buttonHref}
							onChange={(value) => setAttributes({ buttonHref: value })}
						/>	
					</div>
				</div>
			</section>
	);
}
