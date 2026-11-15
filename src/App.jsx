import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div><p className="topline">OPEN SOURCE STUDIO · WEEK 11</p><h1>Course Management System</h1><p className="subtitle">Efficient, Wise way to Manage Your Courses</p></div>
        <span className="tag">Hyunwoo Chang</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>OSS Week 11 · React</span><span>Local state only · Refresh resets data</span></footer>
    </main>
  );
}
