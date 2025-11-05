import React from 'react'
import Banner from '@/components/home/Banner'
import BannerLayout from '@/components/home/BannerLayout'
import CourseSlider from '@/components/home/CourseSlider'
import AiSection from '@/components/home/AiSection'
import OpportunityBanner from '@/sections/OpportunityBanner'
import Features from '@/components/home/Features'
import RecentBlogs from '@/sections/RecentBlogs'
import Faq from '@/sections/Faq'
import ContactForm from '@/sections/ContactForm'

function HomePage() {
  return (
    <>
    <Banner/>
    <BannerLayout/>
    <CourseSlider/>
    <AiSection/>
    <OpportunityBanner/>
    <Features/>
    <RecentBlogs/>
    <Faq/>
    <ContactForm/>
    </>
  )
}

export default HomePage