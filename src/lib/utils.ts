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

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}