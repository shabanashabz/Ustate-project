import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Faq() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("-1");

  const faqs1 = [
    {
      title: "What are your hours?",
      description: "We're open 7 days/week from 8am to 10pm.",
    },
    {
      title: "What is the last wash time?",
      description:
        "The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM.",
    },
    {
      title: "Is coin-less laundry really coin-less?",
      description:
        "All the machines work with a laundry card - you don't need to bring quarters. You can use cash, VISA or MasterCard to add value to a laundry card that may be re-loaded as you use up the balance on your card.",
    },
    {
      title: "How do I get a new laundry card?",
      description:
        "You may get a laundry card by visiting the VTM (Value Transfer Machine) at the back of the store. Follow the simple steps to get a laundry card and add value by inserting cash, VISA or MasterCard. You can add money to the card as needed. Our friendly staff is always available to assist you if you need help with your transaction. There is also an available mobile app, directions can be loacted near the kiosk at the back of the store.",
    },
    {
      title: "How do I add money to the card?",
      description:
        "You can add money to your card using cash, VISA or MasterCard at the VTM (Value Transfer Machine) next to the office. Please see the attendant if you need any assistance with your transaction. You can also register your card with Fascard by clicking here or by downloading the Fascard Mobile Apple with Apple & Android)",
    },
    {
      title: "Is my laundry card reusable/reloadable?",
      description:
        "Yes, the card will retain any unused balance for future visits and can be reused and reloaded as often as needed. You can reload your Fascard by clicking here or download their app in your devices app store. Please note that other laudromats use the same system, however our cards only work at our location.",
    },
  ];

  const faqs2 = [
    {
      title: "How do I register my laundry card?",
      description:
        "Registration can be completed by downloading the FasCard Mobile App, or by clicking here Registration is very important because it allows you to receive dicounts throughout the year and if you lose your laundry card we can trasnfer the money to a new one.",
    },
    {
      title: "Why is the front load washer often a better choice?",
      description:
        "Top load washers are smaller capacity and less efficient. Front washers provide a better wash and are gentler on your garments due to their tumbling action. They need less soap (for example a double load front load washer will need about 1 1/2 load's worth of soap). Front load washers are better value and more environmentally friendly.",
    },
    {
      title: "Can I wash my pillows in a front load washer?",
      description:
        "You can - but you need to aware of a few things. Pillows can sometimes be damaged during wash and may lose stuffing or lose it's shape. Please use your best judgment.",
    },
    {
      title: "Can I wash a down comforter?",
      description:
        "Comforters with down fillings take longer to dry. You may need to air dry them at home to get the moisture out. Please take care to dry them completely to prevent mildew.",
    },
    {
      title: "How do I add time to the dryers?",
      description:
        "You can add any amount of time to the dryer by inserting your laundry card into the dryer until the desired drying time is reached. Then press the START button. Please remember to take the card with you when you are done adding time to the dryer.",
    },
    {
      title: "What items should NOT be put in the dryer?",
      description:
        "Anything with rubber should NOT be placed into the dryers on any temperature other than “air dry”. This includes all shoes and rugs with rubber backing, or any other item that is made with any rubber or plastic materials. They may become damaged and misshapen after being placed in the dryer. Items containing rubber or plastic are not permitted in the dryers for this reason.",
    },
  ];

  return (
    <div className="bg-light p-4" style={{ height: "90vh" }}>
      <div className="row m-5" style={{ padding: "100px" }}>
        <h2 className="text-center fw-bolder">Frequently Asked Questions</h2>
        <div className="col-md-6 justify-content-center p-4">
          {faqs1.map((item, index) => {
            return (
              <div key={index} className={index != 0 ? "mt-4" : ""}>
                <h4
                  style={{ fontSize: "18px" }}
                  onClick={() => {
                    if (selectedItem == `l${index}`) {
                      setSelectedItem("-1");
                    } else {
                      setSelectedItem(`l${index}`);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} className="text-danger me-2" />
                  {item.title}
                </h4>
                <Collapse in={selectedItem == `l${index}`}>
                  <div id="example-collapse-text">
                    <hr />
                    {item.description}
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
        <div className="col-md-6 justify-content-center p-4">
          {faqs2.map((item, index) => {
            return (
              <div key={index} className={index != 0 ? "mt-4" : ""}>
                <h4
                  style={{ fontSize: "18px" }}
                  onClick={() => {
                    if (selectedItem == `r${index}`) {
                      setSelectedItem("-1");
                    } else {
                      setSelectedItem(`r${index}`);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} className="text-danger me-2" />
                  {item.title}
                </h4>
                <Collapse in={selectedItem == `r${index}`}>
                  <div id="example-collapse-text">
                    <hr />
                    {item.description}
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
