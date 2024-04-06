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
	const { empowerTitle, spanEmpower, empowerDescription, buttonHref
	} = attributes;

	console.log("Here")

	return (
	<section class="empower" { ...useBlockProps.save()}>
        <div class="wrapper emp-wrapper">
            <div class="empower-text-wrapper col">
                <div class="empower-title title">
                    {empowerTitle} <span class="accent"> {spanEmpower} </span>
                </div>
                <div class="emplower-description light-text">
                    {empowerDescription}
                </div>
                <a href={buttonHref} class="button">
                    Discover Our Platform
                </a>
            </div>
            <div class="emp-laptop"></div>
            <div class="emp-lighter"></div>  
        </div>
        <div class="line1 emp-line"></div>
    </section>
	);
}
