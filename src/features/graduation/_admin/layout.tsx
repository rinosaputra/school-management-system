import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminGraduationSEO } from './const'



const GraduationAdminLayout: React.FC = () => {
  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{AdminGraduationSEO.title}</h2>
          <p className="text-muted-foreground">
            {AdminGraduationSEO.description}
          </p>
        </div>
        <div className="flex items-center space-x-2">
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default GraduationAdminLayout
