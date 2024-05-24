import { useState } from 'react';
import { Button } from '@material-tailwind/react';

export function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
  };

  return (
    <div className="flex gap-4">
      <Button
        variant="outlined"
        className="max-w-fit"
        color={selectedButton === 'General inquiry' ? 'green' : 'gray'}
        onClick={() => handleButtonClick('General inquiry')}
      >
        General inquiry
      </Button>
      <Button
        variant="outlined"
        className="max-w-fit"
        color={selectedButton === 'Mortgage Support' ? 'green' : 'gray'}
        onClick={() => handleButtonClick('Mortgage Support')}
      >
        Mortgage Support
      </Button>
    </div>
  );
}

export default ButtonGroup;
