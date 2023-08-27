import React, { useState, useEffect, useRef } from 'react';
import { CountdownStyled, ChronoMeter, ResetBtn, SubmitBtn, FormWrapper } from '../styled/CountdownStyled';
import { GlassWrapperWithAnimation } from '../styled/GlassStyled';

type Time = {
    all: number,
    seconds: number,
    minutes: number,
    hours: number,
}


export const CountdownTimerComponent: React.FC = () => {
    const [counter, setCounter] = useState<string>('00:00:00');
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);

    let intervalRef = useRef<NodeJS.Timer | null>(null);

    const calculateTimeDifference = (event: string): Time => {

        const timeDifference = Date.parse(event) - new Date().getTime();
        const seconds = Math.max(Math.floor((timeDifference / 1000) % 60), 0);
        const minutes = Math.max(Math.floor((timeDifference / 1000 / 60) % 60), 0);
        const hours = Math.max(Math.floor((timeDifference / 1000 / 60 / 60) % 24), 0);

        return { all: timeDifference, seconds, minutes, hours };
    };
    const formatTime = (time: Time) => {
        const { seconds, minutes, hours } = time;

        return (`${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`);
    };

    const resetTimer = (startTime: string) => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        const intervalId = setInterval(() => {

            const timeDiff = calculateTimeDifference(startTime);
            setCounter(formatTime(timeDiff));

            if (timeDiff.all <= 0) {
                clearInterval(intervalId)
            }

        }, 1000);

        intervalRef.current = intervalId;
    };

    const setCustomTime = () => {
        const currentTime = calculateCustomTime();

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            resetTimer(currentTime);
        }
    }

    const calculateCustomTime = (): string => {
        const customTime = new Date();

        customTime.setSeconds(customTime.getSeconds() + (seconds) + 2);
        customTime.setMinutes(customTime.getMinutes() + (minutes))
        customTime.setHours(customTime.getHours() + (hours))

        return customTime.toISOString();
    }

    useEffect(() => {
        resetTimer(new Date().toISOString());
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        };
    }, []);

    const handleReset = () => {
        resetTimer(new Date().toISOString());
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<number>>) => {
        const value = parseInt(event.target.value);

        if (!isNaN(value)) {
            setValue(Math.max(value, 0))
        } else {
            setValue(0)
        }
    };
    const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(event, setSeconds)
    };
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(event, setMinutes)
    };
    const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(event, setHours)
    }


    const handleCustomTimeSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setCustomTime();
        resetTimer(calculateCustomTime());
    }




    return (
        <GlassWrapperWithAnimation>
            <CountdownStyled>
                <ChronoMeter>{counter}</ChronoMeter>
                <ResetBtn onClick={handleReset}>Reset</ResetBtn>
                <SubmitBtn onClick={handleCustomTimeSubmit}>Set Countdown</SubmitBtn>
                <FormWrapper>

                    <form action="submit">
                        <label htmlFor="seconds">seconds</label>
                        <input
                            type="text"
                            value={seconds}
                            id="seconds"
                            onChange={handleSecondsChange}
                        />
                        <label htmlFor="minutes">minutes</label>
                        <input
                            type='text'
                            value={minutes}
                            id='minutes'
                            onChange={handleMinutesChange}
                        />
                        <label htmlFor="hours">hours</label>
                        <input
                            type="text"
                            value={hours}
                            id='hours'
                            onChange={handleHoursChange}
                        />
                    </form>
                </FormWrapper>
            </CountdownStyled>
        </GlassWrapperWithAnimation>
    )
};