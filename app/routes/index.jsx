import { Link } from '@remix-run/react';

import homeStyles from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
      <h1>A better way to organize your life around stars</h1>
      <p>Try our early beta release and never loose track of your future.</p>
      <p>
        This app was created with awesome{' '}
        <a href="https://remix.run/">
          <strong>Remix.js</strong>
        </a>{' '}
        libary, check it out!{' '}
      </p>
      <p id="cta">
        <Link to="/signs">Go!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}
