import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa'

const quickLinks = [
  { label: 'About College', href: '/about' },
  { label: 'Mission & Vision', href: '/about/vision-mission' },
  { label: 'Director Message', href: '/about/director-message' },
  { label: 'Departments', href: '/departments' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

const academics = [
  { label: 'Teaching Staff-List', href: '/faculty/teaching-staff' },
  { label: 'Non Teaching Staff', href: '/faculty/non-teaching-staff' },
  { label: 'Hospital Staff', href: '/faculty/hospital-staff' },
  { label: 'Infrastructure', href: '/facilities' },
  { label: 'Medical Camp', href: '/gallery/events' },
  { label: 'Campus Gallery', href: '/gallery/campus' },
  { label: 'Hospital Gallery', href: '/gallery/hospital' },
]

const ncismLinks = [
  { label: 'College Council', href: '/committee' },
  { label: 'Clinical materials', href: '/hospital' },
  {
    label: 'Department of Ayurveda Teaching Staff Details',
    href: '/faculty/teaching-staff',
  },
  {
    label: 'Research & Publication',
    href: '/committee',
  },
  {
    label: 'Principal Information',
    href: '/about/director-message',
  },
  { label: 'Committee Documents', href: '/committee' },
  { label: 'OPD IPD Summary', href: '/hospital' },
]

const FooterLinkColumn = ({ title, links }) => {
  return (
    <div className="min-w-0">
      <h3 className="mb-4 text-[20px] font-bold leading-none text-white sm:mb-5 sm:text-[23px] lg:mb-6 lg:text-[25px]">
        {title}
      </h3>

      <div className="space-y-2.5 sm:space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              block
              text-[14px]
              leading-[1.35]
              text-white
              transition
              hover:text-[#e7a51d]
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

/* =====================================
   SOCIAL MEDIA LINKS
===================================== */
const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/skuindia?rdid=EL57jO3BWlqaF0kJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RFt9JKFiX%2F#',
    icon: <FaFacebookF />,
    className: 'bg-[#247bf1]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shreekrishnauniversity?stkn=MXdja2QzOHpzc3JnNA%3D%3D',
    icon: <FaInstagram />,
    className: 'bg-[#e33872]',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/results?search_query=shri+krishna+university+chhatarpur',
    icon: <FaYoutube />,
    className: 'bg-[#ff0808]',
  },
]

const FooterSocialColumn = () => {
  return (
    <div className="min-w-0">
      <h3 className="mb-4 text-[20px] font-bold leading-none text-white sm:mb-5 sm:text-[23px] lg:mb-6 lg:text-[25px]">
        Follow Us
      </h3>

      <div className="flex flex-wrap items-center gap-3 sm:max-w-[190px]">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[17px]
              text-white
              transition
              hover:-translate-y-1
              sm:h-11
              sm:w-11
              sm:text-[19px]
              lg:h-[48px]
              lg:w-[48px]
              lg:text-[20px]
              ${item.className}
            `}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-[#168486] text-white">

      <div
        className="
          mx-auto
          max-w-[1560px]
          px-5
          py-9
          sm:px-6
          sm:py-10
          lg:px-10
          lg:py-12
          xl:px-12
        "
      >

        {/* =====================================
            TOP AREA
        ====================================== */}
        <div
          className="
            grid
            items-start
            gap-x-8
            gap-y-8
            sm:grid-cols-2
            lg:grid-cols-[1.75fr_0.85fr_0.9fr_1.15fr_0.75fr]
            lg:gap-y-10
            xl:gap-x-10
          "
        >

          {/* =====================================
              LEFT SECTION
          ====================================== */}
          <div className="max-w-[520px] sm:col-span-2 lg:col-span-1">

            {/* LOGO */}
            <div
              className="
                inline-flex
                items-center
                rounded-[14px]
                bg-white
                px-3
                py-2
                sm:py-2.5
              "
            >
              <img
                src="/logoayu.png"
                alt="Shri Krishna Ayurvedic Hospital logo"
                className="
                  h-[56px]
                  w-auto
                  max-w-full
                  object-contain
                  sm:h-[64px]
                  lg:h-[68px]
                "
              />
            </div>

            {/* =====================================
                CONTACT DETAILS
            ====================================== */}
            <div
              className="
                mt-4
                space-y-3
                sm:grid
                sm:grid-cols-2
                sm:gap-x-6
                sm:gap-y-3
                sm:space-y-0
                lg:block
                lg:space-y-3
              "
            >

              {/* =====================================
                  PHONE
              ====================================== */}
              <div className="flex items-start gap-3">

                {/* PHONE ICON */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FaPhoneAlt />
                </div>

                {/* PHONE NUMBERS */}
                <div
                  className="
                    min-w-0
                    flex
                    flex-col
                    gap-1
                    text-[14px]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >

                  {/* Hospital Helpline */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold whitespace-nowrap">
                      Hospital Helpline:
                    </span>

                    <a
                      href="tel:+916262618031"
                      className="
                        whitespace-nowrap
                        transition
                        hover:text-[#e7a51d]
                      "
                    >
                      +91-6262618031
                    </a>
                  </div>

                  {/* Admission Helpline 1 */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold whitespace-nowrap">
                      Admission Helpline:
                    </span>

                    <a
                      href="tel:+916262618035"
                      className="
                        whitespace-nowrap
                        transition
                        hover:text-[#e7a51d]
                      "
                    >
                      +91-6262618035
                    </a>
                  </div>

                  {/* Admission Helpline 2 */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold whitespace-nowrap">
                      Admission Helpline:
                    </span>

                    <a
                      href="tel:+919695966669"
                      className="
                        whitespace-nowrap
                        transition
                        hover:text-[#e7a51d]
                      "
                    >
                      +91-9695966669
                    </a>
                  </div>

                </div>
              </div>

              {/* =====================================
                  EMAIL
              ====================================== */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:skahospitel2022@gmail.com"
                  className="
                    min-w-0
                    break-all
                    text-[14px]
                    transition
                    hover:text-[#e7a51d]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  skahospitel2022@gmail.com
                </a>

              </div>

              {/* =====================================
                  ADDRESS
              ====================================== */}
              <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <p
                  className="
                    min-w-0
                    text-[14px]
                    leading-6
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  <strong>Address:</strong>{' '}
                  N-H 86, Village Chauka, Sagar Road, Chhatarpur, Madhya Pradesh.
                </p>

              </div>

            </div>

          </div>

          {/* =====================================
              QUICK LINKS
          ====================================== */}
          <FooterLinkColumn
            title="Quick Links"
            links={quickLinks}
          />

          {/* =====================================
              ACADEMICS
          ====================================== */}
          <FooterLinkColumn
            title="Academics"
            links={academics}
          />

          {/* =====================================
              NCISM MANDATES
          ====================================== */}
          <FooterLinkColumn
            title="NCISM Mandates"
            links={ncismLinks}
          />

          {/* =====================================
              SOCIAL MEDIA
          ====================================== */}
          <FooterSocialColumn />

        </div>

        {/* =====================================
            BOTTOM BAR
        ====================================== */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            pt-4
            text-[14px]
            text-white/80
            sm:mt-10
            sm:pt-5
            sm:text-[15px]
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* COPYRIGHT */}
          <p
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2
              gap-y-1
              text-center
              lg:justify-start
              lg:text-left
            "
          >
            <span>
              © 2026 Shri Krishna Ayurvedic Hospital. All Rights Reserved.
            </span>
          </p>

          {/* DESIGNER */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
              text-center
              lg:justify-start
              lg:text-left
            "
          >
            <a
              href="https://ntechzy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-semibold
                text-white
                transition
                hover:text-[#e7a51d]
              "
            >
              Designed by Ntechzy
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer