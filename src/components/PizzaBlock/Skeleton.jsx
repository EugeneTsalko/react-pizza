import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="270" rx="8" ry="8" width="280" height="27" />
    <rect x="0" y="317" rx="8" ry="8" width="280" height="88" />
    <rect x="0" y="431" rx="8" ry="8" width="100" height="27" />
    <rect x="125" y="421" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
