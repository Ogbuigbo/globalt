
import Image from 'next/image';
import OnlineLearningImg from '/public/path-to-images/online-learning.jpg';
import TravelImg from '/public/path-to-images/travel.jpg';
import RealEstateImg from '/public/path-to-images/real-estate.jpg';

export default function About() {
  return (
    <div className=" text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-images/hero-image.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">Welcome to Glorious T&T</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering lives through English learning, enriching travel experiences, and reliable real estate solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Our Mission</h2>
          <p className="text-lg">
            To provide high-quality English education, connect people with unique travel experiences, and offer reliable real estate solutions that enhance lives and create opportunities worldwide.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Our Vision</h2>
          <p className="text-lg">
            To be the leading platform for English learning, global travel, and sustainable real estate, fostering growth and development across diverse communities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">

          {/* English Online Learning */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image src='' alt="Online Learning" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">English Online Learning</h3>
              <p className="text-lg leading-relaxed">
                Our online English courses are designed to meet the needs of students, professionals, and beginners. With interactive lessons and expert instructors, you’ll master English in no time.
              </p>
            </div>
          </div>

          {/* Travel Services */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image src='' alt="Travel" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Travel Services</h3>
              <p className="text-lg leading-relaxed">
                Discover the world with us. Our travel packages are tailored to provide unique experiences, whether you're seeking adventure, relaxation, or cultural exploration.
              </p>
            </div>
          </div>

          {/* Real Estate Solutions */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image src='' alt="Real Estate" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">Real Estate Solutions</h3>
              <p className="text-lg leading-relaxed">
                Our team provides professional real estate guidance to help you invest confidently. Whether buying or renting, we ensure you find the perfect property for your needs.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
