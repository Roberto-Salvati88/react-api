// MILESTONE 2 e 3: card con nome, anno, nazionalità, biografia, immagine, riconoscimenti
// BONUS 3: i film famosi. Attenzione: le due API usano campi diversi
// (attrici → most_famous_movies, attori → known_for)
function ActorCard({ person }) {
  const { name, birth_year, nationality, biography, image, awards } = person;
  const movies = person.most_famous_movies || person.known_for || [];

  return (
    <article className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p className="meta">{birth_year} · {nationality}</p>
        <p>{biography}</p>
        <p><strong>Riconoscimenti:</strong> {Array.isArray(awards) ? awards.join(', ') : awards}</p>
        {movies.length > 0 && <p><strong>Film:</strong> {movies.join(', ')}</p>}
      </div>
    </article>
  );
}

export default ActorCard;
