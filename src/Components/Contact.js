import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const Contact = () => {
	const [state, handleSubmit] = useForm('xayabekn');

	return (
		<section className="section-center" id="contact">
			<div className="title">
				<h3>Contact</h3>
			</div>
			<Container>
				<form onSubmit={handleSubmit}>
					<label id="firstName">First Name</label>
					<input id="firstName" name="firstName" />

					<label id="lastName">Last Name</label>
					<input id="lastName" name="lastName" />

					<label htmlFor="email">Email Address</label>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
						style={{ color: 'red', marginTop: '.5rem' }}
					/>
					<input
						id="email"
						type="email"
						name="email"
						required
						errors={state.errors}
						className={`${state.errors[0] > [0] ? 'input-error' : ''}`}
					/>

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

					{state.succeeded ? (
						<p className="success feedback-msg">
							Thank you! I will get back to you as soon as I can.
						</p>
					) : (
						state.errors.map((error, index) => {
							const { code } = error;
							if (code === 'TYPE_EMAIL')
								return (
									<p key={index} className="failed feedback-msg">
										Please enter a valid email
									</p>
								);
						})
					)}
				</form>
			</Container>
		</section>
	);
};

const Container = styled.div`
	height: 45rem;

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
		resize: none;
		margin: 0.2rem 0 1rem 0;
		font-family: inherit;
		border: 2px solid rgba(0, 0, 0, 0.5);
	}

	.input-error {
		border: 2px solid red;
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

	.feedback-msg {
		padding: 1rem;
		margin-top: 1rem;
	}

	.success {
		background-color: lightgreen;
	}

	.failed {
		background-color: lightpink;
	}
`;

export default Contact;
