'use client'

import Link from 'next/link'
import GitHubCard from '../../components/GitHubCard'
import NextJS from '../../components/icons/nextjs.svg'
import TailWindCSS from '../../components/icons/tailwindcss.svg'
import { genPageMetadata } from '../seo'
import { Chip } from '@mui/material'
import Image from 'next/image'
import GTMetrics from '../../public/static/images/gridgtmetrics.jpeg'
import ConceptsAccordion from './Concept'
import React from 'react'

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-gradient-to-r from-gray-700 to-blue-300 bg-clip-text text-4xl font-extrabold mb-8 text-transparent">
        Nietzsche's perspective to life
      </h1>
      <ConceptsAccordion />
    </div>
  )
}

export default HomePage
