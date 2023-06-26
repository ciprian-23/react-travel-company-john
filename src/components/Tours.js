import Title from './Title';
import { toursData } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title word1="featured" word2="tours" />
      <div className="section-center featured-center">
        {toursData.map(
          ({ id, image, date, title, info, location, duration, cost }) => {
            return (
              <article key={id} className="tour-card">
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${cost}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Tours;
