import React from "react";
import { Link } from "react-router-dom";

export default function NumerologyDetail() {
  return (
    <div>
      <header className="float-start w-100">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img alt="logo" src="images/logo.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobile-menu"
            >
              <span>
                {" "}
                <i className="fas fa-bars"></i>{" "}
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/tarotReader">
                    Tarot Reader
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/tarotCard">
                    Tarot Card{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/numerology">
                    Numerology{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block">
              <div className="right-menui">
                <ul>
                  <li>
                    <div className="cusotme-ph">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <span>
                        Customer Care
                        <b className="d-block">1800-254-256</b>
                      </span>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="modal"
                      href="#registerModal"
                      className="btn consult-btn"
                    >
                      {" "}
                      Consult Now{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section class="sub-banner-section float-start w-100">
        <div class="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div class="container">
          <h2 class="text-center text-white"> Number Details </h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active">Number Details</li>
            </ol>
          </nav>
        </div>
      </section>
      <main class="float-start w-100 body-main">
        <section class="details-page-details d-inline-block w-100 pt-5">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-8">
                <div class="left-dels-hor">
                  <h5 class="sub"> Numerology </h5>
                  <h2 class="text-white mt-3 d-flex align-items-center">
                    {" "}
                    <span class="nuoi"> 01 </span>
                    <span> One </span>{" "}
                  </h2>
                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <h2 class="mt-4 text-white"> Career </h2>
                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <h2 class="mt-4 text-white"> Love & relationship </h2>
                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <h2 class="mt-4 text-white"> Money </h2>
                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <h2 class="mt-4 text-white"> Health & Beauty </h2>
                  <p class="mt-4">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>

                  <h2 class="mt-4 text-white"> More Number for You </h2>
                  <ul class="mt-5">
                    <li>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Two{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Three{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Four{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Five{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Six{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Seven{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Eight{" "}
                      </a>
                      <a href="#" class="btn btn-moreh">
                        {" "}
                        Nine{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="right-details01 bg-white border-radius rounded-3 p-5">
                  <h2> Today's Matches </h2>
                  <div class="row row-cols-2 mt-5">
                    <div class="col">
                      <div class="comon-match text-center d-block w-100">
                        <h5> Love </h5>
                        <div class="crm-nu mx-auto"> 04 </div>
                        <p> Four </p>
                      </div>
                    </div>

                    <div class="col">
                      <div class="comon-match text-center d-block w-100">
                        <h5> Career </h5>
                        <div class="crm-nu mx-auto"> 08 </div>
                        <p> Eight </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="right-details01 bg-white border-radius rounded-3 mt-5 p-5">
                  <h2 class="mb-4"> Today's Star Ratings</h2>
                  <div class="comr-rating d-inline-block w-100">
                    <h5> Love </h5>
                    <p>
                      <span class="st-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                  </div>
                  <div class="comr-rating d-inline-block w-100">
                    <h5> Success </h5>
                    <p>
                      <span class="st-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                  </div>

                  <div class="comr-rating d-inline-block w-100">
                    <h5> Health & Beauty </h5>
                    <p>
                      <span class="st-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </span>

                      <i class="fas fa-star"></i>
                    </p>
                  </div>
                </div>

                <div class="right-details01 bg-white border-radius rounded-3 mt-5 p-5">
                  <h2 class="mb-4"> Read for other Number </h2>
                  <div class="row row-cols-2 row-cols-lg-3">
                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 02 </div>
                        <p> Two </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 03 </div>
                        <p> Three </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 04 </div>
                        <p> Four </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 05 </div>
                        <p> Five </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 06 </div>
                        <p> Six </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 07 </div>
                        <p> Seven </p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 08 </div>
                        <p> Eight</p>
                      </a>
                    </div>

                    <div class="col">
                      <a href="#" class="comon-links-do">
                        <div class="crm-nu"> 09 </div>
                        <p> Nine</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="our-astroly d-inline-block w-100">
          <div class="container">
            <div class="comon-heading text-center">
              <h2
                class="text-white comon-heading mt-3 mb-3"
                data-aos="fade-down"
              >
                {" "}
                Consult Our Numerology{" "}
              </h2>
              <h6 class="text-white" data-aos="fade-up">
                {" "}
                100+ Best Astrologers for Online Consultation
              </h6>
            </div>
            <div class="astrolger owl-carousel owl-theme mt-5">
              <a
                href="#"
                class="items-astro d-lg-grid align-content-center w-100"
              >
                <div class="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div class="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/spiritual-man-india-traditional-clothing-39495501.jpg"
                    />
                  </div>
                </div>
                <div class="asto-te-dl text-center">
                  <h5> James Dan </h5>
                  <p> Vedic</p>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul class="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div class="exp justify-content-between mt-2">
                    <span class="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      15Years
                    </span>

                    <h4 class="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      10
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                class="items-astro d-lg-grid align-content-center w-100"
              >
                <div class="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div class="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/istockphoto-1277971635-612x612.jpg"
                    />
                  </div>
                </div>
                <div class="asto-te-dl text-center">
                  <h5> Amit Patel </h5>
                  <p> Vedic</p>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul class="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div class="exp justify-content-between mt-2">
                    <span class="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      10Years
                    </span>

                    <h4 class="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      20
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                class="items-astro d-lg-grid align-content-center w-100"
              >
                <div class="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div class="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/image-13-1561127528.jpg"
                    />
                  </div>
                </div>
                <div class="asto-te-dl text-center">
                  <h5> Sumit Ghosh </h5>
                  <p> Vedic</p>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul class="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div class="exp justify-content-between mt-2">
                    <span class="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      12Years
                    </span>

                    <h4 class="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      25
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                class="items-astro d-lg-grid align-content-center w-100"
              >
                <div class="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div class="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/depositphotos_81108858-stock-photo-casual-business-indian-boy-portrait.jpg"
                    />
                  </div>
                </div>
                <div class="asto-te-dl text-center">
                  <h5> Ochoa Patel </h5>
                  <p> Tarot</p>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul class="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div class="exp justify-content-between mt-2">
                    <span class="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      20Years
                    </span>

                    <h4 class="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      14
                    </h4>
                  </div>
                </div>
              </a>

              <a
                href="#"
                class="items-astro d-lg-grid align-content-center w-100"
              >
                <div class="bg-round-im">
                  <img alt="hj" src="assets/images/author-bg.png" />
                  <div class="img-user mx-auto">
                    <img
                      alt="suer"
                      src="assets/images/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm.webp"
                    />
                  </div>
                </div>
                <div class="asto-te-dl text-center">
                  <h5> Irwin Dan </h5>
                  <p> Vedic</p>
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-translate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                      </svg>{" "}
                    </span>
                    <ul class="d-flex align-content-center">
                      <li> English , </li>
                      <li> Hindi </li>
                    </ul>
                  </div>
                  <div class="exp justify-content-between mt-2">
                    <span class="d-block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                      </svg>{" "}
                      10Years
                    </span>

                    <h4 class="d-flex text-center justify-content-center mt-3 align-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-dollar"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                      </svg>
                      20
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section class="news-letter-div d-inline-block w-100">
          <div class="container">
            <div class="comon-heading text-center mt-5">
              <h5 class="sub-heading" data-aos="fade-down">
                {" "}
                Our Newsletter{" "}
              </h5>
              <h2 class="text-white comon-heading mt-2 mb-3" data-aos="fade-up">
                {" "}
                Subscribe And Ask For Free{" "}
              </h2>
            </div>
            <p class="col-lg-8 mx-auto d-block text-center" data-aos="fade-up">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <form
              method="get"
              action="https://oxentictemplates.in/templatemonster/astrology/gm"
              class="w-100"
            >
              <div
                class="subcribe-section mt-5 col-lg-5 mx-auto d-flex justify-content-center"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
                <button type="submit" class="subscribe btn">
                  {" "}
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer class="float-start w-100 pt-5">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 align-content-center">
            <div class="col">
              <a href="index.html">
                <img alt="logo" src="assets/images/logo.png" />
              </a>
              <p class="text-white mt-3 col-lg-10">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div class="col">
              <div class="colm-footer">
                <h5> Contact Us </h5>
                <ul>
                  <li>
                    {" "}
                    <i class="fab fa-whatsapp"></i> +62-311-89-90-19
                  </li>
                  <li>
                    {" "}
                    <i class="fas fa-paper-plane"></i> exmaple@gmail.com
                  </li>
                  <li>
                    {" "}
                    <i class="fas fa-phone-alt"></i> +62-311-89-90-19
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="colm-footer">
                <h5> Our Services </h5>
                <ul>
                  <li>
                    {" "}
                    <a href="tarot.html">Tarot </a>
                  </li>
                  <li>
                    {" "}
                    <a href="numerology.html"> Numerology </a>
                  </li>
                  <li>
                    {" "}
                    <a href="astrologer.html"> Astrologer </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="colm-footer">
                <h5> Quick Links </h5>
                <ul>
                  <li>
                    {" "}
                    <a href="about.html"> About </a>
                  </li>
                  <li>
                    {" "}
                    <a href="blog.html">Blog </a>
                  </li>
                  <li>
                    {" "}
                    <a href="contact-us.html"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <div class="d-flex align-items-center justify-content-between">
            <p> Copyright © 2023. All rights reserved.</p>
            <ul>
              <li>
                <a href="#">
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </a>
                <a href="#" class="mx-2">
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* <!-- mobile menu --> */}

      <div class="offcanvas offcanvas-end mobile-menu-div" id="mobile-menu">
        <div class="offcanvas-header">
          <button type="button" class="close-menu" data-bs-dismiss="offcanvas">
            <span> Close </span> <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <div class="offcanvas-body">
          <div class="head-contact">
            <a href="index.html" class="logo-side">
              <img src="assets/images/logo-drk.png" alt="logo" />
            </a>

            <div class="mobile-menu-sec mt-5">
              <nav class="navbar navbar-expand navbar-light">
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="astrologer.html">
                        Astrologer
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Horoscope
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Love
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Career
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Money
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="love.html">
                            Health & Beauty
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="tarot.html">
                        Tarot{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="numerology.html">
                        Numerology{" "}
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        More
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="contact-us.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <ul class="side-media list-unstyled">
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-google-plus-g"></i>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- login Modal --> */}
      <div class="modal fade login-div-modal contact-form01" id="loginModal01">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <button
                type="button"
                class="btn-close colis-btn"
                data-bs-dismiss="modal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modla-contact">
                <h2> Login to your Account</h2>
                <div class="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div class="row" data-aos="fade-down">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <input
                          type="submit"
                          class="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <p class="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    class="regster-bn"
                    data-bs-target="#registerModal"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    Register{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- register Modal --> */}

      <div class="modal fade login-div-modal contact-form01" id="registerModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <button
                type="button"
                class="btn-close colis-btn"
                data-bs-dismiss="modal"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </button>
            </div>
            <div class="modal-body">
              <div class="modla-contact">
                <h2> Sign Up for & consult your favourite Tarot Reader</h2>
                <div class="form-div-sections mt-5 d-inline-block w-100 px-5">
                  <form
                    name="fmn"
                    action="https://oxentictemplates.in/templatemonster/astrology/mj"
                    method="post"
                  >
                    <div class="row" data-aos="fade-down">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Full Name </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Your Email </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Date of Birth </label>
                          <input
                            id="datepicker"
                            placeholder="DD/MM/YYYY"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label> Time Of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="12:00"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label> Place of Birth </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your City"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <input
                          type="submit"
                          class="btn btn-submit"
                          value="Signup"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <p class="text-center  mt-3 mb-5">
                  {" "}
                  Do not have an account?
                  <a
                    data-bs-toggle="modal"
                    class="regster-bn"
                    data-bs-target="#loginModal"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    Login{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}