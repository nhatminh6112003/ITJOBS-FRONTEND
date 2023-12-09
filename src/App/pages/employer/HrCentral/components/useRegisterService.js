import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';

const useRegisterService = (company_id, service_type_slug) => {
	const { data: companyService } = useGetAllCompany_serviceQuery({
		params: {
			company_id,
			service_type_slug,
			isExpiry: 0
		}
	});
	const defaultCondition =
		companyService?.data && Array.isArray(companyService?.data) && companyService?.data?.length > 0;

	const isServiceExits =
		defaultCondition && companyService?.data?.some((item) => item?.service?.service_type?.slug === service_type_slug);

	const isServiceActive =
		defaultCondition &&
		companyService?.data?.some(
			(item) => item.isActive === true && item?.service?.service_type?.slug === service_type_slug
		);

	return { isServiceExits, isServiceActive, companyService: companyService?.data };
};

export default useRegisterService;
