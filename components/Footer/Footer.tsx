import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="bg-black  text-white  md:pt-25 px-10 md:px-[10%] flex flex-row flex-wrap justify-center items-center [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center [&>*]:md:items-start  ">
          <div className="max-w-[250px] m-5">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="text-center md:text-start">
              From Mobile to Desktop, We have Got You Covered with Customizable
              and Scalable Solutions for Your Needs.
            </p>
          </div>

          <div className="max-w-[250px]">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p>istore@gmail.com</p>
            <p>01832322222</p>
          </div>
          <div className="max-w-[250px] m-5 text-center">
            <h1 className="text-2xl font-bold">Location</h1>
            <h1>Dhaka Bangladesh</h1>
            <p>Daffodil Smart city,</p>
            <p>another destination of Technology</p>
          </div>
        </section>

        <section className=" px-10 md:px-[10%] text-white bg-black text-center">
          <hr />
          <p className="py-3">
            copyright @2023 All right reserved | This template is made by Parvez
            Musharaf
          </p>
        </section>
      </div>
    </>
  );
};

export default Footer;
