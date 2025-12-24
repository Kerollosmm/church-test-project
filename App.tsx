
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ClassesListScreen from './screens/ClassesListScreen';
import LessonsListScreen from './screens/LessonsListScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import ScannerScreen from './screens/ScannerScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/student-login" element={<StudentLoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/classes" element={<ClassesListScreen />} />
          <Route path="/lessons/:classId" element={<LessonsListScreen />} />
          <Route path="/attendance/:lessonId" element={<AttendanceScreen />} />
          <Route path="/scanner" element={<ScannerScreen />} />
          <Route path="/reports" element={<ReportsScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
