import Link from "next/link";
import { Fragment } from "react";

// our-domain.com/news
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/power">what the fuck?!</Link></li>
        <li><Link href="/news/super">mother fucker!</Link></li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
