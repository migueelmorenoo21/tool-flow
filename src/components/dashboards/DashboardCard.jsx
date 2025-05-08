import React from 'react'

const DashboardCard = ({title, resume, icon, numberOfCards, color}) => {
  return (
    <div className="container-dashboard-card">
        <div className="card" style={{ border: `2px solid ${color}` }}>
          <div className="card-header">
          <div className="card-icon">{icon}</div>
          <h2 className="card-title">{title}</h2>
        </div>
        <p className="card-resume">{resume}</p>
        <p className="card-number">{numberOfCards} tarjetas</p>
      </div>
    </div>
  )
}

export default DashboardCard