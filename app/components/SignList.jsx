import { Link } from "@remix-run/react";

import styles from "./SignList.css";

function SignList({ data }) {
  return (
    <ul id='sign-list'>
      {data.map((sign, index) => (
        <li key={sign.id} className='sign'>
          <Link to={sign.id}>
            <article>
              <header>
                <ul className='sign-meta'>
                  <li>No {index + 1}</li>
                </ul>
                <h2>{sign.attributes.name}</h2>
              </header>
              {/* <p>{sign.content}</p> */}
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SignList;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
