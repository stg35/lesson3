export interface StudentsData {
	leaders: Leader[];
	activeMembers: ActiveMember[];
	passiveMembers: PassiveMember[];
}

export interface Leader {
	fullName: string;
	name: string;
	userId: number;
	id: number;
	email: string[];
	first_name: string;
	last_name: string;
	middle_name: string;
	chatLink: string;
	dep: string;
	group: string;
	startDate: string;
	endDate: string;
	gitId: number;
	isTeacher: boolean;
	ownerPrivilege: number;
	pic: string;
	role: string;
	telnum: string;
	trelloId: string;
	utpStatus: number;
	vacancy_id: number;
	initiator: boolean;
	external: boolean;
	status: Status[];
}

export interface Status {
	id: number;
	name: string;
	code: string;
	projectOwner: number;
	utpStatus: number;
}

export interface ActiveMember {
	fullName: string;
	name: string;
	userId: number;
	id: number;
	email: string[];
	first_name: string;
	last_name: string;
	middle_name: string;
	chatLink: string;
	dep: string;
	group: string;
	startDate: string;
	endDate: string;
	gitId: number;
	isTeacher: boolean;
	ownerPrivilege: number;
	pic: string;
	role: string;
	telnum: string;
	trelloId: string;
	utpStatus: number;
	vacancy_id: number;
	initiator: boolean;
	external: boolean;
	status: Status2[];
}

export interface Status2 {
	id: number;
	name: string;
	code: string;
	projectOwner: number;
	utpStatus: number;
}

export interface PassiveMember {
	fullName: string;
	name: string;
	userId: number;
	id: number;
	email: string[];
	first_name: string;
	last_name: string;
	middle_name: string;
	chatLink: string;
	dep: string;
	group: string;
	startDate: string;
	endDate: string;
	gitId: number;
	isTeacher: boolean;
	ownerPrivilege: number;
	pic: string;
	role: string;
	telnum: string;
	trelloId: string;
	utpStatus: number;
	vacancy_id: number;
	initiator: boolean;
	external: boolean;
	status: Status3[];
}

export interface Status3 {
	id: number;
	name?: string;
	code: string;
	projectOwner: number;
	utpStatus: number;
}
