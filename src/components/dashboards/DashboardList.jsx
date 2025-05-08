import React from 'react';

// Componente DashboardList: Representa una lista de tareas con un título, progreso y elementos hijos.
const DashboardList = ({ title, notDoneTasks, percentageProgress, children }) => {
  return (
    <div className="dashboard-list-container">
      {/* Encabezado de la lista con título y tareas no realizadas */}
      <div className="dashboard-list-header">
        <h2 className="dashboard-list-title">{title}</h2>
        <p className="dashboard-list-not-done-tasks">{notDoneTasks} tareas no realizadas</p>
      </div>
      {/* Barra de progreso visual */}
      <div className="dashboard-list-progress-bar">
        <div className="progress-bar" style={{ width: `${percentageProgress}%` }}></div>
      </div>
      <p className="dashboard-list-percentage">{percentageProgress}% hecho</p>
      {/* Contenedor para los elementos hijos (tareas) */}
      <div className="dashboard-list-children">{children}</div>
    </div>
  );
};

export default DashboardList;