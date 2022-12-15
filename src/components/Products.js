import React from "react";
import Leftsidebar from "./Leftsidebar";
import $ from "jquery";

function Products() {
  const openNotifications = () => {
    document.querySelector(".notifications").classList.toggle("active");
    document.querySelector(".search").classList.remove("active");
  };
  const openSearch = () => {
    document.querySelector(".header__search").classList.toggle("active");
    document.querySelector(".search").classList.toggle("show");
    document.querySelector(".notifications").classList.remove("active");
  };
  const openBurgerHeader = () => {
    document.querySelector(".page").classList.toggle("toggle");
    document.querySelector(".sidebar").classList.toggle("active");
  };
  const searchToggle = () => {
    document.querySelector(".notifications").classList.remove("active");
    document.querySelector(".search").classList.toggle("active");
  };
  const dropdownOpen = () => {
    var dropdown = document.querySelectorAll(".js-dropdown");
    dropdown.forEach(function (item, index) {
      var head = item.querySelector(".js-dropdown-head");
      var body = item.querySelector(".js-dropdown-body");
      head.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!item.classList.contains("active")) {
          dropdown[index].classList.remove("active");
          item.classList.add("active");
        } else {
          dropdown[index].classList.remove("active");
        }
      });
      body.addEventListener("click", function (e) {
        e.stopPropagation();
      });
      document.body.addEventListener("click", function () {
        dropdown[index].classList.remove("active");
      });
    });
  };
  const checkboxAll = () => {
    var checkboxAll = $(".products__row_head .checkbox__input");
    if (checkboxAll.is(":checked")) {
      checkboxAll
        .parents(".products__table")
        .find(".products__row:not(.products__row_head) .checkbox__input")
        .prop("checked", true)
        .attr("checked", "checked");
    } else {
      checkboxAll
        .parents(".products__table")
        .find(".products__row:not(.products__row_head) .checkbox__input")
        .prop("checked", false)
        .removeAttr("checked");
    }
  };
  return (
    <div>
      <Leftsidebar />
      <div className="page">
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head">
              <div className="page__col">
                <div className="page__hello h5">Hi Tam Tran,</div>
                <div className="page__welcome h2">
                  Welcome back<span className="desktop-hide">👋</span>
                </div>
              </div>
              <div className="page__col">
                <div className="header">
                  <button
                    className="header__burger"
                    onClick={() => openBurgerHeader()}
                  />
                  <div className="search">
                    <div className="search__field">
                      <input
                        className="search__input"
                        type="text"
                        placeholder="Search"
                      />
                      <button
                        className="search__toggle"
                        onClick={() => searchToggle()}
                      >
                        <svg
                          className="icon icon-search"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#11142D"
                            fill-rule="evenodd"
                            d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"
                          />
                          {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
                        </svg>
                        <svg
                          className="icon icon-close"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                        >
                          <path
                            fill="#1B1D21"
                            fill-rule="evenodd"
                            d="M12.4801,2.08058 C12.773,1.78769 12.773,1.31281 12.4801,1.01992 C12.1872,0.72703 11.7123,0.72703 11.4194,1.01992 L6.8232,5.6161 L2.22705,1.01992 C1.93415,0.72703 1.45928,0.72703 1.16639,1.01992 C0.8735,1.31281 0.87349,1.78769 1.16639,2.08058 L5.7626,6.6768 L1.16639,11.273 C0.8735,11.5659 0.87349,12.0407 1.16639,12.3336 C1.45928,12.6265 1.93416,12.6265 2.22705,12.3336 L6.8232,7.7374 L11.4194,12.3336 C11.7123,12.6265 12.1872,12.6265 12.4801,12.3336 C12.773,12.0407 12.773,11.5659 12.4801,11.273 L7.8839,6.6768 L12.4801,2.08058 Z"
                          />
                          {/* <use xlinkHref="img/sprite.svg#icon-close" /> */}
                        </svg>
                      </button>
                    </div>
                    <div className="search__result">
                      <div className="search__info caption-sm">
                        Recent Searches
                      </div>
                      <div className="search__list">
                        <a className="search__item" href="#">
                          <div className="search__preview bg-pink">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-1.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            Earning byitems
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                        </a>
                        <a className="search__item" href="#">
                          <div className="search__preview bg-yellow">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-4.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            This monthStatements
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                        </a>
                        <a className="search__item" href="#">
                          <div className="search__preview bg-blue-light">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-3.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            How manysales I got…
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                        </a>
                      </div>
                      <button className="search__btn btn btn-dark btn_wide">
                        Advance Search
                      </button>
                    </div>
                  </div>
                  <button
                    className="header__search"
                    onClick={() => openSearch()}
                  >
                    <svg
                      className="icon icon-search"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#11142D"
                        fill-rule="evenodd"
                        d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"
                      />
                      {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
                    </svg>
                  </button>
                  <div className="notifications">
                    <button
                      className="notifications__open"
                      onClick={() => openNotifications()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                      >
                        <path
                          fill="#11142D"
                          d="M12.855,20.9 C12.4639,22.1478 11.3077,22.997 10,22.997 C8.6924,22.997 7.53619,22.1478 7.14502,20.9 C8.039,20.966 8.989,21 10,21 C11.011,21 11.961,20.966 12.855,20.9 Z M10,-1 C14.4182815,-1 18,2.58172202 18,7 L18,7 L18,10 C18,11.1184646 18.3694847,11.8656448 19.2498379,12.8633784 L19.2498379,12.8633784 L19.9126361,13.6024335 L20.1063996,13.8323989 C20.6922295,14.552011 21,15.2050716 21,16 C21,17.8400866 18.7827241,19.0712173 15.1958818,19.6392323 L15.1958818,19.6392323 L14.6182804,19.7234003 C14.4220352,19.7496142 14.2221198,19.7739832 14.0186577,19.7964996 L14.0186577,19.7964996 L13.3977552,19.8584829 C13.0821076,19.8866876 12.7587582,19.910706 12.428124,19.9305115 L12.428124,19.9305115 L11.7572663,19.9644973 C11.4171046,19.9786737 11.0699362,19.9886194 10.7161783,19.9943077 L10.7161783,19.9943077 L10,20 L9.28382174,19.9943077 C8.93006383,19.9886194 8.58289545,19.9786737 8.2427337,19.9644973 L8.2427337,19.9644973 L7.571876,19.9305115 C7.24124183,19.910706 6.91789239,19.8866876 6.60224478,19.8584829 L6.60224478,19.8584829 L5.98134229,19.7964996 C5.77788023,19.7739832 5.57796479,19.7496142 5.38171958,19.7234003 L5.38171958,19.7234003 L4.80411821,19.6392323 C1.21727587,19.0712173 -1,17.8400866 -1,16 C-1,15.2050716 -0.692229474,14.552011 -0.10639964,13.8323989 C-0.0758249191,13.7948421 -0.0448938239,13.7575085 -0.0128515129,13.7194853 L-0.0128515129,13.7194853 L0.198775677,13.4757657 L0.618445007,13.0110469 L0.91946309,12.6669881 C1.67813778,11.7643706 2,11.0439003 2,10 L2,10 L2,7 C2,2.58172525 5.58172525,-1 10,-1 Z M10,1 C6.68629475,1 4,3.68629475 4,7 L4,7 L4,10 C4,11.6898687 3.42260969,12.8574802 2.24983786,14.1866216 L2.24983786,14.1866216 L1.4892624,15.0417013 L1.34441877,15.2222364 C1.0964442,15.54873 1,15.7780382 1,16 C1,16.3056227 1.43853666,16.6406043 2.23673585,16.947546 L2.23673585,16.947546 L2.55276568,17.0612227 L2.90158957,17.171598 C2.96240837,17.1896814 3.02455508,17.2075992 3.08801044,17.2253375 L3.08801044,17.2253375 L3.48429234,17.3294995 C3.55290527,17.3464633 3.62278834,17.3632194 3.69392229,17.3797539 L3.69392229,17.3797539 L4.13558251,17.4761893 C4.21164296,17.4917812 4.28891577,17.5071234 4.3673817,17.522202 L4.3673817,17.522202 L4.85234055,17.6093972 C5.01866325,17.6373328 5.18960434,17.6641016 5.36500978,17.6895914 L5.36500978,17.6895914 L5.90446508,17.7621122 C5.99655512,17.7735221 6.08972273,17.7845843 6.18394865,17.7952847 L6.18394865,17.7952847 L6.76184998,17.855034 L7.3642266,17.905428 C7.46661096,17.9130101 7.56997662,17.9201743 7.67430431,17.9269067 L7.67430431,17.9269067 L8.31166081,17.9620068 L8.97118185,17.9860702 L9.65194312,17.9984242 L10,18 L10,18 L10.3480569,17.9984242 L11.0288181,17.9860702 L11.6883392,17.9620068 C11.796438,17.9570578 11.9036133,17.951649 12.0098458,17.9457943 L12.0098458,17.9457943 L12.6357734,17.905428 L13.23815,17.855034 C13.3365322,17.8458367 13.4338946,17.8362496 13.5302179,17.8262867 L13.5302179,17.8262867 L14.0955349,17.7621122 L14.6349902,17.6895914 C14.8103957,17.6641016 14.9813367,17.6373328 15.1476594,17.6093972 L15.1476594,17.6093972 L15.6326183,17.522202 C15.7110842,17.5071234 15.788357,17.4917812 15.8644175,17.4761893 L15.8644175,17.4761893 L16.3060777,17.3797539 C16.3772117,17.3632194 16.4470947,17.3464633 16.5157077,17.3294995 L16.5157077,17.3294995 L16.9119896,17.2253375 C16.9754449,17.2075992 17.0375916,17.1896814 17.0984104,17.171598 L17.0984104,17.171598 L17.4472343,17.0612227 L17.7632641,16.947546 C18.5614633,16.6406043 19,16.3056227 19,16 C19,15.7502929 18.8779378,15.4912882 18.5553802,15.0950702 L18.5553802,15.0950702 L18.3174653,14.8199854 L17.7501621,14.1866216 C16.5773903,12.8574802 16,11.6898687 16,10 L16,10 L16,7 C16,3.68629108 13.3137116,1 10,1 Z"
                          transform="translate(1 1)"
                        />
                      </svg>
                      <span className="notifications__counter">2</span>
                    </button>
                    <div className="notifications__wrap">
                      <div className="notifications__info h6">
                        Recent Notification
                      </div>
                      <div className="notifications__list">
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-blue">
                              <img
                                className="notifications__pic"
                                src="./assets/img/chat.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                8h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on{" "}
                              <span className="notifications__project">
                                Collab Design
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-green">
                              <img
                                className="notifications__pic"
                                src="./assets/img/bag.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Glenn Greer
                              </div>
                              <div className="notifications__time caption">
                                12h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded{" "}
                              <span className="notifications__project">
                                Sapiens Illustration
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-purple">
                              <img
                                className="notifications__pic"
                                src="./assets/img/message.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                14h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Sent you a message 📪{" "}
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-red">
                              <img
                                className="notifications__pic"
                                src="./assets/img/heart.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                21h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Liked{" "}
                              <span className="notifications__project">
                                Folio Agency
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-blue">
                              <img
                                className="notifications__pic"
                                src="./assets/img/chat.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                8h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on{" "}
                              <span className="notifications__project">
                                Collab Design
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-green">
                              <img
                                className="notifications__pic"
                                src="./assets/img/bag.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Glenn Greer
                              </div>
                              <div className="notifications__time caption">
                                12h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded{" "}
                              <span className="notifications__project">
                                Sapiens Illustration
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="notifications__btns">
                        <a
                          className="notifications__btn btn btn-dark"
                          href="/notifications"
                        >
                          See all incoming activity
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="header__user" href="#">
                    <img
                      className="header__pic"
                      src="./assets/img/ava.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="page__content">
              <div className="banner">
                <div className="banner__container">
                  <div className="banner__preview">
                    <img
                      className="banner__pic"
                      src="./assets/img/banner-pic.png"
                      alt=""
                    />
                  </div>
                  <div className="banner__wrap">
                    <div className="banner__title h3">Your Patient</div>
                    <div className="banner__text">
                      Create Your Patient Dashboard in Minutes
                    </div>
                    <button className="btn btn-light">
                      Check all settings
                    </button>
                  </div>
                </div>
              </div>
              <div className="page__stat page__stat_pt32">
                <div className="sorting">
                  <div className="sorting__row">
                    <div className="sorting__col">
                      <div className="sorting__dropdowns">
                        <div
                          className="dropdown js-dropdown"
                          onClick={() => dropdownOpen()}
                        >
                          <div className="dropdown__head js-dropdown-head">
                            Last 30 days
                          </div>
                          <div className="dropdown__body js-dropdown-body">
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Bento 3D Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Illustration
                              </div>
                            </a>
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Bento 3D Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Illustration
                              </div>
                            </a>
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Collab UI Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Coded Template
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="dropdown js-dropdown">
                          <div className="dropdown__head js-dropdown-head">
                            Aug 2020
                          </div>
                          <div className="dropdown__body js-dropdown-body">
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Bento 3D Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Illustration
                              </div>
                            </a>
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Bento 3D Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Illustration
                              </div>
                            </a>
                            <a className="dropdown__item" href="#">
                              <div className="dropdown__title title">
                                Collab UI Kit{" "}
                              </div>
                              <div className="dropdown__info caption">
                                Coded Template
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sorting__col">
                      <div className="sorting__line">
                        <div className="sorting__search">
                          <button className="sorting__open">
                            <svg
                              className="icon icon-search"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill="#11142D"
                                fill-rule="evenodd"
                                d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
                            </svg>
                          </button>
                          <input
                            className="sorting__input"
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                        <div className="sorting__actions">
                          <button className="sorting__action">
                            <svg
                              className="icon icon-edit"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                            >
                              <path
                                fill="#11142D"
                                d="M10.7928932,-0.207106781 C11.1834175,-0.597631073 11.8165825,-0.597631073 12.2071068,-0.207106781 L12.2071068,-0.207106781 L16.2071068,3.79289322 C16.5976311,4.18341751 16.5976311,4.81658249 16.2071068,5.20710678 L16.2071068,5.20710678 L6.20710678,15.2071068 C6.06750624,15.3467073 5.88970726,15.4418625 5.69611614,15.4805807 L5.69611614,15.4805807 L0.696116135,16.4805807 C-0.00360500022,16.6205249 -0.620524903,16.003605 -0.480580676,15.3038839 L-0.480580676,15.3038839 L0.519419324,10.3038839 C0.558137549,10.1102927 0.653292673,9.93249376 0.792893219,9.79289322 L0.792893219,9.79289322 Z M8.99944404,4.414 L2.421,10.993 L1.774,14.225 L5.006,13.579 L11.585444,7 L8.99944404,4.414 Z M11.5,1.915 L10.414444,3 L12.999444,5.585 L14.085,4.5 L11.5,1.915 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-edit" /> */}
                            </svg>
                          </button>
                          <button className="sorting__action">
                            <svg
                              className="icon icon-box"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                            >
                              <path
                                fill="#11142D"
                                d="M13.5,4.5 C14.0128358,4.5 14.4355072,4.88604019 14.4932723,5.38337887 L14.5,5.5 L14.5,13.5 C14.5,14.0128358 14.1139598,14.4355072 13.6166211,14.4932723 L13.5,14.5 L2.5,14.5 C1.98716416,14.5 1.56449284,14.1139598 1.50672773,13.6166211 L1.5,13.5 L1.5,5.5 C1.5,4.94771525 1.94771525,4.5 2.5,4.5 C3.01283584,4.5 3.43550716,4.88604019 3.49327227,5.38337887 L3.5,5.5 L3.5,12.5 L12.5,12.5 L12.5,5.5 C12.5,4.98716416 12.8860402,4.56449284 13.3833789,4.50672773 L13.5,4.5 Z M10.5,5.5 C11.0522847,5.5 11.5,5.94771525 11.5,6.5 L11.5,6.5 L11.5,9.5 C11.5,10.0522847 11.0522847,10.5 10.5,10.5 L10.5,10.5 L5.5,10.5 C4.94771525,10.5 4.5,10.0522847 4.5,9.5 L4.5,9.5 L4.5,6.5 C4.5,5.94771525 4.94771525,5.5 5.5,5.5 L5.5,5.5 Z M9.5,7.5 L6.5,7.5 L6.5,8.5 L9.5,8.5 L9.5,7.5 Z M15.5,-0.5 C16.0522847,-0.5 16.5,-0.0522847498 16.5,0.5 L16.5,0.5 L16.5,3.5 C16.5,4.05228475 16.0522847,4.5 15.5,4.5 L15.5,4.5 L0.5,4.5 C-0.0522847498,4.5 -0.5,4.05228475 -0.5,3.5 L-0.5,3.5 L-0.5,0.5 C-0.5,-0.0522847498 -0.0522847498,-0.5 0.5,-0.5 L0.5,-0.5 Z M14.5,1.5 L1.5,1.5 L1.5,2.5 L14.5,2.5 L14.5,1.5 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-box" /> */}
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products products_main">
                  <div className="products__table">
                    <div className="products__row products__row_head">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            onClick={() => checkboxAll()}
                          />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">Product</div>
                      <div className="products__cell">Amount</div>
                      <div className="products__cell">Color</div>
                      <div className="products__cell">Price</div>
                      <div className="products__cell">Rating</div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Abstract 3D Kit
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#6C5DD3" }}
                          />
                          <div className="products__text">Purple</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#6C5DD3" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Sapiens Illustration
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#7FBA7A" }}
                          />
                          <div className="products__text">Green</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#7FBA7A" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Collab Landing Page
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#FFCE73" }}
                          />
                          <div className="products__text">Yellow</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#FFCE73" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Abstract 3D Kit
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#FFA2C0" }}
                          />
                          <div className="products__text">Pink</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#FFA2C0" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Abstract 3D Kit
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#6C5DD3" }}
                          />
                          <div className="products__text">Purple</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#6C5DD3" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Sapiens Illustration
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#7FBA7A" }}
                          />
                          <div className="products__text">Green</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#7FBA7A" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                    <div className="products__row">
                      <div className="products__cell">
                        <label className="checkbox">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__in">
                            <span className="checkbox__tick" />
                          </span>
                        </label>
                      </div>
                      <div className="products__cell">
                        <a className="products__item" href="#">
                          <div className="products__preview">
                            <img
                              className="products__pic"
                              src="./assets/img/product-pic.png"
                              alt=""
                            />
                          </div>
                          <div className="products__details">
                            <div className="products__title title">
                              Collab Landing Page
                            </div>
                            <div className="products__info caption color-gray">
                              3D Illustration
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="products__cell">
                        <div className="products__payment">37 in stock</div>
                      </div>
                      <div className="products__cell">
                        <div className="products__color">
                          <div
                            className="products__bg"
                            style={{ backgroundColor: "#FFCE73" }}
                          />
                          <div className="products__text">Yellow</div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__cost">
                          <div className="products__money">$68.00</div>
                          <div className="products__tooltip">
                            <div className="products__sale">
                              <div className="products__icon bg-red">
                                <img
                                  className="products__pic"
                                  src="./assets/img/chat-black.svg"
                                  alt=""
                                />
                              </div>
                              <div className="products__caption caption-sm">
                                Latest Sale
                              </div>
                            </div>
                            <div className="products__price h3">$68</div>
                            <div className="products__progress">
                              <span style={{ width: "68%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="products__cell">
                        <div className="products__rating">
                          <span className="color-green">5.0</span> (45 votes)
                        </div>
                      </div>
                    </div>
                    <div className="products__body">
                      <div
                        className="products__bg"
                        style={{ backgroundColor: "#FFCE73" }}
                      />
                      <div className="products__line">
                        <div className="products__col">
                          <div className="products__money">$68.45</div>
                        </div>
                        <div className="products__col">37 in stock</div>
                        <div className="products__col color-green">5.0</div>
                      </div>
                    </div>
                  </div>
                  <div className="products__more">
                    <button className="btn btn-dark">Load More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
