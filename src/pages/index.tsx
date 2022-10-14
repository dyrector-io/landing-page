import type { NextPage } from 'next'
import DyoFooter from '../components/main/dyo-footer'
import DyoNavbar from '../components/main/dyo-navbar'
import SectionHeader from '../components/index/section-header'
import SectionIntegrations from '../components/index/section-integrations'
import SectionFeatures from '../components/index/section-features'
import SectionOSS from '../components/index/section-oss'
import SectionCommunity from '../components/index/section-community'
import SectionDesignedfc from '../components/index/section-designedfc'

const Index: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      <DyoNavbar />
      <SectionHeader />
      <SectionDesignedfc />
      <SectionFeatures />
      <SectionCommunity />
      <SectionIntegrations />
      <SectionOSS />
      <DyoFooter />
    </div>
  )
}

export default Index
