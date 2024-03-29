import { Carousel as MantineCarousel } from "@mantine/carousel";

function Features() {
  return (
    <MantineCarousel
      classNames={{ indicator: "!bg-blue-500" }}
      align="start"
      orientation="horizontal"
      controlSize={30}
      withControls={false}
      withIndicators
      loop
    >
      <MantineCarousel.Slide>
        <div className="h-full bg-white flex flex-col md:flex-row items-center justify-between rounded-xl gap-x-10 pt-5 pb-12 md:py-10 px-5 md:px-20 mx-5 md:mx-20 shadow-blue">
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-3xl">Easy import of participants</h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              With EventBadge, you can quickly import a list of attendees from a
              CSV file or enter them manually. This feature makes contact
              management easier, saving you time and avoiding errors when
              creating your guest list.
            </span>
          </div>
        </div>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <div className="h-full bg-white flex flex-col md:flex-row items-center justify-between rounded-xl gap-x-10 pb-12 pt-5 md:pt-0 md:pb-0 md:py-10 px-5 md:px-20 mx-5 md:mx-20 shadow-blue">
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-3xl">
              Creating personalized invitations
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              EventBadge&apos;s invitation builder allows you to personalize
              each invitation based on the specific needs of your event. You can
              generate unique QR codes for each guest, ensuring quick and secure
              identification during check-in.
            </span>
          </div>
        </div>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <div className="h-full bg-white flex flex-col md:flex-row items-center justify-between rounded-xl gap-x-10 pt-5 pb-12 md:pt-0 md:pb-0 md:py-10 px-5 md:px-20 mx-5 md:mx-20 shadow-blue">
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-3xl">
              Simplified signature validation
            </h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              When your guests arrive at the event, the application offers a
              simple and efficient signature validation function. The unique QR
              codes on the invitations can be quickly scanned to confirm each
              attendee&apos;s attendance, providing a seamless and hassle-free
              experience.
            </span>
          </div>
        </div>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <div className="h-full bg-white flex flex-col md:flex-row items-center justify-between rounded-xl gap-x-10 pt-5 pb-12 md:pt-0 md:pb-0 md:py-10 px-5 md:px-20 mx-5 md:mx-20 shadow-blue">
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-3xl">Facilitated communication</h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              EventBadge allows you to send invitations via SMS, email, and
              other communication channels. This feature ensures that your
              guests receive the necessary information and stay informed
              throughout the process, improving communication between your team
              and attendees.
            </span>
          </div>
        </div>
      </MantineCarousel.Slide>
      <MantineCarousel.Slide>
        <div className="h-full bg-white flex flex-col md:flex-row items-center justify-between rounded-xl gap-x-10 pt-5 pb-12 md:pt-0 md:pb-0 md:py-10 px-5 md:px-20 mx-5 md:mx-20 shadow-blue">
          <div className="w-full md:w-1/2 border border-gray-300 rounded-xl">
            <img src="./Dashboard.png" className="object-cover rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-3xl">Centralized data management</h2>
            <span className="text-sm md:text-md line-clamp-4 lg:line-clamp-6">
              Through the use of robust technologies such as NestJS, TypeORM,
              and PostgreSQL, EventBadge offers centralized data management,
              ensuring the security and consistency of your event information.
              This allows you to efficiently track participants, responses, and
              other essential data.
            </span>
          </div>
        </div>
      </MantineCarousel.Slide>
    </MantineCarousel>
  );
}

export default Features;
