export const getImage = (url, width, height) => {
  return url.replace('/upload/', `/upload/w_${width},h_${height},c_fill,q_auto,f_auto/`);
};

export const getImageUrl = url => {
  return url.replace('/upload/', `/upload/q_auto,f_auto/`);
};
