const YoutubeSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="w-full h-[500px] md:h-[650px] overflow-hidden">

        <iframe
          className="w-full h-full scale-[1.35]"
          src="https://www.youtube.com/embed/Z1SUiOugDhk?autoplay=1&mute=1&loop=1&playlist=Z1SUiOugDhk"
          title="College Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </section>
  );
};

export default YoutubeSection;