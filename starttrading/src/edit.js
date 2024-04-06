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
        startTradeTitle, spanTradeTitle, leftStartText, counterItem1, counterItem2, counterItem3,
		spanCounterItem1, spanCounterItem2, spanCounterItem3, buttonHref
    } = attributes;

    return (
        <section class="start-trade" { ...useBlockProps() }>
            <div class="wrapper start-trade-wrapper row">
                <div class="start-wrapper-inner row">
                    <div class="left-start col">
						<div class="row align-center">
							<RichText
							tagName="div"
							className='start-trade-title title'
							value={ startTradeTitle }
							onChange={ ( newStartTradeTitle ) => setAttributes( { startTradeTitle: newStartTradeTitle } ) }
							placeholder="Enter title here..."
							/>
							<RichText
								tagName="span"
								className='accent'
								value={ spanTradeTitle }
								onChange={ ( newSpanTradeTitle ) => setAttributes( { spanTradeTitle: newSpanTradeTitle } ) }
								placeholder="Enter accent here..."
							/>
						</div>
							<RichText
							tagName="div"
							className='left-start-text light-text'
							value={ leftStartText }
							onChange={ ( newleftStartText ) => setAttributes( { leftStartText: newleftStartText } ) }
							placeholder="Enter description here..."
						/>
                    </div>

                    <div class="right-start col">
						<div class="counters-wrapper col">
							<div class="row align-center">
								<RichText
									tagName="span"
									className='accent'
									value={ spanCounterItem1 }
									onChange={ ( newSpanCounterItem1 ) => setAttributes( { spanCounterItem1: newSpanCounterItem1 } ) }
									placeholder="Enter count here..."
								/>
								<RichText
									tagName="div"
									className='counter-item row'
									value={ counterItem1 }
									onChange={ ( newCounterItem1 ) => setAttributes( { counterItem1: newCounterItem1 } ) }
									placeholder="Enter name here..."
								/>
							</div>
							<div class="row align-center">
								<RichText
									tagName="span"
									className='accent'
									value={ spanCounterItem2 }
									onChange={ ( newSpanCounterItem2 ) => setAttributes( { spanCounterItem2: newSpanCounterItem2 } ) }
									placeholder="Enter count here..."
								/>
								<RichText
									tagName="div"
									className='counter-item row'
									value={ counterItem2 }
									onChange={ ( newCounterItem2 ) => setAttributes( { counterItem2: newCounterItem2 } ) }
									placeholder="Enter name here..."
								/>
							</div>
							<div class="row align-center">

								<RichText
									tagName="span"
									className='accent'
									value={ spanCounterItem3 }
									onChange={ ( newSpanCounterItem3 ) => setAttributes( { spanCounterItem3: newSpanCounterItem3 } ) }
									placeholder="Enter count here..."
								/>
								<RichText
									tagName="div"
									className='counter-item row'
									value={ counterItem3 }
									onChange={ ( newCounterItem3 ) => setAttributes( { counterItem3: newCounterItem3 } ) }
									placeholder="Enter name here..."
								/>
							</div>
						</div>
						<URLInput
							value={buttonHref}
							onChange={(value) => setAttributes({ buttonHref: value })}
						/>	
                	</div>
            	</div>
            
				<div class="image-start-trade">

				</div>
        	</div>
    </section>
    );
}


