import moment from 'moment';

const formatDate = (dateString) => {
	if(!dateString) return ''
	let date = moment(dateString);
	return date.format('DD/MM/YYYY');
};

export default formatDate;
