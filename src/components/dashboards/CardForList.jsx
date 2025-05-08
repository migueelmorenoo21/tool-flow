import React from 'react';

// Componente CardForList: Representa una tarjeta individual dentro de una lista.
const CardForList = ({ title, pendingTasks, percentageProgress }) => {
  return (
    <div className="card-for-list">
      {/* Encabezado de la tarjeta con título y tareas pendientes */}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <p className="card-pending-tasks">{pendingTasks} tareas pendientes</p>
      </div>
      {/* Barra de progreso visual */}
      <div className="card-progress-bar">
        <div className="progress-bar" style={{ width: `${percentageProgress}%` }}></div>
      </div>
      <p className="card-percentage">{percentageProgress}% hecho</p>
    </div>
  );
};

export default CardForList;