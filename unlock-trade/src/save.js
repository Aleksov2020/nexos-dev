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
	const { unlockTitle, spanUnlock, leftStartText, buttonHref
	} = attributes;
    
	return (
        <section class="unlock"{ ...useBlockProps.save() }>
            <div class="wrapper">
                <div class="wrapper start-trade-wrapper row">
                    <div class="unlock-left-start col">
                        <div class="unlock-start-trade-title title">
                            {unlockTitle}<br /> <span class="accent">{spanUnlock}</span>
                        </div>
                        <div class="left-start-text light-text">
                            {leftStartText}
                        </div>
                        <a href={buttonHref} class="button">
                            Join Us Now
                        </a>
                    </div>
                    <div class="right-start col">
                        
                    </div>
                    <div class="image-unlock">
        
                    </div>
                </div>
            </div>
        </section>
	);
}
