import { Head, Link, usePage } from "@inertiajs/react";
export default function Home() {
  return (
    <>
      <Head title="Home" />
      {/* Mobile */}
      <div className="flex sm:hidden flex-col items-center justify-center mx-4">
        <div className="font-bold text-center flex items-center justify-center my-7 text-[#C8D208] text-[28px] font-canva">
          <p>
            Your next favorite book is an
            <span className="font-bold ml-2 text-[#D69C9C]">Excha</span> away.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-[#5CE1E6] text-[#13171F] text-[18px] rounded-full px-4 py-2 font-extrabold font-canva">
            <Link href={route('register')}>Register
            </Link> /
            <Link href={route('login')}> Login
            </Link>
          </button>

          <Link href={route('about')}><p className="font-fredoka font-bold text-[13px] my-1">To know more about us, click here.</p></Link>
        </div>

        <div className="flex  flex-col my-4">
          <img src="/img/maninchair.png" alt="wow" />
          <div className="flex flex-col items-center justify-center my-7 font-canva">
            <p>
              We aim to make it easier for students
            </p>
            <p>
              to buy second-hand books.
            </p>
          </div>
        </div>

        {/* <div className="text-[#F27F4F] text-[31px] font-bold font-canva"> */}
        {/*     <h1>How to use?</h1> */}
        {/* </div> */}
      </div>

      {/* // Tablet */}
      <div className="hidden tablet:block">
        <div className="flex flex-col items-center  mx-4">
          <div className="font-bold font-canva mt-7 text-[#C8D208] text-[55px]">
            Your next favorite book is an
            <span className="font-bold ml-2 text-[#D69C9C]">
              EXCHA
            </span>
            nge away.
          </div>

          <div className="font-cooper my-2 mr-14 text-[22px] font-bold">
            <p>
              We aim to make it easier for students to buy second-hand books.
            </p>
            <p>
              Register below to get started.
            </p>
          </div>

          <div className="flex justify-between ml-14  my-5">
            <div className="flex item-center justfiy-center flex-col w-2/4">
              <button className="bg-[#5CE1E6] text-[#13171F] text-[18px] rounded-full py-2 font-bold font-canva mt-10">
                Click here to
                <Link href={route('register')}> Register
                </Link> /
                <Link href={route('login')}> Login
                </Link>
              </button>
              <Link href={route('about')}><p className="font-fredoka font-bold text-[15px] my-2 mx-3">To know more about us, click here</p></Link>
            </div>
            <img src="/img/maninchair.png" alt="wow" className="w-3/4" />
          </div>

        </div>
        {/* <div className="text-[#F27F4F] text-[50px] font-bold font-canva mx-14 "> */}
        {/*     <h1>How to use?</h1> */}
        {/* </div> */}
      </div>

      {/* Laptop */}
      <div className="hidden laptop:block ">
        <div className="flex flex-row items-center mx-4 justify-evenly mt-14">
          {/* left */}
          <div className='ml-14 mt-14'>
            <div className='ml-14 mt-14'>
              <div className="text-[#C8D208] text-[60px] font-bold font-canva">
                <p>
                  Your next favorite book is an <span className="ml-2 text-[#D69C9C]">EXCHA</span>ange away.
                </p>
              </div>
              <div className="font-cooper my-2  text-[24px] font-bold">
                <p>
                  We aim to make it easier for students to buy second-hand books.
                </p>
                <p>
                  Register below to get started.
                </p>
              </div>
              <div className="flex item-center justfiy-center flex-col w-2/4">
                <button
                  className="bg-[#5CE1E6] text-[#13171F] text-[24px] rounded-full py-3 font-bold font-canva mt-10 w-[80%] px-0">
                  Click here to
                  <Link href={route('register')}> Register
                  </Link> /
                  <Link href={route('login')}> Login
                  </Link>
                </button>
                <Link href={route('about')}><p className="font-fredoka font-bold text-[20px] my-2 mx-3">To
                  know more about us, click here</p></Link>
              </div>

            </div>
          </div>
          {/* right */}
          <div className="">
            <img src="/img/maninchair.png" alt="wow" className="w-[900px]" />
          </div>
        </div>
        {/* <div className="text-[#F27F4F] text-[90px] font-bold font-canva mx-14 "> */}
        {/*     <h1>How to use?</h1> */}
        {/* </div> */}

      </div>
    </>
  );
}
