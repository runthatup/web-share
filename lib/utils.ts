import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getQueryParam = (param: string) => {
  if (typeof window === 'undefined') return null;
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const val = params.get(param);
  return val;
};

export const updateQueryParam = (key: string, value: string) => {
  if (typeof window === 'undefined') return null;
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(key, value);
};

interface IAddress {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  locationName?: string;
}

export const getDisplayAddress = (originAddress: IAddress, destAddress: IAddress): string => {
  const getMostSpecificPart = (address: IAddress): string => {
    return address.street || address.city || address.state || address.country || address.locationName || "";
  };

  const originMostSpecific = getMostSpecificPart(originAddress);
  const destMostSpecific = getMostSpecificPart(destAddress);

  if (originMostSpecific && destMostSpecific) {
    return `${originMostSpecific} to ${destMostSpecific}`;
  } else if (originMostSpecific) {
    return originMostSpecific;
  } else if (destMostSpecific) {
    return destMostSpecific;
  } else {
    return "";
  }
};