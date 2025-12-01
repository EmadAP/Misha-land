import React from 'react'
import { RiShoppingBag4Fill } from 'react-icons/ri'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config

  return (
    <div className="home">
      <div className="content">
        <h1>
          <span className="text-2xl font-semibold">Misha Land</span>
          <RiShoppingBag4Fill size={30} />
        </h1>
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
            href="http://localhost:5173/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go To Store
          </a>
        </div>
      </div>
    </div>
  )
}
