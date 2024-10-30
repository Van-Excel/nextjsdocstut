import LikeButton from './like-button';


function Header(props) {
  return <h1>Develop. Preview. Ship {props.title}</h1>;
}

export default function HomePage() {
  const names = ["Ada", "Vida", "Aso", "Lila"];

  return (
    <div>
      <Header title="React" />
      <Header title="TypeScripts" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
        <LikeButton />
      </ul>
    </div>
  );
}
