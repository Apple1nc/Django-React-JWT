var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Home</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
          <meta name="theme-color" content="#fff" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
          <link rel="manifest" href="img/site.html" />
          <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="A Premium SaaS Landing Page Kit" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ui8" />
          <meta name="twitter:title" content="Solo" />
          <meta name="twitter:description" content="A Premium SaaS Landing Page Kit" />
          <meta name="twitter:creator" content="@ui8" />
          <meta name="twitter:image" content="img/twitter-card.png" />
          <meta property="og:title" content="Solo" />
          <meta property="og:type" content="Article" />
          <meta property="og:url" content="https://ui8.net/ui8/products/solo-saas-landing-page-kit" />
          <meta property="og:image" content="img/fb-og-image.png" />
          <meta property="og:description" content="A Premium SaaS Landing Page Kit" />
          <meta property="og:site_name" content="Solo" />
          <meta property="fb:admins" content={132951670226590} />
          <link rel="preconnect" href="https://fonts.gstatic.com/" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600&display=swap" rel="stylesheet" />
          <link rel="stylesheet" media="all" href="css/app.css" />
          <div className="page">
            <header className="header">
              <div className="header__center center">
                <a className="header__logo" href="index.html">
                  <img className="header__pic header__pic_dark" src="img/logo.png" alt="" />
                  <img className="header__pic header__pic_light" src="img/logo.png" alt="" /></a>
                <div className="header__wrapper">
                  <nav className="header__nav">
                    <a className="header__link" href="features.html">Features</a>
                    <a className="header__link" href="downloads.html">Academics</a>
                    <a className="header__link" href="pricing.html">Events</a>
                    <a className="header__link" href="about-us.html">About Us</a>
                    <a className="header__link" href="contact.html">Contact</a>
                  </nav>
                  <div id="sign-in-out" className="header__btns">
                    <a className="header__btn btn btn_transparent js-popup-open" href="#popup-sign-in" data-effect="mfp-zoom-in">Login</a>
                    <a className="header__btn btn btn_signup js-popup-open" href="#popup-sign-up" data-effect="mfp-zoom-in">Sign up</a>
                  </div>
                  <picture className="header__preview">
                    <source media="(max-width: 767px)" srcSet="img/header-pic-mobile@2x.png, img/header-pic-mobile@2x.png 2x" /><img srcSet="img/header-pic@2x.png 2x" src="img/header-pic.png" alt="" /></picture>
                </div><button className="header__burger" />
              </div>
            </header>
            {/* End of header */}
            <div className="main">
              <div className="main__center center">
                <div className="main__wrap">
                  <h1 className="main__title d1"><span data-aos="animation-scale-top" data-aos-duration={600}>Explore the </span><span data-aos="animation-scale-top" data-aos-duration={600} data-aos-delay={200}>possibilities of </span><span data-aos="animation-scale-top" data-aos-duration={600} data-aos-delay={400}>interactive learning.</span></h1>
                  <div className="main__text">Your most vital academic resources and tools curated in one place.</div>
                  <div className="main__btns">
                    <a className="header__btn btn btn_orange js-popup-open" href="#popup-sign-up" data-effect="mfp-zoom-in">Get Started</a>
                  </div>
                  <div className="main__bg" data-aos>
                    <div className="main__preview"><img srcSet="img/figures-1.1@2x.png 2x" src="img/figures-1.1.png" alt="" /></div>
                    <div className="main__preview"><img srcSet="img/figures-1.2@2x.png 2x" src="img/figures-1.2.png" alt="" /></div>
                    <div className="main__preview"><img srcSet="img/figures-1.3@2x.png 2x" src="img/figures-1.3.png" alt="" /></div>
                  </div>
                </div>
                <div className="main__partners">
                  <div className="main__info">Built for engineering students and anyone with a passion for learning.</div>
                  <div className="main__list">
                    <div className="main__logo"><img src="img/UG.png" alt="" /></div>
                    <div className="main__logo"><img src="img/Eng.png" alt="" /></div>
                    <div className="main__logo"><img src="img/Eng.png" alt="" /></div>
                    <div className="main__logo"><img src="img/Eng.png" alt="" /></div>
                    <div className="main__logo"><img src="img/Eng.png" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="quality">
              <div className="quality__center center">
                <div className="quality__body">
                  <div className="quality__bg" />
                  <div className="quality__gallery">
                    <div className="quality__preview"><img srcSet="img/figures-2.1@2x.png 2x" src="img/figures-2.1.png" alt="" /></div>
                    <div className="quality__preview" data-aos="animation-translate-up" data-aos-duration={1000}><img srcSet="img/figures-2.2@2x.png 2x" src="img/figures-2.2.png" alt="" /></div>
                    <div className="quality__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={400}><img srcSet="img/figures-2.3@2x.png 2x" src="img/figures-2.3.png" alt="" /></div>
                    <div className="quality__preview" data-aos="animation-translate-down" data-aos-duration={1000} data-aos-delay={800}><img srcSet="img/figures-2.4@2x.png 2x" src="img/figures-2.4.png" alt="" /></div>
                    <div className="quality__preview"><img srcSet="img/figures-2.5@2x.png 2x" src="img/figures-2.5.png" alt="" /></div>
                  </div>
                  <div className="quality__wrap">
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Chat</h2>
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Create</h2>
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Collaborate</h2>
                    <h2 className="quality__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Challenge</h2>
                    <div className="quality__text">We make it all too easy.</div>
                  </div>
                </div>
                <div className="quality__bottom">
                  <div className="quality__item">
                    <div className="quality__counter">100<span className="quality__sign quality__sign_up">+</span></div>
                    <div className="quality__category">Quiz questions</div>
                  </div>
                  <div className="quality__item">
                    <div className="quality__counter">10<span className="quality__sign quality__sign_up">+</span></div>
                    <div className="quality__category">Active chatrooms</div>
                  </div>
                  <div className="quality__item">
                    <div className="quality__counter">100<span className="quality__sign quality__sign_up">+</span></div>
                    <div className="quality__category">Active users</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="steps">
              <div className="steps__center center">
                <h2 className="steps__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Fast, simple &amp; effortless.</h2>
                <div className="steps__list">
                  <div className="steps__item">
                    <div className="steps__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={58} height={52} viewBox="0 0 58 52">
                        <path fill="#272e35" d="M45 .5c3.696 0 6.706 2.932 6.829 6.598l.004.235V20.5H53a4.17 4.17 0 0 1 4.162 3.959l.005.208v22.667A4.17 4.17 0 0 1 53 51.5h0-13.333a4.17 4.17 0 0 1-4.167-4.167h0V43.5H5.001a4.17 4.17 0 0 1-4.162-3.959l-.005-.208v-2.667A4.17 4.17 0 0 1 3.5 32.779V7.333C3.5 3.637 6.432.628 10.098.504L10.333.5H45zm9.166 43H38.5v3.833a1.17 1.17 0 0 0 1.04 1.16l.127.007H53a1.17 1.17 0 0 0 1.167-1.167h0l-.001-3.833zM53 23.5H39.667a1.17 1.17 0 0 0-1.167 1.167h0V40.5h15.666l.001-15.833a1.17 1.17 0 0 0-1.04-1.16L53 23.5zm-17.5 12H5.001a1.17 1.17 0 0 0-1.16 1.04l-.007.127v2.667a1.17 1.17 0 0 0 1.04 1.16l.127.007H35.5v-5zm9.5-32H10.333c-2.052 0-3.726 1.61-3.828 3.636l-.005.197V32.5h29v-7.833a4.17 4.17 0 0 1 3.959-4.162l.208-.005h9.166V7.333c0-2.052-1.61-3.726-3.636-3.828L45 3.5z" />
                      </svg></div>
                    <div className="steps__number">Accessibility</div>
                    <div className="steps__text">Learn accross a range of multiple devices </div>
                  </div>
                  <div className="steps__item">
                    <div className="steps__icon"><svg xmlns="http://www.w3.org/2000/svg" width={58} height={42} viewBox="0 0 58 42">
                        <path fill="#272e35" d="M29.001.833c9.117 0 16.604 6.969 17.425 15.871h0l.017.213.36.048c5.766.857 10.213 5.76 10.36 11.73h0l.004.305a12.17 12.17 0 0 1-12.167 12.167h0-29.333C7.476 41.167.834 34.525.834 26.333c0-7.089 5.02-13.072 11.841-14.47h0l.084-.016.063-.155A17.49 17.49 0 0 1 28.636.837h0zm0 3c-6.251 0-11.73 3.998-13.716 9.831a1.5 1.5 0 0 1-1.217 1.003c-5.842.798-10.234 5.75-10.234 11.666 0 6.534 5.299 11.833 11.833 11.833h29.333A9.17 9.17 0 0 0 54.167 29a9.17 9.17 0 0 0-9.167-9.167 1.5 1.5 0 0 1-1.5-1.5c0-8.009-6.491-14.5-14.5-14.5zm-.827 27.751l-.016-.01c-.032-.022-.063-.044-.093-.068l-.036-.03a1.51 1.51 0 0 1-.071-.064l-.02-.02-5.779-5.779a1.5 1.5 0 0 1 2.007-2.224l.114.103L27.5 26.71V17a1.5 1.5 0 0 1 2.993-.144L30.5 17v9.708l3.217-3.216a1.5 1.5 0 0 1 2.224 2.007l-.103.114-5.787 5.789a1.51 1.51 0 0 1-.095.086l.103-.096c-.038.038-.078.074-.12.108-.256.209-.584.333-.94.333-.292 0-.565-.084-.796-.228l-.03-.02z" />
                      </svg></div>
                    <div className="steps__number">Quality</div>
                    <div className="steps__text">Assured of top quality resources</div>
                  </div>
                  <div className="steps__item">
                    <div className="steps__icon"><svg xmlns="http://www.w3.org/2000/svg" width={60} height={52} viewBox="0 0 60 52">
                        <path fill="#272e35" d="M30.001.5C44.082.5 55.5 11.918 55.5 26c0 .836-.044 1.672-.129 2.509l1.569-1.569a1.5 1.5 0 0 1 2.224 2.007l-.103.114-4 4a1.5 1.5 0 0 1-2.007.103l-.114-.103-4-4a1.5 1.5 0 0 1 2.007-2.224l.114.103 1.32 1.318c.079-.754.119-1.506.119-2.257 0-4.467-1.302-8.63-3.548-12.131-2.741.872-5.525 1.555-8.341 2.045l.018.097.136.774.064.392.119.793.108.804a54.32 54.32 0 0 1 .22 2.057h0l.068.84.029.424.05.854c.051 1.001.077 2.019.077 3.051s-.026 2.05-.077 3.051h0l-.05.854-.029.424-.068.84a54.32 54.32 0 0 1-.22 2.057h0l-.108.804-.058.398-.125.787-.136.774-.016.088a63.56 63.56 0 0 1 9.385 2.384l.027.01-.027-.01a1.5 1.5 0 0 1 .944 1.9c-.059.176-.148.334-.259.471l.055-.079C46.05 47.331 38.57 51.359 30.388 51.486A5.13 5.13 0 0 1 30 51.5a5.83 5.83 0 0 1-.39-.013l.38.002c-14.082 0-25.5-11.418-25.5-25.5 0-.828.043-1.656.127-2.485l-1.556 1.556a1.5 1.5 0 0 1-2.007.103l-.114-.103a1.5 1.5 0 0 1-.103-2.007l.103-.114 4-4a1.5 1.5 0 0 1 2.007-.103l.114.103 4 4a1.5 1.5 0 0 1-2.007 2.224l-.114-.103-1.33-1.328a21.61 21.61 0 0 0-.119 2.257c0 4.467 1.302 8.63 3.548 12.131 2.743-.872 5.53-1.556 8.348-2.046l-.015-.085-.136-.774-.064-.392-.119-.793-.108-.804a54.32 54.32 0 0 1-.22-2.057h0l-.068-.84-.029-.424-.05-.854C18.526 28.05 18.5 27.032 18.5 26h0l.002-.441a59.97 59.97 0 0 1 .075-2.61h0l.05-.854.029-.424.068-.84a54.32 54.32 0 0 1 .22-2.057h0l.108-.804.058-.398.125-.787.136-.774.018-.099c-3.158-.548-6.277-1.341-9.341-2.368a1.47 1.47 0 0 1-.445-.216c-.181-.129-.325-.292-.43-.473-.005-.011-.011-.022-.017-.033a.98.98 0 0 1-.044-.086c-.004-.011-.009-.022-.014-.033-.015-.033-.028-.067-.04-.101-.003-.011-.007-.023-.011-.035a1.16 1.16 0 0 1-.025-.082l-.01-.043a1.34 1.34 0 0 1-.016-.076 1.49 1.49 0 0 1-.01-.067l-.006-.055c-.003-.028-.005-.056-.006-.085v-.043c-.001-.076.004-.152.015-.229l.009-.055c.004-.022.009-.045.014-.067l.005-.02a1.49 1.49 0 0 1 .025-.09 1.1 1.1 0 0 1 .009-.029 1.52 1.52 0 0 1 .054-.139 2.17 2.17 0 0 1 .037-.075 1.4 1.4 0 0 1 .12-.195l-.011.018C14.019 4.551 21.666.5 30 .5h.001zm-.007 37.656c-2.335 0-4.656.139-6.959.414l.135.494.187.64a31.53 31.53 0 0 0 .5 1.52h0l.213.575.22.555c1.501 3.663 3.453 5.956 5.457 6.135h.243.26c2.006-.177 3.958-2.471 5.459-6.135h0l.22-.555.213-.575a31.53 31.53 0 0 0 .5-1.52h0l.187-.64.133-.493c-2.306-.275-4.631-.415-6.969-.415zm-9.959.852l-.481.082c-2.226.401-4.432.929-6.612 1.581a22.51 22.51 0 0 0 10.806 6.941c-1.239-1.73-2.297-3.97-3.133-6.585h0l-.208-.675c-.13-.438-.255-.886-.373-1.343zm19.93-.001l-.022.089a38.12 38.12 0 0 1-.35 1.254h0l-.208.675c-.833 2.607-1.888 4.843-3.122 6.571 4.162-1.214 7.887-3.62 10.74-6.937a60.1 60.1 0 0 0-7.038-1.652zM30 16.832a61.75 61.75 0 0 1-7.629-.473l-.004.023-.068.366-.128.742-.06.376-.112.762-.102.775-.132 1.185-.074.805-.062.816-.05.826-.038.836-.026.845L21.5 26l.002.43.013.854.026.845.038.836.05.826.062.816.074.805.132 1.185.102.775.112.762.06.376.128.742.137.728-.068-.352a61.75 61.75 0 0 1 15.263.001l.002-.012.068-.366.128-.742.06-.376.112-.762.102-.775.132-1.185.074-.805.062-.816.05-.826.038-.836.026-.845L38.5 26l-.015-1.284-.026-.845-.038-.836-.05-.826-.062-.816-.074-.805-.132-1.185-.102-.775-.112-.762-.06-.376-.128-.742-.137-.728.066.339a61.75 61.75 0 0 1-7.629.473zM30 3.5c-2.093 0-4.146 2.329-5.71 6.146h0l-.22.555-.213.575a31.53 31.53 0 0 0-.5 1.52h0l-.187.64-.13.482c2.303.275 4.625.414 6.96.414s4.658-.139 6.961-.414l-.131-.482-.187-.64a31.53 31.53 0 0 0-.5-1.52h0l-.213-.575-.22-.555C34.146 5.829 32.093 3.5 30 3.5zm-6.251.886l-.306.092a22.48 22.48 0 0 0-10.454 6.849c2.322.694 4.674 1.246 7.049 1.654.116-.455.24-.899.369-1.333h0l.208-.675c.836-2.616 1.895-4.857 3.134-6.588zm12.496-.008l.087.123c1.204 1.714 2.235 3.914 3.052 6.473h0l.208.675a38.22 38.22 0 0 1 .37 1.331c2.387-.408 4.751-.963 7.085-1.661-2.814-3.266-6.549-5.713-10.802-6.94z" />
                      </svg></div>
                    <div className="steps__number">Community</div>
                    <div className="steps__text">Reach out to peers and experts for help </div>
                  </div>
                  <div className="steps__item">
                    <div className="steps__icon"><svg xmlns="http://www.w3.org/2000/svg" width={56} height={48} viewBox="0 0 56 48">
                        <path fill="#272e35" d="M49.332 23.5a1.5 1.5 0 0 1 1.493 1.356l.007.144v21.333a1.5 1.5 0 0 1-2.993.144l-.007-.144V25a1.5 1.5 0 0 1 1.5-1.5zM6.666 36.833a1.5 1.5 0 0 1 1.493 1.356l.007.144v8a1.5 1.5 0 0 1-2.993.144l-.007-.144v-8a1.5 1.5 0 0 1 1.5-1.5zm28.531-6.217a1.5 1.5 0 0 1 1.493 1.356l.007.144V46.33a1.5 1.5 0 0 1-2.993.144l-.007-.144V32.117a1.5 1.5 0 0 1 1.5-1.5zm-14.4-2.854a1.5 1.5 0 0 1 1.493 1.356l.007.144v17.067a1.5 1.5 0 0 1-2.993.144l-.007-.144V29.263a1.5 1.5 0 0 1 1.5-1.5zM45.253 2.619a6.17 6.17 0 0 1 8.721 0 6.17 6.17 0 0 1-7.99 9.347L40.76 16.31a6.17 6.17 0 0 1-9.916 7.04c-1.735-1.735-2.22-4.248-1.455-6.417l-4.459-2.991a6.17 6.17 0 0 1-7.758.414l-5.221 4.357a6.17 6.17 0 0 1-9.925 7.021 6.17 6.17 0 0 1 0-8.721 6.17 6.17 0 0 1 8.011-.611l5.209-4.347a6.17 6.17 0 0 1 9.911-7.051c1.743 1.743 2.224 4.269 1.445 6.445l4.447 2.983a6.17 6.17 0 0 1 7.79-.427l5.222-4.343a6.17 6.17 0 0 1 1.193-7.044zM4.146 19.135a3.17 3.17 0 0 0 0 4.478 3.17 3.17 0 0 0 4.777-4.134 1.2 1.2 0 0 1-.102-.109c-.035-.042-.067-.085-.096-.129l-.1-.107-.146-.137a3.17 3.17 0 0 0-4.332.137zm33.151-2.522c-1.244-1.098-3.143-1.052-4.332.137-1.237 1.237-1.237 3.242 0 4.478s3.242 1.237 4.478 0a3.17 3.17 0 0 0 .309-4.12c-.048-.041-.092-.088-.134-.138s-.077-.098-.11-.149l-.066-.072zM22.889 6.989c-1.244-1.098-3.143-1.052-4.332.137a3.17 3.17 0 0 0-.273 4.168 1.11 1.11 0 0 1 .094.1l.074.098.105.112c1.189 1.189 3.089 1.235 4.332.137l.146-.137a3.19 3.19 0 0 0 .329-.386c.016-.033.036-.065.057-.096l.066-.087a3.17 3.17 0 0 0-.452-3.91h0zm28.818-2.386a3.17 3.17 0 0 0-4.649 4.247 1.17 1.17 0 0 1 .147.149c.043.051.081.104.116.159l.054.06a3.17 3.17 0 0 0 4.478 0c1.237-1.237 1.237-3.242 0-4.478h0z" />
                      </svg></div>
                    <div className="steps__number">Innovative </div>
                    <div className="steps__text">Always updated and optimized for beter performance</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="advantages">
              <div className="advantages__center center">
                <div className="advantages__head">
                  <div className="advantages__photo"><img srcSet="img/figures@2x.png 2x" src="img/figures.png" alt="" /></div>
                  <div className="stage">amazing features</div>
                  <h2 className="advantages__title h2" data-aos="animation-scale-top" data-aos-duration={600}>See what you can do in one app</h2>
                </div>
                <div className="advantages__list">
                  <div className="advantages__item">
                    <div className="advantages__bg">
                      <div className="advantages__preview"><img srcSet="img/advantages-pic-1@2x.png 2x" src="img/advantages-pic-1.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/cube@2x.png 2x" src="img/cube.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="img/ball@2x.png 2x" src="img/ball.png" alt="" /></div>
                    </div>
                    <div className="advantages__wrap">
                      <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/cursor@2x.png 2x" src="img/cursor.png" alt="" /></div>
                      <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Instant help from AI powered chatbot</div>
                      <div className="advantages__text">Meet our AI chatbot—an intelligent companion ready to assist and converse on a wide range of topics</div><button className="advantages__btn btn btn_border">Watch how it work</button>
                    </div>
                  </div>
                  <div className="advantages__item">
                    <div className="advantages__bg">
                      <div className="advantages__preview"><img srcSet="img/advantages-pic-2@2x.png 2x" src="img/advantages-pic-2.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/triangle@2x.png 2x" src="img/triangle.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="img/cube@2x.png 2x" src="img/cube.png" alt="" /></div>
                    </div>
                    <div className="advantages__wrap">
                      <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/chat@2x.png 2x" src="img/chat.png" alt="" /></div>
                      <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Commuinty engagement through Chat rooms</div>
                      <div className="advantages__text">Engage in lively discussions and connect with a diverse community in our interactive chatroom </div><button className="advantages__btn btn btn_border">Take a peek</button>
                    </div>
                  </div>
                  <div className="advantages__item">
                    <div className="advantages__bg">
                      <div className="advantages__preview"><img srcSet="img/advantages-pic-3@2x.png 2x" src="img/advantages-pic-3.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/cube@2x.png 2x" src="img/cube.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="img/ball@2x.png 2x" src="img/ball.png" alt="" /></div>
                    </div>
                    <div className="advantages__wrap">
                      <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/plane@2x.png 2x" src="img/plane.png" alt="" /></div>
                      <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Assess your knowledge</div>
                      <div className="advantages__text">Test your knowledge and have fun with our interactive quizzes covering various topics and interests</div><button className="advantages__btn btn btn_border">Take a feel </button>
                    </div>
                  </div>
                  <div className="advantages__item">
                    <div className="advantages__bg">
                      <div className="advantages__preview"><img srcSet="img/advantages-pic-1@2x.png 2x" src="img/advantages-pic-1.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/cube@2x.png 2x" src="img/cube.png" alt="" /></div>
                      <div className="advantages__preview" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}><img srcSet="img/ball@2x.png 2x" src="img/ball.png" alt="" /></div>
                    </div>
                    <div className="advantages__wrap">
                      <div className="advantages__icon" data-aos="animation-scale-top" data-aos-duration={800}><img srcSet="img/cursor@2x.png 2x" src="img/cursor.png" alt="" /></div>
                      <div className="advantages__info" data-aos="animation-scale-top" data-aos-duration={800} data-aos-delay={400}>Track your progress</div>
                      <div className="advantages__text">Track your progress, compare scores, and climb the leaderboard to see how you stack up against others in our engaging challenges.</div><button className="advantages__btn btn btn_border">Watch how it work</button>
                    </div>
                  </div>         
                </div>
              </div>
            </div>
            <div className="history">
              <div className="history__center center">
                <div className="history__container">
                  <div className="history__wrap">
                    <div className="stage">Easily find what you’re looking for</div>
                    <h2 className="history__title h2" data-aos="animation-scale-top" data-aos-duration={600}>Navigate effortlessly  with our intuitive interface</h2>
                  </div>
                </div>
                <div className="history__bg">
                  <div className="history__preview"><img srcSet="img/figures-3.1@2x.png 2x" src="img/figures-3.1.png" alt="" /></div>
                  <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="img/figures-3.2@2x.png 2x" src="img/figures-3.2.png" alt="" /></div>
                  <div className="history__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="img/figures-3.3@2x.png 2x" src="img/figures-3.3.png" alt="" /></div>
                </div>
              </div>
            </div> 
          </div>
          <div className="review">
            <div className="review__center center">
              <h2 className="review__title h2" data-aos="animation-scale-top" data-aos-duration={600}>What people are saying</h2>
              <div className="review__container">
                <div className="review__slider owl-carousel js-slider-review">
                  <div className="review__item">
                    <div className="review__text">“ Solo makes life easierto me. With Solo you can organize your work and life in seconds. <br />5 stars!!! ”</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Jaida Barton</div>
                    <div className="review__company">Visual Designer at UI8</div>
                  </div>
                  <div className="review__item">
                    <div className="review__text">“ Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..”</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Jedidiah Cassin</div>
                    <div className="review__company">via. Google Play</div>
                  </div>
                  <div className="review__item">
                    <div className="review__text">“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Fae Schumm</div>
                    <div className="review__company">via. Apple Store</div>
                  </div>
                  <div className="review__item">
                    <div className="review__text">“ Solo makes life easierto me. With Solo you can organize your work and life in seconds. 5 stars!!! ”</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Jaida Barton</div>
                    <div className="review__company">Visual Designer at UI8</div>
                  </div>
                  <div className="review__item">
                    <div className="review__text">“ Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete..”</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Jedidiah Cassin</div>
                    <div className="review__company">via. Google Play</div>
                  </div>
                  <div className="review__item">
                    <div className="review__text">“ I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!</div>
                    <div className="review__rating">
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                      <div className="review__icon"><img src="img/star-fill.svg" alt="" /></div>
                    </div>
                    <div className="review__author">Fae Schumm</div>
                    <div className="review__company">via. Apple Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invite">
            <div className="invite__center center">
              <div className="invite__container">  
                <div className="invite__bg" />
                <div className="invite__wrap">
                  <h2 className="invite__title d1" data-aos="animation-scale-top" data-aos-duration={600}>Join the academic ecosystem.</h2>
                  <div className="invite__text">Empower Your Mind, Explore, Learn, and connect.</div><a href="#sign-in-out"> <button className="invite__btn btn btn_orange">Let’s get started</button></a>
                </div>
                <div className="invite__gallery">
                  <div className="invite__preview"><img srcSet="img/figures-7.1@2x.png 2x" src="img/figures-7.1.png" alt="" /></div>
                  <div className="invite__preview" data-aos="animation-translate-down" data-aos-duration={1000}><img srcSet="img/figures-7.2@2x.png 2x" src="img/figures-7.2.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer__center center">
              <div className="footer__bottom">
                <div className="footer__copyright">© Built by Stan &amp; Steve </div>
                <div className="footer__social"><a className="footer__link" href="#"><svg className="icon icon-facebook">
                      <use xlinkHref="img/sprite.svg#icon-facebook" />
                    </svg></a><a className="footer__link" href="#"><svg className="icon icon-twitter">
                      <use xlinkHref="img/sprite.svg#icon-twitter" />
                    </svg></a><a className="footer__link" href="#"><svg className="icon icon-instagram">
                      <use xlinkHref="img/sprite.svg#icon-instagram" />
                    </svg></a></div>
              </div>
            </div>
            <label className="switch js-switch-theme"><input className="switch__input" type="checkbox" /><span className="switch__in"><span className="switch__box" /><span className="switch__icon switch__icon_dark"><svg className="icon icon-dark">
                    <use xlinkHref="img/sprite.svg#icon-dark" />
                  </svg></span><span className="switch__icon switch__icon_light"><svg className="icon icon-light">
                    <use xlinkHref="img/sprite.svg#icon-light" />
                  </svg></span></span></label>
          </div>
          <div className="popup mfp-hide" id="popup-sign-up">
            <div className="popup__title h2">Sign up</div>
            <div className="popup__variants">
              <a className="popup__variant" href="#">
                <img src="img/google.svg" alt="" />Sign up via Google</a>
              <a className="popup__variant" href="#">
                <img src="img/apple.svg" alt="" />Sign up via Apple</a>
            </div>
            <div className="popup__details">Or continue with email</div>
            <div className="field">
              <div className="field__label">Your email</div>
              <div className="field__wrap"><input className="field__input" type="email" placeholder="Enter your email" /></div>
            </div>
            <div className="field">
              <div className="field__label">Password</div>
              <div className="field__wrap"><input className="field__input" type="email" placeholder="Enter your password" /></div>
            </div>
            <div className="field">
              <div className="field__label">Confirm password</div>
              <div className="field__wrap"><input className="field__input" type="email" placeholder="Confrm your password" /></div>
            </div>
            <div style={{marginTop: '3rem'}} className="popup__btns">
              <a className="popup__btn btn btn_orange js-popup-open" href="#popup-code" data-effect="mfp-zoom-in">Continue</a></div>
            <div className="popup__note">By clicking the Continue button, you agree to the terms of service and privacy policy.</div>
          </div>
          <div className="popup mfp-hide" id="popup-code">
            <div className="popup__title h2">Check your <br />inbox</div>
            <div className="popup__info">Solo just sent you a 6-Digit Code to <a href="mailto:stanleyadisenu@gmail.com">stan@gmail.com</a> please check your inbox and enter the code below.</div>
            <div className="popup__code">
              <div className="popup__number"><input type="tel" /></div>
              <div className="popup__number"><input type="tel" /></div>
              <div className="popup__number"><input type="tel" /></div>
              <div className="popup__number"><input type="tel" /></div>
              <div className="popup__number"><input type="tel" /></div>
              <div className="popup__number"><input type="tel" /></div>
            </div>
            <div className="popup__btns"><button className="popup__btn btn btn_orange">Enter</button><a className="popup__link" href="#">Resend digit code</a></div>
          </div>
          <div className="popup mfp-hide" id="popup-sign-in">
            <div className="popup__title h2">Sign in</div>
            <div className="popup__variants"><a className="popup__variant" href="#"><img src="img/google.svg" alt="" />Sign up via Google</a><a className="popup__variant" href="#"><img src="img/apple.svg" alt="" />Sign up via Apple</a></div>
            <div className="popup__details">Or continue with email &amp; password</div>
            <form action>
              <div className="field">
                <div className="field__label">Your email</div>
                <div className="field__wrap"><input className="field__input" type="email" placeholder="Enter your email" /></div>
              </div>
              <div className="field">
                <div className="field__label">Password</div>
                <div className="field__wrap"><input className="field__input" type="email" placeholder="Enter your password" /></div>
              </div>  
              <div style={{marginTop: '3rem'}} className="popup__btns"><a className="popup__btn btn btn_orange " href="./dashboard/index.html" data-effect="mfp-zoom-in">Sign In</a>
              </div>
            </form>
          </div>
          {/* scripts*/}
        </div>
      );
    }
  });