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
export default function save() {
	return (
		<section class="redefine"  { ...useBlockProps.save() }>
			<div class="wrapper">
				<div class="title-wrapper-redefine col">
					<div class="title-redifine title title-black">
						REDEFINE YOUR <span class="accent-smooth"> SAVINGS </span>
					</div>
					<div class="subtitle-redefine default-text hide-planshet">
						In only 4 simple steps you can setup your path to future savings.
					</div>
				</div>
				<div class="calc-wrapper row">
					<div class="calc-form col">
						<div class="subtitle-redefine default-text show-planshet">
							In only 4 simple steps you can setup your path to future savings.
						</div>
						<div class="select-wrapper">
							<select class="form-select" aria-label="Default select example">
								<option value="1" selected>Nvidea</option>
								<option value="2">Tesla</option>
								<option value="3">Bitcoin</option>
							</select>
						</div>
						<div class="input-range-wrapper initial-wrapper col">
							<div class="input-range-values-wrapper col">
								<label for="customRange1" class="form-label">Initial Deposit</label>
								<div class="deposit-value">
									$<span id="initial-out">2,110</span>
								</div>
							</div>
							<input type="range" class="form-range styled-slider slider-progress" id="initial-range" min="10" max="99999" value="2110"/>
							<div class="min-max row">
								<div class="min-value">
									10 USD
								</div>
								<div class="max-value">
									99,999 USD
								</div>
							</div>
						</div>
						<div class="input-range-wrapper monthly-wrapper col">
							<div class="input-range-values-wrapper col">
								<label for="customRange1" class="form-label">Monthly Amount</label>
								<div class="deposit-value">
									$<span id="monthly-out">100</span>
								</div>
							</div>
							<input type="range" class="form-range styled-slider slider-progress" id="monthly-range" min="10" max="9999" value="100"/>
							<div class="min-max row">
								<div class="min-value">
									10 USD
								</div>
								<div class="max-value">
									99,99 USD
								</div>
							</div>
						</div>
						<div class="input-range-wrapper years-wrapper col">
							<div class="input-range-values-wrapper col">
								<label for="customRange1" class="form-label">Years</label>
								<div class="deposit-value">
									<span id="year-out">3</span>
								</div>
							</div>
							<input type="range" class="form-range styled-slider slider-progress" id="years-range" min="3" max="6" value="3"/>
							<div class="min-max row">
								<div class="min-value">
									3
								</div>
								<div class="max-value" id="year-max">
									30
								</div>
							</div>
						</div>
					</div>
				
					<div class="calculator-result col">
						<div class="calculator-wrapper">
							<div class="calculator-title-wrapper row">
								<div class="calculator-item-title col">
									<div class="calculator-item-title-label">
										Total Value
									</div>
									<div class="calculator-item-title-value">
										<span id="total-val">20,433</span> USD
									</div>
								</div>
								<div class="calculator-title-separator"></div>
								<div class="calculator-item-title col">
									<div class="calculator-item-title-label">
										Profit
									</div>
									<div class="calculator-item-title-value small">
										$<span id="profit-val">15,270</span>
									</div>
								</div>
								<div class="calculator-title-separator"></div>
								<div class="calculator-item-title col">
									<div class="calculator-item-title-label">
										Return
									</div>
									<div class="calculator-item-title-value small">
										<span id="percent-val">296</span>%
									</div>
								</div>
							</div>
							<div class="calculator-body-wrapper">
								<div class="legend-container row" id="cont-legend">
									<div class="invest-label-wrapper row">
										<div class="circle-invest">

										</div>
										Investment Amount
									</div>
									<div class="profit-label-wrapper row">
										<div class="circle-profit">

										</div>
										Profit
									</div>
								</div>
								<canvas id="myChart"></canvas>
							</div>
						</div>
					</div>
				</div>
				<div class="risk-wrapper default-text">
					<b>RISK WARNING:</b> All investments involve risks, including the possible loss of capital. 
					It's important to understand that past results are not indicative of future performance and do not guarantee actual profits. 
					Investment values can fluctuate due to market volatility, potentially resulting in returns lower than the initial investment. 
					The stock prices used in these calculations are the closing prices for each trading day. Transaction fees are subtracted from the amount invested.
				</div>
			</div>
		</section>
	);
}
