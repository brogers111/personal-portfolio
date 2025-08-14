import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ContactItem({ label, value, href, isExternal = false }: { label: string; value: string; href: string, isExternal?: boolean }) {
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      {/* Desktop ContactItem */}
      <div className='hidden md:block w-full'>
        <p className='mt-4 font-dongle text-4xl text-gray-800'>
          {label}:{" "}
          <a
            href={href}
            className='text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1'
            {...linkProps}
          >
            {value}
            {isExternal && (
              <FontAwesomeIcon className='size-[1rem]' icon={faArrowUpRightFromSquare} />
            )}
          </a>
        </p>
        <div className="border-b-2 border-gray-200"></div>
      </div>

      {/* Mobile ContactItem */}
      <div className='md:hidden w-full'>
        <p className='mt-4 font-dongle text-2xl text-gray-800'>
          {label}{" "}
          <a
            href={href}
            className='text-gray-400 inline-flex items-baseline gap-1'
            {...linkProps}
          >
            {value}
            {isExternal && (
              <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
            )}
          </a>
        </p>
        <div className="border-b-2 border-gray-200"></div>
      </div>
    </>
  );
}

function Contact() {
  const contacts = [
    {
      label: "Email:",
      value: "ber64111@gmail.com",
      href: "mailto:ber64111@gmail.com"
    },
    {
      label: "Phone:",
      value: "(507) 508-6725",
      href: "tel:+15075086725"
    },
    {
      label: "GitHub",
      value: "",
      href: "https://github.com/brogers111",
      isExternal: true
    },
    {
      label: "LinkedIn",
      value: "",
      href: "https://www.linkedin.com/in/brandonerogers/",
      isExternal: true
    }
  ];

  return (
    <>
      <div className='px-4 py-4 md:px-20 md:py-20'>
        <p className="font-dongle text-3xl text-gray-300">HERE'S MY</p>
        <h1 className="font-bluffolk text-6xl md:text-8xl whitespace-nowrap text-gray-600">CONTACT</h1>
        <p className="text-left pl-40 md:pl-80 font-dongle text-3xl text-gray-300">INFORMATION</p>
      </div>
      <div className='flex flex-col items-center text-center mx-8 md:mx-80 pt-20 md:pt-0'>
        {contacts.map((contact, index) => (
          <ContactItem key={index} {...contact} />
        ))}
      </div>
    </>
  );
}

export default Contact;
