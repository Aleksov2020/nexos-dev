/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const {attributes} = props;
	const {startTradeTitle, spanTradeTitle, leftStartText,
		counterItem1, counterItem2, counterItem3,
		spanCounterItem1, spanCounterItem2, spanCounterItem3, buttonHref
	} = attributes;
	return (
			<section class="start-trade" { ...useBlockProps.save() }>
            <div class="wrapper start-trade-wrapper row">
                <div class="start-trade-title-mobile title">
                    {startTradeTitle}   <span class="accent"> {spanTradeTitle}</span>
                </div>
                <div class="start-wrapper-inner row">
                    <div class="left-start col">
                        <div class="start-trade-title title">
							{startTradeTitle}     <br /> <span class="accent"> {spanTradeTitle}</span>
                        </div>
                        <div class="left-start-text light-text">
                            {leftStartText}
                        </div>
                    </div>
                    <div class="right-start col">
                        <div class="counters-wrapper col">
                            <div class="counter-item row">
                                <span class="accent">{spanCounterItem1}</span>
                                {counterItem1}
                            </div>
                            <div class="counter-item row">
                                <span class="accent">{spanCounterItem2}</span>
                                {counterItem2}
                            </div>
                            <div class="counter-item row">
                                <span class="accent">{spanCounterItem3}</span>
                                {counterItem3}
                            </div>
                        </div>
                        <a href={buttonHref} class="button">
                            Explore The Markets
                        </a>
                    </div>
                </div>
                <div class="image-start-trade"></div>
            </div>
        </section>
	);
}
