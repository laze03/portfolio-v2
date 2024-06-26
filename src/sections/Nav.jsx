import Button from "../components/Button";
// import logo from "../assets/logo.svg";

function link(n, s) {
  return (
    <a href={"#" + s} className={s + " link"}>
      <span>{"0" + n + ". "}</span>
      {s}
    </a>
  );
}

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <a href="/" className="logo">
        <object type="image/svg+xml" data="logo.svg"></object>
      </a>
      <div className="nav__items">
        {link(1, "About")}
        {link(2, "Experience")}
        {link(3, "Work")}
        {link(4, "Contact")}
        <Button
          className="button-s"
          href="./CV_LAZRAK_Ahmed.pdf"
          text="Resume"
          download="CV_LAZRAK_Ahmed.pdf"
        />
      </div>
    </nav>
  );
}
