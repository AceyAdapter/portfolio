export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.png","img/daisyui.jpeg","img/sveltekit.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-81c63c3f.js","js":["start-81c63c3f.js","chunks/index-ae43691f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "nmi",
				pattern: /^\/nmi\/?$/,
				names: [],
				types: [],
				path: "/nmi",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
