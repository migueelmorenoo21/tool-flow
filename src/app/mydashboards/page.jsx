import '../../components/dashboards/css/mydashboard.css';
import '../../components/dashboards/css/dashboardlist.css';
import SearchIcon from '../../components/common/SearchIcon'; // Ruta corregida
import DashboardCard from '../../components/dashboards/DashboardCard';
import AddWorkspaceButton from '../../components/common/AddWorkspaceButton';
import { WorkIcon, StudiesIcon, TasksIcon, ProjectsIcon, MeetingsIcon, DailyIcon } from '../../components/dashboards/DashboardIcons';
import DashboardList from '../../components/dashboards/DashboardList';
import CardForList from '../../components/dashboards/CardForList';

const MyDashboards = () => {
  return (
    <div className="content">
      <div className="mydashboards">
        {/* Encabezado de la sección con un botón para agregar espacios de trabajo */}
        <div className="mydashboards-header">
          <h1>Bandeja de entrada</h1>
          <AddWorkspaceButton />
        </div>

        {/* Barra de búsqueda para buscar espacios de trabajo */}
        <div className="search-container">
          <input
            className="search-workspace"
            type="search"
            placeholder="Buscar espacios de trabajo..."
          />
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>

        {/* Contenedor principal de las tarjetas */}
        <div className="container-dashboard-card">
          {/* Cada tarjeta representa un espacio de trabajo */}
          <DashboardCard
            title="Marketing"
            resume="Campañas y lanzamientos"
            icon={<WorkIcon />}
            numberOfCards={12}
            color="#FF9F1A"
          />
          <DashboardCard
            title="Dev Team"
            resume="Sprint y backlog"
            icon={<ProjectsIcon />}
            numberOfCards={8}
            color="#00C2E0"
          />
          <DashboardCard
            title="Plan Diario"
            resume="Tareas del día"
            icon={<DailyIcon />}
            numberOfCards={5}
            color="#36B37E"
          />
          <DashboardCard
            title="Reuniones"
            resume="Agendas y notas"
            icon={<MeetingsIcon />}
            numberOfCards={3}
            color="#6554C0"
          />
          <DashboardCard
            title="Investigación"
            resume="Artículos y recursos"
            icon={<StudiesIcon />}
            numberOfCards={6}
            color="#FF5630"
          />
          <DashboardCard
            title="Tareas"
            resume="Checklist general"
            icon={<TasksIcon />}
            numberOfCards={10}
            color="#0079BF"
          />
        </div>
        <div className="parent-list-container">
          <DashboardList
            title="Tareas en progreso"
            notDoneTasks="3"
            percentageProgress="15"
          />
          <DashboardList
            title="Tareas importantes"
            notDoneTasks="5"
            percentageProgress="20"
          />
          <DashboardList
            title="Tareas completadas"
            notDoneTasks="5"
            percentageProgress="20"
          >
            <CardForList
              title="Tarea 1"
              pendingTasks="2"
              percentageProgress="50"
            />
          </DashboardList>
        </div>
      </div>
    </div>
  );
};

export default MyDashboards;