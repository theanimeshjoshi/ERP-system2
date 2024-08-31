import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Vancouver</div>
      <ul className="sidebar-links">
        <li>Home Page</li>
        <li>Virtual Class</li>
        <li>Attendance Management</li>
        <li>Student Report Card</li>
        <li>Schedule Management</li>
        <li>Student Assignment</li>
      </ul>
      <div className="sidebar-logout">Log out</div>
    </div>
  );
};

export default Sidebar;