import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection 
        title="Exceptional Healthcare For Your Family"
        subtitle="Comprehensive medical care for the whole family"
        imageUrl="/doctor-patient.jpg"
      />
      <Testimonials />
      
      {/* Other home page sections */}
    </main>
  );
}