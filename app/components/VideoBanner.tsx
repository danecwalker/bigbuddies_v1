const VideoBanner = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-8 flex flex-col gap-2 justify-center items-center">
      <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
        <video className="w-full h-full object-cover border-none" autoPlay>
          <source src="videos/Demo Common App Tool.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default VideoBanner