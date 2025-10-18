import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },

        {
            title: 'Content Marketing',
            description: 'We help you execute your plans and deliver results.',
            icon: assets.marketing_icon
        },

        {
            title: 'Content Writing',
            description: 'We help you create marketing strategies that deliver real results.',
            icon: assets.content_icon
        },

        {
            title: 'Social Media Management',
            description: 'We help you build a strong online presence and engage with your audience.',
            icon: assets.social_icon
        },
    ]

    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />

            <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'></Title>

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
        
    )
}

export default Services
