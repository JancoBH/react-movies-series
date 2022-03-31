export const Home = () => {
  const sections = [
    { title: 'Section 1', background: 'bg-gray-900' },
    { title: 'Section 2', background: 'bg-blue-500' },
    { title: 'Section 3', background: 'bg-green-500' },
  ];

  return (
    <>
      <section
        className="bg-no-repeat bg-cover bg-center text-white flex justify-center items-center h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,41,49,.8),rgba(26,33,74,.8)),url("https://image.tmdb.org/t/p/original//56v2KjBlU4XaOv9rVYEQypROD7P.jpg")',
        }}
      >
        <h1 className="text-5xl">Stranger Things</h1>
      </section>
      {sections.map((sec) => (
        <div key={sec.title}>
          <section className={sec.background + ` text-white flex justify-center items-center h-96`}>
            <h1>{sec.title}</h1>
          </section>
        </div>
      ))}
    </>
  );
};
