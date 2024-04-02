import Head from "next/head";
import Link from "next/link";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href={{
        pathname: "/[username]",
        query: {username: "geo23"}
      }}>Profile</Link>
    </div>
  )
}
