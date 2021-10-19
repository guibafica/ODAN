const limitString = (text: string, length: number): string => {
  return text.slice(0, length) + (text.length > length ? '...' : '');
};

export default limitString;
