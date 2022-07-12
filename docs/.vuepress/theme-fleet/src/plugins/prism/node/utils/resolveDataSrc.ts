export const resolveDataSrc = (info: string): string => {
  const match = info.match(/:src\((.+)\)/);
  return match ? match[1] : '';
}
