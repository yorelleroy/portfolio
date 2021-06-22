import styled from 'styled-components';

const Intro = () => {
	return (
		<IntroWrapper>
			<div className="grid-container">
				<div className="intro-text">
					<h1>
						Hello, <br />I am Le Roy Lazala
						<br />
					</h1>
					<h3>Web and React developer</h3>
				</div>
			</div>
		</IntroWrapper>
	);
};

const IntroWrapper = styled.div`
	.grid-container {
		height: 50vh;
		padding-top: 9rem;
		display: grid;
	}

	.intro-text {
		text-align: center;
		margin-top: 5rem;
	}
`;

export default Intro;
