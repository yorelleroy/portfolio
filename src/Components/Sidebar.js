import styled from 'styled-components';
import { navLinks } from '../data';
import { FaRegWindowClose } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, sidebarToggle }) => {
	console.log(isSidebarOpen);
	return (
		<SidebarContainer
			onClick={() => {
				sidebarToggle();
			}}
		>
			<aside>
				<div
					className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
				>
					<div className="container">
						<button type="button">
							<FaRegWindowClose />
						</button>

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
				</div>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	text-align: end;

	.sidebar {
		position: fixed;
		right: 0;
		top: 0;
		padding-top: 2rem;
		height: 100%;
		width: 200px;
		z-index: 9999999;
		transform: translateX(100%);
		background-color: white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	h5 {
		text-transform: capitalize;
	}

	.show-sidebar {
		transform: translateX(0);
	}

	.container > * {
		margin-right: 4rem;
	}

	button {
		font-size: 1.5rem;

		height: 100%;
		padding: 0.2rem 0 0 0;
	}

	li {
		margin: 2rem 0;
	}
`;
export default Sidebar;
