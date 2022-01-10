import "./buttontop.scss"

function ButtonTop() {
  return (
    <div className="button-top">
      <a href="#header-section" className="button-top__inner">
        <span className="sr-only">button to top</span>
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default ButtonTop;