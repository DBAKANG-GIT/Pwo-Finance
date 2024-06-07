import { Typography } from '@material-tailwind/react';

export function SocialLinks() {
  return (
    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
      {/* Linkedin */}
      <Typography
        href="https://www.linkedin.com/company/pwofinance/"
        as="a"
        className="opacity-80 transition-opacity hover:text-blue-400 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      </Typography>
      {/* Google */}
      <Typography
        as="a"
        href="https://g.page/r/CTdfApeyrzZ4EBM/review"
        className="opacity-80 transition-opacity hover:text-blue-400 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z"
            clipRule="evenodd"
          />
        </svg>
      </Typography>
      {/* Twitter */}
      <Typography
        as="a"
        href="https://x.com/Pwomortgages"
        className="opacity-80 transition-opacity hover:text-blue-400 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 50 50"
          aria-hidden="true"
        >
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
        </svg>
      </Typography>
    </div>
  );
}
