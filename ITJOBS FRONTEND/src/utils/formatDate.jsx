import moment from 'moment';

const formatDate = (dateString) => {
	let date = moment(dateString);
	return date.format('DD/MM/YYYY');
};

export default formatDate;
