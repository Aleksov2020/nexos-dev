<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package NexosTrade
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'nexostrade' ); ?></a>

	<header class="wrapper">
        <div class="header-inner-wrapper row">
            <div class="logo-wrapper">
                <img src="<?php echo get_template_directory_uri()?>/assets/img/logo_nexos.png">
            </div>
            <div class="nav-wrapper row hide-laptop">
                <div class="nav-elem row">
                    Company 
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    Trading
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    Invest
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    Platforms
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    Individual
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    Institutional
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-elem row">
                    More
                    <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                        </g>
                    </svg>
                    <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                    </svg>
                    <div class="nav-links col">
                        <a class="link-text" href="#">Link 1</a>
                        <a class="link-text" href="#">Link 2</a>
                        <a class="link-text" href="#">Link 3</a>
                    </div>
                </div>
            </div>
            <div class="buttons-header-wrapper row">
                <div class="button button-black row hide-mobile">
                    <img src="<?php echo get_template_directory_uri()?>/assets/img/IconEN.png">
                    En
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.45602C2.36777 3.2933 2.63158 3.2933 2.7943 3.45602L4.99967 5.6614L7.20505 3.45602C7.36776 3.2933 7.63158 3.2933 7.7943 3.45602C7.95702 3.61874 7.95702 3.88256 7.7943 4.04528L5.2943 6.54528C5.13158 6.708 4.86776 6.708 4.70505 6.54528L2.20505 4.04528C2.04233 3.88256 2.04233 3.61874 2.20505 3.45602Z" fill="white"/>
                        </g>
                        </svg>
                </div>
                <div class="button">
                    <span class="hide-mobile">Login </span>
                    <svg class="show-mobile" ="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.59 13.0001L10.29 15.2901C10.1963 15.3831 10.1219 15.4937 10.0711 15.6155C10.0203 15.7374 9.9942 15.8681 9.9942 16.0001C9.9942 16.1321 10.0203 16.2628 10.0711 16.3847C10.1219 16.5065 10.1963 16.6171 10.29 16.7101C10.383 16.8038 10.4936 16.8782 10.6154 16.929C10.7373 16.9798 10.868 17.0059 11 17.0059C11.132 17.0059 11.2627 16.9798 11.3846 16.929C11.5064 16.8782 11.617 16.8038 11.71 16.7101L15.71 12.7101C15.801 12.615 15.8724 12.5029 15.92 12.3801C16.02 12.1366 16.02 11.8636 15.92 11.6201C15.8724 11.4973 15.801 11.3852 15.71 11.2901L11.71 7.2901C11.6168 7.19686 11.5061 7.1229 11.3842 7.07244C11.2624 7.02198 11.1319 6.99601 11 6.99601C10.8681 6.99601 10.7376 7.02198 10.6158 7.07244C10.4939 7.1229 10.3832 7.19686 10.29 7.2901C10.1968 7.38334 10.1228 7.49403 10.0723 7.61585C10.0219 7.73767 9.99591 7.86824 9.99591 8.0001C9.99591 8.13196 10.0219 8.26253 10.0723 8.38435C10.1228 8.50617 10.1968 8.61686 10.29 8.7101L12.59 11.0001H3C2.73478 11.0001 2.48043 11.1055 2.29289 11.293C2.10536 11.4805 2 11.7349 2 12.0001C2 12.2653 2.10536 12.5197 2.29289 12.7072C2.48043 12.8947 2.73478 13.0001 3 13.0001H12.59ZM12 2.0001C10.1311 1.99176 8.29724 2.50731 6.70647 3.48829C5.11569 4.46927 3.83165 5.87641 3 7.5501C2.88065 7.78879 2.86101 8.06512 2.94541 8.3183C3.0298 8.57147 3.21131 8.78075 3.45 8.9001C3.68869 9.01945 3.96502 9.03909 4.2182 8.95469C4.47137 8.8703 4.68065 8.68879 4.8 8.4501C5.43219 7.17342 6.39383 6.08872 7.58555 5.30809C8.77727 4.52746 10.1558 4.07922 11.5788 4.00969C13.0017 3.94017 14.4174 4.25188 15.6795 4.91261C16.9417 5.57334 18.0045 6.55913 18.7581 7.7681C19.5118 8.97706 19.9289 10.3653 19.9664 11.7895C20.0039 13.2136 19.6605 14.6219 18.9715 15.8689C18.2826 17.1159 17.2731 18.1563 16.0475 18.8825C14.8219 19.6088 13.4246 19.9946 12 20.0001C10.5089 20.0066 9.04615 19.5925 7.77969 18.8053C6.51323 18.0182 5.49435 16.89 4.84 15.5501C4.72065 15.3114 4.51137 15.1299 4.2582 15.0455C4.00502 14.9611 3.72869 14.9808 3.49 15.1001C3.25131 15.2194 3.0698 15.4287 2.98541 15.6819C2.90101 15.9351 2.92065 16.2114 3.04 16.4501C3.83283 18.0456 5.03752 19.4003 6.52947 20.3741C8.02142 21.348 9.74645 21.9055 11.5261 21.9891C13.3058 22.0727 15.0755 21.6793 16.6521 20.8496C18.2288 20.0199 19.5552 18.7841 20.4941 17.2699C21.433 15.7558 21.9503 14.0182 21.9925 12.2371C22.0347 10.456 21.6003 8.69589 20.7342 7.13893C19.8682 5.58197 18.6018 4.28467 17.0663 3.38121C15.5307 2.47774 13.7816 2.00094 12 2.0001Z" fill="white"/>
                    </svg>
                </div>
                <div class="button button-smooth show-laptop" id="open-popup">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </header>

	<div class="modal-bg" id="modal-menu">
        <div class="modal col">
            <div class="modal-header-wrapper  row">
                <div class="modal-inner-wrapper wrapper row">
                    <div class="logo-wrapper">
						<img src="<?php echo get_template_directory_uri()?>/assets/img/logo_nexos.png">
                    </div>
                    <div class="buttons-header-wrapper row">
                        <div class="button button-transparent row hide-mobile">
							<img src="<?php echo get_template_directory_uri()?>/assets/img/IconEN.png">
                            En
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <g opacity="0.5">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                                </g>
                            </svg>
                        </div>
                        <div class="button button-black close-btn" id="close-popup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.706956 13.4987C0.316431 13.1082 0.316431 12.475 0.706956 12.0845L12.0207 0.770814C12.4112 0.38029 13.0444 0.38029 13.4349 0.770814C13.8254 1.16134 13.8254 1.7945 13.4349 2.18503L2.12117 13.4987C1.73065 13.8893 1.09748 13.8893 0.706956 13.4987Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.499924C0.683418 0.1094 1.31658 0.1094 1.70711 0.499924L13.0208 11.8136C13.4113 12.2042 13.4113 12.8373 13.0208 13.2278C12.6303 13.6184 11.9971 13.6184 11.6066 13.2278L0.292893 1.91414C-0.0976311 1.52361 -0.0976311 0.890449 0.292893 0.499924Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-wrapper nav-links-wrapper mobile-wrapper col">
                <div class="nav-elem">
                    <div class="nav-elem-wrapper  row">
                        Company 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        Trading 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        Invest 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        Platform 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        Individual 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        Institutional 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div class="nav-elem">
                    <div class="nav-elem-wrapper row">
                        More 
                        <svg class="down" xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g opacity="0.5">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20505 3.95602C2.36777 3.7933 2.63158 3.7933 2.7943 3.95602L4.99967 6.1614L7.20505 3.95602C7.36776 3.7933 7.63158 3.7933 7.7943 3.95602C7.95702 4.11874 7.95702 4.38256 7.7943 4.54528L5.2943 7.04528C5.13158 7.208 4.86776 7.208 4.70505 7.04528L2.20505 4.54528C2.04233 4.38256 2.04233 4.11874 2.20505 3.95602Z" fill="#221F32"/>
                            </g>
                        </svg>
                        <svg class="up" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20553 6.54398C2.36825 6.7067 2.63207 6.7067 2.79479 6.54398L5.00016 4.3386L7.20553 6.54398C7.36825 6.7067 7.63207 6.7067 7.79479 6.54398C7.95751 6.38126 7.95751 6.11744 7.79479 5.95472L5.29479 3.45472C5.13207 3.292 4.86825 3.292 4.70553 3.45472L2.20553 5.95472C2.04282 6.11744 2.04282 6.38126 2.20553 6.54398Z" fill="#221F32"/>
                        </svg>
                    </div>
                    <div class="nav-links col">
                        <div class="naw-linnks-wrapper">
                            <a class="link-text" href="#">Link 1</a>
                            <a class="link-text" href="#">Link 2</a>
                            <a class="link-text" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>