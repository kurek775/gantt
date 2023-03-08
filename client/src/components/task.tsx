import DayRow from "./dayrow";

interface TaskProps {
    name: string;
    note: string;
    parent: string;
    start: Date;
    end: Date;
    pstart: Date;
    pend: Date;
}
 
const Task: React.FC<TaskProps> = (TaskProps) => {

  
    return (<>
    <div className="task">  <h2>{TaskProps.name}</h2>   <DayRow start={TaskProps.start} end={TaskProps.end} 
    pstart={TaskProps.pstart} pend={TaskProps.pend}></DayRow></div>
    </>  );
}
 
export default Task;