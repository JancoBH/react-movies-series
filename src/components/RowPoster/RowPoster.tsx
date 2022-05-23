import './rowPoster.scss';

export const RowPoster = (movie: any) => {
  const {
    item: { title, poster },
  } = movie;

  return (
    <div className={`Row__poster`}>
      <img src={poster} alt={title} />
      <div className="Row__poster-info">
        <div className="Row__poster-info--title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};
