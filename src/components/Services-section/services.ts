import PortfolioImage from '@/assets/PropertyPortolio.webp';
import DevelopmentImage from '@/assets/DevelopmentFinance.webp';
import BridgingImage from '@/assets/Bridgingfinance.webp';
import CommercialImage from '@/assets/CommercialFinance.webp';

export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Property Portfolio Finance',
    description:
      'Comprehensive Financing Strategies To Optimise Your Property Investment Portfolio.',
    image: PortfolioImage,
  },
  {
    title: 'Development Finance',
    description:
      'Funding Options To Support Property Development Projects From Inception To Completion.',
    image: DevelopmentImage,
  },
  {
    title: 'Bridging Finance',
    description:
      'Quick, Short-Term Financing Solutions To Bridge The Gap Between Transactions.',
    image: BridgingImage,
  },
  {
    title: 'Commercial Finance',
    description:
      'Tailored Mortgage Solutions For Commercial Properties, Ensuring Financial Viability And Growth.',
    image: CommercialImage,
  },
];
