import React from "react";
import { Link } from "react-router-dom";

export default function TarotReader() {
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
          <h2 class="text-center text-white"> Astrologer </h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active">Astrologer</li>
            </ol>
          </nav>
        </div>
      </section>
      <main class="float-start w-100 body-main">
        <section class="listing-page-div">
          <div class="container">
            <div class="row gx-lg-5">
              <div class="col-lg-3">
                <div
                  class="accordion mt-4 list-serach-acd"
                  id="accordionPanelsStayOpenExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Expertise
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Vedic
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault2"
                          >
                            Tarot
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault3"
                          >
                            Numerology
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault4"
                          >
                            Vastu
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault5"
                          >
                            Fengshui
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault6"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault6"
                          >
                            Reiki Healing
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                      >
                        Languages
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg"
                          >
                            Hindi
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg2"
                          >
                            English
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg3"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg3"
                          >
                            Spanish
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg4"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg4"
                          >
                            French
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                      >
                        Rating
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault7"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault7"
                          >
                            2.0 and above
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault8"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault8"
                          >
                            3.0 and above
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault9"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault9"
                          >
                            4.0 and above
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour"
                      >
                        Experience
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapsefour"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault11"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault11"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault12"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault8"
                          >
                            Upto 15 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault13"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault13"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault14"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault14"
                          >
                            20 Years & Above
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <input type="submit" class="btn submit-btn" value="Filter" />
                </div>
              </div>

              <div class="col-lg-9 mt-5 mt-lg-0">
                <div class="d-flex justify-content-between align-items-center">
                  <h2 class="ashow text-white">
                    Consult to Our Best Astrologers{" "}
                  </h2>
                  <div class="right-section-btn d-flex align-items-center">
                    <div class="dropdown">
                      <button
                        class="btn bg-light dfg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Default sorting
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            popularity
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            latest
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            low to high
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            high to low
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="products" class="mt-4">
                  <div class="row g-lg-5 mt-0">
                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/spiritual-man-india-traditional-clothing-39495501.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Jaone Smith </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1277971635-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1200677760-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Nalty Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/testimonials-1-1.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Quinn Smith </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/tania-medina-zwsL1bj_yKA-unsplash.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Lopez Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 15 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/image-13-1561127528.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/depositphotos_81108858-stock-photo-casual-business-indian-boy-portrait.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Patel Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic, Tarot </h5>
                            <p> Exp: 10 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm.webp"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-963801050-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Klein Jones </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1277996375-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Rose Samith </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-language"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-dollar-sign"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <nav class="my-5">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="news-letter-div d-inline-block w-100 mt-5">
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
