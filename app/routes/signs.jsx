import { Link, useCatch, useLoaderData } from '@remix-run/react';

import SignList, { links as signListLinks } from '~/components/SignList';

export default function SignsPage() {
  const data = useLoaderData();

  return (
    <main>
      <SignList data={data} />
    </main>
  );
}

export async function loader() {
  const res = await fetch('API');
  let data = await res.json();
  // data = data.data;
  console.log(data);
  return data.data;
}

export function links() {
  return [...signListLinks()];
}

export function meta() {
  return {
    title: 'Horoscope Signs',
    description: 'Manage your life according to horoscope!',
  };
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || 'Data not found.';

  return (
    <main>
      <p className="info-message">{message}</p>
    </main>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <main className="error">
      <h1>An error related to your signs occurred!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}
