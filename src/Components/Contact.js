import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { useEffect } from 'react';

const Contact = () => {
	const [state, handleSubmit] = useForm('xayabekn');
	console.log(state.errors);

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<section className="section-center" id="contact">
			<div className="title">
				<h3>Contact</h3>
			</div>
			<Container>
				<form onSubmit={() => handleSubmit}>
					<label id="firstName">First Name</label>
					<input id="firstName" name="firstName" />

					<label id="lastName">Last Name</label>
					<input id="lastName" name="lastName" />

					<label htmlFor="email">Email Address</label>
					<input id="email" type="email" name="email" />
					<ValidationError prefix="Email" field="email" errors={state.errors} />

					<label id="message">Message</label>
					<textarea id="message" name="message" />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>

					<button type="submit" disabled={state.submitting}>
						Submit
					</button>
					<p>{state.errors}</p>
				</form>
			</Container>
			<div>
				<a href="/Resume.pdf" target="_blank">
					resume
				</a>
			</div>
		</section>
	);
};

const Container = styled.div`
	height: 40rem;

	form {
		max-width: 35rem;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		border-radius: 15px;
	}
	label {
		font-size: clamp(0.8rem, calc(1vw + 0.5rem), 1.3rem);
	}

	input,
	textarea {
		width: 100%;
		font-size: clamp(0.8rem, calc(1vw + 0.5rem), 1.3rem);
		padding: 0.5rem 0.8rem;
		box-sizing: border-box;
		resize: vertical;
		margin: 0.2rem 0 1rem 0;
		font-family: inherit;
		border: 2px solid rgba(0, 0, 0, 0.5);
	}

	button {
		border: 1px solid;
		border-radius: 5px;
		padding: 0.5rem 2rem;
		font-size: 1rem;
		background-color: rgba(0, 0, 0, 0.3);
		color: white;
		cursor: pointer;
	}
`;

export default Contact;
