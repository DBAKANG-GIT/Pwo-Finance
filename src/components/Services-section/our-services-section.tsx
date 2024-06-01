import { ServiceCard } from './service-card';
import { services } from './services';

const OurServices = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};
export default OurServices;
