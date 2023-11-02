const formatVND = (amount) => {
	if (!amount) return null;
	return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default formatVND;
