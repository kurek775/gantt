import { useState, useEffect } from 'react'
import Day from './day';

interface DayRowProps {
    start: Date;
    end: Date;
    periods: any;
}

const DayRow: React.FC<DayRowProps> = (DayRowProps) => {
    const [dates, setDates]: any = useState();
    const [period, setPeriod]: any = useState();
    function getDatesInRange(startDate: Date, endDate: Date) {
        const date = new Date(startDate.getTime());

        const dat = [];

        while (date <= endDate) {

            dat.push({ day: new Date(date).toLocaleDateString() });
            date.setDate(date.getDate() + 1);
        }

        return dat;
    }

    useEffect(() => {
        setDates(getDatesInRange(DayRowProps.start, DayRowProps.end));
        let perr: any = (DayRowProps.periods?.map((period: any) =>
            getDatesInRange(new Date(period.start), new Date(period.end))
        ))
        
        let data: any = [];
        perr?.map((per: any) =>
        per.map((item: any) => data.push(item))
        );
        setPeriod(data);

    }, [])


    return (<div><div className='dayrow'>
        {dates?.map((day: any) => (

            <div className={period
                ?.filter((dy: any) => day.day === dy.day) // Filter the period array to only include matching days
                .map((dy: any) => 'period') // Map over the filtered array and return 'task' for each element
                .join(' ') // Join the resulting array of class names into a single string with a space separator
            }> <Day date={day.day}></Day></div>

        )
        )}


    </div>

    </div>);
}

export default DayRow;