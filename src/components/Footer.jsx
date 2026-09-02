import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa'

const quickLinks = [
  { label: 'About Collage', href: '/about' },
  { label: 'Mission & Vision', href: '/about/mission-vision' },
  { label: 'Our Objectives', href: '/about/objectives' },
  { label: "Chairman's Message", href: '/about/chairman' },
  { label: 'Director Message', href: '/about/director' },
  { label: "Principal's Message", href: '/about/principal' },
  { label: "Suprintendent's", href: '/about/superintendent' },
]

const academics = [
  { label: 'Message of Chairman', href: '/academics/chairman' },
  { label: 'Message of Director', href: '/academics/director' },
  { label: 'Teaching Staff-List', href: '/academics/teaching-staff' },
  { label: 'Non Teaching Staff', href: '/academics/non-teaching-staff' },
  { label: 'Infrastructure', href: '/facility' },
  { label: 'Medical Camp', href: '/medical-camp' },
  { label: 'Equipment Details', href: '/equipment' },
]

const ncismLinks = [
  { label: 'College Council', href: '/ncism-mandates/college-council' },
  { label: 'Clinical materials', href: '/ncism-mandates/clinical-materials' },
  {
    label: 'College Teaching Staff Details',
    href: '/ncism-mandates/teaching-staff',
  },
  {
    label: 'Research & Publication',
    href: '/ncism-mandates/research-publication',
  },
  {
    label: 'Principal Information',
    href: '/ncism-mandates/principal-information',
  },
  { label: 'Attendance', href: '/attendance' },
  { label: 'OPD IPD Summary', href: '/hospital/opd-ipd-summary' },
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

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <FaFacebookF />,
    className: 'bg-[#247bf1]',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <FaInstagram />,
    className: 'bg-[#e33872]',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
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
            rel="noreferrer"
            aria-label={item.label}
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

      <div className="mx-auto max-w-[1560px] px-5 py-9 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">

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

          {/* LEFT */}
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
                alt="Krishna College Bhopal"
                className="h-[56px] w-auto max-w-full object-contain sm:h-[64px] lg:h-[68px]"
              />
            </div>

            {/* FIND US */}
            

            <div className="mt-4 space-y-3 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3 sm:space-y-0 lg:block lg:space-y-3">

              {/* PHONE */}
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
                  <FaPhoneAlt />
                </div>

                <div className="min-w-0 flex flex-col items-start gap-1 text-[14px] min-[430px]:flex-row min-[430px]:items-center min-[430px]:gap-2 sm:text-[15px] lg:text-[16px]">
                  <a
                    href="tel:+917611150888"
                    className="hover:text-[#e7a51d]"
                  >
                    +91-6262180303 
                  </a>

                  <span className="hidden min-[430px]:inline">|</span>

                  <a
                    href="tel:+917611150888"
                    className="hover:text-[#e7a51d]"
                  >
                    +91-6262180303 
                  </a>
                </div>

              </div>

              {/* EMAIL */}
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
                  href="mailto:shrikrishnayurvedic@.com"
                  className="min-w-0 break-all text-[14px] hover:text-[#e7a51d] sm:text-[15px] lg:text-[16px]"
                >
                  shrikrishnayurvedic@.com
                </a>

              </div>

              {/* ADDRESS */}
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

                <p className="min-w-0 text-[14px] leading-6 sm:text-[15px] lg:text-[16px]">
                  <strong>Address:</strong>{' '}
                  Krishna College Bhopal, Bhopal, Madhya Pradesh
                </p>

              </div>

            </div>

          </div>

          {/* COLUMNS */}
          <FooterLinkColumn
            title="Quick Links"
            links={quickLinks}
          />

          <FooterLinkColumn
            title="Academics"
            links={academics}
          />

          <FooterLinkColumn
            title="NCISM Mandates"
            links={ncismLinks}
          />

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

          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center lg:justify-start lg:text-left">
            <span>
              © 2026 Krishna College Bhopal. All Rights Reserved.
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center lg:justify-start lg:text-left">

            <a href="https://ntechzy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white">
              Designed by Ntechzy
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
