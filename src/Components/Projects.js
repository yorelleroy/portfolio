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

// asdasa

const Container = styled.div`
	height: 60vh;
	width: 100%;

	margin-top: 10rem;
	/* background-color: lightblue; */

	.project-item {
		/* background-color: pink; */
		height: 500px;

		position: relative;

		h3 {
			font-size: 2.8rem;
		}

		.img {
			position: absolute;
			left: 0%;
			border-radius: 15px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

			height: inherit;

			img {
				height: 100%;
				border-radius: 15px;

				object-fit: contain;
			}
		}

		.project-details {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 100%;

			z-index: 2;

			display: grid;
			grid-template-rows: 2fr 1fr 80px 1fr;

			& > * {
				place-self: center end;
			}

			h3 {
				text-transform: uppercase;
				margin-top: 3rem;
			}

			p {
				font-size: 1.3rem;
				width: 550px;

				background-color: white;

				padding: 1.8rem;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
				border-radius: 10px;
			}

			.project-tags {
				align-self: end;
			}

			span {
				background-color: lightgray;
				padding: 0.5rem 1.5rem;
				margin-left: 1rem;
				border-radius: 80px;
			}

			.github {
				padding: 0.5rem 0.66rem;
				border: 1px solid;
				border-radius: 50%;
				color: gray;
				font-size: 2rem;
				height: 2.1rem;
				margin-top: 1rem;
			}
		}
	}
`;

export default Projects;
