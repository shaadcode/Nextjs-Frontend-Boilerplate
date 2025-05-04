import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: './../../public/font/montserrat/Montserrat-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './../../public/font/montserrat/Montserrat-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],

  variable: '--montserrat',
  display: 'swap',

});
