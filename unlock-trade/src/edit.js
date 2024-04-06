/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import {  URLInput } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { RichText, MediaUpload } from '@wordpress/block-editor';

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
        unlockTitle, spanUnlock, leftStartText, buttonHref
    } = attributes;

	console.log(buttonHref);

	return (
		<section class="unlock" { ...useBlockProps() }>
        <div class="wrapper">
            <div class="wrapper start-trade-wrapper row">
                <div class="unlock-left-start col">
					<div class="row align-center">
						<RichText
							tagName="div"
							className='unlock-start-trade-title title'
							value={ unlockTitle }
							onChange={ ( newUnlockTitle) => setAttributes( { unlockTitle: newUnlockTitle } ) }
							placeholder="Enter title here..."
						/>
						<RichText
							tagName="span"
							className='accent'
							value={ spanUnlock }
							onChange={ ( newSpanUnlock ) => setAttributes( { spanUnlock: newSpanUnlock } ) }
							placeholder="Enter subtitle here..."
						/>
					</div> 
					<RichText
						tagName="div"
						className='left-start-text light-text'
						value={ leftStartText }
						onChange={ ( newLeftStartText) => setAttributes( { leftStartText: newLeftStartText } ) }
						placeholder="Enter title here..."
					/>
                    <URLInput
						value={buttonHref}
						onChange={(value) => setAttributes({ buttonHref: value })}
            		/>
                </div>
            </div>
        </div>
    </section>
	);
}

