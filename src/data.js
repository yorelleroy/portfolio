import ComfySlothIMG from './images/Comfy-Sloth.jpg';
// import BirthdayReminderIMG from './images/Birthday-Reminder.jpg';
// import CocktailsIMG from './images/Cocktails.jpg';

import { FaHtml5, FaCss3, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
	SiRedux,
	SiTailwindcss,
	SiMaterialUi,
	SiStyledComponents,
} from 'react-icons/si';

export const navLinks = [
	{ id: 1, name: 'projects', link: '#projects' },
	{ id: 2, name: 'about', link: '#about' },
	{ id: 3, name: 'skills', link: '#skills' },
	{ id: 4, name: 'contact', link: '#contact' },
];

export const projects = [
	{
		id: 1,
		name: 'comfy sloth',
		image: ComfySlothIMG,
		text: 'web e-commerce app complete with login feature and payment function ',
		github: 'https://github.com/yorelleroy/Comfy-sloth',
		demo: 'https://comfy-sloth.vercel.app/',
		tag: ['react', 'auth0', 'stripe', 'context api'],
		size: 'big',
	},

	// {
	// 	id: 2,
	// 	name: 'birthday reminder',
	// 	image: BirthdayReminderIMG,
	// 	text: 'a simple app to practice implementing useState hook',
	// 	github: 'https://github.com/yorelleroy/birthday-reminder',
	// 	demo: 'https://birthday-reminder-p830kq5as-yorelleroy.vercel.app/',
	// 	tag: 'react',
	// 	size: 'small',
	// },

	// {
	// 	id: 3,
	// 	name: 'cocktails',
	// 	image: CocktailsIMG,
	// 	text: 'Recipe app',
	// 	github: 'https://github.com/yorelleroy/cocktails-recipe',
	// 	demo: 'https://cocktails-recipe.vercel.app/',
	// 	tag: 'react',
	// 	size: 'medium',
	// },
];

// styled components, bootstrap, tailwind, material UI, react, redux, html, css, javascript,

export const skills = [
	{
		name: 'html',
		logo: <FaHtml5 />,
	},
	{
		name: 'css / sass',
		logo: <FaCss3 />,
	},
	{
		name: 'javascript',
		logo: <IoLogoJavascript />,
	},
	{
		name: 'react',
		logo: <FaReact />,
	},
	{
		name: 'redux / context api',
		logo: <SiRedux />,
	},
	{
		name: 'bootstrap',
		logo: <FaBootstrap />,
	},
	{
		name: 'tailwind',
		logo: <SiTailwindcss />,
	},
	{
		name: 'material UI',
		logo: <SiMaterialUi />,
	},
	{
		name: 'styled components',
		logo: <SiStyledComponents />,
	},
];
