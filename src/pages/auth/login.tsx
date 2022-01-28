import { GetServerSideProps } from 'next'
import { getSession, signIn } from "next-auth/react"
import { useEffect, useRef, useState } from "react";
import useCountDown from 'react-countdown-hook';

import Button from "@/components/Button";
import Input from "@/components/Input";

const TwitterLogo = () => {
  return (<svg className="shrink-0 mr-1 w-6 h-6" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.15416 20C15.939 20 19.6496 14.2284 19.6496 9.22393C19.6496 8.94418 19.8544 8.69618 20.1178 8.58077C21.0208 8.18495 22.1921 7.09931 20.9825 5.27393C20.1811 5.69091 19.5225 5.91874 18.6401 6.19337C17.2436 4.66871 14.9069 4.59523 13.4213 6.02913C12.463 6.95383 12.0569 8.33223 12.3541 9.64765C9.3879 9.49541 6.62473 8.057 4.75194 5.6909C3.77317 7.42179 4.27278 9.63566 5.89358 10.7479C5.30632 10.7299 4.73221 10.567 4.21947 10.2739V10.3219C4.21947 12.1248 5.45752 13.6772 7.17839 14.0341C6.63568 14.1864 6.06596 14.2089 5.51303 14.0994C5.99657 15.6421 7.38071 16.6987 8.95914 16.7294C7.65242 17.7831 6.03893 18.3554 4.37796 18.3538C4.08434 18.3531 3.79144 18.3351 3.5 18.2991C5.18727 19.4106 7.1499 20 9.15416 19.997V20Z" fill="#00ACFF"></path>
  </svg>)
}

const GoogleLogo = () => {
  return (<svg className="shrink-0 mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>)
}

const LemonSqueezyLogo = () => {
  return (<svg className="" width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.44011 24.4129L15.506 28.1336C16.5057 28.595 17.2114 29.3693 17.5924 30.2575C18.5563 32.5067 17.239 34.8071 15.1709 35.6343C13.1025 36.4613 10.8981 35.9291 9.89582 33.5901L6.38556 25.3782C6.11354 24.7416 6.79687 24.1162 7.44011 24.4129" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.92482 22.0046L16.2509 18.8643C19.018 17.8206 22.0408 19.7953 22 22.6646C21.9994 22.7021 21.9987 22.7395 21.9977 22.7773C21.938 25.5714 18.9993 27.4494 16.293 26.4609L7.93271 23.4078C7.26581 23.1644 7.26088 22.255 7.92482 22.0046" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.45767 20.9168L15.6425 17.4468C18.3623 16.2936 19.0525 12.8325 16.9224 10.8326C16.8945 10.8063 16.8666 10.7803 16.8383 10.7543C14.7499 8.82013 11.2974 9.50112 10.1085 12.0487L6.43564 19.9194C6.14259 20.5471 6.8049 21.1935 7.45767 20.9168" fill="#FFC233"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.35143 19.5456L8.32719 11.4044C8.69612 10.395 8.62779 9.36556 8.24637 8.47734C7.28051 6.22905 4.66482 5.50331 2.5971 6.33186C0.529704 7.16073 -0.638522 9.04315 0.365771 11.3812L3.89903 19.5843C4.17302 20.2199 5.11424 20.1948 5.35143 19.5456" fill="#FFC233"></path>
  </svg>)
}



export default function Login() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [timeLeft, { start, reset }] = useCountDown(30 * 1000, 1000);

  const timeLeftInSeconds = timeLeft / 1000
  const timeOver = timeLeftInSeconds >= 0o1

  const handleAuthentication = async () => {
    setLoading(true)

    try {
      await signIn("email", { redirect: false, email })

      setLoading(false)
      setEmailSent(true)
      start()
    } catch (error) {
      console.error(error)
    }

  }

  const handleResendEmail = async () => {
    setLoading(true)
    reset()

    try {
      await signIn("email", { redirect: false, email, callbackUrl: 'http://localhost:3000/foo' })

      setLoading(false)
      start()
    } catch (error) {
      console.error(error)
    }
  }

  const backToLogin = () => {
    setEmailSent(false)
    reset()
  }

  useEffect(() => {
    inputEl.current?.focus()
  }, [])

  return (
    <div className="flex">
      <div className="flex items-center md:w-1/2">
        <div className="py-32 px-8 mx-auto w-full max-w-[560px]">
          {!emailSent && (
            <div>
              <div className="justify-center mb-10 md:flex">
                <LemonSqueezyLogo />
              </div>

              <h1 className='mb-10 text-2xl font-medium text-center'>Sign in to Lemon Squeezy</h1>

              <div className="justify-between mb-8 md:flex">
                <Button variant="outline" icon={<GoogleLogo />} block className="mr-3">Sign in with Google</Button>
                <Button variant="outline" icon={<TwitterLogo />} block>Sign in with Twitter</Button>
              </div>

              <div className="flex relative justify-center items-center mb-2 h-5">
                <div className="absolute top-[50%] w-full border-t border-gray-100"></div>
                <div className="relative z-10 px-2 text-xs text-gray-500 bg-white">
                  Or
                </div>
              </div>

              <form className="mb-10">
                <Input label="Email address"
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  ref={inputEl}
                />

                <Button className="mt-5 text-base" isLoading={loading} onClick={() => handleAuthentication()} block>Sign in</Button>
              </form>

              <div className='flex justify-center items-center text-sm text-gray-500'>
                <a href="#" className="mx-2">Forgot your password?</a>
                <a href="#" className="mx-2">Sign up</a>
                <a href="#" className="mx-2">Customer Dashboard</a>
              </div>
            </div>
          )}

          {emailSent && (
            <div className="flex flex-col justify-center items-center">
              <div className="block mb-8 max-w-sm">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 570 511.67482"><path d="M879.99927,389.83741a.99678.99678,0,0,1-.5708-.1792L602.86963,197.05469a5.01548,5.01548,0,0,0-5.72852.00977L322.57434,389.65626a1.00019,1.00019,0,0,1-1.14868-1.6377l274.567-192.5918a7.02216,7.02216,0,0,1,8.02-.01318l276.55883,192.603a1.00019,1.00019,0,0,1-.57226,1.8208Z" transform="translate(-315 -194.16259)" fill="#3f3d56" /><polygon points="23.264 202.502 285.276 8.319 549.276 216.319 298.776 364.819 162.776 333.819 23.264 202.502" fill="#e6e6e6" /><path d="M489.25553,650.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473H489.25553a6.04737,6.04737,0,1,1,0,12.09473Z" transform="translate(-315 -194.16259)" fill="#7047eb" /><path d="M406.25553,624.70367H359.81522a6.04737,6.04737,0,1,1,0-12.09473h46.44031a6.04737,6.04737,0,1,1,0,12.09473Z" transform="translate(-315 -194.16259)" fill="#7047eb" /><path d="M603.96016,504.82207a7.56366,7.56366,0,0,1-2.86914-.562L439.5002,437.21123v-209.874a7.00817,7.00817,0,0,1,7-7h310a7.00818,7.00818,0,0,1,7,7v210.0205l-.30371.12989L606.91622,504.22734A7.61624,7.61624,0,0,1,603.96016,504.82207Z" transform="translate(-315 -194.16259)" fill="#fff" /><path d="M603.96016,505.32158a8.07177,8.07177,0,0,1-3.05957-.59863L439.0002,437.54521v-210.208a7.50851,7.50851,0,0,1,7.5-7.5h310a7.50851,7.50851,0,0,1,7.5,7.5V437.68779l-156.8877,66.999A8.10957,8.10957,0,0,1,603.96016,505.32158Zm-162.96-69.1123,160.66309,66.66455a6.1182,6.1182,0,0,0,4.668-.02784l155.669-66.47851V227.33721a5.50653,5.50653,0,0,0-5.5-5.5h-310a5.50653,5.50653,0,0,0-5.5,5.5Z" transform="translate(-315 -194.16259)" fill="#3f3d56" /><path d="M878,387.83741h-.2002L763,436.85743l-157.06982,67.07a5.06614,5.06614,0,0,1-3.88038.02L440,436.71741l-117.62012-48.8-.17968-.08H322a7.00778,7.00778,0,0,0-7,7v304a7.00779,7.00779,0,0,0,7,7H878a7.00779,7.00779,0,0,0,7-7v-304A7.00778,7.00778,0,0,0,878,387.83741Zm5,311a5.002,5.002,0,0,1-5,5H322a5.002,5.002,0,0,1-5-5v-304a5.01106,5.01106,0,0,1,4.81006-5L440,438.87739l161.28027,66.92a7.12081,7.12081,0,0,0,5.43994-.03L763,439.02741l115.2002-49.19a5.01621,5.01621,0,0,1,4.7998,5Z" transform="translate(-315 -194.16259)" fill="#3f3d56" /><path d="M602.345,445.30958a27.49862,27.49862,0,0,1-16.5459-5.4961l-.2959-.22217-62.311-47.70752a27.68337,27.68337,0,1,1,33.67407-43.94921l40.36035,30.94775,95.37793-124.38672a27.68235,27.68235,0,0,1,38.81323-5.12353l-.593.80517.6084-.79346a27.71447,27.71447,0,0,1,5.12353,38.81348L624.36938,434.50586A27.69447,27.69447,0,0,1,602.345,445.30958Z" transform="translate(-315 -194.16259)" fill="#7047eb" /></svg>
              </div>

              <h1 className='mb-2 text-2xl font-medium text-center'>Check your email</h1>
              <p className='mb-14 text-base'>A <span className="font-bold text-primary-500">sign-in link</span> has been sent to your email address.</p>


              <Button className="text-base" block onClick={() => handleResendEmail()} isLoading={loading} disabled={timeOver}>
                {timeOver ? `Wait ${timeLeftInSeconds} seconds` : 'Send email again'}
              </Button>
              <Button className="mt-2 text-base" variant="outline" block onClick={() => backToLogin()}>Back</Button>
            </div>
          )}
        </div>


      </div>
      <div className="flex relative min-h-screen md:block md:w-1/2 bg-wtf-pigmentblue">
        <svg className="absolute top-0 left-0" width="720" height="787" viewBox="0 0 720 787" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-392.905 -502.476L-391.004 -501.739C-391.004 -501.739 326.491 -197.031 501.442 -56.8491C676.392 83.3324 662.208 352.981 508.59 506.599C354.972 660.217 85.3233 674.401 -54.8582 499.451C-195.04 324.5 -499.748 -392.994 -499.748 -392.994L-500.485 -394.895C-516.584 -436.403 -527.156 -463.658 -494.411 -496.402C-461.667 -529.146 -434.412 -518.575 -392.905 -502.476Z" fill="#7047EB"></path>
        </svg>
        <svg className="absolute top-0 left-0" width="392" height="487" viewBox="0 0 392 487" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-336.818 -308.216L-335.645 -307.762C-335.645 -307.762 106.836 -120.048 214.706 -33.6373C322.576 52.7737 313.735 219.111 218.923 313.922C124.112 408.734 -42.2253 417.575 -128.636 309.705C-215.047 201.835 -402.761 -240.646 -402.761 -240.646L-403.215 -241.819C-413.132 -267.417 -419.644 -284.226 -399.434 -304.435C-379.225 -324.644 -362.416 -318.133 -336.818 -308.216Z" fill="#FCC5F3"></path>
        </svg>
        <svg className="absolute bottom-0 left-0" width="632" height="316" viewBox="0 0 632 316" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-351.418 900.397L-350.856 898.948C-350.856 898.948 -118.665 351.944 -11.8154 218.578C95.0341 85.2126 300.633 96.0786 417.79 213.235C534.947 330.392 545.813 535.991 412.447 642.841C279.081 749.69 -267.923 981.882 -267.923 981.882L-269.372 982.444C-301.016 994.711 -321.795 1002.77 -346.768 977.793C-371.74 952.821 -363.685 932.042 -351.418 900.397Z" fill="#2DCA72"></path>
        </svg>
        <svg className="absolute right-0 bottom-0" width="477" height="768" viewBox="0 0 477 768" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M334.917 239.653L336.582 240.299C336.582 240.299 965.06 507.074 1118.29 629.839C1271.52 752.603 1259.04 988.825 1124.43 1123.43C989.823 1258.04 753.6 1270.52 630.836 1117.29C508.071 964.063 241.296 335.585 241.296 335.585L240.65 333.92C226.556 297.562 217.301 273.688 245.993 244.996C274.685 216.304 298.559 225.559 334.917 239.653Z" fill="#00ACFF"></path>
        </svg>
      </div>
    </div>
  )
}

Login.template = 'none'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        statusCode: 302
      }
    }
  }

  return { props: {} }
}
