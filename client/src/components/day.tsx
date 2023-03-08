interface DayProps {
    date: any;
}

const Day: React.FC<DayProps> = (DayProps) => {
    return (<div className="day">
        {DayProps.date}


    </div>);
}

export default Day;