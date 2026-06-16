import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";

const FlashSales = () => {
  const [time, setTime] = useState({
    days: 1,
    hours: 2,
    minutes: 1,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
   <>
   <Container>
     <section className="py-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">Today's</span>
      </div>

      <div className="flex items-center gap-12 mb-10">
        <h2 className="text-4xl font-bold">Flash Sales</h2>

        <div className="flex gap-8">
          <div>
            <p className="text-xs">Days</p>
            <h3 className="text-3xl font-bold">{time.days}</h3>
          </div>

          <div>
            <p className="text-xs">Hours</p>
            <h3 className="text-3xl font-bold">{time.hours}</h3>
          </div>

          <div>
            <p className="text-xs">Minutes</p>
            <h3 className="text-3xl font-bold">{time.minutes}</h3>
          </div>

          <div>
            <p className="text-xs">Seconds</p>
            <h3 className="text-3xl font-bold">{time.seconds}</h3>
          </div>
        </div>
      </div>
    </section>
   </Container>
   </>
  );
};

export default FlashSales;