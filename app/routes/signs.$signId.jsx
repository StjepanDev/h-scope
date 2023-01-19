import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import styles from '~/styles/sign-details.css';

export default function SignDetailsPage() {
  const sign = useLoaderData();
  // console.log(sign);

  return (
    <main id="sign-details">
      <header>
        <nav>
          <Link to="/signs">Back to signs</Link>
        </nav>
        <h1>{sign.name}</h1>
        <h6>
          {sign.start_day} {sign.start_month} - {sign.end_day} {sign.end_month}
        </h6>
        <h1>{sign.attributes.text}</h1>
      </header>
      {/* <p id="sign-details-content">{sign.content}</p> */}
    </main>
  );
}

export async function loader({ params }) {
  const res = await fetch('API');
  const data = await res.json();
  const signs = data.data;

  const incl = data.included;
  // console.log(signs);
  const signId = params.signId;
  const selSign = signs.find((sign) => sign.id === signId);
  const selectedIncluded = incl.find(
    (includ) => includ.id === selSign.relationships.horoscope.data.id
  );

  // console.log(selNote.attributes,selectedIncluded);
  const selectedSign = { ...selSign.attributes, ...selectedIncluded };

  if (!selectedSign) {
    throw json(
      { message: 'Could not find sign for id ' + signId },
      { status: 404 }
    );
  }

  return selectedSign;
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function meta({ data }) {
  console.log(data.name);
  return {
    title: data.name,
    description: `Horoskop danas za znak ${data.name}`,
  };
}
