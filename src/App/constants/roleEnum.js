const UserRoleEnum = {
	JOBSEEKER: 1,
	EMPLOYER: 2,
	ADMIN: 3
};

export const UserType = {
	[UserRoleEnum.JOBSEEKER]: 'user',
	[UserRoleEnum.EMPLOYER]: 'employer',
	[UserRoleEnum.ADMIN]: 'admin'
};

export default UserRoleEnum;
