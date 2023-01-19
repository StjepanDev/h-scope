import { Link } from '@remix-run/react';

import styles from './SignList.css';

function SignList({ data }) {
  return (
    <ul id="note-list">
      {data.map((sign, index) => (
        <li key={sign.id} className="note">
          <Link to={sign.id}>
            <article>
              <header>
                <ul className="note-meta">
                  <li>No {index + 1}</li>
                </ul>
                <h2>{sign.attributes.name}</h2>
              </header>
              {/* <p>{note.content}</p> */}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SignList;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
