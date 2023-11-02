import saveAs from 'file-saver';
const exportPdf = async (link) => {
	saveAs(`${import.meta.env.VITE_IMAGE_URL}/${link}`, link);
};
export default exportPdf;
