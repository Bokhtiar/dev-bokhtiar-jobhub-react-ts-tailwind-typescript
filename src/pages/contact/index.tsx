import { BsPhone } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { ContactForm } from "components/form/contact.form";

export const Contact: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* Header */}
      <div className="w-full h-[260px] lg:h-[450px] overflow-hidden bg-aboutbackground bg-no-repeat bg-cover">
        <div className="w-full h-full bg-primary opacity-80 p-4 text-center grid place-items-center">
          <p className="text-white font-bold text-3xl lg:text-5xl">
            Contact Us
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mx-auto py-24 lg:py-32 px-4 lg:px-0">
        {/* Google map */}
        <div className="mb-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58376.843020930915!2d90.3277921!3d23.8700127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e0!3m2!1sen!2sbd!4v1672126929831!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JobHub-contact-address"
          ></iframe>
        </div>

        {/* Message box & addresses */}
        <div>
          <div className="lg:flex gap-10">
            {/* Message box */}
            <div className="grow mb-10 lg:mb-0">
              <p className="text-gray-700 text-3xl mb-5">Get in touch.</p>
              <ContactForm
                loading={false}
                onSubmit={(data) => console.log(data)}
              />
            </div>

            {/* Contact addresses */}
            <div className="flex-none w-full lg:!w-80 xl:!w-96">
              {/* Home */}
              <div className="inline-flex w-full mb-7">
                <div className="pt-2">
                  <AiOutlineHome size={28} className="text-gray-400" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 text-sm mb-1">
                    Buttonwood, California.
                  </p>
                  <p className="text-gray-400 text-sm">Rosemead, CA 91770</p>
                </div>
              </div>

              {/* Phone */}
              <div className="inline-flex w-full mb-7">
                <div className="pt-2">
                  <BsPhone size={28} className="text-gray-400" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 text-sm mb-1">+1 253 565 2365</p>
                  <p className="text-gray-400 text-sm">Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              {/* Mail */}
              <div className="inline-flex w-full">
                <div className="pt-2">
                  <AiOutlineMail size={28} className="text-gray-400" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 text-sm mb-1">
                    support@jobhub.com
                  </p>
                  <p className="text-gray-400 text-sm">
                    Send us your query anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
