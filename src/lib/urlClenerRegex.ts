export function urlCleanerRegex({ url }: { url: string }) {
  const cleanedUrl = url.replace(/%20/g, ' ').replace(/%/g, '');
  return cleanedUrl;
}
