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
    <div className="task">  <h2>{TaskProps.name}</h2>   <DayRow start={TaskProps.start} end={TaskProps.end} 
    periods={TaskProps.periods}></DayRow></div>
    </>  );
}
 
export default Task;