const useImageSize = (
  src = '',
): Record<'width' | 'height', number | undefined> => {
  const dimensions = src.split('@').pop()?.split('x');
  return {
    width: dimensions && parseInt(dimensions[0]),
    height: dimensions && parseInt(dimensions[1]),
  };
};

export default useImageSize;
