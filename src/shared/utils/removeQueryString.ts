export function removeQueryString(urls: string[]): string[] {
  return urls.map(url => {
    const index = url.indexOf('?');
    return index === -1 ? url : url.substring(0, index);
  });
}
