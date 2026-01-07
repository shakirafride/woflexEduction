

const ContactAreaTwo = () => {
  return (
    <div className="contact-area ptb-120">
      <div className="container">
        <div
          className="contact-content text-center mx-auto"
          data-cues="slideInUp"
          data-group="contactContent"
        >
          <h2 className="fw-semibold text-uppercase">
            Your Gateway to Multilingual Learning Begins Here
          </h2>
          <div className="info position-relative d-flex align-items-center justify-content-between mx-auto">
            <h3 className="mb-0 fw-semibold">+123 456 78912</h3>
            <div className="icon d-flex align-items-center justify-content-center rounded-circle">
              <img
                width={38}
                height={38}
                src="/images/icons/phone.svg"
                alt="phone"
              />
            </div>
            <a
              href="tel:+12345678912"
              className="link-btn position-absolute top-0 end-0 start-0 bottom-0"
            />
          </div>
          <p className="mx-auto">
            Lorem Ipsum&nbsp;is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactAreaTwo;
