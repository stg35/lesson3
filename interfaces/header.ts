export interface HeaderData {
	id: number;
	nameRus: string;
	nameEng?: string;
	number: string;
	numberOrig: number;
	trello?: string;
	googleGroup?: string;
	chat?: string;
	wiki?: string;
	typeValue: number;
	typeLabel: string;
	sourceValue: number;
	sourceLabel: string;
	teamValue: number;
	teamLabel?: string;
	statusValue: number;
	statusLabel: string;
	projectOffice: boolean;
	exportControl: boolean;
	thumbnail: string;
	years: Year[];
	projectYearInfo: number;
	wrongYear: boolean;
	showAchievements: boolean;
	mainLeader: MainLeader[];
	inProject: boolean;
	projectOwner: boolean;
	initiator: boolean;
	passportComplete: boolean;
	onRevise: boolean;
	dateCreated: string;
	timeline: Timeline[];
	tabs: Tabs;
	buttons: Buttons;
	catalogName: string;
	catalogLink: string;
	companyId?: number;
	companyName?: string;
	companyLogo: any;
}

export interface Year {
	id: number;
	year: string;
	realYear: number;
}

export interface MainLeader {
	id: number;
	fio: string;
	email: string;
	telnum: string;
	trelloId: string;
	role: string;
	status: string;
	ownerPrivilege: boolean;
}

export interface Timeline {
	id: number;
	date: string;
	grade: number;
	name: string;
	status: number;
	isSession: boolean;
	isGradable: boolean;
	comment?: string;
	session?: number;
	disableStatusEditing: boolean;
}

export interface Tabs {
	showVacancies: boolean;
	showTeam: boolean;
	showDocs: boolean;
	showJitsi: boolean;
	showCourses: boolean;
	showFeedback: boolean;
	showStat: boolean;
	showStatCharts: boolean;
	showReviseTab: boolean;
}

export interface Buttons {
	startProject: boolean;
	showProlong: boolean;
	showFinish: boolean;
	showRevise: boolean;
	showReviseDone: boolean;
	showTimelineEdit: boolean;
}
