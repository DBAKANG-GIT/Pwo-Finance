import { Button, Typography } from '@material-tailwind/react';

type Review = {
  name: string;
  review: string;
  response: string;
  time: string;
};

const reviews = [
  {
    name: 'Offic!al',
    review:
      'PWO finance is the one stop shop. A dedicated team of professionals who take great pride in what they do and how it is achieved.',
    response: 'Thanks, always glad to be of service!! Keep at it!!',
    time: '2 years ago',
  },
  {
    name: 'addis addis',
    review:
      'Very professional, they know what they do and Excellent customer service.',
    response:
      'Thanks Mesfin, we sincerely appreciate the review and look forward to be of more service!',
    time: '9 months ago',
  },
  {
    name: 'victor Eriamiator',
    review:
      'The service they provided me was first class, and in my years of property management they are the best.',
    response:
      'Thanks Victor, you have been a very valuable client and we are very grateful to be of service to you!! Humbled by your review, Thank you!!',
    time: '2 years ago',
  },
  {
    name: 'sandra yamoah',
    review:
      'Very professional, helpful, understanding and value and always aim to provide individualize customer service.',
    response:
      'Thank you Sandra, we are always delighted to be of service. Very glad that you appreciated our service.',
    time: '2 years ago',
  },
  {
    name: 'Priscilla Nyathi',
    review:
      'Exceptional service for many years, highly experienced and reliable service provider in all their dealings...',
    response:
      'Thank you Priscilla!! We are very grateful to be of service and appreciate your kind words!! May God bless you abundantly!!',
    time: 'a year ago',
  },
  {
    name: 'Thelma Allen',
    review:
      'PWO Finance, thank you for your excellent professional and honest service.',
    response:
      'Thanks Thelma. We are always happy to help people work efficiently in the property market and protect the value they worked hard for!!',
    time: '2 years ago',
  },
];

const TestimonialCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg m-4 max-w-sm transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:opacity-90">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">💬</span>
        <div>
          <Typography className="text-gray-600">{review.time}</Typography>
        </div>
      </div>
      <Typography className="text-gray-700 mb-4">{review.review}</Typography>
      <Typography className="text-gray-600 italic">
        "{review.response}"
      </Typography>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat my-16 "
      style={{
        backgroundImage:
          "url('https://d3epydxhc58hrf.cloudfront.net/testimonial-image.webp')",
      }}
    >
      <div className="bg-white bg-opacity-75 ">
        <div className="container mx-auto px-4 text-center py-8">
          <Typography variant="h2" className="text-4xl font-semibold mb-8">
            What Our Clients Say
          </Typography>
          <Typography className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Our team is dedicated to providing top-notch service and exceptional
            quality in all we do. We strive to exceed expectations, ensuring
            customer satisfaction every step of the way.
          </Typography>
          <div className="flex flex-wrap justify-center items-start">
            {reviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>

          <div className="mt-8 items-center flex justify-center">
            <a
              href="https://g.page/r/CTdfApeyrzZ4EBM/review"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                variant="text"
                className="flex items-center gap-2 text-blue-600"
              >
                Read More{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
