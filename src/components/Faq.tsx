export default function Faq() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-500 md:gap-16 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Who runs ProxyNow?
              </h3>
              <p className="text-gray-500">
                ProxyNow is ran by InternetActivism, a US-based 501(c)(3) nonprofit that responds to crisis by developing online humanitarian tools for those in need.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Where do my proxies go?
              </h3>
              <p className="text-gray-500 ">
                We work with local NGOs and Iranian activist organizations to distribute your proxy server to those in need.
                <br /><br />
                <p className="text-gray-500 ">
                  Additionally, you can privately message your proxy details directly to those in Iran across social media.
                </p>
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Should I publicly advertise my proxy?
              </h3>
              <p className="text-gray-500">
                It is best not to advertise your proxy in public because it will
                get taken down quickly. Instead try to send it through private
                messages, or allow ProxyNow to securely handle the
                distribution.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How can I help?
              </h3>
              <p className="text-gray-500">
                Get involved with ProxyNow by joining the InternetActivism <a
                  href="https://discord.gg/gdxvW2sM"
                  className="hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord server
                </a>, or by <a
                  href="https://internetactivism.org/donate"
                  className="hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  donating
                </a> to our organization directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
