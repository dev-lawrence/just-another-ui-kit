const Home = () => {
  return (
    <>
      <section id="home" className="home">
        {/* Hero */}
        <div className="hero">
          <div className="overlay">
            <div className="container">
              <div className="content">
                <h1>
                  It doesn’t matter what <span>JS Framework</span> you work
                  with.
                </h1>
                <p>
                  Our boilerplates works with it <span>out-of-the-box.</span>
                </p>

                <div className="buttons">
                  <button className="btn cta">
                    <span>Get started</span>
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  <button className="btn-outline cta">
                    <span>See repo</span>

                    <svg width="18" height="18" viewBox="0 0 16 16">
                      <path
                        className="github"
                        d="M5.18437 12.1687C5.18437 12.2312 5.1125 12.2812 5.02187 12.2812C4.91875 12.2906 4.84688 12.2406 4.84688 12.1687C4.84688 12.1062 4.91875 12.0562 5.00938 12.0562C5.10313 12.0469 5.18437 12.0969 5.18437 12.1687ZM4.2125 12.0281C4.19063 12.0906 4.25313 12.1625 4.34688 12.1812C4.42813 12.2125 4.52187 12.1812 4.54063 12.1187C4.55938 12.0562 4.5 11.9844 4.40625 11.9563C4.325 11.9344 4.23438 11.9656 4.2125 12.0281ZM5.59375 11.975C5.50313 11.9969 5.44062 12.0563 5.45 12.1281C5.45937 12.1906 5.54063 12.2313 5.63438 12.2094C5.725 12.1875 5.7875 12.1281 5.77812 12.0656C5.76875 12.0063 5.68437 11.9656 5.59375 11.975ZM7.65 0C3.31563 0 0 3.29063 0 7.625C0 11.0906 2.18125 14.0563 5.29688 15.1C5.69688 15.1719 5.8375 14.925 5.8375 14.7219C5.8375 14.5281 5.82812 13.4594 5.82812 12.8031C5.82812 12.8031 3.64062 13.2719 3.18125 11.8719C3.18125 11.8719 2.825 10.9625 2.3125 10.7281C2.3125 10.7281 1.59687 10.2375 2.3625 10.2469C2.3625 10.2469 3.14062 10.3094 3.56875 11.0531C4.25312 12.2594 5.4 11.9125 5.84688 11.7063C5.91875 11.2063 6.12188 10.8594 6.34688 10.6531C4.6 10.4594 2.8375 10.2062 2.8375 7.2C2.8375 6.34062 3.075 5.90938 3.575 5.35938C3.49375 5.15625 3.22813 4.31875 3.65625 3.2375C4.30937 3.03437 5.8125 4.08125 5.8125 4.08125C6.4375 3.90625 7.10938 3.81563 7.775 3.81563C8.44063 3.81563 9.1125 3.90625 9.7375 4.08125C9.7375 4.08125 11.2406 3.03125 11.8938 3.2375C12.3219 4.32188 12.0563 5.15625 11.975 5.35938C12.475 5.9125 12.7812 6.34375 12.7812 7.2C12.7812 10.2156 10.9406 10.4563 9.19375 10.6531C9.48125 10.9 9.725 11.3687 9.725 12.1031C9.725 13.1562 9.71562 14.4594 9.71562 14.7156C9.71562 14.9187 9.85938 15.1656 10.2563 15.0938C13.3813 14.0562 15.5 11.0906 15.5 7.625C15.5 3.29063 11.9844 0 7.65 0ZM3.0375 10.7781C2.99687 10.8094 3.00625 10.8813 3.05938 10.9406C3.10938 10.9906 3.18125 11.0125 3.22187 10.9719C3.2625 10.9406 3.25312 10.8687 3.2 10.8094C3.15 10.7594 3.07812 10.7375 3.0375 10.7781ZM2.7 10.525C2.67813 10.5656 2.70937 10.6156 2.77187 10.6469C2.82187 10.6781 2.88438 10.6687 2.90625 10.625C2.92812 10.5844 2.89687 10.5344 2.83437 10.5031C2.77187 10.4844 2.72187 10.4937 2.7 10.525ZM3.7125 11.6375C3.6625 11.6781 3.68125 11.7719 3.75312 11.8313C3.825 11.9031 3.91562 11.9125 3.95625 11.8625C3.99688 11.8219 3.97813 11.7281 3.91563 11.6687C3.84688 11.5969 3.75313 11.5875 3.7125 11.6375ZM3.35625 11.1781C3.30625 11.2094 3.30625 11.2906 3.35625 11.3625C3.40625 11.4344 3.49062 11.4656 3.53125 11.4344C3.58125 11.3938 3.58125 11.3125 3.53125 11.2406C3.4875 11.1688 3.40625 11.1375 3.35625 11.1781Z"
                        fill="#FFFF00"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported */}
        <div id="blog" className="supported pt-section">
          <h2>Supported and backed by:</h2>
          <div className="d-grid">
            <div className="text">
              <p>Lorem</p>
            </div>

            <div className="text">
              <p>Ipsum</p>
            </div>

            <div className="text">
              <p>Dolor</p>
            </div>

            <div className="text">
              <p>Sit</p>
            </div>

            <div className="text">
              <p>Dolor</p>
            </div>

            <div className="text">
              <p>Sit</p>
            </div>

            <div className="text">
              <p>Lorem</p>
            </div>

            <div className="text">
              <p>Ipsum</p>
            </div>
          </div>
          <div className="more-product">
            <h3>Less code. More product.</h3>
            <p>
              By using our UI Kit, we make sure you only get to{' '}
              <span>focus more</span> on the other things that matter.
            </p>
          </div>
        </div>

        {/* About */}
        <div id="about" className="container">
          <div className="about">
            <h2>About</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sit amet consectetur adipiscing elit pellentesque habitant. Cras
              pulvinar mattis nunc sed blandit libero volutpat. Odio ut enim
              blandit volutpat maecenas volutpat. Sapien eget mi proin sed
              libero enim. Amet facilisis magna etiam tempor. Facilisi cras
              fermentum odio eu feugiat pretium nibh. Nibh tellus molestie nunc
              non blandit. Integer enim neque volutpat ac tincidunt vitae semper
              quis. Gravida rutrum quisque non tellus. Et pharetra pharetra
              massa massa ultricies mi quis. Nisl rhoncus mattis rhoncus urna
              neque viverra justo nec. Eget sit amet tellus cras adipiscing enim
              eu turpis. Volutpat commodo sed egestas egestas fringilla. Dui
              accumsan sit amet nulla. Morbi quis commodo odio aenean sed
              adipiscing. Elementum nisi quis eleifend quam adipiscing vitae
              proin sagittis nisl. Interdum posuere lorem ipsum dolor. Dolor
              magna eget est lorem ipsum dolor. Nibh nisl condimentum id
              venenatis.
            </p>

            <p>
              Aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque habitant. Interdum consectetur libero id faucibus
              nisl tincidunt eget nullam non. Mi bibendum neque egestas congue
              quisque egestas diam in arcu. Fermentum odio eu feugiat pretium
              nibh ipsum consequat nisl vel. Arcu dictum varius duis at
              consectetur lorem. In nibh mauris cursus mattis molestie. Velit ut
              tortor pretium viverra suspendisse potenti nullam ac. Vivamus at
              augue eget arcu dictum varius. Ullamcorper malesuada proin libero
              nunc consequat interdum varius sit. Volutpat odio facilisis mauris
              sit amet massa vitae tortor condimentum. Morbi quis commodo odio
              aenean sed adipiscing diam donec. Nullam vehicula ipsum a arcu.
              Arcu non odio euismod lacinia at. Odio tempor orci dapibus
              ultrices in iaculis.
            </p>

            <p>
              Felis eget velit aliquet sagittis id consectetur purus ut
              faucibus. Est velit egestas dui id. Ipsum a arcu cursus vitae
              congue mauris rhoncus aenean vel. Sed felis eget velit aliquet
              sagittis id consectetur. Consequat interdum varius sit amet
              mattis. Adipiscing elit pellentesque habitant morbi tristique.
              Elit eget gravida cum sociis natoque penatibus et magnis dis. Sit
              amet nisl purus in mollis nunc. In nulla posuere sollicitudin
              aliquam. Ut tortor pretium viverra suspendisse potenti. Facilisi
              etiam dignissim diam quis enim. Consectetur purus ut faucibus
              pulvinar elementum integer enim neque volutpat. Pellentesque massa
              placerat duis ultricies lacus. Donec massa sapien faucibus et
              molestie. Ac turpis egestas sed tempus urna et pharetra. At lectus
              urna duis convallis convallis tellus. Egestas diam in arcu cursus
              euismod quis viverra. Malesuada nunc vel risus commodo viverra
              maecenas accumsan lacus vel.
            </p>
          </div>
        </div>

        {/* contact */}
        <div id="contact" className="contact">
          <div className="container">
            <h2>Contact</h2>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="form"
          >
            <h4>Fill out this form to reach us</h4>

            <div className="row">
              <div className="input-control">
                <input type="text" placeholder="First name" />
              </div>

              <div className="input-control">
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="input-control">
              <input type="text" placeholder="Email" />
            </div>

            <div className="input-control">
              <input type="text" placeholder="Phone (optional)" />
            </div>

            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button className="btn">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
