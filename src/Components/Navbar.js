import styled from 'styled-components';
import { navLinks } from '../data';
import { Intro } from './index';

const Nav = () => {
	console.log(navLinks);
	return (
		<header>
			<NavContainer className="section-center">
				<div>
					<a href="/">
						<h5>Portfolio</h5>
					</a>
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
	max-width: 85rem;
	padding: 2rem;
	z-index: 1000;

	.links {
		margin-left: auto;
	}

	ul {
		display: flex;
	}
	li:not(:last-of-type) {
		margin: 0 4rem 0 0;
	}
`;

export default Nav;
