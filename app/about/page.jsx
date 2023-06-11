import React from "react";

const AboutPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/images/aboutpage.jpg);" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          <p className="mb-5">
            Welcome to <b>Quick Appliance Repair!</b> <br />
            <br />
            We understand the frustration that comes with a malfunctioning
            appliance. Whether it's a broken refrigerator, a faulty dishwasher,
            or a malfunctioning oven, we know how important it is to have your
            appliances up and running smoothly. That's why we're here to help.{" "}
            <br />
            <br />
            With years of experience in the industry, our team of skilled
            technicians is dedicated to providing fast, reliable, and efficient
            appliance repair services. We take pride in our work and strive to
            exceed our customers' expectations every step of the way. <br />
            <br /> Our mission is simple: to restore your appliances to their
            optimal working condition as quickly as possible. We know that your
            time is valuable, so we prioritize speedy service without
            compromising on quality. Our technicians are highly trained and
            equipped with the latest tools and knowledge to diagnose and repair
            a wide range of appliance issues.
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content text-center">
    //     <div className="max-w-5xl">
    //       <h1 className="text-5xl font-bold mt-10">About Us</h1>
    // <p className="py-6">
    // Welcome to <b>Quick Appliance Repair!</b> <br />
    // <br />
    // We understand the frustration that comes
    // with a malfunctioning appliance. Whether it's a broken refrigerator,
    // a faulty dishwasher, or a malfunctioning oven, we know how important
    // it is to have your appliances up and running smoothly. That's why
    // we're here to help. <br />
    // <br />
    // With years of experience in the industry, our team of skilled
    // technicians is dedicated to providing fast, reliable, and efficient
    // appliance repair services. We take pride in our work and strive to
    // exceed our customers' expectations every step of the way. <br />
    // <br /> Our mission is simple: to restore your appliances to their
    // optimal working condition as quickly as possible. We know that your
    // time is valuable, so we prioritize speedy service without
    // compromising on quality. Our technicians are highly trained and
    // equipped with the latest tools and knowledge to diagnose and repair
    // a wide range of appliance issues. <br />
    //   <br /> What sets us apart from the competition is our commitment to
    //   exceptional customer service. We believe in building long-term
    //   relationships with our clients, and that starts with delivering
    //   outstanding service and exceeding their expectations. From the
    //   moment you contact us, our friendly and professional staff will
    //   guide you through the repair process, answering any questions you
    //   may have and ensuring that you're informed every step of the way.
    //   <br />
    //   <br /> At <b>Quick Appliance Repair</b>, we value transparency.
    //   Before we begin any repair work, we provide a comprehensive and
    //   honest assessment of the problem and a detailed estimate of the
    //   costs involved. We believe in upfront pricing, so you can rest
    //   assured that there will be no hidden fees or surprises when it comes
    //   to billing. <br />
    //   <br /> We understand that emergencies can happen at any time, which
    //   is why we offer flexible scheduling options. Our team is available
    //   to serve you seven days a week, including evenings and weekends. We
    //   strive to accommodate your busy schedule and get your appliances
    //   back in working order as soon as possible. <br />
    //   <br /> Customer satisfaction is our top priority, and we stand
    //   behind our work with a <b>100% satisfaction guarantee</b>. If, for
    //   any reason, you're not completely satisfied with our service, we
    //   will make it right. Your happiness and peace of mind matter to us.
    // </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutPage;
