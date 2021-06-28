import styled from 'styled-components';
import { projects } from '../data';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
	return (
		<section id="projects" className="section-center padding-top">
			<div className="title">
				<h3>Projects</h3>
			</div>
			<Container>
				{projects.map(projectItem => {
					const { id, name, image, github, demo, text, tag } = projectItem;
					return (
						<div className="project-item" key={id}>
							<div className="img">
								<a href={demo}>
									<img src={image} alt="comfy sloth" />
								</a>
							</div>
							<div className="project-details">
								<h3>{name}</h3>

								<p>{text}</p>
								<div className="project-tags">
									{tag.map((tagItem, index) => {
										return <span key={index}>{tagItem}</span>;
									})}
								</div>

								<a href={github} className="github">
									<FaGithub />
								</a>
							</div>
						</div>
					);
				})}
			</Container>
		</section>
	);
};

const Container = styled.div`
	height: 100%;
	width: 100%;

	.project-item {
		height: auto;
		position: relative;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
		max-width: 800px;
		margin: 0 auto;
		padding: clamp(0.5rem, 2vw, 2rem) 0;

		.img,
		img {
			border-radius: 15px;
		}
		img {
			width: 100%;

			object-fit: contain;
		}

		.project-details {
			z-index: 2;
			display: grid;
			grid-template-rows: 1fr 1fr 1fr auto;
			margin: 0 min(6vw, 4rem);

			& > * {
				place-self: center start;
			}

			h3 {
				text-transform: uppercase;
			}

			p {
				font-size: clamp(0.5rem, 2.6vw, 1.3rem);
				/* max-width: 550px; */

				padding: min(1vw, 1.8rem) 0;
			}

			.project-tags {
				display: grid;
				align-self: center;
				grid-template-columns: auto auto;
				grid-gap: 0.3rem;
			}

			span {
				font-size: clamp(0.5rem, 2vw, 1rem);
				background-color: lightgray;
				border-radius: 80px;
				padding: 0.3rem 0.7rem;

				text-align: center;
			}

			.github {
				padding: clamp(0.25rem, 1vw, 0.6rem) clamp(0.5rem, 1.2vw, 0.7rem);
				border: 1px solid rgba(0, 0, 0, 0.5);
				border-radius: 5px;
				color: gray;
				font-size: clamp(1rem, 4vw, 2rem);
				max-height: 2.1rem;
			}
		}
	}

	@media screen and (min-width: 306px) {
		.project-tags {
			grid-template-columns: auto auto auto auto !important;
		}
	}

	@media screen and (min-width: 1234px) {
		.project-item {
			height: 500px;
			box-shadow: none;
			margin: none;
			max-width: 100%;
		}

		.img {
			position: absolute;
			left: 0%;
			border-radius: 15px;
			max-width: 800px;

			img {
				border-radius: 15px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
			}
		}
		p {
			background-color: white;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
			border-radius: 10px;
			padding: min(3vw, 1.8rem) !important;
			max-width: 550px;
		}

		.project-details {
			position: absolute;
			transform: translateY(-50%);
			right: 0;
			top: 50%;
			grid-template-rows: 2fr 1.5fr 1.5fr auto !important;
			margin: 0 !important;

			& > * {
				place-self: center end !important;
			}

			.project-tags {
				display: grid;
				grid-gap: 0.3rem;
			}

			span {
				margin-left: 1rem;
			}
		}
	}

	@media screen and (min-width: 1332px) {
		.project-tags {
		}
	}
`;

export default Projects;
