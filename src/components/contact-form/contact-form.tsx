import { InputWithDropdown } from '../Input-dropdown/Input-dropdown';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import { ButtonGroup } from '@/components/button-group/button-group';

interface ContactSectionProps {
  contactImage: string;
  formAction: string;
}

export function ContactSection({
  contactImage,
  formAction,
}: ContactSectionProps) {
  return (
    <section className="grid  items-start">
      <form
        name="callback-form"
        id="callback-form"
        action={formAction}
        className="flex flex-col gap-4"
        method="post"
      >
        <input type="hidden" name="form-name" value="callback-form" />
        <Typography
          variant="small"
          className="text-left !font-semibold !text-gray-600"
        >
          Select Options for Business Engagement
        </Typography>
        <div className="flex gap-4">
          <ButtonGroup />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            color="gray"
            size="lg"
            name="first-name"
            label="First Name"
            className="focus:border-t-gray-900"
            required={true}
            containerProps={{
              className: 'min-w-full',
            }}
            labelProps={{
              className: '',
            }}
          />

          <Input
            type="text"
            color="gray"
            size="lg"
            label="Last Name"
            name="last-name"
            required={true}
            className="focus:border-t-gray-900"
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: '',
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="email"
            color="gray"
            size="lg"
            label="name@email.com"
            name="email"
            required={true}
            className="focus:border-t-gray-900"
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: '',
            }}
          />
          <InputWithDropdown />
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
            className="focus:border-t-gray-900"
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: '',
            }}
          />
          <Input
            type="time"
            color="gray"
            size="lg"
            label="Preferred Time"
            required={true}
            name="preferred-time"
            className="focus:border-t-gray-900"
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: '',
            }}
          />
        </div>

        <Textarea
          rows={6}
          color="gray"
          label="How can we help you?"
          required={true}
          name="message"
          className="focus:border-t-gray-900"
          containerProps={{
            className: '!min-w-full',
          }}
          labelProps={{
            className: '',
          }}
        />

        <Button type="submit" className="w-full" color="gray">
          Send Enquiry
        </Button>
      </form>
    </section>
  );
}

export default ContactSection;
