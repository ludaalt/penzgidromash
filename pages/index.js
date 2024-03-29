import Head from 'next/head';
import Section from "../components/Section";
import { firstSection, secondSection} from '../data/data';

const Home = () => {
  return (
    <>
      <Head>
        <title>Компания ПЕНЗГИДРОМАШ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="../fonts/Gilroy/Gilroy-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="../fonts/Gilroy/Gilroy-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="../fonts/Gilroy/Gilroy-Medium.ttf" as="font" crossOrigin="" />
      </Head>

      <Section props={firstSection} />
      <Section props={secondSection} />
    </>
  )
}

export default Home;
