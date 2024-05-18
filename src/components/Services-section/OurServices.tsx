import PortfolioImage from '@/assets/PropertyPortfolioFinance.webp';
import DevelopmentImage from '@/assets/Development-Finance.webp';
import BridgingImage from '@/assets/Bridgingfinance.webp';
import CommercialImage from '@/assets/CommercialFinance.webp';
const services = [
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

const OurServices = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 shadow-lg rounded-lg bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
