import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Content from '@/components/content';
import Uses from '@/components/uses';
import Steps from '@/components/steps';


export default function Home() {
  const mainStyles = {
    background: 'Beige-[#DDD0C8]',
    minHeight: '50vh', // Set a minimum height to fill the viewport
    overflow:"hidden",
  };

  return (
    <main style={mainStyles}>
      <Header/>
      <Hero />
      <Content />
      <Steps/>
      <Uses />
      <Footer />
    </main>
  );
}
