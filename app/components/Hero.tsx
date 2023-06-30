import { Link } from "@remix-run/react"
import ReactTyped from "react-typed"

const Hero = () => {
  return (
    <section className="w-full h-[600px] p-8 flex flex-col gap-2 justify-center items-center">
      <ReactTyped
        className="text-3xl font-medium text-center text-violet-400"
        strings={[
              "Transform",
              "Revolutionize",
              "Level-Up",
              "Reimagine",
              "Pioneer",
              "Refine",
              "Empower",
              "Excel",
              "Amplify",
              "Reinvent",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />

      <h1 className="text-lg font-medium text-center">Your Common App Essay with <span className="text-violet-400">Merlin</span></h1>
      <p className="text-sm text-center">Get instant feedback on your Common App Essay with our proprietary AI technology.</p>
      <Link to="#" className="text-sm bg-violet-400 text-white px-4 py-2 rounded-lg mt-4">
        Get Started Now
      </Link>
    </section>
  )
}

export default Hero