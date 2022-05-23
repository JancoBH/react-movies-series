import { Row } from '../../components/Row/Row';

export const Home = () => {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover bg-bottom text-white flex justify-center items-center h-[80vh]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,41,49,.8),rgba(26,33,74,.8)),url("https://image.tmdb.org/t/p/original//56v2KjBlU4XaOv9rVYEQypROD7P.jpg")',
        }}
      >
        <h1 className="text-5xl">Provisional Title</h1>
      </section>

      <section className="text-white h-full overflow-hidden">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </section>
    </>
  );
};
