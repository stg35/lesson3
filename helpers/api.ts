export const API = {
	project: {
		header: process.env.NEXT_PUBLIC_DOMAIN + '/back/public-api/project/header/',
		listAllProjects:
			process.env.NEXT_PUBLIC_DOMAIN +
			'/back/public-api/projects?statusIds[]=1&statusIds[]=2&limit=500',
	},
};
