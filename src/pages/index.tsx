export default function Home() {
  return (
    <>
      <ul>
        <li>
          <a href="#link1">link1</a>
        </li>
        <li>
          <a href="#link2">link2</a>
        </li>
        <li>
          <a href="#link3">link3</a>
        </li>
      </ul>

      <div id="link1" style={{ backgroundColor: "red", height: "2000px" }}>
        link1
      </div>
      <div id="link2" style={{ backgroundColor: "blue", height: "2000px" }}>
        link2
      </div>
      <div id="link3" style={{ backgroundColor: "green", height: "2000px" }}>
        link3
      </div>
    </>
  );
}
