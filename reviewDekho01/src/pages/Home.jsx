import Hero from "../components/Homepage/Hero"
import MedicinalProducts from "../components/Homepage/MedicinalProducts"
import OldReviews from "../components/Homepage/OldReviews"
import SignupSection from "../components/Common/SignupSection"

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <MedicinalProducts />
      <OldReviews />
      <SignupSection />
    </div>
  )
}

export default Home

