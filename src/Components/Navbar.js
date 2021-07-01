import styled from 'styled-components';
import { navLinks } from '../data';
import { Intro } from './index';
import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';

const Nav = ({ sidebarToggle }) => {
	const [hideNav, setHideNav] = useState(false);

	// const navScroll = () => {
	// 	if (window.scrollY >= 50) {
	// 		setHideNav(true);
	// 	} else {
	// 		setHideNav(false);
	// 	}
	// 	console.log(window.scrollY, hideNav);
	// };

	let prevScrollPos = window.pageYOffset;

	const navScroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollPos < currentScrollPos) {
			setHideNav(true);
		} else {
			setHideNav(false);
		}
	};

	window.addEventListener('scroll', navScroll);

	return (
		<header id="home" className="section-center">
			<NavContainer>
				<div className={hideNav ? 'hidden' : 'navbar'}>
					<div>
						<a href="#home">
							<h5>Portfolio</h5>
						</a>
					</div>
					<div className="btn-bars">
						<button
							type="button"
							onClick={() => {
								sidebarToggle();
							}}
						>
							<FaBars />
						</button>
					</div>
					<div className="links">
						<ul>
							{navLinks.map(navItem => {
								const { id, name, link } = navItem;
								return (
									<li key={id}>
										<a href={link}>{name}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</NavContainer>
			<Intro />
		</header>
	);
};

const NavContainer = styled.nav`
	.navbar {
		display: flex;
		max-width: 85rem;
		margin: 0 auto;
		align-items: flex-end;

		background-color: white;

		height: 3rem;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		padding: 1rem 2rem;
		z-index: 1000;

		.links,
		.btn-bars {
			margin-left: auto;
		}

		ul {
			display: flex;
		}
		li:not(:last-of-type) {
			margin: 0 4rem 0 0;
		}
		button {
			margin-right: 2rem;
			font-size: 1.5rem;
			background-color: inherit;
			height: 100%;
			padding: 0.2rem 0 0 0;

			cursor: pointer;
		}

		@media screen and (max-width: 1220px) {
			.links {
				display: none;
			}

			button {
				display: block;
			}
		}

		@media screen and (min-width: 1221px) {
			button {
				display: none;
			}
		}
	}

	.hidden {
		display: none;
	}
`;

export default Nav;
