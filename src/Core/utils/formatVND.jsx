
const formatVND = (amount) => {
   return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')   ;
};

export default formatVND;
