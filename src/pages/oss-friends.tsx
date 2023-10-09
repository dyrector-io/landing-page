import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'

import OSS_FRIENDS_DATA from './oss-friends-content.json'

const Index: NextPage = () => {
  const { t } = useTranslation('oss-friends')

  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-7/12 mx-auto min-h-screen ">
      <DyoNavbar />

      <div className="text-center text-gradient font-sans-pro font-bold text-4xl pt-14 pb-4">{t('ossfriends')}</div>
      <p className="text-center pb-16">
        In our team, we are proud to collaborate with a diverse group of partners to promote open-source software and
        the values of transparency, collaboration, and community that it represents.
      </p>

      <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4">
        {OSS_FRIENDS_DATA.map((item, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-md shadow-lg">
            <a href={item.Link} target="_blank" rel="">
              <span className="text-center text-gradient font-sans-pro font-bold">{item.Name}</span>
              <br />
              <br />
            </a>
            <span className="pt-8">{item.Description}</span>
          </div>
        ))}
      </div>

      <DyoFooter />
    </div>
  )
}

export default Index
