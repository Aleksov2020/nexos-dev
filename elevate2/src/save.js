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
	const {title, spanTitle, tableTextTitle1, tableTextTitle2, tableTextTitle3, tableTextTitle4,
		tableTextTitle5, tableTextTitle6, tableTextTitle7, tableTextTitle8,
		tableTextSubtitle1, tableTextSubtitle2, tableTextSubtitle3, tableTextSubtitle4,
		tableTextSubtitle5, tableTextSubtitle6, tableTextSubtitle7, tableTextSubtitle8,
		imageSrc1, imageSrc2, imageSrc3, imageSrc4, imageSrc5, imageSrc6, imageSrc7, imageSrc8} = attributes;

	return (
	<section class="elevate light-bg" { ...useBlockProps.save() }>
        <div class="wrapper">
            <div class="title-table-wrapper col">
                <div class="elevate-title title-black title fade-in">
                    {title} <span class="accent-smooth"> {spanTitle} </span>
                </div>
                <div class="elevate-table-wrapper">
                    <div class="elevate-table row">
                        <div class="elevate-table-right-part col fade-in-left">
                            <div class="elevate-table-element row">
                                <div class="table-number">
                                    01
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc1} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle1}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle1}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    02
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc2} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle2}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle2}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    03
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc3} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle3}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle3}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    04
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc4} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle4}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle4}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elevate-table-left-part col fade-in-right">
                            <div class="elevate-table-element row">
                                <div class="table-number">
                                    05
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc5} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle5}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle5}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    06
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc6} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle6}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle6}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    07
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc7} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle7}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle7}
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    08
                                </div>
                                <div class="image-text-wrapper row">
                                    <div class="table-image">
                                        <img src={imageSrc8} />
                                    </div>
                                    <div class="table-text">
                                        <div class="table-text-title">
                                            {tableTextTitle8}
                                        </div>
                                        <div class="table-text-subtitle">
                                            {tableTextSubtitle8}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
	);
}
