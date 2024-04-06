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
	const { attributes } = props;
	const {  exploreButtonText, exploreButtonHref } = attributes;

	return (
		<div class="slider" { ...useBlockProps.save() }>
			<div class="wrapper slider-wrapper row">
				<div class="left-slider col">
					<div class="slider-title title fade-in-left">
						For traders <br/> who want it <span class="accent">all</span>
					</div>
					<a href={exploreButtonHref} class="first-slider-button button">
						Open account
					</a>
				</div>
				<div class="right-slider col fade-in-right">
					<div class="inner-right-slider-wrapper col">
						<div class="right-icon">

						</div>
						<div class="right-text light-text">
							Join Europe's full-package broker for traders and investors. 
							Experience our competitive & transparent commission rates, advanced trading platform, and 150+ global markets access. 
							Start your trading journey today with NexosTrade.
						</div>
						<a href={exploreButtonHref} class="second-slider-button button">
							Open account
						</a>
					</div>
				</div>
			</div>
			<div class="slider-image">

			</div>

			<div class="splide" role="group" aria-label="Splide Basic HTML Example">
				<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">
									
									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
						<li class="splide__slide">
							<div class="trend-item row">
								<div class="trend-info row">
									<div class="trend-item-icon">

									</div>
									<div class="trend-item-label">
										Tesla
									</div>
								</div>
								<div class="trend-price row">
									<div class="trend-item-price">
										<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
											<path d="M7.5 0.625H0L3.75 4.375L7.5 0.625Z" fill="#EB5757"/>
										</svg>
									</div>
									<div class="trend-item-price-val">
										$216,466
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
