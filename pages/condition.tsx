import React from 'react'
import Layout from '../components/Layout/Layout'

function condition() {
  return (
    <Layout>
      <section className="xl:px-24 sm:px-10 px-4 pt-5">
        <div className=" text-gray-500">
          <p>
            <h4 className=" text-2xl font-bold tracking-tight mt-5 text-black">
              PROHIBITED ACTIVITIES
            </h4>
            <br />
            <br />
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us.
            <br />
            <br />
            As a user of the Site, you agree not to:
            <br />
            <br />
            <ul className="ml-6 my-4 list-disc">
              <li>
                7. trick, defraud, or mislead us and other users, especially in
                any attempt to learn sensitive account information such as user
                passwords;
              </li>
              <li>
                8. make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                9. engage in any automated use of the system, such as using
                scripts to send comments or messages, or using any data mining,
                robots, or similar data gathering and extraction tools.
              </li>
              <li>
                10. interfere with, disrupt, or create an undue burden on the
                Site or the networks or services connected to the Site.
              </li>
            </ul>
            <br />
            <br />
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default condition
