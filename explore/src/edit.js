/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
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
	const {attributes, setAttributes, 
	} = props;
	const {
		exploreTitle, spanExploreTitle, exploreSubtitle,
		elementText1, elementText2, elementText3, elementText4, elementText5, elementText6,     
		imageSrcExplore1, imageSrcExplore2, imageSrcExplore3, imageSrcExplore4, imageSrcExplore5, imageSrcExplore6,
		exploreButtonHref
	} = attributes;
	return (
	<section class="expelore light-bg" { ...useBlockProps() }>
        <div class="wrapper ">
            <div class="title-explore-table-wrapper col">
                <div class="title-explore-wrapper col">
					<div class="row align-center">
						<RichText
							tagName="div"
							className='explore-title title-black title'
							value={ exploreTitle }
							onChange={ ( newExploreTitle ) => setAttributes( { exploreTitle: newExploreTitle } ) }
							placeholder="Enter title here"
						/>
						<RichText
							tagName="span"
							className='accent-smooth'
							value={spanExploreTitle }
							onChange={ ( newSpanExploreTitle ) => setAttributes( { spanExploreTitle: newSpanExploreTitle } ) }
							placeholder="Enter subtitle here..."
						/>
					</div>
					<RichText
						tagName="div"
						className='explore-subtitle'
						value={ exploreSubtitle }
						onChange={ ( newExploreSubtitle ) => setAttributes( { exploreSubtitle: newExploreSubtitle } ) }
						placeholder="Enter description"
					/>
                </div>
                <div class="explore-table-wrapper">
                    <div class="explore-table-element-wrapper row">
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore1: media.url })}
										type="image"
										value={imageSrcExplore1}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore1 ? (
													<img src={imageSrcExplore1} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText1 }
									onChange={ ( newElementText1 ) => setAttributes( { elementText1: newElementText1 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore2: media.url })}
										type="image"
										value={imageSrcExplore2}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore2 ? (
													<img src={imageSrcExplore2} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText2 }
									onChange={ ( newElementText2 ) => setAttributes( { elementText2: newElementText2 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore3: media.url })}
										type="image"
										value={imageSrcExplore3}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore3 ? (
													<img src={imageSrcExplore3} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText3 }
									onChange={ ( newElementText3 ) => setAttributes( { elementText3: newElementText3 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore4: media.url })}
										type="image"
										value={imageSrcExplore4}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore4 ? (
													<img src={imageSrcExplore4} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText4 }
									onChange={ ( newElementText4 ) => setAttributes( { elementText4: newElementText4 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore5: media.url })}
										type="image"
										value={imageSrcExplore5}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore5 ? (
													<img src={imageSrcExplore5} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText5 }
									onChange={ ( newElementText5 ) => setAttributes( { elementText5: newElementText5 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                        <div class="explore-table-element-container">
                            <div class="explore-table-element">
                                <div class="element-image stock-image">
								<MediaUpload
										onSelect={(media) => setAttributes({ imageSrcExplore6: media.url })}
										type="image"
										value={imageSrcExplore6}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrcExplore6 ? (
													<img src={imageSrcExplore6} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                </div>
                            </div>
								<RichText
									tagName="div"
									className='element-text'
									value={ elementText6 }
									onChange={ ( newElementText6 ) => setAttributes( { elementText6: newElementText6 } ) }
									placeholder="Enter block name"
								/>
                        </div>
                    </div>
                </div>
            </div>
			<URLInput
                value={exploreButtonHref}
                onChange={(value) => setAttributes({ exploreButtonHref: value })}
            />
        </div>
    </section>
	);
}
