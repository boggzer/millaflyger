const useImageSize = (
  src = '',
): Record<'width' | 'height', number | undefined> => {
  // const dimensions = src.split('@').pop()?.split('x');
  const dimensions = src.match(/(?![-])[\d|x]+(?=[.])/g)?.[0]?.split('x');

  return {
    width: dimensions && parseInt(dimensions[0] || '200'),
    height: dimensions && parseInt(dimensions[1] || '200'),
  };
};

export default useImageSize;
