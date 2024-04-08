import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function extractIdFromParams(encodedParams: string): string | null {
  // Decode the URL-encoded string
  const decodedParams = decodeURIComponent(encodedParams);

  // Parse the decoded string as a query parameter
  const parsedParams = new URLSearchParams(decodedParams);

  // Extract the 'id' parameter value
  const id = parsedParams.get('id');

  return id;
}

export function extractTitleFromId(encodedId: string): string | null {
  // Decode the URL-encoded string
  const decodedId = decodeURIComponent(encodedId);

  // Use regular expression to extract the title
  const match = decodedId.match(/^([^&]+)/);

  // Check if a match is found and return the extracted title
  return match ? match[1].replace(/%20/g, ' ') : null;
}