import { useState } from "react";
import Arrays from "../../util/Arrays";
import Select, { Value } from "../form/Select";
import InputLabel from "../form/InputLabel";
import { FormChangeEvent } from "../form/Form";

const yearSpan = 120;

interface Props {
  title: string;
  onChange: (e: FormChangeEvent) => void;
  name: string;
  className?: string;
  required?: boolean;
  error?: string;
}

const DateSelector = ({
  title,
  onChange,
  name,
  className,
  error,
  required = true,
}: Props) => {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();

  const getDaysForMonth = (currentYear: number, currentMonth: number) => {
    return currentMonth == undefined
      ? 31
      : new Date(currentYear, (currentMonth as number) + 1, 0).getDate();
  };

  const currentYear = new Date().getFullYear();
  const amountOfDays = getDaysForMonth(year || 0, month as number);
  const yearArray = Arrays.arrayFromRange(currentYear, currentYear - yearSpan);
  const monthArray = [
    "January",
    "February",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  const dayArray = Arrays.arrayFromRange(amountOfDays, 1);

  const adjustDay = (currentYear: number, currentMonth: number) => {
    if (day == undefined) return;

    const days = getDaysForMonth(currentYear || 0, currentMonth);

    if (days < day) setDay(days);
  };

  const handleChange = (
    currentYear: number,
    currentMonth: number,
    currentDay: number
  ) => {
    const newDate = new Date(
      currentYear as number,
      currentMonth as number,
      currentDay as number
    ).toString();

    if (newDate === "Invalid Date") return;

    onChange({
      target: {
        name: name,
        value: newDate,
        type: "dateInput",
      },
    } as FormChangeEvent);
  };

  const handleYearSelect = (currentYear: Value) => {
    const newYear = parseInt(currentYear as string);
    setYear(newYear);
    adjustDay(newYear, month as number);
    handleChange(newYear, month as number, day as number);
  };

  const handleMonthSelect = (month: Value) => {
    const newMonth = monthArray.indexOf(month as string);
    setMonth(monthArray.indexOf(month as string));
    adjustDay(year as number, newMonth);
    handleChange(year as number, newMonth, day as number);
  };

  const handleDaySelect = (day: Value) => {
    setDay(parseInt(day as string));
    handleChange(year as number, month as number, day as number);
  };

  return (
    <div className={`date-selector ${className}`}>
      <InputLabel
        title={title}
        className="register"
        required={required}
        error={error}
      ></InputLabel>
      <div className="select-container">
        <Select
          value={year || "Year"}
          name="year"
          list={yearArray}
          onSelect={handleYearSelect}
        ></Select>
        <Select
          value={monthArray.find((_, i) => i === month) || "Month"}
          name="month"
          list={monthArray}
          onSelect={handleMonthSelect}
        ></Select>
        <Select
          value={day || "Day"}
          name="day"
          list={dayArray}
          onSelect={handleDaySelect}
        ></Select>
      </div>
    </div>
  );
};

export default DateSelector;
