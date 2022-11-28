export default function Logo(prop) {
  return (
    <div className="Logo">
      {prop.logo}
      <div className="logotxt white">{prop.description}</div>
    </div>
  );
}
