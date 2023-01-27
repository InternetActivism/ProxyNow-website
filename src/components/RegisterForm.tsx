import { platform } from "os";
import React, { useEffect, useState } from "react";
import ButtonBlue from "./ButtonBlue";

const protocolToPlatform = {
  http: "whatsapp",
  https: "whatsapp",
  socks5: "telegram",
  mtproto: "telegram",
};

function Form() {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [protocol, setProtocol] = useState<
    "http" | "https" | "socks5" | "mtproto" | ""
  >("http");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errors, setErrors] = useState<{
    ip?: string;
    port?: string;
    additionalInfo?: string;
  }>({});
  const [isSubmitted, setSubmitted] = useState<{ message?: string }>({});

  // Clear errors when component is first loaded
  useEffect(() => {
    setErrors({});
  }, []);

  const clearForm = () => {
    setIp("");
    setPort("");
    setProtocol("http");
    setAdditionalInfo("");
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let errors = await validate();
    if (!protocol) {
      errors.protocol = "Please select a protocol.";
      return;
    }
    const submitMessage: { message?: string } = {};
    if (Object.keys(errors).length === 0) {
      const url =
        "https://proxynow-c699d-default-rtdb.firebaseio.com/proxynow-form/.json";
      const data = {
        ip,
        port,
        protocol,
        additionalInfo,
        platform: protocolToPlatform[protocol],
        createdTime: Math.floor(Date.now() / 1000),
      };
      // POST request
      try {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
        });

        setErrors({});
        console.log("Data saved successfully");
        submitMessage.message = "Submitted!";
        clearForm();
      } catch (error) {
        console.error("Error saving data: ", error);
        submitMessage.message = "Error submitting!";
      }
    } else {
      setErrors(errors);
    }
    setSubmitted(submitMessage);
  };

  const checkIpExists = async (ip: string) => {
    // Your JSON file URL
    const url_registered = `https://proxynow-c699d-default-rtdb.firebaseio.com/proxynow-form/.json?orderBy="ip"&equalTo="${ip}"`;
    const url_proxynow = `https://proxynow-c699d-default-rtdb.firebaseio.com/proxynow-script/.json?orderBy="ip"&equalTo="${ip}"`;
    try {
      const response_one = await fetch(url_registered);
      const registeredProxies = await response_one.json();

      const response_two = await fetch(url_proxynow);
      const listedProxies = await response_two.json();

      if (
        Object.keys(registeredProxies).length === 0 &&
        Object.keys(listedProxies).length === 0
      )
        return false;
      else return true;
    } catch (error) {
      console.error("Error checking IP address: ", error);
    }
  };

  const validate = async () => {
    const errors: {
      ip?: string;
      port?: string;
      protocol?: string;
      additionalInfo?: string;
    } = {};
    if (
      !ip.match(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
      )
    ) {
      errors.ip = "Invalid IP address.";
    }
    if (
      !port.match(
        /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/
      )
    ) {
      errors.port = "Invalid port number.";
    }
    if (additionalInfo.length > 200) {
      errors.additionalInfo =
        "Additional information should not exceed 200 characters.";
    }

    const ipExists = await checkIpExists(ip);
    if (ipExists) {
      errors.ip = "This IP address already exists in the database.";
    }

    return errors;
  };

  return (
    <div className="grow-0 mt-12">
      <form onSubmit={handleSubmit}>
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 mt-16 mb-8 text-center">
          Register A Proxy
        </h1>
        <div className="ml-28">
          <div className="mb-8 flex flex-row">
            <div>
              <label className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                IP Address:
              </label>
            </div>
            <input
              type="text"
              className="border border-[#0085FF] rounded mx-3 "
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="mb-8 flex flex-row">
            <div>
              <label className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                Port:
              </label>
            </div>
            <input
              type="text"
              className="border border-[#0085FF] rounded mx-3"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="mb-8 flex flex-row">
            <div>
              <label className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                Protocol:
              </label>
            </div>
            <select
              value={protocol}
              className={`border border-[#0085FF] rounded mx-3 py-1 px-2 w-1/3`}
              onChange={(e) => {
                // see if e target value is "" | "http" | "https" | "socks5" | "mtproto"
                if (
                  e.target.value === "http" ||
                  e.target.value === "https" ||
                  e.target.value === "socks5" ||
                  e.target.value === "mtproto"
                ) {
                  setProtocol(e.target.value);
                }
              }}
              required
            >
              <option value="http">HTTP</option>
              <option value="https">HTTPS</option>
              <option value="socks5">SOCKS5</option>
              <option value="mtproto">MTProto</option>
            </select>
            <br />
          </div>
          <div>
            <label className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              Additional Information:
            </label>

            <br />
            <textarea
              className="w-3/4 border border-[#0085FF] rounded [resize:none] mt-3"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={4}
              cols={50}
              maxLength={200}
            />
            <br />
          </div>
        </div>
        <div className="ml-28 pt-3 flex flex-row items-center">
          <ButtonBlue small={false} text={"Submit"} />
          <div className="ml-5 text-sm sm:text-md md:text-lg lg:text-xl">
            {isSubmitted.message && <span>{isSubmitted.message}</span>}
          </div>
        </div>
        <div className="ml-28 pt-3 flex flex-col">
          {errors.ip && (
            <span className="error-message text-red-600">{errors.ip}</span>
          )}
          {errors.port && (
            <span className="error-message text-red-600">{errors.port}</span>
          )}
          {errors.additionalInfo && (
            <span className="error-message text-red-600">
              {errors.additionalInfo}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
