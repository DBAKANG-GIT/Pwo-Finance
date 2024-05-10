import { Button } from '@material-tailwind/react';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to PWO Finances</h1>
      <Button variant="filled">filled</Button>]
      <div className="flex w-max gap-4">
        <Button variant="filled">filled</Button>
        <Button variant="gradient">gradient</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </div>
      {/* ... rest of the home page */}
    </div>
  );
}
export default LandingPage;
