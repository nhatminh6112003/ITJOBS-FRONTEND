import { useGetAllCompany_serviceQuery } from '~/App/providers/apis/company_serviceApi';

const useRegisterService = (company_id, service_slug) => {
	const { data: companyService } = useGetAllCompany_serviceQuery({
		params: {
			company_id
		}
	});
	const isServiceExits = !!companyService?.data?.find((item) => item.service?.slug === service_slug);

	return isServiceExits;
};

export default useRegisterService;
