import type { NextPage } from 'next'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'
import SectionHeader from '../components/index/section-header'
import SectionIntegrations from '../components/index/section-integrations'
import SectionFeatures from '../components/index/section-features'
import SectionOSS from '../components/index/section-oss'
import SectionCommunity from '../components/index/section-community'
import SectionDesignedfc from '../components/index/section-designedfc'

const classNames = 'w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-7/12 mx-auto'

const Index: NextPage = () => (
  <div className="min-h-screen">
    <DyoNavbar className={classNames} />
    <SectionHeader className={classNames} />
    <SectionDesignedfc className={classNames} />
    <SectionCommunity className={classNames} />
    <SectionFeatures className={classNames} />
    <SectionIntegrations className={classNames} />
    <SectionOSS className={classNames} />
    <DyoFooter className={classNames} />
  </div>
)

export default Index
