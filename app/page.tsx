"use client"
import BannerHome from '@/components/BannerHome'
import CollectionsPublications from '@/components/home/collectionandpublications/CollectionsPublications'
import FundProject from '@/components/home/fundaproject/FundProject'
import OurProgram from '@/components/home/ourprogram/OurProgram'
import { useTheme } from '@/context/ThemeProvider'

export default function Home() {
  const { darkTheme } = useTheme();
  return (
    <main className={`relative top-0 flex min-h-screen flex-col items-center justify-center font-poppins`}>
      <BannerHome/>
      <OurProgram/>
      <FundProject/>
      <CollectionsPublications/>
    </main>
  )
}
