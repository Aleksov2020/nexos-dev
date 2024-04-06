/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

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
	const {attributes, setAttributes} = props;
	const {
		title, spanTitle, tableTextTitle1, tableTextTitle2, tableTextTitle3, tableTextTitle4, 
		tableTextTitle5, tableTextTitle6, tableTextTitle7, tableTextTitle8,
		tableTextSubtitle1, tableTextSubtitle2, tableTextSubtitle3, tableTextSubtitle4,
		tableTextSubtitle5, tableTextSubtitle6, tableTextSubtitle7, tableTextSubtitle8,
		imageSrc1, imageSrc2, imageSrc3, imageSrc4,
		imageSrc5, imageSrc6, imageSrc7, imageSrc8
	} = attributes;

	return (
	<section class="elevate light-bg" { ...useBlockProps() }>
        <div class="wrapper">
            <div class="title-table-wrapper col">
				<div class="row center-align">
					<RichText
						tagName="div"
						className='elevate-title title-black title'
						value={ title }
						onChange={ ( newTitle ) => setAttributes( { title: newTitle } ) }
						placeholder="Enter title here..."
					/>
					<RichText
						tagName="span"
						className='accent-smooth'
						value={ spanTitle }
						onChange={ ( newSpanTitle ) => setAttributes( { spanTitle: newSpanTitle } ) }
						placeholder="Enter subtitle here..."
					/>
				</div>
                <div class="elevate-table-wrapper">
                    <div class="elevate-table row">
                        <div class="elevate-table-right-part col">
                            <div class="elevate-table-element row">
                                <div class="table-number">
                                    01
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc1: media.url })}
										type="image"
										value={imageSrc1}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc1 ? (
													<img src={imageSrc1} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle1 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle1: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle1}
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle1: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    02
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc2: media.url })}
										type="image"
										value={imageSrc2}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc2 ? (
													<img src={imageSrc2} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle2 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle2: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle2 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle2: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    03
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc3: media.url })}
										type="image"
										value={imageSrc3}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc3 ? (
													<img src={imageSrc3} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle3 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle3: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle3 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle3: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    04
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc4: media.url })}
										type="image"
										value={imageSrc4}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc4 ? (
													<img src={imageSrc4} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle4 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle4: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle4 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle4: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="elevate-table-left-part col">
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    05
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc5: media.url })}
										type="image"
										value={imageSrc5}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc5 ? (
													<img src={imageSrc5} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle5 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle5: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle5}
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle5: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    06
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc6: media.url })}
										type="image"
										value={imageSrc6}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc6 ? (
													<img src={imageSrc6} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle6 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle6: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle6 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle6: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    07
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc7: media.url })}
										type="image"
										value={imageSrc7}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc7 ? (
													<img src={imageSrc7} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle7 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle7: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle7 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle7: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
                                    </div>
                                </div>
                            </div>
							<div class="elevate-table-element row">
                                <div class="table-number">
                                    08
                                </div>
                                <div class="image-text-wrapper row">
									<MediaUpload
										onSelect={(media) => setAttributes({ imageSrc8: media.url })}
										type="image"
										value={imageSrc8}
										render={({ open }) => (
											<Button onClick={open}>
												{imageSrc8 ? (
													<img src={imageSrc8} alt="Selected Image" style={{ maxWidth: '100%' }} />
												) : (
													__('Upload Image', 'my-plugin')
												)}
											</Button>
										)}
									/>
                                    <div class="table-text">
										<RichText
                    						tagName="div"
											className='table-text-title'
											value={ tableTextTitle8 }
											onChange={ ( newTableTextTitle ) => setAttributes( { tableTextTitle8: newTableTextTitle } ) }
											placeholder="Enter title here..."
										/>
										<RichText
                    						tagName="div"
											className='table-text-subtitle'
											value={ tableTextSubtitle8 }
											onChange={ ( newTableTextSubtitle ) => setAttributes( { tableTextSubtitle8: newTableTextSubtitle } ) }
											placeholder="Enter title here..."
										/>
                                        
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
