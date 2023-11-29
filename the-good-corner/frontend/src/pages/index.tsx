import Head from "next/head";
import styles from "../styles/Home.module.css";
import RecentAds from "../components/RecentAds";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <RecentAds />
        {/* <Header /> */}
      </main>
    </>
  )
}
