// Tabs Mantine
import { Tabs } from "@mantine/core";

function Features() {
  return (
    <div className="flex flex-col gap-y-10 pt-10 md:pt-20">
      <div>
        <h2 className="text-4xl md:text-6xl text-center font-semibold">
          Our features
        </h2>
      </div>

      <Tabs
        classNames={{
          root: "relative h-[80vh]",
          list: "bg-white border rounded-xl p-3 mx-0 md:mx-20",
          panel:
            "absolute top-14 md:top-8 bg-gray-100 h-full px-5 md:px-20 -z-10",
          tabLabel: "text-xs md:text-sm pp-0 md:-1",
        }}
        variant="pills"
        radius="md"
        defaultValue="first"
      >
        <Tabs.List grow>
          <Tabs.Tab value="first">Easy import of participants</Tabs.Tab>
          <Tabs.Tab value="second">Creating personalized invitations</Tabs.Tab>
          <Tabs.Tab value="third">Simplified signature validation</Tabs.Tab>
          <Tabs.Tab value="fourth">Facilitated communication</Tabs.Tab>
          <Tabs.Tab value="fifth">Centralized data management</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-10 py-0 md:py-10"
          value="first"
        >
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-fit rounded-xl" />
          </div>
          <div className="w-full md:w-1/2 pt-5 md:pt-0">
            <h2 className="text-2xl md:text-4xl mb-4">
              Easy import of participants
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              EventBadge offers a user-friendly interface that simplifies the
              import process for participants. You can easily map CSV file
              columns to corresponding attendee fields, ensuring that all
              relevant information is accurately captured. Furthermore, our
              platform supports bulk importation, allowing you to efficiently
              add large numbers of attendees with just a few clicks. Whether
              you&apos;re managing a small gathering or a large-scale
              conference, EventBadge empowers you to streamline your participant
              importation process, saving you valuable time and effort.
            </span>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-10 py-0 md:py-10"
          value="second"
        >
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl mb-4 md:mb-0">
            <img src="./Dashboard.png" className="object-fit rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl mb-4">
              Creating personalized invitations
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6 mb-10">
              With EventBadge, crafting personalized invitations has never been
              easier. Our platform offers a range of customizable templates,
              allowing you to tailor your invitations to match the tone and
              theme of your event effortlessly. From elegant formal affairs to
              casual gatherings, you can choose from a variety of designs and
              styles to suit your preferences. Additionally, EventBadge enables
              you to personalize each invitation with attendee-specific details,
              such as their name, affiliation, or special instructions, ensuring
              that each guest feels valued and appreciated. Whether you&apos;re
              hosting a corporate conference or a social celebration, our
              intuitive invitation creation tools empower you to make a lasting
              impression on your guests from the moment they receive their
              invite.
            </span>
          </div>
        </Tabs.Panel>
        <Tabs.Panel
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-10 py-0 md:py-10"
          value="third"
        >
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-fit rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl mb-4 pt-5 md:pt-0">
              Simplified signature validation
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              EventBadge streamlines the process of signature validation with
              its advanced digital verification system. Through integration with
              leading authentication technologies, such as blockchain or digital
              certificates, EventBadge ensures the security and authenticity of
              participant signatures. Our platform automatically verifies
              signatures against predefined criteria, flagging any discrepancies
              or inconsistencies for further review. This streamlined approach
              eliminates the need for manual validation, reducing the risk of
              fraudulent entries and ensuring the integrity of your event data.
              With EventBadge, you can trust that participant signatures are
              authenticated with accuracy and efficiency, providing peace of
              mind for organizers and attendees alike.
            </span>
          </div>
        </Tabs.Panel>
        <Tabs.Panel
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-10 py-0 md:py-10"
          value="fourth"
        >
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl mb-4 md:mb-0">
            <img src="./Dashboard.png" className="object-fit rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl mb-4">
              Facilitated communication
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6 mb-5">
              EventBadge enhances communication channels between organizers and
              participants through its integrated messaging feature. With the
              ability to send bulk emails or targeted messages to specific
              attendee groups, EventBadge enables seamless communication before,
              during, and after the event. Whether it&apos;s sharing important
              updates, sending reminders, or soliciting feedback, our platform
              provides a convenient and centralized communication hub. Moreover,
              EventBadge offers customizable email templates and scheduling
              options, allowing organizers to tailor messages to their audience
              and deliver them at optimal times. By facilitating clear and
              efficient communication, EventBadge helps ensure that participants
              stay informed and engaged, leading to a more successful and
              impactful event experience for all involved.
            </span>
          </div>
        </Tabs.Panel>
        <Tabs.Panel
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-10 py-0 md:py-10"
          value="fifth"
        >
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-fit rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl mb-4 pt-5 md:pt-0">
              Centralized data management
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              EventBadge serves as a comprehensive repository for all
              event-related data, offering organizers a centralized platform to
              manage participant information, event logistics, and analytics.
              From attendee profiles to session schedules and registration
              details, everything is stored securely within the EventBadge
              system. Our intuitive dashboard provides easy access to real-time
              insights and metrics, empowering organizers to make data-driven
              decisions and optimize event performance. Furthermore, EventBadge
              offers robust data privacy and security features, ensuring
              compliance with regulations such as GDPR and CCPA. By centralizing
              data management, EventBadge simplifies administrative tasks,
              enhances transparency, and enables organizers to focus on
              delivering a seamless and memorable event experience.
            </span>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Features;
