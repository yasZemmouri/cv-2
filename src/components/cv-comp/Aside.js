const Aside = ({tel, email, city}) => {
    return (
      <aside>
          <img src="" alt="profile picture" className="profile" />
          <section>
              <h2>Contact</h2>
              <ul>
                  <li>
                      <a href={`tel:${tel}`}>{tel}</a>
                  </li>
                  <li><a href={`mailto:${email}`}><i className="fas fa-envelope contact-icon"></i>{email}</a></li>
              <li><i className="fas fa-home contact-icon"></i>City: {city}</li>
              {/* 
              <li class="table"><a href="https://www.linkedin.com/in/yassine-zemmouri-822850bb/"><i class="fab fa-linkedin-in contact-icon"></i><div>linkedin.com/in/yassine-zemmouri-822850bb/</a></div></li> */}
              </ul>
          </section>
      </aside>
    )
  }
  export default Aside; 
  