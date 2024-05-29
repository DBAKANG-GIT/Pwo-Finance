import React from 'react';

const Reviews = () => {
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
      name: 'benjamin kwofie',
      review:
        'Very honest and dedicated in helping clients. Thank you for your service.',
      response:
        'Thank you Benjamin. We very grateful to be of service to you. We do appreciate helping landlords build portfolios.',
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
      name: 'kamille Hendricks',
      review:
        'Great service! Professional and all carried out in a timely fashion - thank you!',
      response:
        'Absolutely Thankful to work with you Kamille. Thank you very much for trusting us.',
      time: '2 years ago',
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

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-center mb-6">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <div key={index} className="w-full md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"{review.review}"</p>
              <p className="text-sm text-gray-500 mb-4">
                - {review.name}, {review.time}
              </p>
              <p className="text-gray-600 italic">
                Response from the owner: {review.response}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
