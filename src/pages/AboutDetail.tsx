function AboutDetail() {
  return (
    <div className="flex flex-col bg-whitePale min-h-screen">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-8 md:py-16">
        {/* Header Section */}
        <section className="mb-12 flex flex-col justify-center items-center">
          <hr className="w-full mb-8" />
          <h1 className="text-4xl md:text-6xl font-headline text-primary mb-8 uppercase animate-[slideInDown_1s_ease-out]">
            Nice to meet you !
          </h1>

          <div className="w-80 h-80 mb-6 animate-[fadeIn_1s_ease-in]">
            <img
              src="/src/assets/images/about/profile_pic.PNG"
              alt="Profile"
              className="w-full h-full object-cover bg-white border-[1px] border-gray-200"
            />
          </div>

          <span className="mb-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-2 animate-[slideInUp_1s_ease-out_0.5s]">
              My name is Pavika
            </h2>
            <p className="font-headline text-primary text-xl">( Pavika Malipan )</p>
          </span>

          <hr className="w-full" />
        </section>

        {/* Story and Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section>
            <h3 className="text-xl font-body-medium text-primary mb-6">My Story</h3>
            <div className="font-body-light text-stone-600 space-y-4">
              <p>
                My tech journey all begin in high school when I saw people making cool things on the
                internet and phone. Everything that I see looked amazing but I felt like it beyond
                my capability. I had no idea how they made applications that have interactive
                components. It was like a new world I wanted to understand.
              </p>
              <p>
                As a computer science student at KMUTT, I've discovered that my passion is to narrow
                the gap between complex technology and everyday users through effective solutions.
              </p>
              <p>
                The best part about studying and working in tech is getting to be both
                <span className="font-body-medium"> logical</span> and creative. I really enjoy
                figuring out how to make complex things simple and user-friendly. I'm excited to
                take on new challenges and learn from each experience and project.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-body-medium text-primary mb-6">My Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <div className="mb-6">
                  <h4 className="font-body-medium text-stone-700 mb-3">Present</h4>
                  <p className="font-body-light text-stone-600 space-y-1">
                    Bachelor of Science in Computer Science
                    <br />
                    King Mongkut's University of Technology Thonburi
                    <br />
                    2022 - Present
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-body-medium text-stone-700 mb-3">Past</h4>
                  <p className="font-body-light text-stone-600 space-y-1">
                    Suksanari School
                    <br />
                    2015 - 2021
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Motto */}
        <div className="grid grid-cols-1 gap-8">
          <div className="mb-12">
            <section>
              <h3 className="text-xl font-body-medium text-primary mb-6">My Motto</h3>
              <div className="text-stone-600 font-body-light italic text-lg">
                "If you want the rainbow, you gotta put up with the rain"🌈 𑁍ࠬܓ
              </div>
            </section>
          </div>

          {/* Other Passions */}
          <div className="mb-12">
            <section>
              <h3 className="text-xl font-body-medium text-primary mb-6">Other Passion</h3>
              <p className="mb-6 font-body-light">Life beyond the screen ⸜(*ˊᵕˋ*)⸝</p>
              <div className="space-y-6">
                {/* ปันรัก */}
                <div className="bg-white shadow-sm border border-gray-100 animate-[fadeInUp_1s_ease-out]">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-80 md:h-96">
                      <div className="h-full p-3 bg-rose-200/50">
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                          <div className="relative">
                            <img
                              src="src/assets/images/about/punrak/punrak16-1.JPG"
                              alt="Tue Pun Rak Main"
                              className="w-full h-full object-cover object-right-bottom rounded-sm shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/images/about/punrak/punrak16-2.JPG"
                              alt="Tue Pun Rak Secondary"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/images/about/punrak/punrak16-3.png"
                              alt="Tue Pun Rak Third"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/images/about/punrak/punrak16-4.png"
                              alt="Tue Pun Rak Fourth"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 font-body-light flex flex-col justify-center space-y-4">
                      <h4 className="font-body-medium text-stone-600 text-lg ">
                        TuePunRak 16th - (ติวปันรัก)
                      </h4>
                      <p className="text-stone-600">
                        TuePunRak is more than just a tutoring camp, It was my first step as
                        freshman to create a meaningful connections outside my comfort zone. As an
                        English tutor for Grade 2 students, I discovered the joy of sharing
                        knowledge with young kids. Even if joining the camp without friends, the
                        warmth of the community and the children's bright smiles made my last month
                        of that year special. This experience taught me to:
                      </p>
                      <ul className="text-stone-600 list-disc pl-5 space-y-1">
                        <li>
                          Find friendship and connections with new people who share the same passion
                        </li>
                        <li>
                          Discover that happiness lies in the small moments of helping others
                          understand and grow
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ปันรัก2 */}
                <div className="bg-white shadow-sm border border-gray-100 animate-[fadeInUp_1s_ease-out]">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 font-body-light flex flex-col justify-center space-y-4 order-2 md:order-1">
                      <h4 className="font-body-medium text-stone-600 text-lg ">
                        TuePunRak 17th - (ติวปันรัก)
                      </h4>
                      <p className="text-stone-600">
                        This year, I joined the PR & Art team and had a chance to help guide
                        freshman volunteers while taking care of Grade 3 students. Together with
                        everyone, we created a fun learning environment for the kids.
                      </p>
                      <ul className="text-stone-600 list-disc pl-5 space-y-1">
                        <li>Helped create materials with the PR & Art team</li>
                        <li>Supported freshman team members and Grade 3 students</li>
                        <li>Learned about teamwork and working with different age groups</li>
                      </ul>
                    </div>

                    <div className="h-80 md:h-96 order-1 md:order-2">
                      <div className="h-full p-3 bg-sky-200/50">
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                          <div className="relative row-span-2 col-span-1">
                            <img
                              src="src/assets/images/about/punrak/punrak17-1.JPEG"
                              alt="TuePunRak 17 First"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <img
                              src="src/assets/images/about/punrak/punrak17-2.JPEG"
                              alt="TuePunRak 17 Second"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <img
                              src="src/assets/images/about/punrak/punrak17-3.JPEG"
                              alt="TuePunRak 17 Third"
                              className="w-full h-full object-cover rounded-sm shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Decorative Elements */}
            <pre className="hidden md:block font-mono text-center whitespace-pre text-primary-2 mt-10">
              ☘︎.· ✧ *. * ☆ஐ ｡･ﾟ*.｡☆. ｡·* *★ﾟ**.ஐ ✧ ｡·*･｡*★ ﾟ･｡ * ☆ﾟ*･｡ *. ‏✧ *. * ☆ ｡･ﾟ*.｡☆. ｡·*
              *★ﾟ**. ✧ஐ ｡·*･｡*★ ﾟ･｡ * ☆ﾟ*･｡ *. 𓂃𓂂𖡼.𖤣𖥧𓈒◌܀
            </pre>
            <pre className="block md:hidden font-mono text-center whitespace-pre text-primary-2 mt-10">
              ✧ *.☘︎ * ｡･ﾟ*.｡ஐ☆.｡·* *★ﾟ*. ｡·*･｡ ﾟ･｡ * ☆ﾟ*･｡ *.
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
