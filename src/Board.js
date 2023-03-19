export default function Board(prop) {
  return (
      <div className="Board row gap">
        <div className="cropped">{prop.image}</div>
        <div>
          <div className="x120 white">{prop.title}</div>

          <br />

          <div className="tech row vcenter">
            <div>Made with:</div>
            <div>{prop.tech}</div>
          </div>

          {prop.description}
          <br />
          <br />
          <a href={prop.link} rel="noopener noreferrer" target="_blank">
            Link
          </a>
        </div>
      </div>

  );
}
