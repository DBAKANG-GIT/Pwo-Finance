import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { ButtonGroup } from '@/components/button-group/button-group';
import { Suspense, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InputWithDropdown = React.lazy(
  () => import('../Input-dropdown/Input-dropdown')
);

interface ContactSectionProps {
  formAction: string;
}

export function ContactSection({ formAction }: ContactSectionProps) {
  const [selectedButton, setSelectedButton] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);

    const formDataEntries = Array.from(formData.entries()) as string[][];

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataEntries).toString(),
    });

    navigate('/success');
  };

  return (
    <section className="grid items-start">
      <form
        name="callback-form"
        id="callback-form"
        action={formAction}
        className="flex flex-col gap-6"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="callback-form" />
        <Typography
          variant="small"
          className="text-left font-semibold text-gray-800"
        >
          Select Options for Business Engagement
        </Typography>
        <div className="flex gap-4">
          <ButtonGroup
            setSelectedButton={setSelectedButton}
            selectedButton={selectedButton}
          />
          <input type="hidden" name="button" value={selectedButton} />{' '}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            color="gray"
            size="lg"
            name="first-name"
            label="First Name"
            required={true}
            containerProps={{ className: 'min-w-full' }}
          />
          <Input
            type="text"
            color="gray"
            size="lg"
            label="Last Name"
            name="last-name"
            required={true}
            containerProps={{ className: 'min-w-full' }}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="email"
            color="gray"
            size="lg"
            label="Email"
            name="email"
            required={true}
            containerProps={{ className: 'min-w-full' }}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <InputWithDropdown />
          </Suspense>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="date"
            color="gray"
            size="lg"
            max="9999-12-31"
            label="Preferred Date"
            required={true}
            name="preferred-date"
            containerProps={{ className: 'min-w-full' }}
          />
          <Input
            type="time"
            color="gray"
            size="lg"
            label="Preferred Time"
            required={true}
            name="preferred-time"
            containerProps={{ className: 'min-w-full' }}
          />
        </div>
        <Textarea
          rows={6}
          color="gray"
          label="How can we help you?"
          required={true}
          name="message"
          containerProps={{ className: 'min-w-full' }}
        />
        <Button
          className="w-full md:w-auto bg-gradient-to-r from-swampGreen to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          type="submit"
        >
          Send Enquiry
        </Button>
      </form>
    </section>
  );
}

export default ContactSection;
