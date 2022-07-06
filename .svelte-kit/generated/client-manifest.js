export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/nmi.svelte"),
	() => import("../../src/routes/projects.svelte"),
	() => import("../../src/routes/resume.svelte"),
	() => import("../../src/routes/vault.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"contact": [[0, 2], [1]],
	"nmi": [[0, 4], [1]],
	"projects": [[0, 5], [1]],
	"resume": [[0, 6], [1]],
	"vault": [[0, 7], [1]]
};