import styled from 'styled-components';
import { skills } from '../data';

const Skills = () => {
	return (
		<section className="section-center" id="skills">
			<div className="title">
				<h3>Skills</h3>
			</div>

			<Container>
				{skills.map((skillItem, index) => {
					const { name, logo } = skillItem;
					return (
						<div className="skill-item" key={index}>
							<div className="img">{logo}</div>
							<h5>{name}</h5>
						</div>
					);
				})}
			</Container>
		</section>
	);
};

const Container = styled.div`
	height: auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, auto));
	/* grid-template-rows: minmax(200px, auto); */

	grid-gap: 1rem 2rem;
	place-items: center;
	justify-content: center;

	.skill-item {
		place-self: center;

		& > * {
			text-align: center;
		}

		.img {
			margin-top: 1rem;
			font-size: clamp(1.5rem, 5vw, 3.5rem);
			color: rgba(0, 0, 0, 0.7);
		}

		h5 {
			margin-top: 1rem;

			font-weight: 400;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
		}
	}

	@media screen and (min-width: 412px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, auto));
		grid-gap: 2rem 4rem;
	}

	@media screen and (min-width: 842px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
		grid-gap: 2rem 4rem;
	}
`;

export default Skills;
