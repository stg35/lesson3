export interface ProjectData {
	id: number;
	status: string;
	statusDesc: string;
	nameRus: string;
	head: string;
	directionHead: string;
	type: string;
	typeDesc: string;
	typeId: number;
	statusId: number;
	dateCreated: string;
	vacancies: number;
	team: string[];
	vacancyData: string[];
	number?: number;
	hoursCount: number;
	payed: boolean;
	projectOfficeControl: boolean;
	studentsCount: number;
	searchString: string;
	initiatorId?: number;
	thumbnail?: string;
	initiatorEmail?: string;
	companyId?: number;
	clientLogo?: string;
}
