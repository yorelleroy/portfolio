import styled from 'styled-components';
import { navLinks } from '../data';
import { Intro } from './index';
import { FaBars } from 'react-icons/fa';

const Nav = ({ sidebarToggle }) => {
	return (
		<header>
			<NavContainer className="section-center">
				<div>
					<a href="/">
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
			</NavContainer>
			<Intro />
		</header>
	);
};

const NavContainer = styled.nav`
	display: flex;
	align-items: end;

	background-color: white;
	height: 5rem;
	position: fixed;
	left: 0;
	right: 0;

	margin: auto;

	padding: 2rem;
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

		height: 100%;
		padding: 0.2rem 0 0 0;
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
`;

export default Nav;
