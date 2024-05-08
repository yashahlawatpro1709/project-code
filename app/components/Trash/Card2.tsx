import React from 'react';
interface Card2Props {
    isActive: boolean;
  }

export default function Card2({isActive}:Card2Props) {
    const scaled=isActive?"scaled":"";
  return (
    <div className={`card w-100 glass mx-4 ${scaled?"scale-125":""}`}>
    <div className='dataset'>
      <h1 className='text-center text-xl font-bold'>LEADER</h1>
      <h1 className='text-center text-xl font-bold'>The Forrester Wave</h1>
      <div className="card-body text-center">
        <figure className="flex justify-center">
          <img
            src="https://images.ctfassets.net/ukazlt65o6hl/2KN8CMnnEUjFWTtKfaUI2y/c07d7cfa82ebb60c3dcbc77cf7d5ddfd/Social-Suites-720.png?w=1920&q=50&fm=webp"
            alt="car!"
            className="max-w-xs mx-auto"
          />
        </figure>
      </div>
      <div className="card-body text-center">
        <p className="text-lg font-bold">Social Suites, Q3 2021</p>
        <div className="card-actions flex justify-center">
          <a href="/gartner-cmp-2023/" className="mt-6 tablet:mt-10 desktop-sm:mt-6 desktop-lg:mt-8 flex items-center gap-3 text-baseBlack dark:text-white hover:text-primaryOceanBlue hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className="fill-primaryOceanBlue h-[18px] w-[18px]">
              <g clipPath="url(#arrow_svg__a)">
                <path d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
                <path d="M.93 6.511h8.38L5.65 9.98a.692.692 0 0 0-.22.503c0 .188.08.369.22.502a.77.77 0 0 0 .53.208.77.77 0 0 0 .53-.208l4.864-4.61a.791.791 0 0 0 .25-.574.791.791 0 0 0-.25-.574L6.709.616A.771.771 0 0 0 6.18.413a.77.77 0 0 0-.527.208.692.692 0 0 0-.219.5c0 .188.078.368.217.501L9.31 5.09H.93a.772.772 0 0 0-.53.208.692.692 0 0 0-.22.502c0 .189.079.37.22.503.14.133.33.208.53.208Z"></path>
              </g>
              <defs>
                <clipPath id="arrow_svg__a">
                  <path d="M0 .114h12v11.371H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span className="whitespace-nowrap uppercase">Explore</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
