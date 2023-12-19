export const ResumeStatusEnum = {
	UNDECIDED: 0, // Chưa quyết định
	NOT_MATCHED: 1, // Không phù hợp
	INTERVIEW: 4, // Phỏng vấn
	HIRED: 6 // Nhận việc
};
export const ResumeStatusOptions = [
	{ label: 'Chưa quyết định', value: ResumeStatusEnum.UNDECIDED },
	{ label: 'Không phù hợp', value: ResumeStatusEnum.NOT_MATCHED },
	{ label: 'Phỏng vấn', value: ResumeStatusEnum.INTERVIEW },
	{ label: 'Nhận việc', value: ResumeStatusEnum.HIRED }
];
export const ResumeCvEnum = {
	CV_PROFILE: 1,
	MY_ATTACH: 2
};
