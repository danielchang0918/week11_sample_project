import { useState } from 'react';

// [제공] 부모 CourseList로부터 Props를 전달받는 자식 컴포넌트입니다.
export default function CourseItem({ course, onDelete, onToggle, onEdit }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(course.name);

  return (
    <div className="course-row">
      <div className="course-main">
        <input
          className="check"
          type="checkbox"
          checked={course.completed}
          onChange={() => onToggle(course.id)}
          aria-label={`${course.name} 완료 여부`}
        />
        <div>
          {isEditing ? (
            <input
              className="input"
              value={editName}
              onChange={event => setEditName(event.target.value)}
            />
          ) : (
            <div className={`course-title ${course.completed ? "done" : ""}`}>
              {course.name}
            </div>
          )}
          <div className="course-id">Course #{course.id}</div>
        </div>
      </div>
      <div className="category-cell">
        <span className="category">{course.category}</span>
      </div>
      <div className="actions">
        <button
          className="btn secondary"
          type="button"
          onClick={() => {
            //Edit 클릭시 현재 name을 editName으로 설정하고 edit 모드 on
            if (!isEditing) {
              setEditName(course.name);
              setIsEditing(true);
            }
            //Confirm 클릭시 onEdit 호출하고 edit 모드 종료 
            else {
              onEdit(course.id, editName);
              setIsEditing(false);
            }
          }}
        >
          {isEditing ? "Confirm" : "Edit"}
        </button>
        <button
          className="btn danger"
          type="button"
          onClick={() => onDelete(course.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
