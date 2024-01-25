import PageHeaderContent from "../../components/pageHeader";
import { RiContactsFill } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs"
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={50} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input type="text" name="name" className="inputName" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>
            <div className="emailWrapper">
              <input type="text" name="email" className="inputEmail" />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                type="text"
                name="description"
                className="inputDescription"
                rows={"5"}
                style={{ resize: "none" }}
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button className="submit">{<BsSendFill size={40}/>}</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
