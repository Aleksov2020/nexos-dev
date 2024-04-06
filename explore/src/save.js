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
	const {exploreTitle, spanExploreTitle, exploreSubtitle,
		 imageSrcExplore1, imageSrcExplore2, imageSrcExplore3, imageSrcExplore4, imageSrcExplore5, imageSrcExplore6,
		 elementText1, elementText2, elementText3, elementText4, elementText5, elementText6, exploreButtonHref
	} = attributes;
	
	return (
		<section class="expelore light-bg" { ...useBlockProps.save() }>
        <div class="wrapper ">
            <div class="title-explore-table-wrapper col">
                <div class="title-explore-wrapper col">
                    <div class="explore-title title-black title">
                        {exploreTitle} <span class="accent-smooth"> {spanExploreTitle} </span>
                    </div>
                    <div class="explore-subtitle">
                        {exploreSubtitle}
                    </div>
                </div>
                <div class="explore-table-wrapper">
                    <div class="explore-table-element-wrapper row">
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
									<img src={imageSrcExplore1} />
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText1}
                            </div>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image options-image">
									<img src={imageSrcExplore2} />
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText2}
                            </div>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image futures-image">
									<img src={imageSrcExplore3} />
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText3}
                            </div>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image">
									<img src={imageSrcExplore4} />
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText4}
                            </div>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image">
									<img src={imageSrcExplore5} />	
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText5}
                            </div>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element crypto-element">
                                <div class="element-image crypto-image">
									<img src={imageSrcExplore6} />
                                </div>
                            </div>
                            <div class="element-text">
                                {elementText6}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<div class="button-wrapper">
				<a href={exploreButtonHref} class="explore-button button">
						All poducts
				</a>
			</div>
        </div>
    </section>
	);
}
