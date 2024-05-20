import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const PrivacyPage = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="min-h-screen bg-lightPink p-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Introduction
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            PWO Finance is committed to protecting the privacy and
            confidentiality of all individuals and takes its responsibilities
            regarding the security of data very seriously. We abide by the rules
            of the General Data Protection Regulation (GDPR) upheld by the
            Information Commissioner Officer (ICO) and are authorised though we
            are an unregulated business offering to advise and/or arrange
            unregulated mortgages only. This includes processing any personal
            data lawfully, fairly and in a transparent manner.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Information collected via our website
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We collect web usage information when you visit our website
            including information such as the date, time, page viewed or
            searched relating to your browsing activity. Where you have provided
            personal data we may collect web usage information to enable us to
            build a demographic profile.
          </p>
          <p className="mb-4">
            We may also use web usage information to create statistical data
            regarding the use of our website. Where statistical data is produced
            we may then use that data to help us assess the effectiveness of
            marketing campaigns, develop and deliver services and information to
            improve the overall effectiveness of our website. We will also use
            IP addresses to analyse trends, track users movements and gather
            broad demographic information for our own internal use.
          </p>
          <p className="mb-4">
            Within our website you can interact with us, if you so wish. Where
            you provide your personal data on our website it will be taken as a
            positive action that you would like us to contact you for the
            purpose as set out on our website.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>Cookies</AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            When you visit our website we may store some information (commonly
            known as a cookie) on your computer. Cookies do not damage your
            computer. Cookies are pieces of information that a website transfers
            to your hard drive to store and sometimes track information about
            you. Cookies are specific to the server that created them. They
            cannot be accessed by other servers. You do not have to accept
            cookies. You can decide if you want to accept cookies by changing
            the settings on your browser to either accept, reject or notify you
            when a cookie is set. All cookies used by this website are used in
            accordance with current UK and EU Cookie Law.
          </p>
          <h3 className="text-xl font-medium mb-2">Type of Cookie Purpose</h3>
          <p className="mb-4">
            Strictly necessary cookies. These are cookies that are required for
            the operation of our website. They include, for example, cookies
            that enable you to log into secure areas of our website. Like most
            websites, our site uses Google Analytics (GA) to track user
            interaction. We use this data to determine the number of people
            using our site, to better understand how they find and use our web
            pages and to see their journey through the website. Although GA
            records data such as your geographical location, device, internet
            browser and operating system, none of this information personally
            identifies you to us.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Linking to third party websites
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We do not take responsibility for the privacy polices or practices
            of other sites, even where you access them using links from our
            website. You are advised to read the Privacy Notice of other
            websites prior to using them.
          </p>

          <p className="mb-4">
            What information do we collect about you if you are interested in
            our services and why?
          </p>

          <p className="mb-4">
            As a Brokerage and as part of our service we will only collect
            information from you so that we can advise and/or arrange a complex
            mortgage that maybe suitable for you. This provides us with all the
            information that we need from you in order to provide you with a
            suitable product that meets your circumstances and requirements.
          </p>
          <p className="mb-4">
            When obtaining information from you we will do this by phone, email
            or post and will confirm the accuracy of the data collated. It is
            important that all the data we hold on you is accurate so that we
            can advise and/or arrange suitable products to you.
          </p>
          <p className="mb-4">
            The types of information we will collect from you includes; contact
            details, occupation, income and expenditure, credit details,
            mortgage requirements, existing policies, solicitors/accountants
            details, bank details.
          </p>
          <p className="mb-4">
            In addition, we may collect sensitive personal data such as medical
            conditions or criminal offence data where required to do so on your
            behalf.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          Contact details received from a third party lead generator
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            Occasionally we may receive your contact details from a third party
            lead generator who you have expressed an interest in the
            products/service we have to offer. Where we use lead generators we
            will request from them that they have obtained your consent and have
            made it clear to you that they will pass your details on to a firm
            such as ours and that you will be expecting us to contact you.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          Information from other sources
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We may obtain information from other sources such as public records,
            if required. This is to enable us to verify who you are or facts
            that you have told us are accurate.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)}>
          How will we use this information?
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We will only use your data in ways that you would reasonably expect
            us to. Below summarises how we use your data.
          </p>
          <p className="mb-4">
            We will use the information you provide to us to research the market
            on your behalf to find a suitable product that meets your
            circumstances and needs. Once we have carried out research we will
            provide you with a personalised illustration detailing the product
            information. Whilst you consider the illustration we will remain in
            touch to answer any questions you may have.
          </p>
          <p className="mb-4">
            If you are happy to proceed we will then use your data to complete
            an application form which will then be forwarded to the relevant
            Lender. We will then liaise with them on your behalf until
            completion.
          </p>
          <p className="mb-4">
            We will then contact you at renewal or when your product is due to
            be reviewed so that we can continue suitability and continuity.
            Where your circumstances or personal information have changed we
            will update our records and notify the Lender to do the same.
          </p>
          <p className="mb-4">
            We will also use your data to assist with handling a complaint if
            you are not happy with the service you have received.
          </p>
          <p className="mb-4">
            As part of our service we like to keep our customers up to date with
            new products or offers that are available and maybe of interest.
            Therefore, we may contact you from time to time through email
            marketing, phone, text or other types of marketing material. If you
            wish to opt out of this at any point then please let us know.
          </p>
          <p className="mb-4">
            In the interest to improve our services, telephone calls may be
            monitored and/or recorded for training purposes and to assist us
            handle a complaint. Where we record the call you will be informed of
            this.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 9}>
        <AccordionHeader onClick={() => handleOpen(9)}>
          The lawful basis on which we use this information
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            How we use your information (detailed above) we will do so using the
            lawful basis legitimate interests. We have decided upon this basis
            as it allows us to meet with the ICO rules and is the most suitable
            lawful basis for processing data with a view to arranging a policy.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 10}>
        <AccordionHeader onClick={() => handleOpen(10)}>
          Who will it be shared with?
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            As stated above, if you wish to proceed to take a product through
            us, then we will pass your details on to the Lender. The information
            we pass on will be detailed within the application we complete on
            your behalf. We may also liaise with your Solicitor and/or
            Accountant where relevant to arrange a product on your behalf.
          </p>
          <p className="mb-4">
            Where required we may forward your details onto regulatory
            authorities or fraud agencies where we have a legal obligation to do
            so to comply with our regulatory requirements or where fraud is
            suspected. We may do this under the lawful basis legal obligation.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 11}>
        <AccordionHeader onClick={() => handleOpen(11)}>
          What we will do to ensure the security of personal information
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We will not share any of the information you provide to third
            parties for marketing purposes or store any of your information
            outside of the European Economic Area. The information you provide
            will be held securely by us regardless of whether the information is
            in electronic or physical format. We use leading technologies and
            security measures to safeguard your information and keep strict
            security standards to prevent any unauthorised access to it.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 12}>
        <AccordionHeader onClick={() => handleOpen(12)}>
          How long will we retain your data
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We will only hold data for no longer than is necessary. Where we
            have arranged a product on your behalf we will keep your file
            including your personal data and any call recording, on record for a
            minimum of six years. Where we need to hold your file for longer
            than this then we will inform you of this.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 13}>
        <AccordionHeader onClick={() => handleOpen(13)}>
          What are your rights?
        </AccordionHeader>
        <AccordionBody>
          <h4 className="font-bold">You have the right to:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Be informed about how we use, share and store your personal
              information;
            </li>
            <li>
              Request access to the personal data we hold on you (also known as
              a Subject Access Request (SAR)). Where a SAR is requested we will
              respond promptly and within one month from the date we receive the
              request;
            </li>
            <li>
              Request your personal data is amended if inaccurate or incomplete;
            </li>
            <li>
              Request your personal data is erased where there is no compelling
              reason for its continued processing and we don’t have a legitimate
              interest to retain it;
            </li>
            <li>Request that the processing of your data is restricted;</li>
            <li>The right to object to your personal data being processed;</li>
            <li>
              Rights in relation to automated decision making and profiling.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 14}>
        <AccordionHeader onClick={() => handleOpen(14)}>
          Marketing
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            Where we need your consent we will ask for this separately. We do
            not use pre-ticked boxes or make assumptions that you have given
            your consent. Your consent must be freely given by positively opting
            in or making a clear affirmative action that you are giving your
            consent. We will do our very best to ensure you know exactly what
            you are consenting to and remind you that you may withdraw your
            consent at anytime by contacting us by email or phone. Where consent
            is obtained a record of this will be made confirming what you have
            consented to, the time and date and how consent was obtained.
          </p>

          <p>
            <span className="font-bold">Customers:</span> Our customers are
            important to us however we appreciate that on some occasions you may
            wish to look elsewhere. If you do, we would like to stay in touch
            and therefore will ask for your consent in order for us to do so.
          </p>
          <p>
            Potential Customers: Where you have expressed an interest in a
            product but have then decided not to proceed we would like to keep
            in touch therefore will ask for your consent to do so in case a
            product maybe of interest to you at a later date.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 15}>
        <AccordionHeader onClick={() => handleOpen(15)}>
          Marketing{' '}
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We hope that the service you receive from us is to the high standard
            you would expect. If at any point you are unhappy with the way we
            have used your data then please notify: William PW Omony by either
            email, post or phone below.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 16}>
        <AccordionHeader onClick={() => handleOpen(16)}>
          Changes to the information
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            We regularly review and, where necessary update our Privacy Notice.
            If we plan to use personal data for a new purpose our Privacy Notice
            will be updated and you will be notified.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 17}>
        <AccordionHeader onClick={() => handleOpen(17)}>
          How to contact us
        </AccordionHeader>
        <AccordionBody>
          <p className="mb-4">
            If you wish to contact us about the above or any other matter then
            please contact us at:
          </p>
          <p className="mb-4">
            PWO Finance
            <br />
            268 41 Millharbour
            <br />
            London.
            <br />
            E14 9NH.
            <br />
            Contact: William Omony.
            <br />
            Tel: 07858418449
            <br />
            Email:{' '}
            <a
              href="mailto:williamomony@pwofinance.co.uk"
              className="text-blue-500 underline"
            >
              williamomony@pwofinance.co.uk
            </a>
            <br />
            Website:{' '}
            <a
              href="http://www.pwofinance.co.uk"
              className="text-blue-500 underline"
            >
              www.pwofinance.co.uk
            </a>
          </p>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default PrivacyPage;
