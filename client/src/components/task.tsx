import DayRow from "./dayrow";

interface TaskProps {
    name: string;
    note: string;
    parent: string;
    periods: any;
    start: Date;
    end: Date;
   
}
 
const Task: React.FC<TaskProps> = (TaskProps) => {

  
    return (<>
    <div className="task"><div className="task-title"><h3>{TaskProps.name}</h3></div>   <DayRow start={TaskProps.start} end={TaskProps.end} 
    periods={TaskProps.periods}></DayRow></div>
    </>  );
}
 
export default Task;